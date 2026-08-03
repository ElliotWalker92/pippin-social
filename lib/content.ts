// Single source of truth for homepage copy. Edit here, not in components.

export const brand = {
  name: "pippin",
  tagline: "Social made simple.",
  descriptor: "Full service social media agency",
  services: ["Strategy", "Content", "Organic", "Paid", "Analytics"],
  email: "holly@pippinsocial.com",
};

export const nav = {
  links: [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Partnership", href: "/partnership" },
    { label: "Updates", href: "/updates" },
  ],
  cta: { label: "Get in touch", href: "/contact" },
};

export const hero = {
  eyebrow: "Full service social media agency",
  headline: ["Social made", "simple."],
  paragraphs: [
    "A full-service social media agency that gives busy founders their headspace back.",
    "We take complete ownership of your social media — strategy, content, organic, paid and reporting. One team. One strategy. One point of contact.",
  ],
  cta: { label: "Let's talk", href: "/contact" },
};

export const serviceTicker = [
  "Strategy",
  "Content",
  "Organic",
  "Paid",
  "Analytics",
];

export const about = {
  eyebrow: "About pippin",
  headline: "We're your complete social media team.",
  body: "Social media was supposed to help businesses grow. Somewhere along the way it became another business to manage. Another agency. Another freelancer. Another meeting. Pippin exists to change that. Our job isn't to create more work for you. It's to take work away.",
  link: { label: "About us", href: "/about" },
};

export const services = [
  {
    title: "Strategy",
    body: "Everything starts with a plan.",
    icon: "compass",
  },
  {
    title: "Content",
    body: "Creative that's made to be remembered.",
    icon: "pen",
  },
  {
    title: "Organic",
    body: "Consistent, considered, always on.",
    icon: "leaf",
  },
  {
    title: "Paid",
    body: "Campaigns built to perform, not just spend.",
    icon: "target",
  },
  {
    title: "Analytics",
    body: "Clear reporting, explained properly.",
    icon: "bars",
  },
] as const;

// The emotional differentiator: most agencies sell services, pippin sells headspace.
export const difference = {
  heading: "The Pippin Difference",
  pairs: [
    { before: "Most agencies specialise.", after: "We simplify." },
    { before: "Most agencies create more work.", after: "We remove it." },
    {
      before: "Most agencies ask you to manage them.",
      after: "We manage ourselves.",
    },
    { before: "Most agencies offer one service.", after: "We own everything." },
  ],
  closing: "Most agencies sell services. Pippin sells headspace.",
};

export const process = {
  eyebrow: "How we work",
  headline: "A simple process for exceptional results.",
  steps: [
    {
      number: "01",
      title: "Discover",
      body: "Understand the business. Goals, customers, challenges, vision.",
    },
    {
      number: "02",
      title: "Immerse",
      body: "Research competitors. Audit current marketing. Build the strategy.",
    },
    {
      number: "03",
      title: "Create",
      body: "Photography, video, design, copywriting, paid creative. Everything aligned.",
    },
    {
      number: "04",
      title: "Launch",
      body: "Content goes live. Campaigns begin. Community management starts.",
    },
    {
      number: "05",
      title: "Optimise",
      body: "Weekly improvements. Monthly reporting. Quarterly planning.",
    },
  ],
  note: "No unnecessary calls. Everything in one place, so you can check in on your own time.",
};

export const promise = {
  headline: "We'll take social media completely off your hands.",
  items: [
    "No chasing.",
    "No unnecessary meetings.",
    "No wondering what's happening.",
    "No micromanaging.",
    "Just confidence that everything is being handled.",
  ],
};

export const closingCta = {
  headline: "Ready to stop thinking about social?",
  body: "Tell us about your business and we'll take it from here.",
  cta: { label: "Let's talk", href: "/contact" },
  email: brand.email,
};

export const footer = {
  tagline: "SOCIAL MADE SIMPLE",
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Partnership", href: "/partnership" },
    { label: "Updates", href: "/updates" },
    { label: "Contact", href: "/contact" },
  ],
  social: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
  ],
  email: brand.email,
  location: "Chester, UK",
  copyright: `© pippin ${new Date().getFullYear()}. All rights reserved.`,
};

// ---------------------------------------------------------------------------
// /about
// ---------------------------------------------------------------------------

export const aboutPage = {
  meta: {
    title: "About — pippin",
    description:
      "We're not here to add to your workload. We're here to take it away.",
  },
  hero: {
    eyebrow: "About",
    headline:
      "We're not here to add to your workload. We're here to take it away.",
  },
  purpose: {
    heading: "Our Purpose",
    body: "Pippin exists to make social media feel effortless. We believe founders should be spending their time growing businesses, leading teams and serving customers — not chasing agencies, approving captions or wondering whether anything has been posted this week. We don't just manage social media. We take ownership of it.",
  },
  manifesto: {
    heading: "The Manifesto",
    stanzas: [
      "We believe social media has become unnecessarily complicated.",
      "Too many platforms. Too many opinions. Too many agencies doing one small piece of the puzzle. Meanwhile, founders are left coordinating everyone.",
      "We don't think it should work like that.",
      "Pippin was built on a simple idea. Take ownership. Remove complexity. Do great work. Give people their time back.",
      "We're not here to become another meeting in your diary. We're here to become one less thing on your mind.",
    ],
  },
  beliefs: {
    heading: "What We Believe",
    items: [
      "Founders deserve better than managing multiple agencies.",
      "Consistency beats chasing trends.",
      "Beautiful creative should perform.",
      "Strategy comes before posting.",
      "Communication should be clear.",
      "Partners shouldn't have to chase their agency.",
      "Trust is earned.",
      "Social media should feel simple.",
    ],
  },
  missionVision: {
    heading: "Our Mission and Vision",
    mission: {
      title: "Mission",
      body: "To make social media the easiest part of running a business.",
    },
    vision: {
      title: "Vision",
      body: "To become the UK's most trusted boutique full-service social media agency, known for exceptional service, beautiful creative and giving founders their time back. Not because we have the biggest team. Because we're the easiest agency to work with.",
    },
  },
  communication: {
    heading: "How We Communicate",
    paragraphs: [
      "We don't measure success by how many meetings are in your diary. We measure it by how many things we've taken off it.",
      "Every founder works differently. Some love weekly calls. Some prefer monthly updates. Some simply want to know it's all under control. We'll adapt to you, not the other way around.",
    ],
  },
  founder: {
    eyebrow: "Founder",
    name: "Holly Payne",
    role: "Founder",
    // PLACEHOLDER BIO — replace with Holly's real bio before launch.
    bio: "Holly founded pippin after years of watching founders lose valuable time and energy to social media that should have been working harder for them. She started the agency to give business owners that time back — with one team taking full ownership, from strategy through to reporting.",
    imageLabel: "Founder portrait — Holly Payne",
  },
};

// ---------------------------------------------------------------------------
// /services
// ---------------------------------------------------------------------------

export const servicesPage = {
  meta: {
    title: "Services — pippin",
    description: "Five disciplines, one strategy, working together.",
  },
  hero: {
    headline: "Everything social. One team.",
    subline: "Five disciplines, one strategy, working together.",
  },
  pillars: [
    {
      key: "strategy",
      title: "Strategy",
      tagline: "Everything starts with a plan.",
      items: [
        "Brand positioning",
        "Social media strategy",
        "Audience research",
        "Campaign planning",
        "Competitor analysis",
        "Launch strategies",
      ],
      imageLabel: "Strategy — planning session",
    },
    {
      key: "content",
      title: "Content",
      tagline: "Creative that's made to be remembered.",
      items: [
        "Creative direction",
        "Photography",
        "Videography",
        "Reels",
        "Copywriting",
        "Graphic design",
        "Content shoots",
      ],
      imageLabel: "Content — shoot in progress",
    },
    {
      key: "organic",
      title: "Organic",
      tagline: "Consistent, considered, always on.",
      items: [
        "Instagram",
        "TikTok",
        "LinkedIn",
        "Facebook",
        "Pinterest",
        "Community management",
        "Scheduling",
        "Publishing",
      ],
      imageLabel: "Organic — social feed",
    },
    {
      key: "paid",
      title: "Paid",
      tagline: "Campaigns built to perform, not just spend.",
      items: [
        "Meta Ads",
        "TikTok Ads",
        "LinkedIn Ads",
        "Pinterest Ads",
        "Campaign optimisation",
        "Creative testing",
        "Reporting",
      ],
      imageLabel: "Paid — campaign review",
    },
    {
      key: "analytics",
      title: "Analytics",
      tagline: "Clear reporting, explained properly.",
      items: [
        "Monthly reports",
        "Performance dashboards",
        "Quarterly reviews",
        "Recommendations",
        "Growth planning",
      ],
      imageLabel: "Analytics — reporting dashboard",
    },
  ] as const,
  whoWeWorkWith: {
    heading: "Who We Work With",
    lead: "We work with businesses who value quality over quantity.",
    industries: [
      "Boutique hotels",
      "Restaurants and hospitality",
      "Fashion",
      "Beauty",
      "Wellness",
      "Interior design",
      "Property",
      "Luxury retail",
      "Art galleries",
      "Homeware",
    ],
  },
};

// ---------------------------------------------------------------------------
// /partnership
// ---------------------------------------------------------------------------

export const partnershipPage = {
  meta: {
    title: "Partnership — pippin",
    description:
      "From the first conversation onwards, we work as part of your business.",
  },
  hero: {
    headline: "We don't have clients. We have partners.",
    subline:
      "From the first conversation onwards, we work as part of your business.",
  },
  perks: {
    heading: "What every partner gets",
    items: [
      { title: "A beautifully designed Welcome Pack", icon: "gift" },
      { title: "A dedicated Partner Lead", icon: "user" },
      { title: "A clear onboarding journey", icon: "flag" },
      { title: "Regular updates", icon: "calendar" },
      { title: "Fast communication", icon: "chat" },
      { title: "Thoughtful recommendations", icon: "bulb" },
    ],
  },
  journey: {
    heading: "The Partner Journey",
    steps: [
      "Discovery Call",
      "Proposal",
      "Agreement",
      "Partner Welcome",
      "Brand Questionnaire",
      "Access Request",
      "Kick-off Workshop",
      "Strategy Presentation",
      "Launch",
      "Monthly Partnership",
    ],
  },
  monthInside: {
    heading: "Inside a month with Pippin",
    weeks: [
      { label: "Week One", body: "Planning. Strategy. Campaign ideas." },
      {
        label: "Week Two",
        body: "Content creation. Photography. Video. Design.",
      },
      {
        label: "Week Three",
        body: "Scheduling. Paid optimisation. Community management.",
      },
      {
        label: "Week Four",
        body: "Reporting. Recommendations. Planning next month.",
      },
    ],
  },
  packages: {
    heading: "Packages",
    tiers: [
      {
        name: "Essential",
        tagline: "For growing businesses finding their rhythm.",
        featured: false,
        items: [] as string[],
      },
      {
        name: "Growth",
        tagline: "Our most popular partnership.",
        featured: true,
        items: [
          "Organic",
          "Paid",
          "Strategy",
          "Community management",
          "Monthly reporting",
        ],
      },
      {
        name: "Fully Managed",
        tagline:
          "Your outsourced social media department. Everything included. Minimal input required from you.",
        featured: false,
        items: [] as string[],
      },
    ],
    footnote:
      "Every partnership is shaped around the business it serves. Tell us what you need and we'll build it.",
  },
  whatWeSell: {
    heading: "What we sell",
    not: "We don't sell twelve posts, four Reels and thirty Stories.",
    sell: "We sell consistency, strategy, growth, peace of mind and headspace.",
  },
  standard: {
    heading: "The Pippin Standard",
    body: "Every decision we make answers one question: does this make life simpler for our partners? If the answer is no, we don't do it.",
  },
};

// ---------------------------------------------------------------------------
// /updates
// ---------------------------------------------------------------------------

export const updatesPage = {
  meta: {
    title: "Updates — pippin",
    description: "News, thinking and updates from the pippin team.",
  },
  heading: "Updates",
  subline: "News, thinking and the occasional useful idea, from the pippin team.",
  emptyState: "Nothing here yet — check back soon.",
  readMore: "Read more",
  backLink: "All updates",
};

export const notFoundPage = {
  heading: "Page not found",
  body: "The page you're looking for doesn't exist or may have moved.",
  cta: { label: "Back to home", href: "/" },
};
