import { Container } from "@/components/ui/Container";

export function PlaceholderPage({ title }: { title: string }) {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <h1 className="font-display text-4xl font-semibold text-navy md:text-5xl">
          {title}
        </h1>
        <p className="mt-6 max-w-xl text-lg text-charcoal/80">
          Content coming soon
        </p>
      </Container>
    </section>
  );
}
