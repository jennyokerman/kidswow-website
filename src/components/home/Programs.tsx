import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProgramCardImage } from "./ProgramCardImage";

const PROGRAMS = [
  {
    title: "Physics & Creation",
    body: "KidsWow brings to life the biblical foundation of the universe with the modern understanding of light, electromagnetic waves, and motion. Experience “Let There Be Light” in a dynamic 30-minute to 3-hour experience perfect to inspire kids.",
    href: "/programs/physics-creation",
    buttonLabel: "Explore Physics & Creation",
    image: "/programs/physics-creation.png",
    imageAlt: "Physics and Creation program",
    imageLabel: "Add physics-creation.png to public/programs/",
  },
  {
    title: "KidsWow STEM",
    body: "Through science, technology, engineering, and math, kids see an idea turned into concrete experience. They don’t just learn about electricity or motors, they get to use and make what they learn about. We use a “physics first” approach to truly equip and inspire KidsWow participants with a groundwork that will never change.",
    href: "/programs/stem",
    buttonLabel: "Explore KidsWow STEM",
    image: "/programs/stem.png",
    imageAlt: "KidsWow STEM program",
    imageLabel: "Add stem.png to public/programs/",
  },
  {
    title: "Finance Foundations",
    body: "KidsWow Finance Foundations combines concrete practice with essential financial education to equip participants to become confident masters of their finances. They learn how to grow and protect wealth and discover the entrepreneurial mindset. This program is perfect for 10th grade and above.",
    href: "/programs/finance",
    buttonLabel: "Explore Finance Foundations",
    image: "/programs/finance.png",
    imageAlt: "Finance Foundations program",
    imageLabel: "Add finance.png to public/programs/",
  },
] as const;

export function Programs() {
  return (
    <section id="programs" className="bg-white/60 py-20 md:py-28">
      <Container>
        <SectionHeading title="Programs" align="center" />

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {PROGRAMS.map((program) => (
            <article
              key={program.href}
              className="flex min-w-0 flex-col rounded-3xl bg-cream p-6 ring-1 ring-sage/20 md:p-7"
            >
              <div className="mx-auto w-full max-w-[12rem] lg:max-w-none">
                <ProgramCardImage
                  src={program.image}
                  alt={program.imageAlt}
                  placeholderLabel={program.imageLabel}
                />
              </div>
              <h3 className="mt-6 font-display text-xl font-bold text-navy md:text-2xl">
                {program.title}
              </h3>
              <p className="mt-4 flex-1 text-base leading-relaxed text-charcoal/80">
                {program.body}
              </p>
              <div className="mt-8">
                <ButtonLink href={program.href} size="md" className="w-full text-center">
                  {program.buttonLabel}
                </ButtonLink>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
