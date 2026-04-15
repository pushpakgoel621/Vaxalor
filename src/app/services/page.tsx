import type { Metadata } from "next";
import { PageTransition } from "@/components/layout/PageTransition";
import { ServicesHero } from "@/components/sections/services/ServicesHero";
import { ServiceDetailBlock } from "@/components/sections/services/ServiceDetailBlock";
import { TechStack } from "@/components/sections/services/TechStack";
import { CTASection } from "@/components/sections/home/CTASection";
import { SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Our Services — Web, Mobile, AI & MVP Development",
  description:
    "From website development to custom AI solutions — explore our full range of digital services. MVP development at 50% off.",
};

export default function ServicesPage() {
  return (
    <PageTransition>
      <ServicesHero />
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
