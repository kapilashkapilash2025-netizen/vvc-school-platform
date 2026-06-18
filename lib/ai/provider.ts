export type AITaskInput = {
  taskType: "POST_WRITER" | "NOTICE_WRITER" | "EVENT_REPORT" | "TRANSLATION" | "ALT_TEXT" | "SPORTS_SUMMARY";
  data: Record<string, unknown>;
};

export type AITaskOutput = {
  success: boolean;
  result?: Record<string, unknown>;
  error?: string;
  provider: string;
  model: string;
};

export interface AIProvider {
  name: string;
  generate(input: AITaskInput): Promise<AITaskOutput>;
}

class MockProvider implements AIProvider {
  name = "mock";

  async generate(input: AITaskInput): Promise<AITaskOutput> {
    await new Promise((r) => setTimeout(r, 500));

    const { taskType, data } = input;

    if (taskType === "POST_WRITER") {
      return {
        success: true,
        provider: "mock",
        model: "mock-v1",
        result: {
          titleTa: `${data.topic || "செய்தி"} - தலைப்பு`,
          titleEn: `${data.topic || "News"} - Title`,
          contentTa: `இது ஒரு மாதிரி உரை. ${data.points || ""} இது AI உருவாக்கிய வரைவு.`,
          contentEn: `This is a sample content. ${data.points || ""} This is an AI-generated draft.`,
          excerptTa: "மாதிரி சுருக்கம்",
          excerptEn: "Sample excerpt",
          facebookCaption: `📢 ${data.topic || "Latest News"} from VVC Vavuniya!`,
        },
      };
    }

    if (taskType === "NOTICE_WRITER") {
      return {
        success: true,
        provider: "mock",
        model: "mock-v1",
        result: {
          titleTa: "அறிவிப்பு",
          titleEn: "Notice",
          contentTa: `அன்புள்ள மாணவர்களே,\n\n${data.points || "முக்கியமான தகவல்"}\n\nதலைமை ஆசிரியர்`,
          contentEn: `Dear Students,\n\n${data.points || "Important information"}\n\nPrincipal`,
          urgentVersion: data.points?.toString() || "Important notice",
        },
      };
    }

    if (taskType === "TRANSLATION") {
      return {
        success: true,
        provider: "mock",
        model: "mock-v1",
        result: {
          translated: `[Translation of: ${data.text}]`,
          language: data.targetLang,
        },
      };
    }

    if (taskType === "ALT_TEXT") {
      return {
        success: true,
        provider: "mock",
        model: "mock-v1",
        result: {
          altText: "School event photo from VVC Vavuniya Vipulanantha College",
        },
      };
    }

    if (taskType === "SPORTS_SUMMARY") {
      return {
        success: true,
        provider: "mock",
        model: "mock-v1",
        result: {
          summaryTa: "விளையாட்டு மேளா வெற்றிகரமாக நடைபெற்றது.",
          summaryEn: "The sports meet was conducted successfully.",
          championAnnouncement: `${data.champion || "House"} is the overall champion!`,
        },
      };
    }

    return {
      success: false,
      provider: "mock",
      model: "mock-v1",
      error: "Unsupported task type",
    };
  }
}

class OpenAIProvider implements AIProvider {
  name = "openai";

  async generate(input: AITaskInput): Promise<AITaskOutput> {
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) throw new Error("OPENAI_API_KEY not set");

    const prompt = buildPrompt(input);
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${apiKey}` },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: prompt }],
        response_format: { type: "json_object" },
      }),
    });

    if (!response.ok) throw new Error(`OpenAI API error: ${response.statusText}`);
    const json = await response.json();
    const content = json.choices[0]?.message?.content;

    return {
      success: true,
      provider: "openai",
      model: "gpt-4o-mini",
      result: JSON.parse(content),
    };
  }
}

class AnthropicProvider implements AIProvider {
  name = "anthropic";

  async generate(input: AITaskInput): Promise<AITaskOutput> {
    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) throw new Error("ANTHROPIC_API_KEY not set");

    const prompt = buildPrompt(input);
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-6",
        max_tokens: 2048,
        messages: [{ role: "user", content: prompt + "\n\nRespond with valid JSON only." }],
      }),
    });

    if (!response.ok) throw new Error(`Anthropic API error: ${response.statusText}`);
    const json = await response.json();
    const content = json.content[0]?.text;

    return {
      success: true,
      provider: "anthropic",
      model: "claude-sonnet-4-6",
      result: JSON.parse(content),
    };
  }
}

function buildPrompt(input: AITaskInput): string {
  const { taskType, data } = input;
  const school = "VVC - Vavuniya Vipulanantha College (வவுனியா விபுலாநந்தா கல்லூரி), Vavuniya, Sri Lanka";

  if (taskType === "POST_WRITER") {
    return `You are a content writer for ${school}. Write a school news post based on these points: ${JSON.stringify(data)}.
Return JSON with keys: titleTa, titleEn, contentTa, contentEn, excerptTa, excerptEn, facebookCaption.`;
  }

  if (taskType === "NOTICE_WRITER") {
    return `You are a notice writer for ${school}. Write a formal notice based on: ${JSON.stringify(data)}.
Return JSON with keys: titleTa, titleEn, contentTa, contentEn, urgentVersion.`;
  }

  if (taskType === "TRANSLATION") {
    return `Translate the following text from ${data.sourceLang} to ${data.targetLang}: "${data.text}".
Return JSON with key: translated.`;
  }

  if (taskType === "EVENT_REPORT") {
    return `Write an event report for ${school} based on: ${JSON.stringify(data)}.
Return JSON with keys: reportTa, reportEn, websiteSummary, socialCaption.`;
  }

  if (taskType === "SPORTS_SUMMARY") {
    return `Write a sports meet summary for ${school} based on results: ${JSON.stringify(data)}.
Return JSON with keys: summaryTa, summaryEn, championAnnouncement.`;
  }

  return `Process this request for ${school}: ${JSON.stringify(data)}. Return JSON.`;
}

function createProvider(): AIProvider {
  const providerName = process.env.AI_PROVIDER || "mock";

  switch (providerName) {
    case "openai":
      return new OpenAIProvider();
    case "anthropic":
      return new AnthropicProvider();
    default:
      return new MockProvider();
  }
}

export const aiProvider = createProvider();
