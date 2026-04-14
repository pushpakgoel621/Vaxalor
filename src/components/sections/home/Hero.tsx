"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/Button";

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const shapesY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const shapesOpacity = useTransform(scrollYProgress, [0, 0.8], [0.6, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-canvas pt-[180px] pb-[140px] md:pt-[200px]"
    >
      {/* Subtle radial gradient wash */}
      <div
        className="absolute -top-[200px] -right-[200px] w-[700px] h-[700px] pointer-events-none opacity-30 blur-3xl"
        style={{
          background: "radial-gradient(circle, var(--color-signal-wash) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute -bottom-[100px] -left-[100px] w-[400px] h-[400px] pointer-events-none opacity-20 blur-3xl"
        style={{
          background: "radial-gradient(circle, var(--color-signal-tint) 0%, transparent 70%)",
        }}
      />

      {/* Dot grid background */}
      <div className="dot-grid" />

      {/* Floating geometric shapes — SVG art */}
      <motion.div
        className="absolute inset-0 pointer-events-none hidden md:block"
        style={{ y: shapesY, opacity: shapesOpacity }}
      >
        {/* Large angular V-pattern */}
        <svg className="absolute top-[10%] right-[8%] w-48 h-48" viewBox="0 0 200 200" fill="none">
          <path d="M100 20L40 180h30l30-100 30 100h30L100 20z" stroke="var(--color-signal-wash)" strokeWidth="1.5" opacity="0.5" />
          <path d="M100 50L60 170h20l20-80 20 80h20L100 50z" stroke="var(--color-signal)" strokeWidth="0.5" opacity="0.15" />
        </svg>

        {/* Concentric circles */}
        <svg className="absolute top-[35%] right-[28%] w-32 h-32" viewBox="0 0 120 120" fill="none">
          <circle cx="60" cy="60" r="55" stroke="var(--color-canvas-border)" strokeWidth="1" opacity="0.4" />
          <circle cx="60" cy="60" r="40" stroke="var(--color-signal-wash)" strokeWidth="1" opacity="0.5" />
          <circle cx="60" cy="60" r="25" stroke="var(--color-signal)" strokeWidth="0.5" opacity="0.2" />
          <circle cx="60" cy="60" r="4" fill="var(--color-signal)" opacity="0.15" />
        </svg>

        {/* Dot grid cluster */}
        <svg className="absolute top-[18%] right-[42%] w-20 h-20" viewBox="0 0 80 80" fill="none">
          {Array.from({ length: 25 }).map((_, i) => (
            <circle
              key={i}
              cx={(i % 5) * 16 + 8}
              cy={Math.floor(i / 5) * 16 + 8}
              r="1.5"
              fill="var(--color-signal-wash)"
              opacity="0.6"
            />
          ))}
        </svg>

        {/* Crossed diagonal lines */}
        <svg className="absolute top-[50%] right-[12%] w-36 h-36" viewBox="0 0 140 140" fill="none">
          <line x1="0" y1="140" x2="140" y2="0" stroke="var(--color-canvas-border)" strokeWidth="1" opacity="0.3" />
          <line x1="20" y1="140" x2="140" y2="20" stroke="var(--color-signal-wash)" strokeWidth="0.5" opacity="0.4" />
        </svg>

        {/* Small triangle */}
        <svg className="absolute top-[60%] right-[35%] w-12 h-12" viewBox="0 0 50 50" fill="none">
          <polygon points="25,5 45,45 5,45" stroke="var(--color-signal)" strokeWidth="1" opacity="0.12" fill="var(--color-signal-tint)" fillOpacity="0.3" />
        </svg>

        {/* Floating plus signs */}
        <svg className="absolute top-[8%] right-[55%] w-6 h-6" viewBox="0 0 24 24" fill="none">
          <line x1="12" y1="4" x2="12" y2="20" stroke="var(--color-signal-wash)" strokeWidth="1.5" opacity="0.5" />
          <line x1="4" y1="12" x2="20" y2="12" stroke="var(--color-signal-wash)" strokeWidth="1.5" opacity="0.5" />
        </svg>
        <svg className="absolute top-[70%] right-[50%] w-4 h-4" viewBox="0 0 24 24" fill="none">
          <line x1="12" y1="4" x2="12" y2="20" stroke="var(--color-canvas-border)" strokeWidth="2" opacity="0.4" />
          <line x1="4" y1="12" x2="20" y2="12" stroke="var(--color-canvas-border)" strokeWidth="2" opacity="0.4" />
        </svg>
      </motion.div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 sm:px-8">
        {/* Overline */}
        <motion.p
          className="text-eyebrow mb-6"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0, duration: 0.5, ease: EASE_OUT_EXPO }}
        >
          Digital products that ship fast
        </motion.p>

        {/* Headline */}
        <motion.h1
          className="text-display max-w-3xl"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6, ease: EASE_OUT_EXPO }}
        >
          We build digital products with soul.
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="text-body mt-6 max-w-[560px] text-ink-200"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.5, ease: EASE_OUT_EXPO }}
        >
          From websites to AI solutions — shipped in 20 days, built to last.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-wrap gap-4 mt-10"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.4, ease: EASE_OUT_EXPO }}
        >
          <Button href="/contact" arrow>
            Start your project
          </Button>
          <Button href="/work" variant="secondary">
            See our work
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
