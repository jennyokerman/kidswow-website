import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function PhysicsCreationFinalCta() {
  return (
    <section className="py-10 md:py-12 lg:py-14">
      <Container>
        <div className="rounded-3xl bg-navy px-8 py-12 text-center md:px-12 md:py-16 lg:py-20">
          <h2 className="font-display text-3xl font-semibold text-cream md:text-4xl lg:text-5xl">
            Reach Out Today
          </h2>

          <div className="mx-auto mt-8 max-w-3xl space-y-6 text-left text-lg leading-relaxed text-cream/85 md:mt-10 md:text-xl">
            <p>
              STEM learning develops disciplined thinking, problem solving,
              creativity, and perseverance — qualities that align closely with
              faith driven leadership. This is why it is so important that we
              learn that faith and science are in harmony.
            </p>
            <p>
              Get a group together to experience the{" "}
              <span className="font-semibold text-amber">
                &ldquo;WOW&rdquo;
              </span>{" "}
              of science and faith working in unison together.
            </p>
          </div>

          <div className="mt-10 flex justify-center md:mt-12">
            <ButtonLink href="/contact" size="lg">
              Contact Us
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
