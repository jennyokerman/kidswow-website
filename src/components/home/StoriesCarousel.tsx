"use client";

import Image, { type StaticImageData } from "next/image";
import { useCallback, useRef, useState } from "react";
import {
  KIDSWOW_STORIES_INTRO,
  type KidsWowStory,
} from "@/content/kidswow-stories";
import { useCarouselAutoAdvance } from "@/hooks/useCarouselAutoAdvance";
import { CarouselOverlayArrows } from "@/components/ui/CarouselOverlayArrows";
import inspirationOne from "../../../Kidswowpics1/KidsWow Home/kidswowinspiration1.png";
import inspirationTwo from "../../../Kidswowpics1/KidsWow Home/kidswowinspiration2.png";
import inspirationThree from "../../../Kidswowpics1/KidsWow Home/kidswowinspiration3.png";

const STORY_MEDIA: Record<
  string,
  { src: StaticImageData; alt: string; side: "left" | "right" }
> = {
  "engineering-path": {
    src: inspirationOne,
    alt: "Students working together on a robotics project",
    side: "left",
  },
  "graphic-design-anime": {
    src: inspirationTwo,
    alt: "A computer screen showing an anime character drawn with code",
    side: "right",
  },
  "guitar-composer": {
    src: inspirationThree,
    alt: "A musician playing an acoustic guitar",
    side: "left",
  },
};

export function StoriesCarousel({ stories }: { stories: KidsWowStory[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToIndex = useCallback((index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const slide = track.children[index] as HTMLElement | undefined;
    slide?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
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

  const goPrev = useCallback(() => {
    scrollToIndex(activeIndex <= 0 ? stories.length - 1 : activeIndex - 1);
  }, [activeIndex, scrollToIndex, stories.length]);

  const goNext = useCallback(() => {
    scrollToIndex(activeIndex >= stories.length - 1 ? 0 : activeIndex + 1);
  }, [activeIndex, scrollToIndex, stories.length]);

  const { containerRef, pauseProps } = useCarouselAutoAdvance(goNext);

  return (
    <div className="relative mt-12">
      <div ref={containerRef} className="relative" {...pauseProps}>
        <div
          ref={trackRef}
          onScroll={handleScroll}
          className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          aria-roledescription="carousel"
          aria-label="KidsWow inspiration"
        >
          {stories.map((story, index) => {
            const media = STORY_MEDIA[story.id];

            return (
              <article
                key={story.id}
                className="w-full shrink-0 snap-start snap-always px-1"
                aria-roledescription="slide"
                aria-label={`Story ${index + 1} of ${stories.length}`}
              >
                <blockquote className="mx-auto max-w-5xl rounded-3xl bg-white p-4 shadow-sm ring-1 ring-navy/5 sm:p-6 md:p-8">
                  <div
                    className={`grid items-center gap-4 sm:gap-6 md:gap-10 ${
                      media.side === "left"
                        ? "grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)]"
                        : "grid-cols-[minmax(0,0.58fr)_minmax(0,0.42fr)]"
                    }`}
                  >
                    <div
                      className={`relative aspect-[4/3] min-w-0 overflow-hidden rounded-2xl bg-sage/10 ${
                        media.side === "right" ? "order-2" : ""
                      }`}
                    >
                      <Image
                        src={media.src}
                        alt={media.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 40vw, 400px"
                      />
                    </div>

                    <div className="min-w-0 py-2 sm:py-4">
                      <p className="text-[0.65rem] font-semibold uppercase tracking-wider text-sage sm:text-xs">
                        {story.label}
                      </p>
                      <p className="mt-3 font-display text-xs leading-relaxed text-navy sm:mt-5 sm:text-base md:text-lg md:leading-relaxed lg:text-xl">
                        &ldquo;{story.text}&rdquo;
                      </p>
                      <footer className="mt-4 text-[0.65rem] font-medium text-sky sm:mt-6 sm:text-xs md:mt-8 md:text-sm">
                        {KIDSWOW_STORIES_INTRO.attribution}
                      </footer>
                    </div>
                  </div>
                </blockquote>
              </article>
            );
          })}
        </div>

        <CarouselOverlayArrows
          onPrev={goPrev}
          onNext={goNext}
          prevLabel="Previous story"
          nextLabel="Next story"
        />
      </div>

      <div
        className="mt-6 flex justify-center gap-2"
        role="tablist"
        aria-label="Choose a story"
      >
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
    </div>
  );
}
