import Link from "next/link";
import Image from "next/image";

function optimizeCloudinaryUrl(url: string, width = 800): string {
  if (!url || !url.includes("res.cloudinary.com")) return url;
  return url.replace("/upload/", `/upload/f_auto,q_auto,w_${width},c_fill/`);
}

interface BlogCardProps {
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  thumbnailUrl?: string | null;
  featured?: boolean;
}

export function BlogCard({
  title,
  slug,
  excerpt,
  category,
  readTime,
  date,
  thumbnailUrl,
  featured = false,
}: BlogCardProps) {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  if (featured) {
    return (
      <Link
        href={`/blog/${slug}`}
        className="group block bg-canvas-white border border-canvas-border rounded-card overflow-hidden hover:border-signal-wash transition-colors duration-300"
        data-cursor="hover"
      >
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative h-48 md:h-auto bg-gradient-to-br from-signal-tint via-signal-wash/30 to-canvas-alt overflow-hidden">
            {thumbnailUrl && (
              <Image
                src={optimizeCloudinaryUrl(thumbnailUrl, 800)}
                alt={title}
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            )}
          </div>
          <div className="p-8 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-3">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-signal-tint text-signal">
                {category}
              </span>
              <span className="text-ink-300 text-xs">{formattedDate}</span>
              <span className="text-ink-400 text-xs">&middot; {readTime} read</span>
            </div>
            <h2 className="text-ink text-[24px] font-semibold font-heading tracking-tight mb-3 group-hover:text-signal transition-colors duration-200">
              {title}
            </h2>
            <p className="text-ink-300 text-sm leading-relaxed line-clamp-3">
              {excerpt}
            </p>
            <span className="inline-flex items-center gap-1 text-signal text-sm font-medium mt-4">
              Read article
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/blog/${slug}`}
      className="group block bg-canvas-white border border-canvas-border rounded-card overflow-hidden hover:border-signal-wash transition-colors duration-300 h-full"
      data-cursor="hover"
    >
      <div className="relative h-44 bg-gradient-to-br from-signal-tint via-signal-wash/20 to-canvas-alt overflow-hidden">
        {thumbnailUrl && (
          <Image
            src={optimizeCloudinaryUrl(thumbnailUrl, 600)}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 400px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        )}
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-signal-tint text-signal">
            {category}
          </span>
          <span className="text-ink-400 text-xs">{readTime} read</span>
        </div>
        <h3 className="text-ink text-[18px] font-semibold font-heading tracking-tight mb-2 group-hover:text-signal transition-colors duration-200 line-clamp-2">
          {title}
        </h3>
        <p className="text-ink-300 text-sm leading-relaxed line-clamp-2">
          {excerpt}
        </p>
        <p className="text-ink-400 text-xs mt-3">{formattedDate}</p>
      </div>
    </Link>
  );
}
