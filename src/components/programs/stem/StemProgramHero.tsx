import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { StemProgramHeroImage } from "@/components/programs/stem/StemProgramHeroImage";

const CATCH_QUESTIONS = [
  "Do you ever wonder what kind of future you should be preparing your kids for?",
  "Do you wish you knew the strengths your child has inside, waiting to be unlocked?",
  "Do you feel unsure if you could explain the physics behind a refrigerator or car engine?",
] as const;

export function StemProgramHero() {
  return (
    <section className="bg-amber/10 py-10 md:py-12 lg:py-14">
      <Container>
        <h1 className="text-center font-display text-4xl font-semibold text-navy md:text-5xl lg:text-6xl">
          KidsWow STEM Program
        </h1>

        {/* Mobile: title → questions → image. Desktop: questions left, image right (matches home hero). */}
        <div className="mt-10 grid items-start gap-8 md:grid-cols-[minmax(0,1fr)_minmax(16rem,28rem)] md:items-center md:gap-10 lg:gap-14">
          <ul className="min-w-0 max-w-xl space-y-6 md:space-y-7">
            {CATCH_QUESTIONS.map((question, index) => (
              <li
                key={question}
                className="flex gap-4 text-lg leading-relaxed text-navy md:text-xl md:leading-relaxed"
              >
                <span
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky/20 text-sm font-bold text-sky md:h-9 md:w-9"
                  aria-hidden
                >
                  {index + 1}
                </span>
                <span className="font-display">{question}</span>
              </li>
            ))}
          </ul>
          <div className="w-full min-w-0 md:justify-self-end">
            <StemProgramHeroImage />
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-3xl space-y-5 text-center text-lg leading-relaxed text-charcoal/85 md:mt-12 md:text-left md:text-xl">
          <p>If you said yes, it&apos;s time to explore KidsWow STEM.</p>
          <p>
            KidsWow STEM takes challenging topics like physics, programming, and
            design and turns them into bite-sized concepts and projects that are
            both small enough to be explored and big enough to be engaging and
            motivating.
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          <ButtonLink href="/contact" size="lg">
            Contact Us
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
