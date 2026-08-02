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

export function LeafIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M20 8c9 3 12 13 0 24C8 21 11 11 20 8Z" />
      <path d="M20 11c-1 6-1 13 0 19" />
    </svg>
  );
}

export function TargetIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <circle cx="20" cy="20" r="13" />
      <circle cx="20" cy="20" r="7.5" />
      <circle cx="20" cy="20" r="2" />
    </svg>
  );
}

export const featureIcons = {
  compass: CompassIcon,
  pen: PenIcon,
  bars: BarsIcon,
  leaf: LeafIcon,
  target: TargetIcon,
};

export function GiftIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <rect x="9" y="17" width="22" height="15" />
      <path d="M9 23h22" />
      <path d="M20 17v15" />
      <path d="M20 17c0-4-5-6-6-3s3 4 6 3Z" />
      <path d="M20 17c0-4 5-6 6-3s-3 4-6 3Z" />
    </svg>
  );
}

export function UserIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <circle cx="20" cy="15" r="6" />
      <path d="M9 32c0-7 5-11 11-11s11 4 11 11" />
    </svg>
  );
}

export function FlagIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M12 8v24" />
      <path d="M12 10c6-4 10 2 16-2v10c-6 4-10-2-16 2Z" />
    </svg>
  );
}

export function CalendarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <rect x="8" y="10" width="24" height="22" />
      <path d="M8 16h24" />
      <path d="M14 7v6" />
      <path d="M26 7v6" />
    </svg>
  );
}

export function ChatIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M8 12h24v14H16l-6 6v-6H8Z" />
    </svg>
  );
}

export function BulbIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M20 8c-6 0-10 4-10 9 0 4 2 6 4 8v4h12v-4c2-2 4-4 4-8 0-5-4-9-10-9Z" />
      <path d="M16 32h8" />
      <path d="M17 29h6" />
    </svg>
  );
}

export const partnershipIcons = {
  gift: GiftIcon,
  user: UserIcon,
  flag: FlagIcon,
  calendar: CalendarIcon,
  chat: ChatIcon,
  bulb: BulbIcon,
};
