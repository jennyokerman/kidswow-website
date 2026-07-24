import { useEffect, useRef, useState, type FocusEvent } from "react";

export function useCarouselAutoAdvance(onAdvance: () => void, intervalMs = 2000) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const onAdvanceRef = useRef(onAdvance);

  useEffect(() => {
    onAdvanceRef.current = onAdvance;
  }, [onAdvance]);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.6 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible || isHovered) return;

    const timer = window.setInterval(() => {
      onAdvanceRef.current();
    }, intervalMs);

    return () => window.clearInterval(timer);
  }, [isVisible, isHovered, intervalMs]);

  const pauseProps = {
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
    onFocusCapture: () => setIsHovered(true),
    onBlurCapture: (event: FocusEvent<HTMLDivElement>) => {
      if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
        setIsHovered(false);
      }
    },
  };

  return { containerRef, pauseProps };
}
