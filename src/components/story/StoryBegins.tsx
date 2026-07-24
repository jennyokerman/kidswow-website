import Image, { type StaticImageData } from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import kidsFromJapan from "../../../Kidswowpics1/KidsWow Story/kidsfromjapan.jpg";
import kidswowStoryCoding from "../../../Kidswowpics1/KidsWow Story/kidswowstorycoding.jpg";
import warrenJapan from "../../../Kidswowpics1/KidsWow Story/WarrenJapan.jpg";

const BEGINS_IMAGES: { src: StaticImageData; alt: string }[] = [
  {
    src: kidsFromJapan,
    alt: "KidsWow students learning together in Japan",
  },
  {
    src: warrenJapan,
    alt: "Warren Okerman teaching in Japan",
  },
  {
    src: kidswowStoryCoding,
    alt: "KidsWow students exploring coding",
  },
];

export function StoryBegins() {
  return (
    <section className="bg-white/60 py-20 md:py-28">
      <Container>
        <div className="mx-auto grid w-full max-w-5xl grid-cols-[minmax(0,0.36fr)_minmax(0,0.64fr)] items-start gap-3 sm:gap-5 md:gap-8 lg:gap-10">
          <div className="flex min-w-0 flex-col gap-2 sm:gap-3 md:gap-4">
            {BEGINS_IMAGES.map((photo) => (
              <div
                key={photo.alt}
                className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-sage/10 ring-1 ring-navy/10 sm:rounded-2xl"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 36vw, 320px"
                />
              </div>
            ))}
          </div>

          <div className="min-w-0">
            <h2 className="font-display text-xl font-semibold text-navy sm:text-2xl md:text-3xl lg:text-4xl">
              KidsWow Begins
            </h2>
            <div className="mt-4 space-y-4 text-xs leading-relaxed text-charcoal/85 sm:mt-5 sm:space-y-5 sm:text-sm md:text-base lg:text-lg">
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
                each of his seven kids) has been integral in the development and
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
            <div className="mt-5 sm:mt-6 md:mt-8">
              <ButtonLink
                href="/about/method"
                variant="secondary"
                size="md"
                className="px-4 py-2 text-xs sm:px-6 sm:py-3 sm:text-base md:px-8 md:py-4 md:text-lg"
              >
                Explore KidsWow Method
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
