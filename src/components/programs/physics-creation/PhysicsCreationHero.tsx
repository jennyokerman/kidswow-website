import { Container } from "@/components/ui/Container";

export function PhysicsCreationHero() {
  return (
    <section className="py-10 md:py-12 lg:py-14">
      <Container>
        <h1 className="text-center font-display text-4xl font-semibold text-navy md:text-5xl lg:text-6xl">
          Physics &amp; Creation Program
        </h1>
        <p className="mx-auto mt-5 max-w-3xl text-center font-display text-lg font-semibold leading-relaxed text-sky md:mt-6 md:text-xl lg:text-2xl">
          The &ldquo;Let There Be Light&rdquo; Experience
        </p>

        <div
          className="mx-auto mt-10 flex aspect-video max-w-4xl items-center justify-center rounded-2xl bg-sage/15 ring-1 ring-sage/25 md:mt-12"
          role="img"
          aria-label="Hero image or video coming soon"
        >
          <span className="px-6 text-center text-sm font-medium text-sage">
            Hero image or video coming soon
          </span>
        </div>
      </Container>
    </section>
  );
}
