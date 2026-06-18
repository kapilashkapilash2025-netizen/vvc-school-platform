import type { Metadata } from "next";
import { Download, FileText, Search } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Downloads",
  description: "Download timetables, circulars, application forms, and other documents from VVC.",
};

const categories = ["All", "Timetables", "Circulars", "Application Forms", "Exam Documents", "Reports"];

const downloads = [
  { id: "1", titleEn: "Term 2 Examination Timetable 2026 (Grade 6–13)", category: "Timetables", size: "245 KB", date: "2026-06-12", url: "#" },
  { id: "2", titleEn: "Admission Application Form 2026–2027", category: "Application Forms", size: "180 KB", date: "2026-05-20", url: "#" },
  { id: "3", titleEn: "Annual Sports Meet 2026 — Entry Form", category: "Application Forms", size: "120 KB", date: "2026-06-01", url: "#" },
  { id: "4", titleEn: "School Circular — June 2026", category: "Circulars", size: "98 KB", date: "2026-06-10", url: "#" },
  { id: "5", titleEn: "Grade 12 & 13 Study Plan — Term 2 2026", category: "Timetables", size: "320 KB", date: "2026-05-28", url: "#" },
  { id: "6", titleEn: "Annual Report 2025", category: "Reports", size: "2.4 MB", date: "2026-03-15", url: "#" },
  { id: "7", titleEn: "National Scholarship Exam — Registration Form", category: "Exam Documents", size: "210 KB", date: "2026-04-10", url: "#" },
];

export default function DownloadsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <nav className="text-sm text-gray-500 mb-6 flex items-center gap-1">
        <Link href="/" className="hover:text-[#8B0000]">Home</Link>
        <span>/</span>
        <span className="text-gray-900">Downloads</span>
      </nav>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Downloads</h1>
          <p className="text-sm text-gray-500 font-tamil mt-0.5">பதிவிறக்கங்கள்</p>
        </div>
        <div className="relative">
          <Search className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input type="search" placeholder="Search documents..."
            className="pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm w-56 focus:outline-none focus:border-[#8B0000]" />
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((cat) => (
          <button key={cat}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${cat === "All" ? "bg-[#8B0000] text-white" : "bg-white border border-gray-200 text-gray-600 hover:border-[#8B0000] hover:text-[#8B0000]"}`}>
            {cat}
          </button>
        ))}
      </div>

      <div className="space-y-3">
        {downloads.map((file) => (
          <div key={file.id} className="bg-white border border-gray-100 rounded-xl p-4 flex items-center gap-4 hover:border-[#8B0000]/30 hover:shadow-sm transition-all">
            <div className="h-10 w-10 rounded-lg bg-[#8B0000]/10 text-[#8B0000] flex items-center justify-center flex-shrink-0">
              <FileText className="h-5 w-5" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-medium text-gray-900 text-sm">{file.titleEn}</div>
              <div className="flex items-center gap-3 mt-1 text-xs text-gray-400">
                <span className="bg-gray-100 px-2 py-0.5 rounded-full">{file.category}</span>
                <span>{file.size}</span>
                <span>{file.date}</span>
              </div>
            </div>
            <a href={file.url}
              className="flex items-center gap-1.5 bg-[#8B0000] text-white px-4 py-2 rounded-lg text-xs font-semibold hover:bg-[#6B0000] transition-colors flex-shrink-0">
              <Download className="h-3.5 w-3.5" />
              Download
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
