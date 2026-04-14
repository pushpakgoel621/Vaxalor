"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { PROCESS_STEPS } from "@/lib/constants";

const STEP_ICONS = [
  // Discovery — magnifying glass
  (active: boolean) => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="7" stroke={active ? "var(--color-signal)" : "var(--color-ink-400)"} className="transition-colors duration-500">
        {active && <animate attributeName="r" values="7;8;7" dur="2s" repeatCount="indefinite" />}
      </circle>
      <line x1="16.5" y1="16.5" x2="21" y2="21" stroke={active ? "var(--color-signal)" : "var(--color-ink-400)"} className="transition-colors duration-500" />
    </svg>
  ),
  // Design — pen tool
  (active: boolean) => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={active ? "var(--color-signal)" : "var(--color-ink-400)"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="transition-colors duration-500">
      <path d="M12 19l7-7 3 3-7 7-3-3z" />
      <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
      <path d="M2 2l7.586 7.586" />
      {active && (
        <circle cx="11" cy="11" r="2" fill="var(--color-signal)" opacity="0.3">
          <animate attributeName="r" values="1;3;1" dur="1.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.4;0.1;0.4" dur="1.5s" repeatCount="indefinite" />
        </circle>
      )}
    </svg>
  ),
  // Develop — code brackets
  (active: boolean) => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={active ? "var(--color-signal)" : "var(--color-ink-400)"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="transition-colors duration-500">
      <polyline points="16 18 22 12 16 6">
        {active && <animate attributeName="opacity" values="1;0.4;1" dur="1.2s" repeatCount="indefinite" />}
      </polyline>
      <polyline points="8 6 2 12 8 18">
        {active && <animate attributeName="opacity" values="0.4;1;0.4" dur="1.2s" repeatCount="indefinite" />}
      </polyline>
      <line x1="14" y1="4" x2="10" y2="20" opacity="0.5" />
    </svg>
  ),
  // Ship — rocket
  (active: boolean) => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={active ? "var(--color-signal)" : "var(--color-ink-400)"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="transition-colors duration-500">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      {active && (
        <circle cx="19" cy="5" r="1" fill="var(--color-signal-bright)" opacity="0.6">
          <animate attributeName="r" values="0;2;0" dur="1.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.6;0;0.6" dur="1.5s" repeatCount="indefinite" />
        </circle>
      )}
    </svg>
  ),
];

const DAY_RANGES = ["Day 1-2", "Day 3-7", "Day 8-17", "Day 18-20"];

export function ProcessTimeline() {
  const sectionRef = useRef(null);
  const [activeStep, setActiveStep] = useState(-1);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.6", "end 0.3"],
  });

  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (v < 0.1) setActiveStep(0);
    else if (v < 0.35) setActiveStep(1);
    else if (v < 0.65) setActiveStep(2);
    else setActiveStep(3);
  });

  // Reset when out of view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) setActiveStep(-1);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-canvas-alt py-section min-h-[70vh]">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Our process"
            heading="From idea to launch in 4 steps"
            subheading="Scroll to see how we turn your idea into a shipped product."
          />
        </ScrollReveal>

        <div className="mt-16">
          {/* Progress bar — desktop */}
          <div className="hidden md:block relative mb-12">
            <div className="h-[3px] bg-canvas-border rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-signal rounded-full origin-left"
                style={{ width: progressWidth }}
              />
            </div>
            {/* Step markers */}
            <div className="flex justify-between -mt-[7px]">
              {PROCESS_STEPS.map((step, i) => (
                <div key={step.number} className="flex flex-col items-center">
                  <motion.div
                    className="w-[14px] h-[14px] rounded-full border-2 transition-all duration-300"
                    animate={{
                      borderColor: i <= activeStep ? "var(--color-signal)" : "var(--color-canvas-border)",
                      backgroundColor: i <= activeStep ? "var(--color-signal)" : "var(--color-canvas-alt)",
                      scale: i === activeStep ? 1.3 : 1,
                    }}
                  />
                  <span
                    className={`text-[10px] font-mono mt-2 transition-colors duration-300 ${
                      i <= activeStep ? "text-signal" : "text-ink-400"
                    }`}
                  >
                    {DAY_RANGES[i]}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Cards — desktop */}
          <div className="hidden md:grid grid-cols-4 gap-5">
            {PROCESS_STEPS.map((step, i) => {
              const isActive = i <= activeStep;
              const isCurrent = i === activeStep;
              return (
                <motion.div
                  key={step.number}
                  className={`relative p-6 rounded-card border transition-colors duration-500 ${
                    isActive
                      ? "bg-canvas-white border-signal/20"
                      : "bg-canvas-alt/50 border-canvas-border"
                  }`}
                  animate={{
                    y: isCurrent ? -6 : 0,
                    boxShadow: isCurrent
                      ? "0 8px 30px rgba(29, 92, 191, 0.1)"
                      : "0 0px 0px rgba(0,0,0,0)",
                  }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-all duration-500 ${
                      isActive
                        ? "bg-signal-tint border border-signal/20"
                        : "bg-canvas-alt border border-canvas-border"
                    }`}
                  >
                    {STEP_ICONS[i](isActive)}
                  </div>

                  <p
                    className={`text-xs font-semibold font-mono uppercase tracking-wider mb-2 transition-colors duration-500 ${
                      isActive ? "text-signal" : "text-ink-400"
                    }`}
                  >
                    Step {step.number}
                  </p>

                  <h3
                    className={`text-[20px] font-semibold font-heading mb-2 transition-colors duration-500 ${
                      isActive ? "text-ink" : "text-ink-300"
                    }`}
                  >
                    {step.title}
                  </h3>

                  <motion.p
                    className="text-sm leading-relaxed"
                    animate={{
                      color: isActive ? "var(--color-ink-200)" : "var(--color-ink-400)",
                      opacity: isActive ? 1 : 0.6,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {step.description}
                  </motion.p>

                  {/* Current step pulse */}
                  {isCurrent && (
                    <motion.div
                      className="absolute -top-1 left-8 w-2 h-2 rounded-full bg-signal"
                      animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Cards — mobile (vertical) */}
          <div className="md:hidden space-y-4">
            {PROCESS_STEPS.map((step, i) => (
              <ScrollReveal key={step.number} delay={i * 0.1}>
                <div className="flex gap-4">
                  {/* Vertical line + dot */}
                  <div className="flex flex-col items-center">
                    <div className="w-3 h-3 rounded-full bg-signal ring-4 ring-canvas-alt shrink-0" />
                    {i < PROCESS_STEPS.length - 1 && (
                      <div className="w-px flex-1 bg-canvas-border mt-1" />
                    )}
                  </div>

                  <div className="pb-8">
                    <p className="text-signal text-xs font-semibold font-mono uppercase tracking-wider mb-1">
                      {step.number} — {DAY_RANGES[i]}
                    </p>
                    <h3 className="text-ink text-[20px] font-semibold font-heading mb-2">
                      {step.title}
                    </h3>
                    <p className="text-ink-300 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
