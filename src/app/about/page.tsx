import type { Metadata } from "next";
import { PageTransition } from "@/components/layout/PageTransition";
import { AboutHero } from "@/components/sections/about/AboutHero";
import { OurStory } from "@/components/sections/about/OurStory";
import { OurValues } from "@/components/sections/about/OurValues";
import { TeamSection } from "@/components/sections/about/TeamSection";
import { CTABand } from "@/components/sections/services/CTABand";

export const metadata: Metadata = {
  title: "About Vaxalor — A Small Team That Builds Big Things",
  description:
    "We're a passionate team that puts soul into every project. Learn our story, values, and why 20-day delivery is our promise.",
};

export default function AboutPage() {
  return (
    <PageTransition>
      <AboutHero />
      <OurStory />
      <OurValues />
      <TeamSection />
      <CTABand />
    </PageTransition>
  );
}
