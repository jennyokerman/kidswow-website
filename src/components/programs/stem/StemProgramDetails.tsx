import Link from "next/link";
import { type ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { StemProgramHowItWorks } from "@/components/programs/stem/StemProgramHowItWorks";

function FactIcon({ children }: { children: ReactNode }) {
  return (
    <span
      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/70 shadow-sm ring-1 ring-navy/10"
      aria-hidden
    >
      {children}
    </span>
  );
}

const NEED_TO_KNOW = [
  {
    label: "Who",
    cardClass: "bg-navy/10 ring-navy/20",
    iconClass: "text-navy",
    icon: (
      <FactIcon>
        <svg
          className="h-6 w-6 text-navy"
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
      <p className="text-base leading-relaxed text-charcoal md:text-lg">
        Ideal for{" "}
        <span className="font-semibold text-navy">ages 7–10</span> and{" "}
        <span className="font-semibold text-navy">11–14</span>
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
          className="h-6 w-6 text-sky"
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
      <p className="text-base leading-relaxed text-charcoal md:text-lg">
        <span className="font-semibold text-navy">In Person</span>
        <span className="text-charcoal/80"> — </span>
        <span className="font-semibold text-navy">Kansas City Metro</span>
      </p>
    ),
  },
  {
    label: "Length",
    cardClass: "bg-sage/20 ring-sage/40",
    iconClass: "text-sage",
    icon: (
      <FactIcon>
        <svg
          className="h-6 w-6 text-sage"
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
      <p className="text-base leading-relaxed text-charcoal md:text-lg">
        <span className="font-semibold text-navy">Semester</span> or{" "}
        <span className="font-semibold text-navy">2–3 Day STEM Camp</span>
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
          className="h-6 w-6 text-amber"
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
      <p className="text-base leading-relaxed text-charcoal md:text-lg">
        <span className="font-semibold text-navy">Customized</span>
        <span className="text-charcoal/80"> — </span>
        <Link
          href="/contact"
          className="font-semibold text-sky underline decoration-sky/40 underline-offset-4 hover:text-navy"
        >
          Contact us
        </Link>
      </p>
    ),
  },
] as const;

export function StemProgramDetails() {
  return (
    <section className="bg-sage/10 pt-10 pb-16 md:pt-12 md:pb-20 lg:pt-14 lg:pb-24">
      <Container className="mx-auto max-w-5xl">
        <h2 className="text-center font-display text-3xl font-semibold text-navy md:text-4xl">
          What You Need to Know
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-stretch md:gap-5">
          {NEED_TO_KNOW.map((item) => (
            <article
              key={item.label}
              className={`flex gap-4 rounded-2xl p-5 ring-2 md:gap-5 md:p-6 ${item.cardClass}`}
            >
              {item.icon}
              <div className="min-w-0 flex-1">
                <h3
                  className={`text-xs font-bold uppercase tracking-widest ${item.iconClass}`}
                >
                  {item.label}
                </h3>
                <div className="mt-2">{item.body}</div>
              </div>
            </article>
          ))}
        </div>

        <h3 className="mt-12 text-center font-display text-2xl font-semibold text-navy md:mt-14">
          How It Works
        </h3>
        <StemProgramHowItWorks />
      </Container>
    </section>
  );
}
