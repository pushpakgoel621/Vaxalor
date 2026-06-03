import type { Metadata } from "next";
import { PageTransition } from "@/components/layout/PageTransition";
import { AboutHero } from "@/components/sections/about/AboutHero";
import { OurStory } from "@/components/sections/about/OurStory";
import { OurValues } from "@/components/sections/about/OurValues";
import { TeamSection } from "@/components/sections/about/TeamSection";
import { CTASection } from "@/components/sections/home/CTASection";
import { PersonSchema, BreadcrumbSchema } from "@/components/seo/JsonLd";
import { LEADERSHIP_MEMBERS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Vaxalor — A Small Team That Builds Big Things",
  description:
    "We're a passionate team that puts soul into every project. Learn our story, values, and why 20-day delivery is our promise.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <PageTransition>
      {LEADERSHIP_MEMBERS.map((member) => (
        <PersonSchema
          key={member.name}
          name={member.name}
          jobTitle={member.roleBadge}
          description={member.description}
          linkedinUrl={member.linkedinUrl}
          image={member.image}
        />
      ))}
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "About", href: "/about" },
        ]}
      />

      <AboutHero />
      <OurStory />
      <OurValues />
      <TeamSection />
      <CTASection />
    </PageTransition>
  );
}
