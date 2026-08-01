import { cn } from "@/lib/utils";

/**
 * The pippin brand mark: a lowercase serif "p" with a thin vertical
 * rule to its right. Inline SVG so it scales cleanly at any size.
 */
export function BrandMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 44 56"
      className={cn("h-8 w-auto text-softblack", className)}
      aria-hidden="true"
      focusable="false"
    >
      <text
        x="-2"
        y="44"
        fontFamily="var(--font-serif)"
        fontSize="52"
        fontWeight="400"
        fill="currentColor"
      >
        p
      </text>
      <line
        x1="38"
        y1="4"
        x2="38"
        y2="52"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export function Wordmark({
  className,
  markClassName,
}: {
  className?: string;
  markClassName?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 font-serif text-2xl tracking-widest-plus text-softblack lowercase",
        className
      )}
    >
      pippin
      <span
        aria-hidden="true"
        className={cn("h-5 w-px bg-softblack", markClassName)}
      />
    </span>
  );
}
