import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import heroImage from "../../../../Kidswowpics1/STEMpage/hero1.png";

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

        <ul className="mx-auto mt-10 max-w-3xl space-y-5 md:mt-12 md:space-y-6">
          {CATCH_QUESTIONS.map((question, index) => (
            <li
              key={question}
              className="flex justify-center gap-4 text-center text-lg leading-relaxed text-navy md:text-xl md:leading-relaxed"
            >
              <span
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky/20 text-sm font-bold text-sky md:h-9 md:w-9"
                aria-hidden
              >
                {index + 1}
              </span>
              <span className="max-w-2xl font-display">{question}</span>
            </li>
          ))}
        </ul>

        <div className="mx-auto mt-10 grid w-full max-w-5xl grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] items-center gap-4 sm:gap-6 md:mt-12 md:gap-10">
          <div className="relative aspect-[4/3] min-w-0 overflow-hidden rounded-2xl bg-sage/10 ring-1 ring-sage/25">
            <Image
              src={heroImage}
              alt="Student building a robotics project in the KidsWow STEM program"
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 40vw, 420px"
              priority
            />
          </div>

          <div className="min-w-0 space-y-4 text-left text-sm leading-relaxed text-charcoal/85 sm:space-y-5 sm:text-base md:text-lg md:leading-relaxed lg:text-xl">
            <p>If you said yes, it&apos;s time to explore KidsWow STEM.</p>
            <p>
              KidsWow STEM takes challenging topics like physics, programming, and
              design and turns them into bite-sized concepts and projects that are
              both small enough to be explored and big enough to be engaging and
              motivating.
            </p>
          </div>
        </div>

        <div className="mt-8 flex justify-center sm:mt-10">
          <ButtonLink href="/contact" size="lg">
            Contact Us
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
