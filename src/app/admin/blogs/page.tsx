"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { Blog } from "@/lib/db";

export default function AdminBlogsPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const res = await fetch("/api/blogs?all=true");
      if (res.status === 401) {
        router.push("/admin");
        return;
      }
      const data = await res.json();
      setBlogs(data.blogs || []);
    } catch {
      // will show empty
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (slug: string) => {
    if (!confirm("Delete this blog post?")) return;
    const res = await fetch(`/api/blogs/${slug}`, { method: "DELETE" });
    if (res.ok) {
      setBlogs(blogs.filter((b) => b.slug !== slug));
    }
  };

  const handleTogglePublish = async (blog: Blog) => {
    const res = await fetch(`/api/blogs/${blog.slug}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ published: !blog.published }),
    });
    if (res.ok) {
      setBlogs(blogs.map((b) =>
        b.slug === blog.slug ? { ...b, published: !b.published } : b
      ));
    }
  };

  const handleLogout = async () => {
    await fetch("/api/auth", { method: "DELETE" });
    router.push("/admin");
  };

  const handleInitDB = async () => {
    const res = await fetch("/api/init", { method: "POST" });
    const data = await res.json();
    if (data.success) {
      alert("Database initialized successfully");
      fetchBlogs();
    }
  };

  return (
    <div className="max-w-[1000px] mx-auto px-6 py-10">
      <div className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-h1 !text-[28px] text-white font-heading">Blog Posts</h1>
          <p className="text-ink-400 text-sm mt-1">{blogs.length} posts</p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={handleInitDB}
            className="px-4 py-2 text-xs text-ink-400 border border-ink-200 rounded-input hover:border-signal/40 transition-colors"
          >
            Init DB
          </button>
          <Link
            href="/admin/blogs/new"
            className="px-5 py-2.5 bg-signal hover:bg-signal-hover text-white text-xs font-medium rounded-input transition-colors"
          >
            New Post
          </Link>
          <button
            onClick={handleLogout}
            className="px-4 py-2 text-xs text-ink-400 hover:text-white transition-colors"
          >
            Logout
          </button>
        </div>
      </div>

      {loading ? (
        <div className="text-center py-20">
          <div className="w-6 h-6 border-2 border-signal/30 border-t-signal rounded-full animate-spin mx-auto" />
        </div>
      ) : blogs.length === 0 ? (
        <div className="text-center py-20 border border-ink-200 rounded-card">
          <p className="text-ink-400 mb-4">No blog posts yet.</p>
          <Link href="/admin/blogs/new" className="text-signal text-sm hover:underline">
            Create your first post
          </Link>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="flex items-center justify-between p-5 bg-ink-100 border border-ink-200 rounded-card hover:border-signal/20 transition-colors"
            >
              <div className="flex-1 min-w-0 mr-4">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-white text-sm font-medium truncate">{blog.title}</h3>
                  <span
                    className={`px-2 py-0.5 text-[9px] uppercase tracking-wider rounded-full ${
                      blog.published
                        ? "bg-signal/10 text-signal-bright border border-signal/20"
                        : "bg-ink-100 text-ink-400 border border-ink-200"
                    }`}
                  >
                    {blog.published ? "Published" : "Draft"}
                  </span>
                  {blog.featured && (
                    <span className="px-2 py-0.5 text-[9px] uppercase tracking-wider rounded-full bg-signal text-white">
                      Featured
                    </span>
                  )}
                </div>
                <p className="text-ink-400 text-xs truncate">
                  /{blog.slug} &middot; {blog.category} &middot; {blog.read_time}
                </p>
              </div>

              <div className="flex items-center gap-2 flex-shrink-0">
                <button
                  onClick={() => handleTogglePublish(blog)}
                  className="px-3 py-1.5 text-xs text-ink-400 border border-ink-200 rounded-input hover:border-signal/40 hover:text-white transition-colors"
                >
                  {blog.published ? "Unpublish" : "Publish"}
                </button>
                <Link
                  href={`/admin/blogs/${blog.slug}/edit`}
                  className="px-3 py-1.5 text-xs text-white border border-ink-200 rounded-input hover:border-signal/40 transition-colors"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(blog.slug)}
                  className="px-3 py-1.5 text-xs text-red-400 border border-ink-200 rounded-input hover:border-red-400/40 transition-colors"
                >
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
