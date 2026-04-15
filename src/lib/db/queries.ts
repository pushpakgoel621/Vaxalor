import { getDB, type Blog, type ContentBlock, type Submission } from "./index";

export async function createBlog(data: {
  title: string;
  slug: string;
  excerpt?: string;
  category?: string;
  read_time?: string;
  featured?: boolean;
  published?: boolean;
  thumbnail_url?: string;
  thumbnail_alt?: string;
  author?: string;
  content?: ContentBlock[];
  meta_title?: string;
  meta_description?: string;
}): Promise<Blog> {
  const sql = getDB();

  const rows = await sql`
    INSERT INTO blogs (title, slug, excerpt, category, read_time, featured, published, thumbnail_url, thumbnail_alt, author, content, meta_title, meta_description)
    VALUES (
      ${data.title},
      ${data.slug},
      ${data.excerpt || ""},
      ${data.category || "General"},
      ${data.read_time || "5 min"},
      ${data.featured || false},
      ${data.published || false},
      ${data.thumbnail_url || null},
      ${data.thumbnail_alt || null},
      ${data.author || "Vaxalor Team"},
      ${JSON.stringify(data.content || [])},
      ${data.meta_title || null},
      ${data.meta_description || null}
    )
    RETURNING *
  `;

  return rows[0] as Blog;
}

export async function getAllBlogs(publishedOnly = true): Promise<Blog[]> {
  const sql = getDB();

  if (publishedOnly) {
    const rows = await sql`
      SELECT * FROM blogs WHERE published = true ORDER BY created_at DESC
    `;
    return rows as Blog[];
  }

  const rows = await sql`
    SELECT * FROM blogs ORDER BY created_at DESC
  `;
  return rows as Blog[];
}

export async function getBlogBySlug(slug: string): Promise<Blog | null> {
  const sql = getDB();

  const rows = await sql`
    SELECT * FROM blogs WHERE slug = ${slug} LIMIT 1
  `;

  return (rows[0] as Blog) || null;
}

export async function getBlogsByCategory(category: string): Promise<Blog[]> {
  const sql = getDB();

  const rows = await sql`
    SELECT * FROM blogs WHERE category = ${category} AND published = true ORDER BY created_at DESC
  `;

  return rows as Blog[];
}

export async function getFeaturedBlog(): Promise<Blog | null> {
  const sql = getDB();

  const rows = await sql`
    SELECT * FROM blogs WHERE featured = true AND published = true ORDER BY created_at DESC LIMIT 1
  `;

  return (rows[0] as Blog) || null;
}

export async function updateBlog(
  slug: string,
  data: Partial<{
    title: string;
    slug: string;
    excerpt: string;
    category: string;
    read_time: string;
    featured: boolean;
    published: boolean;
    thumbnail_url: string;
    thumbnail_alt: string;
    author: string;
    content: ContentBlock[];
    meta_title: string;
    meta_description: string;
  }>
): Promise<Blog | null> {
  const sql = getDB();

  const existing = await getBlogBySlug(slug);
  if (!existing) return null;

  const merged = {
    title: data.title ?? existing.title,
    slug: data.slug ?? existing.slug,
    excerpt: data.excerpt ?? existing.excerpt,
    category: data.category ?? existing.category,
    read_time: data.read_time ?? existing.read_time,
    featured: data.featured ?? existing.featured,
    published: data.published ?? existing.published,
    thumbnail_url: data.thumbnail_url ?? existing.thumbnail_url,
    thumbnail_alt: data.thumbnail_alt ?? existing.thumbnail_alt,
    author: data.author ?? existing.author,
    content: data.content ?? existing.content,
    meta_title: data.meta_title ?? existing.meta_title,
    meta_description: data.meta_description ?? existing.meta_description,
  };

  const rows = await sql`
    UPDATE blogs SET
      title = ${merged.title},
      slug = ${merged.slug},
      excerpt = ${merged.excerpt},
      category = ${merged.category},
      read_time = ${merged.read_time},
      featured = ${merged.featured},
      published = ${merged.published},
      thumbnail_url = ${merged.thumbnail_url},
      thumbnail_alt = ${merged.thumbnail_alt},
      author = ${merged.author},
      content = ${JSON.stringify(merged.content)},
      meta_title = ${merged.meta_title},
      meta_description = ${merged.meta_description},
      updated_at = NOW()
    WHERE id = ${existing.id}
    RETURNING *
  `;

  return (rows[0] as Blog) || null;
}

export async function deleteBlog(slug: string): Promise<boolean> {
  const sql = getDB();

  const rows = await sql`
    DELETE FROM blogs WHERE slug = ${slug} RETURNING id
  `;

  return rows.length > 0;
}

// ========== SUBMISSIONS ==========

export async function createSubmission(data: {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  budget?: string;
  message?: string;
  source?: string;
}): Promise<Submission> {
  const sql = getDB();

  const rows = await sql`
    INSERT INTO submissions (name, email, phone, service, budget, message, source)
    VALUES (
      ${data.name},
      ${data.email},
      ${data.phone || null},
      ${data.service || null},
      ${data.budget || null},
      ${data.message || null},
      ${data.source || "contact"}
    )
    RETURNING *
  `;

  return rows[0] as Submission;
}

export async function getAllSubmissions(): Promise<Submission[]> {
  const sql = getDB();

  const rows = await sql`
    SELECT * FROM submissions ORDER BY created_at DESC
  `;

  return rows as Submission[];
}

// ========== PROJECTS ==========

export interface DBProject {
  id: number;
  slug: string;
  title: string;
  hook: string;
  category: string;
  description: string;
  challenge: string;
  solution: string;
  result: string;
  timeline: string;
  year: string;
  tech_stack: string[];
  gradient: string;
  pattern: string;
  thumbnail_url: string | null;
  concept_project: boolean;
  featured: boolean;
  published: boolean;
  display_order: number;
  created_at: string;
  updated_at: string;
}

export async function createProject(data: {
  slug: string;
  title: string;
  hook?: string;
  category?: string;
  description?: string;
  challenge?: string;
  solution?: string;
  result?: string;
  timeline?: string;
  year?: string;
  tech_stack?: string[];
  gradient?: string;
  pattern?: string;
  thumbnail_url?: string;
  concept_project?: boolean;
  featured?: boolean;
  published?: boolean;
  display_order?: number;
}): Promise<DBProject> {
  const sql = getDB();
  const rows = await sql`
    INSERT INTO projects (slug, title, hook, category, description, challenge, solution, result, timeline, year, tech_stack, gradient, pattern, thumbnail_url, concept_project, featured, published, display_order)
    VALUES (
      ${data.slug},
      ${data.title},
      ${data.hook || ""},
      ${data.category || "Website"},
      ${data.description || ""},
      ${data.challenge || ""},
      ${data.solution || ""},
      ${data.result || ""},
      ${data.timeline || ""},
      ${data.year || new Date().getFullYear().toString()},
      ${data.tech_stack || []},
      ${data.gradient || "from-signal-tint via-signal-wash to-signal/20"},
      ${data.pattern || "dots"},
      ${data.thumbnail_url || null},
      ${data.concept_project ?? true},
      ${data.featured ?? false},
      ${data.published ?? false},
      ${data.display_order ?? 0}
    )
    RETURNING *
  `;
  return rows[0] as DBProject;
}

export async function getAllProjects(publishedOnly = true): Promise<DBProject[]> {
  const sql = getDB();
  if (publishedOnly) {
    const rows = await sql`
      SELECT * FROM projects WHERE published = true ORDER BY display_order ASC, created_at DESC
    `;
    return rows as DBProject[];
  }
  const rows = await sql`
    SELECT * FROM projects ORDER BY display_order ASC, created_at DESC
  `;
  return rows as DBProject[];
}

export async function getProjectBySlug(slug: string): Promise<DBProject | null> {
  const sql = getDB();
  const rows = await sql`
    SELECT * FROM projects WHERE slug = ${slug} LIMIT 1
  `;
  return (rows[0] as DBProject) || null;
}

export async function updateProject(slug: string, data: Partial<{
  slug: string; title: string; hook: string; category: string; description: string;
  challenge: string; solution: string; result: string; timeline: string; year: string;
  tech_stack: string[]; gradient: string; pattern: string; thumbnail_url: string;
  concept_project: boolean; featured: boolean; published: boolean; display_order: number;
}>): Promise<DBProject | null> {
  const sql = getDB();
  const existing = await getProjectBySlug(slug);
  if (!existing) return null;

  const merged = {
    slug: data.slug ?? existing.slug,
    title: data.title ?? existing.title,
    hook: data.hook ?? existing.hook,
    category: data.category ?? existing.category,
    description: data.description ?? existing.description,
    challenge: data.challenge ?? existing.challenge,
    solution: data.solution ?? existing.solution,
    result: data.result ?? existing.result,
    timeline: data.timeline ?? existing.timeline,
    year: data.year ?? existing.year,
    tech_stack: data.tech_stack ?? existing.tech_stack,
    gradient: data.gradient ?? existing.gradient,
    pattern: data.pattern ?? existing.pattern,
    thumbnail_url: data.thumbnail_url ?? existing.thumbnail_url,
    concept_project: data.concept_project ?? existing.concept_project,
    featured: data.featured ?? existing.featured,
    published: data.published ?? existing.published,
    display_order: data.display_order ?? existing.display_order,
  };

  const rows = await sql`
    UPDATE projects SET
      slug = ${merged.slug}, title = ${merged.title}, hook = ${merged.hook},
      category = ${merged.category}, description = ${merged.description},
      challenge = ${merged.challenge}, solution = ${merged.solution}, result = ${merged.result},
      timeline = ${merged.timeline}, year = ${merged.year}, tech_stack = ${merged.tech_stack},
      gradient = ${merged.gradient}, pattern = ${merged.pattern}, thumbnail_url = ${merged.thumbnail_url},
      concept_project = ${merged.concept_project}, featured = ${merged.featured},
      published = ${merged.published}, display_order = ${merged.display_order},
      updated_at = NOW()
    WHERE id = ${existing.id}
    RETURNING *
  `;
  return (rows[0] as DBProject) || null;
}

export async function deleteProject(slug: string): Promise<boolean> {
  const sql = getDB();
  const rows = await sql`DELETE FROM projects WHERE slug = ${slug} RETURNING id`;
  return rows.length > 0;
}

// ========== SITE CONFIG ==========

export async function getSiteConfig(key: string): Promise<string | null> {
  const sql = getDB();
  const rows = await sql`
    SELECT value FROM site_config WHERE key = ${key} LIMIT 1
  `;
  return (rows[0] as { value: string })?.value || null;
}

export async function setSiteConfig(key: string, value: string) {
  const sql = getDB();
  await sql`
    INSERT INTO site_config (key, value, updated_at)
    VALUES (${key}, ${value}, NOW())
    ON CONFLICT (key) DO UPDATE SET value = ${value}, updated_at = NOW()
  `;
}

// ========== CHAT ==========

export async function saveChatMessage(sessionId: string, role: string, message: string) {
  const sql = getDB();
  await sql`
    INSERT INTO chat_conversations (session_id, role, message)
    VALUES (${sessionId}, ${role}, ${message})
  `;
}

export async function getChatHistory(sessionId: string) {
  const sql = getDB();
  const rows = await sql`
    SELECT role, message FROM chat_conversations
    WHERE session_id = ${sessionId}
    ORDER BY created_at ASC
    LIMIT 50
  `;
  return rows as { role: string; message: string }[];
}

export async function saveChatLead(sessionId: string, email: string, name?: string) {
  const sql = getDB();
  await sql`
    INSERT INTO chat_leads (session_id, email, name)
    VALUES (${sessionId}, ${email}, ${name || null})
  `;
}
