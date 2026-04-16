"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { PROJECT_FILTERS } from "@/lib/constants";
import type { ProjectFilter } from "@/types";

interface WorkHeroProps {
  activeFilter: string;
  onFilterChange: (filter: ProjectFilter) => void;
}

export function WorkHero({ activeFilter, onFilterChange }: WorkHeroProps) {
  return (
    <section className="relative bg-canvas pt-[100px] sm:pt-[140px] pb-12">
      <div className="dot-grid" />
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 sm:px-8">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Our work"
            heading="Projects built with obsession."
            headingAs="h1"
          />
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="flex flex-wrap items-center justify-center gap-2 mt-10">
            {PROJECT_FILTERS.map((filter) => (
              <button
                key={filter}
                onClick={() => onFilterChange(filter as ProjectFilter)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-150 ${
                  activeFilter === filter
                    ? "bg-signal-wash text-signal"
                    : "text-ink-300 hover:bg-canvas-alt"
                }`}
                data-cursor="hover"
              >
                {filter}
              </button>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
