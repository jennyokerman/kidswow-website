import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import heroImage from "../../../../Kidswowpics1/STEMpage/hero1.jpg";

export function StemProgramHero() {
  return (
    <section className="bg-amber/10 py-16 md:py-24 lg:py-28">
      <Container>
        <div className="grid grid-cols-[minmax(0,0.48fr)_minmax(0,0.52fr)] items-center gap-6 max-[480px]:grid-cols-1 max-[480px]:gap-8 lg:gap-14">
          <div className="flex min-w-0 flex-col gap-4 text-left max-[480px]:mx-auto max-[480px]:max-w-xl max-[480px]:text-center sm:gap-5">
            <h1 className="font-display text-3xl font-semibold leading-tight text-navy min-[481px]:text-4xl lg:text-[2.65rem] lg:leading-snug xl:whitespace-nowrap xl:text-[2.75rem]">
              KidsWow STEM
            </h1>
            <p className="text-base leading-relaxed text-charcoal/85 min-[481px]:text-lg lg:text-xl">
              Hands-on STEM built on the engineering method—where real projects
              and a genuine curriculum work together.
            </p>
            <p className="text-base leading-relaxed text-charcoal/85 min-[481px]:text-lg lg:text-xl">
              Kids build, test, and leave saying, &ldquo;Wow! I want to learn
              more.&rdquo;
            </p>
            <p className="text-sm font-semibold uppercase tracking-wider text-sky min-[481px]:text-base">
              Ages 7–14 · Kansas City Metro
            </p>
          </div>

          <div className="min-w-0 max-[480px]:mx-auto max-[480px]:max-w-sm">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-sage/10 ring-1 ring-sage/25">
              <Image
                src={heroImage}
                alt="Student building a robotics project in the KidsWow STEM program"
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
