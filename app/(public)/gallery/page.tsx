import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photo gallery from events and activities at Vavuniya Vipulanantha College.",
};

const albums = [
  { id: "1", titleEn: "Annual Sports Meet 2025", titleTa: "ஆண்டு விளையாட்டு மேளா 2025", count: 48, date: "2025-09-15", emoji: "🏃" },
  { id: "2", titleEn: "Prize-Giving Ceremony 2025", titleTa: "விருது வழங்கும் விழா 2025", count: 32, date: "2025-12-10", emoji: "🏆" },
  { id: "3", titleEn: "Science Exhibition 2025", titleTa: "அறிவியல் கண்காட்சி 2025", count: 24, date: "2025-11-05", emoji: "🔬" },
  { id: "4", titleEn: "Cultural Day 2025", titleTa: "கலாச்சார நாள் 2025", count: 56, date: "2025-10-20", emoji: "🎭" },
  { id: "5", titleEn: "New Computer Lab Inauguration", titleTa: "கணினி ஆய்வக திறப்பு விழா", count: 18, date: "2026-06-05", emoji: "💻" },
  { id: "6", titleEn: "Pongal Celebrations 2026", titleTa: "பொங்கல் கொண்டாட்டம் 2026", count: 30, date: "2026-01-14", emoji: "🎉" },
];

export default function GalleryPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <nav className="text-sm text-gray-500 mb-6 flex items-center gap-1">
        <Link href="/" className="hover:text-[#8B0000]">Home</Link>
        <span>/</span>
        <span className="text-gray-900">Gallery</span>
      </nav>

      <h1 className="text-2xl font-bold text-gray-900 mb-1">Photo Gallery</h1>
      <p className="text-sm text-gray-500 font-tamil mb-8">படங்கள் தொகுப்பு</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {albums.map((album) => (
          <Link key={album.id} href={`/gallery/${album.id}`}>
            <div className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all group cursor-pointer">
              <div className="h-48 bg-gradient-to-br from-[#8B0000]/10 to-[#FFD700]/10 flex items-center justify-center text-7xl relative">
                {album.emoji}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all flex items-center justify-center">
                  <span className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-all">
                    View Album →
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 group-hover:text-[#8B0000] transition-colors">
                  {album.titleEn}
                </h3>
                <p className="text-xs font-tamil text-gray-500 mt-0.5">{album.titleTa}</p>
                <div className="flex items-center justify-between mt-3 text-xs text-gray-400">
                  <span>{album.count} photos</span>
                  <span>{album.date}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
