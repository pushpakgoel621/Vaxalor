"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface PeekingMascotProps {
  position: "bottom-right" | "bottom-left" | "top-right" | "top-left" | "right" | "left";
  size?: number;
  flip?: boolean;
  className?: string;
  delay?: number;
}

const positionStyles: Record<string, string> = {
  "bottom-right": "absolute -bottom-4 -right-6 md:-right-10",
  "bottom-left": "absolute -bottom-4 -left-6 md:-left-10",
  "top-right": "absolute -top-8 -right-6 md:-right-10",
  "top-left": "absolute -top-8 -left-6 md:-left-10",
  "right": "absolute top-1/2 -translate-y-1/2 -right-6 md:-right-12",
  "left": "absolute top-1/2 -translate-y-1/2 -left-6 md:-left-12",
};

export function PeekingMascot({
  position,
  size = 80,
  flip = false,
  className = "",
  delay = 0,
}: PeekingMascotProps) {
  return (
    <motion.div
      className={`pointer-events-none z-20 hidden md:block ${positionStyles[position]} ${className}`}
      initial={{ opacity: 0, y: 20, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{
        delay,
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        style={{ transform: flip ? "scaleX(-1)" : undefined }}
      >
        <Image
          src="/images/mascot.png"
          alt="Vaxalor mascot"
          width={size}
          height={Math.round(size * 0.7)}
          className="drop-shadow-lg"
        />
      </motion.div>
    </motion.div>
  );
}
