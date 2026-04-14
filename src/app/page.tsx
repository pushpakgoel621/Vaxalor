import { PageTransition } from "@/components/layout/PageTransition";
import { Hero } from "@/components/sections/home/Hero";
import { SocialProofBar } from "@/components/sections/home/SocialProofBar";
import { ServicesOverview } from "@/components/sections/home/ServicesOverview";
import { WhyChooseUs } from "@/components/sections/home/WhyChooseUs";
import { PortfolioPreview } from "@/components/sections/home/PortfolioPreview";
import { ProcessTimeline } from "@/components/sections/home/ProcessTimeline";
import { InteractiveQuiz } from "@/components/sections/home/InteractiveQuiz";
import { Testimonials } from "@/components/sections/home/Testimonials";
import { CTASection } from "@/components/sections/home/CTASection";

export default function HomePage() {
  return (
    <PageTransition>
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
