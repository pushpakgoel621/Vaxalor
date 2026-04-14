import { BlogPostClient } from "./BlogPostClient";

const FALLBACK_CONTENT: Record<string, {
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: { type: string; text?: string; level?: number; author?: string }[];
}> = {
  "how-much-does-a-website-cost-2026": {
    title: "How Much Does a Website Cost in 2026?",
    category: "Business",
    date: "2026-04-10",
    readTime: "6 min",
    excerpt: "A brutally honest breakdown of website costs.",
    content: [
      { type: "paragraph", text: "Let's cut through the noise. You've Googled 'how much does a website cost' and gotten answers ranging from $500 to $500,000. That's not helpful. Here's the real breakdown." },
      { type: "heading", text: "The three tiers of websites", level: 2 },
      { type: "paragraph", text: "Template sites ($500-$2,000): You pick a theme, swap in your logo and text, and call it done. Fine for a personal blog. Terrible for a business that wants to stand out." },
      { type: "paragraph", text: "Custom-built sites ($3,000-$15,000): Designed from scratch, built with modern tech, optimized for your specific goals. This is where most small businesses and startups should be." },
      { type: "paragraph", text: "Enterprise platforms ($20,000+): Complex systems with custom integrations, dashboards, user management, and scale requirements. Think SaaS products, not brochure sites." },
      { type: "heading", text: "What you're actually paying for", level: 2 },
      { type: "paragraph", text: "The cost of a website isn't the code — it's the thinking. Discovery, strategy, design decisions, content architecture, performance optimization, SEO foundation. A developer who charges $3,000 and a developer who charges $10,000 might write similar code. The difference is in the decisions they make about what to build and why." },
      { type: "quote", text: "The most expensive website is the one you have to rebuild in 6 months because it was done wrong the first time.", author: "Every agency founder, eventually" },
      { type: "heading", text: "Our approach at Vaxalor", level: 2 },
      { type: "paragraph", text: "We build custom websites in 20 days at prices that don't require a second mortgage. No templates, no shortcuts. And if you're building an MVP, you get 50% off. Because we'd rather build something great at a fair price than something mediocre at a premium one." },
    ],
  },
};

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let post = null;
  try {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
    const res = await fetch(`${baseUrl}/api/blogs/${slug}`, {
      cache: "no-store",
    });
    if (res.ok) {
      const data = await res.json();
      post = data.blog;
    }
  } catch {
    // Fall through to fallback
  }

  if (!post) {
    const fallback = FALLBACK_CONTENT[slug];
    if (fallback) {
      post = {
        title: fallback.title,
        slug,
        category: fallback.category,
        read_time: fallback.readTime,
        excerpt: fallback.excerpt,
        author: "Vaxalor Team",
        created_at: fallback.date,
        content: fallback.content,
        thumbnail_url: null,
      };
    } else {
      post = {
        title: slug.split("-").map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(" "),
        slug,
        category: "Blog",
        read_time: "3 min",
        excerpt: "",
        author: "Vaxalor Team",
        created_at: "2026-04-01",
        content: [
          { type: "paragraph", text: "This article is currently being written. Check back soon for the full piece." },
          { type: "paragraph", text: "In the meantime, explore our other articles or get in touch to learn how Vaxalor can help your business grow." },
        ],
        thumbnail_url: null,
      };
    }
  }

  return <BlogPostClient post={post} />;
}
