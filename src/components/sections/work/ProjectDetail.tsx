"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import type { Project } from "@/types";

interface ProjectDetailProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectDetail({ project, onClose }: ProjectDetailProps) {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      // Stop Lenis smooth scroll
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
      document.body.style.top = `-${window.scrollY}px`;
    } else {
      const scrollY = document.body.style.top;
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.top = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.top = "";
    };
  }, [project]);

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-[60] bg-ink/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-4 md:inset-8 lg:inset-y-12 lg:inset-x-[10%] z-[70] bg-canvas-white rounded-xl overflow-y-auto overscroll-contain"
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.97 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="sticky top-4 float-right mr-4 mt-4 z-10 w-10 h-10 rounded-full bg-canvas-alt border border-canvas-border flex items-center justify-center hover:bg-canvas-border transition-colors"
              data-cursor="hover"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {/* Hero image */}
            <div className={`w-full h-56 md:h-72 bg-gradient-to-br ${project.gradient} rounded-t-xl`}>
              <svg className="w-full h-full opacity-[0.08]" xmlns="http://www.w3.org/2000/svg">
                {project.pattern === "grid" &&
                  Array.from({ length: 8 }).map((_, i) => (
                    <line key={i} x1={`${(i + 1) * 12}%`} y1="0" x2={`${(i + 1) * 12}%`} y2="100%" stroke="var(--color-signal)" strokeWidth="0.5" />
                  ))
                }
              </svg>
            </div>

            {/* Content */}
            <div className="px-6 md:px-12 lg:px-16 py-10 max-w-3xl">
              {/* Meta */}
              <div className="flex flex-wrap items-center gap-3 text-ink-300 text-sm mb-4">
                <Badge>{project.category}</Badge>
                <span>&middot;</span>
                <span>{project.timeline}</span>
                <span>&middot;</span>
                <span>{project.year}</span>
                {project.conceptProject && (
                  <>
                    <span>&middot;</span>
                    <span className="text-ink-400 italic">Concept Project</span>
                  </>
                )}
              </div>

              <h2 className="text-display !text-[36px] md:!text-[40px] mb-4">
                {project.title}
              </h2>
              <p className="text-ink-200 text-lg leading-relaxed mb-10">
                {project.description}
              </p>

              {/* Challenge / Solution / Result */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-ink text-[24px] font-semibold font-heading mb-3">Challenge</h3>
                  <p className="text-ink-200 text-base leading-[1.8]">{project.challenge}</p>
                </div>
                <div>
                  <h3 className="text-ink text-[24px] font-semibold font-heading mb-3">Solution</h3>
                  <p className="text-ink-200 text-base leading-[1.8]">{project.solution}</p>
                </div>
                <div>
                  <h3 className="text-ink text-[24px] font-semibold font-heading mb-3">Result</h3>
                  <p className="text-ink-200 text-base leading-[1.8]">{project.result}</p>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="mt-10">
                <h4 className="text-ink-300 text-xs uppercase tracking-[0.08em] font-semibold mb-3">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-canvas-alt border border-canvas-border rounded-lg text-ink-200 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="mt-12 pt-8 border-t border-canvas-border">
                <p className="text-ink-300 text-base mb-4">
                  Want something like this for your business?
                </p>
                <Button href="/contact" arrow>
                  Start a conversation
                </Button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
