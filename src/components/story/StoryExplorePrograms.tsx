import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function StoryExplorePrograms() {
  return (
    <section className="pb-14 md:pb-20 lg:pb-24">
      <Container>
        <div className="mx-auto max-w-4xl rounded-3xl bg-navy px-6 py-10 text-center sm:px-8 md:px-12 md:py-14">
          <h2 className="font-display text-2xl font-semibold text-cream sm:text-3xl md:text-4xl">
            Ready to Explore More?
          </h2>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:mt-10 md:gap-4">
            <ButtonLink href="/programs/stem" size="lg">
              KidsWow STEM
            </ButtonLink>
            <ButtonLink
              href="/contact"
              size="lg"
              className="bg-cream text-navy ring-2 ring-cream hover:bg-cream/90"
            >
              Contact
            </ButtonLink>
            <ButtonLink href="/resources/english" size="lg">
              KidsWow English
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
