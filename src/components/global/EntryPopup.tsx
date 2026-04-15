"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

export function EntryPopup() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    // Only show if user hasn't seen it before
    const dismissed = localStorage.getItem("vaxalor_popup_dismissed");
    if (dismissed) return;

    // Show after 3 seconds
    const timer = setTimeout(() => setShow(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  function dismiss() {
    setShow(false);
    localStorage.setItem("vaxalor_popup_dismissed", "true");
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;

    setSending(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name || "Popup Lead",
          email,
          service: "General",
          message: "Lead captured from entry popup",
        }),
      });
      setSubmitted(true);
      setTimeout(() => {
        dismiss();
      }, 2500);
    } catch {
      dismiss();
    } finally {
      setSending(false);
    }
  }

  return (
    <AnimatePresence>
      {show && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-[80] bg-ink/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={dismiss}
          />

          {/* Popup */}
          <motion.div
            className="fixed z-[90] top-1/2 left-1/2 w-[calc(100vw-2rem)] max-w-[420px] bg-canvas-white rounded-2xl shadow-2xl border border-canvas-border overflow-hidden"
            initial={{ opacity: 0, y: 40, x: "-50%", translateY: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%", translateY: "-50%" }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            style={{ left: "50%", top: "50%" }}
          >
            {/* Close button */}
            <button
              onClick={dismiss}
              className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-canvas-alt flex items-center justify-center text-ink-300 hover:text-ink transition-colors"
              data-cursor="hover"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {/* Top accent bar */}
            <div className="h-1 bg-gradient-to-r from-signal via-signal-bright to-signal" />

            <div className="p-7 md:p-8">
              {/* Mascot */}
              <div className="flex justify-center mb-4">
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Image
                    src="/images/mascot.png"
                    alt="Vaxalor mascot"
                    width={70}
                    height={50}
                    className="drop-shadow-md"
                  />
                </motion.div>
              </div>

              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <h3 className="text-ink text-[22px] font-semibold font-heading text-center mb-2">
                      Got a project in mind?
                    </h3>
                    <p className="text-ink-300 text-sm text-center mb-6">
                      Drop your details and get a <span className="text-signal font-medium">free consultation</span> within 24 hours.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-3">
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your name"
                        className="w-full px-4 py-3 rounded-xl border border-canvas-border text-sm text-ink-100 placeholder:text-ink-400 focus:border-signal-bright focus:outline-none transition-colors"
                      />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your@email.com"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-canvas-border text-sm text-ink-100 placeholder:text-ink-400 focus:border-signal-bright focus:outline-none transition-colors"
                      />
                      <button
                        type="submit"
                        disabled={sending || !email.trim()}
                        className="w-full py-3 bg-signal hover:bg-signal-hover text-white text-sm font-semibold rounded-xl transition-colors disabled:opacity-50"
                        data-cursor="cta"
                      >
                        {sending ? "Sending..." : "Get free consultation →"}
                      </button>
                    </form>

                    <p className="text-ink-400 text-[11px] text-center mt-4">
                      No spam. Just a real conversation about your project.
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    className="text-center py-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <div className="w-12 h-12 rounded-full bg-signal-tint flex items-center justify-center mx-auto mb-3">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-signal)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <h3 className="text-ink text-lg font-semibold mb-1">You&apos;re in!</h3>
                    <p className="text-ink-300 text-sm">We&apos;ll reach out within 24 hours.</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
