interface TestimonialCardProps {
  quote: string;
  authorName: string;
  authorTitle: string;
  authorImage?: string;
}

export function TestimonialCard({
  quote,
  authorName,
  authorTitle,
  authorImage,
}: TestimonialCardProps) {
  return (
    <div className="bg-canvas-white border border-canvas-border rounded-[14px] p-10 md:p-12 max-w-3xl mx-auto relative">
      <span className="absolute -top-2 left-6 md:left-8 text-signal-wash/60 text-[140px] font-heading leading-none select-none pointer-events-none">
        &ldquo;
      </span>
      <blockquote className="relative z-10 text-ink-100 text-[18px] md:text-[20px] leading-[1.8] italic mb-8 pt-10">
        {quote}
      </blockquote>
      <div className="flex items-center gap-3">
        {authorImage ? (
          <img
            src={authorImage}
            alt={authorName}
            className="w-12 h-12 rounded-full object-cover"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-signal-wash flex items-center justify-center text-signal font-semibold text-sm">
            {authorName
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </div>
        )}
        <div>
          <p className="text-ink font-semibold text-base">{authorName}</p>
          <p className="text-ink-300 text-sm">{authorTitle}</p>
        </div>
      </div>
    </div>
  );
}
