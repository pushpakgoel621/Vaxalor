"use client";

import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { ContactForm } from "./ContactForm";
import { SITE_EMAIL, SOCIAL_LINKS } from "@/lib/constants";
import { SocialIcon } from "@/components/ui/SocialIcon";

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

                <div className="space-y-4 pt-2">
                  <div>
                    <p className="text-ink text-sm font-semibold mb-1">Pushpak Goel</p>
                    <div className="flex flex-col gap-1 sm:flex-row sm:gap-4 text-ink-300 text-sm">
                      <a href="tel:+919368796606" className="hover:text-signal transition-colors">+91 93687 96606</a>
                      <a href="mailto:pushpak@vaxalor.com" className="hover:text-signal transition-colors">pushpak@vaxalor.com</a>
                    </div>
                  </div>
                  <div>
                    <p className="text-ink text-sm font-semibold mb-1">Anshul Shekhar</p>
                    <div className="flex flex-col gap-1 sm:flex-row sm:gap-4 text-ink-300 text-sm">
                      <a href="tel:+919470218939" className="hover:text-signal transition-colors">+91 94702 18939</a>
                      <a href="mailto:anshul@vaxalor.com" className="hover:text-signal transition-colors">anshul@vaxalor.com</a>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-ink-300 text-sm pt-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  Average response time: Within 24 hours
                </div>

                <div className="flex gap-4 pt-4">
                  {SOCIAL_LINKS.map((link) => (
                    <a
                      key={link.platform}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-ink-300 hover:text-signal transition-colors duration-200"
                      aria-label={link.platform}
                      data-cursor="hover"
                    >
                      <SocialIcon platform={link.platform} className="w-5 h-5" />
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
