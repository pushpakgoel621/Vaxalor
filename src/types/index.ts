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

export interface ServiceOffering {
  title: string;
  items: string[];
}

export interface ServiceCatalogCategory {
  pillar: string;
  icon: string;
  description: string;
  categories: ServiceOffering[];
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
  category: "Website" | "Mobile" | "AI" | "MVP" | "CRM" | "Design";
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
  thumbnailUrl?: string | null;
}

export type ProjectFilter = "All" | "Websites" | "Design" | "Mobile" | "CRM" | "AI" | "MVP";

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
