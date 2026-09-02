import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { WhoWeAreImage } from "./WhoWeAreImage";
import { SITE } from "@/lib/site";

export function WhoWeAre() {
  return (
    <section id="who-we-are" className="bg-white/60 py-20 md:py-28">
      <Container>
        <div className="grid grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] items-center gap-6 max-[480px]:grid-cols-1 max-[480px]:gap-6 lg:gap-14">
          <div className="min-w-0 max-[480px]:max-w-[19rem]">
            <WhoWeAreImage />
          </div>
          <div className="min-w-0">
            <p className="text-sm font-semibold uppercase tracking-widest text-sky">
              Who we are
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-navy md:text-4xl">
              A Kansas City nonprofit with a mission to inspire kids
            </h2>
            <p className="mt-4 text-base leading-relaxed text-charcoal/85 md:text-lg">
              KidsWow was founded by {SITE.founder} to give children the
              opportunity to learn actively and unlock their potential. People of
              all ages, whether 3 or 83, eventually say, &ldquo;Wow, this is so
              cool!&rdquo;
            </p>
          </div>
        </div>
        <div className="mt-8 flex justify-center">
          <ButtonLink href="/about/story" variant="secondary" size="md">
            Read our story
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
