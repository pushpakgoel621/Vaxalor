"use client";

import { useState, useEffect, useMemo } from "react";
import { PageTransition } from "@/components/layout/PageTransition";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BlogCard } from "@/components/ui/BlogCard";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { StaggerChildren, StaggerItem } from "@/components/animation/StaggerChildren";
import { CTASection } from "@/components/sections/home/CTASection";
import type { Blog } from "@/lib/db";

const CATEGORIES = ["All", "General", "Strategy", "Business", "Tips", "Engineering"];

const FALLBACK_POSTS: Blog[] = [
  {
    id: 1,
    title: "How Much Does a Website Cost in 2026?",
    slug: "how-much-does-a-website-cost-2026",
    excerpt: "A brutally honest breakdown of website costs — from template sites to custom builds. What you're really paying for, and how to avoid overpaying.",
    category: "Business",
    read_time: "6 min",
    featured: true,
    published: true,
    thumbnail_url: null,
    thumbnail_alt: null,
    author: "Vaxalor Team",
    content: [],
    meta_title: null,
    meta_description: null,
    created_at: "2026-04-10",
    updated_at: "2026-04-10",
  },
  {
    id: 2,
    title: "Why We Ship in 20 Days (And How)",
    slug: "why-we-ship-in-20-days",
    excerpt: "Most agencies take months. We take 20 days. Here's the process, the trade-offs, and why speed doesn't mean cutting corners.",
    category: "Strategy",
    read_time: "5 min",
    featured: false,
    published: true,
    thumbnail_url: null,
    thumbnail_alt: null,
    author: "Vaxalor Team",
    content: [],
    meta_title: null,
    meta_description: null,
    created_at: "2026-04-05",
    updated_at: "2026-04-05",
  },
  {
    id: 3,
    title: "AI Chatbots: Hype vs. Reality for Small Businesses",
    slug: "ai-chatbots-hype-vs-reality",
    excerpt: "Everyone's talking about AI chatbots. But do they actually work for small businesses? We tested it. Here's what we found.",
    category: "Tips",
    read_time: "4 min",
    featured: false,
    published: true,
    thumbnail_url: null,
    thumbnail_alt: null,
    author: "Vaxalor Team",
    content: [],
    meta_title: null,
    meta_description: null,
    created_at: "2026-03-28",
    updated_at: "2026-03-28",
  },
];

export function BlogPageClient() {
  const [blogs, setBlogs] = useState<Blog[]>(FALLBACK_POSTS);
  const [activeCategory, setActiveCategory] = useState("All");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetch("/api/blogs")
      .then((res) => res.json())
      .then((data) => {
        if (data.blogs && data.blogs.length > 0) {
          setBlogs(data.blogs);
        }
      })
      .catch(() => {})
      .finally(() => setLoaded(true));
  }, []);

  const featured = useMemo(() => blogs.find((b) => b.featured), [blogs]);
  const filtered = useMemo(() => {
    const list = blogs.filter((b) => !b.featured);
    if (activeCategory === "All") return list;
    return list.filter((b) => b.category === activeCategory);
  }, [blogs, activeCategory]);

  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative bg-canvas pt-[140px] pb-12">
        <div className="dot-grid" />
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 sm:px-8">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Blog"
              heading="Insights, ideas, and honest takes."
              subheading="On building digital products, shipping fast, and growing businesses."
              headingAs="h1"
            />
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="flex flex-wrap items-center justify-center gap-2 mt-10">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-150 ${
                    activeCategory === cat
                      ? "bg-signal-wash text-signal"
                      : "text-ink-300 hover:bg-canvas-alt"
                  }`}
                  data-cursor="hover"
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Post */}
      {featured && activeCategory === "All" && (
        <section className="bg-canvas pb-8">
          <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
            <ScrollReveal>
              <BlogCard
                title={featured.title}
                slug={featured.slug}
                excerpt={featured.excerpt}
                category={featured.category}
                readTime={featured.read_time}
                date={featured.created_at}
                thumbnailUrl={featured.thumbnail_url}
                featured
              />
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="bg-canvas pb-section">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
          {filtered.length > 0 ? (
            <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {filtered.map((blog) => (
                <StaggerItem key={blog.slug}>
                  <BlogCard
                    title={blog.title}
                    slug={blog.slug}
                    excerpt={blog.excerpt}
                    category={blog.category}
                    readTime={blog.read_time}
                    date={blog.created_at}
                    thumbnailUrl={blog.thumbnail_url}
                  />
                </StaggerItem>
              ))}
            </StaggerChildren>
          ) : (
            <div className="text-center py-20">
              <p className="text-ink-300 text-lg">
                {loaded ? "No posts in this category yet." : "Loading..."}
              </p>
            </div>
          )}
        </div>
      </section>

      <CTASection />
    </PageTransition>
  );
}
