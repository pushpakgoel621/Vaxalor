export interface NavLink {
  label: string;
  href: string;
  disabled?: boolean;
}

export interface Service {
  number: string;
  title: string;
  description: string;
  features: string[];
  ctaText: string;
  ctaHref: string;
  badge?: string;
  highlighted?: boolean;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  authorName: string;
  authorTitle: string;
  authorImage?: string;
}

export interface Stat {
  number: number;
  suffix: string;
  label: string;
  highlight?: boolean;
}

export interface SocialLink {
  platform: string;
  href: string;
}

export interface Project {
  slug: string;
  title: string;
  hook: string;
  category: "Website" | "Mobile" | "AI" | "MVP" | "CRM";
  description: string;
  challenge: string;
  solution: string;
  result: string;
  timeline: string;
  year: string;
  techStack: string[];
  gradient: string;
  pattern: "grid" | "dots" | "waves" | "circles";
  conceptProject?: boolean;
  projectUrl?: string | null;
}

export type ProjectFilter = "All" | "Websites" | "Mobile" | "AI" | "MVP";

export interface TeamMember {
  name: string;
  role: string;
  oneLiner: string;
  image?: string;
}

export interface Value {
  number: string;
  title: string;
  description: string;
}
