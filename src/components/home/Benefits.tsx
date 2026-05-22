import { Container } from "@/components/ui/Container";

export function Benefits() {
  return (
    <section id="benefits" className="bg-sage/10 py-20 md:py-28">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-display text-3xl font-semibold leading-tight text-navy md:text-4xl lg:text-5xl">
            Have you noticed just how fast the world is changing?
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-charcoal/85 md:text-xl">
            KidsWow creates an environment where kids are valued, develop internal
            confidence, and gain real life experience to navigate an increasingly
            complex world.
          </p>

          <p className="mt-12 font-display text-xl font-semibold text-navy md:text-2xl">
            Kids are the future. Don&apos;t leave them behind.
          </p>
        </div>
      </Container>
    </section>
  );
}
