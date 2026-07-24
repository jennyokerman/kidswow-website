import Image from "next/image";
import { Container } from "@/components/ui/Container";
import highSchoolStem from "../../../Kidswowpics1/KidsWow Home/highschoolstem.jpg";
import kidsFriends from "../../../Kidswowpics1/KidsWow Home/kidsfriends.jpg";
import kidsPlaying from "../../../Kidswowpics1/KidsWow Home/kidsplaying1.jpg";

const BENEFIT_PHOTOS = [
  {
    src: kidsPlaying,
    alt: "Children learning together through hands-on play",
  },
  {
    src: kidsFriends,
    alt: "Three young friends smiling together",
  },
  {
    src: highSchoolStem,
    alt: "High school students building an electronics project",
  },
] as const;

export function Benefits() {
  return (
    <section id="benefits" className="bg-sage/10 py-20 md:py-28">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-display text-3xl font-semibold leading-tight text-navy md:text-4xl lg:text-5xl">
            Have you noticed just how fast the world is changing?
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-charcoal/85 md:text-xl">
            KidsWow creates an environment where kids are valued, develop internal
            confidence, and gain real life experience to navigate an increasingly
            complex world.
          </p>

          <p className="mt-12 font-display text-xl font-semibold text-navy md:text-2xl">
            Kids are the future. Don&apos;t leave them behind.
          </p>
        </div>

        <div className="mx-auto mt-12 grid w-full max-w-5xl grid-cols-3 gap-2 sm:gap-4 md:mt-16">
          {BENEFIT_PHOTOS.map((photo) => (
            <div
              key={photo.alt}
              className="relative aspect-[4/3] min-w-0 overflow-hidden rounded-xl bg-white/50 ring-1 ring-navy/10 sm:rounded-2xl"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 31vw, 320px"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
