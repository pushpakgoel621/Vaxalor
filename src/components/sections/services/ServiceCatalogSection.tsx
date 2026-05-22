"use client";

import Link from "next/link";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { StaggerChildren, StaggerItem } from "@/components/animation/StaggerChildren";
import { SERVICE_CATALOG } from "@/lib/constants";
import { PILLAR_ICONS, PILLAR_COLORS } from "./pillar-theme";

export function ServiceCatalogSection() {
  const totalItems = SERVICE_CATALOG.reduce(
    (sum, p) => sum + p.categories.reduce((s, c) => s + c.items.length, 0),
    0
  );

  return (
    <section className="bg-canvas-white py-section-sm">
      <div className="max-w-[1200px] mx-auto">
        {/* Pillar quick-jump nav */}
        <div className="px-6 sm:px-8 mb-12 md:mb-16">
          <ScrollReveal>
            <div className="flex gap-2 overflow-x-auto scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0 md:justify-center md:flex-wrap pb-2">
              {SERVICE_CATALOG.map((pillar, i) => {
                const colors = PILLAR_COLORS[i];
                return (
                  <a
                    key={pillar.slug}
                    href={`#pillar-${pillar.slug}`}
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
              <div key={pillar.slug} id={`pillar-${pillar.slug}`} className="scroll-mt-24">
                {/* Pillar header — clicks into the dedicated pillar page */}
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
                        <Link
                          href={`/services/${pillar.slug}`}
                          className="group inline-flex items-baseline gap-2 hover:gap-3 transition-all"
                          data-cursor="hover"
                        >
                          <h2 className={`text-ink text-[22px] sm:text-[26px] md:text-[30px] font-heading font-bold tracking-tight leading-tight group-hover:${colors.accent} transition-colors`}>
                            {pillar.pillar}
                          </h2>
                          <span className={`${colors.accent} text-base md:text-lg opacity-60 group-hover:opacity-100 transition-opacity`}>→</span>
                        </Link>
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

                {/* See more link */}
                <div className="px-6 sm:px-8 mt-6">
                  <Link
                    href={`/services/${pillar.slug}`}
                    className={`inline-flex items-center gap-1.5 text-sm font-medium ${colors.accent} hover:gap-2.5 transition-all`}
                    data-cursor="hover"
                  >
                    Explore {pillar.pillar}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
