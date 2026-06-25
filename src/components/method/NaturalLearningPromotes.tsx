import { Container } from "@/components/ui/Container";

const PROMOTES = [
  "internal motivation",
  "problem solving",
  "creative thinking",
  "long-term retention",
  "curiosity",
] as const;

export function NaturalLearningPromotes() {
  return (
    <section className="bg-white/60 py-14 md:py-20">
      <Container>
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-sky">
          The Natural Learning Method Promotes:
        </p>
        <ul className="mt-5 flex flex-wrap justify-center gap-2 py-0.5 sm:gap-2.5 md:mt-6">
          {PROMOTES.map((item) => (
            <li
              key={item}
              className="rounded-full bg-cream px-3 py-1.5 text-xs font-semibold capitalize leading-tight text-navy ring-1 ring-sage/30 sm:px-4 sm:py-2 sm:text-sm"
            >
              {item}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}