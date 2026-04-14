"use client";

import Link from "next/link";
import { Badge } from "./Badge";

interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
  href: string;
  badge?: string;
}

function WebsiteAnimation() {
  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <div className="w-full max-w-[140px] space-y-1.5 transition-all duration-500">
        {/* Browser bar */}
        <div className="h-2 bg-signal/20 rounded-full w-full group-hover:bg-signal/40 transition-all duration-500" />
        {/* Header */}
        <div className="h-5 bg-signal/10 rounded group-hover:bg-signal/25 transition-all duration-500 delay-100" />
        {/* Content blocks */}
        <div className="flex gap-1.5">
          <div className="h-8 flex-[2] bg-signal/8 rounded group-hover:bg-signal/20 transition-all duration-500 delay-200" />
          <div className="h-8 flex-1 bg-signal/8 rounded group-hover:bg-signal/20 transition-all duration-500 delay-300" />
        </div>
        <div className="h-3 bg-signal/6 rounded-full w-3/4 group-hover:bg-signal/15 transition-all duration-500 delay-[400ms]" />
        {/* CTA button */}
        <div className="h-3 bg-signal/15 rounded-full w-1/3 group-hover:bg-signal/40 group-hover:w-1/2 transition-all duration-500 delay-500" />
      </div>
    </div>
  );
}

function DesignAnimation() {
  return (
    <div className="w-full h-full flex items-center justify-center gap-2 p-4">
      {/* Color swatches */}
      <div className="flex flex-col gap-1.5">
        <div className="w-6 h-6 rounded-md bg-signal/30 group-hover:scale-110 group-hover:bg-signal/50 transition-all duration-300" />
        <div className="w-6 h-6 rounded-md bg-signal-wash group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 delay-100" />
        <div className="w-6 h-6 rounded-md bg-ink/10 group-hover:scale-110 group-hover:bg-ink/20 transition-all duration-300 delay-200" />
      </div>
      {/* Layout grid */}
      <div className="flex-1 max-w-[100px]">
        <div className="grid grid-cols-3 gap-1">
          {Array.from({ length: 9 }).map((_, i) => (
            <div
              key={i}
              className="aspect-square rounded-sm bg-signal/8 group-hover:bg-signal/25 transition-all duration-300"
              style={{ transitionDelay: `${i * 50}ms` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function MobileAnimation() {
  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      {/* Phone frame */}
      <div className="w-14 h-24 rounded-lg border-2 border-signal/20 group-hover:border-signal/40 transition-all duration-300 relative overflow-hidden">
        {/* Notch */}
        <div className="w-6 h-1 bg-signal/15 rounded-full mx-auto mt-1" />
        {/* Screen content */}
        <div className="px-1.5 mt-2 space-y-1">
          <div className="h-1.5 bg-signal/15 rounded-full group-hover:bg-signal/35 transition-all duration-500 delay-100" />
          <div className="h-1.5 bg-signal/10 rounded-full w-3/4 group-hover:bg-signal/25 transition-all duration-500 delay-200" />
          <div className="h-4 bg-signal/8 rounded-sm group-hover:bg-signal/20 transition-all duration-500 delay-300" />
          <div className="h-4 bg-signal/8 rounded-sm group-hover:bg-signal/20 transition-all duration-500 delay-[400ms]" />
        </div>
        {/* Home bar */}
        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-6 h-0.5 bg-signal/20 rounded-full" />
      </div>
      {/* Second phone peeking */}
      <div className="w-10 h-20 rounded-lg border border-signal/10 group-hover:border-signal/25 -ml-3 mt-4 opacity-50 group-hover:opacity-80 group-hover:-translate-x-1 transition-all duration-500 delay-200" />
    </div>
  );
}

function CRMAnimation() {
  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <div className="w-full max-w-[140px] space-y-2">
        {/* KPI cards row */}
        <div className="flex gap-1.5">
          {[40, 65, 85].map((h, i) => (
            <div key={i} className="flex-1 flex flex-col items-center gap-0.5">
              <div
                className="w-full bg-signal/10 rounded-sm group-hover:bg-signal/30 transition-all duration-500 origin-bottom"
                style={{
                  height: `${h * 0.3}px`,
                  transitionDelay: `${i * 100}ms`,
                }}
              />
              <div className="w-full h-1 bg-signal/8 rounded-full group-hover:bg-signal/15 transition-all duration-300" />
            </div>
          ))}
        </div>
        {/* Table rows */}
        {[1, 2, 3].map((_, i) => (
          <div
            key={i}
            className="h-2 bg-signal/6 rounded-full group-hover:bg-signal/15 transition-all duration-400"
            style={{
              width: `${90 - i * 10}%`,
              transitionDelay: `${300 + i * 80}ms`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

function AIAnimation() {
  return (
    <div className="w-full h-full flex items-center justify-center p-3">
      <div className="w-full max-w-[140px] space-y-1.5">
        {/* AI message */}
        <div className="flex gap-1 items-start">
          <div className="w-3 h-3 rounded-full bg-signal/30 shrink-0 mt-0.5 group-hover:bg-signal/50 transition-all duration-300" />
          <div className="bg-signal/8 rounded-lg rounded-tl-sm px-2 py-1.5 group-hover:bg-signal/18 transition-all duration-400">
            <div className="h-1 w-16 bg-signal/20 rounded-full group-hover:bg-signal/35 transition-all duration-500 delay-100" />
            <div className="h-1 w-10 bg-signal/15 rounded-full mt-1 group-hover:bg-signal/30 transition-all duration-500 delay-200" />
          </div>
        </div>
        {/* User message */}
        <div className="flex justify-end">
          <div className="bg-signal/12 rounded-lg rounded-tr-sm px-2 py-1.5 group-hover:bg-signal/25 transition-all duration-400 delay-300">
            <div className="h-1 w-12 bg-signal/25 rounded-full group-hover:bg-signal/40 transition-all duration-500 delay-[400ms]" />
          </div>
        </div>
        {/* AI typing */}
        <div className="flex gap-1 items-start">
          <div className="w-3 h-3 rounded-full bg-signal/30 shrink-0 mt-0.5" />
          <div className="flex gap-0.5 px-2 py-2">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-1 h-1 rounded-full bg-signal/25 group-hover:bg-signal/50 group-hover:animate-bounce transition-all duration-300"
                style={{ animationDelay: `${i * 150}ms`, animationDuration: "0.8s" }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function MVPAnimation() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-2 p-4">
      {/* Progress ring */}
      <div className="relative w-16 h-16">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 48 48">
          <circle cx="24" cy="24" r="20" fill="none" stroke="var(--color-signal)" strokeWidth="2" opacity="0.1" />
          <circle
            cx="24" cy="24" r="20" fill="none"
            stroke="var(--color-signal)" strokeWidth="2.5"
            strokeDasharray="126"
            strokeDashoffset="126"
            strokeLinecap="round"
            className="group-hover:[stroke-dashoffset:0] transition-all duration-1000 ease-out"
            opacity="0.4"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-signal/40 text-[10px] font-mono font-bold group-hover:text-signal/70 transition-colors duration-500">
            MVP
          </span>
        </div>
      </div>
      {/* Shipped label */}
      <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-700">
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="var(--color-signal)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" opacity="0.5">
          <polyline points="20 6 9 17 4 12" />
        </svg>
        <span className="text-signal/50 text-[9px] font-mono font-semibold uppercase">Shipped</span>
      </div>
    </div>
  );
}

const SERVICE_ANIMATIONS: Record<string, React.FC> = {
  "01": WebsiteAnimation,
  "02": DesignAnimation,
  "03": MobileAnimation,
  "04": CRMAnimation,
  "05": AIAnimation,
  "06": MVPAnimation,
};

export function ServiceCard({
  number,
  title,
  description,
  href,
  badge,
}: ServiceCardProps) {
  const Animation = SERVICE_ANIMATIONS[number];

  return (
    <Link
      href={href}
      className="group block bg-canvas-white border border-canvas-border rounded-card overflow-hidden transition-all duration-300 hover:border-signal-wash hover:-translate-y-1"
      data-cursor="hover"
    >
      {/* Animation area */}
      <div className="h-32 bg-canvas-alt/50 border-b border-canvas-border/50 overflow-hidden">
        {Animation && <Animation />}
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-signal text-xs font-semibold uppercase tracking-wider font-mono mb-3">
          {number}
        </p>
        <div className="flex items-center gap-2 mb-2">
          <h3 className="text-ink text-[18px] font-semibold tracking-tight relative">
            {title}
            <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-signal transition-all duration-300 ease-out group-hover:w-full" />
          </h3>
          {badge && <Badge>{badge}</Badge>}
        </div>
        <p className="text-ink-300 text-sm leading-relaxed mb-3">
          {description}
        </p>
        <span className="inline-flex items-center gap-1 text-signal text-sm font-medium">
          Learn more
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </span>
      </div>
    </Link>
  );
}
