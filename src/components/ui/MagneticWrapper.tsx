"use client";

import { type ReactNode } from "react";
import { useMagneticEffect } from "@/hooks/useMagneticEffect";

interface MagneticWrapperProps {
  children: ReactNode;
  strength?: number;
  threshold?: number;
  className?: string;
}

export function MagneticWrapper({
  children,
  strength = 0.15,
  threshold = 120,
  className = "",
}: MagneticWrapperProps) {
  const { elementRef, handleMouseMove, handleMouseLeave } = useMagneticEffect({
    strength,
    threshold,
  });

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`inline-block ${className}`}
    >
      <div ref={elementRef as React.RefObject<HTMLDivElement>}>
        {children}
      </div>
    </div>
  );
}
