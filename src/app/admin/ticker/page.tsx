"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface TickerItem {
  id: string;
  project: string;
  day: number;
  total: number;
  active: boolean;
}

function generateId() {
  return `t_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`;
}

export default function AdminTickerPage() {
  const [tickers, setTickers] = useState<TickerItem[]>([]);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetch("/api/ticker?all=true")
      .then((r) => {
        if (r.status === 401) { router.push("/admin"); return null; }
        return r.json();
      })
      .then((data) => {
        if (data?.tickers?.length) setTickers(data.tickers);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [router]);

  function addTicker() {
    setTickers([...tickers, { id: generateId(), project: "", day: 1, total: 20, active: true }]);
  }

  function updateTicker(id: string, field: string, value: string | number | boolean) {
    setTickers(tickers.map((t) => t.id === id ? { ...t, [field]: value } : t));
  }

  function removeTicker(id: string) {
    setTickers(tickers.filter((t) => t.id !== id));
  }

  async function handleSave() {
    setSaving(true);
    setSaved(false);
    try {
      const res = await fetch("/api/ticker", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tickers }),
      });
      if (res.status === 401) { router.push("/admin"); return; }
      if (res.ok) setSaved(true);
    } catch {}
    setSaving(false);
  }

  const inputClass = "w-full bg-ink-100 border border-ink-200 rounded-input px-3 py-2 text-white text-sm placeholder:text-ink-300 focus:outline-none focus:border-signal-bright transition-colors";

  return (
    <div className="max-w-[700px] mx-auto px-6 py-10">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <Link href="/admin/blogs" className="text-ink-400 text-sm hover:text-white transition-colors">← Back</Link>
          <h1 className="text-h2 !text-[22px] text-white font-heading">Currently Building</h1>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={addTicker}
            className="px-4 py-2 text-xs text-white bg-signal hover:bg-signal-hover rounded-input transition-colors"
          >
            + Add Project
          </button>
          <button
            onClick={handleSave}
            disabled={saving}
            className="px-5 py-2 text-xs text-white bg-signal hover:bg-signal-hover rounded-input transition-colors disabled:opacity-50"
          >
            {saving ? "Saving..." : saved ? "Saved!" : "Save All"}
          </button>
        </div>
      </div>

      {loading ? (
        <div className="text-center py-20">
          <div className="w-6 h-6 border-2 border-signal/30 border-t-signal rounded-full animate-spin mx-auto" />
        </div>
      ) : tickers.length === 0 ? (
        <div className="text-center py-16 border border-ink-200 rounded-card">
          <p className="text-ink-400 mb-4">No active projects. Add one to show the ticker.</p>
          <button onClick={addTicker} className="text-signal text-sm hover:underline">
            Add your first project
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {tickers.map((ticker) => (
            <div
              key={ticker.id}
              className={`p-5 rounded-card border transition-colors ${
                ticker.active ? "bg-ink-100 border-signal/20" : "bg-ink-100/50 border-ink-200 opacity-60"
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={ticker.active}
                    onChange={(e) => updateTicker(ticker.id, "active", e.target.checked)}
                    className="accent-signal"
                  />
                  <span className={`text-xs uppercase tracking-wider font-medium ${ticker.active ? "text-signal-bright" : "text-ink-400"}`}>
                    {ticker.active ? "Active" : "Hidden"}
                  </span>
                </label>
                <button
                  onClick={() => removeTicker(ticker.id)}
                  className="text-ink-400 hover:text-red-400 text-xs transition-colors"
                >
                  Remove
                </button>
              </div>

              <div className="space-y-3">
                <input
                  value={ticker.project}
                  onChange={(e) => updateTicker(ticker.id, "project", e.target.value)}
                  placeholder="e.g. AI chatbot for a logistics startup"
                  className={inputClass}
                />
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-ink-400 text-[10px] uppercase tracking-wider mb-1 block">Current Day</label>
                    <input
                      type="number"
                      value={ticker.day}
                      onChange={(e) => updateTicker(ticker.id, "day", Number(e.target.value))}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="text-ink-400 text-[10px] uppercase tracking-wider mb-1 block">Total Days</label>
                    <input
                      type="number"
                      value={ticker.total}
                      onChange={(e) => updateTicker(ticker.id, "total", Number(e.target.value))}
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Preview */}
                {ticker.project && (
                  <div className="p-2.5 bg-ink rounded-input flex items-center gap-2 text-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 shrink-0" />
                    <span className="text-ink-400">Building:</span>
                    <span className="text-white font-medium">{ticker.project}</span>
                    <span className="text-signal-bright font-mono">Day {ticker.day}/{ticker.total}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
