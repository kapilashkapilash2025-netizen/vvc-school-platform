import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Calendar, ChevronRight, Trophy } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sports",
  description: "Sports activities, houses, results and live scoreboard at Vavuniya Vipulanantha College.",
};

const houses = [
  { id: "1", name: "Red House", nameTa: "சிவப்பு இல்லம்", color: "#DC2626", points: 142 },
  { id: "2", name: "Blue House", nameTa: "நீல இல்லம்", color: "#2563EB", points: 128 },
  { id: "3", name: "Green House", nameTa: "பச்சை இல்லம்", color: "#16A34A", points: 115 },
  { id: "4", name: "Yellow House", nameTa: "மஞ்சள் இல்லம்", color: "#CA8A04", points: 98 },
];

const recentResults = [
  { event: "100m Sprint (Boys U16)", first: "Red House", second: "Blue House", third: "Green House" },
  { event: "Long Jump (Girls U14)", first: "Green House", second: "Yellow House", third: "Red House" },
  { event: "Relay 4x100m (Boys)", first: "Blue House", second: "Red House", third: "Green House" },
];

export default function SportsPage() {
  const sorted = [...houses].sort((a, b) => b.points - a.points);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <nav className="text-sm text-gray-500 mb-6 flex items-center gap-1">
        <Link href="/" className="hover:text-[#8B0000]">Home</Link>
        <span>/</span>
        <span className="text-gray-900">Sports</span>
      </nav>

      {/* Hero */}
      <div className="bg-gradient-to-r from-[#8B0000] to-[#4a0000] text-white rounded-2xl p-8 md:p-12 mb-10 relative overflow-hidden">
        <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-10">
          <Trophy className="h-48 w-48" />
        </div>
        <div className="relative">
          <Badge variant="live" className="mb-4 text-sm px-3 py-1">LIVE</Badge>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Annual Sports Meet 2026</h1>
          <p className="font-tamil text-[#FFD700] text-lg mb-4">ஆண்டு விளையாட்டு மேளா 2026</p>
          <p className="text-gray-300 mb-6">July 15–17, 2026 | School Grounds, Vavuniya</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/sports/live"
              className="bg-[#FFD700] text-[#1a1a1a] px-6 py-3 rounded-lg font-bold hover:bg-[#E5C100] transition-colors flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-red-600 animate-live" />
              Live Scoreboard
            </Link>
            <Link href="/sports/results"
              className="border border-white/50 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors flex items-center gap-2">
              View Results <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* House standings */}
        <div className="lg:col-span-2">
          <h2 className="text-xl font-bold text-gray-900 mb-5 flex items-center gap-2">
            <Trophy className="h-5 w-5 text-[#8B0000]" />
            House Standings
            <span className="font-tamil text-base text-gray-500">இல்ல தரவரிசை</span>
          </h2>
          <div className="space-y-4">
            {sorted.map((house, i) => (
              <div key={house.id} className="bg-white border border-gray-200 rounded-xl p-5 flex items-center gap-4 shadow-sm">
                <div className={`text-2xl font-black ${i === 0 ? "text-[#FFD700]" : i === 1 ? "text-gray-400" : i === 2 ? "text-amber-600" : "text-gray-300"}`}>
                  #{i + 1}
                </div>
                <div className="h-10 w-10 rounded-full flex-shrink-0 border-4 border-white shadow" style={{ backgroundColor: house.color }} />
                <div className="flex-1">
                  <div className="font-bold text-gray-900">{house.name}</div>
                  <div className="text-sm font-tamil text-gray-500">{house.nameTa}</div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-black text-[#8B0000]">{house.points}</div>
                  <div className="text-xs text-gray-500">points</div>
                </div>
                <div className="w-32 hidden md:block">
                  <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all"
                      style={{ width: `${(house.points / sorted[0].points) * 100}%`, backgroundColor: house.color }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Recent results */}
          <h2 className="text-xl font-bold text-gray-900 mb-5 mt-8 flex items-center gap-2">
            <Calendar className="h-5 w-5 text-[#8B0000]" />
            Recent Results
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm bg-white border border-gray-200 rounded-xl overflow-hidden">
              <thead className="bg-[#8B0000] text-white">
                <tr>
                  <th className="text-left px-4 py-3">Event</th>
                  <th className="px-4 py-3">🥇 1st</th>
                  <th className="px-4 py-3">🥈 2nd</th>
                  <th className="px-4 py-3">🥉 3rd</th>
                </tr>
              </thead>
              <tbody>
                {recentResults.map((r, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="px-4 py-3 font-medium text-gray-800">{r.event}</td>
                    <td className="px-4 py-3 text-center text-[#8B0000] font-semibold">{r.first}</td>
                    <td className="px-4 py-3 text-center text-gray-600">{r.second}</td>
                    <td className="px-4 py-3 text-center text-gray-500">{r.third}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4">
            <Link href="/sports/results"
              className="text-[#8B0000] text-sm hover:underline flex items-center gap-1">
              View all results <ChevronRight className="h-3 w-3" />
            </Link>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
            <div className="bg-[#8B0000] text-white px-5 py-3 font-semibold">Quick Links</div>
            <div className="p-4 space-y-2">
              {[
                { href: "/sports/live", label: "Live Scoreboard", icon: "🔴" },
                { href: "/sports/results", label: "Full Results", icon: "📊" },
                { href: "/sports/fixtures", label: "Fixtures", icon: "📅" },
                { href: "/sports/certificates", label: "Certificates", icon: "🏆" },
                { href: "/sports/gallery", label: "Sports Gallery", icon: "📸" },
              ].map((item) => (
                <Link key={item.href} href={item.href}
                  className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-gray-50 transition-colors group">
                  <span className="text-lg">{item.icon}</span>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-[#8B0000] transition-colors">
                    {item.label}
                  </span>
                  <ChevronRight className="h-3.5 w-3.5 text-gray-300 ml-auto group-hover:text-[#8B0000]" />
                </Link>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#FFD700] to-[#E5C100] rounded-xl p-5">
            <Trophy className="h-8 w-8 text-[#8B0000] mb-3" />
            <h3 className="font-bold text-[#1a1a1a] text-lg mb-1">Overall Champion</h3>
            <p className="text-sm text-[#4a3900] mb-3">Current leader after Day 1</p>
            <div className="bg-white/70 rounded-lg p-3 flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-red-600 flex-shrink-0" />
              <div>
                <div className="font-bold text-[#8B0000]">Red House</div>
                <div className="text-sm text-gray-600">142 Points</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
