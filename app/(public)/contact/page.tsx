import type { Metadata } from "next";
import { SCHOOL } from "@/lib/constants";
import { Share2, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact Vavuniya Vipulanantha College — phone, email, address, and inquiry form.`,
};

export default function ContactPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <nav className="text-sm text-gray-500 mb-6 flex items-center gap-1">
        <Link href="/" className="hover:text-[#8B0000]">Home</Link>
        <span>/</span>
        <span className="text-gray-900">Contact</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 mb-2">Contact Us</h1>
      <p className="text-gray-500 font-tamil mb-10">தொடர்பு கொள்ளுங்கள்</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Info */}
        <div className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
            <div className="bg-[#8B0000] text-white px-5 py-3 font-semibold">School Information</div>
            <div className="p-6 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[#8B0000] mt-0.5 flex-shrink-0" />
                <div>
                  <div className="font-medium text-gray-900">{SCHOOL.nameEn}</div>
                  <div className="text-sm text-gray-600 mt-0.5">{SCHOOL.address}</div>
                  <div className="text-sm text-gray-600">{SCHOOL.postalCode}, {SCHOOL.province}</div>
                  <div className="text-sm text-gray-600">{SCHOOL.country}</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[#8B0000] flex-shrink-0" />
                <a href={`tel:${SCHOOL.phone}`} className="text-gray-700 hover:text-[#8B0000] transition-colors">
                  {SCHOOL.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#8B0000] flex-shrink-0" />
                <a href={`mailto:${SCHOOL.email}`} className="text-gray-700 hover:text-[#8B0000] transition-colors break-all">
                  {SCHOOL.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Share2 className="h-5 w-5 text-[#8B0000] flex-shrink-0" />
                <a href={SCHOOL.facebook} target="_blank" rel="noopener noreferrer"
                  className="text-gray-700 hover:text-[#8B0000] transition-colors">
                  facebook.com/Vipulanantha
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
            <div className="bg-[#8B0000] text-white px-5 py-3 font-semibold">Office Hours</div>
            <div className="p-5 space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-gray-600">Monday – Friday</span><span className="font-medium">7:30 AM – 4:00 PM</span></div>
              <div className="flex justify-between"><span className="text-gray-600">Saturday</span><span className="font-medium">8:00 AM – 12:00 PM</span></div>
              <div className="flex justify-between"><span className="text-gray-600">Sunday</span><span className="text-gray-400">Closed</span></div>
              <div className="flex justify-between"><span className="text-gray-600">Public Holidays</span><span className="text-gray-400">Closed</span></div>
            </div>
          </div>

          {/* Map placeholder */}
          <div className="bg-gray-100 rounded-xl h-52 flex items-center justify-center border border-gray-200">
            <a
              href="https://maps.google.com/?q=Vavuniya+Vipulanantha+College"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 text-gray-500 hover:text-[#8B0000] transition-colors"
            >
              <MapPin className="h-10 w-10" />
              <span className="font-medium">Open in Google Maps</span>
              <span className="text-xs">Pandarikulam, Vavuniya</span>
            </a>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
          <div className="bg-[#8B0000] text-white px-5 py-3 font-semibold">Send a Message</div>
          <form className="p-6 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Your Name *</label>
                <input required className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#8B0000]" placeholder="Full name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input type="tel" className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#8B0000]" placeholder="+94 xx xxx xxxx" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
              <input required type="email" className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#8B0000]" placeholder="your@email.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Inquiry Type</label>
              <select className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#8B0000]">
                <option>General Inquiry</option>
                <option>Admissions</option>
                <option>Academic Information</option>
                <option>Sports</option>
                <option>Alumni</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Subject *</label>
              <input required className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#8B0000]" placeholder="Brief subject" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
              <textarea required rows={5} className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#8B0000] resize-none" placeholder="Your message..." />
            </div>
            <button
              type="submit"
              className="w-full bg-[#8B0000] text-white py-3 rounded-lg font-semibold hover:bg-[#6B0000] transition-colors text-sm"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
