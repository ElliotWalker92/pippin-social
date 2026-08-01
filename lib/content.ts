// Single source of truth for homepage copy. Edit here, not in components.

export const brand = {
  name: "pippin",
  tagline: "Social made simple.",
  descriptor: "Full service social media agency",
  services: ["Strategy", "Content", "Organic", "Paid"],
  email: "hello@pippinsocial.com",
};

export const nav = {
  links: [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Our Work", href: "/work" },
    { label: "Process", href: "#process" },
    { label: "Journal", href: "/journal" },
  ],
  cta: { label: "Get in touch", href: "/contact" },
};

export const hero = {
  eyebrow: "Full service social media agency",
  headline: ["Social made", "simple."],
  paragraphs: [
    "We take every part of social media off your hands – from strategy and content to paid campaigns and reporting.",
    "One team. One strategy. Everything working together.",
  ],
  cta: { label: "Let's talk", href: "/contact" },
};

export const serviceTicker = ["Strategy", "Content", "Organic", "Paid"];

export const about = {
  eyebrow: "About pippin",
  headline: "We're your complete social media team.",
  body: "Most agencies do one thing. We do everything. We simplify the complex so your brand can show up consistently, connect deeply and grow with confidence.",
  link: { label: "About us", href: "#about" },
};

export const featureBand = [
  {
    title: "Strategic thinking",
    body: "Everything starts with a plan.",
    icon: "compass",
  },
  {
    title: "Beautiful content",
    body: "Creative that's made to be remembered.",
    icon: "pen",
  },
  {
    title: "Performance focused",
    body: "Data-led decisions that drive real results.",
    icon: "bars",
  },
  {
    title: "True partnership",
    body: "We care about your brand like you do.",
    icon: "handshake",
  },
] as const;

export const process = {
  eyebrow: "How we work",
  headline: "A simple process for exceptional results.",
  steps: [
    {
      number: "01",
      title: "Discovery",
      body: "We get to know your business.",
    },
    {
      number: "02",
      title: "Deep Dive",
      body: "Audience, competitors, current social, goals.",
    },
    {
      number: "03",
      title: "Strategy",
      body: "A clear roadmap. No guesswork.",
    },
    {
      number: "04",
      title: "Create",
      body: "Planning, filming, design, copy, ads.",
    },
    {
      number: "05",
      title: "Launch",
      body: "Everything goes live.",
    },
    {
      number: "06",
      title: "Optimise",
      body: "Weekly improvements. Monthly reporting.",
    },
  ],
};

// Placeholder figures — replace with real client results once available.
export const results = {
  headline: "Results that matter.",
  stats: [
    { value: "+132%", label: "Increase in reach" },
    { value: "+87%", label: "Increase in engagement" },
    { value: "+64%", label: "Increase in website traffic" },
    { value: "3.2x", label: "Return on ad spend" },
  ],
};

export const closingCta = {
  headline: "Ready to stop worrying about social?",
  body: "Tell us a little about your brand and we'll take it from there.",
  cta: { label: "Get in touch", href: "/contact" },
  email: brand.email,
};

export const footer = {
  tagline: "SOCIAL MADE SIMPLE",
  nav: [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Our Work", href: "/work" },
    { label: "Process", href: "#process" },
    { label: "Journal", href: "/journal" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "Strategy", href: "#services" },
    { label: "Content", href: "#services" },
    { label: "Organic Social", href: "#services" },
    { label: "Paid Social", href: "#services" },
    { label: "Community Management", href: "#services" },
    { label: "Reporting", href: "#services" },
  ],
  social: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
  ],
  email: brand.email,
  location: "Chester, UK",
  copyright: `© pippin ${new Date().getFullYear()}. All rights reserved.`,
};
