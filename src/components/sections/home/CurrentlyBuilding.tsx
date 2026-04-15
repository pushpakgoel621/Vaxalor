"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TickerItem {
  id: string;
  project: string;
  day: number;
  total: number;
  active: boolean;
}

export function CurrentlyBuilding() {
  const [tickers, setTickers] = useState<TickerItem[]>([]);

  useEffect(() => {
    fetch("/api/ticker")
      .then((r) => r.json())
      .then((data) => {
        if (data.tickers?.length) setTickers(data.tickers);
      })
      .catch(() => {});
  }, []);

  if (tickers.length === 0) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="bg-ink text-white overflow-hidden"
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="py-2.5 flex items-center">
          <div className="animate-marquee flex items-center gap-12 w-max group hover:[animation-play-state:paused]" style={{ animationDuration: `${Math.max(20, tickers.length * 12)}s` }}>
            {[...tickers, ...tickers, ...tickers].map((ticker, i) => (
              <div key={`${ticker.id}-${i}`} className="flex items-center gap-3 text-sm shrink-0 px-2">
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
                </span>
                <span className="text-ink-400 shrink-0">Building:</span>
                <span className="font-medium text-white whitespace-nowrap">{ticker.project}</span>
                <div className="hidden sm:flex items-center gap-2 shrink-0">
                  <div className="w-16 h-1.5 bg-ink-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-signal-bright rounded-full"
                      style={{ width: `${(ticker.day / ticker.total) * 100}%` }}
                    />
                  </div>
                  <span className="text-signal-bright font-mono text-[11px] font-semibold whitespace-nowrap">
                    Day {ticker.day}/{ticker.total}
                  </span>
                </div>
                <span className="sm:hidden text-signal-bright font-mono text-[11px] font-semibold whitespace-nowrap">
                  Day {ticker.day}/{ticker.total}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
