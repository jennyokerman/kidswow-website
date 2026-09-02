"use client";

import { useState } from "react";

export function YouTubeFacade({
  videoId,
  title,
  className = "",
}: {
  videoId: string;
  title: string;
  className?: string;
}) {
  const [playing, setPlaying] = useState(false);
  const thumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  if (playing) {
    return (
      <div
        className={`aspect-video overflow-hidden rounded-2xl bg-navy ${className}`}
      >
        <iframe
          className="h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      className={`group relative aspect-video w-full overflow-hidden rounded-2xl bg-navy ring-1 ring-sage/25 ${className}`}
      aria-label={`Play video: ${title}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={thumbnail}
        alt=""
        className="h-full w-full object-cover"
        loading="eager"
      />
      <span
        className="absolute inset-0 bg-navy/30 transition group-hover:bg-navy/40"
        aria-hidden
      />
      <span
        className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-amber text-navy shadow-lg ring-4 ring-white/30 transition group-hover:scale-105 md:h-20 md:w-20"
        aria-hidden
      >
        <svg
          className="h-7 w-7 translate-x-0.5 md:h-8 md:w-8"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M8 5.14v13.72a1 1 0 001.5.86l11-6.86a1 1 0 000-1.72l-11-6.86A1 1 0 008 5.14z" />
        </svg>
      </span>
    </button>
  );
}
