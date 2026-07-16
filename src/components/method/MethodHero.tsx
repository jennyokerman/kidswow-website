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
            className="relative mt-10 aspect-video w-full overflow-hidden rounded-3xl bg-navy/5 ring-1 ring-navy/10 md:mt-12"
            role="region"
            aria-label="KidsWow Method video"
          >
            <iframe
              className="h-full w-full"
              src="https://www.youtube-nocookie.com/embed/w3d590Nde9o"
              title="The KidsWow Method"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
