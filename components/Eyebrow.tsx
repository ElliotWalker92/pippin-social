import { cn } from "@/lib/utils";

export function Eyebrow({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "font-sans text-xs tracking-widest-plus text-charcoal/70 uppercase",
        className
      )}
    >
      {children}
    </p>
  );
}
