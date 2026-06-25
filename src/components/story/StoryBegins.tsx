import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { MediaPlaceholder } from "@/components/ui/MediaPlaceholder";

const BEGINS_IMAGES = [
  "KidsWow in Japan — photo 1",
  "KidsWow in Japan — photo 2",
  "KidsWow in Japan — photo 3",
] as const;

export function StoryBegins() {
  return (
    <section className="bg-white/60 py-14 md:py-20 lg:py-24">
      <Container>
        <div className="grid grid-cols-[minmax(0,0.38fr)_minmax(0,0.62fr)] items-start gap-6 max-[480px]:grid-cols-1 max-[480px]:gap-8 lg:gap-12">
          <div className="flex min-w-0 flex-col gap-3 sm:gap-4">
            {BEGINS_IMAGES.map((label) => (
              <MediaPlaceholder
                key={label}
                label={label}
                className="rounded-2xl"
              />
            ))}
          </div>

          <div className="min-w-0">
            <h2 className="font-display text-3xl font-semibold text-navy md:text-4xl">
              KidsWow Begins
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-charcoal/85 md:text-lg">
              <p>
                KidsWow started over twenty years ago in a small town tucked away
                in the mountains of Japan. It was founded on the idea of meeting
                the needs of a community, and in 2005 that meant teaching
                English as a second language. But there was a problem. Many
                English teaching programs were stagnant classrooms that
                prioritized sitting still and getting a good grade more than
                genuine language learning.
              </p>
              <p>
                Warren Okerman, the founder of KidsWow, wanted to do something
                completely different. He pulled from experience learning a new
                language himself (Japanese) and watching the way his own children
                learned to speak English at home. The result was an innovative
                approach to empower kids with hands-on learning that would stick.
                Inspired by a brilliant professor named Tom Brewster, Warren
                built his program based on &ldquo;Learning the Natural Way&rdquo;.
                It worked! KidsWow English operated successfully in Japan from
                2005 until Warren and his wife, Jill, returned to the States in
                2021. Every member of the Okerman household (Warren, Jill, and
                each of his seven kids) have been integral in the development and
                operation of KidsWow.
              </p>
              <p>
                As the needs of young people changed, KidsWow grew and adapted
                too. Warren returned to his engineering roots and started an
                after-school class for robotics and programming. This ended up
                becoming the beta program for KidsWow STEM. Now KidsWow focuses
                on teaching kids Physics, STEM, and foundational financial
                education. The same hands-on approach has stood the test of time.
              </p>
            </div>
            <div className="mt-8">
              <ButtonLink href="/about/method" size="lg">
                Explore KidsWow Method
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
