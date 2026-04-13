"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { PROCESS_STEPS } from "@/lib/constants";

export function ProcessTimeline() {
  const timelineRef = useRef(null);
  const isInView = useInView(timelineRef, { once: true, amount: 0.3 });

  return (
    <section className="bg-canvas-alt py-section">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Our process"
            heading="From idea to launch in 4 steps"
          />
        </ScrollReveal>

        <div ref={timelineRef} className="mt-16">
          {/* Desktop: Horizontal */}
          <div className="hidden md:block relative">
            {/* Connecting line */}
            <div className="absolute top-[22px] left-0 right-0 h-px bg-canvas-border">
              <motion.div
                className="h-full bg-signal origin-left"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>

            <div className="grid grid-cols-4 gap-8 relative">
              {PROCESS_STEPS.map((step, i) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{
                    delay: i * 0.25,
                    duration: 0.5,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {/* Dot */}
                  <div className="w-[10px] h-[10px] rounded-full bg-signal mb-6 relative z-10 ring-4 ring-canvas-alt" />

                  <p className="text-signal text-[13px] font-semibold font-mono uppercase tracking-wider mb-2">
                    {step.number}
                  </p>
                  <h3 className="text-ink text-[20px] font-semibold mb-2">
                    {step.title}
                  </h3>
                  <p className="text-ink-300 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile: Vertical */}
          <div className="md:hidden relative pl-8">
            {/* Vertical line */}
            <div className="absolute top-0 bottom-0 left-[4px] w-px bg-canvas-border">
              <motion.div
                className="w-full bg-signal origin-top"
                initial={{ scaleY: 0 }}
                animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>

            <div className="space-y-10">
              {PROCESS_STEPS.map((step, i) => (
                <motion.div
                  key={step.number}
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{
                    delay: i * 0.25,
                    duration: 0.5,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {/* Dot */}
                  <div className="absolute -left-8 top-1 w-[10px] h-[10px] rounded-full bg-signal ring-4 ring-canvas-alt" />

                  <p className="text-signal text-[13px] font-semibold font-mono uppercase tracking-wider mb-1">
                    {step.number}
                  </p>
                  <h3 className="text-ink text-[20px] font-semibold mb-2">
                    {step.title}
                  </h3>
                  <p className="text-ink-300 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
