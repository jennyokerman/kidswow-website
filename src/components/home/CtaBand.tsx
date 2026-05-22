import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function CtaBand() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="rounded-3xl bg-navy px-8 py-14 text-center md:px-16 md:py-20">
          <h2 className="font-display text-3xl font-semibold text-cream md:text-4xl lg:text-5xl">
            Ready to bring KidsWow to your community?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-cream/80">
            KidsWow works with Kansas City area schools, homeschool programs, and
            churches. We can also discuss remote learning options.
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-cream/80 md:mt-8">
            Let&apos;s start a conversation!
          </p>
          <div className="mt-10 flex justify-center">
            <ButtonLink href="/contact" size="lg">
              Contact
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
