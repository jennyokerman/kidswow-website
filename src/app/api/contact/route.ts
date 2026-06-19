import { NextResponse } from "next/server";
import { Resend } from "resend";
import {
  buildContactEmailHtml,
  formatContactSubmission,
  validateContactForm,
  type ContactFormData,
} from "@/lib/contact-form";

const MIN_FORM_SECONDS = 4;
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 5;

const rateLimit = new Map<string, { count: number; resetAt: number }>();

function getClientIp(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]?.trim() ?? "unknown";
  return request.headers.get("x-real-ip") ?? "unknown";
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const entry = rateLimit.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimit.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  entry.count += 1;
  return entry.count > RATE_LIMIT_MAX;
}

type ContactPayload = ContactFormData & {
  website?: string;
  formStartedAt?: number;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;
    const ip = getClientIp(request);

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many submissions. Please try again in a minute." },
        { status: 429 },
      );
    }

    // Honeypot — bots often fill hidden fields
    if (body.website?.trim()) {
      return NextResponse.json({ ok: true });
    }

    // Too-fast submission suggests automation
    if (
      typeof body.formStartedAt === "number" &&
      Date.now() - body.formStartedAt < MIN_FORM_SECONDS * 1000
    ) {
      return NextResponse.json({ ok: true });
    }

    const { website: _website, formStartedAt: _started, ...formData } = body;
    const errors = validateContactForm(formData);

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        { error: "Please complete all required fields." },
        { status: 400 },
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL;
    const fromEmail =
      process.env.CONTACT_FROM_EMAIL ?? "KidsWow Contact <onboarding@resend.dev>";

    if (!resendApiKey || !toEmail) {
      console.error("Missing RESEND_API_KEY or CONTACT_TO_EMAIL");
      return NextResponse.json(
        {
          error:
            "Contact form is not configured yet. Please try again later or reach out on social media.",
        },
        { status: 503 },
      );
    }

    const formatted = formatContactSubmission(formData);
    const resend = new Resend(resendApiKey);

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: formatted.email,
      subject: `KidsWow Program Inquiry — ${formatted.fullName}`,
      html: buildContactEmailHtml(formatted),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "We could not send your message. Please try again." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
