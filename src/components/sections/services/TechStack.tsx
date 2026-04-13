"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { StaggerChildren, StaggerItem } from "@/components/animation/StaggerChildren";
import { TECH_STACK } from "@/lib/constants";

export function TechStack() {
  return (
    <section className="bg-canvas-alt py-section-sm">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Our toolkit"
            heading="Built with the best"
          />
        </ScrollReveal>

        <StaggerChildren className="flex flex-wrap items-center justify-center gap-2.5 mt-12">
          {TECH_STACK.map((tech) => (
            <StaggerItem key={tech}>
              <span className="inline-flex items-center px-4 py-2 bg-canvas-white border border-canvas-border rounded-lg text-ink-200 text-sm font-medium">
                {tech}
              </span>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
