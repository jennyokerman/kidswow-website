import { Container } from "@/components/ui/Container";
import { StemProgramHowItWorks } from "@/components/programs/stem/StemProgramHowItWorks";

export function StemProgramHowItWorksSection() {
  return (
    <section className="bg-sage/10 py-20 md:py-28">
      <Container className="mx-auto max-w-3xl">
        <p className="text-center text-sm font-semibold uppercase tracking-widest text-sky">
          Simple steps
        </p>
        <h2 className="mt-2 text-center font-display text-3xl font-semibold text-navy md:text-4xl">
          How It Works
        </h2>

        <div className="mt-8 md:mt-10">
          <StemProgramHowItWorks />
        </div>
      </Container>
    </section>
  );
}
