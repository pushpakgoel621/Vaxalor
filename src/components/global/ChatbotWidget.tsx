"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface Message {
  role: "user" | "assistant";
  text: string;
}

function generateSessionId() {
  return `vax_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
}

export function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [sessionId, setSessionId] = useState("");
  const [hasGreeted, setHasGreeted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Init session
  useEffect(() => {
    const stored = sessionStorage.getItem("vaxalor_chat_session");
    if (stored) {
      setSessionId(stored);
    } else {
      const newId = generateSessionId();
      setSessionId(newId);
      sessionStorage.setItem("vaxalor_chat_session", newId);
    }
  }, []);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  // Greet on first open
  useEffect(() => {
    if (isOpen && !hasGreeted && messages.length === 0) {
      setHasGreeted(true);
      setMessages([
        {
          role: "assistant",
          text: "Hey! 👋 I'm the Vaxalor AI assistant. I can help you learn about our services, pricing, or process. What are you looking to build?",
        },
      ]);
    }
  }, [isOpen, hasGreeted, messages.length]);

  const sendUserMessage = useCallback(async (text: string) => {
    if (!text.trim() || isTyping) return;

    setInputValue("");
    setMessages((prev) => [...prev, { role: "user", text }]);
    setIsTyping(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text, sessionId }),
      });

      const data = await res.json();

      if (data.reply) {
        setMessages((prev) => [...prev, { role: "assistant", text: data.reply }]);
      } else {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", text: "Sorry, something went wrong. Try again or reach us at hello@vaxalor.com" },
        ]);
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", text: "Connection issue. You can reach us directly at hello@vaxalor.com" },
      ]);
    } finally {
      setIsTyping(false);
    }
  }, [isTyping, sessionId]);

  const handleSend = useCallback(() => {
    sendUserMessage(inputValue.trim());
  }, [inputValue, sendUserMessage]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleQuickReply = (q: string) => {
    sendUserMessage(q);
  };

  const showQuickReplies = messages.filter((m) => m.role === "user").length === 0;

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed z-50 right-6 bottom-6 md:right-8 md:bottom-8 w-14 h-14 rounded-full bg-signal hover:bg-signal-hover text-white flex items-center justify-center transition-all duration-200 ${
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
            className="fixed z-50 right-4 bottom-24 md:right-8 md:bottom-28 w-[calc(100vw-2rem)] max-w-[380px] h-[520px] bg-canvas-white rounded-2xl border border-canvas-border shadow-2xl flex flex-col overflow-hidden"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Header */}
            <div className="bg-ink px-5 py-4 flex items-center justify-between shrink-0 rounded-t-2xl">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-signal/20 flex items-center justify-center">
                  <span className="text-signal-bright text-xs font-bold">AI</span>
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">Vaxalor AI</p>
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    <p className="text-ink-400 text-[11px]">Online now</p>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-ink-400 hover:text-white transition-colors p-1"
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
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {msg.role === "assistant" && (
                    <div className="w-6 h-6 rounded-full bg-signal/10 flex items-center justify-center mr-2 mt-1 shrink-0">
                      <span className="text-signal text-[9px] font-bold">AI</span>
                    </div>
                  )}
                  <div
                    className={`max-w-[78%] px-4 py-2.5 text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-signal text-white rounded-2xl rounded-br-md"
                        : "bg-canvas-alt border border-canvas-border text-ink-200 rounded-2xl rounded-bl-md"
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <motion.div
                  className="flex justify-start"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <div className="w-6 h-6 rounded-full bg-signal/10 flex items-center justify-center mr-2 mt-1 shrink-0">
                    <span className="text-signal text-[9px] font-bold">AI</span>
                  </div>
                  <div className="bg-canvas-alt border border-canvas-border rounded-2xl rounded-bl-md px-4 py-3 flex gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-ink-400 animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-2 h-2 rounded-full bg-ink-400 animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-2 h-2 rounded-full bg-ink-400 animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick replies */}
            {showQuickReplies && (
              <div className="px-4 pb-2 flex flex-wrap gap-1.5">
                {["What do you build?", "How fast?", "Pricing?"].map((q) => (
                  <button
                    key={q}
                    onClick={() => handleQuickReply(q)}
                    className="px-3 py-1.5 text-xs font-medium text-signal border border-signal/20 rounded-full hover:bg-signal-tint transition-colors"
                    data-cursor="hover"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="border-t border-canvas-border p-3 shrink-0">
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type a message..."
                  disabled={isTyping}
                  className="flex-1 bg-canvas-alt border border-canvas-border rounded-xl px-4 py-2.5 text-sm text-ink-100 placeholder:text-ink-400 focus:border-signal-bright focus:outline-none transition-colors disabled:opacity-50"
                />
                <button
                  onClick={handleSend}
                  disabled={isTyping || !inputValue.trim()}
                  className="bg-signal hover:bg-signal-hover text-white rounded-xl px-3.5 py-2.5 transition-colors disabled:opacity-40"
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
