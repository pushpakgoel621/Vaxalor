"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { TECH_STACK } from "@/lib/constants";

// Split tech stack into two rows for opposite-direction marquees
const ROW_1 = TECH_STACK.slice(0, Math.ceil(TECH_STACK.length / 2));
const ROW_2 = TECH_STACK.slice(Math.ceil(TECH_STACK.length / 2));

function MarqueeRow({
  items,
  reverse = false,
  speed = 30,
}: {
  items: string[];
  reverse?: boolean;
  speed?: number;
}) {
  // Duplicate items enough times for seamless loop
  const repeated = [...items, ...items, ...items, ...items];

  return (
    <div className="relative overflow-hidden group">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-canvas-alt to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-canvas-alt to-transparent pointer-events-none" />

      <div
        className={`flex gap-3 w-max ${reverse ? "animate-marquee-reverse" : "animate-marquee"} group-hover:[animation-play-state:paused]`}
        style={{ animationDuration: `${speed}s` }}
      >
        {repeated.map((tech, i) => (
          <div
            key={`${tech}-${i}`}
            className="flex items-center gap-2 px-5 py-2.5 bg-canvas-white border border-canvas-border rounded-full text-ink-200 text-sm font-medium whitespace-nowrap hover:border-signal/40 hover:text-signal transition-colors duration-200 shrink-0"
            data-cursor="hover"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-signal/40" />
            {tech}
          </div>
        ))}
      </div>
    </div>
  );
}

export function TechStack() {
  return (
    <section className="bg-canvas-alt py-section-sm overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Our toolkit"
            heading="Built with the best"
          />
        </ScrollReveal>
      </div>

      {/* Full-width marquee rows */}
      <div className="mt-12 space-y-3">
        <MarqueeRow items={ROW_1} speed={35} />
        <MarqueeRow items={ROW_2} reverse speed={40} />
      </div>
    </section>
  );
}
