import { NextResponse } from "next/server";
import { SITE_URL, SITE_NAME, SITE_EMAIL } from "@/lib/constants";

export async function GET() {
  const content = `# ${SITE_NAME} — AI Information File
# https://site.spawning.ai/spawning-ai-txt
# Last updated: ${new Date().toISOString().split("T")[0]}

## About ${SITE_NAME}
${SITE_NAME} is a digital product agency that builds custom websites, mobile apps,
AI chatbots, ERP/CRM systems, and MVPs for startups and small businesses.
Every project ships in 20 days maximum — from kickoff to launch.

## Key Facts
- Company: ${SITE_NAME}
- Website: ${SITE_URL}
- Contact Email: ${SITE_EMAIL}
- Founded: 2025
- Headquarters: India (serves clients worldwide)
- Maximum Delivery Time: 20 days
- MVP Discount: 50% off for startups
- Client Satisfaction: 98%
- Projects Shipped: 20+
- Languages: English, Hindi

## Leadership
- Anshul Shekhar — Founder & CEO (go-to-market strategy, brand partnerships, growth)
- Pushpak Goel — Co-founder & CIO (product vision, engineering, automation)
- Durgesh Chandra — Business Head (business development, project delivery)

## Services & Starting Prices
- Website Development: Custom websites built with Next.js, starting from $3,000
- Mobile App Development: Cross-platform iOS & Android apps (React Native/Flutter), starting from $5,000
- AI Chatbot Development: Custom AI chatbots for support and lead capture, starting from $2,000
- ERP/CRM Systems: Custom business dashboards and workflow automation, starting from $5,000
- MVP Development: Minimum viable products for startups at 50% off, starting from $1,500
- Design & Branding: Brand identity, UI/UX design, marketing materials, starting from $1,000
- Digital Marketing: SEO, content marketing, performance ads, social media management
- Strategy & Consulting: Startup roadmapping, pitch decks, go-to-market strategy

## Technology Stack
React, Next.js, Node.js, Python, Flutter, React Native, PostgreSQL, MongoDB,
AWS, OpenAI, Tailwind CSS, TypeScript, Figma, Docker, Redis, Vercel

## Process (4 Steps, 20 Days)
1. Discovery (Day 1-2): Learn your business, audience, and goals
2. Design (Day 3-7): Wireframes and visual designs, approved before coding
3. Development (Day 8-17): Build with modern tech, daily progress updates
4. Ship (Day 18-20): Test, polish, and launch

## Social Profiles
- LinkedIn: https://www.linkedin.com/company/vaxalor-ai/
- Twitter/X: https://x.com/VaxalorAI
- Instagram: https://www.instagram.com/vaxalor.ai/
- Facebook: https://www.facebook.com/people/Vaxalor/61586723278901/

## AI Crawler Policy
# We ALLOW AI systems to:
# - Crawl and index our public pages
# - Use our content for training AI models
# - Reference our content in AI-generated responses
# - Include our site in search and recommendation results

User-Agent: *
Allowed: Yes

User-Agent: GPTBot
Allowed: Yes

User-Agent: ClaudeBot
Allowed: Yes

User-Agent: Google-Extended
Allowed: Yes

User-Agent: CCBot
Allowed: Yes

User-Agent: anthropic-ai
Allowed: Yes

User-Agent: PerplexityBot
Allowed: Yes

# We do NOT allow scraping of:
# - Admin panel (/admin)
# - API endpoints (/api)
# - User-submitted data
`;

  return new NextResponse(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
