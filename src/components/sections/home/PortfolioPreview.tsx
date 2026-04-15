"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ActiveTickers } from "@/components/ui/ActiveTickers";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { StaggerChildren, StaggerItem } from "@/components/animation/StaggerChildren";

const PLACEHOLDER_PROJECTS = [
  {
    title: "FreshBite",
    category: "Website",
    description: "Modern restaurant website with online ordering",
    gradient: "from-signal-tint via-signal-wash to-signal/20",
    pattern: "grid" as const,
  },
  {
    title: "TrackFlow",
    category: "MVP",
    description: "Project management dashboard for startups",
    gradient: "from-canvas-alt via-signal-tint to-signal-wash/60",
    pattern: "dots" as const,
  },
  {
    title: "ShopAssist AI",
    category: "AI",
    description: "Smart chatbot for e-commerce support",
    gradient: "from-signal-wash/50 via-signal-tint to-canvas-alt",
    pattern: "waves" as const,
  },
  {
    title: "BuildCRM",
    category: "CRM",
    description: "Custom CRM with sales pipeline management",
    gradient: "from-signal-tint via-canvas-alt to-signal-wash/40",
    pattern: "circles" as const,
  },
];

export function PortfolioPreview() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const leftColY = useTransform(scrollYProgress, [0, 1], [30, -20]);
  const rightColY = useTransform(scrollYProgress, [0, 1], [60, -30]);

  return (
    <section ref={sectionRef} className="bg-canvas py-section overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        <ScrollReveal>
          <div className="flex items-end justify-between mb-14">
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

        <StaggerChildren className="grid grid-cols-1 md:grid-cols-12 gap-5">
          {/* Row 1 */}
          <StaggerItem className="md:col-span-7">
            <motion.div style={{ y: leftColY }} className="hidden md:block">
              <ProjectCard {...PLACEHOLDER_PROJECTS[0]} size="large" />
            </motion.div>
            <div className="md:hidden">
              <ProjectCard {...PLACEHOLDER_PROJECTS[0]} size="large" />
            </div>
          </StaggerItem>
          <StaggerItem className="md:col-span-5">
            <motion.div style={{ y: rightColY }} className="hidden md:block">
              <ProjectCard {...PLACEHOLDER_PROJECTS[1]} size="small" />
            </motion.div>
            <div className="md:hidden">
              <ProjectCard {...PLACEHOLDER_PROJECTS[1]} size="small" />
            </div>
          </StaggerItem>

          {/* Row 2 */}
          <StaggerItem className="md:col-span-5">
            <motion.div style={{ y: rightColY }} className="hidden md:block">
              <ProjectCard {...PLACEHOLDER_PROJECTS[2]} size="small" />
            </motion.div>
            <div className="md:hidden">
              <ProjectCard {...PLACEHOLDER_PROJECTS[2]} size="small" />
            </div>
          </StaggerItem>
          <StaggerItem className="md:col-span-7">
            <motion.div style={{ y: leftColY }} className="hidden md:block">
              <ProjectCard {...PLACEHOLDER_PROJECTS[3]} size="large" />
            </motion.div>
            <div className="md:hidden">
              <ProjectCard {...PLACEHOLDER_PROJECTS[3]} size="large" />
            </div>
          </StaggerItem>
        </StaggerChildren>

        <div className="md:hidden mt-8 text-center">
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
