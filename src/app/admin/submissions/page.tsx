"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { AdminShell } from "@/components/admin/AdminShell";
import type { Submission } from "@/lib/db";

export default function AdminSubmissionsPage() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetch("/api/submissions")
      .then((res) => { if (res.status === 401) { router.push("/admin"); return null; } return res.json(); })
      .then((data) => { if (data?.submissions) setSubmissions(data.submissions); })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [router]);

  return (
    <AdminShell>
      <div className="mb-8">
        <h1 className="text-white text-2xl font-heading font-bold">Submissions</h1>
        <p className="text-ink-400 text-sm mt-1">{submissions.length} leads captured</p>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-20">
          <div className="w-6 h-6 border-2 border-signal/30 border-t-signal rounded-full animate-spin" />
        </div>
      ) : submissions.length === 0 ? (
        <div className="text-center py-20 bg-[#0A0F1A] border border-ink-200/20 rounded-xl">
          <p className="text-ink-400">No submissions yet. Leads from forms and chatbot will appear here.</p>
        </div>
      ) : (
        <div className="space-y-2">
          {submissions.map((sub) => (
            <div key={sub.id} className="p-4 bg-[#0A0F1A] border border-ink-200/20 rounded-xl hover:border-signal/15 transition-colors">
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-signal/10 flex items-center justify-center text-signal text-[11px] font-bold shrink-0">
                    {sub.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                  </div>
                  <div>
                    <h3 className="text-white text-sm font-medium">{sub.name}</h3>
                    <p className="text-signal-bright text-xs">{sub.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`px-2 py-0.5 text-[9px] uppercase tracking-wider rounded-full ${
                    sub.source === "contact" ? "bg-signal/10 text-signal-bright border border-signal/20"
                    : sub.source === "newsletter" ? "bg-green-500/10 text-green-400 border border-green-500/20"
                    : sub.source === "popup" ? "bg-purple-500/10 text-purple-400 border border-purple-500/20"
                    : "bg-ink-200/30 text-ink-400 border border-ink-200/30"
                  }`}>
                    {sub.source}
                  </span>
                  <span className="text-ink-500 text-[11px]">
                    {new Date(sub.created_at).toLocaleDateString("en-US", { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" })}
                  </span>
                </div>
              </div>
              <div className="ml-12 space-y-1">
                {sub.phone && <p className="text-ink-400 text-xs">📞 {sub.phone}</p>}
                {sub.service && sub.service !== "Newsletter" && sub.service !== "General" && <p className="text-ink-400 text-xs">🔧 {sub.service}</p>}
                {sub.budget && <p className="text-ink-400 text-xs">💰 {sub.budget}</p>}
                {sub.message && !sub.message.includes("signup from") && !sub.message.includes("entry popup") && (
                  <p className="text-ink-300 text-sm mt-1 leading-relaxed">{sub.message}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </AdminShell>
  );
}
