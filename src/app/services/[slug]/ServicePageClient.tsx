"use client";

import Link from "next/link";
import { PageTransition } from "@/components/layout/PageTransition";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { StaggerChildren, StaggerItem } from "@/components/animation/StaggerChildren";
import { CTASection } from "@/components/sections/home/CTASection";
import { SERVICE_CATALOG } from "@/lib/constants";
import { PILLAR_ICONS, PILLAR_COLORS } from "@/components/sections/services/pillar-theme";
import type { ServiceCatalogCategory } from "@/types";

interface Props {
  pillar: ServiceCatalogCategory;
  pillarIndex: number;
}

const UNIVERSAL_BENEFITS = [
  { title: "Shipped in 20 days", body: "Fixed delivery window. No drawn-out timelines, no surprise scope creep." },
  { title: "Fixed-scope pricing", body: "Quote upfront, no hourly surprises. You know exactly what you're paying for." },
  { title: "Daily progress updates", body: "Slack/email standups. You're never left wondering what's happening." },
  { title: "Code & assets are yours", body: "Full IP transfer on delivery. No vendor lock-in, no ongoing royalties." },
];

export function ServicePageClient({ pillar, pillarIndex }: Props) {
  const colors = PILLAR_COLORS[pillarIndex];
  const totalItems = pillar.categories.reduce((s, c) => s + c.items.length, 0);
  const prev = pillarIndex > 0 ? SERVICE_CATALOG[pillarIndex - 1] : null;
  const next = pillarIndex < SERVICE_CATALOG.length - 1 ? SERVICE_CATALOG[pillarIndex + 1] : null;

  return (
    <PageTransition>
      {/* Hero */}
      <section className={`relative ${colors.bg} pt-[100px] sm:pt-[140px] pb-12 md:pb-16 overflow-hidden`}>
        <div
          className={`hidden sm:block absolute -top-32 -right-32 w-[600px] h-[600px] bg-gradient-to-br ${colors.ring} blur-3xl pointer-events-none`}
        />

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 sm:px-8">
          <ScrollReveal>
            <Link
              href="/services"
              className={`inline-flex items-center gap-1 text-xs sm:text-sm ${colors.accent} hover:gap-2 transition-all mb-6 opacity-80 hover:opacity-100`}
              data-cursor="hover"
            >
              ← All services
            </Link>

            <div className="flex items-center gap-3 mb-5">
              <div
                className={`shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-canvas-white border ${colors.border} ${colors.accent} flex items-center justify-center shadow-sm`}
              >
                {PILLAR_ICONS[pillar.icon]}
              </div>
              <span className={`text-[11px] font-mono uppercase tracking-wider ${colors.accent}`}>
                Pillar 0{pillarIndex + 1} / 0{SERVICE_CATALOG.length}
              </span>
            </div>

            <h1 className="text-display !text-[32px] sm:!text-[44px] md:!text-[56px] font-heading font-bold tracking-tight leading-[1.1] max-w-3xl mb-5">
              {pillar.pillar}
            </h1>
            <p className="text-ink-200 text-base md:text-lg leading-relaxed max-w-2xl mb-8">
              {pillar.description}
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <Button href="/contact" arrow>
                Start a {pillar.pillar.split(" ")[0].toLowerCase()} project
              </Button>
              <span className={`text-xs sm:text-sm ${colors.accent} opacity-80`}>
                {pillar.categories.length} categories · {totalItems} services
              </span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Full catalog — every category, every item, no clicks */}
      <section className="bg-canvas-white py-section-sm">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
          <ScrollReveal>
            <div className="mb-10 md:mb-12">
              <p className={`text-[11px] font-mono uppercase tracking-wider ${colors.accent} mb-2`}>
                What we deliver
              </p>
              <h2 className="text-ink text-[24px] md:text-[32px] font-heading font-bold tracking-tight">
                Everything we ship under {pillar.pillar.split(" ")[0]}
              </h2>
            </div>
          </ScrollReveal>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {pillar.categories.map((category) => (
              <StaggerItem key={category.title}>
                <div
                  className={`${colors.bg} border ${colors.border} rounded-card p-6 h-full transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 group`}
                >
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
      </section>

      {/* Why work with us */}
      <section className="bg-canvas py-section-sm">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
          <ScrollReveal>
            <div className="mb-10 md:mb-12 text-center">
              <p className={`text-[11px] font-mono uppercase tracking-wider ${colors.accent} mb-2`}>
                Why us
              </p>
              <h2 className="text-ink text-[24px] md:text-[32px] font-heading font-bold tracking-tight">
                How we work — every project
              </h2>
            </div>
          </ScrollReveal>

          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {UNIVERSAL_BENEFITS.map((b, i) => (
              <StaggerItem key={b.title}>
                <div className="p-6 bg-canvas-white border border-canvas-border rounded-card h-full">
                  <div className={`w-9 h-9 rounded-lg ${colors.bg} ${colors.border} border ${colors.accent} flex items-center justify-center mb-4 text-xs font-mono font-semibold`}>
                    0{i + 1}
                  </div>
                  <h3 className="text-ink text-base font-semibold font-heading mb-2">{b.title}</h3>
                  <p className="text-ink-300 text-sm leading-relaxed">{b.body}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Prev / Next pillar nav */}
      {(prev || next) && (
        <section className="bg-canvas pb-12">
          <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-5">
              {prev && (
                <Link
                  href={`/services/${prev.slug}`}
                  className="group flex-1 p-5 bg-canvas-white border border-canvas-border rounded-card hover:border-signal/30 transition-colors"
                  data-cursor="hover"
                >
                  <p className="text-ink-400 text-xs mb-1">← Previous pillar</p>
                  <p className="text-ink text-base font-semibold group-hover:text-signal transition-colors">{prev.pillar}</p>
                </Link>
              )}
              {next && (
                <Link
                  href={`/services/${next.slug}`}
                  className="group flex-1 p-5 bg-canvas-white border border-canvas-border rounded-card hover:border-signal/30 transition-colors text-right"
                  data-cursor="hover"
                >
                  <p className="text-ink-400 text-xs mb-1">Next pillar →</p>
                  <p className="text-ink text-base font-semibold group-hover:text-signal transition-colors">{next.pillar}</p>
                </Link>
              )}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </PageTransition>
  );
}
