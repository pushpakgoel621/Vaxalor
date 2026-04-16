"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AdminShell } from "@/components/admin/AdminShell";
import type { DBProject } from "@/lib/db/queries";

export default function AdminProjectsPage() {
  const [projects, setProjects] = useState<DBProject[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetch("/api/projects?all=true")
      .then((res) => { if (res.status === 401) { router.push("/admin"); return null; } return res.json(); })
      .then((data) => { if (data?.projects) setProjects(data.projects); })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [router]);

  const handleDelete = async (slug: string) => {
    if (!confirm("Delete this project?")) return;
    const res = await fetch(`/api/projects/${slug}`, { method: "DELETE" });
    if (res.ok) setProjects(projects.filter((p) => p.slug !== slug));
  };

  const handleTogglePublish = async (project: DBProject) => {
    const res = await fetch(`/api/projects/${project.slug}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ published: !project.published }),
    });
    if (res.ok) setProjects(projects.map((p) => p.slug === project.slug ? { ...p, published: !p.published } : p));
  };

  return (
    <AdminShell>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-white text-2xl font-heading font-bold">Projects</h1>
          <p className="text-ink-400 text-sm mt-1">{projects.length} projects total</p>
        </div>
        <Link href="/admin/projects/new" className="self-start px-5 py-2.5 bg-signal hover:bg-signal-hover text-white text-xs font-medium rounded-lg transition-colors">
          + New Project
        </Link>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-20">
          <div className="w-6 h-6 border-2 border-signal/30 border-t-signal rounded-full animate-spin" />
        </div>
      ) : projects.length === 0 ? (
        <div className="text-center py-20 bg-[#0A0F1A] border border-ink-200/20 rounded-xl">
          <p className="text-ink-400 mb-4">No projects yet.</p>
          <Link href="/admin/projects/new" className="text-signal text-sm hover:underline">Add your first project</Link>
        </div>
      ) : (
        <div className="space-y-2">
          {projects.map((project) => (
            <div key={project.id} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-4 bg-[#0A0F1A] border border-ink-200/20 rounded-xl hover:border-signal/15 transition-colors">
              <div className="flex-1 min-w-0 sm:mr-4">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h3 className="text-white text-sm font-medium truncate">{project.title}</h3>
                  <span className={`px-2 py-0.5 text-[9px] uppercase tracking-wider rounded-full ${
                    project.published ? "bg-green-500/10 text-green-400 border border-green-500/20" : "bg-ink-200/30 text-ink-400 border border-ink-200/30"
                  }`}>
                    {project.published ? "Live" : "Draft"}
                  </span>
                  {project.featured && <span className="px-2 py-0.5 text-[9px] uppercase tracking-wider rounded-full bg-signal/10 text-signal-bright border border-signal/20">Featured</span>}
                  {project.concept_project && <span className="px-2 py-0.5 text-[9px] uppercase tracking-wider rounded-full bg-ink-200/20 text-ink-400">Concept</span>}
                </div>
                <p className="text-ink-400 text-xs truncate">/{project.slug} · {project.category} · {project.timeline}</p>
              </div>
              <div className="flex items-center gap-2 shrink-0 flex-wrap">
                <button onClick={() => handleTogglePublish(project)} className="px-3 py-1.5 text-xs text-ink-400 border border-ink-200/30 rounded-lg hover:border-signal/30 hover:text-white transition-colors">
                  {project.published ? "Unpublish" : "Publish"}
                </button>
                <Link href={`/admin/projects/${project.slug}/edit`} className="px-3 py-1.5 text-xs text-white border border-ink-200/30 rounded-lg hover:border-signal/30 transition-colors">
                  Edit
                </Link>
                <button onClick={() => handleDelete(project.slug)} className="px-3 py-1.5 text-xs text-red-400/60 border border-ink-200/30 rounded-lg hover:border-red-400/30 hover:text-red-400 transition-colors">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </AdminShell>
  );
}
