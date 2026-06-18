import { Award, Bell, BookOpen, Calendar, CheckCircle, Clock, Image, Trophy, TrendingUp, Users } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const stats = [
  { label: "Total Posts", value: "47", change: "+3 this week", icon: BookOpen, color: "text-blue-600", bg: "bg-blue-50" },
  { label: "Pending Approvals", value: "5", change: "Needs attention", icon: Clock, color: "text-amber-600", bg: "bg-amber-50" },
  { label: "Active Notices", value: "8", change: "2 urgent", icon: Bell, color: "text-red-600", bg: "bg-red-50" },
  { label: "Upcoming Events", value: "3", change: "Next: July 8", icon: Calendar, color: "text-green-600", bg: "bg-green-50" },
  { label: "Gallery Albums", value: "24", change: "+1 this week", icon: Image, color: "text-purple-600", bg: "bg-purple-50" },
  { label: "Total Achievements", value: "156", change: "2025–2026", icon: Award, color: "text-orange-600", bg: "bg-orange-50" },
];

const recentActivity = [
  { action: "Post published", detail: "Annual Day 2026 Report", user: "Teacher Admin", time: "10 min ago", type: "publish" },
  { action: "Notice created", detail: "Sports Meet Registration", user: "Principal", time: "1 hr ago", type: "create" },
  { action: "Gallery uploaded", detail: "12 photos added to Science Fair album", user: "Media Team", time: "2 hrs ago", type: "upload" },
  { action: "Post submitted", detail: "Library Book Drive — awaiting review", user: "Teacher Admin", time: "3 hrs ago", type: "review" },
  { action: "Sports result", detail: "100m Sprint results entered", user: "Sports Admin", time: "5 hrs ago", type: "sports" },
];

const typeColors: Record<string, string> = {
  publish: "bg-green-100 text-green-700",
  create: "bg-blue-100 text-blue-700",
  upload: "bg-purple-100 text-purple-700",
  review: "bg-amber-100 text-amber-700",
  sports: "bg-red-100 text-red-700",
};

export default function AdminDashboard() {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-500 text-sm mt-1">Welcome back, Admin — VVC Vavuniya Vipulanantha College</p>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
        {stats.map((stat) => (
          <Card key={stat.label} className="hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <div className={`inline-flex items-center justify-center h-9 w-9 rounded-lg ${stat.bg} ${stat.color} mb-3`}>
                <stat.icon className="h-4.5 w-4.5" />
              </div>
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-xs font-medium text-gray-600 mt-0.5">{stat.label}</div>
              <div className="text-xs text-gray-400 mt-1">{stat.change}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentActivity.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${typeColors[item.type]}`}>
                      {item.action}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-800 truncate">{item.detail}</p>
                      <p className="text-xs text-gray-400 mt-0.5">{item.user} · {item.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick actions */}
        <div className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {[
                { href: "/admin/posts/new", label: "New Post", icon: BookOpen },
                { href: "/admin/notices/new", label: "New Notice", icon: Bell },
                { href: "/admin/events/new", label: "New Event", icon: Calendar },
                { href: "/admin/gallery/upload", label: "Upload Photos", icon: Image },
                { href: "/admin/ai-tools", label: "AI Tools", icon: Trophy },
              ].map((item) => (
                <Link key={item.href} href={item.href}>
                  <div className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-[#8B0000]/5 border border-transparent hover:border-[#8B0000]/20 transition-all group cursor-pointer">
                    <div className="h-7 w-7 rounded-md bg-[#8B0000]/10 text-[#8B0000] flex items-center justify-center group-hover:bg-[#8B0000] group-hover:text-white transition-all">
                      <item.icon className="h-3.5 w-3.5" />
                    </div>
                    <span className="text-sm font-medium text-gray-700 group-hover:text-[#8B0000] transition-colors">
                      {item.label}
                    </span>
                  </div>
                </Link>
              ))}
            </CardContent>
          </Card>

          <Card className="border-amber-200 bg-amber-50">
            <CardContent className="p-4">
              <div className="flex items-center gap-2 text-amber-700 mb-2">
                <Clock className="h-4 w-4" />
                <span className="text-sm font-semibold">Pending Review</span>
              </div>
              <p className="text-2xl font-bold text-amber-800">5 items</p>
              <p className="text-xs text-amber-600 mt-1">Posts and notices awaiting approval</p>
              <Link href="/admin/posts?status=REVIEW"
                className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-amber-700 hover:text-amber-900 transition-colors">
                Review Now →
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center gap-2 text-green-700 mb-2">
                <TrendingUp className="h-4 w-4" />
                <span className="text-sm font-semibold">Sports Status</span>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <span className="h-2.5 w-2.5 rounded-full bg-green-500 animate-live" />
                <span className="text-sm font-semibold text-gray-800">Sports Meet LIVE</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">Red House leading with 142 pts</p>
              <Link href="/admin/sports"
                className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-[#8B0000] hover:underline">
                Manage Sports →
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Content workflow */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Content Workflow</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {[
              { stage: "Draft", count: 12, color: "border-gray-300 text-gray-600", bg: "bg-gray-100" },
              { stage: "Review", count: 5, color: "border-amber-400 text-amber-700", bg: "bg-amber-50" },
              { stage: "Approved", count: 3, color: "border-blue-400 text-blue-700", bg: "bg-blue-50" },
              { stage: "Published", count: 47, color: "border-green-400 text-green-700", bg: "bg-green-50" },
              { stage: "Archived", count: 23, color: "border-gray-200 text-gray-400", bg: "bg-gray-50" },
            ].map((s) => (
              <div key={s.stage} className={`${s.bg} border-2 ${s.color} rounded-xl p-4 text-center`}>
                <div className={`text-3xl font-black ${s.color.split(" ")[1]}`}>{s.count}</div>
                <div className={`text-sm font-semibold mt-1 ${s.color.split(" ")[1]}`}>{s.stage}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
