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
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        <AnimatePresence mode="popLayout">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-12 gap-5"
            layout
          >
            {projects.map((project, i) => {
              const isLarge = i % 4 === 0 || i % 4 === 3;
              const colSpan = isLarge ? "md:col-span-7" : "md:col-span-5";

              return (
                <motion.div
                  key={project.slug}
                  className={colSpan}
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
                      size={isLarge ? "large" : "small"}
                    />
                  </button>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {projects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-ink-300 text-lg">No projects in this category yet.</p>
          </div>
        )}
      </div>
    </section>
  );
}
