import { neon } from "@neondatabase/serverless";

export function getDB() {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL environment variable is not set");
  }
  return neon(process.env.DATABASE_URL);
}

export async function initDB() {
  const sql = getDB();

  await sql`
    CREATE TABLE IF NOT EXISTS blogs (
      id SERIAL PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      slug VARCHAR(255) UNIQUE NOT NULL,
      excerpt TEXT,
      category VARCHAR(100) DEFAULT 'General',
      read_time VARCHAR(20) DEFAULT '5 min',
      featured BOOLEAN DEFAULT false,
      published BOOLEAN DEFAULT false,
      thumbnail_url TEXT,
      thumbnail_alt VARCHAR(255),
      author VARCHAR(100) DEFAULT 'Vaxalor Team',
      content JSONB NOT NULL DEFAULT '[]'::jsonb,
      meta_title VARCHAR(255),
      meta_description TEXT,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
      updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
    )
  `;

  await sql`
    CREATE TABLE IF NOT EXISTS submissions (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      phone VARCHAR(50),
      service VARCHAR(100),
      budget VARCHAR(50),
      message TEXT,
      source VARCHAR(50) DEFAULT 'contact',
      created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
    )
  `;

  await sql`
    CREATE TABLE IF NOT EXISTS site_config (
      key VARCHAR(100) PRIMARY KEY,
      value TEXT NOT NULL,
      updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
    )
  `;

  // Seed default ticker if empty
  await sql`
    INSERT INTO site_config (key, value)
    VALUES ('currently_building', '{"project": "AI chatbot for a logistics startup", "day": 12, "total": 20}')
    ON CONFLICT (key) DO NOTHING
  `;

  await sql`
    CREATE TABLE IF NOT EXISTS chat_conversations (
      id SERIAL PRIMARY KEY,
      session_id VARCHAR(100) NOT NULL,
      role VARCHAR(10) NOT NULL,
      message TEXT NOT NULL,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
    )
  `;

  await sql`
    CREATE TABLE IF NOT EXISTS chat_leads (
      id SERIAL PRIMARY KEY,
      session_id VARCHAR(100) NOT NULL,
      email VARCHAR(255),
      name VARCHAR(255),
      captured_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
    )
  `;

  await sql`
    CREATE TABLE IF NOT EXISTS newsletter (
      id SERIAL PRIMARY KEY,
      email VARCHAR(255) UNIQUE NOT NULL,
      subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
      active BOOLEAN DEFAULT true
    )
  `;

  await sql`
    CREATE TABLE IF NOT EXISTS analytics_events (
      id SERIAL PRIMARY KEY,
      event VARCHAR(100) NOT NULL,
      page VARCHAR(255),
      metadata JSONB DEFAULT '{}'::jsonb,
      session_id VARCHAR(100),
      created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
    )
  `;

  return { success: true };
}

export interface ChatMessage {
  id: number;
  session_id: string;
  role: string;
  message: string;
  created_at: string;
}

export interface ChatLead {
  id: number;
  session_id: string;
  email: string | null;
  name: string | null;
  captured_at: string;
}

export interface NewsletterSub {
  id: number;
  email: string;
  subscribed_at: string;
  active: boolean;
}

export interface Submission {
  id: number;
  name: string;
  email: string;
  phone: string | null;
  service: string | null;
  budget: string | null;
  message: string | null;
  source: string;
  created_at: string;
}

export interface ContentBlock {
  type: "paragraph" | "heading" | "image" | "video" | "quote";
  text?: string;
  level?: number;
  url?: string;
  alt?: string;
  caption?: string;
  author?: string;
}

export interface Blog {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  read_time: string;
  featured: boolean;
  published: boolean;
  thumbnail_url: string | null;
  thumbnail_alt: string | null;
  author: string;
  content: ContentBlock[];
  meta_title: string | null;
  meta_description: string | null;
  created_at: string;
  updated_at: string;
}
