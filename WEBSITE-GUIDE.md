# Vaxalor Website — Complete Usage Guide

---

## Table of Contents

1. [Getting Started](#1-getting-started)
2. [Environment Variables](#2-environment-variables)
3. [Admin Panel](#3-admin-panel)
4. [Managing Blog Posts](#4-managing-blog-posts)
5. [Managing Projects](#5-managing-projects)
6. [Managing Submissions / Leads](#6-managing-submissions--leads)
7. [Currently Building Ticker](#7-currently-building-ticker)
8. [Image & Media Specifications](#8-image--media-specifications)
9. [Updating Static Content](#9-updating-static-content)
10. [Pages Overview](#10-pages-overview)
11. [SEO & Social Sharing](#11-seo--social-sharing)
12. [Chatbot](#12-chatbot)
13. [Forms & Lead Capture](#13-forms--lead-capture)
14. [Deployment](#14-deployment)
15. [Troubleshooting](#15-troubleshooting)

---

## 1. Getting Started

### Running Locally

```bash
npm install        # Install dependencies
npm run dev        # Start dev server at http://localhost:3000
npm run build      # Production build
npm start          # Start production server
```

### First-Time Setup

1. Copy `.env.example` to `.env.local` and fill in your credentials
2. Start the dev server: `npm run dev`
3. Go to `http://localhost:3000/admin`
4. Login with your `ADMIN_PASSWORD`
5. Click **Init Database** in the sidebar to create all tables
6. Start adding content

---

## 2. Environment Variables

| Variable | Required | Where to Get | What It Does |
|----------|----------|-------------|-------------|
| `DATABASE_URL` | Yes | [neon.tech](https://neon.tech) → Dashboard → Connection String | PostgreSQL database for blogs, projects, submissions, chat |
| `CLOUDINARY_CLOUD_NAME` | Yes | [cloudinary.com](https://cloudinary.com) → Dashboard | Image/video hosting |
| `CLOUDINARY_API_KEY` | Yes | Cloudinary → Settings → API Keys | Authentication for uploads |
| `CLOUDINARY_API_SECRET` | Yes | Cloudinary → Settings → API Keys | Authentication for uploads |
| `ADMIN_PASSWORD` | Yes | You choose | Password to access `/admin` panel |
| `JWT_SECRET` | Yes | Any random 32+ character string | Signs admin login tokens. Example: `k8m2x9p4v7n1j6w3q5r8t0y2u4i6o8a` |
| `OPENAI_API_KEY` | Optional | [platform.openai.com](https://platform.openai.com) → API Keys | Powers the AI chatbot. Without it, chatbot uses smart fallback responses |
| `RESEND_API_KEY` | Optional | [resend.com](https://resend.com) → API Keys | Sends email notifications when forms are submitted |
| `RESEND_FROM_EMAIL` | Optional | Default: `Vaxalor <onboarding@resend.dev>` | Sender address. Change to your domain after verifying on Resend |
| `NEXT_PUBLIC_SITE_URL` | Yes | Your domain | `http://localhost:3000` for dev, `https://vaxalor.com` for production |

### Security Notes
- **Never commit `.env.local`** — it's already in `.gitignore`
- **Change `ADMIN_PASSWORD`** from `changeme` to something strong before deploying
- **Change `JWT_SECRET`** from the placeholder to a random string

---

## 3. Admin Panel

### Access
- URL: `/admin`
- Login with `ADMIN_PASSWORD` from your `.env.local`
- Session lasts 24 hours (JWT cookie)

### Dashboard (`/admin/dashboard`)
Shows at-a-glance stats: blog post count, project count, submission count. Plus quick action buttons and recent leads.

### Navigation
Persistent sidebar with links to: Dashboard, Blog Posts, Projects, Submissions, Ticker.

### Init Database
Click **Init Database** in the sidebar bottom to create/update all tables. Safe to run multiple times — uses `CREATE TABLE IF NOT EXISTS`.

---

## 4. Managing Blog Posts

### Creating a Post
1. Go to `/admin/blogs` → **+ New Post**
2. Fill in:
   - **Title** — auto-generates slug
   - **Slug** — URL-friendly identifier (e.g., `how-much-does-a-website-cost`)
   - **Category** — General, Strategy, Business, Tips, Engineering
   - **Read Time** — e.g., "5 min"
   - **Author** — defaults to "Vaxalor Team"
   - **Excerpt** — short summary shown on the listing page
   - **Featured** — check to highlight on the blog listing
   - **Published** — check to make visible to public

### Content Blocks
Add content using these block types:

| Block | What It Does | Tips |
|-------|-------------|------|
| **Paragraph** | Regular text | Keep paragraphs under 4 sentences |
| **Heading** | Section heading (H2, H3, H4) | Use H2 for main sections, H3 for subsections |
| **Image** | Full-width image with caption | Upload via Cloudinary button or paste URL. Always add alt text for SEO |
| **Video** | Embedded video | Paste YouTube/Vimeo URL (auto-embeds) or upload MP4 to Cloudinary |
| **Quote** | Blockquote with attribution | Great for client quotes or key takeaways |

### Block Management
- **Reorder** — up/down arrows (visible on hover)
- **Insert** — "+" button to add a block between existing blocks
- **Delete** — "×" button (can't delete the last remaining block)

### Thumbnail
Upload a featured image for the blog listing. Shown on the blog card and at the top of the post.

### SEO
Optional meta title and description. If left blank, defaults to the post title and excerpt.

---

## 5. Managing Projects

### Creating a Project
1. Go to `/admin/projects` → **+ New Project**
2. Fill in:
   - **Title** — project name
   - **Slug** — URL identifier
   - **Category** — Website, Mobile, AI, MVP, CRM
   - **Hook** — one compelling sentence (shown on project cards)
   - **Description** — full project description
   - **Timeline** — e.g., "Shipped in 14 days"
   - **Year** — e.g., "2026"
   - **Tech Stack** — comma-separated: `Next.js, Tailwind, PostgreSQL`
   - **Live Project URL** — link to the live site (shows "Visit Live Site" button)
   - **Display Order** — lower numbers appear first
   - **Featured** — highlight on the work page
   - **Concept Project** — check if it's not a real client project
   - **Published** — make visible to public

### Case Study
Fill in Challenge, Solution, and Result fields. Use specific numbers in the Result ("35% increase in revenue").

### Visual Settings
- **Card Pattern** — dots, grid, waves, or circles (shown when no thumbnail)
- **Gradient Preset** — 4 color gradient options for the card background
- **Thumbnail** — upload a project screenshot (replaces the gradient pattern)

---

## 6. Managing Submissions / Leads

### Viewing Leads
Go to `/admin/submissions` to see all form submissions.

### Sources
Each submission is tagged with its source:

| Source | Where It Came From |
|--------|-------------------|
| `contact` | Homepage CTA form or Contact page form |
| `popup` | Entry popup that appears on page load |
| `newsletter` | Footer email form |
| `cta-band` | Email-only CTA band |

### Data Stored
Name, email, phone, service interest, budget range, message, source, timestamp.

### Email Notifications
If `RESEND_API_KEY` is configured, you'll receive an email at `official@vaxalor.com` for every submission.

---

## 7. Currently Building Ticker

### What It Is
A scrolling strip at the top of the homepage showing what you're actively building.

### Managing
1. Go to `/admin/ticker`
2. **+ Add Project** — add a new ticker item
3. Set: project description, current day, total days
4. **Active/Hidden toggle** — show or hide without deleting
5. **Save All** to apply changes

### Where It Appears
- Homepage — dark scrolling marquee at the top
- Portfolio section — "Currently building" card
- Work page — "Currently building" card

---

## 8. Image & Media Specifications

### Recommended Image Sizes

| Location | Dimensions | Aspect Ratio | Format | Max Size | Notes |
|----------|-----------|--------------|--------|----------|-------|
| **Blog thumbnail** | 1200 × 630px | 1.9:1 | WebP or PNG | 500KB | Same ratio as social sharing cards |
| **Blog content image** | 1200 × auto | Any | WebP or PNG | 1MB | Full-width in the article body |
| **Blog content video** | 1920 × 1080px | 16:9 | MP4 or YouTube/Vimeo URL | 50MB | Or paste YouTube/Vimeo link |
| **Project thumbnail** | 1200 × 900px | 4:3 | WebP or PNG | 500KB | Shown on project cards |
| **Project hero (in modal)** | 1400 × 700px | 2:1 | WebP or PNG | 500KB | Top of the project detail |
| **Team photo** | 400 × 400px | 1:1 (square) | WebP or PNG | 200KB | Grayscale by default, color on hover |
| **About page story image** | 800 × 600px | 4:3 | WebP or PNG | 500KB | Left column of the story section |
| **Hero logo** | 1200 × 1000px | ~6:5 | PNG (transparent bg) | 500KB | `public/images/vaxalor-hero-logo.png` |
| **Navbar logo** | 551 × 453px | ~6:5 | PNG (transparent bg) | 200KB | `public/images/logo.png` |
| **Favicon** | 32 × 32px | 1:1 | ICO | 10KB | Auto-generated from logo |
| **Apple touch icon** | 180 × 180px | 1:1 | PNG | 20KB | Auto-generated from logo |
| **OG social image** | 1200 × 630px | 1.9:1 | PNG | 100KB | `public/images/og-image.png` |
| **Mascot** | 596 × 419px | ~3:2 | PNG (transparent bg) | 200KB | `public/images/mascot.png` |

### Image Best Practices
- **Always use WebP** for photographs — 30-50% smaller than PNG/JPEG
- **Use PNG** only for images that need transparency (logos, mascot)
- **Compress before uploading** — use [squoosh.app](https://squoosh.app) or [tinypng.com](https://tinypng.com)
- **Always add alt text** — for SEO and accessibility
- **Use Cloudinary upload** in admin panel — it auto-optimizes quality and format

### Video Guidelines
- **YouTube/Vimeo links** are preferred — no storage cost, auto-adaptive quality
- **Direct video uploads** go to Cloudinary — max 50MB per file
- **Supported formats**: MP4, WebM, QuickTime
- **Recommended resolution**: 1080p (1920×1080)
- **Keep videos under 60 seconds** for blog content

---

## 9. Updating Static Content

Some content is hardcoded in source files (not managed via admin panel):

### File: `src/lib/constants.ts`

| Content | What to Edit | Section |
|---------|-------------|---------|
| **Testimonials** | `TESTIMONIALS` array | Quote, author name, title. Replace fictional ones with real client quotes. |
| **Stats** | `STATS` array | Numbers on the homepage (50+, 20, 98%). Use honest numbers. |
| **Team members** | `TEAM_MEMBERS` array | Name, role, one-liner. Add `image` field for photos. |
| **Values** | `VALUES` array | 3 company values on the About page. |
| **Services** | `SERVICES` array | 6 service cards on homepage + services page. |
| **Service detail pages** | `SERVICE_PAGES` array | Process steps, features, case studies, FAQs for each `/services/[slug]` page. |
| **Social links** | `SOCIAL_LINKS` array | LinkedIn, Twitter, Instagram, Facebook URLs. |
| **Site info** | `SITE_NAME`, `SITE_EMAIL`, `SITE_URL` | Company name, email, website URL. |

### Adding Team Photos
1. Place square photos in `public/images/` (e.g., `public/images/team-abhinav.jpg`)
2. Edit `TEAM_MEMBERS` in `src/lib/constants.ts`:
```ts
{
  name: "Abhinav Rastogi",
  role: "Founder & Lead Developer",
  oneLiner: "Obsessed with shipping fast.",
  image: "/images/team-abhinav.jpg",  // ← add this line
}
```
3. Update the TeamSection component to use the `image` field

### Updating the About Page Story Image
1. Place image in `public/images/` (e.g., `public/images/team-photo.jpg`)
2. Edit `src/components/sections/about/OurStory.tsx`
3. Replace the gradient placeholder `<div>` with:
```tsx
<Image src="/images/team-photo.jpg" alt="Our team" fill className="object-cover rounded-card" />
```

---

## 10. Pages Overview

### Public Pages

| Route | Page | Content Source |
|-------|------|---------------|
| `/` | Homepage | 10 sections, mix of constants + DB |
| `/services` | Services listing | `SERVICES` in constants |
| `/services/[slug]` | Individual service (6 pages) | `SERVICE_PAGES` in constants |
| `/work` | Portfolio / Work | DB (`projects` table) + constants fallback |
| `/blog` | Blog listing | DB (`blogs` table) + fallback posts |
| `/blog/[slug]` | Blog post detail | DB |
| `/about` | About page | Constants (`TEAM_MEMBERS`, `VALUES`) |
| `/contact` | Contact form | Submits to DB via API |
| `/faq` | FAQ (16 questions) | Hardcoded in page file |
| `/privacy` | Privacy policy | Hardcoded in page file |
| `/terms` | Terms of service | Hardcoded in page file |

### Admin Pages

| Route | Page |
|-------|------|
| `/admin` | Login |
| `/admin/dashboard` | Dashboard with stats |
| `/admin/blogs` | Blog post list |
| `/admin/blogs/new` | Create blog post |
| `/admin/blogs/[slug]/edit` | Edit blog post |
| `/admin/projects` | Project list |
| `/admin/projects/new` | Create project |
| `/admin/projects/[slug]/edit` | Edit project |
| `/admin/submissions` | View form submissions |
| `/admin/ticker` | Manage "Currently Building" ticker |

### Static Files

| Route | File |
|-------|------|
| `/robots.txt` | Crawler rules (blocks /admin, /api) |
| `/sitemap.xml` | All public routes |
| `/ai.txt` | AI crawler policy |

---

## 11. SEO & Social Sharing

### Per-Page Metadata
Every page has unique `<title>` and `<meta description>`. Configured in each `page.tsx` file's `metadata` export.

### OG Image
Located at `public/images/og-image.png` (1200×630). Shown when someone shares any page on LinkedIn, Twitter, WhatsApp, Slack.

To replace: create a new 1200×630 image and overwrite `public/images/og-image.png`.

### JSON-LD
Structured data in the root layout tells Google:
- Organization name, logo, email
- 6 services offered
- Social profile links

### robots.txt
- Allows all public pages
- Blocks `/admin` and `/api`
- Explicitly allows AI crawlers (GPTBot, ClaudeBot, Google-Extended)

### ai.txt
Separate file for AI crawler policy. Currently allows all AI training. To block, change `Allowed: Yes` to `Allowed: No`.

---

## 12. Chatbot

### How It Works
- **With `OPENAI_API_KEY`**: Uses GPT-4o-mini with a system prompt that knows Vaxalor's services, pricing, and process. Real conversational AI.
- **Without API key**: Smart keyword-matching fallback. Handles greetings, pricing, timeline, service-specific questions, and contact requests.

### Lead Capture
If a user types an email address in any message, it's automatically extracted and saved to the `chat_leads` table.

### Conversation History
All messages (user + AI) are saved to `chat_conversations` table, grouped by session ID.

### Quick Replies
Three buttons shown before the user's first message: "What do you build?", "How fast?", "Pricing?"

### Cost
GPT-4o-mini costs ~$0.01-0.03 per conversation. At 100 conversations/day, that's ~$1-3/day.

---

## 13. Forms & Lead Capture

### All Form Locations

| Form | Page | Fields Required | Stored In |
|------|------|----------------|-----------|
| Entry popup | Every page (3s delay) | Name*, Email*, Phone* | `submissions` table |
| Homepage CTA | Homepage bottom | Name*, Email*, Phone*, Service* | `submissions` table |
| Contact page | `/contact` | Name*, Email*, Phone*, Service*, Budget, Message | `submissions` table |
| Footer form | Every page | Name*, Email*, Phone* | `submissions` table |
| Chatbot | Every page | Email (auto-detected) | `chat_leads` table |

### Entry Popup Behavior
- Shows 3 seconds after page load
- Dismissed for the rest of the browser session
- Reappears on page refresh or new tab
- Submissions tagged as source: `popup`

### Email Notifications
Every form submission sends an email to `official@vaxalor.com` (if Resend is configured).

---

## 14. Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com) → Import project
3. Add all environment variables from `.env.local` to Vercel's Environment Variables settings
4. **Change `NEXT_PUBLIC_SITE_URL`** to `https://vaxalor.com`
5. Deploy

### Post-Deployment Checklist
- [ ] Verify all pages load correctly
- [ ] Test contact form submission
- [ ] Test chatbot
- [ ] Test admin login at `/admin`
- [ ] Click "Init Database" in admin
- [ ] Share a page URL on LinkedIn/Twitter — verify OG image appears
- [ ] Run [Lighthouse](https://web.dev/measure/) audit
- [ ] Submit sitemap to [Google Search Console](https://search.google.com/search-console)
- [ ] Test on mobile (iPhone Safari, Android Chrome)

### Custom Domain
1. In Vercel → Project → Settings → Domains
2. Add `vaxalor.com`
3. Update DNS records as instructed
4. Update `NEXT_PUBLIC_SITE_URL` to `https://vaxalor.com`

---

## 15. Troubleshooting

### "Database table does not exist"
Go to `/admin` → click **Init Database**. This creates all tables.

### Admin login not working
Check `ADMIN_PASSWORD` in `.env.local`. Restart dev server after changing env vars.

### Images not loading from Cloudinary
Check `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET` in `.env.local`.

### Chatbot not responding
Without `OPENAI_API_KEY`, the chatbot uses fallback responses. This is normal. Add the key for full AI.

### Forms not sending emails
Check `RESEND_API_KEY` in `.env.local`. Without it, submissions still save to DB but no email is sent.

### OG image not showing when shared
1. Check `public/images/og-image.png` exists
2. Verify `NEXT_PUBLIC_SITE_URL` is correct
3. Use [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) to refresh cache

### Build errors after pulling changes
```bash
rm -rf .next node_modules
npm install
npm run build
```

### Custom cursor not visible
The cursor is Signal-blue — it's visible on both light and dark backgrounds. If you still can't see it, check if you're on a touch device (cursor is hidden on mobile).

---

## Database Tables

| Table | Purpose | Managed Via |
|-------|---------|------------|
| `blogs` | Blog posts with JSONB content blocks | Admin → Blog Posts |
| `projects` | Portfolio projects | Admin → Projects |
| `submissions` | Form submissions from all contact forms | Admin → Submissions |
| `site_config` | Key-value store (ticker data, etc.) | Admin → Ticker |
| `chat_conversations` | Chatbot message history | Automatic |
| `chat_leads` | Emails captured from chatbot | Automatic |
| `newsletter` | Newsletter subscribers | Automatic |
| `analytics_events` | Page view events (not yet wired) | — |

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| 3D | React Three Fiber + Three.js |
| Smooth Scroll | Lenis |
| Database | Neon PostgreSQL |
| Media | Cloudinary |
| Email | Resend |
| AI Chatbot | OpenAI GPT-4o-mini |
| Auth | JWT (jsonwebtoken) |
| Forms | React Hook Form + Zod |
| Hosting | Vercel |

---

*Last updated: April 16, 2026*
*116 source files · 32 routes · 8 database tables*
