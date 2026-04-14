"use client";

import { useEffect, useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";

const KONAMI_CODE = [
  "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
  "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
  "KeyB", "KeyA",
];

export function EasterEggs() {
  const [konamiTriggered, setKonamiTriggered] = useState(false);
  const [logoClicks, setLogoClicks] = useState(0);
  const [secretRevealed, setSecretRevealed] = useState(false);

  // Konami code listener
  useEffect(() => {
    let position = 0;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.code === KONAMI_CODE[position]) {
        position++;
        if (position === KONAMI_CODE.length) {
          setKonamiTriggered(true);
          position = 0;
          setTimeout(() => setKonamiTriggered(false), 4000);
        }
      } else {
        position = 0;
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Logo click counter
  const handleLogoClick = useCallback(() => {
    const next = logoClicks + 1;
    setLogoClicks(next);
    if (next >= 5) {
      setSecretRevealed(true);
      setLogoClicks(0);
      setTimeout(() => setSecretRevealed(false), 6000);
    }
  }, [logoClicks]);

  // Attach logo click listener
  useEffect(() => {
    const logo = document.querySelector("[data-logo]");
    if (!logo) return;

    const handler = () => handleLogoClick();
    logo.addEventListener("click", handler);
    return () => logo.removeEventListener("click", handler);
  }, [handleLogoClick]);

  return (
    <>
      {/* Konami Code: particle burst */}
      <AnimatePresence>
        {konamiTriggered && (
          <motion.div
            className="fixed inset-0 z-[9999] pointer-events-none flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Burst of particles */}
            {Array.from({ length: 24 }).map((_, i) => {
              const angle = (i / 24) * 360;
              const distance = 120 + Math.random() * 180;
              const x = Math.cos((angle * Math.PI) / 180) * distance;
              const y = Math.sin((angle * Math.PI) / 180) * distance;
              const size = 4 + Math.random() * 8;
              return (
                <motion.div
                  key={i}
                  className="absolute rounded-full"
                  style={{
                    width: size,
                    height: size,
                    backgroundColor: i % 3 === 0 ? "var(--color-signal)" : i % 3 === 1 ? "var(--color-signal-bright)" : "var(--color-signal-wash)",
                  }}
                  initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                  animate={{
                    x,
                    y,
                    opacity: 0,
                    scale: 0,
                  }}
                  transition={{
                    duration: 1.5,
                    delay: Math.random() * 0.3,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                />
              );
            })}

            {/* Center text */}
            <motion.div
              className="text-center"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ delay: 0.3, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-signal text-2xl font-heading font-bold">You found it!</p>
              <p className="text-ink-300 text-sm mt-2">Built with soul, discovered with curiosity.</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Logo 5-click secret */}
      <AnimatePresence>
        {secretRevealed && (
          <motion.div
            className="fixed bottom-24 left-1/2 -translate-x-1/2 z-[9999] bg-ink text-white px-6 py-4 rounded-card shadow-xl max-w-sm text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-signal-bright text-sm font-semibold mb-1">Secret unlocked!</p>
            <p className="text-ink-400 text-sm">
              Use code <span className="text-white font-mono font-bold">CURIOUS10</span> for 10% off your first project.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
