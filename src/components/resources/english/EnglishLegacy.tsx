import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const ESL_LAUNCH_URL = "https://esllaunch.com";
const ESL_FACEBOOK_URL =
  "https://www.facebook.com/profile.php?id=61578898662430";
const ESL_INSTAGRAM_URL = "https://www.instagram.com/esl_launch/";

function FacebookIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden>
      <path
        fill="#1877F2"
        d="M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07C0 18.1 4.39 23.24 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.23 2.68.23v2.97h-1.51c-1.49 0-1.95.93-1.95 1.88v2.26h3.32l-.53 3.49h-2.79V24C19.61 23.24 24 18.1 24 12.07Z"
      />
    </svg>
  );
}

function InstagramIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden>
      <defs>
        <linearGradient id="esl-ig" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#F58529" />
          <stop offset="50%" stopColor="#DD2A7B" />
          <stop offset="100%" stopColor="#8134AF" />
        </linearGradient>
      </defs>
      <path
        fill="url(#esl-ig)"
        d="M12 2.2c3.2 0 3.6 0 4.9.1 3.3.1 4.8 1.7 4.9 4.9.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 3.2-1.7 4.8-4.9 4.9-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-3.3-.1-4.8-1.7-4.9-4.9C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9C2.4 3.9 4 2.4 7.1 2.3 8.4 2.2 8.8 2.2 12 2.2Zm0-2.2C8.7 0 8.3 0 7 0 2.7.2.2 2.7 0 7 0 8.3 0 8.7 0 12s0 3.7.1 5c.2 4.3 2.7 6.8 7 7 1.3 0 1.7.1 5 .1s3.7 0 5-.1c4.3-.2 6.8-2.7 7-7 0-1.3.1-1.7.1-5s0-3.7-.1-5C23.8 2.7 21.3.2 17 0 15.7 0 15.3 0 12 0Zm0 5.8a6.2 6.2 0 1 0 0 12.4 6.2 6.2 0 0 0 0-12.4ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.4-11.8a1.4 1.4 0 1 0 0 2.9 1.4 1.4 0 0 0 0-2.9Z"
      />
    </svg>
  );
}

export function EnglishLegacy() {
  return (
    <section className="bg-amber/10 py-20 md:py-28">
      <Container>
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-display text-3xl font-semibold text-navy md:text-4xl">
            From EnglishPro to ESL Launch
          </h2>
          <div className="mt-8 space-y-4 text-base leading-relaxed text-charcoal/85 md:text-lg">
            <p>
              Over the years KidsWow has changed to adapt and expand to fit the
              needs of young people. Although KidsWow EnglishPro is not currently
              an active program, the time-tested KidsWow curriculum is still
              relevant.
            </p>
            <p>
              Kim Okerman, Warren&apos;s daughter, had the vision to update and
              reimagine the KidsWow English program into a cohesive resource to
              equip educators. The result is ESL Launch—a place for teachers to
              access the three-part ESL Launch curriculum, kids books, and more.
            </p>
          </div>

          <p className="mx-auto mt-10 max-w-2xl text-center font-display text-lg font-semibold leading-snug text-sky md:mt-12 md:text-xl">
            Explore the time-tested curriculum for educators—ESL Launch.
            Products include curriculum Books 1–3 along with exciting new kids
            books!
          </p>
        </div>

        <div className="mx-auto mt-8 flex max-w-xl flex-col items-center sm:mt-10">
          <ButtonLink
            href={ESL_LAUNCH_URL}
            size="lg"
            className="w-full max-w-md px-10 py-5 text-center text-lg shadow-md ring-2 ring-amber/40 ring-offset-2 ring-offset-cream transition hover:shadow-lg hover:ring-amber/70 md:text-xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            Check out ESL Launch
          </ButtonLink>
        </div>

        <div className="mx-auto mt-10 flex max-w-lg flex-col items-center gap-4 sm:mt-12 sm:flex-row sm:justify-center sm:gap-5">
          <a
            href={ESL_FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex w-full max-w-xs items-center gap-4 rounded-2xl border border-navy/10 bg-white px-5 py-4 shadow-sm transition-all hover:border-sky/40 hover:shadow-md sm:w-auto"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#1877F2]/10 transition-transform group-hover:scale-105">
              <FacebookIcon className="h-6 w-6" />
            </span>
            <span className="min-w-0 text-left">
              <span className="block text-sm font-semibold text-navy">
                Facebook
              </span>
              <span className="block truncate text-sm text-charcoal/70">
                ESL Launch LLC
              </span>
            </span>
          </a>

          <a
            href={ESL_INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex w-full max-w-xs items-center gap-4 rounded-2xl border border-navy/10 bg-white px-5 py-4 shadow-sm transition-all hover:border-sky/40 hover:shadow-md sm:w-auto"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-amber/15 transition-transform group-hover:scale-105">
              <InstagramIcon className="h-6 w-6" />
            </span>
            <span className="min-w-0 text-left">
              <span className="block text-sm font-semibold text-navy">
                Instagram
              </span>
              <span className="block truncate text-sm text-charcoal/70">
                @esl_launch
              </span>
            </span>
          </a>
        </div>
      </Container>
    </section>
  );
}
