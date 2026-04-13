"use client";

import { ScrollReveal } from "@/components/animation/ScrollReveal";

export function CTABand() {
  return (
    <section className="bg-ink py-[100px]">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        <ScrollReveal>
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-white text-h1 mb-4">
              Ready to get started?
            </h2>
            <p className="text-ink-400 text-base mb-8">
              Drop your email and we&apos;ll reach out within 24 hours.
            </p>
            <form
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-ink-100 border border-ink-200 rounded-input px-4 py-3.5 text-[15px] text-white placeholder:text-ink-300 focus:border-signal-bright focus:outline-none transition-colors"
              />
              <button
                type="submit"
                className="bg-signal hover:bg-signal-hover text-white text-[15px] font-medium px-6 py-3.5 rounded-input transition-colors duration-200"
                data-cursor="cta"
              >
                Let&apos;s talk →
              </button>
            </form>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
