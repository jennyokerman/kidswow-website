import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ProgramCardImage } from "@/components/home/ProgramCardImage";
import { SectionHeading } from "@/components/ui/SectionHeading";

const PROGRAMS = [
  {
    title: "KidsWow STEM",
    body: "Hands-on science, technology, engineering, and math to inspire kids to be leaders in the modern world.",
    href: "/programs/stem",
    buttonLabel: "Explore KidsWow STEM",
    image: "/programs/stem.png",
    imageAlt: "KidsWow STEM program",
    imageLabel: "Add stem.png to public/programs/",
  },
  {
    title: "Finance Foundations",
    body: "Practical financial education for teens and young adults — building confidence with money, wealth, and an entrepreneurial mindset.",
    href: "/programs/finance",
    buttonLabel: "Explore Finance Foundations",
    image: "/programs/finance.png",
    imageAlt: "Finance Foundations program",
    imageLabel: "Add finance.png to public/programs/",
  },
] as const;

export function PhysicsCreationOtherPrograms() {
  return (
    <section className="bg-sage/10 py-10 md:py-12 lg:py-14">
      <Container>
        <SectionHeading
          title="Explore More"
          description="Keep learning with our other hands-on programs"
          align="center"
        />

        <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-2 md:mt-12">
          {PROGRAMS.map((program) => (
            <article
              key={program.href}
              className="flex min-w-0 flex-col rounded-3xl bg-cream p-6 ring-1 ring-sage/25 md:p-7"
            >
              <ProgramCardImage
                src={program.image}
                alt={program.imageAlt}
                placeholderLabel={program.imageLabel}
              />
              <h3 className="mt-6 font-display text-xl font-bold text-navy md:text-2xl">
                {program.title}
              </h3>
              <p className="mt-3 flex-1 text-base leading-relaxed text-charcoal/85">
                {program.body}
              </p>
              <div className="mt-6">
                <ButtonLink
                  href={program.href}
                  size="md"
                  className="w-full text-center"
                >
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
