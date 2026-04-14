"use client";

import { useRef } from "react";
import Image from "next/image";
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
      {/* Radial gradient washes */}
      <div
        className="absolute -top-[150px] -right-[100px] w-[800px] h-[800px] pointer-events-none opacity-80 blur-3xl"
        style={{
          background: "radial-gradient(circle, var(--color-signal-wash) 0%, transparent 65%)",
        }}
      />
      <div
        className="absolute -bottom-[50px] -left-[50px] w-[500px] h-[500px] pointer-events-none opacity-70 blur-3xl"
        style={{
          background: "radial-gradient(circle, var(--color-signal-wash) 0%, transparent 60%)",
        }}
      />
      <div
        className="absolute top-[30%] left-[40%] w-[300px] h-[300px] pointer-events-none opacity-50 blur-2xl"
        style={{
          background: "radial-gradient(circle, var(--color-signal-bright) 0%, transparent 70%)",
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
        <svg className="absolute top-[8%] right-[6%] w-56 h-56" viewBox="0 0 200 200" fill="none">
          <path d="M100 20L40 180h30l30-100 30 100h30L100 20z" stroke="var(--color-signal)" strokeWidth="2" opacity="0.45" />
          <path d="M100 50L60 170h20l20-80 20 80h20L100 50z" stroke="var(--color-signal)" strokeWidth="1.5" opacity="0.3" />
          <path d="M100 20L40 180h30l30-100 30 100h30L100 20z" fill="var(--color-signal-wash)" opacity="0.2" />
        </svg>

        {/* Concentric circles */}
        <svg className="absolute top-[30%] right-[25%] w-40 h-40" viewBox="0 0 120 120" fill="none">
          <circle cx="60" cy="60" r="55" stroke="var(--color-signal)" strokeWidth="1.5" opacity="0.3" />
          <circle cx="60" cy="60" r="40" stroke="var(--color-signal)" strokeWidth="2" opacity="0.4" />
          <circle cx="60" cy="60" r="25" stroke="var(--color-signal)" strokeWidth="1.5" opacity="0.35" />
          <circle cx="60" cy="60" r="4" fill="var(--color-signal)" opacity="0.5" />
        </svg>

        {/* Dot grid cluster */}
        <svg className="absolute top-[15%] right-[40%] w-24 h-24" viewBox="0 0 80 80" fill="none">
          {Array.from({ length: 25 }).map((_, i) => (
            <circle
              key={i}
              cx={(i % 5) * 16 + 8}
              cy={Math.floor(i / 5) * 16 + 8}
              r="2.5"
              fill="var(--color-signal)"
              opacity="0.35"
            />
          ))}
        </svg>

        {/* Crossed diagonal lines */}
        <svg className="absolute top-[48%] right-[10%] w-44 h-44" viewBox="0 0 140 140" fill="none">
          <line x1="0" y1="140" x2="140" y2="0" stroke="var(--color-signal)" strokeWidth="1.5" opacity="0.3" />
          <line x1="20" y1="140" x2="140" y2="20" stroke="var(--color-signal)" strokeWidth="1.5" opacity="0.2" />
          <line x1="40" y1="140" x2="140" y2="40" stroke="var(--color-signal)" strokeWidth="1" opacity="0.15" />
        </svg>

        {/* Triangle */}
        <svg className="absolute top-[58%] right-[33%] w-16 h-16" viewBox="0 0 50 50" fill="none">
          <polygon points="25,5 45,45 5,45" stroke="var(--color-signal)" strokeWidth="2" opacity="0.35" fill="var(--color-signal-wash)" fillOpacity="0.3" />
        </svg>

        {/* Plus signs */}
        <svg className="absolute top-[6%] right-[52%] w-8 h-8" viewBox="0 0 24 24" fill="none">
          <line x1="12" y1="4" x2="12" y2="20" stroke="var(--color-signal)" strokeWidth="2.5" opacity="0.4" />
          <line x1="4" y1="12" x2="20" y2="12" stroke="var(--color-signal)" strokeWidth="2.5" opacity="0.4" />
        </svg>
        <svg className="absolute top-[68%] right-[48%] w-5 h-5" viewBox="0 0 24 24" fill="none">
          <line x1="12" y1="4" x2="12" y2="20" stroke="var(--color-signal)" strokeWidth="2.5" opacity="0.35" />
          <line x1="4" y1="12" x2="20" y2="12" stroke="var(--color-signal)" strokeWidth="2.5" opacity="0.35" />
        </svg>

        {/* Small diamond */}
        <svg className="absolute top-[40%] right-[45%] w-6 h-6" viewBox="0 0 24 24" fill="none">
          <rect x="4" y="4" width="16" height="16" rx="2" transform="rotate(45 12 12)" stroke="var(--color-signal)" strokeWidth="2" opacity="0.3" />
        </svg>

        {/* Dotted arc */}
        <svg className="absolute top-[75%] right-[20%] w-20 h-10" viewBox="0 0 80 40" fill="none">
          <path d="M5 35 Q40 0 75 35" stroke="var(--color-signal)" strokeWidth="2" strokeDasharray="4 4" opacity="0.35" />
        </svg>
      </motion.div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-center">
          {/* Left: Text content */}
          <div>
            <motion.p
              className="text-eyebrow mb-6"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0, duration: 0.5, ease: EASE_OUT_EXPO }}
            >
              Digital products that ship fast
            </motion.p>

            <motion.h1
              className="text-display max-w-2xl"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6, ease: EASE_OUT_EXPO }}
            >
              We build digital products with soul.
            </motion.h1>

            <motion.p
              className="text-body mt-6 max-w-[520px] text-ink-200"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.5, ease: EASE_OUT_EXPO }}
            >
              From websites to AI solutions — shipped in 20 days, built to last.
            </motion.p>

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

          {/* Right: Hero Logo Image */}
          <motion.div
            className="hidden lg:block w-[400px] h-[360px] relative"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: EASE_OUT_EXPO }}
          >
            <Image
              src="/images/vaxalor-hero-logo.png"
              alt="Vaxalor VAi Logo"
              fill
              className="object-contain drop-shadow-[0_10px_40px_rgba(29,92,191,0.15)]"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
