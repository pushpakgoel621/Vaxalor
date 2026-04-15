"use client";

import { useState, useMemo, useEffect } from "react";
import { PageTransition } from "@/components/layout/PageTransition";
import { WorkHero } from "@/components/sections/work/WorkHero";
import { ProjectGrid } from "@/components/sections/work/ProjectGrid";
import { ProjectDetail } from "@/components/sections/work/ProjectDetail";
import { CTASection } from "@/components/sections/home/CTASection";
import { ActiveTickers } from "@/components/ui/ActiveTickers";
import { PROJECTS } from "@/lib/constants";
import type { Project, ProjectFilter } from "@/types";

const FILTER_MAP: Record<string, string | undefined> = {
  All: undefined,
  Websites: "Website",
  Mobile: "Mobile",
  AI: "AI",
  MVP: "MVP",
};

function dbToProject(p: Record<string, unknown>): Project {
  return {
    slug: p.slug as string,
    title: p.title as string,
    hook: (p.hook as string) || "",
    category: p.category as Project["category"],
    description: (p.description as string) || "",
    challenge: (p.challenge as string) || "",
    solution: (p.solution as string) || "",
    result: (p.result as string) || "",
    timeline: (p.timeline as string) || "",
    year: (p.year as string) || "",
    techStack: (p.tech_stack as string[]) || [],
    gradient: (p.gradient as string) || "from-signal-tint via-signal-wash to-signal/20",
    pattern: (p.pattern as Project["pattern"]) || "dots",
    conceptProject: p.concept_project as boolean,
  };
}

export function WorkPageClient() {
  const [filter, setFilter] = useState<ProjectFilter>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [projects, setProjects] = useState<Project[]>(PROJECTS);

  useEffect(() => {
    fetch("/api/projects")
      .then((r) => r.json())
      .then((data) => {
        if (data.projects?.length > 0) {
          setProjects(data.projects.map(dbToProject));
        }
      })
      .catch(() => {});
  }, []);

  const filtered = useMemo(() => {
    const category = FILTER_MAP[filter];
    if (!category) return projects;
    return projects.filter((p) => p.category === category);
  }, [filter, projects]);

  return (
    <PageTransition>
      <WorkHero activeFilter={filter} onFilterChange={setFilter} />
      <ProjectGrid projects={filtered} onProjectClick={setSelectedProject} />
      <section className="bg-canvas pb-section">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
          <ActiveTickers />
        </div>
      </section>
      <CTASection />
      <ProjectDetail
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </PageTransition>
  );
}
