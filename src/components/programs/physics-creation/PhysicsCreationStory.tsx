import { Container } from "@/components/ui/Container";
import { PhysicsCreationLightbulbImage } from "@/components/programs/physics-creation/PhysicsCreationLightbulbImage";
import { SITE } from "@/lib/site";

export function PhysicsCreationStory() {
  return (
    <section className="bg-white/60 py-10 md:py-12 lg:py-14">
      <Container>
        <h2 className="text-center font-display text-3xl font-semibold text-navy md:text-4xl lg:text-5xl">
          Why Physics &amp; Creation?
        </h2>

        <div className="mx-auto mt-10 grid max-w-4xl items-start gap-8 md:mt-12 md:grid-cols-[minmax(0,13rem)_minmax(0,1fr)] md:gap-10 lg:max-w-5xl lg:grid-cols-[minmax(0,17rem)_minmax(0,1fr)] lg:gap-12">
          <PhysicsCreationLightbulbImage />

          <div className="min-w-0 space-y-6 text-lg leading-relaxed text-charcoal/85 md:text-xl">
            <p>
              One of my favorite topics is the creation of the universe. I am an
              engineer and a Christian. I have been studying physics, creation,
              and the Bible for more than 40 years.
            </p>
            <p>
              The reason I am so passionate about this topic is because my
              father was a skeptic and a journalist who did not believe in the
              creator God for most of my adult life. I wanted to find a way to
              show him that science and the Bible do not conflict.
            </p>
            <p>
              I dug deep to find answers that match both physics and the belief
              in creation. What I have found was worth the search.
            </p>
            <p className="font-display text-lg font-semibold text-navy md:text-xl">
              — {SITE.founder}, Founder of {SITE.name}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
