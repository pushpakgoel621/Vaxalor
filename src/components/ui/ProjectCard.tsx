"use client";

import Image from "next/image";
import { useState } from "react";
import { CategoryMockup } from "./CategoryMockup";

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  imageSrc?: string;
  gradient?: string;
  pattern?: "circles" | "grid" | "waves" | "dots";
  size?: "large" | "small";
}

export function ProjectCard({
  title,
  category,
  description,
  imageSrc,
  gradient = "from-signal-wash to-signal",
  size = "small",
}: ProjectCardProps) {
  const [mediaFailed, setMediaFailed] = useState(false);
  const isVideo = imageSrc && /\.(mp4|webm|mov)$/i.test(imageSrc);
  const showMedia = Boolean(imageSrc) && !mediaFailed;
  const mockupCategory = (["Website", "Mobile", "AI", "MVP", "CRM", "Design"].includes(category)
    ? category
    : "Website") as React.ComponentProps<typeof CategoryMockup>["category"];

  return (
    <div
      className="group bg-canvas-white border border-canvas-border rounded-card overflow-hidden flex flex-col h-full hover:border-signal-wash/60 transition-colors duration-300"
      data-cursor="hover"
    >
      <div
        className={`relative overflow-hidden ${
          size === "large" ? "h-64 md:h-72" : "h-48 md:h-56"
        }`}
      >
        {showMedia ? (
          isVideo ? (
            <video
              src={imageSrc}
              className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              onError={() => setMediaFailed(true)}
            />
          ) : (
            <Image
              src={imageSrc!}
              alt={title}
              fill
              sizes={size === "large" ? "(max-width: 768px) 100vw, 700px" : "(max-width: 768px) 100vw, 500px"}
              className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
              loading="lazy"
              onError={() => setMediaFailed(true)}
            />
          )
        ) : (
          <div className="w-full h-full transition-transform duration-500 ease-out group-hover:scale-105">
            <CategoryMockup category={mockupCategory} gradient={gradient} />
          </div>
        )}
      </div>
      <div className="p-6 flex flex-col gap-2 flex-1">
        <span className="inline-flex self-start items-center px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-signal-tint text-signal">
          {category}
        </span>
        <h3 className="text-ink text-[20px] font-semibold tracking-tight">
          {title}
        </h3>
        <p className="text-ink-300 text-sm">{description}</p>
      </div>
    </div>
  );
}
