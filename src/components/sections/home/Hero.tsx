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
      {/* Dot grid background */}
      <div className="dot-grid" />

      {/* Floating geometric shapes */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ y: shapesY, opacity: shapesOpacity }}
      >
        {/* Angular V shape */}
        <div className="absolute top-[15%] right-[10%] w-32 h-32 border-2 border-signal-wash/40 rotate-45 rounded-lg" />
        {/* Circle */}
        <div className="absolute top-[30%] right-[25%] w-20 h-20 rounded-full border-2 border-canvas-border/30" />
        {/* Small dot grid cluster */}
        <div className="absolute top-[20%] right-[40%] w-16 h-16 opacity-30"
          style={{
            backgroundImage: "radial-gradient(circle, var(--color-signal-wash) 2px, transparent 2px)",
            backgroundSize: "8px 8px",
          }}
        />
        {/* Diagonal line */}
        <div className="absolute top-[45%] right-[15%] w-px h-40 bg-canvas-border/30 rotate-[30deg]" />
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
