import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import physicsCreation from "../../../../Kidswowpics1/physics-creation.png";

export function StemProgramPhysicsTeaser() {
  return (
    <section className="w-full bg-amber/10 py-10 md:py-12 lg:py-14">
      <Container>
        <SectionHeading title="Physics & Creation" align="center" />

        <p className="mx-auto mt-6 max-w-2xl text-center font-display text-xl font-semibold text-navy md:mt-8 md:text-2xl">
          Want to dive deeper?
        </p>

        <div className="mx-auto mt-8 max-w-4xl rounded-3xl bg-cream p-5 ring-1 ring-navy/10 sm:p-8 md:mt-10 md:p-10">
          <h3 className="text-center font-display text-2xl font-bold text-navy md:text-3xl">
            Why Did God Say Let There Be Light?
          </h3>

          <div className="mt-6 grid grid-cols-[minmax(0,0.32fr)_minmax(0,0.68fr)] items-center gap-4 sm:mt-8 sm:gap-6 md:gap-8">
            <div className="relative aspect-square min-w-0 overflow-hidden rounded-2xl bg-white">
              <Image
                src={physicsCreation}
                alt="Glowing lightbulb representing Physics & Creation"
                fill
                className="object-contain p-2 sm:p-4"
                sizes="(max-width: 768px) 30vw, 220px"
              />
            </div>

            <div className="min-w-0 space-y-4 text-left text-xs leading-relaxed text-charcoal/85 sm:space-y-5 sm:text-base md:text-lg">
              <p>
                Warren Okerman has packaged 40 years of physics and biblical study
                into a 30–90 minute experience that sparks real curiosity and
                enriches people of all ages.
              </p>
              <p>
                In &ldquo;Let There Be Light&rdquo; kids (and adults) will learn how
                science and faith actually work in unison together. Warren pairs the
                biblical truths of how God created the universe with demonstrations
                of electromagnetic waves, light, and motion.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-center md:mt-12">
          <ButtonLink href="/programs/physics-creation" size="lg">
            Explore Physics & Creation
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
