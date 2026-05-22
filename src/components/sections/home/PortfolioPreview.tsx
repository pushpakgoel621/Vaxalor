"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ActiveTickers } from "@/components/ui/ActiveTickers";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { StaggerChildren, StaggerItem } from "@/components/animation/StaggerChildren";
import { PROJECTS } from "@/lib/constants";

export function PortfolioPreview() {
  const displayProjects = PROJECTS.slice(0, 4);

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const leftColY = useTransform(scrollYProgress, [0, 1], [30, -20]);
  const rightColY = useTransform(scrollYProgress, [0, 1], [60, -30]);

  return (
    <section ref={sectionRef} className="bg-canvas py-section overflow-hidden">
      <div className="max-w-[1200px] mx-auto md:px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex items-end justify-between mb-14 px-6 md:px-0">
            <SectionHeading
              eyebrow="Selected work"
              heading="Projects we're proud of"
              align="left"
              className="mb-0"
            />
            <Link
              href="/work"
              className="hidden md:inline-flex text-signal text-[15px] font-medium hover:underline underline-offset-4"
              data-cursor="hover"
            >
              View all work →
            </Link>
          </div>
        </ScrollReveal>

        <StaggerChildren className="flex md:grid md:grid-cols-12 gap-4 md:gap-5 overflow-x-auto md:overflow-visible snap-x snap-mandatory scrollbar-hide px-6 md:px-0">
          {[
            { idx: 0, span: "md:col-span-7", size: "large" as const, y: leftColY },
            { idx: 1, span: "md:col-span-5", size: "small" as const, y: rightColY },
            { idx: 2, span: "md:col-span-5", size: "small" as const, y: rightColY },
            { idx: 3, span: "md:col-span-7", size: "large" as const, y: leftColY },
          ].map(({ idx, span, size, y }) => {
            const project = displayProjects[idx];
            if (!project) return null;
            return (
              <StaggerItem key={project.slug} className={`shrink-0 w-[82%] sm:w-[60%] md:w-auto snap-start ${span}`}>
                <Link href={`/work?project=${project.slug}`} data-cursor="hover">
                  {/* Parallax wrapper — disabled on mobile (no vertical offset inside horizontal scroller) */}
                  <motion.div style={{ y }} className="md:[transform:none]">
                    <ProjectCard
                      title={project.title}
                      category={project.category}
                      description={project.hook}
                      gradient={project.gradient}
                      pattern={project.pattern}
                      imageSrc={project.thumbnailUrl ?? undefined}
                      size={size}
                    />
                  </motion.div>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerChildren>

        <div className="md:hidden mt-6 flex items-center justify-center gap-3">
          <Link
            href="/work"
            className="text-signal text-[15px] font-medium hover:underline underline-offset-4"
            data-cursor="hover"
          >
            View all work →
          </Link>
        </div>

        <ActiveTickers />
      </div>
    </section>
  );
}
