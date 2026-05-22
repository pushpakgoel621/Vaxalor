"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ProjectCard } from "@/components/ui/ProjectCard";
import type { Project } from "@/types";

interface ProjectGridProps {
  projects: Project[];
  onProjectClick: (project: Project) => void;
}

export function ProjectGrid({ projects, onProjectClick }: ProjectGridProps) {
  return (
    <section className="bg-canvas pb-section">
      <div className="max-w-[1200px] mx-auto md:px-6 lg:px-8">
        <AnimatePresence mode="popLayout">
          <motion.div
            className="flex md:grid md:grid-cols-12 gap-4 md:gap-5 overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-hide px-6 md:px-0 [scroll-padding-inline:1.5rem]"
            layout
          >
            {projects.map((project, i) => {
              const isLarge = i % 4 === 0 || i % 4 === 3;
              const colSpan = isLarge ? "md:col-span-7" : "md:col-span-5";

              return (
                <motion.div
                  key={project.slug}
                  className={`shrink-0 w-[82%] sm:w-[60%] md:w-auto snap-start ${colSpan}`}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <button
                    onClick={() => onProjectClick(project)}
                    className="w-full text-left"
                    data-cursor="hover"
                  >
                    <ProjectCard
                      title={project.title}
                      category={project.category}
                      description={project.hook}
                      gradient={project.gradient}
                      pattern={project.pattern}
                      imageSrc={project.thumbnailUrl ?? undefined}
                      size={isLarge ? "large" : "small"}
                    />
                  </button>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* Mobile swipe hint */}
        {projects.length > 1 && (
          <div className="md:hidden mt-4 flex items-center justify-center gap-2 text-ink-400 text-xs">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            Swipe to explore {projects.length} projects
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </div>
        )}

        {projects.length === 0 && (
          <div className="text-center py-20 px-6">
            <p className="text-ink-300 text-lg">No projects in this category yet.</p>
          </div>
        )}
      </div>
    </section>
  );
}
