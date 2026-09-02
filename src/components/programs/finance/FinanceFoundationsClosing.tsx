import { Container } from "@/components/ui/Container";
import { ContactCtaBand } from "@/components/ui/ContactCtaBand";
import { ProgramCardImage } from "@/components/home/ProgramCardImage";
import { ButtonLink } from "@/components/ui/Button";
import financeCtaImage from "../../../../Kidswowpics1/money.png";

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
    title: "Physics & Creation",
    body: "Experience “Let There Be Light” — biblical foundation and modern physics brought to life through light, waves, and motion.",
    href: "/programs/physics-creation",
    buttonLabel: "Explore Physics & Creation",
    image: "/programs/physics-creation.jpg",
    imageAlt: "Physics and Creation program",
    imageLabel: "Add physics-creation.jpg to public/programs/",
  },
] as const;

export function FinanceFoundationsClosing() {
  return (
    <>
      <section className="bg-sage/10 py-20 md:py-28">
        <Container>
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="text-center font-display text-3xl font-semibold text-navy md:text-4xl">
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
        title="Ready to Build Financial Confidence?"
        body={
          <>
            <p>
              Finance Foundations gives young adults the practical tools to
              handle money with confidence instead of fear. Whether you&apos;re a
              homeschool family, church youth group, or group of friends in
              college, we&apos;d love to hear about your group.
            </p>
            <p className="mt-4">
              KidsWow is looking for partners in the Kansas City Metro who want
              to invest in real-world financial education for the next
              generation.
            </p>
          </>
        }
        buttonLabel="Let's Connect"
        image={financeCtaImage}
        imageAlt="Financial education and money management concepts"
        imagePosition="left"
        fullWidthTitle
      />
    </>
  );
}
