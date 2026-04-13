"use client";

import { ScrollReveal } from "@/components/animation/ScrollReveal";

const PLACEHOLDER_COMPANIES = [
  "TechCorp",
  "BuildIt",
  "GrowthLab",
  "Nextera",
  "Streamline",
  "Vendora",
];

export function SocialProofBar() {
  return (
    <section className="bg-canvas-white border-y border-canvas-border py-10">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        <ScrollReveal>
          <p className="text-ink-300 text-[13px] uppercase tracking-[0.06em] text-center mb-8">
            Trusted by startups and businesses worldwide
          </p>
        </ScrollReveal>

        {/* Desktop: static row */}
        <div className="hidden md:flex items-center justify-center gap-12">
          {PLACEHOLDER_COMPANIES.map((name) => (
            <span
              key={name}
              className="text-ink-400 text-base font-medium select-none hover:text-ink-200 transition-colors duration-300"
            >
              {name}
            </span>
          ))}
        </div>

        {/* Mobile: marquee */}
        <div className="md:hidden overflow-hidden">
          <div className="animate-marquee flex gap-12 whitespace-nowrap">
            {[...PLACEHOLDER_COMPANIES, ...PLACEHOLDER_COMPANIES].map(
              (name, i) => (
                <span
                  key={`${name}-${i}`}
                  className="text-ink-400 text-base font-medium select-none"
                >
                  {name}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
