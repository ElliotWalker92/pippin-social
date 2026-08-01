import { cn } from "@/lib/utils";

/**
 * Stand-in for real photography. Drop a real <Image> in place of this
 * component when assets are ready — the `label` prop documents what
 * should go here.
 */
export function ImagePlaceholder({
  label,
  className,
  ratio = "aspect-[4/5]",
}: {
  label: string;
  className?: string;
  ratio?: string;
}) {
  return (
    <div
      role="img"
      aria-label={label}
      className={cn(
        "relative flex items-center justify-center overflow-hidden border border-stone bg-stone",
        ratio,
        className
      )}
    >
      <span className="px-6 text-center font-sans text-[0.65rem] tracking-widest-plus text-charcoal/40 uppercase">
        {label}
      </span>
    </div>
  );
}
