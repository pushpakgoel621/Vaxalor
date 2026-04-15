import { NextResponse } from "next/server";
import { getAllSubmissions } from "@/lib/db/queries";
import { isAuthenticated } from "@/lib/auth";

export async function GET() {
  try {
    const admin = await isAuthenticated();
    if (!admin) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const submissions = await getAllSubmissions();
    return NextResponse.json({ submissions });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Failed to fetch submissions";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
