"use client";

import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { ContactForm } from "./ContactForm";
import { SITE_EMAIL, SOCIAL_LINKS } from "@/lib/constants";

export function ContactHero() {
  return (
    <section className="bg-canvas pt-[100px] sm:pt-[140px] pb-section">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 xl:grid-cols-[45%_55%] gap-12 xl:gap-16">
          {/* Left Column: Info */}
          <ScrollReveal direction="left" distance={30}>
            <div className="xl:pt-4">
              <p className="text-eyebrow mb-4">Get in touch</p>
              <h1 className="text-display max-w-md">
                Let&apos;s build something together.
              </h1>

              <div className="mt-10 space-y-6">
                <div>
                  <a
                    href={`mailto:${SITE_EMAIL}`}
                    className="text-signal text-base hover:underline underline-offset-4"
                    data-cursor="hover"
                  >
                    {SITE_EMAIL}
                  </a>
                </div>

                <div className="flex items-center gap-2 text-ink-300 text-sm">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  Average response time: Within 24 hours
                </div>

                <div className="flex gap-4 pt-2">
                  {SOCIAL_LINKS.map((link) => (
                    <a
                      key={link.platform}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-ink-300 text-sm hover:text-signal transition-colors duration-200"
                      data-cursor="hover"
                    >
                      {link.platform}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column: Form */}
          <ScrollReveal direction="right" distance={30} delay={0.1}>
            <ContactForm />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
