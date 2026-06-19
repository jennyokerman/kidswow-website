import Link from "next/link";

const STEPS = [
  {
    title: "Connect with us",
    description:
      "Tell us about your group, student ages, and whether you're interested in a semester program or a 2–3 day STEM camp.",
  },
  {
    title: "Learn by doing",
    description:
      "Students build, test, and explore through hands-on projects in physics, programming, and design.",
  },
  {
    title: "Keep exploring",
    description: null,
  },
] as const;

export function StemProgramHowItWorks() {
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
                  href="/programs/physics-creation"
                  className="font-semibold text-sky underline decoration-sky/40 underline-offset-4 hover:text-navy"
                >
                  Physics &amp; Creation
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
