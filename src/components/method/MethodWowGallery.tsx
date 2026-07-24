import Image from "next/image";
import { Container } from "@/components/ui/Container";
import airHockeyKids from "../../../Kidswowpics1/KidswowMethod/airhockeykids.jpg";
import dadMagnets2 from "../../../Kidswowpics1/KidswowMethod/dadmagnets2.png";
import happyMiddleSchoolers from "../../../Kidswowpics1/KidswowMethod/happymiddleschoolers.png";

const WOW_PHOTOS = [
  {
    src: happyMiddleSchoolers,
    alt: "Happy middle schoolers during a KidsWow session",
  },
  {
    src: dadMagnets2,
    alt: "KidsWow facilitator demonstrating magnetism",
  },
  {
    src: airHockeyKids,
    alt: "Kids playing air hockey during a KidsWow session",
  },
] as const;

export function MethodWowGallery() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="mx-auto grid w-full max-w-5xl grid-cols-3 gap-2 sm:gap-4 md:gap-5">
          {WOW_PHOTOS.map((photo) => (
            <div
              key={photo.alt}
              className="relative aspect-[4/3] min-w-0 overflow-hidden rounded-xl bg-sage/10 ring-1 ring-navy/10 sm:rounded-2xl"
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
