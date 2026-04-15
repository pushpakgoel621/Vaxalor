"use client";

import { ScrollReveal } from "@/components/animation/ScrollReveal";

// Placeholder company logos as styled SVG wordmarks (replace with real logos later)
const COMPANY_LOGOS = [
  {
    name: "TechCorp",
    logo: (
      <svg viewBox="0 0 120 28" className="h-8 w-auto">
        <rect x="0" y="4" width="20" height="20" rx="4" fill="currentColor" opacity="0.15" />
        <rect x="3" y="7" width="6" height="6" rx="1" fill="currentColor" opacity="0.4" />
        <rect x="11" y="7" width="6" height="6" rx="1" fill="currentColor" opacity="0.25" />
        <rect x="3" y="15" width="14" height="6" rx="1" fill="currentColor" opacity="0.3" />
        <text x="26" y="20" fontFamily="var(--font-heading)" fontWeight="700" fontSize="16" fill="currentColor">TechCorp</text>
      </svg>
    ),
  },
  {
    name: "BuildIt",
    logo: (
      <svg viewBox="0 0 100 28" className="h-8 w-auto">
        <path d="M4 22V6h6l4 8 4-8h6v16h-5V13l-3.5 7h-3L9 13v9H4z" fill="currentColor" opacity="0.3" />
        <text x="30" y="20" fontFamily="var(--font-heading)" fontWeight="700" fontSize="16" fill="currentColor">BuildIt</text>
      </svg>
    ),
  },
  {
    name: "GrowthLab",
    logo: (
      <svg viewBox="0 0 130 28" className="h-8 w-auto">
        <circle cx="10" cy="14" r="8" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.3" />
        <path d="M6 16l3-4 3 2 4-6" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.5" strokeLinecap="round" />
        <text x="24" y="20" fontFamily="var(--font-heading)" fontWeight="700" fontSize="16" fill="currentColor">GrowthLab</text>
      </svg>
    ),
  },
  {
    name: "Nextera",
    logo: (
      <svg viewBox="0 0 110 28" className="h-8 w-auto">
        <polygon points="10,4 18,14 10,24 2,14" fill="currentColor" opacity="0.2" />
        <polygon points="10,8 15,14 10,20 5,14" fill="currentColor" opacity="0.35" />
        <text x="24" y="20" fontFamily="var(--font-heading)" fontWeight="700" fontSize="16" fill="currentColor">Nextera</text>
      </svg>
    ),
  },
  {
    name: "Streamline",
    logo: (
      <svg viewBox="0 0 140 28" className="h-8 w-auto">
        <path d="M2 10c4-4 8 4 12 0s8 4 12 0" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.3" strokeLinecap="round" />
        <path d="M2 18c4-4 8 4 12 0s8 4 12 0" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.2" strokeLinecap="round" />
        <text x="32" y="20" fontFamily="var(--font-heading)" fontWeight="700" fontSize="16" fill="currentColor">Streamline</text>
      </svg>
    ),
  },
  {
    name: "Vendora",
    logo: (
      <svg viewBox="0 0 110 28" className="h-8 w-auto">
        <path d="M2 6l8 18L18 6" stroke="currentColor" strokeWidth="2.5" fill="none" opacity="0.3" strokeLinecap="round" strokeLinejoin="round" />
        <text x="24" y="20" fontFamily="var(--font-heading)" fontWeight="700" fontSize="16" fill="currentColor">Vendora</text>
      </svg>
    ),
  },
  {
    name: "Catalyst",
    logo: (
      <svg viewBox="0 0 120 28" className="h-8 w-auto">
        <circle cx="10" cy="14" r="7" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.25" />
        <circle cx="10" cy="14" r="3" fill="currentColor" opacity="0.3" />
        <text x="23" y="20" fontFamily="var(--font-heading)" fontWeight="700" fontSize="16" fill="currentColor">Catalyst</text>
      </svg>
    ),
  },
  {
    name: "StackPrime",
    logo: (
      <svg viewBox="0 0 140 28" className="h-8 w-auto">
        <rect x="2" y="6" width="16" height="4" rx="1" fill="currentColor" opacity="0.35" />
        <rect x="4" y="12" width="16" height="4" rx="1" fill="currentColor" opacity="0.25" />
        <rect x="6" y="18" width="16" height="4" rx="1" fill="currentColor" opacity="0.15" />
        <text x="28" y="20" fontFamily="var(--font-heading)" fontWeight="700" fontSize="16" fill="currentColor">StackPrime</text>
      </svg>
    ),
  },
];

export function SocialProofBar() {
  const logos = [...COMPANY_LOGOS, ...COMPANY_LOGOS, ...COMPANY_LOGOS];

  return (
    <section className="bg-canvas-white border-y border-canvas-border py-10 overflow-hidden">
      <ScrollReveal>
        <p className="text-ink-300 text-[13px] uppercase tracking-[0.06em] text-center mb-8">
          Trusted by startups and businesses worldwide
        </p>
      </ScrollReveal>

      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 z-10 bg-gradient-to-r from-canvas-white to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 z-10 bg-gradient-to-l from-canvas-white to-transparent pointer-events-none" />

        <div className="animate-marquee flex items-center gap-16 md:gap-20 w-max group hover:[animation-play-state:paused]" style={{ animationDuration: "40s" }}>
          {logos.map((company, i) => (
            <div
              key={`${company.name}-${i}`}
              className="text-ink-200 hover:text-ink transition-colors duration-300 opacity-70 hover:opacity-100 shrink-0"
              data-cursor="hover"
            >
              {company.logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
