import { NextRequest, NextResponse } from "next/server";
import { getAllProjects, createProject } from "@/lib/db/queries";
import { initDB } from "@/lib/db";
import { isAuthenticated } from "@/lib/auth";

export async function GET(request: NextRequest) {
  try {
    const admin = await isAuthenticated().catch(() => false);
    const showAll = request.nextUrl.searchParams.get("all") === "true" && admin;
    const projects = await getAllProjects(!showAll);
    return NextResponse.json({ projects });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Failed to fetch projects";
    if (message.includes("does not exist")) {
      await initDB();
      return NextResponse.json({ projects: [] });
    }
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const admin = await isAuthenticated();
    if (!admin) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const body = await request.json();
    if (!body.title || !body.slug) {
      return NextResponse.json({ error: "Title and slug are required" }, { status: 400 });
    }

    const project = await createProject(body);
    return NextResponse.json({ project }, { status: 201 });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Failed to create project";
    if (message.includes("does not exist")) {
      await initDB();
      return NextResponse.json({ error: "Database initialized. Please try again." }, { status: 503 });
    }
    if (message.includes("unique") || message.includes("duplicate")) {
      return NextResponse.json({ error: "A project with this slug already exists" }, { status: 409 });
    }
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
