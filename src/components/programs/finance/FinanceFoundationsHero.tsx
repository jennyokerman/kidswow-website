import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import heroImage from "../../../../Kidswowpics1/upward money-1.png";

export function FinanceFoundationsHero() {
  return (
    <section className="bg-amber/10 py-16 md:py-24 lg:py-28">
      <Container>
        <div className="grid grid-cols-[minmax(0,0.48fr)_minmax(0,0.52fr)] items-center gap-6 max-[480px]:grid-cols-1 max-[480px]:gap-8 lg:gap-14">
          <div className="flex min-w-0 flex-col gap-4 text-left max-[480px]:mx-auto max-[480px]:max-w-xl max-[480px]:text-center sm:gap-5">
            <h1 className="font-display text-4xl font-semibold leading-tight text-navy md:text-5xl lg:text-6xl">
              Finance Foundations
            </h1>
            <p className="text-base leading-relaxed text-charcoal/85 min-[481px]:text-lg">
              There are some things EVERYBODY needs to know about finance.
              It&apos;s not rocket science. But it might as well be, unless you
              learn it for yourself.
            </p>
            <p className="text-sm font-semibold uppercase tracking-wider text-sky min-[481px]:text-base">
              Built with young adults in mind:
              <br />
              for 10th grade through college age
            </p>
          </div>

          <div className="min-w-0 max-[480px]:mx-auto max-[480px]:max-w-sm">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-sage/10 ring-1 ring-sage/25">
              <Image
                src={heroImage}
                alt="Upward growth representing financial confidence and progress"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 416px, 50vw"
                priority
              />
            </div>
          </div>
        </div>

        <div className="mx-auto mt-12 flex justify-center md:mt-14">
          <ButtonLink href="/contact" size="lg">
            Let&apos;s Connect
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
