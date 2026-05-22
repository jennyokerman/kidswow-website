"use client";

import { useCallback, useRef, useState } from "react";
import {
  KIDSWOW_STORIES_INTRO,
  type KidsWowStory,
} from "@/content/kidswow-stories";

export function StoriesCarousel({ stories }: { stories: KidsWowStory[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = useCallback((index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const slide = track.children[index] as HTMLElement | undefined;
    slide?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" });
    setActiveIndex(index);
  }, []);

  const handleScroll = useCallback(() => {
    const track = trackRef.current;
    if (!track || stories.length === 0) return;
    const slideWidth = track.clientWidth;
    if (slideWidth === 0) return;
    const index = Math.round(track.scrollLeft / slideWidth);
    setActiveIndex(Math.min(Math.max(index, 0), stories.length - 1));
  }, [stories.length]);

  const goPrev = () => scrollToIndex(activeIndex <= 0 ? stories.length - 1 : activeIndex - 1);
  const goNext = () => scrollToIndex(activeIndex >= stories.length - 1 ? 0 : activeIndex + 1);

  return (
    <div className="relative mt-12">
      <div
        ref={trackRef}
        onScroll={handleScroll}
        className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        aria-roledescription="carousel"
        aria-label="KidsWow stories"
      >
        {stories.map((story, index) => (
          <article
            key={story.id}
            className="w-full shrink-0 snap-start snap-always px-1"
            aria-roledescription="slide"
            aria-label={`Story ${index + 1} of ${stories.length}`}
          >
            <blockquote className="mx-auto max-w-3xl rounded-3xl bg-white px-8 py-10 shadow-sm ring-1 ring-navy/5 md:px-12 md:py-12">
              <p className="text-xs font-semibold uppercase tracking-wider text-sage">
                {story.label}
              </p>
              <p className="mt-5 font-display text-lg leading-relaxed text-navy md:text-xl md:leading-relaxed">
                &ldquo;{story.text}&rdquo;
              </p>
              <footer className="mt-8 text-sm font-medium text-sky">
                {KIDSWOW_STORIES_INTRO.attribution}
              </footer>
            </blockquote>
          </article>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-center gap-6">
        <button
          type="button"
          onClick={goPrev}
          className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-navy/20 text-navy transition-colors hover:border-navy hover:bg-navy hover:text-cream"
          aria-label="Previous story"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="flex gap-2" role="tablist" aria-label="Choose a story">
          {stories.map((story, index) => (
            <button
              key={story.id}
              type="button"
              role="tab"
              aria-selected={index === activeIndex}
              aria-label={`Go to story ${index + 1}`}
              onClick={() => scrollToIndex(index)}
              className={`h-2.5 rounded-full transition-all ${
                index === activeIndex
                  ? "w-8 bg-sky"
                  : "w-2.5 bg-navy/20 hover:bg-navy/40"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={goNext}
          className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-navy/20 text-navy transition-colors hover:border-navy hover:bg-navy hover:text-cream"
          aria-label="Next story"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
