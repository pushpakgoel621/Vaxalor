interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  imageSrc?: string;
  gradient?: string;
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
  return (
    <div
      className="group bg-canvas-white border border-canvas-border rounded-card overflow-hidden flex flex-col h-full"
      data-cursor="hover"
    >
      <div
        className={`relative overflow-hidden ${
          size === "large" ? "h-64 md:h-72" : "h-48 md:h-56"
        }`}
      >
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-105"
          />
        ) : (
          <div
            className={`w-full h-full bg-gradient-to-br ${gradient} transition-transform duration-400 group-hover:scale-105`}
          />
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
