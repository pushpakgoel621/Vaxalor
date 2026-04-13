"use client";

import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import type { Service } from "@/types";

interface ServiceDetailBlockProps extends Service {
  reversed?: boolean;
  index: number;
}

export function ServiceDetailBlock({
  number,
  title,
  description,
  features,
  ctaText,
  ctaHref,
  badge,
  highlighted,
  reversed,
  index,
}: ServiceDetailBlockProps) {
  const bgColor = highlighted
    ? "bg-signal-tint"
    : index % 2 === 0
    ? "bg-canvas"
    : "bg-canvas-white";

  return (
    <section className={`${bgColor} py-section-sm`}>
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
            reversed ? "lg:direction-rtl" : ""
          }`}
          style={reversed ? { direction: "rtl" } : undefined}
        >
          {/* Text Content */}
          <ScrollReveal
            direction={reversed ? "right" : "left"}
            distance={30}
          >
            <div style={{ direction: "ltr" }}>
              <p className="text-signal text-sm font-semibold font-mono uppercase tracking-wider mb-3">
                {number}
              </p>
              <div className="flex items-center gap-3 mb-4">
                <h2 className="text-ink text-[36px] font-bold tracking-tight leading-tight">
                  {title}
                </h2>
                {badge && (
                  <Badge className="text-xs px-3 py-1">
                    Most Popular — {badge}
                  </Badge>
                )}
              </div>
              <p className="text-ink-200 text-base leading-[1.7] mb-6">
                {description}
              </p>
              <ul className="space-y-3 mb-8">
                {features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-ink-300 text-[15px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-signal mt-2 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button href={ctaHref} variant="ghost">
                {ctaText}
              </Button>
            </div>
          </ScrollReveal>

          {/* Visual Placeholder */}
          <ScrollReveal
            direction={reversed ? "left" : "right"}
            distance={30}
          >
            <div
              className="aspect-[4/3] rounded-card border border-canvas-border overflow-hidden"
              style={{ direction: "ltr" }}
            >
              <div
                className={`w-full h-full ${
                  highlighted
                    ? "bg-gradient-to-br from-signal-tint via-signal-wash to-signal/20"
                    : `bg-gradient-to-br from-canvas-alt via-signal-wash/30 to-signal-tint`
                }`}
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
