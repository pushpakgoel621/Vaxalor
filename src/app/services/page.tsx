import type { Metadata } from "next";
import { PageTransition } from "@/components/layout/PageTransition";
import { ServicesHero } from "@/components/sections/services/ServicesHero";
import { ServiceCatalogSection } from "@/components/sections/services/ServiceCatalogSection";
import { ServiceDetailBlock } from "@/components/sections/services/ServiceDetailBlock";
import { TechStack } from "@/components/sections/services/TechStack";
import { CTASection } from "@/components/sections/home/CTASection";
import { SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Our Services — Web, Mobile, AI, Design, Marketing & Strategy",
  description:
    "From website development to AI solutions, creative design, digital marketing, and strategic consulting — explore Vaxalor's full range of digital services.",
};

export default function ServicesPage() {
  return (
    <PageTransition>
      <ServicesHero />
      <ServiceCatalogSection />
      {SERVICES.map((service, i) => (
        <ServiceDetailBlock
          key={service.number}
          {...service}
          reversed={i % 2 === 1}
          index={i}
        />
      ))}
      <TechStack />
      <CTASection />
    </PageTransition>
  );
}
