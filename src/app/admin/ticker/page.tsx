"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AdminTickerPage() {
  const [project, setProject] = useState("");
  const [day, setDay] = useState("");
  const [total, setTotal] = useState("20");
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetch("/api/ticker")
      .then((r) => r.json())
      .then((data) => {
        if (data.ticker) {
          setProject(data.ticker.project || "");
          setDay(String(data.ticker.day || ""));
          setTotal(String(data.ticker.total || "20"));
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const handleSave = async () => {
    setSaving(true);
    setSaved(false);
    try {
      const res = await fetch("/api/ticker", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ project, day: Number(day), total: Number(total) }),
      });
      if (res.status === 401) {
        router.push("/admin");
        return;
      }
      if (res.ok) setSaved(true);
    } catch {}
    setSaving(false);
  };

  const inputClass = "w-full bg-ink-100 border border-ink-200 rounded-input px-4 py-2.5 text-white text-sm placeholder:text-ink-300 focus:outline-none focus:border-signal-bright transition-colors";
  const labelClass = "text-ink-400 text-xs font-medium uppercase tracking-wider mb-1.5 block";

  return (
    <div className="max-w-[600px] mx-auto px-6 py-10">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <Link href="/admin/blogs" className="text-ink-400 text-sm hover:text-white transition-colors">← Back</Link>
          <h1 className="text-h2 !text-[22px] text-white font-heading">Currently Building Ticker</h1>
        </div>
      </div>

      {loading ? (
        <div className="text-center py-20">
          <div className="w-6 h-6 border-2 border-signal/30 border-t-signal rounded-full animate-spin mx-auto" />
        </div>
      ) : (
        <div className="p-6 bg-ink-100 border border-ink-200 rounded-card space-y-4">
          <div>
            <label className={labelClass}>Project Description</label>
            <input
              value={project}
              onChange={(e) => setProject(e.target.value)}
              placeholder="AI chatbot for a logistics startup"
              className={inputClass}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Current Day</label>
              <input
                type="number"
                value={day}
                onChange={(e) => setDay(e.target.value)}
                placeholder="12"
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass}>Total Days</label>
              <input
                type="number"
                value={total}
                onChange={(e) => setTotal(e.target.value)}
                placeholder="20"
                className={inputClass}
              />
            </div>
          </div>

          {/* Preview */}
          <div className="p-3 bg-ink rounded-input">
            <p className="text-ink-400 text-[10px] uppercase tracking-wider mb-2">Preview</p>
            <div className="flex items-center gap-2 text-sm">
              <span className="w-2 h-2 rounded-full bg-green-400" />
              <span className="text-ink-400">Currently building:</span>
              <span className="text-white font-medium">{project || "..."}</span>
              <span className="text-ink-400">—</span>
              <span className="text-signal-bright font-mono text-xs">Day {day || "?"}/{total}</span>
            </div>
          </div>

          <button
            onClick={handleSave}
            disabled={saving || !project || !day}
            className="w-full py-2.5 bg-signal hover:bg-signal-hover text-white text-sm font-medium rounded-input transition-colors disabled:opacity-50"
          >
            {saving ? "Saving..." : saved ? "Saved!" : "Update Ticker"}
          </button>
        </div>
      )}
    </div>
  );
}
