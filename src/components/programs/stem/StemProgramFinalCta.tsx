import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function StemProgramFinalCta() {
  return (
    <section className="py-10 md:py-12 lg:py-14">
      <Container>
        <div className="rounded-3xl bg-navy px-8 py-12 text-center md:px-12 md:py-16 lg:py-20">
          <h2 className="font-display text-3xl font-semibold text-cream md:text-4xl lg:text-5xl">
            Ready to Bring KidsWow STEM to You?
          </h2>

          <div className="mx-auto mt-8 max-w-3xl space-y-6 text-left text-lg leading-relaxed text-cream/85 md:mt-10 md:text-xl">
            <p>
              Kids aren&apos;t just listening—they&apos;re building, testing, and
              seeing concepts in real time. We&apos;ve already tested it with 75+
              students. The response has been very strong.
            </p>
            <p>
              KidsWow STEM is looking for families and community partners in the
              Kansas City Metro who want to invest in practical, real-world STEM
              education.
            </p>
          </div>

          <div className="mt-10 flex justify-center md:mt-12">
            <ButtonLink href="/contact" size="lg">
              Let&apos;s Connect
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
