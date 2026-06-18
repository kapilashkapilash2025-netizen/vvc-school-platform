"use client";

import { cn } from "@/lib/utils";
import {
  Award,
  BarChart2,
  Bell,
  BookOpen,
  Calendar,
  ChevronLeft,
  ChevronRight,
  Download,
  Home,
  Image,
  LayoutDashboard,
  LogOut,
  Settings,
  Sparkles,
  Trophy,
  Users,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/posts", label: "Posts", icon: BookOpen },
  { href: "/admin/notices", label: "Notices", icon: Bell },
  { href: "/admin/events", label: "Events", icon: Calendar },
  { href: "/admin/gallery", label: "Gallery", icon: Image },
  { href: "/admin/downloads", label: "Downloads", icon: Download },
  { href: "/admin/achievements", label: "Achievements", icon: Award },
  { href: "/admin/sports", label: "Sports", icon: Trophy },
  { href: "/admin/ai-tools", label: "AI Tools", icon: Sparkles },
  { href: "/admin/users", label: "Users", icon: Users },
  { href: "/admin/analytics", label: "Analytics", icon: BarChart2 },
  { href: "/admin/settings", label: "Settings", icon: Settings },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      {/* Sidebar */}
      <aside className={cn(
        "bg-[#1a1a1a] text-gray-300 flex flex-col transition-all duration-300 flex-shrink-0",
        collapsed ? "w-16" : "w-60"
      )}>
        {/* Logo */}
        <div className="flex items-center gap-3 px-4 py-5 border-b border-gray-800">
          <div className="h-8 w-8 rounded-lg bg-[#8B0000] flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
            VVC
          </div>
          {!collapsed && (
            <div className="min-w-0">
              <div className="text-white font-bold text-sm truncate">VVC Admin</div>
              <div className="text-gray-500 text-xs truncate">Dashboard</div>
            </div>
          )}
        </div>

        {/* Nav */}
        <nav className="flex-1 py-4 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/admin" && pathname.startsWith(item.href));
            return (
              <Link key={item.href} href={item.href}>
                <div className={cn(
                  "flex items-center gap-3 px-4 py-2.5 mx-2 rounded-lg transition-all mb-0.5",
                  isActive
                    ? "bg-[#8B0000] text-white"
                    : "hover:bg-gray-800 text-gray-400 hover:text-white"
                )}>
                  <item.icon className="h-4.5 w-4.5 flex-shrink-0" />
                  {!collapsed && <span className="text-sm font-medium">{item.label}</span>}
                </div>
              </Link>
            );
          })}
        </nav>

        {/* Bottom */}
        <div className="border-t border-gray-800 p-4 space-y-2">
          <Link href="/" target="_blank">
            <div className={cn(
              "flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-gray-800 text-gray-400 hover:text-white transition-all",
            )}>
              <Home className="h-4 w-4 flex-shrink-0" />
              {!collapsed && <span className="text-sm">View Website</span>}
            </div>
          </Link>
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="w-full flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-gray-800 text-gray-400 hover:text-white transition-all"
          >
            {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
            {!collapsed && <span className="text-sm">Collapse</span>}
          </button>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Topbar */}
        <header className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between gap-4 flex-shrink-0">
          <div className="flex items-center gap-2">
            <div className="text-sm text-gray-500">
              {navItems.find(n => pathname.startsWith(n.href) && n.href !== "/admin")?.label || "Dashboard"}
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-[#8B0000] text-white flex items-center justify-center text-sm font-bold">
              A
            </div>
            <div className="hidden sm:block text-sm">
              <div className="font-medium text-gray-800">Super Admin</div>
              <div className="text-xs text-gray-400">admin@vvc.sch.lk</div>
            </div>
            <button className="p-1.5 rounded-lg hover:bg-gray-100 text-gray-500 ml-1">
              <LogOut className="h-4 w-4" />
            </button>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
