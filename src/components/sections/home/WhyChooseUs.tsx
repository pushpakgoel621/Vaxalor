"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedStat } from "@/components/animation/AnimatedStat";
import { ScrollReveal } from "@/components/animation/ScrollReveal";

const USP_DATA = [
  {
    title: "Ship in 20 days",
    description:
      "We don't do months-long timelines. Your project ships in 20 days maximum. No exceptions. While other agencies are still in their 'discovery phase,' your product is already live.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" stroke="var(--color-signal-bright)" />
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" fill="var(--color-signal-bright)" opacity="0.15" />
        <circle cx="12" cy="12" r="10" stroke="var(--color-signal-bright)" opacity="0.2" strokeDasharray="3 3" />
      </svg>
    ),
  },
  {
    title: "Obsessive quality",
    description:
      "We work our asses off to deliver pixel-perfect quality. Every detail matters to us — from the spacing between elements to the easing on every animation. No shortcuts, ever.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" stroke="var(--color-signal-bright)" strokeWidth="1.5" />
        <path
          d="M9 12l2 2 4-4"
          stroke="var(--color-signal-bright)"
          strokeWidth="2"
        />
        <circle cx="12" cy="12" r="10" stroke="var(--color-signal-bright)" opacity="0.15" fill="var(--color-signal-bright)" />
      </svg>
    ),
  },
  {
    title: "Built with soul",
    description:
      "We don't just write code. We craft digital experiences that feel alive and intentional. Every project gets our full creative energy — because we genuinely love what we build.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path
          d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
          stroke="var(--color-signal-bright)"
          strokeWidth="1.5"
          fill="var(--color-signal-bright)"
          fillOpacity="0.15"
        />
      </svg>
    ),
  },
];

const STAT_CONFIG = [
  { variant: "ring" as const, target: 50, suffix: "+", label: "Projects Shipped" },
  { variant: "timeline" as const, target: 20, suffix: "", label: "Day Delivery", highlight: true },
  { variant: "gauge" as const, target: 98, suffix: "%", label: "Client Satisfaction" },
];

export function WhyChooseUs() {
  return (
    <section className="bg-ink py-20 lg:py-[120px] min-h-[60vh] lg:minh-[80vh] overflow-hidden relative">
      {/* Animated background grid */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.04]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(var(--color-signal-bright) 1px, transparent 1px), linear-gradient(90deg, var(--color-signal-bright) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            animation: "gridDrift 20s linear infinite",
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 sm:px-8">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Why Vaxalor"
            heading="We put our soul in development."
            dark
          />
        </ScrollReveal>

        {/* USP Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-14">
          {USP_DATA.map((usp) => {
            return (
              <div
                key={usp.title}
                className="relative p-7 rounded-card border border-signal/30 bg-ink-100 cursor-default transition-colors duration-500 hover:bg-ink-100/80 shadow-[0_8px_40px_rgba(29,92,191,0.12)]"
              >
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 bg-signal/10 border border-signal/20 transition-all duration-500"
                >
                  {usp.icon}
                </div>

                <h3
                  className="text-[20px] font-semibold font-heading mb-3 text-white transition-colors duration-500"
                >
                  {usp.title}
                </h3>

                <p
                  className="text-sm leading-relaxed text-ink-400"
                >
                  {usp.description}
                </p>

                {/* Active indicator */}
                <div
                  className="absolute -top-px left-6 right-6 h-[2px] bg-signal rounded-full"
                />
              </div>
            );
          })}
        </div>

        {/* Divider */}
        <div className="border-t border-ink-200/30 my-16" />

        {/* Animated Stats */}
        <ScrollReveal>
          <div className="flex flex-wrap items-start justify-center gap-12 md:gap-20">
            {STAT_CONFIG.map((stat, i) => (
              <div key={stat.label} className="flex items-start gap-12 md:gap-20">
                <AnimatedStat {...stat} />
                {i < STAT_CONFIG.length - 1 && (
                  <div className="hidden md:block w-px h-24 bg-ink-200/20 self-center" />
                )}
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
