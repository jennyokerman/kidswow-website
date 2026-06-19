import Link from "next/link";

const STEPS = [
  {
    title: "Book a session",
    description:
      "Tell us the age group, location, and preferred length.",
  },
  {
    title: "Experience it",
    description:
      "Show-and-tell demonstration combined with hands-on exploration.",
  },
  {
    title: "Continue learning",
    description: null,
  },
] as const;

export function PhysicsCreationHowItWorks() {
  return (
    <ol className="mx-auto mt-8 max-w-3xl space-y-6">
      {STEPS.map((step, index) => (
        <li key={step.title} className="flex gap-4 md:gap-5">
          <span
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sky/20 text-sm font-bold text-sky"
            aria-hidden
          >
            {index + 1}
          </span>
          <div>
            <p className="font-display text-lg font-semibold text-navy md:text-xl">
              {step.title}
            </p>
            {step.description ? (
              <p className="mt-1 text-base leading-relaxed text-charcoal/85 md:text-lg">
                {step.description}
              </p>
            ) : (
              <p className="mt-1 text-base leading-relaxed text-charcoal/85 md:text-lg">
                Check out{" "}
                <Link
                  href="/programs/stem"
                  className="font-semibold text-sky underline decoration-sky/40 underline-offset-4 hover:text-navy"
                >
                  KidsWow STEM
                </Link>{" "}
                and{" "}
                <Link
                  href="/programs/finance"
                  className="font-semibold text-sky underline decoration-sky/40 underline-offset-4 hover:text-navy"
                >
                  Finance Foundations
                </Link>
                .
              </p>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}
