import { ButtonLink } from "@/components/ui/Button";
import { SplitSection } from "./SplitSection";
import { WhoWeAreImage } from "./WhoWeAreImage";
import { SITE } from "@/lib/site";

export function WhoWeAre() {
  return (
    <SplitSection
      id="who-we-are"
      reverse
      className="bg-white/60"
      media={<WhoWeAreImage />}
    >
      <p className="text-sm font-semibold uppercase tracking-widest text-sky">
        Who we are
      </p>
      <h2 className="mt-3 font-display text-3xl font-semibold text-navy md:text-4xl lg:text-5xl">
        A Kansas City nonprofit with a mission to inspire kids
      </h2>
      <p className="mt-4 text-lg leading-relaxed text-charcoal/80">
        KidsWow was founded by {SITE.founder} to give children the opportunity to
        learn actively and unlock their potential. People of all ages, whether 3
        or 83, eventually say, &ldquo;Wow, this is so cool!&rdquo;
      </p>
      <div className="mt-8">
        <ButtonLink href="/about/story" variant="secondary" size="md">
          Read our story
        </ButtonLink>
      </div>
    </SplitSection>
  );
}
