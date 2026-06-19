import { Container } from "@/components/ui/Container";

export function StemProgramProblemSolution() {
  return (
    <section className="py-10 md:py-12 lg:py-14">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:gap-6">
          <div className="rounded-3xl bg-white/80 p-8 ring-1 ring-navy/10 md:p-9">
            <h2 className="font-display text-xl font-bold text-navy md:text-2xl">
              The Problem
            </h2>
            <p className="mt-4 leading-relaxed text-charcoal/85">
              STEM programs and products are plentiful. Many are just expensive
              entertainment. At the end, participants may walk away impressed,
              but they aren&apos;t empowered to learn on their own time. Other
              programs are packages for activities or videos that may not be worth
              the STEM program price.
            </p>
          </div>

          <p
            className="hidden text-center font-display text-2xl font-bold text-sky lg:block"
            aria-hidden
          >
            vs
          </p>

          <div className="relative rounded-3xl bg-sage/15 p-8 ring-1 ring-sage/30 md:p-9">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-sky px-4 py-1 text-xs font-bold uppercase tracking-wider text-white lg:hidden">
              vs
            </span>
            <h2 className="font-display text-xl font-bold text-navy md:text-2xl">
              The Solution
            </h2>
            <div className="mt-4 space-y-4 leading-relaxed text-charcoal/85">
              <p>
                What if there was a program built on the engineering method where
                hands-on projects are combined with a genuine STEM curriculum?
              </p>
              <p className="font-display text-lg font-semibold text-navy md:text-xl">
                Welcome to KidsWow STEM!
              </p>
              <p>
                KidsWow STEM aims to balance fun and rigor to equip participants,
                so they can walk away saying, &ldquo;I want to learn more.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
