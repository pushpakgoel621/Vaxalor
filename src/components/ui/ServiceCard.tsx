import Link from "next/link";
import { Badge } from "./Badge";

interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
  href: string;
  badge?: string;
}

export function ServiceCard({
  number,
  title,
  description,
  href,
  badge,
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group block bg-canvas-white border border-canvas-border rounded-card p-7 transition-all duration-300 hover:border-signal-wash hover:-translate-y-1"
      data-cursor="hover"
    >
      <p className="text-signal text-xs font-semibold uppercase tracking-wider font-mono mb-4">
        {number}
      </p>
      <div className="flex items-center gap-2 mb-3">
        <h3 className="text-ink text-[20px] font-semibold tracking-tight relative">
          {title}
          <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-signal transition-all duration-300 ease-out group-hover:w-full" />
        </h3>
        {badge && <Badge>{badge}</Badge>}
      </div>
      <p className="text-ink-300 text-sm leading-relaxed mb-4">
        {description}
      </p>
      <span className="inline-flex items-center gap-1 text-signal text-sm font-medium">
        Learn more
        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
      </span>
    </Link>
  );
}
