import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const EXPERIENCE_CARDS = [
  {
    imageLabel: "Experience photo 1 coming soon",
    text: "The KidsWow facilitator demonstrates how a particular tool or machine works, shares a core concept, or connects ideas together.",
  },
  {
    imageLabel: "Experience photo 2 coming soon",
    text: "The participants are given structured but flexible time to gravitate toward their particular interest so they can learn for themselves.",
  },
  {
    imageLabel: "Experience photo 3 coming soon",
    text: "The KidsWow facilitator rotates through the room to ask and answer questions, notice what inspires each individual, and introduce new ideas for those ready to dive deeper.",
  },
] as const;

export function StemProgramExperience() {
  return (
    <section className="py-10 md:py-12 lg:py-14">
      <Container>
        <SectionHeading
          title="What is a KidsWow STEM Experience Like?"
          align="center"
        />

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3 lg:mt-14 lg:gap-10">
          {EXPERIENCE_CARDS.map((card) => (
            <article
              key={card.imageLabel}
              className="flex flex-col overflow-hidden rounded-3xl bg-sage/15 ring-1 ring-sage/30"
            >
              <div className="flex aspect-square w-full items-center justify-center bg-sage/15">
                <span className="px-4 text-center text-sm font-medium text-sage">
                  {card.imageLabel}
                </span>
              </div>
              <p className="p-6 text-left text-base leading-relaxed text-charcoal/85 md:p-7 md:text-lg">
                {card.text}
              </p>
            </article>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-center text-lg font-bold text-navy md:mt-12 md:text-xl">
          We forget what we hear. We remember what we do.
        </p>
      </Container>
    </section>
  );
}
