import { NextRequest, NextResponse } from "next/server";
import { getProjectBySlug, updateProject, deleteProject } from "@/lib/db/queries";
import { isAuthenticated } from "@/lib/auth";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const project = await getProjectBySlug(slug);
    if (!project) return NextResponse.json({ error: "Not found" }, { status: 404 });
    if (!project.published) {
      const admin = await isAuthenticated().catch(() => false);
      if (!admin) return NextResponse.json({ error: "Not found" }, { status: 404 });
    }
    return NextResponse.json({ project });
  } catch (error: unknown) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Failed" }, { status: 500 });
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const admin = await isAuthenticated();
    if (!admin) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    const { slug } = await params;
    const body = await request.json();
    const project = await updateProject(slug, body);
    if (!project) return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json({ project });
  } catch (error: unknown) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Failed" }, { status: 500 });
  }
}

export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const admin = await isAuthenticated();
    if (!admin) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    const { slug } = await params;
    const deleted = await deleteProject(slug);
    if (!deleted) return NextResponse.json({ error: "Not found" }, { status: 404 });
    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Failed" }, { status: 500 });
  }
}
