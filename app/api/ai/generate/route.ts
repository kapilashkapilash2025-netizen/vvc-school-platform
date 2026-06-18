import { aiProvider } from "@/lib/ai/provider";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  taskType: z.enum(["POST_WRITER", "NOTICE_WRITER", "EVENT_REPORT", "TRANSLATION", "ALT_TEXT", "SPORTS_SUMMARY"]),
  data: z.record(z.string(), z.unknown()),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = schema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    const result = await aiProvider.generate({
      taskType: parsed.data.taskType,
      data: parsed.data.data as Record<string, unknown>,
    });

    if (!result.success) {
      return NextResponse.json({ error: result.error }, { status: 500 });
    }

    return NextResponse.json({ result: result.result, provider: result.provider, model: result.model });
  } catch (err) {
    console.error("AI generate error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
