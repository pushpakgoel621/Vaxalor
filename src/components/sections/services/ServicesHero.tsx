"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/animation/ScrollReveal";

export function ServicesHero() {
  return (
    <section className="relative bg-canvas pt-[100px] sm:pt-[140px] pb-[60px] sm:pb-[80px]">
      <div className="dot-grid" />
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 sm:px-8">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Our services"
            heading="Everything your business needs to grow."
            subheading="Technology. Design. Marketing. Strategy. All under one roof — so you never have to juggle vendors again."
            headingAs="h1"
          />
        </ScrollReveal>
      </div>
    </section>
  );
}
