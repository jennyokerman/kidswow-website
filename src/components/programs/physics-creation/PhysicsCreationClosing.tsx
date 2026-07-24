import { Container } from "@/components/ui/Container";
import { ContactCtaBand } from "@/components/ui/ContactCtaBand";
import { ProgramCardImage } from "@/components/home/ProgramCardImage";
import { ButtonLink } from "@/components/ui/Button";
import physicsCtaImage from "../../../../Kidswowpics1/STEMpage/dadteaching4.jpg";

const EXPLORE_PROGRAMS = [
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
    image: "/programs/finance.jpg",
    imageAlt: "Finance Foundations program",
    imageLabel: "Add finance.jpg to public/programs/",
  },
] as const;

export function PhysicsCreationClosing() {
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
        title="Reach Out Today"
        body={
          <>
            <p>
              STEM learning develops qualities that align closely with
              faith-driven leadership, such as disciplined thinking, problem
              solving,
              creativity, and perseverance. This is why it is so important that we
              learn that faith and science are in harmony.
            </p>
            <p className="mt-4">
              Get a group together to experience the{" "}
              <span className="font-semibold text-amber">
                &ldquo;WOW&rdquo;
              </span>{" "}
              of science and faith working in unison together.
            </p>
          </>
        }
        buttonLabel="Contact Us"
        image={physicsCtaImage}
        imageAlt="A KidsWow facilitator teaching a hands-on physics lesson"
        imageObjectPosition="40% 38%"
        imageWrapperClassName="relative mr-auto aspect-square w-full max-w-[16rem] justify-self-start overflow-hidden rounded-2xl ring-2 ring-amber/70 ring-offset-2 ring-offset-sky sm:max-w-[18rem] md:max-w-[20rem]"
      />
    </>
  );
}
