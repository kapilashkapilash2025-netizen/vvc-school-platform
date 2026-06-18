import type { Metadata } from "next";
import { SCHOOL } from "@/lib/constants";
import { BookOpen, GraduationCap, MapPin, Phone, Mail, Award } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: `Learn about ${SCHOOL.nameEn} - history, administration, and school profile.`,
};

const history = [
  { year: "1950s", event: "School established in Pandarikulam, Vavuniya" },
  { year: "1970s", event: "Expanded to include Advanced Level classes (Grades 12–13)" },
  { year: "1980s", event: "Classified as a National School providing Tamil-medium education" },
  { year: "1990s", event: "Continued academic excellence despite regional challenges" },
  { year: "2000s", event: "Rebuilt and expanded facilities; recognized as 1AB school" },
  { year: "2010s", event: "New buildings, computer labs, and sports facilities added" },
  { year: "2020s", event: "Digitisation initiative; new science and technology programmes launched" },
];

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6 flex items-center gap-1">
        <Link href="/" className="hover:text-[#8B0000]">Home</Link>
        <span>/</span>
        <span className="text-gray-900">About</span>
      </nav>

      {/* Hero */}
      <div className="bg-gradient-to-r from-[#8B0000] to-[#A52828] text-white rounded-2xl p-8 md:p-12 mb-12">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{SCHOOL.nameEn}</h1>
          <p className="text-xl font-tamil text-[#FFD700] mb-4">{SCHOOL.nameTa}</p>
          <p className="text-gray-200 leading-relaxed">
            A premier Tamil-medium public school in Vavuniya, Northern Province, Sri Lanka.
            Serving the community with quality education from Grade 1 to Grade 13.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Profile card */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
            <div className="bg-[#8B0000] text-white px-5 py-3 font-semibold">School Profile</div>
            <div className="p-5 space-y-3 text-sm">
              {[
                ["School No.", SCHOOL.schoolNumber],
                ["Type", SCHOOL.type],
                ["Education Zone", SCHOOL.educationZone],
                ["Province", SCHOOL.province],
                ["Grades", SCHOOL.grades],
                ["Gender", SCHOOL.gender],
                ["Medium", `${SCHOOL.medium} Medium`],
                ["Principal", SCHOOL.principal],
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between border-b border-gray-50 pb-2">
                  <span className="text-gray-500">{label}</span>
                  <span className="font-medium text-gray-800 text-right">{value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
            <div className="bg-[#8B0000] text-white px-5 py-3 font-semibold">Contact Information</div>
            <div className="p-5 space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-[#8B0000] mt-0.5 flex-shrink-0" />
                <span>{SCHOOL.address}, {SCHOOL.postalCode}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#8B0000]" />
                <a href={`tel:${SCHOOL.phone}`} className="hover:text-[#8B0000]">{SCHOOL.phone}</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[#8B0000]" />
                <a href={`mailto:${SCHOOL.email}`} className="hover:text-[#8B0000] break-all">{SCHOOL.email}</a>
              </div>
            </div>
          </div>

          <div className="bg-[#FFF9E6] border border-[#FFD700] rounded-xl p-5">
            <h3 className="font-semibold text-[#8B0000] mb-2">School Motto</h3>
            <p className="text-2xl font-bold font-tamil text-[#4a0000] mb-1">{SCHOOL.motto}</p>
            <p className="text-sm text-gray-600 italic">&ldquo;{SCHOOL.mottoEn}&rdquo;</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <h3 className="font-semibold text-gray-800 mb-3">School Colours</h3>
            <div className="flex gap-3">
              <div className="flex-1 rounded-lg h-16 bg-[#8B0000] flex items-center justify-center text-white text-xs font-medium">
                Maroon / Deep Red
              </div>
              <div className="flex-1 rounded-lg h-16 bg-[#FFD700] flex items-center justify-center text-[#1a1a1a] text-xs font-medium">
                Gold / Yellow
              </div>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="lg:col-span-2 space-y-10">
          {/* About */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-[#8B0000]" />
              About the School
            </h2>
            <div className="prose prose-gray max-w-none text-gray-700 leading-relaxed space-y-4">
              <p>
                Vavuniya Vipulanantha College (VVC) is a distinguished public provincial school located in
                Pandarikulam, Vavuniya, in Sri Lanka's Northern Province. Operating as a 1AB school under
                the Vavuniya South Education Zone, the institution provides Tamil-medium education to students
                from Grade 1 through Grade 13.
              </p>
              <p>
                The college has been a cornerstone of the educational landscape in Vavuniya for decades,
                producing graduates who have gone on to excel in academia, public service, and professional fields
                across Sri Lanka and internationally.
              </p>
              <p>
                With a strong emphasis on academic excellence, cultural preservation, and physical development,
                VVC continues to uphold its motto — <em className="font-tamil">&ldquo;{SCHOOL.motto}&rdquo;</em> — which
                translates to &ldquo;Education is Imperishable Wealth.&rdquo;
              </p>
            </div>
          </div>

          {/* History Timeline */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Award className="h-6 w-6 text-[#8B0000]" />
              School History
            </h2>
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-[#8B0000]/20" />
              <div className="space-y-6">
                {history.map((item, i) => (
                  <div key={i} className="flex gap-5 relative">
                    <div className="h-12 w-12 rounded-full bg-[#8B0000] text-white flex items-center justify-center text-xs font-bold flex-shrink-0 z-10 shadow">
                      {item.year.replace(/s$/, "")}
                    </div>
                    <div className="flex-1 bg-white border border-gray-100 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                      <div className="text-[#8B0000] font-bold text-sm mb-1">{item.year}</div>
                      <p className="text-gray-700 text-sm">{item.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Vision Mission */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#8B0000] text-white rounded-xl p-6">
              <GraduationCap className="h-8 w-8 text-[#FFD700] mb-3" />
              <h3 className="text-lg font-bold mb-2">Our Vision</h3>
              <p className="text-gray-200 text-sm leading-relaxed">
                To be the leading Tamil-medium educational institution in Northern Sri Lanka, producing
                well-rounded citizens equipped with knowledge, values, and skills for the 21st century.
              </p>
            </div>
            <div className="bg-[#FFD700] rounded-xl p-6">
              <Award className="h-8 w-8 text-[#8B0000] mb-3" />
              <h3 className="text-lg font-bold text-[#1a1a1a] mb-2">Our Mission</h3>
              <p className="text-[#4a3900] text-sm leading-relaxed">
                To provide quality, inclusive Tamil-medium education that fosters academic excellence,
                cultural identity, physical development, and community responsibility in every student.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <Link href="/about/principal-message"
              className="bg-[#8B0000] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#6B0000] transition-colors text-sm">
              Principal's Message →
            </Link>
            <Link href="/contact"
              className="border border-[#8B0000] text-[#8B0000] px-6 py-3 rounded-lg font-semibold hover:bg-[#8B0000] hover:text-white transition-colors text-sm">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
