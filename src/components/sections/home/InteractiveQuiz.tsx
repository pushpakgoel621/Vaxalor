"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/animation/ScrollReveal";

const STEPS = [
  {
    question: "What are you looking to build?",
    options: ["Website", "Mobile App", "AI Solution", "MVP", "Not sure yet"],
  },
  {
    question: "What's your timeline?",
    options: ["ASAP", "1-2 months", "Just exploring"],
  },
  {
    question: "What's your budget range?",
    options: ["Under $1K", "$1K-$5K", "$5K-$10K", "$10K+", "Not sure"],
  },
];

function getRecommendation(answers: string[]): { title: string; description: string } {
  const [type, timeline] = answers;

  if (type === "MVP" || type === "Not sure yet") {
    return {
      title: "We'd suggest starting with an MVP",
      description:
        "And you qualify for our 50% discount. Test your idea fast, validate with real users, and iterate.",
    };
  }
  if (type === "AI Solution") {
    return {
      title: "An AI solution sounds perfect",
      description:
        "We can build a custom chatbot or AI integration that handles your workload 24/7.",
    };
  }
  if (timeline === "ASAP") {
    return {
      title: "We love urgent projects",
      description:
        "With our 20-day delivery promise, we'll have you live before most agencies finish their discovery phase.",
    };
  }
  return {
    title: `A ${type?.toLowerCase() || "custom project"} — great choice`,
    description:
      "We'll design and build it from scratch, tailored to your business. No templates.",
  };
}

export function InteractiveQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [done, setDone] = useState(false);

  function selectOption(option: string) {
    const newAnswers = [...answers, option];
    setAnswers(newAnswers);

    if (step < STEPS.length - 1) {
      setStep(step + 1);
    } else {
      setDone(true);
    }
  }

  function reset() {
    setStep(0);
    setAnswers([]);
    setDone(false);
  }

  const recommendation = done ? getRecommendation(answers) : null;

  return (
    <section className="bg-canvas-alt py-section">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Find your fit"
            heading="What do you need?"
            subheading="Answer 3 quick questions and we'll point you in the right direction."
          />
        </ScrollReveal>

        <div className="max-w-xl mx-auto mt-12">
          {/* Progress bar */}
          <div className="flex gap-2 mb-8">
            {STEPS.map((_, i) => (
              <div
                key={i}
                className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
                  i <= step ? "bg-signal" : "bg-canvas-border"
                }`}
              />
            ))}
          </div>

          <div className="bg-canvas-white border border-canvas-border rounded-card p-8 md:p-10 min-h-[280px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              {!done ? (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full"
                >
                  <p className="text-ink-300 text-sm font-medium mb-2">
                    Step {step + 1} of {STEPS.length}
                  </p>
                  <h3 className="text-ink text-[24px] font-semibold font-heading mb-6">
                    {STEPS[step].question}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {STEPS[step].options.map((option) => (
                      <button
                        key={option}
                        onClick={() => selectOption(option)}
                        className="px-5 py-3 rounded-button border border-canvas-border text-ink-200 text-sm font-medium hover:border-signal hover:text-signal hover:bg-signal-tint transition-all duration-200"
                        data-cursor="hover"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full text-center"
                >
                  <div className="w-10 h-10 rounded-full bg-signal-tint flex items-center justify-center mx-auto mb-4">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-signal)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 className="text-ink text-[22px] font-semibold font-heading mb-2">
                    {recommendation?.title}
                  </h3>
                  <p className="text-ink-300 text-base mb-6 max-w-md mx-auto">
                    {recommendation?.description}
                  </p>
                  <div className="flex flex-wrap gap-3 justify-center">
                    <Button href="/contact" arrow>
                      Book a free call
                    </Button>
                    <button
                      onClick={reset}
                      className="text-ink-300 text-sm font-medium hover:text-signal transition-colors"
                      data-cursor="hover"
                    >
                      Start over
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
