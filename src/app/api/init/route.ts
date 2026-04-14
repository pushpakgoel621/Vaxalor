import { NextResponse } from "next/server";
import { initDB } from "@/lib/db";
import { isAuthenticated } from "@/lib/auth";

export async function POST() {
  try {
    const admin = await isAuthenticated();
    if (!admin) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const result = await initDB();
    return NextResponse.json(result);
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Failed to initialize database";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
