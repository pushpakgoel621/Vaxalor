import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import { saveChatMessage, getChatHistory, saveChatLead } from "@/lib/db/queries";

const SYSTEM_PROMPT = `You are the Vaxalor AI assistant — a helpful, friendly, and knowledgeable chatbot embedded on the Vaxalor agency website.

About Vaxalor:
- We build custom websites, mobile apps, AI chatbots, ERP/CRM systems, and MVPs
- We ship every project in 20 days maximum — no exceptions
- MVP development gets 50% off
- Our tech stack: React, Next.js, Node.js, Python, Flutter, PostgreSQL, AWS, OpenAI
- We serve startups and small businesses worldwide
- Contact email: hello@vaxalor.com

Services & Rough Pricing:
- Website Development: Custom design, SEO-ready, CMS integration. Starting from $3K
- Mobile Apps: iOS + Android from one codebase (React Native/Flutter). Starting from $5K
- AI Chatbots: Custom AI solutions with 24/7 support. Starting from $2K
- ERP/CRM: Custom business dashboards and automation. Starting from $5K
- MVP Development: 50% off, investor-ready product. Starting from $1.5K
- Design & Posters: Brand identity, UI/UX, marketing materials. Starting from $1K

Your behavior:
- Be concise (2-3 sentences max per response)
- Be warm and conversational, not corporate
- Answer questions about services, pricing, timeline, and process
- If someone seems interested, suggest they book a free consultation at /contact
- After 2-3 exchanges, naturally ask for their email: "I'd love to help you further — what's the best email to reach you?"
- If they share an email, respond warmly and confirm someone will follow up within 24 hours
- Never make up information. If you don't know something, say "I'd recommend chatting with our team directly for that — want to book a quick call?"
- Keep the tone: confident, honest, slightly playful. Think smart friend, not corporate bot.`;

export async function POST(request: NextRequest) {
  try {
    const { message, sessionId } = await request.json();

    if (!message || !sessionId) {
      return NextResponse.json({ error: "Message and sessionId required" }, { status: 400 });
    }

    // Save user message to DB
    try {
      await saveChatMessage(sessionId, "user", message);
    } catch {
      // DB might not be ready — continue anyway
    }

    // Check if message contains an email (lead capture)
    const emailMatch = message.match(/[\w.-]+@[\w.-]+\.\w+/);
    if (emailMatch) {
      try {
        await saveChatLead(sessionId, emailMatch[0]);
      } catch {
        // ignore DB errors
      }
    }

    // Get conversation history
    let history: { role: string; message: string }[] = [];
    try {
      history = await getChatHistory(sessionId);
    } catch {
      // if DB fails, just use the current message
    }

    // Build messages array for OpenAI
    const messages: OpenAI.ChatCompletionMessageParam[] = [
      { role: "system", content: SYSTEM_PROMPT },
      ...history.map((h) => ({
        role: h.role as "user" | "assistant",
        content: h.message,
      })),
    ];

    // If history didn't include the current message (DB failed), add it
    if (history.length === 0 || history[history.length - 1]?.message !== message) {
      messages.push({ role: "user", content: message });
    }

    // Check if OpenAI key exists
    if (!process.env.OPENAI_API_KEY || process.env.OPENAI_API_KEY === "your_openai_api_key") {
      // Fallback: smart canned responses when no API key
      const reply = getFallbackResponse(message);

      try {
        await saveChatMessage(sessionId, "assistant", reply);
      } catch {}

      return NextResponse.json({ reply });
    }

    // Call OpenAI
    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages,
      max_tokens: 200,
      temperature: 0.7,
    });

    const reply = completion.choices[0]?.message?.content || "Sorry, I couldn't process that. Try again?";

    // Save assistant reply to DB
    try {
      await saveChatMessage(sessionId, "assistant", reply);
    } catch {}

    return NextResponse.json({ reply });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : "Chat failed";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}

// Smart fallback responses when no OpenAI key is configured
function getFallbackResponse(message: string): string {
  const lower = message.toLowerCase();

  if (lower.includes("price") || lower.includes("cost") || lower.includes("how much") || lower.includes("budget")) {
    return "Our projects start from $1.5K for MVPs (50% off!) and $3K for websites. Every project is custom, so the exact price depends on scope. Want a free estimate? Head to our contact page!";
  }
  if (lower.includes("time") || lower.includes("how long") || lower.includes("fast") || lower.includes("days") || lower.includes("deadline")) {
    return "We ship every project in 20 days maximum — from kickoff to launch. No exceptions. Most projects actually ship in 14-18 days.";
  }
  if (lower.includes("mvp")) {
    return "Our MVP program is perfect for startups — we build your minimum viable product in 20 days at 50% off. Investor-ready, with analytics built in. Want to discuss your idea?";
  }
  if (lower.includes("website") || lower.includes("web")) {
    return "We build custom websites with Next.js — no templates, SEO-ready, lightning fast. Starting from $3K, shipped in 20 days. Want to see examples? Check our Work page!";
  }
  if (lower.includes("app") || lower.includes("mobile") || lower.includes("ios") || lower.includes("android")) {
    return "We build cross-platform mobile apps with React Native or Flutter — one codebase, both stores. Starting from $5K. Want to discuss your app idea?";
  }
  if (lower.includes("ai") || lower.includes("chatbot") || lower.includes("bot")) {
    return "We build custom AI chatbots that handle customer support, capture leads, and work 24/7. You're talking to one right now! Starting from $2K.";
  }
  if (lower.includes("hello") || lower.includes("hi") || lower.includes("hey")) {
    return "Hey! 👋 Great to have you here. I can help you learn about our services, pricing, or process. What are you looking to build?";
  }
  if (lower.includes("email") || lower.includes("contact") || lower.includes("talk") || lower.includes("call")) {
    return "You can reach us at hello@vaxalor.com, or fill out the form on our Contact page. We reply within 24 hours — usually much faster!";
  }
  if (lower.includes("thank")) {
    return "You're welcome! If you need anything else, I'm right here. Or head to /contact to start a project conversation. 🚀";
  }

  return "That's a great question! I'd recommend chatting with our team directly for the best answer. Want to book a free call? Just head to our Contact page, or share your email and we'll reach out!";
}
