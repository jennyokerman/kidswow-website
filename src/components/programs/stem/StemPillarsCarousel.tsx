"use client";

import { useCallback, useEffect, useRef, useState, type TransitionEvent } from "react";
import { STEM_PILLARS } from "@/content/stem-pillars";
import { useCarouselAutoAdvance } from "@/hooks/useCarouselAutoAdvance";
import { CarouselOverlayArrows } from "@/components/ui/CarouselOverlayArrows";

const SLIDE_COUNT = STEM_PILLARS.length;
const SLIDES = [...STEM_PILLARS, STEM_PILLARS[0]];

function PillarCard({
  letter,
  title,
  body,
}: {
  letter: string;
  title: string;
  body: string;
}) {
  return (
    <div className="mx-auto flex h-full min-h-[22rem] max-w-4xl flex-col rounded-3xl bg-amber/15 px-6 py-10 ring-1 ring-amber/40 sm:min-h-[24rem] sm:px-10 sm:py-12 md:min-h-[26rem] md:px-14 md:py-14 lg:min-h-[28rem]">
      <p
        className="text-center font-display text-6xl font-bold leading-none text-amber/80 sm:text-7xl md:text-8xl"
        aria-hidden
      >
        {letter}
      </p>
      <h3 className="mt-4 text-center font-display text-3xl font-bold text-navy md:mt-6 md:text-4xl">
        {title}
      </h3>
      <p className="mx-auto mt-6 max-w-2xl flex-1 text-left text-base leading-relaxed text-charcoal/85 md:mt-8 md:text-lg md:leading-relaxed lg:text-xl">
        {body}
      </p>
    </div>
  );
}

export function StemPillarsCarousel() {
  const [index, setIndex] = useState(0);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const isAnimatingRef = useRef(false);

  const activeIndex = index >= SLIDE_COUNT ? 0 : index;

  const goToPillar = useCallback((pillarIndex: number) => {
    if (pillarIndex < 0 || pillarIndex >= SLIDE_COUNT) return;
    isAnimatingRef.current = true;
    setTransitionEnabled(true);
    setIndex(pillarIndex);
  }, []);

  const goNext = useCallback(() => {
    if (isAnimatingRef.current) return;

    isAnimatingRef.current = true;
    setTransitionEnabled(true);
    setIndex((current) => (current >= SLIDE_COUNT - 1 ? SLIDE_COUNT : current + 1));
  }, []);

  const goPrev = useCallback(() => {
    if (isAnimatingRef.current) return;

    isAnimatingRef.current = true;
    setTransitionEnabled(true);
    setIndex((current) => {
      if (current === 0 || current === SLIDE_COUNT) return SLIDE_COUNT - 1;
      return current - 1;
    });
  }, []);

  const handleTransitionEnd = useCallback(
    (event: TransitionEvent<HTMLDivElement>) => {
      if (
        event.target !== event.currentTarget ||
        event.propertyName !== "transform"
      ) {
        return;
      }

      isAnimatingRef.current = false;

      if (index === SLIDE_COUNT) {
        setTransitionEnabled(false);
        setIndex(0);
      }
    },
    [index],
  );

  useEffect(() => {
    if (!transitionEnabled && index === 0) {
      const frame = requestAnimationFrame(() => {
        setTransitionEnabled(true);
      });
      return () => cancelAnimationFrame(frame);
    }
  }, [transitionEnabled, index]);

  const { containerRef, pauseProps } = useCarouselAutoAdvance(goNext);

  return (
    <div className="relative mt-10 md:mt-12">
      <div ref={containerRef} className="relative" {...pauseProps}>
        <div className="overflow-hidden" aria-roledescription="carousel" aria-label="STEM core pillars">
          <div
            className="flex will-change-transform"
            style={{
              transform: `translate3d(-${index * 100}%, 0, 0)`,
              transition: transitionEnabled
                ? "transform 500ms cubic-bezier(0.4, 0, 0.2, 1)"
                : "none",
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {SLIDES.map((pillar, slideIndex) => (
              <article
                key={`${pillar.letter}-${slideIndex}`}
                className="w-full shrink-0 px-1"
                aria-roledescription="slide"
                aria-hidden={slideIndex === SLIDE_COUNT}
                aria-label={
                  slideIndex < SLIDE_COUNT
                    ? `${pillar.title}, ${slideIndex + 1} of ${SLIDE_COUNT}`
                    : undefined
                }
              >
                <PillarCard
                  letter={pillar.letter}
                  title={pillar.title}
                  body={pillar.body}
                />
              </article>
            ))}
          </div>
        </div>

        <CarouselOverlayArrows
          onPrev={goPrev}
          onNext={goNext}
          prevLabel="Previous pillar"
          nextLabel="Next pillar"
        />
      </div>

      <div
        className="mt-6 flex justify-center gap-2 sm:mt-8 sm:gap-3"
        role="tablist"
        aria-label="Choose a pillar"
      >
        {STEM_PILLARS.map((pillar, pillarIndex) => (
          <button
            key={pillar.letter}
            type="button"
            role="tab"
            aria-selected={pillarIndex === activeIndex}
            aria-label={`Go to ${pillar.title}`}
            onClick={() => goToPillar(pillarIndex)}
            className={`flex h-11 w-11 items-center justify-center rounded-full font-display text-lg font-bold transition-all sm:h-12 sm:w-12 sm:text-xl ${
              pillarIndex === activeIndex
                ? "bg-sky text-white shadow-md"
                : "bg-navy/10 text-navy hover:bg-navy/20"
            }`}
          >
            {pillar.letter}
          </button>
        ))}
      </div>
    </div>
  );
}
