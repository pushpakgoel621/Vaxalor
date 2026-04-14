"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const [hoverState, setHoverState] = useState<"none" | "interactive" | "cta">("none");
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [onDark, setOnDark] = useState(false);
  const isVisibleRef = useRef(false);

  const springConfig = { damping: 25, stiffness: 250, mass: 0.5 };
  const ringX = useSpring(cursorX, springConfig);
  const ringY = useSpring(cursorY, springConfig);

  const setVisible = useCallback((val: boolean) => {
    isVisibleRef.current = val;
    setIsVisible(val);
  }, []);

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisibleRef.current) setVisible(true);

      // Detect if cursor is over a dark background
      const el = document.elementFromPoint(e.clientX, e.clientY);
      if (el) {
        const bg = window.getComputedStyle(el).backgroundColor;
        const match = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
        if (match) {
          const luminance = (parseInt(match[1]) * 299 + parseInt(match[2]) * 587 + parseInt(match[3]) * 114) / 1000;
          setOnDark(luminance < 80);
        }
      }
    };

    const handleMouseEnter = () => setVisible(true);
    const handleMouseLeave = () => setVisible(false);

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const ctaEl = target.closest("[data-cursor='cta']");
      const interactiveEl = target.closest(
        "a, button, [role='button'], [data-cursor='hover'], input, textarea, select"
      );
      if (ctaEl) {
        setHoverState("cta");
      } else if (interactiveEl) {
        setHoverState("interactive");
      } else {
        setHoverState("none");
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleElementHover);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleElementHover);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [cursorX, cursorY, setVisible]);

  if (isTouchDevice) return null;

  const ringSize =
    hoverState === "cta" ? 50 : hoverState === "interactive" ? 40 : 20;

  const dotColor = onDark ? "rgba(255, 255, 255, 0.9)" : "rgba(15, 23, 42, 0.9)";

  const ringBorder =
    hoverState !== "none"
      ? "rgba(29, 92, 191, 0.9)"
      : onDark
      ? "rgba(255, 255, 255, 0.4)"
      : "rgba(15, 23, 42, 0.35)";

  const ringFill =
    hoverState === "cta"
      ? "rgba(29, 92, 191, 0.15)"
      : hoverState === "interactive"
      ? "rgba(29, 92, 191, 0.1)"
      : "transparent";

  return (
    <>
      {/* Small dot — follows cursor exactly */}
      <motion.div
        className="fixed top-0 left-0 z-[10000] pointer-events-none"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: hoverState !== "none" ? 0 : isClicking ? 0.6 : 1,
        }}
        transition={{ duration: 0.15 }}
      >
        <div
          className="w-1.5 h-1.5 rounded-full transition-colors duration-150"
          style={{ backgroundColor: dotColor }}
        />
      </motion.div>

      {/* Ring — follows with spring delay */}
      <motion.div
        className="fixed top-0 left-0 z-[10000] pointer-events-none"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: isVisible ? 1 : 0,
          width: ringSize,
          height: ringSize,
          scale: isClicking ? 0.85 : 1,
        }}
        transition={{
          width: { type: "spring", stiffness: 300, damping: 20 },
          height: { type: "spring", stiffness: 300, damping: 20 },
          opacity: { duration: 0.15 },
          scale: { duration: 0.15 },
        }}
      >
        <div
          className="w-full h-full rounded-full transition-all duration-150"
          style={{
            border: `1.5px solid ${ringBorder}`,
            backgroundColor: ringFill,
          }}
        />
      </motion.div>
    </>
  );
}
