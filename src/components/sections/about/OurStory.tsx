"use client";

import { ScrollReveal } from "@/components/animation/ScrollReveal";

export function OurStory() {
  return (
    <section className="bg-canvas-white py-section">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Visual */}
          <ScrollReveal direction="left" distance={30}>
            <div className="aspect-[4/3] rounded-card overflow-hidden bg-gradient-to-br from-signal-tint via-signal-wash/40 to-canvas-alt border border-canvas-border">
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-signal/10 text-[120px] font-heading font-bold select-none">V</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Story */}
          <ScrollReveal direction="right" distance={30}>
            <div>
              <h2 className="text-h1 mb-6">Started with a belief</h2>
              <div className="space-y-4 text-ink-200 text-base leading-[1.8]">
                <p>
                  Vaxalor started with a simple frustration: why does building software take so long and cost so much?
                  We&apos;d seen startups burn through their runway waiting months for an MVP.
                  We&apos;d seen small businesses pay premium prices for template websites.
                </p>
                <p>
                  So we decided to build differently. We put together a lean team of builders who care
                  obsessively about two things: quality and speed. Not one at the expense of the other — both, always.
                </p>
                <p>
                  Every project ships in 20 days. Every line of code is intentional. Every client gets
                  our full attention, not a junior developer learning on the job.
                </p>
              </div>

              {/* Pull quote */}
              <blockquote className="mt-8 pl-5 border-l-[3px] border-signal">
                <p className="text-ink text-[22px] font-medium italic font-heading leading-snug">
                  &ldquo;We don&apos;t just build software. We build the thing that changes everything for your business.&rdquo;
                </p>
              </blockquote>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
