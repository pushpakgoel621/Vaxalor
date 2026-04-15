"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { DBProject } from "@/lib/db/queries";

export default function AdminProjectsPage() {
  const [projects, setProjects] = useState<DBProject[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetch("/api/projects?all=true")
      .then((res) => {
        if (res.status === 401) { router.push("/admin"); return null; }
        return res.json();
      })
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
    if (res.ok) {
      setProjects(projects.map((p) =>
        p.slug === project.slug ? { ...p, published: !p.published } : p
      ));
    }
  };

  return (
    <div className="max-w-[1000px] mx-auto px-6 py-10">
      <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-h1 !text-[28px] text-white font-heading">Projects</h1>
          <p className="text-ink-400 text-sm mt-1">{projects.length} projects</p>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/admin/blogs" className="px-4 py-2 text-xs text-ink-400 border border-ink-200 rounded-input hover:border-signal/40 transition-colors">
            Blog Posts
          </Link>
          <Link href="/admin/projects/new" className="px-5 py-2.5 bg-signal hover:bg-signal-hover text-white text-xs font-medium rounded-input transition-colors">
            New Project
          </Link>
          <button onClick={() => { fetch("/api/auth", { method: "DELETE" }); router.push("/admin"); }} className="px-4 py-2 text-xs text-ink-400 hover:text-white transition-colors">
            Logout
          </button>
        </div>
      </div>

      {loading ? (
        <div className="text-center py-20">
          <div className="w-6 h-6 border-2 border-signal/30 border-t-signal rounded-full animate-spin mx-auto" />
        </div>
      ) : projects.length === 0 ? (
        <div className="text-center py-20 border border-ink-200 rounded-card">
          <p className="text-ink-400 mb-4">No projects yet.</p>
          <Link href="/admin/projects/new" className="text-signal text-sm hover:underline">
            Add your first project
          </Link>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {projects.map((project) => (
            <div key={project.id} className="flex items-center justify-between p-5 bg-ink-100 border border-ink-200 rounded-card hover:border-signal/20 transition-colors">
              <div className="flex-1 min-w-0 mr-4">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-white text-sm font-medium truncate">{project.title}</h3>
                  <span className={`px-2 py-0.5 text-[9px] uppercase tracking-wider rounded-full ${
                    project.published
                      ? "bg-signal/10 text-signal-bright border border-signal/20"
                      : "bg-ink-100 text-ink-400 border border-ink-200"
                  }`}>
                    {project.published ? "Published" : "Draft"}
                  </span>
                  {project.featured && (
                    <span className="px-2 py-0.5 text-[9px] uppercase tracking-wider rounded-full bg-signal text-white">
                      Featured
                    </span>
                  )}
                  {project.concept_project && (
                    <span className="px-2 py-0.5 text-[9px] uppercase tracking-wider rounded-full bg-ink-200/50 text-ink-400 border border-ink-200">
                      Concept
                    </span>
                  )}
                </div>
                <p className="text-ink-400 text-xs truncate">
                  /{project.slug} &middot; {project.category} &middot; {project.timeline} &middot; {project.year}
                </p>
              </div>
              <div className="flex items-center gap-2 flex-shrink-0">
                <button onClick={() => handleTogglePublish(project)} className="px-3 py-1.5 text-xs text-ink-400 border border-ink-200 rounded-input hover:border-signal/40 hover:text-white transition-colors">
                  {project.published ? "Unpublish" : "Publish"}
                </button>
                <Link href={`/admin/projects/${project.slug}/edit`} className="px-3 py-1.5 text-xs text-white border border-ink-200 rounded-input hover:border-signal/40 transition-colors">
                  Edit
                </Link>
                <button onClick={() => handleDelete(project.slug)} className="px-3 py-1.5 text-xs text-red-400 border border-ink-200 rounded-input hover:border-red-400/40 transition-colors">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
