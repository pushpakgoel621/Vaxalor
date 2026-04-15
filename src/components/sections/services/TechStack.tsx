"use client";

import dynamic from "next/dynamic";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { StaggerChildren, StaggerItem } from "@/components/animation/StaggerChildren";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { TECH_STACK } from "@/lib/constants";

const PhysicsBadges = dynamic(
  () => import("@/components/animation/PhysicsBadges").then((mod) => ({ default: mod.PhysicsBadges })),
  { ssr: false, loading: () => <div className="h-[350px]" /> }
);

export function TechStack() {
  const isDesktop = useMediaQuery("(min-width: 768px) and (hover: hover)");

  return (
    <section className="bg-canvas-alt py-section-sm">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Our toolkit"
            heading="Built with the best"
            subheading={isDesktop ? "Try dragging them around." : undefined}
          />
        </ScrollReveal>

        {/* Desktop: Physics simulation */}
        {isDesktop ? (
          <div className="mt-12">
            <PhysicsBadges items={TECH_STACK} />
          </div>
        ) : (
          /* Mobile: Static grid */
          <StaggerChildren className="flex flex-wrap items-center justify-center gap-2.5 mt-12">
            {TECH_STACK.map((tech) => (
              <StaggerItem key={tech}>
                <span className="inline-flex items-center px-4 py-2 bg-canvas-white border border-canvas-border rounded-lg text-ink-200 text-sm font-medium">
                  {tech}
                </span>
              </StaggerItem>
            ))}
          </StaggerChildren>
        )}
      </div>
    </section>
  );
}
