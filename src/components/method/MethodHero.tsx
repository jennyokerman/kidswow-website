import { Container } from "@/components/ui/Container";

export function MethodHero() {
  return (
    <section className="py-14 md:py-20 lg:py-24">
      <Container>
        <div className="max-w-4xl">
          <h1 className="font-display text-4xl font-semibold text-navy md:text-5xl">
            The KidsWow Method
          </h1>

          <div
            className="relative mt-10 aspect-video w-full overflow-hidden rounded-3xl bg-navy/5 ring-1 ring-navy/10 md:mt-12"
            role="region"
            aria-label="KidsWow Method video"
          >
            <div className="flex h-full flex-col items-center justify-center gap-3 px-6 text-center">
              <span className="rounded-full bg-sky/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-sky">
                Video coming soon
              </span>
              <p className="max-w-md text-sm leading-relaxed text-charcoal/60">
                A YouTube embed will go here once the link is ready.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
