"use client";

import type { ContentBlock } from "@/lib/db";
import { MediaUploader } from "./MediaUploader";

interface ContentBlockEditorProps {
  block: ContentBlock;
  index: number;
  total: number;
  onChange: (block: ContentBlock) => void;
  onRemove: () => void;
  onMove: (direction: "up" | "down") => void;
  onAddAfter: (type: ContentBlock["type"]) => void;
}

const inputClass =
  "w-full bg-ink border border-ink-200 rounded-input px-3 py-2 text-white text-sm placeholder:text-ink-300 focus:outline-none focus:border-signal-bright transition-colors";

export function ContentBlockEditor({
  block,
  index,
  total,
  onChange,
  onRemove,
  onMove,
  onAddAfter,
}: ContentBlockEditorProps) {
  const typeLabels: Record<ContentBlock["type"], string> = {
    paragraph: "Paragraph",
    heading: "Heading",
    image: "Image",
    video: "Video",
    quote: "Quote",
  };

  const typeColors: Record<ContentBlock["type"], string> = {
    paragraph: "text-ink-400",
    heading: "text-white",
    image: "text-signal-bright",
    video: "text-signal-bright",
    quote: "text-ink-300",
  };

  return (
    <div className="group relative p-4 bg-ink-100 border border-ink-200 rounded-card hover:border-signal/20 transition-colors">
      <div className="flex items-center justify-between mb-3">
        <span className={`text-[10px] uppercase tracking-wider font-medium ${typeColors[block.type]}`}>
          {typeLabels[block.type]}
        </span>

        <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <button onClick={() => onMove("up")} disabled={index === 0} className="p-1 text-ink-400 hover:text-white disabled:opacity-30 transition-colors" title="Move up">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" /></svg>
          </button>
          <button onClick={() => onMove("down")} disabled={index === total - 1} className="p-1 text-ink-400 hover:text-white disabled:opacity-30 transition-colors" title="Move down">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
          </button>

          <div className="relative group/add">
            <button className="p-1 text-ink-400 hover:text-signal transition-colors" title="Add block after">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
            </button>
            <div className="absolute right-0 top-full mt-1 bg-ink-100 border border-ink-200 rounded-input py-1 z-20 hidden group-hover/add:block min-w-[100px]">
              {(["paragraph", "heading", "image", "video", "quote"] as const).map((t) => (
                <button key={t} onClick={() => onAddAfter(t)} className="block w-full text-left px-3 py-1.5 text-xs text-ink-400 hover:text-white hover:bg-ink/50 capitalize transition-colors">
                  {t}
                </button>
              ))}
            </div>
          </div>

          <button onClick={onRemove} disabled={total <= 1} className="p-1 text-ink-400 hover:text-red-400 disabled:opacity-30 transition-colors" title="Remove block">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>
      </div>

      {block.type === "paragraph" && (
        <textarea value={block.text || ""} onChange={(e) => onChange({ ...block, text: e.target.value })} placeholder="Write your paragraph..." rows={3} className={inputClass} />
      )}

      {block.type === "heading" && (
        <div className="flex gap-2">
          <select value={block.level || 2} onChange={(e) => onChange({ ...block, level: Number(e.target.value) })} className={`${inputClass} w-20 appearance-none`}>
            <option value={2}>H2</option>
            <option value={3}>H3</option>
            <option value={4}>H4</option>
          </select>
          <input value={block.text || ""} onChange={(e) => onChange({ ...block, text: e.target.value })} placeholder="Heading text" className={`${inputClass} font-medium`} />
        </div>
      )}

      {block.type === "image" && (
        <div className="flex flex-col gap-2">
          <div className="flex gap-2 items-start">
            <input value={block.url || ""} onChange={(e) => onChange({ ...block, url: e.target.value })} placeholder="Image URL (or upload)" className={`${inputClass} flex-1`} />
            <MediaUploader onUpload={(url) => onChange({ ...block, url })} accept="image/*" label="Upload" />
          </div>
          <input value={block.alt || ""} onChange={(e) => onChange({ ...block, alt: e.target.value })} placeholder="Alt text (for accessibility & SEO)" className={inputClass} />
          <input value={block.caption || ""} onChange={(e) => onChange({ ...block, caption: e.target.value })} placeholder="Caption (optional)" className={inputClass} />
          {block.url && <img src={block.url} alt={block.alt || ""} className="mt-2 max-h-48 rounded-input object-cover" />}
        </div>
      )}

      {block.type === "video" && (
        <div className="flex flex-col gap-2">
          <div className="flex gap-2 items-start">
            <input value={block.url || ""} onChange={(e) => onChange({ ...block, url: e.target.value })} placeholder="Video URL (Cloudinary, YouTube, Vimeo, or upload)" className={`${inputClass} flex-1`} />
            <MediaUploader onUpload={(url) => onChange({ ...block, url })} accept="video/*" label="Upload" />
          </div>
          <input value={block.caption || ""} onChange={(e) => onChange({ ...block, caption: e.target.value })} placeholder="Caption (optional)" className={inputClass} />
          {block.url && <video src={block.url} controls className="mt-2 max-h-48 rounded-input" />}
        </div>
      )}

      {block.type === "quote" && (
        <div className="flex flex-col gap-2">
          <textarea value={block.text || ""} onChange={(e) => onChange({ ...block, text: e.target.value })} placeholder="Quote text..." rows={2} className={inputClass} />
          <input value={block.author || ""} onChange={(e) => onChange({ ...block, author: e.target.value })} placeholder="Attribution (optional)" className={inputClass} />
        </div>
      )}
    </div>
  );
}
