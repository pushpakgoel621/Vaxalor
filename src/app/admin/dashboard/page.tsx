"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AdminShell } from "@/components/admin/AdminShell";

interface DashboardStats {
  blogs: number;
  projects: number;
  submissions: number;
}

export default function AdminDashboardPage() {
  const [stats, setStats] = useState<DashboardStats>({ blogs: 0, projects: 0, submissions: 0 });
  const [recentSubmissions, setRecentSubmissions] = useState<{ name: string; email: string; source: string; created_at: string }[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    Promise.all([
      fetch("/api/blogs?all=true").then((r) => { if (r.status === 401) { router.push("/admin"); return null; } return r.json(); }),
      fetch("/api/projects?all=true").then((r) => r.json()),
      fetch("/api/submissions").then((r) => { if (r.status === 401) return null; return r.json(); }),
    ])
      .then(([blogsData, projectsData, subsData]) => {
        setStats({
          blogs: blogsData?.blogs?.length || 0,
          projects: projectsData?.projects?.length || 0,
          submissions: subsData?.submissions?.length || 0,
        });
        if (subsData?.submissions) {
          setRecentSubmissions(subsData.submissions.slice(0, 5));
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [router]);

  if (loading) {
    return (
      <AdminShell>
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="w-6 h-6 border-2 border-signal/30 border-t-signal rounded-full animate-spin" />
        </div>
      </AdminShell>
    );
  }

  return (
    <AdminShell><div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-white text-2xl font-heading font-bold">Dashboard</h1>
        <p className="text-ink-400 text-sm mt-1">Welcome back. Here&apos;s what&apos;s happening.</p>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <Link href="/admin/blogs" className="p-5 bg-[#0A0F1A] border border-ink-200/20 rounded-xl hover:border-signal/20 transition-colors group">
          <div className="flex items-center justify-between mb-3">
            <span className="text-ink-400 text-xs uppercase tracking-wider font-medium">Blog Posts</span>
            <div className="w-8 h-8 rounded-lg bg-signal/10 flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-signal-bright)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
            </div>
          </div>
          <p className="text-white text-3xl font-bold">{stats.blogs}</p>
          <p className="text-signal-bright text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity">Manage posts →</p>
        </Link>

        <Link href="/admin/projects" className="p-5 bg-[#0A0F1A] border border-ink-200/20 rounded-xl hover:border-signal/20 transition-colors group">
          <div className="flex items-center justify-between mb-3">
            <span className="text-ink-400 text-xs uppercase tracking-wider font-medium">Projects</span>
            <div className="w-8 h-8 rounded-lg bg-signal/10 flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-signal-bright)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" />
              </svg>
            </div>
          </div>
          <p className="text-white text-3xl font-bold">{stats.projects}</p>
          <p className="text-signal-bright text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity">Manage projects →</p>
        </Link>

        <Link href="/admin/submissions" className="p-5 bg-[#0A0F1A] border border-ink-200/20 rounded-xl hover:border-signal/20 transition-colors group">
          <div className="flex items-center justify-between mb-3">
            <span className="text-ink-400 text-xs uppercase tracking-wider font-medium">Submissions</span>
            <div className="w-8 h-8 rounded-lg bg-green-500/10 flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(74, 222, 128)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
          </div>
          <p className="text-white text-3xl font-bold">{stats.submissions}</p>
          <p className="text-green-400 text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity">View leads →</p>
        </Link>
      </div>

      {/* Quick actions */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
        <Link href="/admin/blogs/new" className="p-4 bg-signal/5 border border-signal/10 rounded-xl text-center hover:bg-signal/10 transition-colors">
          <span className="text-signal-bright text-2xl">+</span>
          <p className="text-white text-xs font-medium mt-1">New Blog Post</p>
        </Link>
        <Link href="/admin/projects/new" className="p-4 bg-signal/5 border border-signal/10 rounded-xl text-center hover:bg-signal/10 transition-colors">
          <span className="text-signal-bright text-2xl">+</span>
          <p className="text-white text-xs font-medium mt-1">New Project</p>
        </Link>
        <Link href="/admin/ticker" className="p-4 bg-ink-100/50 border border-ink-200/20 rounded-xl text-center hover:border-signal/20 transition-colors">
          <span className="text-ink-400 text-2xl">⏱</span>
          <p className="text-ink-300 text-xs font-medium mt-1">Update Ticker</p>
        </Link>
        <Link href="/" target="_blank" className="p-4 bg-ink-100/50 border border-ink-200/20 rounded-xl text-center hover:border-signal/20 transition-colors">
          <span className="text-ink-400 text-2xl">↗</span>
          <p className="text-ink-300 text-xs font-medium mt-1">View Site</p>
        </Link>
      </div>

      {/* Recent submissions */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-white text-lg font-heading font-semibold">Recent Leads</h2>
          <Link href="/admin/submissions" className="text-signal-bright text-xs hover:underline">View all →</Link>
        </div>
        {recentSubmissions.length === 0 ? (
          <div className="p-8 bg-[#0A0F1A] border border-ink-200/20 rounded-xl text-center">
            <p className="text-ink-400 text-sm">No submissions yet.</p>
          </div>
        ) : (
          <div className="space-y-2">
            {recentSubmissions.map((sub, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-[#0A0F1A] border border-ink-200/20 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-signal/10 flex items-center justify-center text-signal text-[11px] font-bold">
                    {sub.name.split(" ").map((n: string) => n[0]).join("").slice(0, 2)}
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">{sub.name}</p>
                    <p className="text-ink-400 text-xs">{sub.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`px-2 py-0.5 text-[9px] uppercase tracking-wider rounded-full ${
                    sub.source === "contact" ? "bg-signal/10 text-signal-bright"
                    : sub.source === "popup" ? "bg-purple-500/10 text-purple-400"
                    : "bg-green-500/10 text-green-400"
                  }`}>
                    {sub.source}
                  </span>
                  <span className="text-ink-500 text-[11px]">
                    {new Date(sub.created_at).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div></AdminShell>
  );
}
