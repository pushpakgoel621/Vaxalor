"use client";

import { useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CategoryMockup } from "@/components/ui/CategoryMockup";
import type { Project } from "@/types";

interface ProjectDetailProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectDetail({ project, onClose }: ProjectDetailProps) {
  const scrollYRef = useRef(0);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (project) {
      scrollYRef.current = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollYRef.current}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflow = "";
      window.scrollTo(0, scrollYRef.current);
    }
    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflow = "";
    };
  }, [project]);

  // Block wheel events from reaching the page behind the modal
  const handleBackdropWheel = useCallback((e: React.WheelEvent) => {
    e.stopPropagation();
  }, []);

  // Close on Escape
  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [project, onClose]);

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
            onWheel={handleBackdropWheel}
          />

          {/* Modal */}
          <motion.div
            ref={modalRef}
            className="fixed inset-4 md:inset-8 lg:inset-y-12 lg:inset-x-[10%] z-[70] bg-canvas-white rounded-xl overflow-y-auto overscroll-contain"
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.97 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            onWheel={(e) => e.stopPropagation()}
          >
            {/* Close button — fixed to the modal viewport so it never overlaps content */}
            <button
              onClick={onClose}
              className="fixed top-6 md:top-14 right-6 md:right-[calc(10%+1rem)] z-20 w-9 h-9 md:w-10 md:h-10 rounded-full bg-canvas-white border border-canvas-border shadow-md flex items-center justify-center hover:bg-canvas-alt transition-colors"
              data-cursor="hover"
              aria-label="Close project"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {/* Hero image */}
            {project.thumbnailUrl ? (
              <div className="w-full bg-gradient-to-br from-canvas-alt to-canvas-border rounded-t-xl relative overflow-hidden">
                <Image
                  src={project.thumbnailUrl}
                  alt={project.title}
                  width={1400}
                  height={900}
                  className="w-full max-h-[500px] object-contain"
                  priority
                />
              </div>
            ) : (
              <div className="w-full h-64 md:h-80 rounded-t-xl relative overflow-hidden">
                <CategoryMockup category={project.category} gradient={project.gradient} />
              </div>
            )}

            {/* Content */}
            <div className="px-5 md:px-12 lg:px-16 py-6 md:py-10 max-w-3xl">
              {/* Meta */}
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5 text-ink-300 text-xs md:text-sm mb-4">
                <Badge>{project.category}</Badge>
                {project.timeline && (
                  <>
                    <span>&middot;</span>
                    <span>{project.timeline}</span>
                  </>
                )}
                {project.year && (
                  <>
                    <span>&middot;</span>
                    <span>{project.year}</span>
                  </>
                )}
                {project.conceptProject && (
                  <>
                    <span>&middot;</span>
                    <span className="text-ink-400 italic">Concept Project</span>
                  </>
                )}
              </div>

              <h2 className="text-display !text-[26px] md:!text-[40px] mb-4 leading-tight">
                {project.title}
              </h2>
              {(project.description || project.hook) && (
                <p className="text-ink-200 text-lg leading-relaxed mb-10">
                  {project.description || project.hook}
                </p>
              )}

              {/* Challenge / Solution / Result */}
              <div className="space-y-8">
                {project.challenge && (
                  <div>
                    <h3 className="text-ink text-[24px] font-semibold font-heading mb-3">Challenge</h3>
                    <p className="text-ink-200 text-base leading-[1.8]">{project.challenge}</p>
                  </div>
                )}
                {project.solution && (
                  <div>
                    <h3 className="text-ink text-[24px] font-semibold font-heading mb-3">Solution</h3>
                    <p className="text-ink-200 text-base leading-[1.8]">{project.solution}</p>
                  </div>
                )}
                {project.result && (
                  <div>
                    <h3 className="text-ink text-[24px] font-semibold font-heading mb-3">Result</h3>
                    <p className="text-ink-200 text-base leading-[1.8]">{project.result}</p>
                  </div>
                )}
              </div>

              {/* Tech Stack */}
              {project.techStack?.length > 0 && (
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
              )}

              {/* CTA */}
              <div className="mt-12 pt-8 border-t border-canvas-border">
                {project.projectUrl && (
                  <a
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 mb-6 border border-signal text-signal rounded-button text-sm font-medium hover:bg-signal-tint transition-colors"
                    data-cursor="hover"
                  >
                    Visit Live Site
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15 3 21 3 21 9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                  </a>
                )}
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
