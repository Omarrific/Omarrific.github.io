import { useEffect, useRef, useState } from 'react';

interface Options {
  rootMargin?: string;
  threshold?: number;
}

/**
 * Reports once when an element first scrolls into view, then stops observing.
 * Falls back to "visible" where IntersectionObserver is unavailable so content
 * is never stuck hidden.
 */
export function useInView<T extends Element>({
  rootMargin = '0px 0px -80px 0px',
  threshold = 0.1,
}: Options = {}) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (!('IntersectionObserver' in window)) {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin, threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin, threshold]);

  return [ref, inView] as const;
}
