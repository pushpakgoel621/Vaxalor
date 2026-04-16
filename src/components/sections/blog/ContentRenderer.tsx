"use client";

import { ScrollReveal } from "@/components/animation/ScrollReveal";
import type { ContentBlock } from "@/lib/db";

interface ContentRendererProps {
  content: ContentBlock[];
}

function optimizeCloudinaryUrl(url: string | undefined, width = 1200): string {
  if (!url || !url.includes("res.cloudinary.com")) return url || "";
  return url.replace("/upload/", `/upload/f_auto,q_auto,w_${width}/`);
}

function ParagraphBlock({ block, index }: { block: ContentBlock; index: number }) {
  return (
    <ScrollReveal delay={0.05 * index}>
      <p className="text-[16px] text-ink-200 leading-[1.8]">
        {block.text}
      </p>
    </ScrollReveal>
  );
}

function HeadingBlock({ block, index }: { block: ContentBlock; index: number }) {
  const Tag = `h${block.level || 2}` as "h2" | "h3" | "h4";
  const sizeClass = {
    2: "text-h1",
    3: "text-h2",
    4: "text-[18px] font-medium",
  }[block.level || 2];

  return (
    <ScrollReveal delay={0.05 * index}>
      <Tag className={`${sizeClass} !text-ink font-heading mt-4 mb-2`}>
        {block.text}
      </Tag>
    </ScrollReveal>
  );
}

function ImageBlock({ block, index }: { block: ContentBlock; index: number }) {
  return (
    <ScrollReveal delay={0.05 * index}>
      <figure className="my-4">
        <div className="relative rounded-card overflow-hidden bg-canvas-alt border border-canvas-border">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={optimizeCloudinaryUrl(block.url, 1200)}
            alt={block.alt || ""}
            className="w-full h-auto object-cover"
            loading="lazy"
          />
        </div>
        {block.caption && (
          <figcaption className="text-ink-300 text-xs mt-3 text-center">
            {block.caption}
          </figcaption>
        )}
      </figure>
    </ScrollReveal>
  );
}

function VideoBlock({ block, index }: { block: ContentBlock; index: number }) {
  const isYouTube = block.url?.includes("youtube.com") || block.url?.includes("youtu.be");
  const isVimeo = block.url?.includes("vimeo.com");

  let embedUrl = block.url;
  if (isYouTube) {
    const videoId = block.url?.match(/(?:youtu\.be\/|v=)([^&]+)/)?.[1];
    embedUrl = `https://www.youtube.com/embed/${videoId}`;
  }
  if (isVimeo) {
    const videoId = block.url?.match(/vimeo\.com\/(\d+)/)?.[1];
    embedUrl = `https://player.vimeo.com/video/${videoId}`;
  }

  return (
    <ScrollReveal delay={0.05 * index}>
      <figure className="my-4">
        <div className="relative rounded-card overflow-hidden bg-canvas-alt border border-canvas-border">
          {isYouTube || isVimeo ? (
            <div className="aspect-video">
              <iframe
                src={embedUrl}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={block.caption || "Video"}
              />
            </div>
          ) : (
            <video
              src={optimizeCloudinaryUrl(block.url, 1200)}
              controls
              className="w-full h-auto"
              preload="metadata"
            />
          )}
        </div>
        {block.caption && (
          <figcaption className="text-ink-300 text-xs mt-3 text-center">
            {block.caption}
          </figcaption>
        )}
      </figure>
    </ScrollReveal>
  );
}

function QuoteBlock({ block, index }: { block: ContentBlock; index: number }) {
  return (
    <ScrollReveal delay={0.05 * index}>
      <blockquote className="my-6 pl-6 border-l-[3px] border-signal">
        <p className="text-ink text-lg italic leading-relaxed">
          &ldquo;{block.text}&rdquo;
        </p>
        {block.author && (
          <cite className="text-ink-300 text-sm mt-2 block not-italic">
            — {block.author}
          </cite>
        )}
      </blockquote>
    </ScrollReveal>
  );
}

export function ContentRenderer({ content }: ContentRendererProps) {
  return (
    <div className="flex flex-col gap-5">
      {content.map((block, i) => {
        switch (block.type) {
          case "paragraph":
            return <ParagraphBlock key={i} block={block} index={i} />;
          case "heading":
            return <HeadingBlock key={i} block={block} index={i} />;
          case "image":
            return <ImageBlock key={i} block={block} index={i} />;
          case "video":
            return <VideoBlock key={i} block={block} index={i} />;
          case "quote":
            return <QuoteBlock key={i} block={block} index={i} />;
          default:
            return null;
        }
      })}
    </div>
  );
}
