import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import homeCtaImage from "../../../Kidswowpics1/KidsWow Home/homecta1.jpg";

export function CtaBand() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="grid grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] items-center gap-3 overflow-hidden rounded-2xl bg-navy p-3 sm:gap-6 sm:rounded-3xl sm:p-6 md:grid-cols-2 md:gap-10 md:p-10 lg:gap-14 lg:p-14">
          <div className="min-w-0 py-3 text-center sm:px-2 sm:py-6 md:px-0 md:py-8">
            <h2 className="font-display text-xl font-semibold text-cream sm:text-3xl md:text-4xl lg:text-5xl">
              Let&apos;s Get In Touch
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-left text-xs leading-relaxed text-cream/85 sm:mt-6 sm:text-base md:mt-8 md:text-xl">
              KidsWow supports Kansas City area schools, homeschool programs, and
              churches.
              <br />
              We can also discuss remote learning options.
            </p>
            <p className="mx-auto mt-3 max-w-2xl font-display text-sm font-semibold text-amber sm:mt-4 sm:text-lg md:text-xl">
              Let&apos;s Inspire Kids!
            </p>
            <div className="mt-5 flex justify-center sm:mt-8 md:mt-12">
              <ButtonLink
                href="/contact"
                size="md"
                className="px-4 py-2 text-xs sm:px-6 sm:py-3 sm:text-base md:px-8 md:py-4 md:text-lg"
              >
                Contact Us
              </ButtonLink>
            </div>
          </div>

          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
            <Image
              src={homeCtaImage}
              alt="A child exploring a colorful hands-on learning activity"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 40vw, 50vw"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
