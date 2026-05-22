import { SERVICE_CATALOG } from "@/lib/constants";
import type { ServiceCatalogCategory } from "@/types";

export const PILLAR_ICONS: Record<string, React.ReactNode> = {
  code: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  brain: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a7 7 0 0 1 7 7c0 2.38-1.19 4.47-3 5.74V17a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 0 1 7-7z" />
      <line x1="10" y1="22" x2="14" y2="22" />
      <line x1="9" y1="9" x2="15" y2="9" />
    </svg>
  ),
  palette: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="8" r="1.5" fill="currentColor" />
      <circle cx="8.5" cy="12.5" r="1.5" fill="currentColor" />
      <circle cx="15.5" cy="12.5" r="1.5" fill="currentColor" />
      <circle cx="12" cy="16" r="1.5" fill="currentColor" />
    </svg>
  ),
  rocket: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 3 0 3 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-3 0-3" />
    </svg>
  ),
  compass: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" fill="currentColor" opacity="0.15" stroke="currentColor" />
    </svg>
  ),
};

export interface PillarTheme {
  bg: string;
  border: string;
  accent: string;
  dot: string;
  chip: string;
  ring: string;
}

export const PILLAR_COLORS: PillarTheme[] = [
  { bg: "bg-signal-tint",  border: "border-signal/20",   accent: "text-signal",        dot: "bg-signal",        chip: "bg-signal/10 text-signal",         ring: "from-signal/10 via-transparent to-transparent" },
  { bg: "bg-purple-50",    border: "border-purple-200",  accent: "text-purple-600",    dot: "bg-purple-500",    chip: "bg-purple-100 text-purple-700",    ring: "from-purple-100/60 via-transparent to-transparent" },
  { bg: "bg-rose-50",      border: "border-rose-200",    accent: "text-rose-600",      dot: "bg-rose-500",      chip: "bg-rose-100 text-rose-700",        ring: "from-rose-100/60 via-transparent to-transparent" },
  { bg: "bg-amber-50",     border: "border-amber-200",   accent: "text-amber-600",     dot: "bg-amber-500",     chip: "bg-amber-100 text-amber-700",      ring: "from-amber-100/60 via-transparent to-transparent" },
  { bg: "bg-emerald-50",   border: "border-emerald-200", accent: "text-emerald-600",   dot: "bg-emerald-500",   chip: "bg-emerald-100 text-emerald-700",  ring: "from-emerald-100/60 via-transparent to-transparent" },
];

export function pillarIndexBySlug(slug: string): number {
  return SERVICE_CATALOG.findIndex((p) => p.slug === slug);
}

export function findPillarBySlug(slug: string): ServiceCatalogCategory | undefined {
  return SERVICE_CATALOG.find((p) => p.slug === slug);
}
