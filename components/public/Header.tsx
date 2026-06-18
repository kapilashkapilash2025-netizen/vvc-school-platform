"use client";

import { SCHOOL } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Share2, Menu, Phone, Search, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  {
    href: "/about",
    label: "About",
    children: [
      { href: "/about", label: "School Profile" },
      { href: "/about/history", label: "History" },
      { href: "/about/principal-message", label: "Principal's Message" },
      { href: "/about/vision-mission", label: "Vision & Mission" },
    ],
  },
  {
    href: "/academics",
    label: "Academics",
    children: [
      { href: "/academics/primary", label: "Primary (Gr. 1–5)" },
      { href: "/academics/junior", label: "Junior Secondary (6–9)" },
      { href: "/academics/senior", label: "Senior Secondary (10–11)" },
      { href: "/academics/advanced", label: "Advanced Level (12–13)" },
      { href: "/admissions", label: "Admissions" },
    ],
  },
  { href: "/news", label: "News" },
  { href: "/notices", label: "Notices" },
  { href: "/events", label: "Events" },
  { href: "/gallery", label: "Gallery" },
  { href: "/achievements", label: "Achievements" },
  { href: "/sports", label: "Sports" },
  { href: "/downloads", label: "Downloads" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top bar */}
      <div className="bg-[#8B0000] text-white text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <a href={`tel:${SCHOOL.phone}`} className="flex items-center gap-1 hover:text-yellow-300 transition-colors">
              <Phone className="h-3 w-3" />
              <span>{SCHOOL.phone}</span>
            </a>
            <span className="hidden sm:inline text-yellow-300">|</span>
            <span className="hidden sm:inline">{SCHOOL.educationZone}</span>
          </div>
          <div className="flex items-center gap-3">
            <a href={SCHOOL.facebook} target="_blank" rel="noopener noreferrer"
              className="hover:text-yellow-300 transition-colors">
              <Share2 className="h-3 w-3" />
            </a>
            <Link href="/admin" className="hover:text-yellow-300 transition-colors font-medium">
              Admin Login
            </Link>
          </div>
        </div>
      </div>

      {/* Logo bar */}
      <div className="bg-white border-b border-gray-100 py-3 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-4">
            <div className="h-16 w-16 rounded-full bg-[#8B0000] flex items-center justify-center text-white font-bold text-xl flex-shrink-0 shadow-md">
              VVC
            </div>
            <div>
              <div className="text-[#8B0000] font-bold text-xl leading-tight font-tamil">
                {SCHOOL.nameTa}
              </div>
              <div className="text-gray-700 font-semibold text-sm leading-tight">
                {SCHOOL.nameEn}
              </div>
              <div className="text-[#B8860B] text-xs italic mt-0.5">
                &ldquo;{SCHOOL.motto}&rdquo;
              </div>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-3">
            <div className="relative">
              <Search className="h-4 w-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="search"
                placeholder="Search..."
                className="pl-9 pr-4 py-2 border border-gray-200 rounded-full text-sm w-52 focus:outline-none focus:border-[#8B0000]"
              />
            </div>
            <Link
              href="/sports/live"
              className="flex items-center gap-1.5 bg-red-600 text-white text-xs px-3 py-1.5 rounded-full font-semibold hover:bg-red-700 transition-colors"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-white animate-live" />
              LIVE SPORTS
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-[#8B0000]"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Nav bar */}
      <nav className={cn(
        "bg-[#8B0000] text-white sticky top-0 z-50 transition-shadow",
        isScrolled && "shadow-lg"
      )}>
        <div className="max-w-7xl mx-auto px-4">
          <ul className="hidden md:flex items-center">
            {navLinks.map((link) => (
              <li key={link.href} className="relative group">
                <Link
                  href={link.href}
                  className={cn(
                    "flex items-center gap-1 px-3 py-4 text-sm font-medium hover:bg-[#6B0000] transition-colors",
                    pathname === link.href && "bg-[#6B0000] border-b-2 border-[#FFD700]"
                  )}
                  onMouseEnter={() => link.children && setOpenDropdown(link.href)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  {link.label}
                  {link.children && <span className="text-yellow-300 text-xs">▾</span>}
                </Link>
                {link.children && (
                  <div
                    className={cn(
                      "absolute top-full left-0 bg-white text-gray-800 shadow-xl rounded-b-lg min-w-52 z-50 transition-all",
                      openDropdown === link.href ? "opacity-100 visible" : "opacity-0 invisible"
                    )}
                    onMouseEnter={() => setOpenDropdown(link.href)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm hover:bg-[#8B0000] hover:text-white transition-colors border-b border-gray-100 last:border-0"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden bg-[#6B0000] border-t border-[#A52828]">
            {navLinks.map((link) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  className="block px-4 py-3 text-sm hover:bg-[#8B0000] transition-colors border-b border-[#7B1010]"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
                {link.children?.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    className="block px-8 py-2.5 text-xs text-gray-300 hover:bg-[#8B0000] hover:text-white transition-colors border-b border-[#7B1010]"
                    onClick={() => setMobileOpen(false)}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        )}
      </nav>
    </>
  );
}
