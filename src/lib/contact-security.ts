import type { ContactFormData } from "@/lib/contact-form";
import {
  clampContactForm,
  CONTACT_FIELD_LIMITS as LIMITS,
  CONTACT_FIELD_MIN_LENGTHS as MIN_LENGTHS,
} from "@/lib/contact-form";

export { clampContactForm };

const URL_PATTERN = /https?:\/\/|www\.\S+/gi;
const MAX_URLS_IN_TEXT = 2;

const SPAM_PHRASES = [
  "seo services",
  "search engine optimization",
  "crypto",
  "bitcoin",
  "casino",
  "viagra",
  "click here",
  "buy now",
  "web traffic",
  "guest post",
  "backlink",
  "marketing agency",
  "increase your sales",
  "rank your website",
  "work from home",
  "make money fast",
  "loan offer",
  "forex",
  "nft",
];

const FREE_TEXT_FIELDS: (keyof ContactFormData)[] = [
  "fullName",
  "groupTypeOther",
  "organizationName",
  "ageGroupOther",
  "winForKids",
  "timingPreferences",
  "readyForDeposit",
  "howDidYouHear",
];

function countUrls(text: string) {
  return (text.match(URL_PATTERN) ?? []).length;
}

function containsSpamPhrase(text: string) {
  const lower = text.toLowerCase();
  return SPAM_PHRASES.some((phrase) => lower.includes(phrase));
}

export type ContactSpamResult =
  | { blocked: false }
  | { blocked: true; reason: string };

/** Server-side spam heuristics — returns generic reasons for logging only. */
export function detectContactSpam(data: ContactFormData): ContactSpamResult {
  const combinedText = FREE_TEXT_FIELDS.map((key) => data[key]).join(" ");

  if (countUrls(combinedText) > MAX_URLS_IN_TEXT) {
    return { blocked: true, reason: "too_many_urls" };
  }

  if (containsSpamPhrase(combinedText)) {
    return { blocked: true, reason: "spam_phrase" };
  }

  if (data.winForKids.trim().length < MIN_LENGTHS.winForKids) {
    return { blocked: true, reason: "win_for_kids_too_short" };
  }

  if (data.howDidYouHear.trim().length < MIN_LENGTHS.howDidYouHear) {
    return { blocked: true, reason: "how_did_you_hear_too_short" };
  }

  if (data.readyForDeposit.trim().length < MIN_LENGTHS.readyForDeposit) {
    return { blocked: true, reason: "deposit_answer_too_short" };
  }

  for (const key of Object.keys(LIMITS) as (keyof typeof LIMITS)[]) {
    if (data[key] && data[key].length > LIMITS[key]) {
      return { blocked: true, reason: `field_too_long:${key}` };
    }
  }

  return { blocked: false };
}

export const CONTACT_TIMING = {
  minFormAgeMs: 5_000,
  honeypotReadyDelayMs: 2_000,
} as const;

export type HoneypotPayload = {
  _hpWebsite?: string;
  _hpSubject?: string;
  formStartedAt?: number;
  formReadyAt?: number;
};

export function isHoneypotTriggered(payload: HoneypotPayload) {
  if (payload._hpWebsite?.trim() || payload._hpSubject?.trim()) {
    return true;
  }

  const started = payload.formStartedAt;
  const ready = payload.formReadyAt;

  if (typeof started !== "number" || typeof ready !== "number") {
    return true;
  }

  if (ready < started) {
    return true;
  }

  if (ready - started < CONTACT_TIMING.honeypotReadyDelayMs - 500) {
    return true;
  }

  if (Date.now() - started < CONTACT_TIMING.minFormAgeMs) {
    return true;
  }

  return false;
}

export async function verifyTurnstileToken(token: string, ip: string) {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  const siteKey = process.env.TURNSTILE_SITE_KEY;

  if (!secret || !siteKey) {
    return process.env.NODE_ENV !== "production";
  }

  if (!token.trim()) {
    return false;
  }

  const response = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret,
        response: token,
        remoteip: ip,
      }),
    },
  );

  const result = (await response.json()) as { success?: boolean };
  return result.success === true;
}
