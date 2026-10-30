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

    // Which breakpoints actually animate is decided in globals.css — below
    // `sm` the class is inert. The observer still runs at every width so
    // that crossing the breakpoint (rotating a phone to landscape clears
    // 40rem) can't leave content stuck at opacity 0 with nothing to reveal
    // it.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        // `threshold: 0` fires as soon as any part crosses the line, so the
        // trigger point doesn't depend on how tall the element is.
        threshold: 0,
        // Fixed pixels rather than a percentage: mobile browsers resize the
        // viewport continuously as the address bar collapses, which would
        // otherwise keep moving the trigger line mid-scroll.
        rootMargin: "0px 0px -64px 0px",
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
