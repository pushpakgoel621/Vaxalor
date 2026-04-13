"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { StaggerChildren, StaggerItem } from "@/components/animation/StaggerChildren";
import { SERVICES } from "@/lib/constants";

export function ServicesOverview() {
  return (
    <section className="bg-canvas py-section">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
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
      </div>
    </section>
  );
}
