import { SCHOOL } from "@/lib/constants";
import {
  Award,
  BookOpen,
  Calendar,
  ChevronRight,
  Download,
  Share2,
  GraduationCap,
  Image,
  MapPin,
  Phone,
  Trophy,
  Users,
} from "lucide-react";
import Link from "next/link";

// Sample data (will come from DB in production)
const latestNotices = [
  { id: "1", title: "2026 Annual Sports Meet Registration Open", priority: "URGENT", date: "2026-06-15" },
  { id: "2", title: "Term 2 Examination Timetable Released", priority: "IMPORTANT", date: "2026-06-12" },
  { id: "3", title: "Parent-Teacher Meeting — June 28", priority: "NORMAL", date: "2026-06-10" },
  { id: "4", title: "School Library New Book Collection", priority: "NORMAL", date: "2026-06-08" },
];

const latestNews = [
  {
    id: "1",
    title: "VVC Students Shine at Provincial Science Fair 2026",
    titleTa: "மாகாண அறிவியல் கண்காட்சியில் VVC மாணவர்கள் சாதனை",
    excerpt: "Our students won 3 gold medals at the Northern Province Science Exhibition held in Jaffna.",
    date: "2026-06-14",
    image: null,
    category: "Achievements",
  },
  {
    id: "2",
    title: "Annual Prize-Giving Ceremony Held Successfully",
    titleTa: "ஆண்டு விருது வழங்கும் விழா சிறப்பாக நடைபெற்றது",
    excerpt: "The annual prize-giving ceremony was graced by the Divisional Secretary as the chief guest.",
    date: "2026-06-10",
    image: null,
    category: "Events",
  },
  {
    id: "3",
    title: "New Computer Lab Inaugurated",
    titleTa: "புதிய கணினி ஆய்வகம் திறப்பு விழா",
    excerpt: "A state-of-the-art computer laboratory with 40 workstations was inaugurated this week.",
    date: "2026-06-05",
    image: null,
    category: "Infrastructure",
  },
];

const upcomingEvents = [
  { id: "1", title: "Annual Sports Meet 2026", titleTa: "ஆண்டு விளையாட்டு மேளா 2026", date: "2026-07-15", venue: "School Grounds" },
  { id: "2", title: "Inter-House Drama Competition", titleTa: "இல்ல நாடக போட்டி", date: "2026-07-08", venue: "School Hall" },
  { id: "3", title: "Science Exhibition", titleTa: "அறிவியல் கண்காட்சி", date: "2026-07-22", venue: "School Hall" },
];

const stats = [
  { label: "Grades", labelTa: "வகுப்புகள்", value: "1 – 13", icon: BookOpen },
  { label: "School Type", labelTa: "பள்ளி வகை", value: "1AB School", icon: GraduationCap },
  { label: "Medium", labelTa: "கற்பிக்கும் மொழி", value: "Tamil", icon: Users },
  { label: "Gender", labelTa: "பாலினம்", value: "Mixed", icon: Users },
];

const priorityColors = {
  URGENT: "bg-red-100 text-red-800 border border-red-200",
  IMPORTANT: "bg-amber-100 text-amber-800 border border-amber-200",
  NORMAL: "bg-blue-100 text-blue-800 border border-blue-200",
};

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#8B0000] via-[#7B1010] to-[#4a0000] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00eiIvPjwvZz48L2c+PC9zdmc+')] repeat" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="text-[#FFD700] text-sm font-medium mb-2 uppercase tracking-wide">
              {SCHOOL.type} | Est. Northern Province, Sri Lanka
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-2 font-tamil leading-tight">
              {SCHOOL.nameTa}
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-200 mb-4">
              {SCHOOL.nameEn}
            </h2>
            <div className="text-[#FFD700] text-lg italic mb-6 font-tamil">
              &ldquo;{SCHOOL.motto}&rdquo;
              <span className="text-gray-300 text-sm not-italic ml-2">— {SCHOOL.mottoEn}</span>
            </div>
            <p className="text-gray-300 text-base mb-8 max-w-xl leading-relaxed">
              Nurturing excellence through Tamil-medium education in Vavuniya since our founding.
              Serving Grades 1–13 with dedication to academic, cultural, and sporting achievement.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/about"
                className="bg-[#FFD700] text-[#1a1a1a] px-6 py-3 rounded-lg font-semibold hover:bg-[#E5C100] transition-colors inline-flex items-center gap-2"
              >
                About Our School <ChevronRight className="h-4 w-4" />
              </Link>
              <Link
                href="/admissions"
                className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#8B0000] transition-colors inline-flex items-center gap-2"
              >
                Admissions
              </Link>
              <Link
                href="/sports/live"
                className="bg-white/10 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors inline-flex items-center gap-2 border border-white/20"
              >
                <span className="h-2 w-2 rounded-full bg-green-400 animate-live" />
                Live Sports
              </Link>
            </div>
          </div>
        </div>
        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 60L60 50C120 40 240 20 360 15C480 10 600 20 720 25C840 30 960 30 1080 25C1200 20 1320 10 1380 5L1440 0V60H0Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-4 -mt-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white rounded-xl shadow-md p-5 text-center border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-[#8B0000]/10 text-[#8B0000] mb-3">
                <stat.icon className="h-5 w-5" />
              </div>
              <div className="text-2xl font-bold text-[#8B0000]">{stat.value}</div>
              <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
              <div className="text-xs text-gray-400 font-tamil">{stat.labelTa}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Notices & News grid */}
      <section className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Notices */}
        <div className="lg:col-span-1">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <span className="h-5 w-1 rounded-full bg-[#8B0000]" />
              Notices
              <span className="font-tamil text-base text-gray-500">அறிவிப்புகள்</span>
            </h2>
            <Link href="/notices" className="text-[#8B0000] text-sm hover:underline flex items-center gap-1">
              All <ChevronRight className="h-3 w-3" />
            </Link>
          </div>
          <div className="space-y-3">
            {latestNotices.map((notice) => (
              <Link key={notice.id} href={`/notices#${notice.id}`}>
                <div className="p-4 bg-white rounded-lg border border-gray-100 hover:border-[#8B0000]/30 hover:shadow-sm transition-all group">
                  <div className="flex items-start gap-3">
                    <div className="flex-1">
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${priorityColors[notice.priority as keyof typeof priorityColors]}`}>
                        {notice.priority}
                      </span>
                      <p className="text-sm font-medium text-gray-800 mt-1.5 group-hover:text-[#8B0000] transition-colors line-clamp-2">
                        {notice.title}
                      </p>
                      <p className="text-xs text-gray-400 mt-1">{notice.date}</p>
                    </div>
                    <ChevronRight className="h-4 w-4 text-gray-300 group-hover:text-[#8B0000] mt-1 flex-shrink-0 transition-colors" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* News */}
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              <span className="h-5 w-1 rounded-full bg-[#8B0000]" />
              Latest News
              <span className="font-tamil text-base text-gray-500">செய்திகள்</span>
            </h2>
            <Link href="/news" className="text-[#8B0000] text-sm hover:underline flex items-center gap-1">
              All <ChevronRight className="h-3 w-3" />
            </Link>
          </div>
          <div className="space-y-4">
            {latestNews.map((news, i) => (
              <Link key={news.id} href={`/news/${news.id}`}>
                <div className={`flex gap-4 p-4 bg-white rounded-xl border border-gray-100 hover:border-[#8B0000]/30 hover:shadow-md transition-all group ${i === 0 ? "flex-col" : ""}`}>
                  <div className={`bg-gradient-to-br from-[#8B0000]/10 to-[#8B0000]/5 rounded-lg flex items-center justify-center text-[#8B0000] flex-shrink-0 ${i === 0 ? "h-40 w-full" : "h-20 w-24"}`}>
                    <Image className={i === 0 ? "h-12 w-12 opacity-30" : "h-8 w-8 opacity-30"} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-xs text-[#8B0000] font-medium">{news.category}</span>
                    <h3 className={`font-bold text-gray-900 group-hover:text-[#8B0000] transition-colors mt-1 ${i === 0 ? "text-lg" : "text-sm"}`}>
                      {news.title}
                    </h3>
                    <p className="text-xs font-tamil text-gray-500 mt-0.5">{news.titleTa}</p>
                    {i === 0 && <p className="text-sm text-gray-600 mt-2 line-clamp-2">{news.excerpt}</p>}
                    <p className="text-xs text-gray-400 mt-2">{news.date}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
              <Calendar className="h-6 w-6 text-[#8B0000]" />
              Upcoming Events
              <span className="font-tamil text-lg text-gray-500">வரவிருக்கும் நிகழ்வுகள்</span>
            </h2>
            <Link href="/events" className="text-[#8B0000] text-sm hover:underline flex items-center gap-1">
              All Events <ChevronRight className="h-3 w-3" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => {
              const d = new Date(event.date);
              return (
                <Link key={event.id} href={`/events/${event.id}`}>
                  <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all group">
                    <div className="h-2 bg-gradient-to-r from-[#8B0000] to-[#A52828]" />
                    <div className="p-5 flex gap-4">
                      <div className="text-center bg-[#8B0000] text-white rounded-lg px-3 py-2 flex-shrink-0">
                        <div className="text-xs font-medium">{d.toLocaleString("en", { month: "short" })}</div>
                        <div className="text-2xl font-bold leading-none">{d.getDate()}</div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 group-hover:text-[#8B0000] transition-colors text-sm">
                          {event.title}
                        </h3>
                        <p className="text-xs font-tamil text-gray-500 mt-0.5">{event.titleTa}</p>
                        {event.venue && (
                          <div className="flex items-center gap-1 mt-2 text-xs text-gray-400">
                            <MapPin className="h-3 w-3" />
                            {event.venue}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Principal Message */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-gradient-to-br from-[#8B0000] to-[#6B0000] rounded-2xl overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="md:col-span-1 bg-[#7B1010] flex items-center justify-center p-10">
              <div className="text-center text-white">
                <div className="h-28 w-28 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="h-14 w-14 text-white/80" />
                </div>
                <div className="font-bold text-lg">{SCHOOL.principal}</div>
                <div className="text-gray-300 text-sm mt-1">Principal</div>
                <div className="text-[#FFD700] text-xs mt-1 font-tamil">முதல்வர்</div>
              </div>
            </div>
            <div className="md:col-span-2 p-10 text-white">
              <h2 className="text-2xl font-bold mb-2">Principal&apos;s Message</h2>
              <p className="text-[#FFD700] text-sm font-tamil mb-4">முதல்வரின் செய்தி</p>
              <p className="text-gray-200 leading-relaxed mb-4">
                Welcome to Vavuniya Vipulanantha College, where we nurture young minds and shape future leaders.
                Our institution stands as a beacon of Tamil-medium education in the Northern Province, committed
                to academic excellence, cultural values, and holistic development.
              </p>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                We believe that education is the most imperishable wealth a child can receive — as our motto states,
                &quot;{SCHOOL.motto}&quot;. Together with our dedicated staff, supportive parents, and talented students,
                we continue to build a brighter future for Vavuniya.
              </p>
              <Link
                href="/about/principal-message"
                className="inline-flex items-center gap-2 bg-[#FFD700] text-[#1a1a1a] px-5 py-2.5 rounded-lg font-semibold hover:bg-[#E5C100] transition-colors text-sm"
              >
                Read Full Message <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick links */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">Quick Access</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { href: "/admissions", label: "Admissions", labelTa: "சேர்க்கை", icon: GraduationCap },
              { href: "/downloads", label: "Downloads", labelTa: "பதிவிறக்கங்கள்", icon: Download },
              { href: "/gallery", label: "Gallery", labelTa: "படங்கள்", icon: Image },
              { href: "/sports/live", label: "Live Sports", labelTa: "நேரடி விளையாட்டு", icon: Trophy },
              { href: "/achievements", label: "Achievements", labelTa: "சாதனைகள்", icon: Award },
              { href: "/contact", label: "Contact", labelTa: "தொடர்பு", icon: Phone },
            ].map((item) => (
              <Link key={item.href} href={item.href}>
                <div className="bg-white rounded-xl p-5 text-center border border-gray-100 hover:border-[#8B0000] hover:shadow-md transition-all group cursor-pointer">
                  <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-[#8B0000]/10 text-[#8B0000] mb-3 group-hover:bg-[#8B0000] group-hover:text-white transition-all">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div className="text-sm font-semibold text-gray-800 group-hover:text-[#8B0000] transition-colors">{item.label}</div>
                  <div className="text-xs text-gray-400 mt-0.5 font-tamil">{item.labelTa}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Social / CTA */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="bg-[#FFD700] rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1a1a1a] mb-2">Stay Connected</h2>
            <p className="text-[#4a3900]">Follow us on Facebook for the latest news and updates from VVC.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href={SCHOOL.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#1877F2] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#1560d4] transition-colors"
            >
              <Share2 className="h-5 w-5" />
              Follow on Facebook
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#8B0000] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#6B0000] transition-colors"
            >
              <Phone className="h-5 w-5" />
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
