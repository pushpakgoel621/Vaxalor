import type { NavLink, ServiceCatalogCategory, ProcessStep, Testimonial, Stat, SocialLink, Project, TeamMember, LeadershipMember, Value } from "@/types";

export const SITE_NAME = "Vaxalor";
export const SITE_URL = "https://vaxalor.com";
export const SITE_EMAIL = "official@vaxalor.com";
export const SITE_TAGLINE = "We build digital products with soul.";

export const NAV_LINKS: NavLink[] = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
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
    authorImage: "/images/testimonials/sarah.png",
  },
  {
    quote:
      "We went from idea to a working product in 18 days. The speed and quality were honestly unbelievable.",
    authorName: "James Morton",
    authorTitle: "CEO, TrackFlow",
    authorImage: "/images/testimonials/james.png",
  },
  {
    quote:
      "The AI chatbot they built handles 80% of our support tickets now. Our team can finally focus on what matters.",
    authorName: "Priya Sharma",
    authorTitle: "COO, ShopAssist",
    authorImage: "/images/testimonials/priya.png",
  },
];

export const STATS: Stat[] = [
  { number: 20, suffix: "+", label: "Projects Shipped" },
  { number: 20, suffix: "", label: "Day Delivery", highlight: true },
  { number: 98, suffix: "%", label: "Client Satisfaction" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: "LinkedIn", href: "https://www.linkedin.com/company/vaxalor-ai/" },
  { platform: "Twitter", href: "https://x.com/VaxalorAI" },
  { platform: "Instagram", href: "https://www.instagram.com/vaxalor.ai/" },
  { platform: "Facebook", href: "https://www.facebook.com/people/Vaxalor/61586723278901/" },
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
  "Web & App Development",
  "Enterprise Systems (SaaS/ERP/CRM)",
  "Backend & Integration",
  "AI & Machine Learning",
  "Automation & Data",
  "UI/UX Design",
  "Visual Branding",
  "Video & Motion",
  "SEO & Content",
  "Growth Marketing & Ads",
  "Social Media & Outreach",
  "Founder & Startup Support",
  "Advisory & Consulting",
  "MVP Development",
  "Other",
];

export const SERVICE_CATALOG: ServiceCatalogCategory[] = [
  {
    slug: "technology-and-software",
    pillar: "Technology & Software Development",
    icon: "code",
    description: "From corporate websites to enterprise-grade SaaS — we engineer the digital backbone of your business.",
    categories: [
      {
        title: "Web & App Development",
        items: [
          "Corporate Websites",
          "Mobile Apps (Native/Hybrid)",
          "Full-Stack JS (MERN)",
          "Progressive Web Apps (PWA)",
          "E-commerce Storefronts (Shopify/Magento)",
        ],
      },
      {
        title: "Enterprise Systems",
        items: [
          "SaaS Product Architecture",
          "ERP Systems",
          "CRM Portals",
          "Custom Business Management Tools",
        ],
      },
      {
        title: "Backend & Integration",
        items: [
          "Custom API Development",
          "Database Architecture (SQL/Vector)",
          "Legacy System Modernization",
          "No-Code/Low-Code Development",
        ],
      },
    ],
  },
  {
    slug: "data-ai-and-automation",
    pillar: "Data, AI & Automation",
    icon: "brain",
    description: "Harness the power of artificial intelligence and data-driven automation to work smarter, not harder.",
    categories: [
      {
        title: "Artificial Intelligence",
        items: [
          "AI Chatbots",
          "LLM Fine-tuning",
          "RAG Pipelines",
          "AI Visuals & Creative Assets",
          "Machine Learning Models",
        ],
      },
      {
        title: "Automation & Data",
        items: [
          "Workflow Automation (n8n/Zapier)",
          "CRM Data Hygiene & Migration",
          "Business Intelligence Dashboards",
          "Predictive Analytics",
        ],
      },
    ],
  },
  {
    slug: "design-and-creative",
    pillar: "Design & Creative Services",
    icon: "palette",
    description: "Beautiful design that doesn't just look good — it communicates, converts, and builds lasting brand loyalty.",
    categories: [
      {
        title: "User Experience",
        items: [
          "UI/UX Design (Figma)",
          "Wireframing & Prototyping",
          "User Research",
          "Digital Accessibility (WCAG) Auditing",
        ],
      },
      {
        title: "Visual Branding",
        items: [
          "Logo Design",
          "Brand Identity & Strategy",
          "Digital Graphics (Social/Ad Assets)",
          "Interactive Content (Quizzes/Calculators)",
        ],
      },
      {
        title: "Video & Motion",
        items: [
          "Motion Graphics",
          "High-End Video/Reel Production",
          "Short-Form Video (TikTok/Reels)",
          "Podcast Production",
          "AR/VR Filter Design",
        ],
      },
    ],
  },
  {
    slug: "digital-marketing-and-growth",
    pillar: "Digital Marketing & Growth",
    icon: "rocket",
    description: "Data-driven marketing that puts your brand in front of the right people at the right time.",
    categories: [
      {
        title: "Search Optimization",
        items: [
          "Technical SEO",
          "Content Engine (Blogging/Copywriting)",
          "Generative Engine Optimization (GEO)",
          "Voice Search Optimization",
          "Hyper-Local SEO",
        ],
      },
      {
        title: "Growth Marketing",
        items: [
          "Performance Marketing (Google/Meta Ads)",
          "Programmatic & CTV Advertising",
          "Affiliate Program Management",
          "Conversion Funnel Optimization (CRO)",
        ],
      },
      {
        title: "Social & Outreach",
        items: [
          "Social Media Growth",
          "Community Management (Discord/Slack)",
          "Influencer Campaign Management",
          "B2B Cold Outreach Systems",
        ],
      },
    ],
  },
  {
    slug: "strategy-and-consulting",
    pillar: "Strategy, Consulting & Support",
    icon: "compass",
    description: "Expert guidance for founders and businesses navigating the complexities of digital transformation.",
    categories: [
      {
        title: "Founder Support",
        items: [
          "Startup Roadmapping",
          "Pitch Deck Mastery",
          "Capital/Investor Strategy",
          "Market Intelligence",
          "GTM (Go-To-Market) Strategy",
        ],
      },
      {
        title: "Advisory",
        items: [
          "Digital Transformation",
          "Digital Reputation Management",
          "Loyalty & Gamification Strategy",
          "Technical Feasibility Studies",
        ],
      },
    ],
  },
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
    slug: "cosmo-green-enegry",
    title: "Cosmo Green Energy",
    hook: "One stop solution for your energy needs",
    category: "Website",
    description: "",
    challenge: "",
    solution: "",
    result: "",
    timeline: "32 days",
    year: "2024",
    techStack: ["Next.js", "node.js", "supabase"],
    gradient: "from-signal-tint via-signal-wash to-signal/20",
    pattern: "grid",
    conceptProject: false,
    projectUrl: "https://www.cosmogreenenergy.com/",
    thumbnailUrl: "/images/projects/cosmo-green-enegry.jpg",
  },
  {
    slug: "ideationx",
    title: "Founder and Investor Connection Platform IdeationX",
    hook: "We shipped it in 45 days",
    category: "Website",
    description: "Hello",
    challenge: "",
    solution: "",
    result: "",
    timeline: "46 Days",
    year: "2026",
    techStack: [],
    gradient: "from-canvas-alt via-signal-tint to-signal-wash/60",
    pattern: "dots",
    conceptProject: true,
    thumbnailUrl: "/images/projects/ideationx.jpg",
  },
  {
    slug: "decalion-in",
    title: "Social Media Management Website",
    hook: "One stop solution for Social Media Management needs",
    category: "Website",
    description: "",
    challenge: "",
    solution: "",
    result: "",
    timeline: "3 days",
    year: "2026",
    techStack: [],
    gradient: "from-signal-wash/50 via-signal-tint to-canvas-alt",
    pattern: "waves",
    conceptProject: true,
    projectUrl: "https://decalion.vercel.app/",
    thumbnailUrl: "/images/projects/decalion-in.jpg",
  },
  {
    slug: "laspore-com",
    title: "laspore.com",
    hook: "",
    category: "Website",
    description: "",
    challenge: "",
    solution: "",
    result: "",
    timeline: "",
    year: "2026",
    techStack: [],
    gradient: "from-signal-tint via-canvas-alt to-signal-wash/40",
    pattern: "circles",
    conceptProject: false,
    projectUrl: "https://www.laspore.com",
    thumbnailUrl: "/images/projects/laspore-com.jpg",
  },
  {
    slug: "clikn",
    title: "Clikn",
    hook: "Links that Click",
    category: "Website",
    description: "",
    challenge: "",
    solution: "",
    result: "",
    timeline: "16",
    year: "2026",
    techStack: [],
    gradient: "from-ink-500 via-canvas-alt to-signal-wash/60",
    pattern: "grid",
    conceptProject: true,
    projectUrl: "https://clikn-v2-frontend-ekr9v8v0d-abhinavrastogi1s-projects.vercel.app/",
    thumbnailUrl: "/images/projects/clikn.jpg",
  },
  {
    slug: "e-commerce-website",
    title: "E Commerce Website",
    hook: "",
    category: "Website",
    description: "",
    challenge: "",
    solution: "",
    result: "",
    timeline: "32",
    year: "2026",
    techStack: [],
    gradient: "from-signal-tint via-signal-wash to-signal/20",
    pattern: "dots",
    conceptProject: false,
    projectUrl: "https://totalpromo.com.au/",
    thumbnailUrl: "/images/projects/e-commerce-website.jpg",
  },
  {
    slug: "bloom-media",
    title: "Bloom Media",
    hook: "",
    category: "Website",
    description: "",
    challenge: "",
    solution: "",
    result: "",
    timeline: "",
    year: "2026",
    techStack: [],
    gradient: "from-canvas-alt via-signal-tint to-signal-wash/60",
    pattern: "waves",
    conceptProject: false,
    projectUrl: "https://www.bloommedia.com/",
    thumbnailUrl: "/images/projects/bloom-media.jpg",
  },
  {
    slug: "grc-platform",
    title: "GRC Platform",
    hook: "",
    category: "Website",
    description: "",
    challenge: "",
    solution: "",
    result: "",
    timeline: "55",
    year: "2026",
    techStack: [],
    gradient: "from-signal-wash/50 via-signal-tint to-canvas-alt",
    pattern: "circles",
    conceptProject: false,
    projectUrl: "https://grc-demo-zeta.vercel.app/dashboard",
    thumbnailUrl: "/images/projects/grc-platform.jpg",
  },
  {
    slug: "snapgo-vehicle-pooling-service-website",
    title: "SnapGO - Vehicle Pooling Service Website",
    hook: "",
    category: "Website",
    description: "",
    challenge: "",
    solution: "",
    result: "",
    timeline: "",
    year: "2026",
    techStack: [],
    gradient: "from-signal-tint via-canvas-alt to-signal-wash/40",
    pattern: "grid",
    conceptProject: true,
    projectUrl: "https://snapgo.co.in/",
    thumbnailUrl: "/images/projects/snapgo-vehicle-pooling-service-website.jpg",
  },
  {
    slug: "shopify-website",
    title: "Shopify Website",
    hook: "",
    category: "Website",
    description: "",
    challenge: "",
    solution: "",
    result: "",
    timeline: "60",
    year: "2026",
    techStack: [],
    gradient: "from-ink-500 via-canvas-alt to-signal-wash/60",
    pattern: "dots",
    conceptProject: true,
    projectUrl: "https://pictor.com.au/",
    thumbnailUrl: "/images/projects/shopify-website.jpg",
  },
];


export const PROJECT_FILTERS = ["All", "Websites", "Design", "Mobile", "CRM", "AI", "MVP"] as const;

export const LEADERSHIP_MEMBERS: LeadershipMember[] = [
  // {
  //   name: "Anshul Shekhar",
  //   roleBadge: "Founder & CEO",
  //   description: "I lead go-to-market strategy, brand partnerships, and growth initiatives at Vaxalor. My work centers on building scalable acquisition systems that accelerate testing, lower customer acquisition costs, and improve campaign velocity.",
  //   linkedinUrl: "https://www.linkedin.com/in/anshul-shekhar-/",
  //   image: "/images/team/anshul.png",
  // },
  {
    name: "Pushpak Goel",
    roleBadge: "Co-founder & CIO",
    description: "I lead Vaxalor's product vision and long-term strategy, building digital products with soul that enable brands to scale. My focus is on combining automation, creative workflows, and high-performance engineering into one unified system.",
    linkedinUrl: "https://www.linkedin.com/in/pushpakgoel56/",
    image: "/images/team/pushpak.png",
  },
  {
    name: "Durgesh Chandra",
    roleBadge: "Business Head",
    description: "I oversee Vaxalor's daily Business Development processes, ensuring that our projects are delivered on time, within budget, and to the highest quality standards. My focus is on scaling our internal processes and team capabilities.",
    linkedinUrl: "https://www.linkedin.com/in/durgesh-chandra-67b9aa192/",
    image: "/images/team/durgesh.jpg",
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Abhinav Rastogi",
    role: "Backend & Infrastructure",
    oneLiner: "If it scales, it ships.",
    image: "/images/team/abhinav.png",
  },
  {
    name: "Mohak Lakra",
    role: "UI/UX Design",
    oneLiner: "Believes every pixel has a purpose.",
    image: "/images/team/mohak.png",
  }
  // {
  //   name: "Charu Lata",
  //   role: "Creative Head",
  //   oneLiner: "Turns ideas into reality.",
  //   image: "/images/team/charu.jpg",
  // }
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
