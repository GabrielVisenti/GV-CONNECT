import { useEffect, useRef, useState } from "react";

/**
 * Hides the header when scrolling down, reveals it when scrolling up.
 * rAF-throttled, passive listener, with a delta threshold to avoid flicker.
 */
export function useHideOnScroll({
  hideAfter = 100,
  delta = 10,
  disabled = false,
}: { hideAfter?: number; delta?: number; disabled?: boolean } = {}) {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const lastY = useRef(0);
  const ticking = useRef(false);
  const disabledRef = useRef(disabled);
  disabledRef.current = disabled;

  useEffect(() => {
    lastY.current = window.scrollY;

    const update = () => {
      ticking.current = false;
      const y = Math.max(0, window.scrollY);
      setScrolled((p) => (p === y > 24 ? p : y > 24));

      if (disabledRef.current) {
        setHidden((p) => (p ? false : p));
        lastY.current = y;
        return;
      }

      const diff = y - lastY.current;
      if (Math.abs(diff) < delta) return;

      if (y <= hideAfter) setHidden((p) => (p ? false : p));
      else if (diff > 0) setHidden((p) => (p ? p : true));
      else setHidden((p) => (p ? false : p));

      lastY.current = y;
    };

    const onScroll = () => {
      if (!ticking.current) {
        ticking.current = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [hideAfter, delta]);

  useEffect(() => {
    if (disabled) setHidden(false);
  }, [disabled]);

  return { hidden, scrolled };
}
