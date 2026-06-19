import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const THINGS_WE_USE = [
  "Powerful, intricate, shiny, complicated, beautiful to inspire new ideas.",
  "Heavy, spin, roll, float to help us understand motion.",
  "Old, futuristic, or from another culture to stretch our perspective beyond our own neighborhood.",
  "Bright, stick together, spark, or attract other objects to demonstrate magnetism or electricity and see what we can\u2019t usually see.",
] as const;

export function MethodLearningMaterials() {
  return (
    <section className="bg-white/60 py-10 md:py-12 lg:py-14">
      <Container>
        <SectionHeading title="KidsWow Learning Materials" align="center" />

        <div
          className="mx-auto mt-12 flex max-w-4xl flex-col justify-center rounded-2xl bg-sage/15 p-6 ring-1 ring-sage/25 md:mt-14 md:min-h-[320px] md:p-8 lg:aspect-video lg:min-h-0"
          role="region"
          aria-label="Video placeholder: things KidsWow uses to learn about the world"
        >
          <p className="text-center font-display text-xl font-semibold text-navy md:text-2xl">
            We use things that are&hellip;
          </p>
          <ul className="mx-auto mt-5 max-w-2xl list-disc space-y-3 pl-6 text-left text-base leading-relaxed text-charcoal/85 marker:text-sky md:mt-6 md:space-y-4 md:text-lg">
            {THINGS_WE_USE.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="mx-auto mt-10 max-w-3xl space-y-6 text-center text-lg leading-relaxed text-charcoal/85 md:mt-12 md:text-xl">
          <p>
            It all starts with &ldquo;show and tell&rdquo;. Then the magic
            happens.
          </p>
          <p className="font-bold text-navy">
            People of all ages, whether 3 or 83, eventually say, &ldquo;Wow,
            that is so cool!&rdquo;
          </p>
        </div>
      </Container>
    </section>
  );
}
