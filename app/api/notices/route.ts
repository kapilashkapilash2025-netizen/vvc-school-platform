import { prisma } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const notices = await prisma.notice.findMany({
      where: {
        status: "PUBLISHED",
        OR: [{ expiresAt: null }, { expiresAt: { gt: new Date() } }],
      },
      orderBy: [{ isPinned: "desc" }, { publishedAt: "desc" }],
      take: 20,
    });

    return NextResponse.json({ notices });
  } catch (err) {
    console.error("Notices GET error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
