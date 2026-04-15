"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AdminShell } from "@/components/admin/AdminShell";
import type { Blog } from "@/lib/db";

export default function AdminBlogsPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetch("/api/blogs?all=true")
      .then((res) => { if (res.status === 401) { router.push("/admin"); return null; } return res.json(); })
      .then((data) => { if (data?.blogs) setBlogs(data.blogs); })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [router]);

  const handleDelete = async (slug: string) => {
    if (!confirm("Delete this blog post?")) return;
    const res = await fetch(`/api/blogs/${slug}`, { method: "DELETE" });
    if (res.ok) setBlogs(blogs.filter((b) => b.slug !== slug));
  };

  const handleTogglePublish = async (blog: Blog) => {
    const res = await fetch(`/api/blogs/${blog.slug}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ published: !blog.published }),
    });
    if (res.ok) setBlogs(blogs.map((b) => b.slug === blog.slug ? { ...b, published: !b.published } : b));
  };

  return (
    <AdminShell>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-white text-2xl font-heading font-bold">Blog Posts</h1>
          <p className="text-ink-400 text-sm mt-1">{blogs.length} posts total</p>
        </div>
        <Link href="/admin/blogs/new" className="px-5 py-2.5 bg-signal hover:bg-signal-hover text-white text-xs font-medium rounded-lg transition-colors">
          + New Post
        </Link>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-20">
          <div className="w-6 h-6 border-2 border-signal/30 border-t-signal rounded-full animate-spin" />
        </div>
      ) : blogs.length === 0 ? (
        <div className="text-center py-20 bg-[#0A0F1A] border border-ink-200/20 rounded-xl">
          <p className="text-ink-400 mb-4">No blog posts yet.</p>
          <Link href="/admin/blogs/new" className="text-signal text-sm hover:underline">Create your first post</Link>
        </div>
      ) : (
        <div className="space-y-2">
          {blogs.map((blog) => (
            <div key={blog.id} className="flex items-center justify-between p-4 bg-[#0A0F1A] border border-ink-200/20 rounded-xl hover:border-signal/15 transition-colors">
              <div className="flex-1 min-w-0 mr-4">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-white text-sm font-medium truncate">{blog.title}</h3>
                  <span className={`px-2 py-0.5 text-[9px] uppercase tracking-wider rounded-full ${
                    blog.published ? "bg-green-500/10 text-green-400 border border-green-500/20" : "bg-ink-200/30 text-ink-400 border border-ink-200/30"
                  }`}>
                    {blog.published ? "Live" : "Draft"}
                  </span>
                  {blog.featured && <span className="px-2 py-0.5 text-[9px] uppercase tracking-wider rounded-full bg-signal/10 text-signal-bright border border-signal/20">Featured</span>}
                </div>
                <p className="text-ink-400 text-xs truncate">/{blog.slug} · {blog.category} · {blog.read_time}</p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <button onClick={() => handleTogglePublish(blog)} className="px-3 py-1.5 text-xs text-ink-400 border border-ink-200/30 rounded-lg hover:border-signal/30 hover:text-white transition-colors">
                  {blog.published ? "Unpublish" : "Publish"}
                </button>
                <Link href={`/admin/blogs/${blog.slug}/edit`} className="px-3 py-1.5 text-xs text-white border border-ink-200/30 rounded-lg hover:border-signal/30 transition-colors">
                  Edit
                </Link>
                <button onClick={() => handleDelete(blog.slug)} className="px-3 py-1.5 text-xs text-red-400/60 border border-ink-200/30 rounded-lg hover:border-red-400/30 hover:text-red-400 transition-colors">
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
