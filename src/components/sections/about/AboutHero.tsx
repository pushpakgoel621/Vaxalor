"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { ScrollReveal } from "@/components/animation/ScrollReveal";

export function AboutHero() {
  return (
    <section className="relative bg-canvas pt-[100px] sm:pt-[140px] pb-[60px] sm:pb-[80px]">
      <div className="dot-grid" />
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 sm:px-8">
        <ScrollReveal>
          <SectionHeading
            eyebrow="About us"
            heading="We're a small team that builds big things."
            subheading="We believe software should be built with intention, shipped fast, and crafted to last. No bloated teams. No endless timelines. Just great work."
            headingAs="h1"
          />
        </ScrollReveal>
      </div>
    </section>
  );
}
