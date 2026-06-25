import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { HeroImage } from "./HeroImage";

const MISSION =
  "Inspiring kids to love learning and develop marketable skills through real experience.";

const BODY =
  "KidsWow is not just a program, it is a process. Humans forget what they hear. They remember what they do.";

export function Hero() {
  return (
    <section className="py-16 md:py-24 lg:py-28">
      <Container>
        <div className="grid grid-cols-[minmax(0,0.48fr)_minmax(0,0.52fr)] items-center gap-6 max-[480px]:grid-cols-1 max-[480px]:gap-8 lg:gap-14">
          <div className="flex min-w-0 flex-col gap-4 text-left max-[480px]:mx-auto max-[480px]:max-w-xl max-[480px]:text-center sm:gap-5">
            <p className="font-display text-xl font-semibold leading-snug text-navy min-[481px]:text-2xl lg:text-4xl lg:leading-snug">
              {MISSION}
            </p>
            <p className="text-base leading-relaxed text-charcoal/85 min-[481px]:text-lg lg:text-xl">
              {BODY}
            </p>
          </div>

          <div className="min-w-0 max-[480px]:mx-auto max-[480px]:max-w-sm">
            <HeroImage />
          </div>
        </div>

        <div className="mx-auto mt-12 flex justify-center md:mt-14">
          <ButtonLink href="/contact" size="lg">
            Bring KidsWow to You!
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
