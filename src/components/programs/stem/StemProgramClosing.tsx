import { Container } from "@/components/ui/Container";
import { ContactCtaBand } from "@/components/ui/ContactCtaBand";
import { ProgramCardImage } from "@/components/home/ProgramCardImage";
import { ButtonLink } from "@/components/ui/Button";
import stemCtaImage from "../../../../Kidswowpics1/happytogether3.jpg";

const EXPLORE_PROGRAMS = [
  {
    title: "Physics & Creation",
    body: "Experience “Let There Be Light” — biblical foundation and modern physics brought to life through light, waves, and motion.",
    href: "/programs/physics-creation",
    buttonLabel: "Explore Physics & Creation",
    image: "/programs/physics-creation.jpg",
    imageAlt: "Physics and Creation program",
    imageLabel: "Add physics-creation.jpg to public/programs/",
  },
  {
    title: "Finance Foundations",
    body: "Practical financial education for teens and young adults — building confidence with money, wealth, and an entrepreneurial mindset.",
    href: "/programs/finance",
    buttonLabel: "Explore Finance Foundations",
    image: "/programs/finance.jpg",
    imageAlt: "Finance Foundations program",
    imageLabel: "Add finance.jpg to public/programs/",
  },
] as const;

export function StemProgramClosing() {
  return (
    <>
      <section className="py-20 md:py-28">
        <Container>
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="font-display text-2xl font-semibold text-navy md:text-3xl">
              Explore More
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-charcoal/80 md:text-lg">
              Other KidsWow programs your family might love.
            </p>
          </div>

          <div className="mx-auto mt-8 grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-2 md:mt-10">
            {EXPLORE_PROGRAMS.map((program) => (
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

      <ContactCtaBand
        title="Ready to Bring KidsWow STEM to You?"
        body={
          <>
            <p>
              At KidsWow, kids aren&apos;t just listening—they&apos;re building,
              testing, and seeing concepts in real time. We&apos;ve already tested
              it with 75+ students. The response has been amazing.
            </p>
            <p className="mt-4">
              KidsWow STEM is looking for families and community partners in the
              Kansas City Metro who want to invest in practical, real-world STEM
              education.
            </p>
          </>
        }
        buttonLabel="Let's Connect"
        image={stemCtaImage}
        imageAlt="Kids happily learning together at KidsWow"
        imagePosition="left"
        fullWidthTitle
      />
    </>
  );
}
