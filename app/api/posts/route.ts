import { prisma } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const status = searchParams.get("status") || "PUBLISHED";
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");

    const [posts, total] = await Promise.all([
      prisma.post.findMany({
        where: { status: status as "PUBLISHED" | "DRAFT" | "REVIEW" | "APPROVED" | "ARCHIVED" },
        include: {
          author: { select: { name: true } },
          category: { select: { nameEn: true, nameTa: true } },
        },
        orderBy: { publishedAt: "desc" },
        skip: (page - 1) * limit,
        take: limit,
      }),
      prisma.post.count({
        where: { status: status as "PUBLISHED" | "DRAFT" | "REVIEW" | "APPROVED" | "ARCHIVED" },
      }),
    ]);

    return NextResponse.json({ posts, total, page, pages: Math.ceil(total / limit) });
  } catch (err) {
    console.error("Posts GET error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
