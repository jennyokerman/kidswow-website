import Image, { type StaticImageData } from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import dadTeaching6 from "../../../../Kidswowpics1/STEMpage/dadteaching6.png";
import kidsWithRobots from "../../../../Kidswowpics1/STEMpage/kidswithrobots.png";
import kidsWowStory3 from "../../../../Kidswowpics1/STEMpage/kidswowstory3.jpg";

const EXPERIENCE_CARDS: {
  image: StaticImageData;
  imageAlt: string;
  text: string;
}[] = [
  {
    image: dadTeaching6,
    imageAlt: "KidsWow facilitator teaching a STEM concept",
    text: "The KidsWow facilitator demonstrates how a particular tool or machine works, shares a core concept, or connects ideas together.",
  },
  {
    image: kidsWowStory3,
    imageAlt: "Students exploring with flexible, hands-on STEM time",
    text: "The participants are given structured but flexible time to gravitate toward their particular interest so they can learn for themselves.",
  },
  {
    image: kidsWithRobots,
    imageAlt: "Students working deeply on robotics projects",
    text: "The KidsWow facilitator rotates through the room to ask and answer questions, notice what inspires each individual, and introduce new ideas for those ready to dive deeper.",
  },
];

export function StemProgramExperience() {
  return (
    <section className="py-10 md:py-12 lg:py-14">
      <Container>
        <SectionHeading
          title="What is a KidsWow STEM Experience Like?"
          align="center"
        />

        <div className="mt-12 grid grid-cols-3 gap-2 sm:gap-4 lg:mt-14 lg:gap-6">
          {EXPERIENCE_CARDS.map((card) => (
            <article key={card.imageAlt} className="min-w-0">
              <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-sage/15 ring-1 ring-sage/30 sm:rounded-2xl">
                <Image
                  src={card.image}
                  alt={card.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 31vw, 320px"
                />
              </div>
              <p className="mt-3 text-left text-xs leading-relaxed text-charcoal/85 sm:mt-4 sm:text-sm md:text-base lg:text-lg">
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
