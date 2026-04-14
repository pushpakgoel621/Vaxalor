"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { USPCard } from "@/components/ui/USPCard";
import { CountUp } from "@/components/animation/CountUp";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { StaggerChildren, StaggerItem } from "@/components/animation/StaggerChildren";
import { STATS } from "@/lib/constants";

const USP_DATA = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
    title: "Ship in 20 days",
    description:
      "We don't do months-long timelines. Your project ships in 20 days maximum. No exceptions.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    title: "Obsessive quality",
    description:
      "We work our asses off to deliver pixel-perfect quality. Every detail matters to us.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    title: "Built with soul",
    description:
      "We don't just write code. We craft digital experiences that feel alive and intentional.",
  },
];

export function WhyChooseUs() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const card1Y = useTransform(scrollYProgress, [0, 1], [40, -20]);
  const card2Y = useTransform(scrollYProgress, [0, 1], [20, -10]);
  const card3Y = useTransform(scrollYProgress, [0, 1], [50, -30]);
  const statsY = useTransform(scrollYProgress, [0, 1], [30, -15]);
  const cardYValues = [card1Y, card2Y, card3Y];

  return (
    <section ref={sectionRef} className="bg-ink py-[120px] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Why Vaxalor"
            heading="We put our soul in development."
            dark
          />
        </ScrollReveal>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-14">
          {USP_DATA.map((usp, i) => (
            <StaggerItem key={usp.title}>
              <motion.div style={{ y: cardYValues[i] }} className="hidden md:block">
                <USPCard icon={usp.icon} title={usp.title} description={usp.description} />
              </motion.div>
              {/* Mobile: no parallax */}
              <div className="md:hidden">
                <USPCard icon={usp.icon} title={usp.title} description={usp.description} />
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>

        <div className="border-t border-ink-200 my-14" />

        <motion.div style={{ y: statsY }}>
          <ScrollReveal>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
              {STATS.map((stat, i) => (
                <div key={stat.label} className="flex items-center gap-8 md:gap-16">
                  <div className="text-center">
                    <p
                      className={`text-[40px] font-bold tracking-tight ${
                        stat.highlight ? "text-signal-bright" : "text-white"
                      }`}
                    >
                      <CountUp target={stat.number} suffix={stat.suffix} />
                    </p>
                    <p className="text-ink-300 text-xs uppercase tracking-[0.06em] mt-1">
                      {stat.label}
                    </p>
                  </div>
                  {i < STATS.length - 1 && (
                    <div className="hidden md:block w-px h-10 bg-ink-200" />
                  )}
                </div>
              ))}
            </div>
          </ScrollReveal>
        </motion.div>
      </div>
    </section>
  );
}
