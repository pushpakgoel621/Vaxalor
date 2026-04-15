"use client";

import Link from "next/link";
import { PageTransition } from "@/components/layout/PageTransition";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { StaggerChildren, StaggerItem } from "@/components/animation/StaggerChildren";
import { IndicTexture } from "@/components/ui/IndicTexture";
import { CTASection } from "@/components/sections/home/CTASection";
import type { ServicePage } from "@/lib/constants";

export function ServicePageClient({ service }: { service: ServicePage }) {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative bg-ink pt-[140px] pb-[80px] overflow-hidden">
        <IndicTexture variant="mandala" opacity={0.03} />
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 sm:px-8">
          <ScrollReveal>
            <Link
              href="/services"
              className="text-ink-400 text-sm hover:text-signal-bright transition-colors inline-flex items-center gap-1 mb-6"
              data-cursor="hover"
            >
              ← All Services
            </Link>
            <SectionHeading
              eyebrow={service.title}
              heading={service.tagline}
              subheading={service.description}
              headingAs="h1"
              dark
              align="left"
            />
            <div className="mt-8">
              <Button href="/contact" arrow>
                Start your {service.title.toLowerCase().split(" ")[0]} project
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Process / Timeline */}
      <section className="bg-canvas py-section">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Our process"
              heading="How we build it"
              subheading="A clear, structured process — so you always know what's happening and when."
            />
          </ScrollReveal>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
            {service.process.map((step, i) => (
              <StaggerItem key={step.step}>
                <div className="relative p-6 bg-canvas-white border border-canvas-border rounded-card h-full group hover:border-signal/30 hover:-translate-y-1 transition-all duration-300">
                  {/* Step number */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-signal text-xs font-semibold font-mono uppercase tracking-wider">
                      {step.step}
                    </span>
                    <span className="text-ink-400 text-[11px] font-mono">{step.days}</span>
                  </div>

                  {/* Connector line */}
                  {i < service.process.length - 1 && (
                    <div className="hidden lg:block absolute top-10 -right-3 w-6 h-px bg-canvas-border" />
                  )}

                  <h3 className="text-ink text-lg font-semibold font-heading mb-2">{step.title}</h3>
                  <p className="text-ink-300 text-sm leading-relaxed">{step.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Features */}
      <section className="bg-canvas-alt py-section-sm">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
          <ScrollReveal>
            <SectionHeading
              eyebrow="What you get"
              heading="Everything included"
            />
          </ScrollReveal>

          <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12 max-w-4xl mx-auto">
            {service.features.map((feature) => (
              <StaggerItem key={feature}>
                <div className="flex items-start gap-3 p-4 bg-canvas-white border border-canvas-border rounded-card">
                  <svg className="w-5 h-5 text-signal shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-ink-200 text-sm">{feature}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Case Study */}
      {service.caseStudy && (
        <section className="bg-canvas py-section">
          <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
            <ScrollReveal>
              <SectionHeading
                eyebrow="Case study"
                heading={service.caseStudy.client}
                align="left"
              />
            </ScrollReveal>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
              <ScrollReveal delay={0.1}>
                <div className="p-6 bg-canvas-white border border-canvas-border rounded-card h-full">
                  <p className="text-signal text-xs font-semibold uppercase tracking-wider mb-3">Challenge</p>
                  <p className="text-ink-200 text-sm leading-relaxed">{service.caseStudy.challenge}</p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="p-6 bg-canvas-white border border-canvas-border rounded-card h-full">
                  <p className="text-signal text-xs font-semibold uppercase tracking-wider mb-3">Solution</p>
                  <p className="text-ink-200 text-sm leading-relaxed">{service.caseStudy.solution}</p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <div className="p-6 bg-signal-tint border border-signal/20 rounded-card h-full">
                  <p className="text-signal text-xs font-semibold uppercase tracking-wider mb-3">Result</p>
                  <p className="text-ink-200 text-sm leading-relaxed font-medium">{service.caseStudy.result}</p>
                </div>
              </ScrollReveal>
            </div>

            {service.caseStudy.quote && (
              <ScrollReveal delay={0.4}>
                <blockquote className="mt-10 pl-6 border-l-[3px] border-signal max-w-2xl">
                  <p className="text-ink text-lg italic font-heading leading-relaxed">
                    &ldquo;{service.caseStudy.quote}&rdquo;
                  </p>
                </blockquote>
              </ScrollReveal>
            )}
          </div>
        </section>
      )}

      {/* FAQ */}
      {service.faq.length > 0 && (
        <section className="bg-canvas-alt py-section-sm">
          <div className="max-w-3xl mx-auto px-6 sm:px-8">
            <ScrollReveal>
              <SectionHeading
                eyebrow="FAQ"
                heading="Common questions"
              />
            </ScrollReveal>

            <div className="mt-12 space-y-4">
              {service.faq.map((item, i) => (
                <ScrollReveal key={i} delay={i * 0.08}>
                  <details className="group p-5 bg-canvas-white border border-canvas-border rounded-card cursor-pointer">
                    <summary className="flex items-center justify-between text-ink text-[15px] font-medium list-none">
                      {item.q}
                      <svg className="w-4 h-4 text-ink-400 group-open:rotate-180 transition-transform duration-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
        </section>
      )}

      {/* CTA */}
      <CTASection />
    </PageTransition>
  );
}
