import { useState, useRef, useEffect } from "react";

type UseStickyProps = {
  top: number;
  threshold?: number | number[];
  rootMargin?: string;
};

export const useSticky = ({
  top,
  threshold = [0, 1],
  rootMargin = `${top}px`,
}: UseStickyProps) => {
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const target = sentinelRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting);
      },
      { threshold, rootMargin }
    );

    observer.observe(target);

    return () => {
      observer.unobserve(target);
    };
  }, [threshold, rootMargin]);

  return { isSticky, sentinelRef } as const;
};
