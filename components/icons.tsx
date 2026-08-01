import type { SVGProps } from "react";

const base = {
  viewBox: "0 0 40 40",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  focusable: false,
};

export function CompassIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <circle cx="20" cy="20" r="15" />
      <path d="M24.5 15.5 21.8 21.8 15.5 24.5 18.2 18.2Z" />
    </svg>
  );
}

export function PenIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M12 28 13 22 25.5 9.5a2.1 2.1 0 0 1 3 3L15.5 25 9 28Z" />
      <path d="M22 12.5 25.5 16" />
    </svg>
  );
}

export function BarsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M11 28V17M20 28V10M29 28V21" />
      <path d="M8 28h24" />
    </svg>
  );
}

export function HandshakeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M6 18 12 12l6 5" />
      <path d="M34 18 28 12l-6 5" />
      <path d="M12 17 18 23a2 2 0 0 0 3-3l-5.5-5.5" />
      <path d="M28 17 22 23a2 2 0 0 1-3-3" />
      <path d="M6 18v6l5 5" />
      <path d="M34 18v6l-5 5" />
    </svg>
  );
}

export const featureIcons = {
  compass: CompassIcon,
  pen: PenIcon,
  bars: BarsIcon,
  handshake: HandshakeIcon,
};
