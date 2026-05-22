export function MediaPlaceholder({
  label = "Image coming soon",
  className = "",
  square = false,
}: {
  label?: string;
  className?: string;
  square?: boolean;
}) {
  const aspect = square ? "aspect-square" : "aspect-[4/3]";
  return (
    <div
      className={`flex ${aspect} w-full items-center justify-center rounded-3xl bg-sage/15 ring-1 ring-sage/25 ${className}`}
      role="img"
      aria-label={label}
    >
      <span className="px-6 text-center text-sm font-medium text-sage">
        {label}
      </span>
    </div>
  );
}
