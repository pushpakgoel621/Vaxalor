import { PageTransition } from "@/components/layout/PageTransition";
import { CurrentlyBuilding } from "@/components/sections/home/CurrentlyBuilding";
import { Hero } from "@/components/sections/home/Hero";
import { SocialProofBar } from "@/components/sections/home/SocialProofBar";
import { ServicesOverview } from "@/components/sections/home/ServicesOverview";
import { WhyChooseUs } from "@/components/sections/home/WhyChooseUs";
import { PortfolioPreview } from "@/components/sections/home/PortfolioPreview";
import { ProcessTimeline } from "@/components/sections/home/ProcessTimeline";
import { InteractiveQuiz } from "@/components/sections/home/InteractiveQuiz";
import { Testimonials } from "@/components/sections/home/Testimonials";
import { CTASection } from "@/components/sections/home/CTASection";
import { HowToSchema } from "@/components/seo/JsonLd";
import { PROCESS_STEPS } from "@/lib/constants";

export default function HomePage() {
  return (
    <PageTransition>
      <HowToSchema
        name="How Vaxalor Builds Your Digital Product in 20 Days"
        description="Our 4-step process from discovery to launch — every project ships in 20 days maximum."
        totalTime="P20D"
        steps={PROCESS_STEPS.map((step) => ({
          name: step.title,
          text: step.description,
          position: parseInt(step.number),
        }))}
      />

      <CurrentlyBuilding />
      <Hero />
      <SocialProofBar />
      <ServicesOverview />
      <WhyChooseUs />
      <PortfolioPreview />
      <ProcessTimeline />
      <InteractiveQuiz />
      <Testimonials />
      <CTASection />
    </PageTransition>
  );
}
