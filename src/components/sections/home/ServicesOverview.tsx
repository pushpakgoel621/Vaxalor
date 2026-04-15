"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { StaggerChildren, StaggerItem } from "@/components/animation/StaggerChildren";
import { PeekingMascot } from "@/components/ui/PeekingMascot";
import { SERVICES } from "@/lib/constants";

export function ServicesOverview() {
  return (
    <section className="bg-canvas py-section relative overflow-visible">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 relative">
        <ScrollReveal>
          <SectionHeading
            eyebrow="What we create"
            heading="Services built for your growth"
            subheading="From a simple website to a full AI-powered platform — we build it all."
          />
        </ScrollReveal>

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-14">
          {SERVICES.map((service) => (
            <StaggerItem key={service.number}>
              <ServiceCard
                number={service.number}
                title={service.title}
                description={service.description}
                href={service.ctaHref}
                badge={service.badge}
              />
            </StaggerItem>
          ))}
        </StaggerChildren>

        <PeekingMascot position="bottom-left" size={70} flip delay={0.3} className="!-bottom-8 !left-2" />
      </div>
    </section>
  );
}
