import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const OUTCOMES = [
  "Build skills that will transfer to success in a future field of work",
  "Encourage entrepreneurial, hands-on experience instead of passive listening",
  "Spark curiosity so participants can pursue deeper study with the passion needed to succeed in a quickly changing world",
] as const;

export function StemProgramOutcomes() {
  return (
    <section className="w-full bg-sage/10 py-10 md:py-12 lg:py-14">
      <Container>
        <SectionHeading title="Outcomes" align="center" />

        <ol className="mx-auto mt-8 max-w-2xl list-none space-y-5 md:mt-10 md:max-w-3xl md:space-y-6">
          {OUTCOMES.map((outcome, index) => (
            <li key={outcome} className="flex gap-4 text-left">
              <span
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sky/20 text-sm font-bold text-sky md:h-9 md:w-9 md:text-base"
                aria-hidden
              >
                {index + 1}
              </span>
              <p className="pt-0.5 text-lg leading-relaxed text-charcoal/85 md:text-xl">
                {outcome}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
