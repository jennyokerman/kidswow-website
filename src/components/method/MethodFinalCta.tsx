import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { NAV_LINKS } from "@/lib/site";

export function MethodFinalCta() {
  return (
    <section className="pb-14 md:pb-20 lg:pb-24">
      <Container>
        <div className="mx-auto max-w-4xl rounded-3xl bg-navy px-6 py-10 text-center sm:px-8 md:px-12 md:py-14">
          <p className="text-base leading-relaxed text-cream/90 md:text-lg">
            KidsWow STEM, physics, finance, language&hellip;
          </p>
          <p className="mt-4 font-display text-xl font-semibold text-cream md:text-2xl">
            Imagine what we could learn using a natural learning process.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:mt-10 md:gap-4">
            {NAV_LINKS.programs.map((program) => (
              <ButtonLink key={program.href} href={program.href} size="lg">
                {program.label}
              </ButtonLink>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
