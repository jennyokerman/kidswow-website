import { Container } from "@/components/ui/Container";

export function MethodHero() {
  return (
    <section className="py-14 md:py-20 lg:py-24">
      <Container>
        <div className="mx-auto max-w-4xl">
          <h1 className="text-center font-display text-4xl font-semibold text-navy md:text-5xl">
            The KidsWow Method
          </h1>

          <div
            className="relative mt-10 aspect-video w-full overflow-hidden rounded-3xl bg-navy ring-1 ring-navy/10 md:mt-12"
            role="region"
            aria-label="KidsWow Method video"
          >
            <video
              className="h-full w-full object-cover"
              controls
              playsInline
              preload="metadata"
              aria-label="KidsWow Method video"
            >
              <source src="/videos/kidswow-method.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </Container>
    </section>
  );
}
