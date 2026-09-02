import { Container } from "@/components/ui/Container";

export function StoryWhyItMatters() {
  return (
    <section className="bg-sage/10 py-20 md:py-28">
      <Container>
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-display text-3xl font-semibold text-navy md:text-4xl">
            Why This Matters
          </h2>
          <p className="mt-6 text-base leading-relaxed text-charcoal/85 md:text-lg">
            KidsWow exists to inspire curiosity, build practical skills, and
            help young people grow into imaginative, resilient thinkers who can
            thrive in a changing world. Kids solve problems, take apart and
            build machines, and practice decision-making logic in finance or
            engineering. Hands-on learning turns experience into lasting
            competence.
          </p>
        </div>
      </Container>
    </section>
  );
}
