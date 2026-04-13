"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const DEMO_MESSAGES = [
  {
    role: "ai" as const,
    text: "Hey! 👋 I'm Vaxalor AI. Ask me anything about our services, pricing, or process.",
  },
  {
    role: "user" as const,
    text: "How fast can you build a website?",
  },
  {
    role: "ai" as const,
    text: "We ship in 20 days maximum — from kickoff to launch. No exceptions. Want to discuss your project?",
  },
];

export function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed z-50 right-6 bottom-6 md:right-8 md:bottom-8 w-14 h-14 md:w-14 md:h-14 rounded-full bg-signal hover:bg-signal-hover text-white flex items-center justify-center transition-all duration-200 ${
          isOpen ? "" : "animate-chatbot-pulse"
        }`}
        data-cursor="cta"
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        )}
      </button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed z-50 right-4 bottom-24 md:right-8 md:bottom-28 w-[calc(100vw-2rem)] max-w-[360px] h-[500px] bg-canvas-white rounded-card border border-canvas-border shadow-xl flex flex-col overflow-hidden"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Header */}
            <div className="bg-ink px-5 py-4 flex items-center justify-between shrink-0">
              <div>
                <p className="text-white text-sm font-semibold">Chat with Vaxalor AI</p>
                <p className="text-ink-300 text-xs mt-0.5">Typically replies instantly</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-ink-400 hover:text-white transition-colors"
                data-cursor="hover"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {DEMO_MESSAGES.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] px-4 py-2.5 rounded-xl text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-signal-tint text-ink-100 rounded-br-sm"
                        : "bg-canvas-white border border-canvas-border text-ink-200 rounded-bl-sm"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="border-t border-canvas-border p-3 shrink-0">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 bg-canvas-white border border-canvas-border rounded-lg px-3 py-2.5 text-sm text-ink-100 placeholder:text-ink-400 focus:border-signal-bright focus:outline-none transition-colors"
                />
                <button
                  className="bg-signal hover:bg-signal-hover text-white rounded-lg px-3 py-2.5 transition-colors"
                  data-cursor="hover"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
