"use client";

import Image from "next/image";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { PeekingMascot } from "@/components/ui/PeekingMascot";

export function OurStory() {
  return (
    <section className="bg-canvas-white py-section relative">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Visual */}
          <ScrollReveal direction="left" distance={30}>
            <div className="aspect-[4/3] rounded-card overflow-hidden bg-gradient-to-br from-ink via-ink-100 to-ink-200 border border-canvas-border relative group">
              {/* Decorative dot grid */}
              <svg className="absolute inset-0 w-full h-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
                {Array.from({ length: 80 }).map((_, i) => (
                  <circle
                    key={i}
                    cx={`${((i % 10) * 10) + 5}%`}
                    cy={`${(Math.floor(i / 10) * 12) + 6}%`}
                    r="1.5"
                    fill="white"
                  />
                ))}
              </svg>

              {/* Central logo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-28 h-24 opacity-90 group-hover:scale-105 transition-transform duration-500">
                  <Image
                    src="/images/logo.png"
                    alt="Vaxalor"
                    fill
                    className="object-contain brightness-0 invert"
                    sizes="112px"
                  />
                </div>
              </div>

              {/* Floating stat cards */}
              <div className="absolute top-6 left-6 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/10">
                <p className="text-signal-bright text-2xl font-bold font-heading">20</p>
                <p className="text-white/60 text-[11px] uppercase tracking-wider">Day Delivery</p>
              </div>

              <div className="absolute top-6 right-6 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/10">
                <p className="text-signal-bright text-2xl font-bold font-heading">50+</p>
                <p className="text-white/60 text-[11px] uppercase tracking-wider">Projects</p>
              </div>

              <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/10">
                <p className="text-signal-bright text-2xl font-bold font-heading">98%</p>
                <p className="text-white/60 text-[11px] uppercase tracking-wider">Satisfaction</p>
              </div>

              <div className="absolute bottom-6 right-6 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/10">
                <p className="text-signal-bright text-2xl font-bold font-heading">2025</p>
                <p className="text-white/60 text-[11px] uppercase tracking-wider">Founded</p>
              </div>

              {/* Decorative signal line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-signal-bright to-transparent opacity-40" />
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

        <PeekingMascot position="bottom-right" size={80} className="!-bottom-6 !-right-4" delay={0.4} />
      </div>
    </section>
  );
}
