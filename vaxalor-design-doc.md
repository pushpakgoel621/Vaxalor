# Vaxalor — Website Design Document
### Arctic Edge — Refined Edition
---

## Design System Summary

| Token | Value | Usage |
|-------|-------|-------|
| **Ink** | `#0F172A` | Headings, nav, footer, dark sections |
| **Signal** | `#1D5CBF` | CTAs, links, accents, interactive elements |
| **Canvas** | `#F8FAFC` | Page background, breathing space |
| Headline Font | Clash Display / Sora | Hero titles, section headings |
| Body Font | General Sans / Inter | Body text, captions, UI text |
| Border Radius | 10–12px | Cards, buttons, inputs |
| Section Gap | 140–180px | Vertical space between page sections |
| Card Padding | 28–36px | Internal card spacing |
| Max Content Width | 1200px | Centered container |

### Derived Shades Quick Reference

| Shade | Hex | Use |
|-------|-----|-----|
| Ink 100 | `#1E293B` | Body text |
| Ink 200 | `#334155` | Subtext |
| Ink 300 | `#64748B` | Muted / captions |
| Ink 400 | `#94A3B8` | Placeholders |
| Ink 500 | `#CBD5E1` | Disabled states |
| Signal Hover | `#0A3B8F` | Button hover |
| Signal Bright | `#3B8BF5` | Light accent |
| Signal Wash | `#DBEAFE` | Tag backgrounds |
| Signal Tint | `#EFF6FF` | Subtle highlight areas |
| Canvas White | `#FFFFFF` | Card surfaces |
| Canvas Alt | `#F1F5F9` | Alternate section bg |
| Canvas Border | `#E2E8F0` | All borders and dividers |

---

## Site Map — 5 Pages

```
Homepage (/)
Services (/services)
Work (/work)
About (/about)
Contact (/contact)
```

---

## Global Components (Present on Every Page)

### Navigation Bar

**Type:** Sticky, transparent on hero → solid white on scroll (with subtle backdrop blur)

**Layout:**
```
[Logo]                    [Services]  [Work]  [About]  [Contact]  [Let's Talk →]
```

- **Logo:** Vaxalor "VAi" logo, left-aligned
- **Nav Links:** Ink `#1E293B`, 15px, font-weight 500
- **Active Link:** Signal `#1D5CBF` with a small dot indicator below
- **Hover:** Text color transitions to Signal `#1D5CBF` (200ms ease)
- **CTA Button:** Signal `#1D5CBF` background, white text, 10px radius, 12px 24px padding
- **Mobile:** Hamburger icon (2 lines, Ink color). Opens a full-screen overlay with centered nav links, large text (28px), staggered fade-in animation (80ms per item)
- **Scroll Behavior:** After 80px scroll, nav gets `background: rgba(255,255,255,0.9)` + `backdrop-filter: blur(12px)` + `border-bottom: 1px solid #E2E8F0`
- **Height:** 72px desktop, 64px mobile

### Footer

**Type:** Dark section — full-width Ink `#0F172A` background

**Layout (4-column grid):**
```
Column 1: Logo + tagline + social icons
Column 2: Quick Links (Home, Services, Work, About, Contact)
Column 3: Services (Web Dev, AI Solutions, Mobile Apps, MVP)
Column 4: CTA block — "Ready to build?" + email input + button
```

**Design Details:**
- Tagline text: `#94A3B8` (Ink 300), 14px
- Link text: `#CBD5E1`, hover → `#FFFFFF` (200ms ease)
- Section headings: `#FFFFFF`, 13px, uppercase, letter-spacing 0.08em
- Social icons: 20px, `#64748B`, hover → Signal `#3B8BF5`
- CTA input: `#1E293B` background, `#334155` border, white text
- CTA button: Signal `#1D5CBF`, white text
- Bottom bar: 1px `#1E293B` divider, then "© 2026 Vaxalor. All rights reserved." in `#64748B`, 13px
- Padding: 80px top, 40px bottom
- Mobile: Single column stack, centered

### Custom Cursor (Desktop Only)

- Default: Thin Signal-blue ring (20px diameter, 1.5px stroke, no fill)
- Hover on interactive elements: Ring scales to 40px, fills with `rgba(29, 92, 191, 0.1)`
- Hover on CTA buttons: Ring scales to 50px, fills with `rgba(29, 92, 191, 0.15)`
- Click: Quick scale-down pulse (0.85 → 1.0, 150ms)
- Smooth follow: Use lerp (linear interpolation) so cursor trails the mouse by ~60ms
- Blend mode: `mix-blend-mode: difference` for visibility on all backgrounds
- Hide on mobile / touch devices

### AI Chatbot Widget

- Position: Bottom-right corner, fixed
- Floating Button: 56px circle, Signal `#1D5CBF`, white chat icon (24px)
- Subtle pulse animation: `box-shadow` ring expands and fades every 4 seconds
- On click: Chat window slides up (360px wide, 500px tall)
- Chat window header: Ink `#0F172A`, "Chat with Vaxalor AI" in white
- Message bubbles: User = Signal Tint `#EFF6FF`, AI = Canvas White `#FFFFFF` with `#E2E8F0` border
- Input: Bottom, white bg, `#E2E8F0` border, Signal send button
- Purpose: Doubles as a live demo of AI capabilities + support/lead capture

---

## Page 1: Homepage (/)

The homepage is the most critical page. It must accomplish three things in order:
1. **Impress** — Make the visitor stop and pay attention (0–3 seconds)
2. **Inform** — Clearly communicate what Vaxalor does (3–15 seconds)
3. **Convert** — Guide them toward filling out a contact form (15–60 seconds)

### Section 1: Hero

**Background:** Canvas `#F8FAFC` with a very faint dot grid pattern (2% opacity, 24px spacing)

**Layout:**
```
[Overline: small text]

[Hero Headline — 72px, bold]
[Hero Headline — second line]

[Subtext — 18px, muted]

[CTA Button Primary]  [CTA Button Secondary]

[Floating geometric shapes — abstract V-patterns, circles, dotted lines]
```

**Content:**
- **Overline:** "Digital products that ship fast" — Signal `#1D5CBF`, 13px, uppercase, letter-spacing 0.08em, font-weight 500
- **Headline:** "We build digital products with soul." — Ink `#0F172A`, 72px (desktop) / 40px (mobile), font-weight 700, letter-spacing -0.02em, line-height 1.1
- **Subtext:** "From websites to AI solutions — shipped in 20 days, built to last." — Ink 200 `#334155`, 18px, line-height 1.6, max-width 560px
- **Primary CTA:** "Start your project →" — Signal `#1D5CBF` bg, white text, 16px, 14px 32px padding, 10px radius
- **Secondary CTA:** "See our work" — Transparent bg, Ink `#0F172A` text, 1.5px `#E2E8F0` border, 10px radius
- **Hover on Primary CTA:** Background darkens to `#0A3B8F`, slight translateY(-2px)
- **Hover on Secondary CTA:** Background fills with `#F1F5F9`, border color transitions to `#CBD5E1`

**Floating Geometric Shapes (Background Decorations):**
- Abstract angular shapes derived from the logo's "V"
- Circles, dotted grids, thin diagonal lines
- Color: Signal Wash `#DBEAFE` at 40% opacity, and `#E2E8F0` at 30% opacity
- Animation: Very slow drift (parallax on scroll, slight float on idle, ~20s loop)
- Position: Scattered in the right half and top-right area, never overlapping text
- Purpose: This is the #1 anti-template element — makes the hero feel custom-crafted

**Spacing:** 180px top padding (below nav), 140px bottom padding

**Animation on Load:**
- Overline: fade-in + slide up 12px (delay 0ms, duration 500ms)
- Headline: fade-in + slide up 16px (delay 100ms, duration 600ms)
- Subtext: fade-in + slide up 12px (delay 250ms, duration 500ms)
- Buttons: fade-in + slide up 10px (delay 400ms, duration 400ms)
- Geometric shapes: fade-in at 60% (delay 600ms, duration 800ms)

---

### Section 2: Social Proof Bar

**Background:** Canvas White `#FFFFFF` with top and bottom 1px `#E2E8F0` borders

**Layout:**
```
"Trusted by startups and businesses worldwide"

[Logo 1]  [Logo 2]  [Logo 3]  [Logo 4]  [Logo 5]  [Logo 6]
```

**Design:**
- Label: Ink 300 `#64748B`, 13px, uppercase, letter-spacing 0.06em, centered
- Client logos: Grayscale, 40% opacity, hover → full color + 100% opacity (300ms ease)
- If no real logos yet, use text-based placeholders: company names in Ink 400 `#94A3B8`, 16px, font-weight 500
- Logos arranged in a horizontal row with 48px gaps, centered
- Auto-scroll on mobile (infinite horizontal marquee, slow speed)
- Padding: 40px top and bottom

**Scroll Animation:** Fade in + slide up 12px when entering viewport

---

### Section 3: Services Overview

**Background:** Canvas `#F8FAFC`

**Layout:**
```
[Overline: "What we create"]
[Section Title: "Services built for your growth"]
[Section Subtitle: one line of supporting text]

[Service Card 1]  [Service Card 2]  [Service Card 3]
[Service Card 4]  [Service Card 5]  [Service Card 6]
```

**Section Header:**
- Overline: Signal `#1D5CBF`, 13px, uppercase, tracking 0.08em
- Title: Ink `#0F172A`, 48px, font-weight 700, letter-spacing -0.01em
- Subtitle: Ink 200 `#334155`, 16px, max-width 520px
- All centered

**Service Cards (6 total):**
Grid: 3 columns desktop, 2 tablet, 1 mobile. Gap: 20px.

Each card:
- Background: `#FFFFFF`
- Border: 1px `#E2E8F0`
- Border-radius: 12px
- Padding: 28px
- **Number:** Signal `#1D5CBF`, 12px, font-weight 600, uppercase tracking, mono font → "01", "02", etc.
- **Title:** Ink `#0F172A`, 20px, font-weight 600, letter-spacing -0.01em
- **Description:** Ink 300 `#64748B`, 14px, line-height 1.6, 2–3 sentences max
- **Link:** Signal `#1D5CBF`, 14px, font-weight 500, "Learn more →"

**Card Hover:**
- Border color transitions to Signal Wash `#DBEAFE` (200ms)
- A 2px Signal `#1D5CBF` line grows from left to right under the title (300ms ease-out)
- Subtle translateY(-4px) lift
- No shadow — the lift + border change is enough

**The 6 Services:**
```
01 — Website Development
02 — Design & Posters
03 — Mobile Applications
04 — ERP & CRM Solutions
05 — AI Chatbots & Solutions
06 — MVP Development (with "50% off" badge)
```

**MVP Badge:** On the 6th card, a small pill badge next to the title:
- Background: Signal Tint `#EFF6FF`
- Text: Signal `#1D5CBF`, 11px, font-weight 500
- Content: "50% off"
- Border-radius: 20px
- Padding: 3px 10px

**Scroll Animation:** Cards stagger in — each one fades up with 80ms delay between siblings

---

### Section 4: Why Choose Us (USP Section)

**Background:** Ink `#0F172A` (DARK SECTION — first dramatic contrast break)

**Layout:**
```
[Overline: "Why Vaxalor"]
[Section Title: "We put our soul in development."]

[USP 1: Speed]        [USP 2: Quality]        [USP 3: Craft]

[Horizontal thin line divider]

[Stats Row: 50+ Projects  |  20 Day Delivery  |  98% Satisfaction]
```

**Section Header:**
- Overline: Signal Bright `#3B8BF5`, 13px, uppercase, tracking 0.08em
- Title: `#FFFFFF`, 48px, font-weight 700, letter-spacing -0.01em
- Centered

**USP Cards (3 across):**
- Background: `#1E293B` (slightly lighter than section bg)
- Border: 1px `#334155`
- Border-radius: 12px
- Padding: 32px
- **Icon area:** 48px circle, `#1E293B` bg with 1px `#334155` border, centered simple line icon inside (white, 24px, stroke-width 1.5)
- **Title:** `#FFFFFF`, 20px, font-weight 600
- **Description:** `#94A3B8`, 14px, line-height 1.6

**USP Content:**
```
Card 1 — "Ship in 20 days"
"We don't do months-long timelines. Your project ships in 20 days maximum. No exceptions."

Card 2 — "Obsessive quality"
"We work our asses off to deliver pixel-perfect quality. Every detail matters to us."

Card 3 — "Built with soul"
"We don't just write code. We craft digital experiences that feel alive and intentional."
```

**Stats Row:**
- Separated by thin vertical lines (`#334155`, 1px, 40px height)
- Numbers: `#FFFFFF`, 40px, font-weight 700, letter-spacing -0.02em
- Labels: `#64748B`, 12px, uppercase, tracking 0.06em
- **Number counter animation:** Count up from 0 when entering viewport (1.5s duration, ease-out deceleration)
- The "20" stat uses Signal `#3B8BF5` color to highlight it
- Horizontal layout, centered, 64px gaps

**Spacing:** 120px padding top and bottom

**Scroll Animation:** Entire section fades in. USP cards stagger (100ms each). Stats count up.

---

### Section 5: Featured Work / Portfolio Preview

**Background:** Canvas `#F8FAFC`

**Layout:**
```
[Overline: "Selected work"]
[Section Title: "Projects we're proud of"]     [View all work →]

[Project Card 1 — large, spans 7/12 cols]  [Project Card 2 — 5/12 cols]
[Project Card 3 — 5/12 cols]  [Project Card 4 — large, spans 7/12 cols]
```

**Section Header:**
- Left-aligned overline and title
- "View all work →" link right-aligned, Signal `#1D5CBF`, 15px, font-weight 500
- This asymmetry is an editorial design move — not everything needs to be centered

**Project Cards:**
- Background: `#FFFFFF`
- Border: 1px `#E2E8F0`
- Border-radius: 12px
- Overflow: hidden (image clips to card corners)
- **Image area:** Top 60% of card, full-width project screenshot/mockup. Subtle zoom (scale 1.0 → 1.05) on hover (400ms ease)
- **Content area:** Bottom 40%, padding 24px
  - **Project name:** Ink `#0F172A`, 20px, font-weight 600
  - **Category tag:** Signal Tint `#EFF6FF` bg, Signal `#1D5CBF` text, 11px, pill shape, font-weight 500
  - **One-liner:** Ink 300 `#64748B`, 14px

**Bento Grid Layout:**
- Row 1: Card 1 = 58.33% width, Card 2 = 41.67% width
- Row 2: Card 3 = 41.67% width, Card 4 = 58.33% width
- Gap: 20px
- Height: ~400px per row (desktop)
- Mobile: Full-width single column stack

**Note:** If portfolio is not yet populated, show 4 placeholder cards with abstract gradient thumbnails using the Signal color spectrum

**Scroll Animation:** Cards fade in + slide up, staggered

---

### Section 6: Process / How We Work

**Background:** Canvas Alt `#F1F5F9`

**Layout:**
```
[Overline: "Our process"]
[Section Title: "From idea to launch in 4 steps"]

Step 01              Step 02              Step 03              Step 04
Discovery            Design               Develop              Ship
[thin line connecting steps horizontally]
[Description]        [Description]        [Description]        [Description]
```

**Steps (horizontal timeline):**
- Connected by a thin 1px `#E2E8F0` horizontal line at the step number level
- **Step number:** Signal `#1D5CBF`, 13px, font-weight 600, mono font
- **Step title:** Ink `#0F172A`, 20px, font-weight 600
- **Description:** Ink 300 `#64748B`, 14px, line-height 1.6, 3 lines max
- **Active dot:** On the connecting line at each step, a 10px Signal `#1D5CBF` filled circle
- Mobile: Vertical timeline (line goes down left side, steps stacked)

**Step Content:**
```
01 — Discovery
"We learn your business, audience, and goals. No jargon. Just a real conversation."

02 — Design
"We create wireframes and visual designs. You approve before a single line of code."

03 — Develop
"We build with modern tech — fast, scalable, and clean. Daily progress updates."

04 — Ship
"We test, polish, and launch. You get a product that works beautifully from day one."
```

**Scroll Animation:** Line draws itself left-to-right (1s). Each step fades in as the line reaches it.

---

### Section 7: Testimonials

**Background:** Canvas `#F8FAFC`

**Layout:**
```
[Overline: "What they say"]
[Section Title: "Words from people we've worked with"]

[Testimonial Card — single large card, centered]

[Navigation dots: ● ○ ○]
```

**Testimonial Card:**
- Background: `#FFFFFF`
- Border: 1px `#E2E8F0`
- Border-radius: 14px
- Padding: 48px
- Max-width: 720px, centered
- **Quote:** Ink `#1E293B`, 20px, line-height 1.7, font-style italic (using General Sans italic or serif for the quote only to add editorial feel)
- **Large quotation mark:** Signal Wash `#DBEAFE`, 120px, positioned top-left of card as a decorative element (using Clash Display or a serif font)
- **Author name:** Ink `#0F172A`, 16px, font-weight 600
- **Author title:** Ink 300 `#64748B`, 14px
- **Author avatar:** 48px circle, left of name/title block

**Carousel:**
- Auto-rotate every 6 seconds
- Smooth crossfade transition (400ms)
- Navigation dots: `#CBD5E1` inactive, Signal `#1D5CBF` active, 8px circles, 12px gap
- Swipe support on mobile

**Note:** If no testimonials yet, this section can be hidden initially and added later

---

### Section 8: CTA / Lead Capture (Final Conversion Section)

**Background:** Ink `#0F172A` (DARK SECTION — second dramatic contrast break)

**Layout:**
```
[Section Title: "Ready to build something great?"]
[Subtitle: "Tell us about your project. We'll get back within 24 hours."]

[Name Input]  [Email Input]
[Phone Input]  [Service Dropdown]
[Message Textarea]
[Submit Button: "Let's talk →"]
```

**Design:**
- Title: `#FFFFFF`, 48px, font-weight 700, centered
- Subtitle: `#94A3B8`, 16px, centered, max-width 480px
- Form max-width: 600px, centered
- **Inputs:** Background `#1E293B`, border 1px `#334155`, border-radius 10px, padding 14px 16px, color `#FFFFFF`, placeholder color `#64748B`, 15px
- **Input focus:** Border transitions to Signal `#3B8BF5` (200ms), subtle `box-shadow: 0 0 0 3px rgba(29, 92, 191, 0.15)`
- **Input labels:** `#94A3B8`, 13px, font-weight 500, positioned above each input with 6px gap
- **Service Dropdown options:** Website, Mobile App, AI Solution, ERP/CRM, MVP, SaaS, Design, Other
- **Submit Button:** Signal `#1D5CBF` bg, white text, full-width, 16px, font-weight 600, 14px 0 padding, 10px radius
- **Submit Hover:** Background → `#0A3B8F`, translateY(-2px)

**Spacing:** 120px padding top and bottom

**Success State:** After submission, form fades out and is replaced by:
- Checkmark icon: Signal Bright `#3B8BF5`, 48px
- "We've got your details!" — `#FFFFFF`, 28px, font-weight 600
- "Expect a reply within 24 hours." — `#94A3B8`, 16px

---

## Page 2: Services (/services)

### Section 1: Services Hero

**Background:** Canvas `#F8FAFC` with dot grid

**Layout:**
```
[Overline: "Our services"]
[Title: "Everything you need to go digital."]
[Subtitle: "From a simple website to a full AI-powered platform — we build it all."]
```

**Design:** Same pattern as homepage hero but smaller — 48px title (not 72px). No floating shapes. Clean and direct.

**Spacing:** 120px top (below nav), 80px bottom

---

### Section 2: Service Detail Blocks

**Background:** Alternates between Canvas `#F8FAFC` and Canvas White `#FFFFFF` per service block

**Layout (per service — 6 total):**
```
[Left: Text Content (50%)]              [Right: Visual/Image (50%)]

[Service Number — "01"]
[Service Title — "Website Development"]
[Description — 3-4 sentences]
[Feature List — 4-5 bullet points]
[CTA: "Start a web project →"]
```

**Even-numbered services flip layout:**
```
[Left: Visual/Image (50%)]              [Right: Text Content (50%)]
```

**Design Details:**
- Service Number: Signal `#1D5CBF`, 14px, mono, font-weight 600
- Title: Ink `#0F172A`, 36px, font-weight 700
- Description: Ink 200 `#334155`, 16px, line-height 1.7
- Feature list: Ink 300 `#64748B`, 15px, each item preceded by a small Signal dot (6px circle), 12px vertical gaps between items
- CTA: Signal `#1D5CBF`, 15px, font-weight 500, "Start a web project →"
- Image: Rounded screenshot/mockup, 12px radius, subtle 1px `#E2E8F0` border. Use AI-generated or stock visuals showing the service output.

**The 6 Service Blocks:**
```
01 — Website Development
    Features: Custom design, responsive, SEO-ready, fast loading, CMS integration

02 — Design & Posters
    Features: Brand identity, UI/UX design, marketing materials, social media graphics

03 — Mobile Applications
    Features: iOS & Android, React Native/Flutter, offline support, push notifications

04 — ERP & CRM Solutions
    Features: Custom dashboards, workflow automation, data analytics, role-based access

05 — AI Chatbots & Custom AI
    Features: Natural language processing, integration with existing tools, 24/7 support, analytics
    (This block gets a special Signal Tint #EFF6FF background to highlight it)

06 — MVP Development
    Features: 20-day delivery, 50% discount, iterative approach, investor-ready
    (This block gets a special highlight badge: "Most Popular — 50% Off")
```

**Spacing:** 100px between each service block

---

### Section 3: Tech Stack

**Background:** Canvas Alt `#F1F5F9`

**Layout:**
```
[Overline: "Our toolkit"]
[Title: "Built with the best"]

[Grid of tech logos/names in monochromatic style]
React  |  Next.js  |  Node.js  |  Python  |  Flutter  |  PostgreSQL  |  AWS  |  OpenAI  |  etc.
```

**Design:**
- Tech items displayed as pills/tags: `#FFFFFF` bg, 1px `#E2E8F0` border, Ink 200 `#334155` text, 14px, font-weight 500
- Grid layout, wrapping, 10px gaps
- No logos needed — text-only pills feel more editorial and sophisticated
- Padding: 80px top and bottom

---

### Section 4: CTA Band

Same as Homepage Section 8 but condensed — just title + subtitle + single email input + button. No full form.

---

## Page 3: Work / Portfolio (/work)

### Section 1: Work Hero

**Layout:**
```
[Overline: "Our work"]
[Title: "Projects built with obsession."]
[Filter tabs: All | Websites | Mobile | AI | MVP]
```

**Filter Tabs:**
- Horizontal row, centered
- Active tab: Signal `#1D5CBF` text, Signal Wash `#DBEAFE` bg, font-weight 500
- Inactive tabs: Ink 300 `#64748B` text, transparent bg
- Hover: `#F1F5F9` bg
- Border-radius: 8px
- Padding: 8px 18px each
- Filtering is instant — no page reload, use CSS transitions for card rearrangement

---

### Section 2: Project Grid

**Layout:** Bento grid, same style as homepage portfolio preview but expanded

```
Row 1: [Large Card 7/12] [Small Card 5/12]
Row 2: [Small Card 5/12] [Large Card 7/12]
Row 3: [Equal Card 6/12] [Equal Card 6/12]
(repeats)
```

**Project Card (expanded version):**
- Everything from homepage cards PLUS:
- **Tech tags:** Row of pills below the description — "Next.js", "AI", "React Native" etc.
- **Timeline tag:** "Shipped in 14 days" in Ink 300
- On click: Navigates to individual project detail (can be a modal overlay or separate page)

---

### Section 3: Project Detail (Modal or Page)

When a project card is clicked:

**Layout:**
```
[← Back to work]

[Project Hero Image — full width, 16:9 ratio]

[Project Title]                    [Category]  [Timeline]  [Year]
[Project Description — 2-3 paragraphs]

[Challenge]
[Solution]
[Results / Impact]

[Screenshot Gallery — 3-4 images in a masonry or grid layout]

[Tech Stack Used — pill tags]

[Next Project → / ← Previous Project]
```

**Design:**
- Hero image: Full-width, 12px radius, max-height 500px, object-fit cover
- Title: Ink `#0F172A`, 40px, font-weight 700
- Meta tags (category, timeline, year): Ink 300 `#64748B`, 14px, separated by dots
- Body text: Ink 200 `#334155`, 16px, line-height 1.8, max-width 720px
- Section headers (Challenge/Solution/Results): Ink `#0F172A`, 24px, font-weight 600
- Gallery images: 12px radius, 1px `#E2E8F0` border, hover → subtle scale 1.02
- Next/Previous navigation: Full-width bar at bottom, Ink 200 text, hover → Signal

---

## Page 4: About (/about)

### Section 1: About Hero

**Layout:**
```
[Overline: "About us"]
[Title: "We're a small team that builds big things."]
[Subtitle: 2 sentences about the company philosophy]
```

**Design:** Same hero pattern as other pages. 48px title.

---

### Section 2: Our Story

**Background:** Canvas White `#FFFFFF`

**Layout:**
```
[Left: Large team photo or abstract visual (50%)]

[Right: Story text (50%)]
[Heading: "Started with a belief"]
[3-4 paragraphs telling the Vaxalor story]
[Key quote pulled out in larger text]
```

**Design:**
- Image: 12px radius, fills left column
- Story text: Ink 200 `#334155`, 16px, line-height 1.8
- Pull quote: Ink `#0F172A`, 24px, font-weight 500, italic, with a 3px Signal `#1D5CBF` left border, 20px left padding

---

### Section 3: Our Values

**Background:** Canvas `#F8FAFC`

**Layout:**
```
[Overline: "What drives us"]
[Title: "Our values"]

[Value 1]    [Value 2]    [Value 3]
```

**Value Cards (3 across):**
- Same style as homepage USP cards but on light bg
- Background: `#FFFFFF`, 1px `#E2E8F0` border, 12px radius
- Number: Signal `#1D5CBF`, mono, 13px
- Title: Ink `#0F172A`, 20px
- Description: Ink 300 `#64748B`, 14px

**Values:**
```
01 — Soul in the code
"Every line of code we write has intention. We don't cut corners."

02 — Speed without compromise
"20 days maximum. But we never sacrifice quality for speed."

03 — Radical honesty
"We'll tell you if your idea needs tweaking. We're partners, not yes-men."
```

---

### Section 4: Team (Optional)

**Layout:**
```
[Overline: "The people"]
[Title: "Meet the team"]

[Team Member 1]  [Team Member 2]  [Team Member 3]  [Team Member 4]
```

**Team Cards:**
- Photo: Square, 1:1 ratio, 12px radius, grayscale by default, full color on hover (400ms ease)
- Name: Ink `#0F172A`, 16px, font-weight 600
- Role: Signal `#1D5CBF`, 13px
- One-liner: Ink 300 `#64748B`, 13px, italic

**Note:** Can be hidden if team is not ready to be showcased

---

### Section 5: CTA Band

Same condensed CTA as Services page.

---

## Page 5: Contact (/contact)

### Section 1: Contact Hero + Form

**Background:** Canvas `#F8FAFC`

**Layout (2-column):**
```
[Left Column (45%)]                         [Right Column (55%)]

[Overline: "Get in touch"]                  [Contact Form]
[Title: "Let's build                         Name
 something together."]                       Email
                                             Phone
[Email: hello@vaxalor.com]                   Service (dropdown)
[Response time: "Within 24 hours"]           Budget Range (dropdown)
                                             Tell us about your project
[Social Links: LinkedIn, Twitter, etc.]      
                                             [Submit: "Send message →"]
```

**Left Column Design:**
- Title: Ink `#0F172A`, 44px, font-weight 700
- Email: Signal `#1D5CBF`, 16px, clickable (mailto:), underline on hover
- Response time: Ink 300 `#64748B`, 14px, with a small clock icon
- Social links: Ink 300 icons, 20px, hover → Signal `#1D5CBF`

**Form Design:**
- Background: `#FFFFFF`, 1px `#E2E8F0` border, 14px radius, 36px padding
- Inputs: `#FFFFFF` bg, 1.5px `#E2E8F0` border, 10px radius, 14px 16px padding
- Input focus: Border → Signal `#3B8BF5`, box-shadow ring
- Labels: Ink 200 `#334155`, 13px, font-weight 500
- Textarea: 120px min-height
- Budget dropdown options: "Under $1K", "$1K–$5K", "$5K–$10K", "$10K+", "Not sure yet"
- Submit: Signal `#1D5CBF` bg, white text, full-width, 16px, font-weight 600

**Success State:** Same as homepage form success state

---

## Micro-Interactions & Animation Reference

| Element | Trigger | Animation | Duration |
|---------|---------|-----------|----------|
| Nav links | Hover | Color → Signal blue | 200ms ease |
| CTA buttons | Hover | Background darken + translateY(-2px) | 200ms ease |
| Service cards | Hover | Border → Signal wash + lift 4px + blue underline grows | 300ms ease-out |
| Project images | Hover | Scale 1.0 → 1.05 | 400ms ease |
| Team photos | Hover | Grayscale → full color | 400ms ease |
| Stats numbers | Scroll into view | Count up from 0 | 1500ms ease-out |
| All sections | Scroll into view | Fade in + slide up 20px | 500ms ease |
| Card groups | Scroll into view | Staggered fade (80ms per child) | 500ms each |
| Process timeline | Scroll into view | Line draws left-to-right | 1000ms ease |
| Page transitions | Navigation | Crossfade content | 300ms ease |
| Cursor ring | Hover on interactive | Scale 20px → 40px | 200ms ease |
| Chatbot button | Idle | Pulse shadow ring | 4000ms loop |
| Form inputs | Focus | Border glow ring | 200ms ease |
| Filter tabs | Click | Background fill + text color | 150ms ease |

---

## Responsive Breakpoints

| Breakpoint | Width | Key Changes |
|------------|-------|-------------|
| Desktop | ≥1200px | Full layout, 3-col grids, side-by-side sections |
| Tablet | 768–1199px | 2-col grids, reduced padding, smaller headings |
| Mobile | <768px | Single column, hamburger nav, stacked cards |

**Mobile-specific rules:**
- Hero title: 40px (from 72px)
- Section titles: 32px (from 48px)
- Section gaps: 80px (from 140px)
- Card padding: 20px (from 28px)
- Stats: Horizontal scroll or 2×2 grid
- Process timeline: Vertical (line on left side)
- Bento grid: Full-width single column
- Custom cursor: Disabled (touch devices)
- Chatbot widget: Bottom-center, 48px button

---

## SEO & Performance Notes

- Every page gets unique `<title>` and `<meta description>`
- All images: WebP format, lazy loaded, with alt text
- Fonts: Self-hosted (not Google Fonts CDN) for privacy and speed
- Above-the-fold content loads without JS — progressive enhancement
- Aim for 90+ Lighthouse score on all metrics
- Structured data (JSON-LD) for organization and services
- Sitemap.xml and robots.txt configured

---

## Recommended Tech Stack

| Layer | Tool | Why |
|-------|------|-----|
| Framework | Next.js 14 (App Router) | SSR/SSG, fast, great SEO, Vercel-native |
| Styling | Tailwind CSS | Utility-first, matches our spacing/color system |
| Animations | Framer Motion | Scroll reveals, page transitions, hover effects |
| Custom Cursor | Custom JS (lightweight) | No library needed, ~50 lines |
| Chatbot | Custom React widget + OpenAI API | Live demo of capabilities |
| Forms | React Hook Form + Resend (email) | Free tier covers contact forms |
| Analytics | Vercel Analytics (free) | Built into hosting |
| Hosting | Vercel (free plan) | Already purchased |
| CMS (future) | Sanity.io or MDX | For blog/portfolio content |

---

## Cookie & Data Collection Strategy

Since you want visitor information:

- **Essential cookies:** Session, consent preference (no consent needed)
- **Analytics cookies:** Vercel Analytics (need consent banner)
- **Lead capture cookie:** After form submission, store a cookie to personalize return visits
- **Cookie banner:** Minimal, bottom-left, matches design system — Ink bg, white text, Signal CTA
- **IP + basic fingerprinting:** Can log visitor country/device via Vercel middleware (no cookie needed)
- **Newsletter popup (optional):** Show after 30 seconds OR on exit intent — email capture only

---

*Document version: 1.0*
*Design system: Arctic Edge Refined*
*Colors: Ink #0F172A · Signal #1D5CBF · Canvas #F8FAFC*
