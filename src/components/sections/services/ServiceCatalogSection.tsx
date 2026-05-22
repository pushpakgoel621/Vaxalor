"use client";

import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { StaggerChildren, StaggerItem } from "@/components/animation/StaggerChildren";
import { SERVICE_CATALOG } from "@/lib/constants";

const PILLAR_ICONS: Record<string, React.ReactNode> = {
  code: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  brain: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a7 7 0 0 1 7 7c0 2.38-1.19 4.47-3 5.74V17a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 0 1 7-7z" />
      <line x1="10" y1="22" x2="14" y2="22" />
      <line x1="9" y1="9" x2="15" y2="9" />
    </svg>
  ),
  palette: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="8" r="1.5" fill="currentColor" />
      <circle cx="8.5" cy="12.5" r="1.5" fill="currentColor" />
      <circle cx="15.5" cy="12.5" r="1.5" fill="currentColor" />
      <circle cx="12" cy="16" r="1.5" fill="currentColor" />
    </svg>
  ),
  rocket: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 3 0 3 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-3 0-3" />
    </svg>
  ),
  compass: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" fill="currentColor" opacity="0.15" stroke="currentColor" />
    </svg>
  ),
};

const PILLAR_COLORS = [
  { bg: "bg-signal-tint", border: "border-signal/20", accent: "text-signal", dot: "bg-signal", chip: "bg-signal/10 text-signal" },
  { bg: "bg-purple-50", border: "border-purple-200", accent: "text-purple-600", dot: "bg-purple-500", chip: "bg-purple-100 text-purple-700" },
  { bg: "bg-rose-50", border: "border-rose-200", accent: "text-rose-600", dot: "bg-rose-500", chip: "bg-rose-100 text-rose-700" },
  { bg: "bg-amber-50", border: "border-amber-200", accent: "text-amber-600", dot: "bg-amber-500", chip: "bg-amber-100 text-amber-700" },
  { bg: "bg-emerald-50", border: "border-emerald-200", accent: "text-emerald-600", dot: "bg-emerald-500", chip: "bg-emerald-100 text-emerald-700" },
];

export function ServiceCatalogSection() {
  // Pre-compute totals for the intro
  const totalItems = SERVICE_CATALOG.reduce(
    (sum, p) => sum + p.categories.reduce((s, c) => s + c.items.length, 0),
    0
  );

  return (
    <section className="bg-canvas-white py-section-sm">
      <div className="max-w-[1200px] mx-auto">
        {/* Pillar quick-jump nav — sticky on desktop, scrollable on mobile */}
        <div className="px-6 sm:px-8 mb-12 md:mb-16">
          <ScrollReveal>
            <div className="flex gap-2 overflow-x-auto scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0 md:justify-center md:flex-wrap pb-2">
              {SERVICE_CATALOG.map((pillar, i) => {
                const colors = PILLAR_COLORS[i];
                return (
                  <a
                    key={pillar.pillar}
                    href={`#pillar-${i}`}
                    className={`shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-medium border ${colors.bg} ${colors.border} ${colors.accent} hover:shadow-sm transition-shadow`}
                    data-cursor="hover"
                  >
                    <span className={colors.accent}>{PILLAR_ICONS[pillar.icon]}</span>
                    {pillar.pillar}
                  </a>
                );
              })}
            </div>
            <p className="text-center text-ink-400 text-xs mt-3">
              {totalItems} services across {SERVICE_CATALOG.length} pillars — everything we do, no clicks needed
            </p>
          </ScrollReveal>
        </div>

        {/* Render every pillar as its own visual section */}
        <div className="space-y-16 md:space-y-24">
          {SERVICE_CATALOG.map((pillar, i) => {
            const colors = PILLAR_COLORS[i];
            return (
              <div
                key={pillar.pillar}
                id={`pillar-${i}`}
                className="scroll-mt-24"
              >
                {/* Pillar header */}
                <ScrollReveal>
                  <div className="px-6 sm:px-8 mb-8 md:mb-10">
                    <div className="flex items-start gap-4 max-w-3xl">
                      <div
                        className={`shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-2xl ${colors.bg} ${colors.border} border ${colors.accent} flex items-center justify-center`}
                      >
                        {PILLAR_ICONS[pillar.icon]}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className={`text-[11px] font-mono uppercase tracking-wider ${colors.accent}`}>
                            0{i + 1} / 0{SERVICE_CATALOG.length}
                          </span>
                          <span className="text-ink-400 text-[11px]">
                            · {pillar.categories.reduce((s, c) => s + c.items.length, 0)} services
                          </span>
                        </div>
                        <h2 className="text-ink text-[22px] sm:text-[26px] md:text-[30px] font-heading font-bold tracking-tight leading-tight">
                          {pillar.pillar}
                        </h2>
                        <p className="text-ink-300 text-sm md:text-base leading-relaxed mt-2">
                          {pillar.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>

                {/* Categories — horizontal swipe on mobile, grid on desktop */}
                <StaggerChildren className="flex md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-hide px-6 sm:px-8 md:px-8">
                  {pillar.categories.map((category) => (
                    <StaggerItem
                      key={category.title}
                      className="shrink-0 w-[82%] sm:w-[60%] md:w-auto snap-start"
                    >
                      <div
                        className={`${colors.bg} border ${colors.border} rounded-card p-6 h-full transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 group`}
                      >
                        <h3
                          className={`text-[16px] md:text-[17px] font-semibold ${colors.accent} mb-4 flex items-center gap-2`}
                        >
                          <span className={`w-1.5 h-1.5 rounded-full ${colors.dot}`} />
                          {category.title}
                        </h3>
                        <ul className="space-y-2.5">
                          {category.items.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-2.5 text-ink-200 text-[14px] leading-snug"
                            >
                              <svg
                                className={`w-4 h-4 ${colors.accent} shrink-0 mt-0.5 opacity-60 group-hover:opacity-100 transition-opacity`}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <polyline points="9 11 12 14 22 4" />
                                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                              </svg>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerChildren>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
