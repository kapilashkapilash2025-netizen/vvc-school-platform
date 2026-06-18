import { SCHOOL } from "@/lib/constants";
import { Share2, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-[#1a1a1a] text-gray-300 mt-20">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* School info */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-12 w-12 rounded-full bg-[#8B0000] flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
              VVC
            </div>
            <div>
              <div className="text-white font-bold text-base font-tamil">{SCHOOL.nameTa}</div>
              <div className="text-gray-400 text-xs">{SCHOOL.nameEn}</div>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-gray-400 mb-4">
            A distinguished public school serving the Vavuniya community since establishment.
            Providing quality Tamil-medium education from Grade 1 to 13.
          </p>
          <div className="text-[#FFD700] text-sm italic font-tamil">
            &ldquo;{SCHOOL.motto}&rdquo;
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-base border-b border-[#8B0000] pb-2">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {[
              ["Home", "/"],
              ["About Us", "/about"],
              ["Admissions", "/admissions"],
              ["News", "/news"],
              ["Notices", "/notices"],
              ["Events", "/events"],
              ["Gallery", "/gallery"],
              ["Downloads", "/downloads"],
              ["Sports", "/sports"],
              ["Contact", "/contact"],
            ].map(([label, href]) => (
              <li key={href}>
                <Link href={href} className="hover:text-[#FFD700] transition-colors flex items-center gap-1">
                  <span className="text-[#8B0000]">›</span> {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact info */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-base border-b border-[#8B0000] pb-2">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 text-[#8B0000] mt-0.5 flex-shrink-0" />
              <span>{SCHOOL.address}, {SCHOOL.postalCode}, {SCHOOL.province}, {SCHOOL.country}</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-[#8B0000] flex-shrink-0" />
              <a href={`tel:${SCHOOL.phone}`} className="hover:text-[#FFD700] transition-colors">
                {SCHOOL.phone}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-[#8B0000] flex-shrink-0" />
              <a href={`mailto:${SCHOOL.email}`} className="hover:text-[#FFD700] transition-colors break-all">
                {SCHOOL.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Share2 className="h-4 w-4 text-[#8B0000] flex-shrink-0" />
              <a href={SCHOOL.facebook} target="_blank" rel="noopener noreferrer"
                className="hover:text-[#FFD700] transition-colors">
                Follow us on Facebook
              </a>
            </li>
          </ul>
          <div className="mt-4 p-3 bg-[#2a2a2a] rounded-lg text-xs space-y-1">
            <div><span className="text-gray-500">School No:</span> <span className="text-white">{SCHOOL.schoolNumber}</span></div>
            <div><span className="text-gray-500">Zone:</span> <span className="text-white">{SCHOOL.educationZone}</span></div>
            <div><span className="text-gray-500">Principal:</span> <span className="text-white">{SCHOOL.principal}</span></div>
          </div>
        </div>

        {/* Map */}
        <div>
          <h3 className="text-white font-semibold mb-4 text-base border-b border-[#8B0000] pb-2">Location</h3>
          <div className="rounded-lg overflow-hidden h-44 bg-[#2a2a2a] flex items-center justify-center mb-3">
            <a
              href="https://maps.google.com/?q=Vavuniya+Vipulanantha+College,+Pandarikulam,+Vavuniya"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 text-gray-400 hover:text-[#FFD700] transition-colors"
            >
              <MapPin className="h-8 w-8" />
              <span className="text-xs">View on Google Maps</span>
            </a>
          </div>
          <div className="text-xs text-gray-500">
            <div className="font-medium text-gray-400 mb-1">Office Hours</div>
            <div>Monday – Friday: 7:30 AM – 4:00 PM</div>
            <div>Saturday: 8:00 AM – 12:00 PM</div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800 py-4 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <div>
            © {currentYear} {SCHOOL.nameEn}. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <Link href="/admin" className="hover:text-gray-300 transition-colors">Admin</Link>
            <Link href="/sitemap.xml" className="hover:text-gray-300 transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
