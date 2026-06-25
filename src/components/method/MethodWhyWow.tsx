import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function MethodWhyWow() {
  return (
    <section className="bg-white/60 py-14 md:py-20">
      <Container>
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-3xl font-semibold text-navy md:text-4xl">
            Why Wow?
          </h2>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-charcoal/85 md:text-lg">
            <p>
              There is nothing quite like watching the spark of joy when a child
              discovers something new. Thousands of people have experienced the
              wonder of magnets repelling each other when the magnets are flipped
              a certain way. Yet the first time a child feels that
              &ldquo;invisible, squishy ball&rdquo; forcing their magnets apart is
              magical. Always they will say something like &ldquo;Wow! This is so
              cool! Why is it doing that?&rdquo; Kids naturally ask lots of
              questions and want to learn, particularly during a &ldquo;Wow
              Moment&rdquo;. Warren learned to pay attention to those moments
              and to remember what sparked it.
            </p>
            <p>
              He found certain activities or demonstrations could consistently
              create that spark of joy, while others were different for each
              individual. Some young people gravitate towards music, or dance,
              coding, building make-belief towns, or maybe they&apos;re
              interested in everything at once. A Wow Moment happens through
              discovering, seeing, feeling, and experiencing something real.
            </p>
            <p>
              There is another secret ingredient. A Wow Moment can come and go,
              but if someone&mdash;like a teacher, parent, friend, or
              facilitator&mdash;recognizes and mirrors that joy back to the
              child: the &ldquo;Wow&rdquo; becomes contagious and can literally
              change lives in a single moment. Warren has seen it happen again
              and again.
            </p>
            <p className="font-display text-lg font-semibold text-navy md:text-xl">
              That&apos;s why KidsWow is more than just a name.
            </p>
          </div>

          <div className="mt-10 flex justify-center md:mt-12">
            <ButtonLink href="/#kidswow-stories" size="lg">
              Check out KidsWow Stories
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
