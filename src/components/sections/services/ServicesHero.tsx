"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/animation/ScrollReveal";

export function ServicesHero() {
  return (
    <section className="relative bg-canvas pt-[140px] pb-[80px]">
      <div className="dot-grid" />
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 sm:px-8">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Our services"
            heading="Everything you need to go digital."
            subheading="From a simple website to a full AI-powered platform — we build it all."
            headingAs="h1"
          />
        </ScrollReveal>
      </div>
    </section>
  );
}
