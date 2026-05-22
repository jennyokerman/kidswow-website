import { Container } from "@/components/ui/Container";
import { NaturalLearningPromotes } from "@/components/method/NaturalLearningPromotes";

export default function MethodPage() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <h1 className="font-display text-4xl font-semibold text-navy md:text-5xl">
          KidsWow Method
        </h1>
        <p className="mt-6 max-w-xl text-lg text-charcoal/80">
          Content coming soon
        </p>
        <NaturalLearningPromotes />
      </Container>
    </section>
  );
}
