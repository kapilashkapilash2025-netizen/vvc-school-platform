import type { Metadata } from "next";
import { AlertCircle, Bell, Download, Pin } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Notices",
  description: "Official notices and announcements from Vavuniya Vipulanantha College.",
};

const notices = [
  {
    id: "1",
    titleEn: "2026 Annual Sports Meet — Registration Deadline",
    titleTa: "2026 ஆண்டு விளையாட்டு மேளா — பதிவு இறுதி நாள்",
    contentEn: "All students interested in participating in the Annual Sports Meet 2026 must register with their class teacher by June 25, 2026. Late registrations will not be accepted.",
    priority: "URGENT",
    isPinned: true,
    date: "2026-06-15",
    expiresAt: "2026-06-25",
    attachmentUrl: null,
  },
  {
    id: "2",
    titleEn: "Term 2 Examination Timetable — Grade 6 to 13",
    titleTa: "இரண்டாம் தவணை தேர்வு நேர அட்டவணை — வகுப்பு 6 முதல் 13 வரை",
    contentEn: "The examination timetable for Term 2 has been released. Students should download and prepare accordingly. Examinations will commence on July 5, 2026.",
    priority: "IMPORTANT",
    isPinned: true,
    date: "2026-06-12",
    expiresAt: "2026-07-05",
    attachmentUrl: "/sample-timetable.pdf",
  },
  {
    id: "3",
    titleEn: "Parent-Teacher Meeting — June 28, 2026",
    titleTa: "பெற்றோர்-ஆசிரியர் சந்திப்பு — ஜூன் 28, 2026",
    contentEn: "A Parent-Teacher meeting will be held on June 28, 2026 from 9:00 AM to 12:00 PM in the school hall. All parents are requested to attend.",
    priority: "IMPORTANT",
    isPinned: false,
    date: "2026-06-10",
    expiresAt: "2026-06-28",
    attachmentUrl: null,
  },
  {
    id: "4",
    titleEn: "School Closure — Public Holiday Notice",
    titleTa: "பொது விடுமுறை — பள்ளி மூடல் அறிவிப்பு",
    contentEn: "The school will be closed on June 20, 2026 in observance of the public holiday. Normal activities will resume on June 22, 2026.",
    priority: "NORMAL",
    isPinned: false,
    date: "2026-06-08",
    expiresAt: "2026-06-22",
    attachmentUrl: null,
  },
  {
    id: "5",
    titleEn: "Library New Book Donation Drive",
    titleTa: "நூலகம் புதிய புத்தக நன்கொடை இயக்கம்",
    contentEn: "We are collecting book donations for the school library. Books in good condition for all subjects are welcome. Please bring to the library before July 1, 2026.",
    priority: "NORMAL",
    isPinned: false,
    date: "2026-06-05",
    expiresAt: "2026-07-01",
    attachmentUrl: null,
  },
];

const priorityConfig = {
  URGENT: { label: "Urgent", variant: "destructive" as const },
  IMPORTANT: { label: "Important", variant: "warning" as const },
  NORMAL: { label: "Notice", variant: "default" as const },
};

export default function NoticesPage() {
  const pinned = notices.filter((n) => n.isPinned);
  const regular = notices.filter((n) => !n.isPinned);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <nav className="text-sm text-gray-500 mb-6 flex items-center gap-1">
        <Link href="/" className="hover:text-[#8B0000]">Home</Link>
        <span>/</span>
        <span className="text-gray-900">Notices</span>
      </nav>

      <div className="flex items-center gap-3 mb-8">
        <div className="h-10 w-10 rounded-full bg-[#8B0000] text-white flex items-center justify-center">
          <Bell className="h-5 w-5" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Notices & Announcements</h1>
          <p className="text-sm text-gray-500 font-tamil">அறிவிப்புகள்</p>
        </div>
      </div>

      {/* Pinned notices */}
      {pinned.length > 0 && (
        <div className="mb-8">
          <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3 flex items-center gap-2">
            <Pin className="h-4 w-4" /> Pinned
          </h2>
          <div className="space-y-3">
            {pinned.map((notice) => (
              <NoticeCard key={notice.id} notice={notice} pinned />
            ))}
          </div>
        </div>
      )}

      {/* All notices */}
      <div>
        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-3">All Notices</h2>
        <div className="space-y-3">
          {regular.map((notice) => (
            <NoticeCard key={notice.id} notice={notice} />
          ))}
        </div>
      </div>
    </div>
  );
}

function NoticeCard({ notice, pinned = false }: { notice: typeof notices[0]; pinned?: boolean }) {
  const config = priorityConfig[notice.priority as keyof typeof priorityConfig];

  return (
    <div id={notice.id} className={`bg-white rounded-xl border ${pinned ? "border-[#8B0000]/30 shadow-md" : "border-gray-200"} p-5 hover:shadow-md transition-shadow`}>
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            {notice.priority === "URGENT" && (
              <span className="flex items-center gap-1 text-red-600 text-xs font-semibold">
                <AlertCircle className="h-3.5 w-3.5" /> URGENT
              </span>
            )}
            <Badge variant={config.variant}>{config.label}</Badge>
            {pinned && <Badge variant="outline">Pinned</Badge>}
          </div>
          <h3 className="font-semibold text-gray-900 text-base mb-1">{notice.titleEn}</h3>
          <p className="text-sm font-tamil text-gray-500 mb-2">{notice.titleTa}</p>
          <p className="text-sm text-gray-600 leading-relaxed">{notice.contentEn}</p>
          <div className="flex items-center gap-4 mt-3 text-xs text-gray-400">
            <span>Posted: {notice.date}</span>
            {notice.expiresAt && <span>Valid until: {notice.expiresAt}</span>}
          </div>
        </div>
        {notice.attachmentUrl && (
          <a
            href={notice.attachmentUrl}
            className="flex-shrink-0 flex items-center gap-1.5 bg-[#8B0000]/10 text-[#8B0000] px-3 py-2 rounded-lg text-xs font-medium hover:bg-[#8B0000] hover:text-white transition-colors"
          >
            <Download className="h-3.5 w-3.5" />
            Download
          </a>
        )}
      </div>
    </div>
  );
}
