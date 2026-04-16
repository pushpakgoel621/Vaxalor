"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedStat } from "@/components/animation/AnimatedStat";
import { ScrollReveal } from "@/components/animation/ScrollReveal";

const USP_DATA = [
  {
    title: "Ship in 20 days",
    description:
      "We don't do months-long timelines. Your project ships in 20 days maximum. No exceptions. While other agencies are still in their 'discovery phase,' your product is already live.",
    iconActive: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" stroke="var(--color-signal-bright)" />
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" fill="var(--color-signal-bright)" opacity="0.15" />
        <circle cx="12" cy="12" r="10" stroke="var(--color-signal-bright)" opacity="0.2" strokeDasharray="3 3">
          <animateTransform attributeName="transform" type="rotate" from="0 12 12" to="360 12 12" dur="8s" repeatCount="indefinite" />
        </circle>
      </svg>
    ),
    iconInactive: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-ink-400)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    title: "Obsessive quality",
    description:
      "We work our asses off to deliver pixel-perfect quality. Every detail matters to us — from the spacing between elements to the easing on every animation. No shortcuts, ever.",
    iconActive: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" stroke="var(--color-signal-bright)" strokeWidth="1.5" />
        <motion.path
          d="M9 12l2 2 4-4"
          stroke="var(--color-signal-bright)"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />
        <circle cx="12" cy="12" r="10" stroke="var(--color-signal-bright)" opacity="0.15" fill="var(--color-signal-bright)" />
      </svg>
    ),
    iconInactive: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-ink-400)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: "Built with soul",
    description:
      "We don't just write code. We craft digital experiences that feel alive and intentional. Every project gets our full creative energy — because we genuinely love what we build.",
    iconActive: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <motion.path
          d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
          stroke="var(--color-signal-bright)"
          strokeWidth="1.5"
          fill="var(--color-signal-bright)"
          fillOpacity="0.15"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
    ),
    iconInactive: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-ink-400)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
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
  const sectionRef = useRef(null);
  const [activeUSP, setActiveUSP] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.5", "end 0.3"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (v < 0.33) setActiveUSP(0);
    else if (v < 0.66) setActiveUSP(1);
    else setActiveUSP(2);
  });

  return (
    <section ref={sectionRef} className="bg-ink py-20 lg:py-[120px] min-h-[60vh] lg:min-h-[80vh] overflow-hidden relative">
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

        {/* USP Cards — scroll reactive on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-14">
          {USP_DATA.map((usp, i) => {
            const isActive = i === activeUSP;
            return (
              <motion.div
                key={usp.title}
                className={`relative p-7 rounded-card border cursor-default transition-colors duration-500 ${
                  isActive
                    ? "bg-ink-100 border-signal/30"
                    : "bg-ink-100/50 border-ink-200/50"
                }`}
                animate={{
                  y: isActive ? -8 : 0,
                  boxShadow: isActive
                    ? "0 8px 40px rgba(29, 92, 191, 0.12), 0 0 0 1px rgba(29, 92, 191, 0.1)"
                    : "0 0 0 rgba(0,0,0,0), 0 0 0 0 rgba(0,0,0,0)",
                }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-500 ${
                    isActive ? "bg-signal/10 border border-signal/20" : "bg-ink-200/30 border border-ink-200/50"
                  }`}
                >
                  {isActive ? usp.iconActive : usp.iconInactive}
                </div>

                <h3
                  className={`text-[20px] font-semibold font-heading mb-3 transition-colors duration-500 ${
                    isActive ? "text-white" : "text-ink-400"
                  }`}
                >
                  {usp.title}
                </h3>

                <motion.p
                  className="text-sm leading-relaxed overflow-hidden"
                  animate={{
                    color: isActive ? "var(--color-ink-400)" : "var(--color-ink-200)",
                    maxHeight: isActive ? 200 : 48,
                    opacity: isActive ? 1 : 0.5,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {usp.description}
                </motion.p>

                {/* Active indicator */}
                {isActive && (
                  <motion.div
                    className="absolute -top-px left-6 right-6 h-[2px] bg-signal rounded-full"
                    layoutId="uspIndicator"
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  />
                )}
              </motion.div>
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
