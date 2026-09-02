import { Container } from "@/components/ui/Container";
import { YouTubeFacade } from "@/components/ui/YouTubeFacade";

const YOUTUBE_ID = "w3d590Nde9o";

export function MethodHero() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="mx-auto max-w-4xl">
          <h1 className="text-center font-display text-4xl font-semibold text-navy md:text-5xl">
            The KidsWow Method
          </h1>

          <div
            className="mt-10 md:mt-12"
            role="region"
            aria-label="KidsWow Method video"
          >
            <YouTubeFacade
              videoId={YOUTUBE_ID}
              title="The KidsWow Method"
              className="rounded-3xl ring-1 ring-navy/10"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
