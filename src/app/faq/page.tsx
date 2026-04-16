import type { Metadata } from "next";
import { PageTransition } from "@/components/layout/PageTransition";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { IndicTexture } from "@/components/ui/IndicTexture";

export const metadata: Metadata = {
  title: "FAQ — Frequently Asked Questions",
  description: "Answers to common questions about our services, pricing, timeline, and process.",
};

const FAQS = [
  {
    category: "Services & Process",
    items: [
      { q: "What services do you offer?", a: "We build custom websites, mobile apps (iOS & Android), AI chatbots, ERP/CRM systems, MVP products, and handle design & branding. Everything is custom — no templates." },
      { q: "How long does a project take?", a: "20 days maximum — from kickoff to launch. Most projects ship in 14-18 days. This includes design, development, testing, and deployment." },
      { q: "What's your development process?", a: "Four steps: Discovery (Day 1-2) where we learn your business, Design (Day 3-7) where you approve visuals before code, Development (Day 8-17) with daily updates, and Ship (Day 18-20) with testing and launch." },
      { q: "What technologies do you use?", a: "React, Next.js, Node.js, Python, Flutter, React Native, PostgreSQL, MongoDB, AWS, OpenAI, Tailwind CSS, TypeScript — we pick the best stack for each project." },
      { q: "Do you work with startups?", a: "Absolutely. Our MVP program is designed specifically for startups — 50% off development, 20-day delivery, and investor-ready output." },
      { q: "Can you work with my existing codebase?", a: "Yes. We can take over, refactor, or build on top of existing projects. We'll assess the code first and give you an honest evaluation." },
    ],
  },
  {
    category: "Pricing & Payment",
    items: [
      { q: "How much does a website cost?", a: "Custom websites start from $3K. Mobile apps from $5K. AI chatbots from $2K. MVPs from $1.5K (50% off). Every project is custom-quoted based on scope." },
      { q: "Do you require an upfront payment?", a: "Yes — 50% advance before kickoff, 50% on completion before final handover. This protects both parties." },
      { q: "What if I have a limited budget?", a: "We'll work with you to define a scope that fits. Sometimes the smartest move is building an MVP first, validating your idea, then expanding. Our MVP program is designed for exactly this." },
      { q: "Are there any hidden costs?", a: "No. The quoted price includes design, development, testing, and deployment. Hosting, domain, and third-party API costs (if any) are separate and transparently communicated upfront." },
    ],
  },
  {
    category: "Quality & Support",
    items: [
      { q: "What if I don't like the design?", a: "You approve all designs before development starts. If you hate the first draft, we redo it free. No questions asked." },
      { q: "How many revisions do I get?", a: "Up to 3 rounds of revisions on design and functionality are included. Additional revisions are quoted separately." },
      { q: "Do you provide post-launch support?", a: "Yes. We guarantee bug-free deliverables for 30 days post-launch. After that, we offer maintenance packages or ad-hoc support as needed." },
      { q: "What if the project is delayed on your end?", a: "If we miss the agreed deadline, you get a 10% discount on the project total. We take our timelines seriously." },
    ],
  },
  {
    category: "Security & Data",
    items: [
      { q: "How do you protect my data?", a: "All data is encrypted in transit (TLS/SSL) and at rest. We use secure cloud providers (Neon, Cloudinary, Vercel). Admin access is protected by JWT authentication. We never share your data with third parties for marketing." },
      { q: "Who owns the code after the project?", a: "You do. Upon full payment, all custom code, designs, and deliverables become your exclusive property. Open-source libraries retain their original licenses." },
      { q: "Do you sign NDAs?", a: "Yes. We're happy to sign a mutual NDA before project discussions if you require confidentiality." },
      { q: "Are you GDPR compliant?", a: "We follow GDPR principles — minimal data collection, clear consent, right to deletion, and secure storage. For specific compliance requirements, contact us and we'll provide detailed documentation." },
    ],
  },
];

export default function FAQPage() {
  return (
    <PageTransition>
      <section className="relative bg-canvas pt-[100px] sm:pt-[140px] pb-12">
        <div className="dot-grid" />
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 sm:px-8">
          <ScrollReveal>
            <SectionHeading
              eyebrow="FAQ"
              heading="Frequently asked questions"
              subheading="Everything you need to know about working with us."
              headingAs="h1"
            />
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-canvas pb-section">
        <div className="max-w-3xl mx-auto px-6 sm:px-8">
          {FAQS.map((section, sectionIdx) => (
            <div key={section.category} className="mb-12">
              <ScrollReveal delay={sectionIdx * 0.05}>
                <h2 className="text-ink text-[22px] font-semibold font-heading mb-6 pb-3 border-b border-canvas-border">
                  {section.category}
                </h2>
              </ScrollReveal>

              <div className="space-y-3">
                {section.items.map((item, i) => (
                  <ScrollReveal key={i} delay={(sectionIdx * 0.05) + (i * 0.03)}>
                    <details className="group p-5 bg-canvas-white border border-canvas-border rounded-card cursor-pointer hover:border-signal/20 transition-colors">
                      <summary className="flex items-center justify-between text-ink text-[15px] font-medium list-none">
                        {item.q}
                        <svg className="w-4 h-4 text-ink-400 group-open:rotate-180 transition-transform duration-200 shrink-0 ml-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </summary>
                      <p className="text-ink-300 text-sm leading-relaxed mt-3 pt-3 border-t border-canvas-border">
                        {item.a}
                      </p>
                    </details>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ink py-[80px] relative overflow-hidden">
        <IndicTexture variant="paisley" />
        <div className="relative z-10 max-w-xl mx-auto px-6 sm:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-white text-h1 mb-4">Still have questions?</h2>
            <p className="text-ink-400 text-base mb-8">
              We&apos;re happy to chat. No pressure, no sales pitch — just honest answers.
            </p>
            <Button href="/contact" arrow>
              Get in touch
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </PageTransition>
  );
}
