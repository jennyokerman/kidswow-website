import { Fragment } from "react";
import { Container } from "@/components/ui/Container";

const STEPS = [
  {
    title: "Get a Little",
    body: "Don't overwhelm kids with too much information. Let them focus on what is most important.",
  },
  {
    title: "Learn What You Get",
    body: "Don't just lecture, try it, test it, and work to build true understanding.",
  },
  {
    title: "Use it a Lot",
    body: "Anything worth learning needs to be done often, repeated, learned until it becomes second nature almost like muscle memory.",
  },
  {
    title: "Evaluate",
    body: "The teacher is more of a coach or guide watching for curiosity, questions, and genuine competency so they can know the right time to introduce a new idea and progress to the next level of learning.",
  },
] as const;

function FlowArrow() {
  return (
    <>
      <div
        className="flex shrink-0 justify-center py-1 text-sky lg:hidden"
        aria-hidden
      >
        <svg
          className="h-6 w-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
      <div
        className="hidden shrink-0 items-center justify-center px-1 text-sky lg:flex"
        aria-hidden
      >
        <svg
          className="h-5 w-8"
          viewBox="0 0 32 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 12h20M18 6l6 6-6 6" />
        </svg>
      </div>
    </>
  );
}

export function MethodNutshell() {
  return (
    <section className="bg-sage/10 py-14 md:py-20 lg:py-24">
      <Container>
        <h2 className="text-center font-display text-3xl font-semibold text-navy md:text-4xl">
          The KidsWow Method in a Nutshell
        </h2>

        <div className="mx-auto mt-10 flex max-w-6xl flex-col lg:mt-12 lg:flex-row lg:items-stretch">
          {STEPS.map((step, index) => (
            <Fragment key={step.title}>
              {index > 0 ? <FlowArrow /> : null}
              <article className="min-w-0 flex-1 rounded-2xl bg-cream p-5 ring-1 ring-sage/25 md:p-6">
                <h3 className="font-display text-lg font-semibold text-navy md:text-xl">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/85 md:mt-3 md:text-base">
                  {step.body}
                </p>
              </article>
            </Fragment>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center font-display text-xl font-semibold text-navy md:mt-12 md:text-2xl">
          This is Learning the Natural Way.
        </p>
      </Container>
    </section>
  );
}
