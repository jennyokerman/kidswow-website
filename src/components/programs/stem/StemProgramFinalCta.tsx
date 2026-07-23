import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import dadTeaching4 from "../../../../Kidswowpics1/STEMpage/dadteaching4.png";
import experimentLeft from "../../../../Kidswowpics1/STEMpage/experimentleftSTEM.JPG";
import experimentRight from "../../../../Kidswowpics1/STEMpage/experimentrightSTEM1.JPG";

const CTA_PHOTOS = [
  {
    src: experimentLeft,
    alt: "STEM experiment materials ready for hands-on learning",
  },
  {
    src: dadTeaching4,
    alt: "KidsWow facilitator sharing a STEM demonstration",
  },
  {
    src: experimentRight,
    alt: "A completed STEM build from a KidsWow session",
  },
] as const;

export function StemProgramFinalCta() {
  return (
    <section className="py-10 md:py-12 lg:py-14">
      <Container>
        <div className="overflow-hidden rounded-3xl bg-navy px-4 py-10 sm:px-8 md:px-12 md:py-16 lg:py-20">
          <h2 className="text-center font-display text-2xl font-semibold text-cream sm:text-3xl md:text-4xl lg:text-5xl">
            Ready to Bring KidsWow STEM to You?
          </h2>

          <div className="mx-auto mt-8 grid w-full max-w-4xl grid-cols-3 gap-2 sm:gap-4 md:mt-10">
            {CTA_PHOTOS.map((photo) => (
              <div
                key={photo.alt}
                className="relative aspect-[4/3] min-w-0 overflow-hidden rounded-xl sm:rounded-2xl"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 31vw, 280px"
                />
              </div>
            ))}
          </div>

          <div className="mx-auto mt-8 max-w-3xl space-y-5 text-left text-sm leading-relaxed text-cream/85 sm:mt-10 sm:space-y-6 sm:text-base md:text-lg lg:text-xl">
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

          <div className="mt-8 flex justify-center sm:mt-10 md:mt-12">
            <ButtonLink href="/contact" size="lg">
              Let&apos;s Connect
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
