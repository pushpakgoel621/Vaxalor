"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { StaggerChildren, StaggerItem } from "@/components/animation/StaggerChildren";
import { VALUES } from "@/lib/constants";

export function OurValues() {
  return (
    <section className="bg-canvas py-section">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        <ScrollReveal>
          <SectionHeading
            eyebrow="What drives us"
            heading="Our values"
          />
        </ScrollReveal>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-14">
          {VALUES.map((value) => (
            <StaggerItem key={value.number}>
              <div className="bg-canvas-white border border-canvas-border rounded-card p-8 h-full">
                <p className="text-signal text-[13px] font-semibold font-mono uppercase tracking-wider mb-4">
                  {value.number}
                </p>
                <h3 className="text-ink text-[20px] font-semibold font-heading mb-3">
                  {value.title}
                </h3>
                <p className="text-ink-300 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
