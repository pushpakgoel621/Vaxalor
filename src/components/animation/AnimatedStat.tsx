"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CountUp } from "./CountUp";

interface AnimatedStatProps {
  variant: "ring" | "timeline" | "gauge";
  target: number;
  suffix: string;
  label: string;
  highlight?: boolean;
}

function RingStat({ target, suffix, label, highlight, inView }: AnimatedStatProps & { inView: boolean }) {
  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  const progress = (target / 60) * circumference; // 50 out of ~60 max

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-28 h-28">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
          {/* Track */}
          <circle cx="50" cy="50" r={radius} fill="none" stroke="var(--color-ink-200)" strokeWidth="3" opacity="0.3" />
          {/* Progress */}
          <motion.circle
            cx="50" cy="50" r={radius}
            fill="none"
            stroke={highlight ? "var(--color-signal-bright)" : "var(--color-signal)"}
            strokeWidth="4"
            strokeLinecap="round"
            initial={{ strokeDasharray: circumference, strokeDashoffset: circumference }}
            animate={inView ? { strokeDashoffset: circumference - progress } : {}}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className={`text-[28px] font-bold tracking-tight ${highlight ? "text-signal-bright" : "text-white"}`}>
            {inView ? <CountUp target={target} suffix={suffix} /> : `0${suffix}`}
          </span>
        </div>
      </div>
      <p className="text-ink-300 text-xs uppercase tracking-[0.06em] mt-3">{label}</p>
    </div>
  );
}

function TimelineStat({ target, suffix, label, highlight, inView }: AnimatedStatProps & { inView: boolean }) {
  return (
    <div className="flex flex-col items-center w-40">
      <span className={`text-[28px] font-bold tracking-tight mb-3 ${highlight ? "text-signal-bright" : "text-white"}`}>
        {inView ? <CountUp target={target} suffix={suffix} /> : `0${suffix}`}
      </span>
      {/* Timeline bar with tick marks */}
      <div className="w-full h-6 relative">
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-1 bg-ink-200/30 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-signal-bright rounded-full origin-left"
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          />
        </div>
        {/* Tick marks */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-0.5">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="w-[2px] h-2.5 rounded-full"
              initial={{ backgroundColor: "rgba(51, 65, 85, 0.4)" }}
              animate={inView ? {
                backgroundColor: "var(--color-signal-bright)",
                transition: { delay: 0.3 + (i * 0.06), duration: 0.2 },
              } : {}}
            />
          ))}
        </div>
      </div>
      <p className="text-ink-300 text-xs uppercase tracking-[0.06em] mt-2">{label}</p>
    </div>
  );
}

function GaugeStat({ target, suffix, label, highlight, inView }: AnimatedStatProps & { inView: boolean }) {
  const radius = 42;
  const halfCircumference = Math.PI * radius;
  const progress = (target / 100) * halfCircumference;

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-28 h-16 overflow-hidden">
        <svg className="w-28 h-28" viewBox="0 0 100 100">
          {/* Track — semi-circle */}
          <path
            d="M 8 50 A 42 42 0 0 1 92 50"
            fill="none"
            stroke="var(--color-ink-200)"
            strokeWidth="3"
            opacity="0.3"
          />
          {/* Progress arc */}
          <motion.path
            d="M 8 50 A 42 42 0 0 1 92 50"
            fill="none"
            stroke={highlight ? "var(--color-signal-bright)" : "var(--color-signal)"}
            strokeWidth="4"
            strokeLinecap="round"
            initial={{ strokeDasharray: halfCircumference, strokeDashoffset: halfCircumference }}
            animate={inView ? { strokeDashoffset: halfCircumference - progress } : {}}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          />
        </svg>
      </div>
      <span className={`text-[28px] font-bold tracking-tight -mt-2 ${highlight ? "text-signal-bright" : "text-white"}`}>
        {inView ? <CountUp target={target} suffix={suffix} /> : `0${suffix}`}
      </span>
      <p className="text-ink-300 text-xs uppercase tracking-[0.06em] mt-1">{label}</p>
    </div>
  );
}

export function AnimatedStat(props: AnimatedStatProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div ref={ref}>
      {props.variant === "ring" && <RingStat {...props} inView={inView} />}
      {props.variant === "timeline" && <TimelineStat {...props} inView={inView} />}
      {props.variant === "gauge" && <GaugeStat {...props} inView={inView} />}
    </div>
  );
}
