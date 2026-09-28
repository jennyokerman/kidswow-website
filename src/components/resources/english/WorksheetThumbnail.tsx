import Image from "next/image";

function DownloadIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

/** Derive /book-N/thumbs/name.webp from a PDF href. */
export function thumbnailFromPdfHref(pdfHref: string): string {
  const parts = pdfHref.split("/");
  const file = parts.pop() ?? "";
  const thumb = file.replace(/\.pdf$/i, ".webp");
  return [...parts, "thumbs", thumb].join("/");
}

export function WorksheetThumbnail({
  src,
  title,
}: {
  src: string;
  title: string;
}) {
  return (
    <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl bg-white ring-1 ring-navy/10">
      <Image
        src={src}
        alt={`Preview of ${title}`}
        fill
        className="object-cover object-top"
        sizes="(max-width: 640px) 45vw, (max-width: 1024px) 22vw, 200px"
        loading="lazy"
      />
      <span
        className="absolute bottom-2.5 right-2.5 flex h-9 w-9 items-center justify-center rounded-full bg-amber text-navy shadow-md ring-2 ring-white/70 transition group-hover:scale-105"
        aria-hidden
      >
        <DownloadIcon className="h-4 w-4" />
      </span>
    </div>
  );
}
