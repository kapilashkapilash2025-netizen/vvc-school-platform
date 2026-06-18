"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, FileText, Languages, Sparkles, Trophy } from "lucide-react";
import { useState } from "react";

type Tool = "post" | "notice" | "translation" | "sports" | null;

interface AIResult {
  titleTa?: string;
  titleEn?: string;
  contentTa?: string;
  contentEn?: string;
  excerptTa?: string;
  excerptEn?: string;
  facebookCaption?: string;
  urgentVersion?: string;
  translated?: string;
  summaryTa?: string;
  summaryEn?: string;
  championAnnouncement?: string;
}

export default function AIToolsPage() {
  const [activeTool, setActiveTool] = useState<Tool>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AIResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const tools = [
    { id: "post" as Tool, label: "Post Writer", labelTa: "இடுகை எழுத்தாளர்", icon: BookOpen, desc: "Generate school news posts in Tamil and English from key points." },
    { id: "notice" as Tool, label: "Notice Writer", labelTa: "அறிவிப்பு எழுத்தாளர்", icon: FileText, desc: "Generate formal notices and announcements." },
    { id: "translation" as Tool, label: "Translation", labelTa: "மொழிபெயர்ப்பு", icon: Languages, desc: "Translate content between Tamil and English." },
    { id: "sports" as Tool, label: "Sports Summary", labelTa: "விளையாட்டு சுருக்கம்", icon: Trophy, desc: "Generate sports meet summary and champion announcement." },
  ];

  async function handleGenerate(formData: FormData) {
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const body: Record<string, string> = {};
      formData.forEach((v, k) => { body[k] = v.toString(); });

      const res = await fetch("/api/ai/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ taskType: activeTool, data: body }),
      });

      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Failed");
      setResult(json.result);
    } catch (e) {
      setError(e instanceof Error ? e.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-6 max-w-4xl animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
          <Sparkles className="h-6 w-6 text-[#8B0000]" />
          AI Tools
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          AI-assisted content generation for school posts, notices, and reports.
          <span className="ml-2 text-amber-600 font-medium">All AI content must be reviewed before publishing.</span>
        </p>
      </div>

      {/* Tool selection */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {tools.map((tool) => (
          <button
            key={tool.id}
            onClick={() => { setActiveTool(tool.id); setResult(null); setError(null); }}
            className={`p-4 rounded-xl border-2 text-left transition-all hover:shadow-md ${
              activeTool === tool.id
                ? "border-[#8B0000] bg-[#8B0000]/5"
                : "border-gray-200 bg-white hover:border-[#8B0000]/30"
            }`}
          >
            <tool.icon className={`h-6 w-6 mb-2 ${activeTool === tool.id ? "text-[#8B0000]" : "text-gray-500"}`} />
            <div className={`font-semibold text-sm ${activeTool === tool.id ? "text-[#8B0000]" : "text-gray-800"}`}>
              {tool.label}
            </div>
            <div className="text-xs font-tamil text-gray-400 mt-0.5">{tool.labelTa}</div>
            <div className="text-xs text-gray-500 mt-2 leading-relaxed">{tool.desc}</div>
          </button>
        ))}
      </div>

      {/* Tool forms */}
      {activeTool && (
        <Card>
          <CardHeader>
            <CardTitle className="text-base flex items-center gap-2">
              {activeTool === "post" && <><BookOpen className="h-4 w-4 text-[#8B0000]" /> AI Post Writer</>}
              {activeTool === "notice" && <><FileText className="h-4 w-4 text-[#8B0000]" /> AI Notice Writer</>}
              {activeTool === "translation" && <><Languages className="h-4 w-4 text-[#8B0000]" /> Translation</>}
              {activeTool === "sports" && <><Trophy className="h-4 w-4 text-[#8B0000]" /> Sports Summary</>}
              <Badge variant="secondary" className="ml-auto">AI Draft</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form action={handleGenerate} className="space-y-4">
              {activeTool === "post" && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Topic / Event Name</label>
                    <input name="topic" required className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#8B0000]" placeholder="e.g., Annual Sports Meet 2026" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Key Points</label>
                    <textarea name="points" rows={4} required className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#8B0000] resize-none" placeholder="Enter key points, one per line..." />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                      <select name="category" className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#8B0000]">
                        <option>General News</option>
                        <option>Academic</option>
                        <option>Sports</option>
                        <option>Cultural</option>
                        <option>Events</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Tone</label>
                      <select name="tone" className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#8B0000]">
                        <option>Formal</option>
                        <option>Celebratory</option>
                        <option>Informative</option>
                      </select>
                    </div>
                  </div>
                </>
              )}

              {activeTool === "notice" && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Notice Points</label>
                    <textarea name="points" rows={5} required className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#8B0000] resize-none" placeholder="Enter the main points of this notice..." />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Priority</label>
                    <select name="priority" className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#8B0000]">
                      <option>NORMAL</option>
                      <option>IMPORTANT</option>
                      <option>URGENT</option>
                    </select>
                  </div>
                </>
              )}

              {activeTool === "translation" && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Source Language</label>
                    <select name="sourceLang" className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#8B0000]">
                      <option value="English">English</option>
                      <option value="Tamil">Tamil</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Target Language</label>
                    <select name="targetLang" className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#8B0000]">
                      <option value="Tamil">Tamil</option>
                      <option value="English">English</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Text to Translate</label>
                    <textarea name="text" rows={5} required className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#8B0000] resize-none" placeholder="Enter text to translate..." />
                  </div>
                </>
              )}

              {activeTool === "sports" && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Champion House</label>
                    <input name="champion" required className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#8B0000]" placeholder="e.g., Red House" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Final Points Summary</label>
                    <textarea name="points" rows={4} required className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#8B0000] resize-none" placeholder="Red House: 142, Blue House: 128, Green House: 115, Yellow House: 98" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Notable Events / Winners</label>
                    <textarea name="highlights" rows={3} className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#8B0000] resize-none" placeholder="Key highlights and outstanding performances..." />
                  </div>
                </>
              )}

              <div className="flex items-center gap-3 pt-2">
                <Button type="submit" loading={loading} className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4" />
                  {loading ? "Generating..." : "Generate with AI"}
                </Button>
                <p className="text-xs text-gray-500">Content will be saved as draft for review</p>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      {/* Error */}
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-sm text-red-700">
          {error}
        </div>
      )}

      {/* Results */}
      {result && (
        <Card className="border-green-200 bg-green-50/30">
          <CardHeader>
            <CardTitle className="text-base text-green-800 flex items-center gap-2">
              <Sparkles className="h-4 w-4" />
              AI Generated Content
              <Badge variant="warning" className="ml-auto">Draft — Review Required</Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {result.titleTa && (
              <ResultField label="Title (Tamil)" value={result.titleTa} />
            )}
            {result.titleEn && (
              <ResultField label="Title (English)" value={result.titleEn} />
            )}
            {result.contentTa && (
              <ResultField label="Content (Tamil)" value={result.contentTa} multiline />
            )}
            {result.contentEn && (
              <ResultField label="Content (English)" value={result.contentEn} multiline />
            )}
            {result.facebookCaption && (
              <ResultField label="Facebook Caption" value={result.facebookCaption} />
            )}
            {result.urgentVersion && (
              <ResultField label="Short/Urgent Version" value={result.urgentVersion} />
            )}
            {result.translated && (
              <ResultField label="Translation" value={result.translated} multiline />
            )}
            {result.summaryTa && (
              <ResultField label="Sports Summary (Tamil)" value={result.summaryTa} multiline />
            )}
            {result.summaryEn && (
              <ResultField label="Sports Summary (English)" value={result.summaryEn} multiline />
            )}
            {result.championAnnouncement && (
              <ResultField label="Champion Announcement" value={result.championAnnouncement} />
            )}
            <div className="flex gap-3 pt-2 border-t border-green-200">
              <Button variant="default" size="sm">Use in Post Editor</Button>
              <Button variant="outline" size="sm">Copy All</Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

function ResultField({ label, value, multiline = false }: { label: string; value: string; multiline?: boolean }) {
  return (
    <div>
      <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1.5">{label}</label>
      {multiline ? (
        <div className="bg-white border border-green-200 rounded-lg px-3 py-2.5 text-sm text-gray-800 whitespace-pre-wrap leading-relaxed">
          {value}
        </div>
      ) : (
        <div className="bg-white border border-green-200 rounded-lg px-3 py-2.5 text-sm text-gray-800 font-medium">
          {value}
        </div>
      )}
    </div>
  );
}
