"use client";

import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { StaggerChildren, StaggerItem } from "@/components/animation/StaggerChildren";
import { PeekingMascot } from "@/components/ui/PeekingMascot";
import { SERVICE_CATALOG } from "@/lib/constants";

const PILLAR_ICONS: Record<string, React.ReactNode> = {
  code: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  brain: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a7 7 0 0 1 7 7c0 2.38-1.19 4.47-3 5.74V17a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 0 1 7-7z" />
      <line x1="10" y1="22" x2="14" y2="22" />
      <line x1="9" y1="9" x2="15" y2="9" />
    </svg>
  ),
  palette: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="8" r="1.5" fill="currentColor" />
      <circle cx="8.5" cy="12.5" r="1.5" fill="currentColor" />
      <circle cx="15.5" cy="12.5" r="1.5" fill="currentColor" />
      <circle cx="12" cy="16" r="1.5" fill="currentColor" />
    </svg>
  ),
  rocket: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 3 0 3 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-3 0-3" />
    </svg>
  ),
  compass: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" fill="currentColor" opacity="0.15" stroke="currentColor" />
    </svg>
  ),
};

const PILLAR_COLORS = [
  { bg: "bg-signal-tint/50", border: "border-signal/15", accent: "text-signal", iconBg: "bg-signal/10" },
  { bg: "bg-purple-50/50", border: "border-purple-200/60", accent: "text-purple-600", iconBg: "bg-purple-100" },
  { bg: "bg-rose-50/50", border: "border-rose-200/60", accent: "text-rose-600", iconBg: "bg-rose-100" },
  { bg: "bg-amber-50/50", border: "border-amber-200/60", accent: "text-amber-600", iconBg: "bg-amber-100" },
  { bg: "bg-emerald-50/50", border: "border-emerald-200/60", accent: "text-emerald-600", iconBg: "bg-emerald-100" },
];

export function ServicesOverview() {
  return (
    <section className="bg-canvas py-section relative overflow-visible">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 relative">
        <ScrollReveal>
          <SectionHeading
            eyebrow="What we do"
            heading="Full-spectrum digital services"
            subheading="Five pillars. One partner. Everything your business needs to grow."
          />
        </ScrollReveal>

        {/* Top row: 3 cards */}
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
          {SERVICE_CATALOG.slice(0, 3).map((pillar, i) => {
            const colors = PILLAR_COLORS[i];
            return (
              <StaggerItem key={pillar.pillar}>
                <Link
                  href="/services"
                  className={`group block ${colors.bg} border ${colors.border} rounded-card overflow-hidden transition-all duration-300 hover:shadow-md hover:-translate-y-1 h-full`}
                  data-cursor="hover"
                >
                  <div className="p-6">
                    <div className={`w-12 h-12 rounded-xl ${colors.iconBg} flex items-center justify-center mb-4 ${colors.accent} transition-transform duration-300 group-hover:scale-110`}>
                      {PILLAR_ICONS[pillar.icon]}
                    </div>
                    <h3 className="text-ink text-[17px] font-semibold tracking-tight mb-2 relative">
                      {pillar.pillar}
                      <span className="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-current transition-all duration-300 ease-out group-hover:w-full opacity-20" />
                    </h3>
                    <p className="text-ink-300 text-sm leading-relaxed mb-4">{pillar.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {pillar.categories.map((cat) => (
                        <span key={cat.title} className={`text-[11px] font-medium px-2.5 py-1 rounded-full border ${colors.border} ${colors.accent} opacity-70`}>
                          {cat.title}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerChildren>

        {/* Bottom row: 2 cards centered */}
        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5 max-w-[800px] mx-auto">
          {SERVICE_CATALOG.slice(3).map((pillar, i) => {
            const colors = PILLAR_COLORS[i + 3];
            return (
              <StaggerItem key={pillar.pillar}>
                <Link
                  href="/services"
                  className={`group block ${colors.bg} border ${colors.border} rounded-card overflow-hidden transition-all duration-300 hover:shadow-md hover:-translate-y-1 h-full`}
                  data-cursor="hover"
                >
                  <div className="p-6">
                    <div className={`w-12 h-12 rounded-xl ${colors.iconBg} flex items-center justify-center mb-4 ${colors.accent} transition-transform duration-300 group-hover:scale-110`}>
                      {PILLAR_ICONS[pillar.icon]}
                    </div>
                    <h3 className="text-ink text-[17px] font-semibold tracking-tight mb-2 relative">
                      {pillar.pillar}
                      <span className="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-current transition-all duration-300 ease-out group-hover:w-full opacity-20" />
                    </h3>
                    <p className="text-ink-300 text-sm leading-relaxed mb-4">{pillar.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {pillar.categories.map((cat) => (
                        <span key={cat.title} className={`text-[11px] font-medium px-2.5 py-1 rounded-full border ${colors.border} ${colors.accent} opacity-70`}>
                          {cat.title}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerChildren>

        <PeekingMascot position="bottom-left" size={70} flip delay={0.3} className="!-bottom-8 !left-2" />
      </div>
    </section>
  );
}
