"use client";

import { useRef, type ReactNode } from "react";
import { motion, useInView } from "framer-motion";

interface StaggerChildrenProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  duration?: number;
  delay?: number;
  once?: boolean;
}

const containerVariants = {
  hidden: {},
  visible: (custom: { staggerDelay: number; delay: number }) => ({
    transition: {
      staggerChildren: custom.staggerDelay,
      delayChildren: custom.delay,
    },
  }),
};

export const staggerItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: { duration: number }) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: custom.duration,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

export function StaggerChildren({
  children,
  className,
  staggerDelay = 0.08,
  duration = 0.5,
  delay = 0,
  once = true,
}: StaggerChildrenProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={containerVariants}
      custom={{ staggerDelay, delay }}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  duration = 0.5,
}: {
  children: ReactNode;
  className?: string;
  duration?: number;
}) {
  return (
    <motion.div className={className} variants={staggerItemVariants} custom={{ duration }}>
      {children}
    </motion.div>
  );
}
