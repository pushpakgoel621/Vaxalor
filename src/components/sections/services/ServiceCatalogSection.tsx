"use client";

import { useState } from "react";
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
  { bg: "bg-signal-tint", border: "border-signal/20", accent: "text-signal", dot: "bg-signal" },
  { bg: "bg-purple-50", border: "border-purple-200", accent: "text-purple-600", dot: "bg-purple-500" },
  { bg: "bg-rose-50", border: "border-rose-200", accent: "text-rose-600", dot: "bg-rose-500" },
  { bg: "bg-amber-50", border: "border-amber-200", accent: "text-amber-600", dot: "bg-amber-500" },
  { bg: "bg-emerald-50", border: "border-emerald-200", accent: "text-emerald-600", dot: "bg-emerald-500" },
];

export function ServiceCatalogSection() {
  const [expandedPillar, setExpandedPillar] = useState<number | null>(0);

  return (
    <section className="bg-canvas-white py-section-sm">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        {/* Pillar tabs - horizontal on desktop, vertical accordion on mobile */}
        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-2 mb-14">
            {SERVICE_CATALOG.map((pillar, i) => {
              const colors = PILLAR_COLORS[i];
              const isActive = expandedPillar === i;
              return (
                <button
                  key={pillar.pillar}
                  onClick={() => setExpandedPillar(isActive ? null : i)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border cursor-pointer ${
                    isActive
                      ? `${colors.bg} ${colors.border} ${colors.accent} shadow-sm`
                      : "bg-canvas-white border-canvas-border text-ink-300 hover:text-ink hover:border-ink-400"
                  }`}
                  data-cursor="hover"
                >
                  <span className={`transition-colors duration-300 ${isActive ? colors.accent : "text-ink-400"}`}>
                    {PILLAR_ICONS[pillar.icon]}
                  </span>
                  {pillar.pillar}
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Active pillar content */}
        {expandedPillar !== null && (
          <div className="transition-all duration-500">
            {(() => {
              const pillar = SERVICE_CATALOG[expandedPillar];
              const colors = PILLAR_COLORS[expandedPillar];
              return (
                <div key={pillar.pillar}>
                  {/* Pillar description */}
                  <ScrollReveal>
                    <p className="text-center text-ink-200 text-base max-w-[700px] mx-auto mb-12 leading-relaxed">
                      {pillar.description}
                    </p>
                  </ScrollReveal>

                  {/* Sub-categories grid */}
                  <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {pillar.categories.map((category) => (
                      <StaggerItem key={category.title}>
                        <div className={`${colors.bg} border ${colors.border} rounded-card p-6 h-full transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 group`}>
                          <h3 className={`text-[17px] font-semibold ${colors.accent} mb-4 flex items-center gap-2`}>
                            <span className={`w-1.5 h-1.5 rounded-full ${colors.dot}`} />
                            {category.title}
                          </h3>
                          <ul className="space-y-2.5">
                            {category.items.map((item) => (
                              <li key={item} className="flex items-start gap-2.5 text-ink-200 text-[14px] leading-snug">
                                <svg className={`w-4 h-4 ${colors.accent} shrink-0 mt-0.5 opacity-60 group-hover:opacity-100 transition-opacity`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
            })()}
          </div>
        )}
      </div>
    </section>
  );
}
