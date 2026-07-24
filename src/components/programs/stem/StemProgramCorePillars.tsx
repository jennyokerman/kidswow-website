import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { StemPillarsCarousel } from "@/components/programs/stem/StemPillarsCarousel";

export function StemProgramCorePillars() {
  return (
    <section className="bg-white/60 py-20 md:py-28">
      <Container>
        <SectionHeading title="Core Pillars" align="center" />
        <StemPillarsCarousel />
      </Container>
    </section>
  );
}
