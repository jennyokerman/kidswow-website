import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import happyEnglish from "../../../../Kidswowpics1/More/happy-english.jpg";
import happyKidsWriting from "../../../../Kidswowpics1/More/happykidswriting.png";

export function EnglishBackground() {
  return (
    <section className="bg-white/60 py-20 md:py-28">
      <Container>
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-display text-3xl font-semibold text-navy md:text-4xl">
            How KidsWow English Began
          </h2>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-5">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-sage/10 ring-1 ring-navy/10 sm:rounded-2xl">
              <Image
                src={happyEnglish}
                alt="Kids enjoying KidsWow English learning"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 45vw, 360px"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-sage/10 ring-1 ring-navy/10 sm:rounded-2xl">
              <Image
                src={happyKidsWriting}
                alt="Kids practicing writing during KidsWow English"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 45vw, 360px"
              />
            </div>
          </div>

          <div className="mt-8 space-y-4 text-base leading-relaxed text-charcoal/85 sm:mt-10 md:text-lg">
            <p>
              KidsWow English was developed to meet the need of a community.
              When Warren Okerman and his wife moved to Japan, they met hundreds
              of Japanese people who wanted to learn English as a second
              language. Over the years the entire Okerman family worked together
              to develop the KidsWow English curriculum, flashcards, games,
              video content, and website.
            </p>
            <p>
              The result was the first of many innovative KidsWow programs:
              KidsWow EnglishPro. KidsWow English embodies the joy, creativity,
              and consistency of the KidsWow Method. As a result of the program,
              hundreds of families discovered that they too could learn English
              &ldquo;The Natural Way.&rdquo;
            </p>
            <p>
              KidsWow EnglishPro is a very important part of the KidsWow story.
              This page is a dedicated place to provide access to the
              time-tested resources developed in the KidsWow English program.
            </p>
          </div>

          <div className="mt-8 flex justify-center sm:mt-10">
            <ButtonLink href="/about/story" variant="secondary" size="lg">
              Read the full KidsWow Story
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
