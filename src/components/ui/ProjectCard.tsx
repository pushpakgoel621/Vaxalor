import Image from "next/image";

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  imageSrc?: string;
  gradient?: string;
  pattern?: "circles" | "grid" | "waves" | "dots";
  size?: "large" | "small";
}

// Optimize Cloudinary URLs by adding transformations
function optimizeCloudinaryUrl(url: string, width = 800): string {
  if (!url || !url.includes("res.cloudinary.com")) return url;
  // Insert transformation params after /upload/
  return url.replace("/upload/", `/upload/f_auto,q_auto,w_${width},c_fill/`);
}

export function ProjectCard({
  title,
  category,
  description,
  imageSrc,
  gradient = "from-signal-wash to-signal",
  pattern = "dots",
  size = "small",
}: ProjectCardProps) {
  const isVideo = imageSrc && /\.(mp4|webm|mov)$/i.test(imageSrc);
  const optimizedSrc = imageSrc ? optimizeCloudinaryUrl(imageSrc, size === "large" ? 1000 : 700) : "";

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
        {imageSrc ? (
          isVideo ? (
            <video
              src={optimizedSrc}
              className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
            />
          ) : (
            <Image
              src={optimizedSrc}
              alt={title}
              fill
              sizes={size === "large" ? "(max-width: 768px) 100vw, 700px" : "(max-width: 768px) 100vw, 500px"}
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              loading="lazy"
            />
          )
        ) : (
          <div
            className={`w-full h-full bg-gradient-to-br ${gradient} transition-transform duration-500 ease-out group-hover:scale-105 relative`}
          >
            {/* SVG pattern overlay for visual interest */}
            <svg className="absolute inset-0 w-full h-full opacity-[0.12]" xmlns="http://www.w3.org/2000/svg">
              {pattern === "circles" && (
                <>
                  <circle cx="30%" cy="40%" r="60" stroke="var(--color-signal)" strokeWidth="1" fill="none" />
                  <circle cx="30%" cy="40%" r="40" stroke="var(--color-signal)" strokeWidth="0.5" fill="none" />
                  <circle cx="70%" cy="60%" r="45" stroke="var(--color-ink)" strokeWidth="0.5" fill="none" />
                </>
              )}
              {pattern === "grid" && (
                <>
                  {Array.from({ length: 8 }).map((_, i) => (
                    <line key={`v${i}`} x1={`${(i + 1) * 12}%`} y1="0" x2={`${(i + 1) * 12}%`} y2="100%" stroke="var(--color-signal)" strokeWidth="0.5" />
                  ))}
                  {Array.from({ length: 6 }).map((_, i) => (
                    <line key={`h${i}`} x1="0" y1={`${(i + 1) * 16}%`} x2="100%" y2={`${(i + 1) * 16}%`} stroke="var(--color-signal)" strokeWidth="0.5" />
                  ))}
                </>
              )}
              {pattern === "waves" && (
                <>
                  <path d="M0,60 Q50,20 100,60 T200,60 T300,60 T400,60" stroke="var(--color-signal)" strokeWidth="1" fill="none" transform="translate(0,20)" />
                  <path d="M0,60 Q50,20 100,60 T200,60 T300,60 T400,60" stroke="var(--color-signal)" strokeWidth="0.5" fill="none" transform="translate(0,60)" />
                  <path d="M0,60 Q50,20 100,60 T200,60 T300,60 T400,60" stroke="var(--color-signal)" strokeWidth="0.5" fill="none" transform="translate(0,100)" />
                </>
              )}
              {pattern === "dots" && (
                <>
                  {Array.from({ length: 48 }).map((_, i) => (
                    <circle
                      key={i}
                      cx={`${((i % 8) * 12) + 8}%`}
                      cy={`${(Math.floor(i / 8) * 16) + 10}%`}
                      r="2"
                      fill="var(--color-signal)"
                    />
                  ))}
                </>
              )}
            </svg>

            {/* Simulated UI mockup shapes */}
            <div className="absolute inset-6 flex flex-col gap-2 opacity-[0.08]">
              <div className="h-3 w-20 bg-ink rounded-full" />
              <div className="h-2 w-32 bg-ink rounded-full" />
              <div className="flex-1 border border-ink/20 rounded-lg mt-2" />
            </div>
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
