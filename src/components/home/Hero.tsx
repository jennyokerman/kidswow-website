import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { HeroImage } from "./HeroImage";

const MISSION =
  "Inspiring kids to love learning and develop marketable skills and real experience since 2005.";

const BODY =
  "KidsWow is not just a program, it is a process. Humans forget what they hear. They remember what they do.";

export function Hero() {
  return (
    <section className="py-16 md:py-24 lg:py-28">
      <Container>
        {/* md+: mission + body left, image right. Mobile: text first, image below. */}
        <div className="grid items-start gap-10 md:grid-cols-[1fr_auto] md:gap-10 lg:gap-14">
          <div className="flex min-w-0 flex-col gap-6 text-center md:text-left md:pt-0">
            <p className="font-display text-2xl italic leading-snug text-navy md:text-3xl lg:text-4xl lg:leading-snug">
              {MISSION}
            </p>
            <p className="text-lg leading-relaxed text-charcoal/85 md:text-xl">
              {BODY}
            </p>
          </div>
          <div className="flex justify-center md:justify-end md:shrink-0">
            <HeroImage />
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-3xl md:mt-12">
          <div className="rounded-2xl border border-sage/40 bg-gradient-to-b from-sage/20 to-sage/8 px-6 py-5 text-center shadow-sm ring-1 ring-sage/25 md:px-8 md:py-6">
            <p className="font-display text-lg font-semibold leading-relaxed text-navy md:text-xl md:leading-relaxed">
              Book a discovery call or meet in person (Kansas City only){' '}
              with Warren Okerman, the founder and owner of KidsWow.
            </p>
          </div>
          <div className="mt-8 flex justify-center">
            <ButtonLink href="/contact" size="lg">
              Get In Touch
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
