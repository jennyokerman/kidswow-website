import { type ReactNode } from "react";
import { Container } from "@/components/ui/Container";

const TOPIC_CARDS: {
  title: string;
  body: ReactNode;
  cardClass: string;
  titleClass: string;
}[] = [
  {
    title: "The Foundation",
    body: (
      <>
        <p>
          It starts with cashflow. Learning how money works. Protecting
          yourself and your family in case of emergencies. Planning for the
          future.
        </p>
        <p className="mt-4">Learn how to build it right.</p>
      </>
    ),
    cardClass: "bg-navy/10 ring-navy/20",
    titleClass: "text-navy",
  },
  {
    title: "Entrepreneurial Mindset",
    body: (
      <>
        <p>
          Learn from great minds, so you can think like an owner. Gain
          understanding of how purpose drives success and invest in yourself.
        </p>
        <p className="mt-4">You are your greatest asset!</p>
      </>
    ),
    cardClass: "bg-sage/20 ring-sage/40",
    titleClass: "text-sage",
  },
];

export function FinanceFoundationsTopics() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-semibold text-navy md:text-4xl">
            Financial Confidence Starts Here
          </h2>
        </div>

        <p className="mx-auto mt-6 max-w-3xl text-left text-base leading-relaxed text-charcoal/85 md:text-lg">
          As kids grow into adults, learning how to handle money becomes more
          and more important. Let&apos;s build a solid foundation so that debt,
          taxes, and medical emergencies don&apos;t have to have the final say.
        </p>

        <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2 md:mt-12 md:gap-8">
          {TOPIC_CARDS.map((card) => (
            <article
              key={card.title}
              className={`flex min-w-0 flex-col rounded-3xl p-6 ring-1 md:p-8 ${card.cardClass}`}
            >
              <h3
                className={`font-display text-xl font-bold md:text-2xl ${card.titleClass}`}
              >
                {card.title}
              </h3>
              <div className="mt-4 text-base leading-relaxed text-charcoal/85 md:text-lg">
                {card.body}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
