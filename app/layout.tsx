import type { Metadata } from "next";
import { Noto_Sans_Tamil } from "next/font/google";
import "./globals.css";
import { SCHOOL } from "@/lib/constants";

const notoSansTamil = Noto_Sans_Tamil({
  variable: "--font-noto-tamil",
  subsets: ["tamil"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${SCHOOL.nameEn} | ${SCHOOL.nameTa}`,
    template: `%s | ${SCHOOL.nameEn}`,
  },
  description: `Official website of ${SCHOOL.nameEn} (${SCHOOL.nameTa}), ${SCHOOL.address}. ${SCHOOL.type}, ${SCHOOL.educationZone}, Sri Lanka.`,
  keywords: [
    "Vavuniya Vipulanantha College",
    "VVC Vavuniya",
    "வவுனியா விபுலாநந்தா கல்லூரி",
    "Vipulanantha College Vavuniya",
    "Pandarikulam school",
    "Vavuniya South Education Zone",
    "Tamil medium school Sri Lanka",
  ],
  openGraph: {
    type: "website",
    siteName: SCHOOL.nameEn,
    title: SCHOOL.nameEn,
    description: `Official website of ${SCHOOL.nameEn}, Vavuniya, Sri Lanka`,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ta" className={`${notoSansTamil.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
