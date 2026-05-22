const PROMOTES = [
  "internal motivation",
  "problem solving",
  "creative thinking",
  "real experience",
  "collaboration",
] as const;

export function NaturalLearningPromotes() {
  return (
    <div className="mx-auto mt-12 max-w-5xl px-1">
      <p className="text-center text-sm font-semibold uppercase tracking-widest text-sky">
        The Natural Learning Method Promotes:
      </p>
      <ul className="mt-5 flex flex-nowrap justify-center gap-1.5 overflow-x-auto py-0.5 sm:gap-2 md:mt-6 md:gap-2.5">
        {PROMOTES.map((item) => (
          <li
            key={item}
            className="shrink-0 whitespace-nowrap rounded-full bg-cream px-2.5 py-1.5 text-[0.7rem] font-semibold capitalize leading-tight text-navy ring-1 ring-sage/30 sm:px-3 sm:py-1.5 sm:text-xs md:text-sm"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
