import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const activeMeet = await prisma.sportsMeet.findFirst({
      where: { status: { in: ["LIVE", "UPCOMING"] } },
      include: {
        houses: { orderBy: { totalPoints: "desc" } },
        events: {
          where: { status: { in: ["LIVE", "SCHEDULED"] } },
          take: 5,
          orderBy: { startTime: "asc" },
        },
      },
      orderBy: { startDate: "desc" },
    });

    return NextResponse.json({ meet: activeMeet });
  } catch (err) {
    console.error("Leaderboard error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
