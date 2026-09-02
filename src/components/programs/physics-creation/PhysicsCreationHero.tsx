import { Container } from "@/components/ui/Container";
import { YouTubeFacade } from "@/components/ui/YouTubeFacade";

const YOUTUBE_ID = "r7LsjMqr-S0";

export function PhysicsCreationHero() {
  return (
    <section className="py-16 md:py-24 lg:py-28">
      <Container>
        <h1 className="text-center font-display text-4xl font-semibold text-navy md:text-5xl lg:text-6xl">
          Physics &amp; Creation
        </h1>
        <p className="mx-auto mt-5 max-w-3xl text-center font-display text-lg font-semibold leading-relaxed text-sky md:mt-6 md:text-xl lg:text-2xl">
          The &ldquo;Let There Be Light&rdquo; Experience
        </p>

        <div className="mx-auto mt-10 max-w-4xl md:mt-12">
          <YouTubeFacade
            videoId={YOUTUBE_ID}
            title="Physics & Creation — Let There Be Light"
          />
        </div>
      </Container>
    </section>
  );
}
