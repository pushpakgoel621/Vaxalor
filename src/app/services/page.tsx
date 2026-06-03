import type { Metadata } from "next";
import { PageTransition } from "@/components/layout/PageTransition";
import { ServicesHero } from "@/components/sections/services/ServicesHero";
import { ServiceCatalogSection } from "@/components/sections/services/ServiceCatalogSection";
import { TechStack } from "@/components/sections/services/TechStack";
import { CTASection } from "@/components/sections/home/CTASection";
import { BreadcrumbSchema } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Our Services — Web, Mobile, AI, Design, Marketing & Strategy",
  description:
    "From website development to AI solutions, creative design, digital marketing, and strategic consulting — explore Vaxalor's full range of digital services.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return (
    <PageTransition>
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
        ]}
      />
      <ServicesHero />
      <ServiceCatalogSection />
      <TechStack />
      <CTASection />
    </PageTransition>
  );
}
