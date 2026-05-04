import type { NavLink, Service, ServiceCatalogCategory, ProcessStep, Testimonial, Stat, SocialLink, Project, TeamMember, LeadershipMember, Value } from "@/types";

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
    ctaText: "Learn more →",
    ctaHref: "/services/website-development",
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
    ctaText: "Learn more →",
    ctaHref: "/services/design-and-posters",
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
    ctaText: "Learn more →",
    ctaHref: "/services/mobile-applications",
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
    ctaText: "Learn more →",
    ctaHref: "/services/erp-crm-solutions",
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
    ctaText: "Learn more →",
    ctaHref: "/services/ai-chatbots",
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
    ctaText: "Learn more →",
    ctaHref: "/services/mvp-development",
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

export interface ServicePage {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  heroImage?: string;
  process: { step: string; title: string; description: string; days: string }[];
  features: string[];
  caseStudy?: {
    client: string;
    challenge: string;
    solution: string;
    result: string;
    quote?: string;
  };
  faq: { q: string; a: string }[];
}

export const SERVICE_PAGES: ServicePage[] = [
  {
    slug: "website-development",
    title: "Website Development",
    tagline: "Custom websites that look incredible and actually bring in customers.",
    description: "No templates, no shortcuts — every website we build is handcrafted for your business, optimized for speed, SEO, and conversions. Shipped in 20 days.",
    process: [
      { step: "01", title: "Discovery Call", description: "We learn your business, goals, audience, and competitors. One conversation, no fluff.", days: "Day 1" },
      { step: "02", title: "Wireframes & Design", description: "We design every page in Figma. You approve the look before we write a single line of code.", days: "Day 2-5" },
      { step: "03", title: "Development", description: "We build with Next.js, Tailwind CSS, and modern tech. Daily progress updates so you're never in the dark.", days: "Day 6-16" },
      { step: "04", title: "Testing & Launch", description: "We test on every device, optimize performance, and launch. You get a site that works beautifully from day one.", days: "Day 17-20" },
    ],
    features: ["Custom responsive design", "SEO-optimized from day one", "Lightning-fast loading (90+ Lighthouse)", "CMS integration for easy updates", "Analytics and conversion tracking", "SSL certificate and security hardening"],
    caseStudy: {
      client: "FreshBite Restaurant",
      challenge: "A popular local restaurant with zero online presence was losing customers to competitors with modern websites and online ordering.",
      solution: "We built a mobile-first website with integrated menu browsing, online ordering, and reservation booking — all shipped in 14 days.",
      result: "Online orders accounted for 35% of total revenue within the first month. Mobile traffic increased by 280%.",
      quote: "They redesigned our entire online presence and our lead generation doubled. Best investment we've made this year.",
    },
    faq: [
      { q: "How long does it take?", a: "20 days maximum. Most websites ship in 14-18 days." },
      { q: "Do I need to provide content?", a: "We can work with what you have. We'll guide you on what's needed and can help write copy if needed." },
      { q: "Can I update the website myself?", a: "Yes. We integrate a CMS so you can edit text, images, and blog posts without touching code." },
      { q: "What if I don't like the design?", a: "You approve designs before development starts. If you hate the first draft, we redo it free." },
    ],
  },
  {
    slug: "design-and-posters",
    title: "Design & Posters",
    tagline: "Visual design that captures attention and communicates with clarity.",
    description: "From brand identity to marketing materials — we design everything your business needs to look professional, consistent, and memorable.",
    process: [
      { step: "01", title: "Brand Brief", description: "We understand your vision, values, audience, and competitors.", days: "Day 1" },
      { step: "02", title: "Concepts & Moodboards", description: "We explore 2-3 directions with moodboards and initial concepts.", days: "Day 2-4" },
      { step: "03", title: "Design Refinement", description: "We refine the chosen direction into polished, pixel-perfect deliverables.", days: "Day 5-12" },
      { step: "04", title: "Final Delivery", description: "All files delivered in every format you need — print, web, social media.", days: "Day 13-15" },
    ],
    features: ["Complete brand identity systems", "UI/UX design for web and mobile", "Marketing materials and collateral", "Social media graphics and templates", "Print-ready poster and flyer design", "Brand guidelines document"],
    faq: [
      { q: "What do I get?", a: "Logo, brand colors, typography, business cards, social templates, and a brand guidelines PDF." },
      { q: "How many revisions?", a: "Unlimited revisions until you're happy. No extra charge." },
      { q: "Can you design for print?", a: "Yes. We deliver print-ready files (CMYK, bleed marks, correct DPI)." },
    ],
  },
  {
    slug: "mobile-applications",
    title: "Mobile Applications",
    tagline: "Your app, on every phone, ready in 20 days.",
    description: "Cross-platform mobile apps built with React Native or Flutter. Native-quality experiences without the native price tag.",
    process: [
      { step: "01", title: "Requirements & UX", description: "We map out user flows, screens, and features. Nothing starts without clarity.", days: "Day 1-3" },
      { step: "02", title: "UI Design", description: "Every screen designed in Figma. You see exactly what your app will look like.", days: "Day 4-7" },
      { step: "03", title: "Development", description: "We build with React Native for iOS + Android from one codebase. Daily builds for you to test.", days: "Day 8-17" },
      { step: "04", title: "Testing & Store Submit", description: "We test on real devices, fix edge cases, and submit to App Store + Play Store.", days: "Day 18-20" },
    ],
    features: ["iOS & Android from a single codebase", "Offline support and push notifications", "App Store and Play Store deployment", "Backend API integration", "Analytics and crash reporting", "Post-launch support and updates"],
    faq: [
      { q: "iOS and Android?", a: "Yes. We build cross-platform with React Native or Flutter — one codebase, both stores." },
      { q: "Do you handle App Store submission?", a: "Yes. We handle the entire submission process including screenshots and descriptions." },
      { q: "What about backend?", a: "We build the backend API too. Everything you need, end to end." },
    ],
  },
  {
    slug: "erp-crm-solutions",
    title: "ERP & CRM Solutions",
    tagline: "Business tools that actually fit your workflow.",
    description: "Custom dashboards, workflow automation, and analytics — built around how your team really works, not a generic template.",
    process: [
      { step: "01", title: "Workflow Audit", description: "We sit with your team and understand how you actually work. Every pain point, every bottleneck.", days: "Day 1-3" },
      { step: "02", title: "System Design", description: "We design the data model, dashboards, and user flows. You sign off before we build.", days: "Day 4-7" },
      { step: "03", title: "Development", description: "We build modular, scalable systems. Daily demos so you can course-correct in real time.", days: "Day 8-17" },
      { step: "04", title: "Training & Launch", description: "We train your team, migrate your data, and go live with zero downtime.", days: "Day 18-20" },
    ],
    features: ["Custom dashboards with real-time data", "Workflow automation that saves hours", "Advanced analytics and reporting", "Role-based access control", "Data import/export and integrations", "Mobile-friendly interface"],
    caseStudy: {
      client: "BuildCRM",
      challenge: "A growing B2B company was managing 500+ leads across 3 different spreadsheets. Deals were falling through the cracks.",
      solution: "We built a custom CRM with a visual sales pipeline, automated lead scoring, and one-click reporting.",
      result: "Lead response time dropped by 60%. The team closed 40% more deals in the first quarter.",
    },
    faq: [
      { q: "Can it integrate with our existing tools?", a: "Yes. We build integrations with email, Slack, accounting software, and more." },
      { q: "Is it customizable after launch?", a: "Absolutely. We build modular systems so you can add features as you grow." },
    ],
  },
  {
    slug: "ai-chatbots",
    title: "AI Chatbots & Solutions",
    tagline: "A chatbot that handles your customer questions 24/7 — so you don't have to.",
    description: "Smart AI solutions powered by OpenAI and custom models. From customer support to lead capture to internal tools.",
    process: [
      { step: "01", title: "Use Case Definition", description: "We identify exactly where AI adds value in your business. No hype, just practical impact.", days: "Day 1-2" },
      { step: "02", title: "Training & Design", description: "We train the model on your data, design the conversation flows, and build the UI.", days: "Day 3-8" },
      { step: "03", title: "Integration", description: "We plug the chatbot into your website, app, or internal tools. Works with your existing stack.", days: "Day 9-15" },
      { step: "04", title: "Testing & Optimization", description: "We test with real scenarios, tune responses, and optimize for accuracy.", days: "Day 16-20" },
    ],
    features: ["Natural language processing", "Integration with existing tools", "24/7 automated customer support", "Lead capture and qualification", "Analytics and conversation insights", "Continuous learning and improvement"],
    caseStudy: {
      client: "ShopAssist AI",
      challenge: "An e-commerce company was spending 6+ hours daily on repetitive customer support queries.",
      solution: "We built an AI chatbot that handles product recommendations, order tracking, and FAQ responses with 95% accuracy.",
      result: "The chatbot handles 80% of support tickets. Response time dropped from 4 hours to 8 seconds.",
      quote: "The AI chatbot they built handles 80% of our support tickets now. Our team can finally focus on what matters.",
    },
    faq: [
      { q: "How smart is it?", a: "Very. It uses GPT-4 level models fine-tuned on your specific data. It learns from every conversation." },
      { q: "Can it capture leads?", a: "Yes. It naturally collects contact info during conversations and sends it to your CRM." },
    ],
  },
  {
    slug: "mvp-development",
    title: "MVP Development",
    tagline: "Test your idea without burning through your savings.",
    description: "We build your MVP in 20 days at 50% off — just enough to validate, pitch to investors, and start growing. No bloat, no over-engineering.",
    process: [
      { step: "01", title: "Idea Validation", description: "We challenge your assumptions, identify the core value proposition, and define the minimum viable scope.", days: "Day 1-2" },
      { step: "02", title: "Rapid Prototyping", description: "We design key screens and user flows. You see a clickable prototype before we code.", days: "Day 3-5" },
      { step: "03", title: "Sprint Build", description: "We build the core features — nothing more, nothing less. Ship fast, learn fast.", days: "Day 6-17" },
      { step: "04", title: "Launch & Learn", description: "We deploy, set up analytics, and help you read the data. Your MVP is live and learning.", days: "Day 18-20" },
    ],
    features: ["20-day guaranteed delivery", "50% discount on development", "Iterative, feedback-driven approach", "Investor-ready product and pitch deck", "Built-in analytics from day one", "Post-launch iteration support"],
    caseStudy: {
      client: "TrackFlow",
      challenge: "A first-time founder needed to validate a project management concept and pitch to investors, but had no technical co-founder.",
      solution: "We built a fully functional MVP with Kanban task boards, team management, and analytics dashboards in 20 days at 50% off.",
      result: "The founder used the MVP to close a $200K pre-seed round. The product now has 400+ active users in private beta.",
      quote: "We went from idea to a working product in 18 days. The speed and quality were honestly unbelievable.",
    },
    faq: [
      { q: "What counts as an MVP?", a: "The smallest version of your product that delivers core value. We help you define what to build and what to skip." },
      { q: "Why 50% off?", a: "Because we believe in startups. A cheaper MVP means more runway for you to grow." },
      { q: "What happens after launch?", a: "We offer post-launch iteration packages. Or you can take the code and run — it's yours." },
    ],
  },
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
  {
    slug: "brand-identity-vaxalor",
    title: "Vaxalor Branding",
    hook: "A premium digital agency needed a brand identity that matched their code quality.",
    category: "Design",
    description:
      "A complete brand identity system including logo design, color palette, typography selection, and social media templates.",
    challenge:
      "Creating a brand that feels high-end, fast, and reliable while standing out in a crowded market of digital agencies.",
    solution:
      "We designed a minimalist, signal-blue aesthetic with technical typography and glassmorphic elements to convey speed and premium quality.",
    result:
      "A cohesive brand identity that perfectly communicates 'Building digital products with soul'.",
    timeline: "Shipped in 7 days",
    year: "2026",
    techStack: ["Figma", "Illustrator", "Photoshop"],
    gradient: "from-ink-500 via-canvas-alt to-signal-wash/60",
    pattern: "grid",
    conceptProject: true,
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
