import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { HeroImage } from "./HeroImage";

const MISSION =
  "Inspiring kids to love learning and develop marketable skills through real experience since 2005.";

const BODY =
  "KidsWow is not just a program, it is a process. Humans forget what they hear. They remember what they do.";

export function Hero() {
  return (
    <section className="py-16 md:py-24 lg:py-28">
      <Container>
        <div className="grid items-center gap-10 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:gap-8 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:gap-10">
          <div className="flex min-w-0 flex-col gap-6 text-center md:text-left">
            <p className="font-display text-2xl font-semibold leading-snug text-navy md:text-3xl lg:text-4xl lg:leading-snug">
              {MISSION}
            </p>
            <p className="text-lg leading-relaxed text-charcoal/85 md:text-xl">
              {BODY}
            </p>
          </div>

          <div className="w-full min-w-0">
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
