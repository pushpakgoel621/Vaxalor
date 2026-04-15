"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TickerData {
  project: string;
  day: number;
  total: number;
}

export function CurrentlyBuilding() {
  const [ticker, setTicker] = useState<TickerData | null>(null);

  useEffect(() => {
    fetch("/api/ticker")
      .then((r) => r.json())
      .then((data) => {
        if (data.ticker) setTicker(data.ticker);
      })
      .catch(() => {});
  }, []);

  return (
    <AnimatePresence>
      {ticker && (
        <motion.div
          className="bg-ink text-white overflow-hidden"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="max-w-[1200px] mx-auto px-6 sm:px-8 py-3 flex items-center justify-center gap-3 text-sm">
            {/* Pulse dot */}
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
            </span>

            <span className="text-ink-400">Currently building:</span>
            <span className="font-medium text-white">{ticker.project}</span>
            <span className="text-ink-400">—</span>

            {/* Progress bar */}
            <div className="hidden sm:flex items-center gap-2">
              <div className="w-24 h-1.5 bg-ink-200 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-signal-bright rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${(ticker.day / ticker.total) * 100}%` }}
                  transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                />
              </div>
              <span className="text-signal-bright font-mono text-xs font-semibold">
                Day {ticker.day}/{ticker.total}
              </span>
            </div>

            {/* Mobile: just show day count */}
            <span className="sm:hidden text-signal-bright font-mono text-xs font-semibold">
              Day {ticker.day}/{ticker.total}
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
