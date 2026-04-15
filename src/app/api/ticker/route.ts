import { NextRequest, NextResponse } from "next/server";
import { getSiteConfig, setSiteConfig } from "@/lib/db/queries";
import { isAuthenticated } from "@/lib/auth";

export interface TickerItem {
  id: string;
  project: string;
  day: number;
  total: number;
  active: boolean;
}

async function getTickers(): Promise<TickerItem[]> {
  const value = await getSiteConfig("tickers");
  if (!value) return [];
  try {
    return JSON.parse(value);
  } catch {
    return [];
  }
}

// GET — returns all tickers (public: only active ones, admin: all)
export async function GET(request: NextRequest) {
  try {
    const tickers = await getTickers();
    const admin = await isAuthenticated().catch(() => false);
    const showAll = request.nextUrl.searchParams.get("all") === "true" && admin;

    return NextResponse.json({
      tickers: showAll ? tickers : tickers.filter((t) => t.active),
    });
  } catch {
    return NextResponse.json({ tickers: [] });
  }
}

// PUT — update all tickers (admin only)
export async function PUT(request: NextRequest) {
  try {
    const admin = await isAuthenticated();
    if (!admin) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { tickers } = body;

    if (!Array.isArray(tickers)) {
      return NextResponse.json({ error: "tickers array required" }, { status: 400 });
    }

    await setSiteConfig("tickers", JSON.stringify(tickers));

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : "Failed to update tickers";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
