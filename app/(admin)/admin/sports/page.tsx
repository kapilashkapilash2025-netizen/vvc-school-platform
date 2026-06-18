"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Edit2, Plus, Trophy } from "lucide-react";
import { useState } from "react";

const houses = [
  { id: "1", name: "Red House", color: "#DC2626", captain: "Arunan K.", teacher: "Mr. Suresh", points: 142 },
  { id: "2", name: "Blue House", color: "#2563EB", captain: "Priya S.", teacher: "Mrs. Kavitha", points: 128 },
  { id: "3", name: "Green House", color: "#16A34A", captain: "Raj M.", teacher: "Mr. Vijay", points: 115 },
  { id: "4", name: "Yellow House", color: "#CA8A04", captain: "Nila T.", teacher: "Mrs. Theva", points: 98 },
];

const events = [
  { id: "1", name: "100m Sprint (Boys U16)", category: "Athletics", ageGroup: "U16", gender: "Boys", status: "COMPLETED", time: "9:00 AM" },
  { id: "2", name: "200m Sprint (Boys U18)", category: "Athletics", ageGroup: "U18", gender: "Boys", status: "LIVE", time: "1:30 PM" },
  { id: "3", name: "Long Jump (Girls U14)", category: "Field", ageGroup: "U14", gender: "Girls", status: "COMPLETED", time: "10:00 AM" },
  { id: "4", name: "High Jump (Boys U14)", category: "Field", ageGroup: "U14", gender: "Boys", status: "SCHEDULED", time: "2:30 PM" },
  { id: "5", name: "Relay 4x100m", category: "Athletics", ageGroup: "Open", gender: "Mixed", status: "SCHEDULED", time: "4:00 PM" },
];

const statusConfig = {
  COMPLETED: { variant: "success" as const, label: "Done" },
  LIVE: { variant: "live" as const, label: "LIVE" },
  SCHEDULED: { variant: "outline" as const, label: "Upcoming" },
  CANCELLED: { variant: "destructive" as const, label: "Cancelled" },
};

export default function SportsAdminPage() {
  const [activeTab, setActiveTab] = useState<"houses" | "events" | "results">("houses");

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-gray-900 flex items-center gap-2">
            <Trophy className="h-5 w-5 text-[#8B0000]" />
            Sports Management
          </h1>
          <p className="text-sm text-gray-500 mt-0.5">Annual Sports Meet 2026 — July 15–17</p>
        </div>
        <div className="flex gap-2">
          <Badge variant="live">LIVE</Badge>
          <Button size="sm"><Plus className="h-4 w-4 mr-1" /> Add Event</Button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 bg-gray-100 p-1 rounded-lg w-fit">
        {(["houses", "events", "results"] as const).map((tab) => (
          <button key={tab} onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all capitalize ${activeTab === tab ? "bg-white shadow text-[#8B0000]" : "text-gray-600 hover:text-gray-800"}`}>
            {tab}
          </button>
        ))}
      </div>

      {/* Houses tab */}
      {activeTab === "houses" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {houses.map((house, i) => (
            <Card key={house.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-5">
                <div className="flex items-center justify-between mb-4">
                  <div className="h-10 w-10 rounded-full border-4 border-white shadow-md" style={{ backgroundColor: house.color }} />
                  <div className="text-2xl font-black" style={{ color: i === 0 ? "#FFD700" : "#9ca3af" }}>#{i + 1}</div>
                </div>
                <h3 className="font-bold text-gray-900">{house.name}</h3>
                <div className="mt-2 space-y-1 text-xs text-gray-500">
                  <div>Captain: <span className="text-gray-700">{house.captain}</span></div>
                  <div>Teacher: <span className="text-gray-700">{house.teacher}</span></div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <div className="text-3xl font-black" style={{ color: house.color }}>{house.points}</div>
                    <div className="text-xs text-gray-500">points</div>
                  </div>
                  <button className="p-2 rounded-lg hover:bg-gray-100 text-gray-500">
                    <Edit2 className="h-4 w-4" />
                  </button>
                </div>
                <div className="mt-3 h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full rounded-full" style={{ width: `${(house.points / 142) * 100}%`, backgroundColor: house.color }} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Events tab */}
      {activeTab === "events" && (
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Sports Events</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <table className="w-full text-sm">
              <thead className="border-b border-gray-100">
                <tr className="text-xs text-gray-500 uppercase tracking-wide">
                  <th className="text-left px-4 py-3">Event</th>
                  <th className="px-4 py-3">Category</th>
                  <th className="px-4 py-3">Age Group</th>
                  <th className="px-4 py-3">Gender</th>
                  <th className="px-4 py-3">Time</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {events.map((event) => {
                  const s = statusConfig[event.status as keyof typeof statusConfig];
                  return (
                    <tr key={event.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-3 font-medium text-gray-900">{event.name}</td>
                      <td className="px-4 py-3 text-center text-xs text-gray-500">{event.category}</td>
                      <td className="px-4 py-3 text-center text-xs text-gray-500">{event.ageGroup}</td>
                      <td className="px-4 py-3 text-center text-xs text-gray-500">{event.gender}</td>
                      <td className="px-4 py-3 text-center text-xs text-gray-500">{event.time}</td>
                      <td className="px-4 py-3 text-center">
                        <Badge variant={s.variant}>{s.label}</Badge>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <div className="flex justify-center gap-1">
                          <Button size="sm" variant="outline" className="h-7 text-xs">
                            Enter Results
                          </Button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </CardContent>
        </Card>
      )}

      {/* Results tab */}
      {activeTab === "results" && (
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Enter Event Results</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Select Event</label>
                    <select className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#8B0000]">
                      {events.filter(e => e.status !== "COMPLETED").map(e => (
                        <option key={e.id}>{e.name}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Point Rule</label>
                    <select className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#8B0000]">
                      <option>Standard (5-3-1)</option>
                      <option>Double (10-6-2)</option>
                    </select>
                  </div>
                </div>
                {[1, 2, 3].map((place) => (
                  <div key={place} className="grid grid-cols-3 gap-4 p-3 bg-gray-50 rounded-lg">
                    <div className="text-sm font-medium text-gray-700 flex items-center gap-2">
                      {place === 1 ? "🥇" : place === 2 ? "🥈" : "🥉"} {place === 1 ? "1st" : place === 2 ? "2nd" : "3rd"} Place
                    </div>
                    <div>
                      <input placeholder="Student name" className="w-full border border-gray-200 rounded px-2 py-1 text-xs focus:outline-none focus:border-[#8B0000]" />
                    </div>
                    <div>
                      <select className="w-full border border-gray-200 rounded px-2 py-1 text-xs focus:outline-none focus:border-[#8B0000]">
                        {houses.map(h => <option key={h.id}>{h.name}</option>)}
                      </select>
                    </div>
                  </div>
                ))}
                <Button type="submit">Save Results & Update Points</Button>
              </form>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
