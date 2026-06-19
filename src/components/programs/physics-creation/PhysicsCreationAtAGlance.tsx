import Link from "next/link";
import { type ReactNode } from "react";
import { Container } from "@/components/ui/Container";

function FactIcon({ children }: { children: ReactNode }) {
  return (
    <span
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/80 shadow-sm ring-1 ring-navy/10 xl:h-10 xl:w-10"
      aria-hidden
    >
      {children}
    </span>
  );
}

const bodyClass =
  "text-sm leading-snug text-charcoal sm:text-base sm:leading-relaxed";

const FACTS = [
  {
    label: "Who",
    cardClass: "bg-navy/10 ring-navy/20",
    iconClass: "text-navy",
    icon: (
      <FactIcon>
        <svg
          className="h-5 w-5 text-navy xl:h-6 xl:w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.75}
          aria-hidden
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
          />
        </svg>
      </FactIcon>
    ),
    body: (
      <p className={`${bodyClass} xl:text-center`}>
        <span className="font-semibold text-navy">Homeschool families</span>
        ,{" "}
        <span className="font-semibold text-navy">church youth groups</span>
        , <span className="font-semibold text-navy">adult learners</span>
        … you name it!
      </p>
    ),
  },
  {
    label: "Where",
    cardClass: "bg-sky/15 ring-sky/35",
    iconClass: "text-sky",
    icon: (
      <FactIcon>
        <svg
          className="h-5 w-5 text-sky xl:h-6 xl:w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.75}
          aria-hidden
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
          />
        </svg>
      </FactIcon>
    ),
    body: (
      <div className={`${bodyClass} space-y-1 xl:text-center`}>
        <p>
          <span className="font-semibold text-navy">In Person</span>
          <span className="text-charcoal/80"> - </span>
          <span className="font-semibold text-navy">KC Metro</span>
        </p>
        <p className="text-charcoal/85">(online presentation also available)</p>
      </div>
    ),
  },
  {
    label: "Length",
    cardClass: "bg-sage/20 ring-sage/40",
    iconClass: "text-sage",
    icon: (
      <FactIcon>
        <svg
          className="h-5 w-5 text-sage xl:h-6 xl:w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.75}
          aria-hidden
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </FactIcon>
    ),
    body: (
      <p className={`${bodyClass} xl:text-center`}>
        <span className="font-semibold text-navy">30 minutes</span>
        <span className="text-charcoal/80"> to </span>
        <span className="font-semibold text-navy">3 hours</span>
      </p>
    ),
  },
  {
    label: "Cost",
    cardClass: "bg-amber/15 ring-amber/40",
    iconClass: "text-amber",
    icon: (
      <FactIcon>
        <svg
          className="h-5 w-5 text-amber xl:h-6 xl:w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.75}
          aria-hidden
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </FactIcon>
    ),
    body: (
      <p className={`${bodyClass} xl:text-center`}>
        <span className="font-semibold text-navy">Varies</span>
        <span className="text-charcoal/80"> — </span>
        <Link
          href="/contact"
          className="font-semibold text-sky underline decoration-sky/40 underline-offset-4 hover:text-navy"
        >
          Contact Us
        </Link>
      </p>
    ),
  },
] as const;

export function PhysicsCreationAtAGlance() {
  return (
    <section className="bg-sage/10 py-10 md:py-12 lg:py-14">
      <Container>
        <h2 className="text-center font-display text-3xl font-semibold text-navy md:text-4xl">
          At a Glance
        </h2>

        <div className="mt-6 grid grid-cols-1 items-stretch gap-3 sm:auto-rows-fr sm:grid-cols-2 xl:grid-cols-4 xl:gap-4">
          {FACTS.map((fact) => (
            <article
              key={fact.label}
              className={`flex h-full flex-row items-center gap-3 rounded-xl p-3.5 ring-1 sm:p-4 xl:flex-col xl:items-center xl:justify-center xl:gap-2.5 xl:px-3.5 xl:py-4 xl:text-center ${fact.cardClass}`}
            >
              {fact.icon}
              <div className="flex min-w-0 flex-1 flex-col justify-center xl:flex-none xl:items-center">
                <h3
                  className={`text-xs font-bold uppercase tracking-widest ${fact.iconClass}`}
                >
                  {fact.label}
                </h3>
                <div className="mt-1">{fact.body}</div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
