import { Container } from "@/components/ui/Container";
import {
  KIDSWOW_STORIES,
  KIDSWOW_STORIES_INTRO,
} from "@/content/kidswow-stories";
import { StoriesCarousel } from "./StoriesCarousel";

export function KidsWowStories() {
  return (
    <section id="kidswow-stories" className="py-20 md:py-28">
      <Container>
        <h2 className="text-center font-display text-3xl font-semibold text-navy md:text-4xl lg:text-5xl">
          KidsWow Stories
        </h2>
        <figure className="mx-auto mt-10 max-w-3xl text-center md:mt-12">
          <blockquote className="font-display text-xl italic leading-relaxed text-navy md:text-2xl md:leading-relaxed">
            &ldquo;{KIDSWOW_STORIES_INTRO.quote}&rdquo;
          </blockquote>
          <figcaption className="mt-4 text-sm font-semibold text-sky">
            {KIDSWOW_STORIES_INTRO.attribution}
          </figcaption>
        </figure>

        <StoriesCarousel stories={KIDSWOW_STORIES} />
      </Container>
    </section>
  );
}
