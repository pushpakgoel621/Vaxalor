"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import type { ContentBlock, Blog } from "@/lib/db";
import { MediaUploader } from "./MediaUploader";
import { ContentBlockEditor } from "./ContentBlockEditor";

interface BlogEditorProps {
  slug?: string;
}

export function BlogEditor({ slug }: BlogEditorProps) {
  const router = useRouter();
  const isEditing = Boolean(slug);

  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(isEditing);
  const [error, setError] = useState("");

  const [title, setTitle] = useState("");
  const [blogSlug, setBlogSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [category, setCategory] = useState("General");
  const [readTime, setReadTime] = useState("5 min");
  const [author, setAuthor] = useState("Vaxalor Team");
  const [featured, setFeatured] = useState(false);
  const [published, setPublished] = useState(false);
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const [thumbnailAlt, setThumbnailAlt] = useState("");
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [content, setContent] = useState<ContentBlock[]>([
    { type: "paragraph", text: "" },
  ]);

  useEffect(() => {
    if (!slug) return;
    fetch(`/api/blogs/${slug}`)
      .then((res) => {
        if (res.status === 401) { router.push("/admin"); return null; }
        return res.json();
      })
      .then((data) => {
        if (!data?.blog) return;
        const blog: Blog = data.blog;
        setTitle(blog.title);
        setBlogSlug(blog.slug);
        setExcerpt(blog.excerpt || "");
        setCategory(blog.category);
        setReadTime(blog.read_time);
        setAuthor(blog.author);
        setFeatured(blog.featured);
        setPublished(blog.published);
        setThumbnailUrl(blog.thumbnail_url || "");
        setThumbnailAlt(blog.thumbnail_alt || "");
        setMetaTitle(blog.meta_title || "");
        setMetaDescription(blog.meta_description || "");
        setContent(blog.content.length > 0 ? blog.content : [{ type: "paragraph", text: "" }]);
      })
      .finally(() => setLoading(false));
  }, [slug, router]);

  const handleTitleChange = (val: string) => {
    setTitle(val);
    if (!isEditing) {
      setBlogSlug(val.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""));
    }
  };

  const addBlock = (type: ContentBlock["type"], insertAfterIndex?: number) => {
    const newBlock: ContentBlock = { type };
    if (type === "paragraph") newBlock.text = "";
    if (type === "heading") { newBlock.text = ""; newBlock.level = 2; }
    if (type === "quote") { newBlock.text = ""; newBlock.author = ""; }
    if (type === "image") { newBlock.url = ""; newBlock.alt = ""; newBlock.caption = ""; }
    if (type === "video") { newBlock.url = ""; newBlock.caption = ""; }

    const idx = insertAfterIndex !== undefined ? insertAfterIndex + 1 : content.length;
    const updated = [...content];
    updated.splice(idx, 0, newBlock);
    setContent(updated);
  };

  const updateBlock = useCallback((index: number, updated: ContentBlock) => {
    setContent((prev) => prev.map((b, i) => (i === index ? updated : b)));
  }, []);

  const removeBlock = (index: number) => {
    if (content.length <= 1) return;
    setContent(content.filter((_, i) => i !== index));
  };

  const moveBlock = (index: number, direction: "up" | "down") => {
    const newIndex = direction === "up" ? index - 1 : index + 1;
    if (newIndex < 0 || newIndex >= content.length) return;
    const updated = [...content];
    [updated[index], updated[newIndex]] = [updated[newIndex], updated[index]];
    setContent(updated);
  };

  const handleSave = async () => {
    if (!title.trim() || !blogSlug.trim()) {
      setError("Title and slug are required");
      return;
    }
    setSaving(true);
    setError("");

    const body = {
      title, slug: blogSlug, excerpt, category, read_time: readTime, author,
      featured, published, thumbnail_url: thumbnailUrl || null,
      thumbnail_alt: thumbnailAlt || null, meta_title: metaTitle || null,
      meta_description: metaDescription || null, content,
    };

    try {
      const url = isEditing ? `/api/blogs/${slug}` : "/api/blogs";
      const method = isEditing ? "PUT" : "POST";
      const res = await fetch(url, { method, headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
      const data = await res.json();
      if (!res.ok) { setError(data.error || "Save failed"); return; }
      router.push("/admin/blogs");
    } catch {
      setError("Save failed. Please try again.");
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
          <button onClick={() => router.push("/admin/blogs")} className="text-ink-400 text-sm hover:text-white transition-colors">&larr; Back</button>
          <h1 className="text-h2 !text-[22px] text-white font-heading">{isEditing ? "Edit Post" : "New Post"}</h1>
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

      {error && (
        <div className="mb-6 p-3 bg-red-500/10 border border-red-500/30 rounded-input text-red-400 text-sm">{error}</div>
      )}

      {/* Meta fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 p-6 bg-ink-100 border border-ink-200 rounded-card">
        <div className="md:col-span-2">
          <label className={labelClass}>Title</label>
          <input value={title} onChange={(e) => handleTitleChange(e.target.value)} placeholder="Blog post title" className={`${inputClass} text-lg`} />
        </div>
        <div>
          <label className={labelClass}>Slug</label>
          <input value={blogSlug} onChange={(e) => setBlogSlug(e.target.value)} placeholder="url-friendly-slug" className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Category</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)} className={`${inputClass} appearance-none`}>
            <option value="General">General</option>
            <option value="Strategy">Strategy</option>
            <option value="Business">Business</option>
            <option value="Tips">Tips</option>
            <option value="Engineering">Engineering</option>
          </select>
        </div>
        <div>
          <label className={labelClass}>Read Time</label>
          <input value={readTime} onChange={(e) => setReadTime(e.target.value)} placeholder="5 min" className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Author</label>
          <input value={author} onChange={(e) => setAuthor(e.target.value)} className={inputClass} />
        </div>
        <div className="md:col-span-2">
          <label className={labelClass}>Excerpt</label>
          <textarea value={excerpt} onChange={(e) => setExcerpt(e.target.value)} placeholder="Short summary of the post" rows={2} className={inputClass} />
        </div>
        <div className="flex items-center gap-4">
          <label className="flex items-center gap-2 text-sm text-ink-400 cursor-pointer">
            <input type="checkbox" checked={featured} onChange={(e) => setFeatured(e.target.checked)} className="accent-signal" />
            Featured post
          </label>
        </div>
      </div>

      {/* Thumbnail */}
      <div className="mb-8 p-6 bg-ink-100 border border-ink-200 rounded-card">
        <label className={labelClass}>Thumbnail Image</label>
        <div className="flex gap-4 items-start">
          <div className="flex-1">
            <input value={thumbnailUrl} onChange={(e) => setThumbnailUrl(e.target.value)} placeholder="Image URL (or upload below)" className={inputClass} />
            <input value={thumbnailAlt} onChange={(e) => setThumbnailAlt(e.target.value)} placeholder="Alt text" className={`${inputClass} mt-2`} />
          </div>
          <MediaUploader onUpload={(url) => setThumbnailUrl(url)} label="Upload" />
        </div>
        {thumbnailUrl && <img src={thumbnailUrl} alt={thumbnailAlt} className="mt-4 max-h-40 rounded-input object-cover" />}
      </div>

      {/* Content blocks */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <label className={labelClass}>Content</label>
        </div>
        <div className="flex flex-col gap-3">
          {content.map((block, index) => (
            <ContentBlockEditor
              key={index}
              block={block}
              index={index}
              total={content.length}
              onChange={(updated) => updateBlock(index, updated)}
              onRemove={() => removeBlock(index)}
              onMove={(dir) => moveBlock(index, dir)}
              onAddAfter={(type) => addBlock(type, index)}
            />
          ))}
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          {(["paragraph", "heading", "image", "video", "quote"] as const).map((type) => (
            <button key={type} onClick={() => addBlock(type)} className="px-3 py-1.5 text-xs text-ink-400 border border-ink-200 rounded-input hover:border-signal/40 hover:text-white transition-colors capitalize">
              + {type}
            </button>
          ))}
        </div>
      </div>

      {/* SEO fields */}
      <div className="mb-8 p-6 bg-ink-100 border border-ink-200 rounded-card">
        <label className={`${labelClass} mb-4`}>SEO (Optional)</label>
        <div className="flex flex-col gap-3">
          <input value={metaTitle} onChange={(e) => setMetaTitle(e.target.value)} placeholder="Meta title (defaults to post title)" className={inputClass} />
          <textarea value={metaDescription} onChange={(e) => setMetaDescription(e.target.value)} placeholder="Meta description (defaults to excerpt)" rows={2} className={inputClass} />
        </div>
      </div>
    </div>
  );
}
