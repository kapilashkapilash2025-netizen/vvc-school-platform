import type { Metadata } from "next";
import { ChevronRight, Search } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "News",
  description: "Latest news and updates from Vavuniya Vipulanantha College.",
};

const categories = ["All", "Academic", "Sports", "Cultural", "Events", "Infrastructure", "Achievements"];

const newsList = [
  {
    id: "1",
    titleEn: "VVC Students Win 3 Gold Medals at Provincial Science Fair 2026",
    titleTa: "மாகாண அறிவியல் கண்காட்சியில் VVC மாணவர்கள் 3 தங்கப் பதக்கங்கள்",
    excerptEn: "Students from VVC represented the Vavuniya South Education Zone at the Northern Province Science Exhibition held in Jaffna and brought home 3 gold medals.",
    category: "Achievements",
    date: "2026-06-14",
    image: null,
  },
  {
    id: "2",
    titleEn: "Annual Prize-Giving Ceremony 2025 Celebrated with Grandeur",
    titleTa: "2025 ஆண்டு விருது வழங்கும் விழா சிறப்பாக கொண்டாடப்பட்டது",
    excerptEn: "The Divisional Secretary of Vavuniya graced the Annual Prize-Giving Ceremony as the chief guest, distributing awards to over 200 outstanding students.",
    category: "Events",
    date: "2026-06-10",
    image: null,
  },
  {
    id: "3",
    titleEn: "New State-of-the-Art Computer Lab Inaugurated",
    titleTa: "நவீன கணினி ஆய்வகம் திறந்து வைக்கப்பட்டது",
    excerptEn: "A new computer laboratory equipped with 40 modern workstations and high-speed internet was inaugurated this week, enhancing digital education capabilities.",
    category: "Infrastructure",
    date: "2026-06-05",
    image: null,
  },
  {
    id: "4",
    titleEn: "VVC Cricket Team Wins Zonal Tournament",
    titleTa: "VVC கிரிக்கெட் அணி மண்டல போட்டியில் வெற்றி",
    excerptEn: "The school cricket team clinched the Vavuniya South Education Zone Cricket Championship trophy for the second consecutive year.",
    category: "Sports",
    date: "2026-05-28",
    image: null,
  },
  {
    id: "5",
    titleEn: "Tamil Language Day Celebrated with Cultural Events",
    titleTa: "தமிழ் மொழி நாள் கலாச்சார நிகழ்ச்சிகளுடன் கொண்டாடப்பட்டது",
    excerptEn: "Students and staff marked Tamil Language Day with poetry recitals, drama performances, and a special assembly celebrating Tamil heritage.",
    category: "Cultural",
    date: "2026-05-20",
    image: null,
  },
];

export default function NewsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <nav className="text-sm text-gray-500 mb-6 flex items-center gap-1">
        <Link href="/" className="hover:text-[#8B0000]">Home</Link>
        <span>/</span>
        <span className="text-gray-900">News</span>
      </nav>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Latest News</h1>
          <p className="text-sm text-gray-500 font-tamil mt-0.5">செய்திகள்</p>
        </div>
        <div className="relative">
          <Search className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input type="search" placeholder="Search news..."
            className="pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm w-56 focus:outline-none focus:border-[#8B0000]" />
        </div>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => (
          <button key={cat}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${cat === "All" ? "bg-[#8B0000] text-white" : "bg-white border border-gray-200 text-gray-600 hover:border-[#8B0000] hover:text-[#8B0000]"}`}>
            {cat}
          </button>
        ))}
      </div>

      {/* News list */}
      <div className="space-y-6">
        {newsList.map((news, i) => (
          <Link key={news.id} href={`/news/${news.id}`}>
            <article className={`bg-white rounded-xl border border-gray-100 hover:border-[#8B0000]/30 hover:shadow-md transition-all group overflow-hidden ${i === 0 ? "shadow-sm" : ""}`}>
              <div className="flex gap-5 p-5">
                <div className={`bg-gray-100 rounded-lg flex items-center justify-center text-gray-300 flex-shrink-0 ${i === 0 ? "h-32 w-48 hidden md:flex" : "h-20 w-28 hidden sm:flex"}`}>
                  <span className="text-4xl">📰</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs bg-[#8B0000]/10 text-[#8B0000] px-2 py-0.5 rounded-full font-medium">
                      {news.category}
                    </span>
                    <span className="text-xs text-gray-400">{news.date}</span>
                  </div>
                  <h2 className={`font-bold text-gray-900 group-hover:text-[#8B0000] transition-colors ${i === 0 ? "text-lg" : "text-base"}`}>
                    {news.titleEn}
                  </h2>
                  <p className="text-xs font-tamil text-gray-500 mt-0.5">{news.titleTa}</p>
                  <p className="text-sm text-gray-600 mt-2 line-clamp-2">{news.excerptEn}</p>
                  <div className="flex items-center gap-1 mt-3 text-[#8B0000] text-sm font-medium">
                    Read more <ChevronRight className="h-3.5 w-3.5" />
                  </div>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-10 gap-2">
        <button className="px-4 py-2 border border-gray-200 rounded-lg text-sm hover:border-[#8B0000] disabled:opacity-50" disabled>← Previous</button>
        <button className="px-4 py-2 bg-[#8B0000] text-white rounded-lg text-sm">1</button>
        <button className="px-4 py-2 border border-gray-200 rounded-lg text-sm hover:border-[#8B0000]">2</button>
        <button className="px-4 py-2 border border-gray-200 rounded-lg text-sm hover:border-[#8B0000]">Next →</button>
      </div>
    </div>
  );
}
