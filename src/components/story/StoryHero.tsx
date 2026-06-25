import { Container } from "@/components/ui/Container";

export function StoryHero() {
  return (
    <section className="py-14 md:py-20 lg:py-24">
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-sky">
            About
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold text-navy md:text-5xl">
            The KidsWow Story
          </h1>
          <p className="mt-6 text-base leading-relaxed text-charcoal/85 md:text-lg">
            What began as a program to teach English has changed over the years
            to meet the modern needs of kids today. Yet, the foundation of
            &ldquo;Learning the Natural Way&rdquo; has remained unchanged. Now,
            KidsWow is focused on science, technology, engineering, and math
            (STEM) and financial literacy. KidsWow learners have the opportunity
            to build, try, and collaborate &mdash; not just consume information.
          </p>
        </div>
      </Container>
    </section>
  );
}
