import { Container } from "@/components/ui/Container";
const DID_YOU_KNOW =
  "Many creatures, like honeybees and hummingbirds, can actually see spectrums of light well beyond what the human eye perceives.";

export function PhysicsCreationWhatWeTeach() {
  return (
    <section className="py-10 md:py-12 lg:py-14">
      <Container>
        <h2 className="text-center font-display text-2xl font-semibold leading-tight text-navy md:text-3xl">
          Light → Electromagnetic Waves
        </h2>

        <div className="mx-auto mt-10 max-w-5xl md:mt-12 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(220px,280px)] lg:items-start lg:gap-10">
          <div className="space-y-6 text-lg leading-relaxed text-charcoal/85 md:text-xl">
            <p className="font-display text-xl font-semibold text-navy md:text-2xl">
              Did you know that we can&apos;t see most light?
            </p>
            <p>
              What we call &ldquo;light&rdquo; could more accurately be called
              &ldquo;electromagnetic waves&rdquo;. Most electromagnetic waves
              cannot be seen by the human eye at all. When God said, &ldquo;Let
              there be light,&rdquo; He wasn&apos;t just talking about what we
              see with our eyes. He was releasing the foundation of all matter,
              energy, and structure into existence.
            </p>
            <p>
              The Bible and the laws of physics point to the same truth: a
              Creator who spoke the universe into being with precision, purpose,
              and power.
            </p>
          </div>

          <aside className="mt-8 rounded-2xl border-l-4 border-sky bg-sky/10 px-6 py-6 lg:mt-0 lg:self-start lg:px-7 lg:py-8">
            <p className="text-xs font-bold uppercase tracking-widest text-sky">
              Did you know?
            </p>
            <p className="mt-4 text-base italic leading-relaxed text-charcoal/85 md:text-lg">
              {DID_YOU_KNOW}
            </p>
          </aside>
        </div>

        <div className="mx-auto mt-12 max-w-3xl rounded-3xl bg-navy px-8 py-12 text-center md:mt-14 md:px-12 md:py-16">
          <p className="font-display text-2xl font-semibold leading-snug text-cream md:text-3xl lg:text-4xl lg:leading-tight">
            God said, &ldquo;Let there be light.&rdquo;
          </p>
          <p className="mt-3 text-sm font-medium uppercase tracking-widest text-sky md:text-base">
            Genesis 1:3
          </p>
          <p className="mx-auto mt-6 max-w-xl font-display text-xl font-semibold text-amber md:text-2xl">
            This isn&apos;t just poetry. It&apos;s profound science.
          </p>
        </div>
      </Container>
    </section>
  );
}
