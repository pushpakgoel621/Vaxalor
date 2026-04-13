import type { NavLink, Service, ProcessStep, Testimonial, Stat, SocialLink } from "@/types";

export const SITE_NAME = "Vaxalor";
export const SITE_URL = "https://vaxalor.com";
export const SITE_EMAIL = "hello@vaxalor.com";
export const SITE_TAGLINE = "We build digital products with soul.";

export const NAV_LINKS: NavLink[] = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work", disabled: true },
  { label: "About", href: "/about", disabled: true },
  { label: "Contact", href: "/contact" },
];

export const SERVICES: Service[] = [
  {
    number: "01",
    title: "Website Development",
    description:
      "A custom website that looks incredible and actually brings in customers. No templates, no shortcuts — handcrafted for your business and shipped in 20 days.",
    features: [
      "Custom design tailored to your brand",
      "Fully responsive across all devices",
      "SEO-ready from day one",
      "Lightning-fast loading speeds",
      "CMS integration for easy updates",
    ],
    ctaText: "Start a web project →",
    ctaHref: "/contact?service=website",
  },
  {
    number: "02",
    title: "Design & Posters",
    description:
      "From brand identity to marketing materials — visual design that captures attention and communicates your message with clarity and impact.",
    features: [
      "Complete brand identity systems",
      "UI/UX design for web and mobile",
      "Marketing materials and collateral",
      "Social media graphics and templates",
    ],
    ctaText: "Start a design project →",
    ctaHref: "/contact?service=design",
  },
  {
    number: "03",
    title: "Mobile Applications",
    description:
      "Your app, on every phone, ready in 20 days. Cross-platform development that delivers native-quality experiences without the native price tag.",
    features: [
      "iOS & Android from a single codebase",
      "Built with React Native or Flutter",
      "Offline support and push notifications",
      "App Store and Play Store deployment",
    ],
    ctaText: "Start an app project →",
    ctaHref: "/contact?service=mobile",
  },
  {
    number: "04",
    title: "ERP & CRM Solutions",
    description:
      "Custom business tools that actually fit your workflow. Dashboards, automation, and analytics — built around how your team really works.",
    features: [
      "Custom dashboards with real-time data",
      "Workflow automation that saves hours",
      "Advanced analytics and reporting",
      "Role-based access control",
    ],
    ctaText: "Start a CRM project →",
    ctaHref: "/contact?service=erp",
  },
  {
    number: "05",
    title: "AI Chatbots & Solutions",
    description:
      "A smart chatbot that handles customer questions, captures leads, and works 24/7 — so you can focus on running your business.",
    features: [
      "Natural language processing",
      "Integration with your existing tools",
      "24/7 automated customer support",
      "Analytics and conversation insights",
    ],
    ctaText: "Start an AI project →",
    ctaHref: "/contact?service=ai",
    highlighted: true,
  },
  {
    number: "06",
    title: "MVP Development",
    description:
      "Test your startup idea without burning through your savings. We build your MVP in 20 days at 50% off — just enough to validate, pitch, and grow.",
    features: [
      "20-day guaranteed delivery",
      "50% discount on development",
      "Iterative, feedback-driven approach",
      "Investor-ready product and pitch",
    ],
    ctaText: "Start your MVP →",
    ctaHref: "/contact?service=mvp",
    badge: "50% off",
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We learn your business, audience, and goals. No jargon. Just a real conversation.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We create wireframes and visual designs. You approve before a single line of code.",
  },
  {
    number: "03",
    title: "Develop",
    description:
      "We build with modern tech — fast, scalable, and clean. Daily progress updates.",
  },
  {
    number: "04",
    title: "Ship",
    description:
      "We test, polish, and launch. You get a product that works beautifully from day one.",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "They redesigned our entire online presence and our lead generation doubled. Best investment we've made this year.",
    authorName: "Sarah Chen",
    authorTitle: "Founder, FreshBite",
  },
  {
    quote:
      "We went from idea to a working product in 18 days. The speed and quality were honestly unbelievable.",
    authorName: "James Morton",
    authorTitle: "CEO, TrackFlow",
  },
  {
    quote:
      "The AI chatbot they built handles 80% of our support tickets now. Our team can finally focus on what matters.",
    authorName: "Priya Sharma",
    authorTitle: "COO, ShopAssist",
  },
];

export const STATS: Stat[] = [
  { number: 50, suffix: "+", label: "Projects Shipped" },
  { number: 20, suffix: "", label: "Day Delivery", highlight: true },
  { number: 98, suffix: "%", label: "Client Satisfaction" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: "LinkedIn", href: "https://linkedin.com/company/vaxalor" },
  { platform: "Twitter", href: "https://twitter.com/vaxalor" },
  { platform: "Instagram", href: "https://instagram.com/vaxalor" },
  { platform: "GitHub", href: "https://github.com/vaxalor" },
];

export const TECH_STACK = [
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "Flutter",
  "React Native",
  "PostgreSQL",
  "MongoDB",
  "AWS",
  "OpenAI",
  "Tailwind CSS",
  "TypeScript",
  "Figma",
  "Docker",
  "Redis",
  "Vercel",
];

export const SERVICE_OPTIONS = [
  "Website",
  "Mobile App",
  "AI Solution",
  "ERP/CRM",
  "MVP",
  "SaaS",
  "Design",
  "Other",
];

export const BUDGET_OPTIONS = [
  "Under $1K",
  "$1K – $5K",
  "$5K – $10K",
  "$10K+",
  "Not sure yet",
];
