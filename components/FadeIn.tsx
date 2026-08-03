"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

export function FadeIn({
  children,
  className,
  delayMs = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delayMs?: number;
  as?: "div" | "li";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Below `sm` the fade starts *before* the element reaches the screen, so
    // it has already resolved by the time you see it. Triggering once the
    // element is on screen means watching every row appear, and with no
    // stagger on mobile a whole group resolves at once — which reads as a
    // flash. Desktop keeps the later trigger, where the fade-and-rise is
    // meant to be seen.
    const isWide = window.matchMedia("(min-width: 40rem)").matches;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        // `threshold: 0` fires as soon as any part crosses the line, so the
        // trigger point doesn't depend on how tall the element is — stacked
        // mobile blocks are far taller than desktop columns, and a
        // ratio-based threshold made them start noticeably later.
        threshold: 0,
        // Fixed pixels rather than percentages: mobile browsers resize the
        // viewport continuously as the address bar collapses, which would
        // otherwise keep moving the trigger line mid-scroll.
        // 400px of runway: enough that even a brisk scroll has the 0.45s
        // fade finished, or nearly so, before the element is on screen.
        rootMargin: isWide ? "0px 0px -64px 0px" : "0px 0px 400px 0px",
      }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      // Consumed by `.fade-in-el` in globals.css, which only applies the
      // stagger once items sit side by side (see the note there).
      style={{ "--fade-delay": `${delayMs}ms` } as CSSProperties}
      className={cn("fade-in-el", visible && "is-visible", className)}
    >
      {children}
    </Tag>
  );
}
