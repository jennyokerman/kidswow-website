"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { ContactConfirmation } from "@/components/contact/ContactConfirmation";
import { ContactProgressBar } from "@/components/contact/ContactProgressBar";
import {
  ContactTurnstile,
} from "@/components/contact/ContactTurnstile";
import {
  FieldGroup,
  RadioGroup,
  SelectInput,
  TextArea,
  TextInput,
} from "@/components/contact/ContactFormFields";
import {
  AGE_GROUP_OPTIONS,
  BUDGET_OPTIONS,
  clampContactField,
  CONTACT_FIELD_LIMITS,
  DECISION_MAKER_OPTIONS,
  GROUP_TYPE_OPTIONS,
  INITIAL_CONTACT_FORM,
  PROGRAM_LENGTH_OPTIONS,
  PROGRAM_LOCATION_OPTIONS,
  type ContactFormData,
  type ContactFormErrors,
  validateContactForm,
} from "@/lib/contact-form";
import { CONTACT_TIMING } from "@/lib/contact-security";

const STEP_INTROS = [
  {
    eyebrow: "Step 1 of 3",
    title: "Nice to meet you!",
    body: "Let's start with the basics so we know who we are talking to and where you are located.",
  },
  {
    eyebrow: "Step 2 of 3",
    title: "Let's get to know you!",
    body: "Tell us about your group so we can tailor the experience.",
  },
  {
    eyebrow: "Step 3 of 3",
    title: "Almost there!",
    body: "A few last questions to make sure the timing and fit are right for everyone.",
  },
] as const;

export function ContactForm({
  turnstileSiteKey,
}: {
  turnstileSiteKey?: string;
}) {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<ContactFormData>(INITIAL_CONTACT_FORM);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [hpWebsite, setHpWebsite] = useState("");
  const [hpSubject, setHpSubject] = useState("");
  const [turnstileToken, setTurnstileToken] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const formStartedAt = useRef(Date.now());
  const formReadyAt = useRef<number | null>(null);
  const turnstileEnabled = Boolean(turnstileSiteKey);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      formReadyAt.current = Date.now();
    }, CONTACT_TIMING.honeypotReadyDelayMs);

    return () => window.clearTimeout(timer);
  }, []);

  const intro = STEP_INTROS[step - 1];

  const updateField = <K extends keyof ContactFormData>(
    key: K,
    value: ContactFormData[K],
  ) => {
    const nextValue =
      typeof value === "string" && key in CONTACT_FIELD_LIMITS
        ? (clampContactField(
            key as keyof typeof CONTACT_FIELD_LIMITS,
            value,
          ) as ContactFormData[K])
        : value;

    setForm((current) => ({ ...current, [key]: nextValue }));
    if (errors[key]) {
      setErrors((current) => {
        const next = { ...current };
        delete next[key];
        return next;
      });
    }
  };

  const firstErrorStep = useMemo(() => {
    const step1Fields: (keyof ContactFormData)[] = [
      "fullName",
      "email",
      "phone",
      "cityState",
      "programLocation",
    ];
    const step2Fields: (keyof ContactFormData)[] = [
      "groupType",
      "groupTypeOther",
      "numKids",
      "ageGroup",
      "ageGroupOther",
      "winForKids",
    ];
    const step3Fields: (keyof ContactFormData)[] = [
      "programLength",
      "budget",
      "decisionMaker",
      "readyForDeposit",
      "howDidYouHear",
    ];

    if (step1Fields.some((field) => errors[field])) return 1;
    if (step2Fields.some((field) => errors[field])) return 2;
    if (step3Fields.some((field) => errors[field])) return 3;
    return step;
  }, [errors, step]);

  const handleSubmit = async () => {
    const validationErrors = validateContactForm(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      const errorStep = (() => {
        const step1Fields: (keyof ContactFormData)[] = [
          "fullName",
          "email",
          "phone",
          "cityState",
          "programLocation",
        ];
        const step2Fields: (keyof ContactFormData)[] = [
          "groupType",
          "groupTypeOther",
          "numKids",
          "ageGroup",
          "ageGroupOther",
          "winForKids",
        ];
        if (step1Fields.some((field) => validationErrors[field])) return 1;
        if (step2Fields.some((field) => validationErrors[field])) return 2;
        return 3;
      })();
      setStep(errorStep);
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");

    if (turnstileEnabled && !turnstileToken) {
      setSubmitError("Please complete the verification check before submitting.");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          _hpWebsite: hpWebsite,
          _hpSubject: hpSubject,
          formStartedAt: formStartedAt.current,
          formReadyAt: formReadyAt.current ?? undefined,
          turnstileToken,
        }),
      });

      if (!response.ok) {
        const payload = (await response.json().catch(() => null)) as
          | { error?: string }
          | null;
        throw new Error(payload?.error ?? "Something went wrong. Please try again.");
      }

      setShowConfirmation(true);
      setForm(INITIAL_CONTACT_FORM);
      setStep(1);
      setErrors({});
      setTurnstileToken("");
      formStartedAt.current = Date.now();
      formReadyAt.current = Date.now();
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="rounded-3xl bg-white/80 p-6 shadow-sm ring-1 ring-navy/10 md:p-8 lg:p-10">
        <div className="mb-8 text-center">
          <h2 className="font-display text-2xl font-semibold text-navy md:text-3xl">
            KidsWow Program Inquiry
          </h2>
          <div
            className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-sky via-sky/80 to-sky/30"
            aria-hidden
          />
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-charcoal/80">
            We work with families, schools, homeschool groups, churches—you name
            it. This form helps us get to know you so we can find the best way
            to serve you. We look forward to hearing from you!
          </p>
        </div>

        <ContactProgressBar currentStep={step} />

        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-sky">
            {intro.eyebrow}
          </p>
          <h3 className="mt-2 font-display text-xl font-semibold text-navy md:text-2xl">
            {intro.title}
          </h3>
          <p className="mt-2 text-base leading-relaxed text-charcoal/75">
            {intro.body}
          </p>
        </div>

        <form
          className="relative"
          onSubmit={(event) => {
            event.preventDefault();
            if (step < 3) {
              setStep((current) => current + 1);
            } else {
              void handleSubmit();
            }
          }}
          noValidate
        >
          {/* Honeypot fields — hidden from real users, ignored by autofill */}
          <div
            className="pointer-events-none absolute -left-[9999px] h-0 w-0 overflow-hidden opacity-0"
            aria-hidden
          >
            <label htmlFor="_hpWebsite">Company website</label>
            <input
              id="_hpWebsite"
              name="_hpWebsite"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={hpWebsite}
              onChange={(event) => setHpWebsite(event.target.value)}
            />
            <label htmlFor="_hpSubject">Email subject</label>
            <input
              id="_hpSubject"
              name="_hpSubject"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={hpSubject}
              onChange={(event) => setHpSubject(event.target.value)}
            />
          </div>

          {step === 1 && (
            <div className="space-y-6">
              <FieldGroup label="Full name" required error={errors.fullName}>
                <TextInput
                  value={form.fullName}
                  onChange={(value) => updateField("fullName", value)}
                  placeholder="Your Name"
                  autoComplete="name"
                  maxLength={CONTACT_FIELD_LIMITS.fullName}
                />
              </FieldGroup>

              <FieldGroup label="Email address" required error={errors.email}>
                <TextInput
                  type="email"
                  value={form.email}
                  onChange={(value) => updateField("email", value)}
                  placeholder="yourname@email.com"
                  autoComplete="email"
                  maxLength={CONTACT_FIELD_LIMITS.email}
                />
              </FieldGroup>

              <FieldGroup label="Phone number" required error={errors.phone}>
                <TextInput
                  type="tel"
                  value={form.phone}
                  onChange={(value) => updateField("phone", value)}
                  placeholder="(555) 000-0000"
                  autoComplete="tel"
                  maxLength={CONTACT_FIELD_LIMITS.phone}
                />
              </FieldGroup>

              <FieldGroup label="City and state" required error={errors.cityState}>
                <TextInput
                  value={form.cityState}
                  onChange={(value) => updateField("cityState", value)}
                  placeholder="e.g. Kansas City, MO"
                  autoComplete="address-level2"
                  maxLength={CONTACT_FIELD_LIMITS.cityState}
                />
              </FieldGroup>

              <FieldGroup
                label="Where would you like the program to take place?"
                required
                error={errors.programLocation}
              >
                <p className="mb-3 text-sm leading-relaxed text-charcoal/70">
                  KidsWow can host in the KC metro area, travel to your group if
                  the space works, or meet remotely.
                </p>
                <RadioGroup
                  name="programLocation"
                  value={form.programLocation}
                  onChange={(value) => updateField("programLocation", value)}
                  options={PROGRAM_LOCATION_OPTIONS}
                />
              </FieldGroup>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <FieldGroup
                label="What kind of group are you?"
                required
                error={errors.groupType || errors.groupTypeOther}
              >
                <SelectInput
                  value={form.groupType}
                  onChange={(value) => updateField("groupType", value)}
                  placeholder="Select one"
                  options={GROUP_TYPE_OPTIONS}
                />
                {form.groupType === "other" && (
                  <div className="mt-3">
                    <TextInput
                      value={form.groupTypeOther}
                      onChange={(value) => updateField("groupTypeOther", value)}
                      placeholder="Tell us about your group"
                      maxLength={CONTACT_FIELD_LIMITS.groupTypeOther}
                    />
                  </div>
                )}
              </FieldGroup>

              <FieldGroup
                label="Number of kids participating"
                required
                error={errors.numKids}
              >
                <TextInput
                  value={form.numKids}
                  onChange={(value) => updateField("numKids", value)}
                  placeholder="e.g. 8"
                  maxLength={CONTACT_FIELD_LIMITS.numKids}
                />
              </FieldGroup>

              <FieldGroup label="Group or organization name (if applicable)">
                <TextInput
                  value={form.organizationName}
                  onChange={(value) => updateField("organizationName", value)}
                  placeholder="e.g. Lenexa Homeschool Co-op"
                  maxLength={CONTACT_FIELD_LIMITS.organizationName}
                />
              </FieldGroup>

              <FieldGroup
                label="What age group best describes your kids?"
                required
                error={errors.ageGroup || errors.ageGroupOther}
              >
                <SelectInput
                  value={form.ageGroup}
                  onChange={(value) => updateField("ageGroup", value)}
                  placeholder="Select one"
                  options={AGE_GROUP_OPTIONS}
                />
                {form.ageGroup === "other_mixed" && (
                  <div className="mt-3">
                    <TextInput
                      value={form.ageGroupOther}
                      onChange={(value) => updateField("ageGroupOther", value)}
                      placeholder="Tell us the ages in your group"
                      maxLength={CONTACT_FIELD_LIMITS.ageGroupOther}
                    />
                  </div>
                )}
              </FieldGroup>

              <FieldGroup
                label="What would make this a win for your kids?"
                required
                error={errors.winForKids}
              >
                <TextArea
                  value={form.winForKids}
                  onChange={(value) => updateField("winForKids", value)}
                  placeholder="e.g. We would love for them to walk away excited about science and feeling more confident to try new things…"
                  maxLength={CONTACT_FIELD_LIMITS.winForKids}
                />
              </FieldGroup>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <FieldGroup
                label="What length sounds like the best fit?"
                required
                error={errors.programLength}
              >
                <SelectInput
                  value={form.programLength}
                  onChange={(value) => updateField("programLength", value)}
                  placeholder="Select one"
                  options={PROGRAM_LENGTH_OPTIONS}
                />
              </FieldGroup>

              <FieldGroup label="When are you hoping to do this?">
                <p className="mb-3 text-sm leading-relaxed text-charcoal/70">
                  Please provide options for a start date, day of the week, time
                  of day, and frequency that work best for you. Or leave it open
                  for recommendation!
                </p>
                <TextArea
                  value={form.timingPreferences}
                  onChange={(value) => updateField("timingPreferences", value)}
                  placeholder="Share your preferred dates, days, times, or leave open for our recommendation"
                  rows={3}
                  maxLength={CONTACT_FIELD_LIMITS.timingPreferences}
                />
              </FieldGroup>

              <FieldGroup
                label="What type of budget are you working for? (each program will be different)"
                required
                error={errors.budget}
              >
                <SelectInput
                  value={form.budget}
                  onChange={(value) => updateField("budget", value)}
                  placeholder="Select one"
                  options={BUDGET_OPTIONS}
                />
              </FieldGroup>

              <FieldGroup
                label="Who makes the final decision to move forward?"
                required
                error={errors.decisionMaker}
              >
                <SelectInput
                  value={form.decisionMaker}
                  onChange={(value) => updateField("decisionMaker", value)}
                  placeholder="Select one"
                  options={DECISION_MAKER_OPTIONS}
                />
              </FieldGroup>

              <FieldGroup
                label="If we are a great fit, are you ready to put down a deposit to hold your spot?"
                required
                error={errors.readyForDeposit}
              >
                <TextArea
                  value={form.readyForDeposit}
                  onChange={(value) => updateField("readyForDeposit", value)}
                  placeholder="Yes we can't wait to work with you!"
                  rows={2}
                  maxLength={CONTACT_FIELD_LIMITS.readyForDeposit}
                />
              </FieldGroup>

              <FieldGroup
                label="How did you hear about us?"
                required
                error={errors.howDidYouHear}
              >
                <TextArea
                  value={form.howDidYouHear}
                  onChange={(value) => updateField("howDidYouHear", value)}
                  placeholder="We'd love to hear the story – what sparked your interest in this program?"
                  maxLength={CONTACT_FIELD_LIMITS.howDidYouHear}
                />
              </FieldGroup>

              {turnstileSiteKey && (
                <ContactTurnstile
                  siteKey={turnstileSiteKey}
                  onToken={setTurnstileToken}
                  onExpire={() => setTurnstileToken("")}
                />
              )}
            </div>
          )}

          {submitError && (
            <p className="mt-6 rounded-xl bg-red-50 px-4 py-3 text-sm font-medium text-red-700" role="alert">
              {submitError}
            </p>
          )}

          {Object.keys(errors).length > 0 && step === firstErrorStep && (
            <p className="mt-6 text-sm font-medium text-red-600" role="alert">
              Please complete all required fields marked with * before submitting.
            </p>
          )}

          <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
            {step > 1 ? (
              <Button
                type="button"
                variant="secondary"
                onClick={() => setStep((current) => current - 1)}
              >
                ← Back
              </Button>
            ) : (
              <span />
            )}

            {step < 3 ? (
              <Button type="submit" className="sm:ml-auto">
                Continue →
              </Button>
            ) : (
              <Button
                type="submit"
                className="sm:ml-auto"
                disabled={isSubmitting || (turnstileEnabled && !turnstileToken)}
              >
                {isSubmitting ? "Sending…" : "Submit"}
              </Button>
            )}
          </div>
        </form>
      </div>

      <p className="mt-8 text-center text-base font-medium text-charcoal/70">
        Thank-you for reaching out!
      </p>

      <ContactConfirmation
        open={showConfirmation}
        onClose={() => setShowConfirmation(false)}
      />
    </>
  );
}
