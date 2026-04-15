"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { TECH_STACK } from "@/lib/constants";

// Tech icons as simple SVG paths (monochrome, professional)
const TECH_ICONS: Record<string, React.ReactNode> = {
  React: (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
      <circle cx="12" cy="12" r="2.5" />
      <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1.2" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1.2" transform="rotate(120 12 12)" />
    </svg>
  ),
  "Next.js": (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1.5 14.5V9.207l6.793 9.293H15.5L10.5 12v4.5z" /></svg>
  ),
  "Node.js": (
    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor"><path d="M12 2L3 7v10l9 5 9-5V7l-9-5zm0 2.18L18.36 7.5 12 10.82 5.64 7.5 12 4.18zM5 9.12l6 3.33v6.37l-6-3.33V9.12zm8 9.7v-6.37l6-3.33v6.37l-6 3.33z" /></svg>
  ),
};

const ROW_1 = TECH_STACK.slice(0, Math.ceil(TECH_STACK.length / 2));
const ROW_2 = TECH_STACK.slice(Math.ceil(TECH_STACK.length / 2));

function TechPill({ name }: { name: string }) {
  const icon = TECH_ICONS[name];

  return (
    <div className="flex items-center gap-2.5 px-5 py-3 bg-canvas-white/80 backdrop-blur-sm border border-canvas-border/80 rounded-xl text-ink-200 text-[13px] font-medium whitespace-nowrap hover:border-signal/30 hover:text-signal hover:bg-canvas-white hover:shadow-[0_2px_12px_rgba(29,92,191,0.06)] transition-all duration-300 shrink-0">
      {icon ? (
        <span className="text-ink-400 group-hover:text-signal transition-colors">{icon}</span>
      ) : (
        <span className="w-2 h-2 rounded-full bg-gradient-to-br from-signal/50 to-signal-bright/50" />
      )}
      {name}
    </div>
  );
}

function MarqueeRow({
  items,
  reverse = false,
  speed = 30,
}: {
  items: string[];
  reverse?: boolean;
  speed?: number;
}) {
  const repeated = [...items, ...items, ...items, ...items];

  return (
    <div className="relative overflow-hidden group">
      {/* Fade edges — wider, more prominent */}
      <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-canvas-alt to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-canvas-alt to-transparent pointer-events-none" />

      <div
        className={`flex gap-4 w-max ${reverse ? "animate-marquee-reverse" : "animate-marquee"} group-hover:[animation-play-state:paused]`}
        style={{ animationDuration: `${speed}s` }}
      >
        {repeated.map((tech, i) => (
          <TechPill key={`${tech}-${i}`} name={tech} />
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
            subheading="The technologies we trust to deliver fast, scalable, and beautiful products."
          />
        </ScrollReveal>
      </div>

      <div className="mt-14 space-y-4">
        <MarqueeRow items={ROW_1} speed={35} />
        <MarqueeRow items={ROW_2} reverse speed={42} />
      </div>
    </section>
  );
}
