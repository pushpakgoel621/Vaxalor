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
    quote: "They redesigned our entire online presence and our lead generation doubled. Best investment we've made this year.",
    authorName: "Priyanshu Garg",
    authorTitle: "Pictor",
    authorImage: "",
  },
  {
    quote: "A seasoned business leader with an extensive corporate portfolio. Brings a wealth of market experience having collaborated with industry-leading brands such as Kellogg's, Hero MotoCorp, Afors Consulting, Asian Paints, and Amrit Food. Oversees comprehensive business operations, driving commercial growth, strategic partnerships, and market expansion.",
    authorName: "Balaji Soundaraj",
    authorTitle: "Tribe Fortis",
    authorImage: "",
  },
  {
    quote: "For the development of my website his technical expertise, professional approach, and attention to detail were instrumental in delivering a refined and effective digital presence. The project was executed with efficiency, reliability, and a clear understanding of business requirements.",
    authorName: "Md. Zaid Ashraf",
    authorTitle: "CEO, Cosmo Green Energy",
    authorImage: "",
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
    slug: "cosmo-green-energy",
    title: "Cosmo Green Energy",
    hook: "A clean energy company needed a website that matched their mission",
    category: "Website",
    description: "Cosmo Green Energy provides sustainable energy solutions across India. They needed a modern, high-performance website that communicated their green mission, showcased their service catalog, and generated qualified B2B leads.",
    challenge: "Their existing online presence was outdated and didn't reflect the innovation behind their energy solutions. The site had slow load times, no mobile optimization, and zero lead capture mechanisms — losing potential enterprise clients daily.",
    solution: "We built a fully custom Next.js website with a focus on visual storytelling, integrated a Supabase-powered backend for lead management, and designed service pages optimized for industry-specific search terms. The site scores 95+ on Lighthouse.",
    result: "Launched in 32 days. Page load time dropped from 6s to under 1.5s. Lead form submissions increased by 3x within the first month of going live.",
    timeline: "32 days",
    year: "2024",
    techStack: ["Next.js", "Node.js", "Supabase"],
    gradient: "from-signal-tint via-signal-wash to-signal/20",
    pattern: "grid",
    conceptProject: false,
    projectUrl: "https://www.cosmogreenenergy.com/",
    thumbnailUrl: "/images/projects/cosmo-green-enegry.jpg",
  },
  {
    slug: "ideationx",
    title: "Founder and Investor Connection Platform IdeationX",
    hook: "Connecting founders with the right investors — shipped in 45 days",
    category: "Website",
    description: "IdeationX is a platform that bridges the gap between early-stage startup founders and angel investors. We designed and developed the full platform from concept to launch, including founder profiles, investor matching, and pitch deck hosting.",
    challenge: "The startup ecosystem lacked a streamlined way for founders to find investors aligned with their stage, sector, and geography. Existing platforms were cluttered, enterprise-focused, and intimidating for first-time founders.",
    solution: "We built a clean, intuitive platform where founders can create profiles, upload pitch decks, and get matched with relevant investors using filtered search. The design prioritizes simplicity and trust — critical for a financial matchmaking platform.",
    result: "Shipped in 46 days from first call to production. The platform onboarded its first cohort of 25 founders and 10 investors within two weeks of launch.",
    timeline: "46 Days",
    year: "2026",
    techStack: ["Next.js", "Node.js", "PostgreSQL"],
    gradient: "from-canvas-alt via-signal-tint to-signal-wash/60",
    pattern: "dots",
    conceptProject: true,
    thumbnailUrl: "/images/projects/ideationx.jpg",
  },
  {
    slug: "decalion-in",
    title: "Decalion — Social Media Management Website",
    hook: "A social media agency needed a website as sharp as their content",
    category: "Website",
    description: "Decalion is a social media management agency that needed a bold, conversion-focused website to attract new clients. We designed and shipped a modern landing page in just 3 days that showcases their portfolio and drives consultation bookings.",
    challenge: "Decalion had no web presence — they were relying entirely on Instagram DMs and word-of-mouth referrals. They needed a professional site fast, without a bloated budget.",
    solution: "We delivered a high-impact single-page website with animated sections, client testimonial carousels, and a WhatsApp-integrated CTA. The ultra-fast 3-day turnaround was possible because we used a proven design system and eliminated scope creep.",
    result: "Live in 3 days. The website now serves as Decalion's primary lead funnel, replacing informal DM-based sales with a structured inquiry flow.",
    timeline: "3 days",
    year: "2026",
    techStack: ["Next.js", "Tailwind CSS", "Vercel"],
    gradient: "from-signal-wash/50 via-signal-tint to-canvas-alt",
    pattern: "waves",
    conceptProject: true,
    projectUrl: "https://decalion.vercel.app/",
    thumbnailUrl: "/images/projects/decalion-in.jpg",
  },
  {
    slug: "laspore-com",
    title: "Laspore — Fashion E-Commerce",
    hook: "A premium fashion brand needed an online store that felt luxurious",
    category: "Website",
    description: "Laspore is a premium fashion brand expanding into e-commerce. We designed a visually rich, high-converting online storefront that reflects their luxury positioning while keeping the shopping experience fast and frictionless.",
    challenge: "Fashion e-commerce is brutally competitive. Laspore needed a site that stood out visually from template-based competitors while maintaining fast load times to prevent cart abandonment.",
    solution: "We built a custom storefront with editorial-style product layouts, optimized image loading via CDN, and a streamlined checkout flow. Every interaction — from hover effects to add-to-cart animations — was designed to feel premium.",
    result: "The site launched with a 96 Lighthouse performance score and a bounce rate 40% lower than their previous template-based store.",
    timeline: "18 days",
    year: "2026",
    techStack: ["Next.js", "Tailwind CSS", "Stripe"],
    gradient: "from-signal-tint via-canvas-alt to-signal-wash/40",
    pattern: "circles",
    conceptProject: false,
    projectUrl: "https://www.laspore.com",
    thumbnailUrl: "/images/projects/laspore-com.jpg",
  },
  {
    slug: "clikn",
    title: "Clikn — Smart Link Management",
    hook: "Links that Click — a URL shortener with analytics superpowers",
    category: "Website",
    description: "Clikn is a modern link management platform that lets users create branded short links, track click analytics, and manage link campaigns. We built the full-stack platform from scratch in 16 days.",
    challenge: "Generic URL shorteners like Bitly lack the customization and analytics depth that marketers and creators need. Clikn needed to offer branded links, QR codes, and real-time click analytics in a clean, fast interface.",
    solution: "We architected a full-stack platform with a React frontend, Node.js API, and PostgreSQL backend. Features include custom domains, UTM parameter tracking, click heatmaps, and bulk link creation — all behind a minimal, intuitive UI.",
    result: "Shipped in 16 days. The platform handles thousands of link redirects with sub-50ms response times.",
    timeline: "16 days",
    year: "2026",
    techStack: ["React", "Node.js", "PostgreSQL"],
    gradient: "from-ink-500 via-canvas-alt to-signal-wash/60",
    pattern: "grid",
    conceptProject: true,
    projectUrl: "https://clikn-v2-frontend-ekr9v8v0d-abhinavrastogi1s-projects.vercel.app/",
    thumbnailUrl: "/images/projects/clikn.jpg",
  },
  {
    slug: "e-commerce-website",
    title: "Total Promo — E-Commerce Platform",
    hook: "An Australian promotional products company needed to sell online at scale",
    category: "Website",
    description: "Total Promo is an Australian B2B promotional products supplier. We built a full e-commerce platform with a product catalog of 500+ items, bulk ordering, and quote request functionality tailored to corporate buyers.",
    challenge: "The client's sales process was entirely manual — phone calls and email quotes. They needed to digitize their catalog, enable self-service ordering, and integrate with their existing fulfillment workflow.",
    solution: "We developed a custom e-commerce site with advanced filtering, bulk order discounts, a quote request system for large orders, and an admin panel for inventory management. The design balances professionalism with ease of use for corporate procurement teams.",
    result: "Delivered in 32 days. The platform reduced quote turnaround time from 48 hours to instant for standard orders, and enabled 24/7 self-service purchasing.",
    timeline: "32 days",
    year: "2026",
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
    gradient: "from-signal-tint via-signal-wash to-signal/20",
    pattern: "dots",
    conceptProject: false,
    projectUrl: "https://totalpromo.com.au/",
    thumbnailUrl: "/images/projects/e-commerce-website.jpg",
  },
  {
    slug: "bloom-media",
    title: "Bloom Media — Digital Agency Website",
    hook: "A creative agency needed a website that practiced what they preach",
    category: "Website",
    description: "Bloom Media is a digital marketing agency that helps brands grow through content and social strategy. We built their agency website to reflect their creative energy — bold visuals, smooth animations, and conversion-focused service pages.",
    challenge: "As a creative agency, Bloom Media's website needed to be their best portfolio piece. A generic template wouldn't cut it — the site itself had to demonstrate their design sensibility and attention to detail.",
    solution: "We designed a fully custom site with animated page transitions, a filterable portfolio gallery, and strategically placed CTAs. Every section was designed to showcase their work while funneling visitors toward a consultation booking.",
    result: "The site became Bloom Media's top-performing lead channel, generating more inquiries than their combined social media presence within the first quarter.",
    timeline: "20 days",
    year: "2026",
    techStack: ["Next.js", "Framer Motion", "Tailwind CSS"],
    gradient: "from-canvas-alt via-signal-tint to-signal-wash/60",
    pattern: "waves",
    conceptProject: false,
    projectUrl: "https://www.bloommedia.com/",
    thumbnailUrl: "/images/projects/bloom-media.jpg",
  },
  {
    slug: "grc-platform",
    title: "GRC Platform — Governance, Risk & Compliance",
    hook: "Enterprise-grade compliance management, built from zero",
    category: "Website",
    description: "A full-featured Governance, Risk, and Compliance (GRC) dashboard built for enterprise organizations. The platform enables teams to track regulatory compliance, manage risk assessments, and generate audit-ready reports.",
    challenge: "GRC platforms are notoriously complex and expensive. The client needed a custom solution that their team could actually use — not another bloated enterprise tool that requires weeks of training.",
    solution: "We built a clean, role-based dashboard with modules for policy management, risk scoring, compliance tracking, and automated report generation. The UI was designed to simplify complex workflows — making compliance management approachable for non-technical users.",
    result: "Delivered in 55 days. The platform replaced a manual spreadsheet-based compliance process, reducing audit preparation time by an estimated 60%.",
    timeline: "55 days",
    year: "2026",
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Docker"],
    gradient: "from-signal-wash/50 via-signal-tint to-canvas-alt",
    pattern: "circles",
    conceptProject: false,
    projectUrl: "https://grc-demo-zeta.vercel.app/dashboard",
    thumbnailUrl: "/images/projects/grc-platform.jpg",
  },
  {
    slug: "snapgo-vehicle-pooling-service-website",
    title: "SnapGO — Vehicle Pooling Service",
    hook: "Making daily commutes cheaper and greener with shared rides",
    category: "Website",
    description: "SnapGO is a vehicle pooling platform that connects daily commuters traveling similar routes. We designed and built the marketing website to explain the service, build trust, and drive app downloads.",
    challenge: "Ride-sharing is a trust-heavy product. Users need to feel safe sharing rides with strangers. The website needed to communicate safety features, verified profiles, and community guidelines while keeping the tone friendly and approachable.",
    solution: "We built a conversion-focused landing experience with animated feature walkthroughs, a safety-first messaging hierarchy, and deep links to the mobile app. The design uses social proof (rider counts, testimonials, safety stats) to overcome trust barriers.",
    result: "The website launched as SnapGO's primary acquisition channel, supporting their beta launch across two cities.",
    timeline: "14 days",
    year: "2026",
    techStack: ["Next.js", "Tailwind CSS", "Vercel"],
    gradient: "from-signal-tint via-canvas-alt to-signal-wash/40",
    pattern: "grid",
    conceptProject: true,
    projectUrl: "https://snapgo.co.in/",
    thumbnailUrl: "/images/projects/snapgo-vehicle-pooling-service-website.jpg",
  },
  {
    slug: "shopify-website",
    title: "Pictor — Shopify E-Commerce Store",
    hook: "An Australian art supplies brand moved from wholesale to direct-to-consumer",
    category: "Website",
    description: "Pictor is an Australian art and office supplies brand. We designed and developed a custom Shopify store that enabled their transition from wholesale-only to a direct-to-consumer e-commerce model.",
    challenge: "Pictor had decades of wholesale experience but zero DTC infrastructure. They needed a store that could handle their full product catalog, integrate with their existing inventory system, and feel premium enough to justify retail pricing.",
    solution: "We built a custom Shopify theme with advanced product filtering, collection-based navigation, and a streamlined checkout optimized for Australian shipping zones. The design balances product density (large catalog) with visual clarity.",
    result: "Launched in 60 days. The store opened a new revenue stream that previously didn't exist, enabling Pictor to sell directly to artists and schools for the first time.",
    timeline: "60 days",
    year: "2026",
    techStack: ["Shopify", "Liquid", "JavaScript"],
    gradient: "from-ink-500 via-canvas-alt to-signal-wash/60",
    pattern: "dots",
    conceptProject: true,
    projectUrl: "https://pictor.com.au/",
    thumbnailUrl: "/images/projects/shopify-website.jpg",
  },
];


export const PROJECT_FILTERS = ["All", "Websites", "Design", "Mobile", "CRM", "AI", "MVP"] as const;

export const LEADERSHIP_MEMBERS: LeadershipMember[] = [
  {
    name: "Anshul Shekhar",
    roleBadge: "Founder & CEO",
    description: "I lead go-to-market strategy, brand partnerships, and growth initiatives at Vaxalor. My work centers on building scalable acquisition systems that accelerate testing, lower customer acquisition costs, and improve campaign velocity.",
    linkedinUrl: "https://www.linkedin.com/in/anshul-shekhar-/",
    image: "/images/team/anshul.png",
  },
  // {
  //   name: "Pushpak Goel",
  //   roleBadge: "Co-founder & CIO",
  //   description: "I lead Vaxalor's product vision and long-term strategy, building digital products with soul that enable brands to scale. My focus is on combining automation, creative workflows, and high-performance engineering into one unified system.",
  //   linkedinUrl: "https://www.linkedin.com/in/pushpakgoel56/",
  //   image: "/images/team/pushpak.png",
  // },
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
