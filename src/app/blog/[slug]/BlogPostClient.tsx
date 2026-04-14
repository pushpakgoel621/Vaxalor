"use client";

import Link from "next/link";
import { PageTransition } from "@/components/layout/PageTransition";
import { ContentRenderer } from "@/components/sections/blog/ContentRenderer";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { Button } from "@/components/ui/Button";
import type { Blog } from "@/lib/db";

interface BlogPostClientProps {
  post: Partial<Blog>;
}

export function BlogPostClient({ post }: BlogPostClientProps) {
  const formattedDate = post.created_at
    ? new Date(post.created_at).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    : "";

  return (
    <PageTransition>
      <article className="bg-canvas pt-[140px] pb-section">
        <div className="max-w-3xl mx-auto px-6 sm:px-8">
          {/* Back link */}
          <ScrollReveal>
            <Link
              href="/blog"
              className="text-ink-300 text-sm hover:text-signal transition-colors inline-flex items-center gap-1 mb-8"
              data-cursor="hover"
            >
              ← Back to blog
            </Link>
          </ScrollReveal>

          {/* Meta */}
          <ScrollReveal delay={0.1}>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-signal-tint text-signal">
                {post.category}
              </span>
              <span className="text-ink-300 text-sm">{formattedDate}</span>
              <span className="text-ink-400 text-sm">&middot; {post.read_time} read</span>
            </div>
          </ScrollReveal>

          {/* Title */}
          <ScrollReveal delay={0.15}>
            <h1 className="text-display !text-[32px] md:!text-[40px] mb-4">
              {post.title}
            </h1>
          </ScrollReveal>

          {/* Author */}
          <ScrollReveal delay={0.2}>
            <p className="text-ink-300 text-sm mb-8">
              By <span className="text-ink-200 font-medium">{post.author}</span>
            </p>
          </ScrollReveal>

          {/* Thumbnail */}
          {post.thumbnail_url && (
            <ScrollReveal delay={0.25}>
              <div className="rounded-card overflow-hidden border border-canvas-border mb-10">
                <img
                  src={post.thumbnail_url}
                  alt={post.thumbnail_alt || post.title || ""}
                  className="w-full h-auto object-cover"
                />
              </div>
            </ScrollReveal>
          )}

          {/* Content */}
          <div className="mt-8">
            <ContentRenderer content={(post.content || []) as Blog["content"]} />
          </div>

          {/* CTA */}
          <div className="mt-16 pt-10 border-t border-canvas-border text-center">
            <h3 className="text-ink text-[22px] font-semibold font-heading mb-3">
              Want to build something?
            </h3>
            <p className="text-ink-300 text-base mb-6">
              We ship digital products in 20 days. Let&apos;s talk about yours.
            </p>
            <Button href="/contact" arrow>
              Start a conversation
            </Button>
          </div>
        </div>
      </article>
    </PageTransition>
  );
}
