import { NextRequest, NextResponse } from "next/server";
import { getSiteConfig, setSiteConfig } from "@/lib/db/queries";
import { isAuthenticated } from "@/lib/auth";

export async function GET() {
  try {
    const value = await getSiteConfig("currently_building");
    if (!value) {
      return NextResponse.json({ ticker: null });
    }
    return NextResponse.json({ ticker: JSON.parse(value) });
  } catch {
    return NextResponse.json({ ticker: null });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const admin = await isAuthenticated();
    if (!admin) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { project, day, total } = body;

    if (!project || !day || !total) {
      return NextResponse.json({ error: "project, day, and total are required" }, { status: 400 });
    }

    await setSiteConfig("currently_building", JSON.stringify({ project, day, total }));

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : "Failed to update ticker";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
