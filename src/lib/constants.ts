import type { NavLink, Service, ProcessStep, Testimonial, Stat, SocialLink, Project, TeamMember, Value } from "@/types";

export const SITE_NAME = "Vaxalor";
export const SITE_URL = "https://vaxalor.com";
export const SITE_EMAIL = "hello@vaxalor.com";
export const SITE_TAGLINE = "We build digital products with soul.";

export const NAV_LINKS: NavLink[] = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
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

export const PROJECTS: Project[] = [
  {
    slug: "freshbite",
    title: "FreshBite",
    hook: "A popular restaurant had zero online presence. We changed that in 14 days.",
    category: "Website",
    description:
      "FreshBite is a modern restaurant website with integrated online ordering, menu browsing with categories and photos, reservation system, and a fully mobile-responsive design.",
    challenge:
      "FreshBite was a popular local restaurant with zero online presence. They were losing customers to competitors with modern websites and online ordering.",
    solution:
      "We designed and built a fast, mobile-first website with an integrated menu browser, online ordering system, and reservation booking — all shipped in 14 days.",
    result:
      "Online orders accounted for 35% of total revenue within the first month. Mobile traffic increased by 280%, and the average session time doubled.",
    timeline: "Shipped in 14 days",
    year: "2026",
    techStack: ["Next.js", "Tailwind CSS", "Stripe", "PostgreSQL"],
    gradient: "from-signal-tint via-signal-wash to-signal/20",
    pattern: "grid",
    conceptProject: true,
  },
  {
    slug: "trackflow",
    title: "TrackFlow",
    hook: "An idea on a napkin became a funded startup in 20 days.",
    category: "MVP",
    description:
      "TrackFlow is a project management dashboard with task boards, team management, analytics, and a clean onboarding flow — built as an investor-ready MVP.",
    challenge:
      "A first-time founder needed to validate a project management concept and pitch to investors, but had no technical co-founder and limited runway.",
    solution:
      "We built a fully functional MVP with Kanban task boards, team management, and analytics dashboards in 20 days at 50% off through our MVP program.",
    result:
      "The founder used the MVP to close a $200K pre-seed round. The product now has 400+ active users in private beta.",
    timeline: "Shipped in 20 days",
    year: "2026",
    techStack: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    gradient: "from-canvas-alt via-signal-tint to-signal-wash/60",
    pattern: "dots",
    conceptProject: true,
  },
  {
    slug: "shopassist-ai",
    title: "ShopAssist AI",
    hook: "A support team drowning in 200 daily tickets needed a smarter way. We built it.",
    category: "AI",
    description:
      "ShopAssist AI is an intelligent chatbot for e-commerce with product recommendations, order tracking, lead capture, and a performance analytics dashboard.",
    challenge:
      "An e-commerce company was spending 6+ hours daily on repetitive customer support queries — order tracking, return policies, product questions.",
    solution:
      "We built an AI chatbot powered by OpenAI that handles product recommendations, order tracking, and FAQ responses with 95% accuracy. Integrated directly into their existing Shopify store.",
    result:
      "The chatbot now handles 80% of support tickets automatically. Average response time dropped from 4 hours to 8 seconds. Support team reclaimed 30+ hours per week.",
    timeline: "Shipped in 18 days",
    year: "2026",
    techStack: ["React", "Node.js", "OpenAI", "MongoDB", "Shopify API"],
    gradient: "from-signal-wash/50 via-signal-tint to-canvas-alt",
    pattern: "waves",
    conceptProject: true,
  },
  {
    slug: "buildcrm",
    title: "BuildCRM",
    hook: "A sales team stuck in spreadsheets needed a system that actually fit their workflow.",
    category: "CRM",
    description:
      "BuildCRM is a custom CRM with contact management, sales pipeline visualization, reporting dashboards, and role-based access control.",
    challenge:
      "A growing B2B company was managing 500+ leads across 3 different spreadsheets. Deals were falling through the cracks, and reporting took hours of manual work.",
    solution:
      "We built a custom CRM with a visual sales pipeline, automated lead scoring, one-click reporting, and role-based access — designed around their actual workflow, not a generic template.",
    result:
      "Lead response time dropped by 60%. Monthly reporting that took 8 hours now takes 2 clicks. The team closed 40% more deals in the first quarter.",
    timeline: "Shipped in 19 days",
    year: "2026",
    techStack: ["Next.js", "PostgreSQL", "Prisma", "Tailwind CSS", "AWS"],
    gradient: "from-signal-tint via-canvas-alt to-signal-wash/40",
    pattern: "circles",
    conceptProject: true,
  },
];

export const PROJECT_FILTERS = ["All", "Websites", "Mobile", "AI", "MVP"] as const;

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Abhinav Rastogi",
    role: "Founder & Lead Developer",
    oneLiner: "Obsessed with shipping fast and building things that matter.",
  },
  {
    name: "Design Lead",
    role: "UI/UX Design",
    oneLiner: "Believes every pixel has a purpose.",
  },
  {
    name: "Backend Engineer",
    role: "Backend & Infrastructure",
    oneLiner: "If it scales, it ships.",
  },
  {
    name: "AI Engineer",
    role: "AI & Machine Learning",
    oneLiner: "Making machines understand humans, not the other way around.",
  },
];

export const VALUES: Value[] = [
  {
    number: "01",
    title: "Soul in the code",
    description:
      "Every line of code we write has intention. We don't cut corners.",
  },
  {
    number: "02",
    title: "Speed without compromise",
    description:
      "20 days maximum. But we never sacrifice quality for speed.",
  },
  {
    number: "03",
    title: "Radical honesty",
    description:
      "We'll tell you if your idea needs tweaking. We're partners, not yes-men.",
  },
];
