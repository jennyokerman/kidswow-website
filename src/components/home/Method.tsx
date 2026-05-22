import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Method() {
  return (
    <section id="method" className="py-20 md:py-28">
      <Container>
        <h2 className="text-center font-display text-3xl font-semibold text-navy md:text-4xl lg:text-5xl">
          The KidsWow Method
        </h2>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:gap-6">
          <div className="rounded-3xl bg-white/80 p-8 ring-1 ring-navy/10">
            <h3 className="font-display text-xl font-bold text-navy md:text-2xl">
              Conventional Classrooms
            </h3>
            <p className="mt-4 leading-relaxed text-charcoal/80">
              Kids learn passively in their classroom. Teachers waste valuable
              time and resources just getting the kids to sit still and be quiet.
              Without internal motivation and curiosity, kids learn about topics,
              but don&apos;t go home wanting to learn more.
            </p>
          </div>

          <p
            className="hidden text-center font-display text-2xl font-bold text-sky lg:block"
            aria-hidden
          >
            vs
          </p>

          <div className="relative rounded-3xl bg-sage/15 p-8 ring-1 ring-sage/30">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-sky px-4 py-1 text-xs font-bold uppercase tracking-wider text-white lg:hidden">
              vs
            </span>
            <h3 className="font-display text-xl font-bold text-navy md:text-2xl">
              KidsWow Learning
            </h3>
            <p className="mt-4 leading-relaxed text-charcoal/80">
              Kids build curiosity, purpose, and experience-based confidence. They
              explore, ask questions, and have the courage to try again.
              Facilitators create an environment that encourages the
              &ldquo;wow&rdquo; that inspires kids to be lifelong learners.
            </p>
          </div>
        </div>

        <p className="mt-10 text-center font-display text-xl font-semibold text-navy md:text-2xl">
          KidsWow is learning the Natural Way.
        </p>

        <div className="mt-10 flex justify-center">
          <ButtonLink href="/about/method" size="lg">
            The KidsWow Method
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
