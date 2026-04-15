"use client";

import { useState, useMemo } from "react";
import { PageTransition } from "@/components/layout/PageTransition";
import { WorkHero } from "@/components/sections/work/WorkHero";
import { ProjectGrid } from "@/components/sections/work/ProjectGrid";
import { ProjectDetail } from "@/components/sections/work/ProjectDetail";
import { CTASection } from "@/components/sections/home/CTASection";
import { PROJECTS } from "@/lib/constants";
import type { Project, ProjectFilter } from "@/types";

const FILTER_MAP: Record<string, string | undefined> = {
  All: undefined,
  Websites: "Website",
  Mobile: "Mobile",
  AI: "AI",
  MVP: "MVP",
};

export function WorkPageClient() {
  const [filter, setFilter] = useState<ProjectFilter>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered = useMemo(() => {
    const category = FILTER_MAP[filter];
    if (!category) return PROJECTS;
    return PROJECTS.filter((p) => p.category === category);
  }, [filter]);

  return (
    <PageTransition>
      <WorkHero activeFilter={filter} onFilterChange={setFilter} />
      <ProjectGrid projects={filtered} onProjectClick={setSelectedProject} />
      <CTASection />
      <ProjectDetail
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </PageTransition>
  );
}
