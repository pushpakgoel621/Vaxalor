import { NextRequest, NextResponse } from "next/server";
import { getAllBlogs, createBlog } from "@/lib/db/queries";
import { initDB } from "@/lib/db";
import { isAuthenticated } from "@/lib/auth";

export async function GET(request: NextRequest) {
  try {
    const admin = await isAuthenticated();
    const showAll = request.nextUrl.searchParams.get("all") === "true" && admin;

    const blogs = await getAllBlogs(!showAll);

    return NextResponse.json({ blogs });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Failed to fetch blogs";

    if (message.includes("does not exist")) {
      await initDB();
      return NextResponse.json({ blogs: [] });
    }

    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const admin = await isAuthenticated();
    if (!admin) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();

    if (!body.title || !body.slug) {
      return NextResponse.json(
        { error: "Title and slug are required" },
        { status: 400 }
      );
    }

    const slug =
      body.slug ||
      body.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");

    const blog = await createBlog({ ...body, slug });

    return NextResponse.json({ blog }, { status: 201 });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Failed to create blog";

    if (message.includes("does not exist")) {
      await initDB();
      return NextResponse.json(
        { error: "Database initialized. Please try again." },
        { status: 503 }
      );
    }

    if (message.includes("unique") || message.includes("duplicate")) {
      return NextResponse.json(
        { error: "A blog with this slug already exists" },
        { status: 409 }
      );
    }

    return NextResponse.json({ error: message }, { status: 500 });
  }
}
