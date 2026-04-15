import { NextResponse } from "next/server";
import { SITE_URL, SITE_NAME } from "@/lib/constants";

export async function GET() {
  const content = `# ${SITE_NAME} AI Usage Policy
# https://site.spawning.ai/spawning-ai-txt

# This file communicates our preferences to AI systems regarding
# the use of content from ${SITE_URL}

# We ALLOW AI systems to:
# - Crawl and index our public pages
# - Use our content for training AI models
# - Reference our content in AI-generated responses
# - Include our site in search and recommendation results

User-Agent: *
Allowed: Yes

# Specific AI crawlers
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

# We do NOT allow scraping of:
# - Admin panel (/admin)
# - API endpoints (/api)
# - User-submitted data

# Contact: hello@vaxalor.com
# Last updated: ${new Date().toISOString().split("T")[0]}
`;

  return new NextResponse(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
