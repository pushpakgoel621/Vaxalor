"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TickerItem {
  id: string;
  project: string;
  day: number;
  total: number;
}

export function ActiveTickers() {
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
        className="mt-10 p-5 bg-canvas-white border border-canvas-border rounded-card"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="flex items-center gap-2 mb-4">
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
          </span>
          <span className="text-ink text-sm font-semibold font-heading">Currently building</span>
        </div>

        <div className="space-y-3">
          {tickers.map((ticker) => (
            <div key={ticker.id} className="flex items-center justify-between gap-4">
              <span className="text-ink-200 text-sm truncate">{ticker.project}</span>
              <div className="flex items-center gap-2.5 shrink-0">
                <div className="w-20 h-1.5 bg-canvas-alt rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-signal rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(ticker.day / ticker.total) * 100}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                  />
                </div>
                <span className="text-signal font-mono text-[11px] font-semibold whitespace-nowrap">
                  {ticker.day}/{ticker.total}d
                </span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
