"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { Submission } from "@/lib/db";

export default function AdminSubmissionsPage() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetch("/api/submissions")
      .then((res) => {
        if (res.status === 401) { router.push("/admin"); return null; }
        return res.json();
      })
      .then((data) => {
        if (data?.submissions) setSubmissions(data.submissions);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [router]);

  return (
    <div className="max-w-[1000px] mx-auto px-6 py-10">
      <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-h1 !text-[28px] text-white font-heading">Submissions</h1>
          <p className="text-ink-400 text-sm mt-1">{submissions.length} leads</p>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/admin/blogs" className="px-4 py-2 text-xs text-ink-400 border border-ink-200 rounded-input hover:border-signal/40 transition-colors">
            Blog Posts
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
      ) : submissions.length === 0 ? (
        <div className="text-center py-20 border border-ink-200 rounded-card">
          <p className="text-ink-400">No submissions yet.</p>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {submissions.map((sub) => (
            <div key={sub.id} className="p-5 bg-ink-100 border border-ink-200 rounded-card">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="text-white text-sm font-medium">{sub.name}</h3>
                  <p className="text-signal-bright text-xs">{sub.email}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`px-2 py-0.5 text-[9px] uppercase tracking-wider rounded-full ${
                    sub.source === "contact" ? "bg-signal/10 text-signal-bright border border-signal/20"
                    : sub.source === "newsletter" ? "bg-green-500/10 text-green-400 border border-green-500/20"
                    : "bg-ink-200/50 text-ink-400 border border-ink-200"
                  }`}>
                    {sub.source}
                  </span>
                  <span className="text-ink-400 text-xs">
                    {new Date(sub.created_at).toLocaleDateString("en-US", { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" })}
                  </span>
                </div>
              </div>
              {sub.phone && <p className="text-ink-400 text-xs mb-1">Phone: {sub.phone}</p>}
              {sub.service && sub.service !== "Newsletter" && sub.service !== "General" && (
                <p className="text-ink-400 text-xs mb-1">Service: {sub.service}</p>
              )}
              {sub.budget && <p className="text-ink-400 text-xs mb-1">Budget: {sub.budget}</p>}
              {sub.message && !sub.message.includes("signup from") && (
                <p className="text-ink-300 text-sm mt-2 leading-relaxed">{sub.message}</p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
