"use client";

import { useRef, useCallback, useEffect, useState } from "react";

interface MagneticConfig {
  strength?: number;
  threshold?: number;
}

export function useMagneticEffect({ strength = 0.15, threshold = 100 }: MagneticConfig = {}) {
  const elementRef = useRef<HTMLElement>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice(window.matchMedia("(hover: none)").matches);
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (isTouchDevice || !elementRef.current) return;

      const rect = elementRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;
      const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

      if (distance < threshold) {
        const pullX = distanceX * strength;
        const pullY = distanceY * strength;
        elementRef.current.style.transform = `translate(${pullX}px, ${pullY}px)`;
        elementRef.current.style.transition = "transform 0.2s cubic-bezier(0.16, 1, 0.3, 1)";
      }
    },
    [strength, threshold, isTouchDevice]
  );

  const handleMouseLeave = useCallback(() => {
    if (elementRef.current) {
      elementRef.current.style.transform = "translate(0px, 0px)";
      elementRef.current.style.transition = "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)";
    }
  }, []);

  return { elementRef, handleMouseMove, handleMouseLeave };
}
