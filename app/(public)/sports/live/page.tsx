"use client";

import { Badge } from "@/components/ui/badge";
import { Maximize2, RefreshCw } from "lucide-react";
import { useEffect, useState } from "react";

const houses = [
  { id: "1", name: "Red House", nameTa: "சிவப்பு இல்லம்", color: "#DC2626", bg: "bg-red-600", points: 142 },
  { id: "2", name: "Blue House", nameTa: "நீல இல்லம்", color: "#2563EB", bg: "bg-blue-600", points: 128 },
  { id: "3", name: "Green House", nameTa: "பச்சை இல்லம்", color: "#16A34A", bg: "bg-green-600", points: 115 },
  { id: "4", name: "Yellow House", nameTa: "மஞ்சள் இல்லம்", color: "#CA8A04", bg: "bg-yellow-600", points: 98 },
];

const liveEvents = [
  { id: "1", name: "200m Sprint (Boys U18)", status: "LIVE", venue: "Track A" },
  { id: "2", name: "Shot Put (Girls U16)", status: "LIVE", venue: "Field 2" },
  { id: "3", name: "High Jump (Boys U14)", status: "UPCOMING", time: "2:30 PM" },
  { id: "4", name: "Relay 4x400m (Mixed)", status: "UPCOMING", time: "3:00 PM" },
  { id: "5", name: "100m Sprint (Girls U12)", status: "COMPLETED" },
];

export default function LiveSportsPage() {
  const [isProjector, setIsProjector] = useState(false);
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [sorted] = useState([...houses].sort((a, b) => b.points - a.points));

  useEffect(() => {
    const interval = setInterval(() => {
      setLastUpdated(new Date());
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  if (isProjector) {
    return (
      <div className="min-h-screen bg-black text-white flex flex-col p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-black">VVC Annual Sports Meet 2026</h1>
            <p className="text-gray-400 font-tamil text-xl mt-1">ஆண்டு விளையாட்டு மேளா 2026</p>
          </div>
          <div className="flex items-center gap-4">
            <Badge variant="live" className="text-lg px-4 py-2">LIVE</Badge>
            <button onClick={() => setIsProjector(false)} className="text-gray-400 hover:text-white border border-gray-600 px-4 py-2 rounded-lg text-sm">
              Exit Projector
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          {sorted.map((house, i) => (
            <div key={house.id} className="rounded-2xl border-2 p-6 text-center" style={{ borderColor: house.color }}>
              <div className="text-6xl font-black mb-2" style={{ color: i === 0 ? "#FFD700" : "#9ca3af" }}>
                #{i + 1}
              </div>
              <div className="h-8 w-8 rounded-full mx-auto mb-3" style={{ backgroundColor: house.color }} />
              <div className="font-bold text-2xl">{house.name}</div>
              <div className="text-gray-400 font-tamil">{house.nameTa}</div>
              <div className="text-6xl font-black mt-4" style={{ color: house.color }}>{house.points}</div>
              <div className="text-gray-400 text-lg">points</div>
            </div>
          ))}
        </div>

        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900 rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-4 text-red-400 flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-500 animate-live" /> Live Events
            </h2>
            {liveEvents.filter(e => e.status === "LIVE").map((event) => (
              <div key={event.id} className="flex items-center justify-between p-4 bg-red-900/30 border border-red-800 rounded-xl mb-3">
                <div className="text-xl font-semibold">{event.name}</div>
                <div className="text-gray-300">{event.venue}</div>
              </div>
            ))}
          </div>
          <div className="bg-gray-900 rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-4 text-yellow-400">Upcoming Events</h2>
            {liveEvents.filter(e => e.status === "UPCOMING").map((event) => (
              <div key={event.id} className="flex items-center justify-between p-4 bg-gray-800 rounded-xl mb-3">
                <div className="text-xl font-semibold">{event.name}</div>
                <div className="text-yellow-400 font-bold">{event.time}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center text-gray-600 mt-6 text-sm">
          Last updated: {lastUpdated.toLocaleTimeString()} · Auto-refreshes every 30 seconds
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="flex items-center justify-between mb-8">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <h1 className="text-2xl font-bold text-gray-900">Live Sports Scoreboard</h1>
            <Badge variant="live">LIVE</Badge>
          </div>
          <p className="text-sm text-gray-500 font-tamil">நேரடி விளையாட்டு மதிப்பெண் பலகை</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <RefreshCw className="h-4 w-4" />
            <span>Updated: {lastUpdated.toLocaleTimeString()}</span>
          </div>
          <button
            onClick={() => setIsProjector(true)}
            className="flex items-center gap-2 bg-[#8B0000] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#6B0000] transition-colors"
          >
            <Maximize2 className="h-4 w-4" />
            Projector Mode
          </button>
        </div>
      </div>

      {/* House standings */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {sorted.map((house, i) => (
          <div key={house.id} className={`rounded-xl border-2 p-5 text-center transition-all hover:shadow-lg`}
            style={{ borderColor: house.color }}>
            <div className={`text-3xl font-black mb-2 ${i === 0 ? "text-[#FFD700]" : "text-gray-400"}`}>
              #{i + 1}
            </div>
            <div className="h-8 w-8 rounded-full mx-auto mb-2 shadow-md" style={{ backgroundColor: house.color }} />
            <div className="font-bold text-gray-900">{house.name}</div>
            <div className="text-xs font-tamil text-gray-500">{house.nameTa}</div>
            <div className="text-4xl font-black mt-3" style={{ color: house.color }}>
              {house.points}
            </div>
            <div className="text-xs text-gray-500">points</div>
          </div>
        ))}
      </div>

      {/* Events */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
          <div className="bg-red-600 text-white px-5 py-3 font-semibold flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-white animate-live" />
            Currently Live
          </div>
          <div className="p-4 space-y-3">
            {liveEvents.filter(e => e.status === "LIVE").map((event) => (
              <div key={event.id} className="flex items-center justify-between p-3 bg-red-50 rounded-lg border border-red-100">
                <div>
                  <div className="font-medium text-gray-900 text-sm">{event.name}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{event.venue}</div>
                </div>
                <Badge variant="live">LIVE</Badge>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
          <div className="bg-amber-500 text-white px-5 py-3 font-semibold">Upcoming Next</div>
          <div className="p-4 space-y-3">
            {liveEvents.filter(e => e.status === "UPCOMING").map((event) => (
              <div key={event.id} className="flex items-center justify-between p-3 bg-amber-50 rounded-lg border border-amber-100">
                <div className="font-medium text-gray-900 text-sm">{event.name}</div>
                <Badge variant="warning">{event.time}</Badge>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 text-center text-xs text-gray-400">
        Scoreboard auto-updates every 30 seconds · All results are official
      </div>
    </div>
  );
}
