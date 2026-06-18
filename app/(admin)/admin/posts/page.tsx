"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Edit2, Plus, Search, Trash2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const mockPosts = [
  { id: "1", titleEn: "Annual Sports Meet 2026 Registration Open", category: "Sports", status: "PUBLISHED", author: "Teacher Admin", date: "2026-06-15" },
  { id: "2", titleEn: "VVC Students Win Provincial Science Fair", category: "Achievements", status: "PUBLISHED", author: "Teacher Admin", date: "2026-06-14" },
  { id: "3", titleEn: "New Computer Lab Inauguration Report", category: "Infrastructure", status: "REVIEW", author: "Media Team", date: "2026-06-05" },
  { id: "4", titleEn: "Inter-House Drama Competition Results", category: "Cultural", status: "DRAFT", author: "Student Editor", date: "2026-06-02" },
  { id: "5", titleEn: "End of Term 1 Summary", category: "Academic", status: "ARCHIVED", author: "Teacher Admin", date: "2026-04-20" },
];

const statusConfig = {
  DRAFT: { variant: "outline" as const, label: "Draft" },
  REVIEW: { variant: "warning" as const, label: "Review" },
  APPROVED: { variant: "secondary" as const, label: "Approved" },
  PUBLISHED: { variant: "success" as const, label: "Published" },
  ARCHIVED: { variant: "outline" as const, label: "Archived" },
};

export default function PostsAdminPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("ALL");

  const filtered = mockPosts.filter((p) => {
    const matchSearch = p.titleEn.toLowerCase().includes(search.toLowerCase());
    const matchFilter = filter === "ALL" || p.status === filter;
    return matchSearch && matchFilter;
  });

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-gray-900">Posts</h1>
          <p className="text-sm text-gray-500 mt-0.5">Manage school news and announcements</p>
        </div>
        <Link href="/admin/posts/new">
          <Button size="sm" className="flex items-center gap-1.5">
            <Plus className="h-4 w-4" /> New Post
          </Button>
        </Link>
      </div>

      <Card>
        <CardHeader className="pb-3">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search posts..."
                className="w-full pl-9 pr-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#8B0000]"
              />
            </div>
            <div className="flex gap-1.5 flex-wrap">
              {["ALL", "DRAFT", "REVIEW", "APPROVED", "PUBLISHED", "ARCHIVED"].map((s) => (
                <button key={s} onClick={() => setFilter(s)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${filter === s ? "bg-[#8B0000] text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}>
                  {s === "ALL" ? "All" : s.charAt(0) + s.slice(1).toLowerCase()}
                </button>
              ))}
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="border-b border-gray-100">
                <tr className="text-xs text-gray-500 uppercase tracking-wide">
                  <th className="text-left px-4 py-3">Title</th>
                  <th className="px-4 py-3">Category</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Author</th>
                  <th className="px-4 py-3">Date</th>
                  <th className="px-4 py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((post, i) => {
                  const s = statusConfig[post.status as keyof typeof statusConfig];
                  return (
                    <tr key={post.id} className={`border-b border-gray-50 hover:bg-gray-50 transition-colors ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}>
                      <td className="px-4 py-3">
                        <div className="font-medium text-gray-900 max-w-xs truncate">{post.titleEn}</div>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <span className="text-xs text-gray-500">{post.category}</span>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <Badge variant={s.variant}>{s.label}</Badge>
                      </td>
                      <td className="px-4 py-3 text-center text-gray-500 text-xs">{post.author}</td>
                      <td className="px-4 py-3 text-center text-gray-400 text-xs">{post.date}</td>
                      <td className="px-4 py-3">
                        <div className="flex items-center justify-center gap-1">
                          <Link href={`/admin/posts/${post.id}/edit`}>
                            <button className="p-1.5 rounded-md hover:bg-blue-50 text-blue-600 transition-colors">
                              <Edit2 className="h-3.5 w-3.5" />
                            </button>
                          </Link>
                          <button className="p-1.5 rounded-md hover:bg-red-50 text-red-600 transition-colors">
                            <Trash2 className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          {filtered.length === 0 && (
            <div className="text-center py-12 text-gray-400 text-sm">No posts found</div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
