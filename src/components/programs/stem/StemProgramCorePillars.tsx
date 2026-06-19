import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const PILLARS = [
  {
    title: "Science",
    body: "The foundational concepts of science boil down to physics like motion, thermodynamics, and electromagnetic waves. These may seem like big words, but they can be broken down into simple, concrete ideas. KidsWow STEM explores these core physics concepts and makes them concrete through hands-on experience.",
  },
  {
    title: "Technology",
    body: "If we know a principle of physics, like motion, can we use it to make something we can actually see, feel, or use? That is basically the definition of technology. In KidsWow STEM, participants could explore using a magnet to generate electricity in order to light an LED. We might explore programming a computer chip and connecting to a motor or a sensor. This is the building blocks of genuine technological understanding.",
  },
  {
    title: "Engineering",
    body: "How do we turn an idea into a reality? In KidsWow STEM, participants learn about design, problem solving, and how to properly use tools and resources. The emphasis is on exploration, trial and error, and collaboration.",
  },
  {
    title: "Math",
    body: "If you are trying to make a machine, using Technology, Engineering, and Science, you need to ensure that it will all fit together and won\u2019t break or fall apart the moment you use it. Math is the precision behind science, tech, and engineering. KidsWow STEM gets kids in touch with the essential formulas and math principles to create work that lasts.",
  },
] as const;

export function StemProgramCorePillars() {
  return (
    <section className="bg-white/60 py-10 md:py-12 lg:py-14">
      <Container>
        <SectionHeading eyebrow="STEM" title="Core Pillars" align="center" />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:mt-14 lg:gap-8">
          {PILLARS.map((pillar) => (
            <article
              key={pillar.title}
              className="rounded-3xl bg-amber/15 p-8 ring-1 ring-amber/40 md:p-9"
            >
              <h3 className="font-display text-2xl font-bold text-navy md:text-3xl">
                {pillar.title}
              </h3>
              <p className="mt-4 text-lg leading-relaxed text-charcoal/85">
                {pillar.body}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
