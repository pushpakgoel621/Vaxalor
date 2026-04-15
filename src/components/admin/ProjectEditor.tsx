"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { MediaUploader } from "./MediaUploader";
import type { DBProject } from "@/lib/db/queries";

interface ProjectEditorProps {
  slug?: string;
}

const CATEGORIES = ["Website", "Mobile", "AI", "MVP", "CRM"];
const PATTERNS = ["dots", "grid", "waves", "circles"];
const GRADIENTS = [
  "from-signal-tint via-signal-wash to-signal/20",
  "from-canvas-alt via-signal-tint to-signal-wash/60",
  "from-signal-wash/50 via-signal-tint to-canvas-alt",
  "from-signal-tint via-canvas-alt to-signal-wash/40",
];

export function ProjectEditor({ slug }: ProjectEditorProps) {
  const router = useRouter();
  const isEditing = Boolean(slug);

  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(isEditing);
  const [error, setError] = useState("");

  const [title, setTitle] = useState("");
  const [projectSlug, setProjectSlug] = useState("");
  const [hook, setHook] = useState("");
  const [category, setCategory] = useState("Website");
  const [description, setDescription] = useState("");
  const [challenge, setChallenge] = useState("");
  const [solution, setSolution] = useState("");
  const [result, setResult] = useState("");
  const [timeline, setTimeline] = useState("");
  const [year, setYear] = useState(new Date().getFullYear().toString());
  const [techStackStr, setTechStackStr] = useState("");
  const [gradient, setGradient] = useState(GRADIENTS[0]);
  const [pattern, setPattern] = useState("dots");
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const [conceptProject, setConceptProject] = useState(true);
  const [featured, setFeatured] = useState(false);
  const [published, setPublished] = useState(false);
  const [displayOrder, setDisplayOrder] = useState(0);

  useEffect(() => {
    if (!slug) return;
    fetch(`/api/projects/${slug}`)
      .then((res) => {
        if (res.status === 401) { router.push("/admin"); return null; }
        return res.json();
      })
      .then((data) => {
        if (!data?.project) return;
        const p: DBProject = data.project;
        setTitle(p.title);
        setProjectSlug(p.slug);
        setHook(p.hook || "");
        setCategory(p.category);
        setDescription(p.description || "");
        setChallenge(p.challenge || "");
        setSolution(p.solution || "");
        setResult(p.result || "");
        setTimeline(p.timeline || "");
        setYear(p.year || "");
        setTechStackStr((p.tech_stack || []).join(", "));
        setGradient(p.gradient || GRADIENTS[0]);
        setPattern(p.pattern || "dots");
        setThumbnailUrl(p.thumbnail_url || "");
        setConceptProject(p.concept_project);
        setFeatured(p.featured);
        setPublished(p.published);
        setDisplayOrder(p.display_order);
      })
      .finally(() => setLoading(false));
  }, [slug, router]);

  const handleTitleChange = (val: string) => {
    setTitle(val);
    if (!isEditing) {
      setProjectSlug(val.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""));
    }
  };

  const handleSave = async () => {
    if (!title.trim() || !projectSlug.trim()) {
      setError("Title and slug are required");
      return;
    }
    setSaving(true);
    setError("");

    const body = {
      title, slug: projectSlug, hook, category, description, challenge, solution, result,
      timeline, year, tech_stack: techStackStr.split(",").map((s) => s.trim()).filter(Boolean),
      gradient, pattern, thumbnail_url: thumbnailUrl || null,
      concept_project: conceptProject, featured, published, display_order: displayOrder,
    };

    try {
      const url = isEditing ? `/api/projects/${slug}` : "/api/projects";
      const method = isEditing ? "PUT" : "POST";
      const res = await fetch(url, { method, headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
      const data = await res.json();
      if (!res.ok) { setError(data.error || "Save failed"); return; }
      router.push("/admin/projects");
    } catch {
      setError("Save failed.");
    } finally {
      setSaving(false);
    }
  };

  const inputClass = "w-full bg-ink-100 border border-ink-200 rounded-input px-4 py-2.5 text-white text-sm placeholder:text-ink-300 focus:outline-none focus:border-signal-bright transition-colors";
  const labelClass = "text-ink-400 text-xs font-medium uppercase tracking-wider mb-1.5 block";

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-6 h-6 border-2 border-signal/30 border-t-signal rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="max-w-[900px] mx-auto px-6 py-10">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <button onClick={() => router.push("/admin/projects")} className="text-ink-400 text-sm hover:text-white transition-colors">&larr; Back</button>
          <h1 className="text-h2 !text-[22px] text-white font-heading">{isEditing ? "Edit Project" : "New Project"}</h1>
        </div>
        <div className="flex items-center gap-3">
          <label className="flex items-center gap-2 text-sm text-ink-400 cursor-pointer">
            <input type="checkbox" checked={published} onChange={(e) => setPublished(e.target.checked)} className="accent-signal" />
            Published
          </label>
          <button onClick={handleSave} disabled={saving} className="px-6 py-2.5 bg-signal hover:bg-signal-hover text-white text-xs font-medium rounded-input transition-colors disabled:opacity-50">
            {saving ? "Saving..." : isEditing ? "Update" : "Create"}
          </button>
        </div>
      </div>

      {error && <div className="mb-6 p-3 bg-red-500/10 border border-red-500/30 rounded-input text-red-400 text-sm">{error}</div>}

      {/* Basic Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 p-6 bg-ink-100 border border-ink-200 rounded-card">
        <div className="md:col-span-2">
          <label className={labelClass}>Project Title</label>
          <input value={title} onChange={(e) => handleTitleChange(e.target.value)} placeholder="FreshBite Restaurant Website" className={`${inputClass} text-lg`} />
        </div>
        <div>
          <label className={labelClass}>Slug</label>
          <input value={projectSlug} onChange={(e) => setProjectSlug(e.target.value)} placeholder="freshbite" className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Category</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)} className={`${inputClass} appearance-none`}>
            {CATEGORIES.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
        <div>
          <label className={labelClass}>Timeline</label>
          <input value={timeline} onChange={(e) => setTimeline(e.target.value)} placeholder="Shipped in 14 days" className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Year</label>
          <input value={year} onChange={(e) => setYear(e.target.value)} placeholder="2026" className={inputClass} />
        </div>
        <div className="md:col-span-2">
          <label className={labelClass}>Hook (one compelling sentence)</label>
          <input value={hook} onChange={(e) => setHook(e.target.value)} placeholder="A popular restaurant had zero online presence. We changed that in 14 days." className={inputClass} />
        </div>
        <div className="md:col-span-2">
          <label className={labelClass}>Description</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Full project description..." rows={3} className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Tech Stack (comma-separated)</label>
          <input value={techStackStr} onChange={(e) => setTechStackStr(e.target.value)} placeholder="Next.js, Tailwind, PostgreSQL" className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Display Order</label>
          <input type="number" value={displayOrder} onChange={(e) => setDisplayOrder(Number(e.target.value))} className={inputClass} />
        </div>
        <div className="flex items-center gap-6">
          <label className="flex items-center gap-2 text-sm text-ink-400 cursor-pointer">
            <input type="checkbox" checked={featured} onChange={(e) => setFeatured(e.target.checked)} className="accent-signal" />
            Featured
          </label>
          <label className="flex items-center gap-2 text-sm text-ink-400 cursor-pointer">
            <input type="checkbox" checked={conceptProject} onChange={(e) => setConceptProject(e.target.checked)} className="accent-signal" />
            Concept Project
          </label>
        </div>
      </div>

      {/* Case Study */}
      <div className="mb-8 p-6 bg-ink-100 border border-ink-200 rounded-card space-y-4">
        <label className={`${labelClass} !mb-0`}>Case Study</label>
        <div>
          <label className={labelClass}>Challenge</label>
          <textarea value={challenge} onChange={(e) => setChallenge(e.target.value)} placeholder="What problem did the client have?" rows={2} className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Solution</label>
          <textarea value={solution} onChange={(e) => setSolution(e.target.value)} placeholder="What did you build?" rows={2} className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Result</label>
          <textarea value={result} onChange={(e) => setResult(e.target.value)} placeholder="What was the impact? Use numbers." rows={2} className={inputClass} />
        </div>
      </div>

      {/* Visual */}
      <div className="mb-8 p-6 bg-ink-100 border border-ink-200 rounded-card space-y-4">
        <label className={`${labelClass} !mb-0`}>Visual Settings</label>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>Card Pattern</label>
            <select value={pattern} onChange={(e) => setPattern(e.target.value)} className={`${inputClass} appearance-none`}>
              {PATTERNS.map((p) => <option key={p} value={p}>{p}</option>)}
            </select>
          </div>
          <div>
            <label className={labelClass}>Gradient Preset</label>
            <select value={gradient} onChange={(e) => setGradient(e.target.value)} className={`${inputClass} appearance-none`}>
              {GRADIENTS.map((g, i) => <option key={g} value={g}>Preset {i + 1}</option>)}
            </select>
          </div>
        </div>
        <div>
          <label className={labelClass}>Thumbnail Image (optional)</label>
          <div className="flex gap-4 items-start">
            <input value={thumbnailUrl} onChange={(e) => setThumbnailUrl(e.target.value)} placeholder="Image URL or upload" className={`${inputClass} flex-1`} />
            <MediaUploader onUpload={(url) => setThumbnailUrl(url)} label="Upload" />
          </div>
          {thumbnailUrl && <img src={thumbnailUrl} alt="" className="mt-3 max-h-40 rounded-input object-cover" />}
        </div>
      </div>
    </div>
  );
}
