import { Container } from "@/components/ui/Container";

const TIMELINE = [
  { year: "2005", label: "KidsWow English launched in Japan" },
  {
    year: "2016",
    label: "Program for robotics and coding begins; STEM curriculum starting to develop",
  },
  {
    year: "2021",
    label: "Teaching at schools and homeschool co-ops in the US",
  },
  {
    year: "Today",
    label: "Hands-on STEM, physics, and foundational finance skills",
  },
] as const;

export function StoryTimeline() {
  return (
    <section className="py-14 md:py-20">
      <Container>
        <div className="mx-auto max-w-2xl">
          <h2 className="text-center font-display text-3xl font-semibold text-navy md:text-4xl">
            Quick Timeline
          </h2>
          <ol className="mt-10 space-y-0">
            {TIMELINE.map((item, index) => (
              <li
                key={item.year}
                className={`relative flex gap-5 pb-8 pl-2 md:gap-6 ${
                  index < TIMELINE.length - 1
                    ? "border-l-2 border-sky/40"
                    : "border-l-2 border-transparent"
                }`}
              >
                <span
                  className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-amber ring-4 ring-cream"
                  aria-hidden
                />
                <div className="min-w-0 pt-0">
                  <p className="font-display text-lg font-semibold text-sky md:text-xl">
                    {item.year}
                  </p>
                  <p className="mt-1 text-base leading-relaxed text-charcoal/85 md:text-lg">
                    {item.label}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
