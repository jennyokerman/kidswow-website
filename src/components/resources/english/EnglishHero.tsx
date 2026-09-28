import Image from "next/image";
import { Container } from "@/components/ui/Container";
import englishHero from "../../../../Kidswowpics1/More/engish-hero.jpg";

const YOUTUBE_URL = "https://www.youtube.com/@kidswowenglishpro";

function YouTubePlayIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M8 5.14v13.72L19 12 8 5.14z" />
    </svg>
  );
}

export function EnglishHero() {
  return (
    <section className="bg-sky/10 py-16 md:py-24 lg:py-28">
      <Container>
        <div className="grid grid-cols-[minmax(0,0.48fr)_minmax(0,0.52fr)] items-center gap-6 max-[480px]:grid-cols-1 max-[480px]:gap-8 lg:gap-14">
          <div className="flex min-w-0 flex-col gap-4 text-left max-[480px]:mx-auto max-[480px]:max-w-xl max-[480px]:text-center sm:gap-5">
            <h1 className="whitespace-nowrap font-display text-4xl font-semibold leading-tight text-navy md:text-5xl">
              KidsWow English
            </h1>
            <p className="text-base leading-relaxed text-charcoal/85 min-[481px]:text-lg">
              KidsWow is committed to inspiring and equipping kids. The first
              program did just that. In 2005, KidsWow EnglishPro was launched to
              teach English as a second language.
            </p>
            <div className="mt-1 flex max-[480px]:justify-center">
              <a
                href={YOUTUBE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 rounded-full border-2 border-navy bg-transparent px-6 py-3 text-base font-semibold text-navy transition-colors hover:bg-navy hover:text-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky md:px-8 md:py-4 md:text-lg"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy text-cream transition-colors group-hover:bg-cream group-hover:text-navy">
                  <YouTubePlayIcon className="h-4 w-4 translate-x-px" />
                </span>
                KidsWow EnglishPro on YouTube
              </a>
            </div>
          </div>

          <div className="min-w-0 max-[480px]:mx-auto max-[480px]:max-w-sm">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-sage/10 ring-1 ring-sage/25">
              <Image
                src={englishHero}
                alt="Kids learning English with KidsWow"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 416px, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
