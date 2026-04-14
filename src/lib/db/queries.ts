import { getDB, type Blog, type ContentBlock } from "./index";

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
