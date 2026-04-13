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
