import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ProgramCardImage } from "@/components/home/ProgramCardImage";

const PROGRAMS = [
  {
    title: "Physics & Creation",
    body: "Experience “Let There Be Light” — biblical foundation and modern physics brought to life through light, waves, and motion.",
    href: "/programs/physics-creation",
    buttonLabel: "Explore Physics & Creation",
    image: "/programs/physics-creation.png",
    imageAlt: "Physics and Creation program",
    imageLabel: "Add physics-creation.png to public/programs/",
  },
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

export function MethodFinalCta() {
  return (
    <section className="bg-sage/10 py-20 md:py-28">
      <Container>
        <div className="mx-auto max-w-5xl text-center xl:max-w-6xl">
          <h2 className="text-balance font-display text-3xl font-semibold leading-tight text-navy md:text-4xl lg:text-[2.65rem] lg:leading-snug xl:text-5xl">
            Imagine what we could learn using a natural learning process.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-charcoal/80">
            KidsWow STEM, physics, finance… you name it!
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 md:mt-12">
          {PROGRAMS.map((program) => (
            <article
              key={program.href}
              className="flex min-w-0 flex-col rounded-3xl bg-cream p-6 ring-1 ring-sage/25 md:p-7"
            >
              <div className="mx-auto w-full max-w-[10rem] sm:max-w-[11rem]">
                <ProgramCardImage
                  src={program.image}
                  alt={program.imageAlt}
                  placeholderLabel={program.imageLabel}
                />
              </div>
              <h3 className="mt-6 text-center font-display text-xl font-bold text-navy md:text-2xl">
                {program.title}
              </h3>
              <p className="mt-3 flex-1 text-left text-base leading-relaxed text-charcoal/85">
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
