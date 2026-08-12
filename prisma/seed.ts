import { prisma } from "@/lib/db";
import * as bcrypt from "bcryptjs";

async function main() {
  console.log("🌱 Seeding VVC School Platform...");

  // Super admin
  const adminPassword = await bcrypt.hash("admin@VVC2026!", 12);
  const admin = await prisma.user.upsert({
    where: { email: "admin@vvc.sch.lk" },
    update: {},
    create: {
      name: "Super Administrator",
      email: "admin@vvc.sch.lk",
      passwordHash: adminPassword,
      role: "SUPER_ADMIN",
      isActive: true,
    },
  });
  console.log("✅ Super admin created:", admin.email);

  // Principal
  const principalPassword = await bcrypt.hash("principal@VVC2026!", 12);
  const principal = await prisma.user.upsert({
    where: { email: "principal@vvc.sch.lk" },
    update: {},
    create: {
      name: "Mrs. Gnanamathi",
      email: "principal@vvc.sch.lk",
      passwordHash: principalPassword,
      role: "PRINCIPAL",
      isActive: true,
    },
  });
  console.log("✅ Principal account created:", principal.email);

  // Teacher admin
  const teacherPassword = await bcrypt.hash("teacher@VVC2026!", 12);
  const teacher = await prisma.user.upsert({
    where: { email: "teacher@vvc.sch.lk" },
    update: {},
    create: {
      name: "Teacher Admin",
      email: "teacher@vvc.sch.lk",
      passwordHash: teacherPassword,
      role: "TEACHER_ADMIN",
      isActive: true,
    },
  });
  console.log("✅ Teacher admin created:", teacher.email);

  // Settings
  const settings = [
    { key: "school_name_en", value: "Vavuniya Vipulanantha College" },
    { key: "school_name_ta", value: "வவுனியா விபுலாநந்தா கல்லூரி" },
    { key: "school_motto", value: "கேடில் செல்வம் கல்வி" },
    { key: "school_phone", value: "+94 242 221 988" },
    { key: "school_email", value: "vipulananthacollege@yahoo.com" },
    { key: "school_address", value: "113 School Road, Pandarikulam, Vavuniya" },
    { key: "sports_meet_status", value: "LIVE" },
    { key: "ai_enabled", value: "true" },
    { key: "sports_points_1st", value: "5" },
    { key: "sports_points_2nd", value: "3" },
    { key: "sports_points_3rd", value: "1" },
  ];

  for (const setting of settings) {
    await prisma.setting.upsert({
      where: { key: setting.key },
      update: { value: setting.value },
      create: { key: setting.key, value: setting.value },
    });
  }
  console.log("✅ Settings seeded");

  // Categories
  const categories = [
    { nameTa: "பொது செய்திகள்", nameEn: "General News", slug: "general-news", type: "post" },
    { nameTa: "கல்வி", nameEn: "Academic", slug: "academic", type: "post" },
    { nameTa: "விளையாட்டு", nameEn: "Sports", slug: "sports", type: "post" },
    { nameTa: "கலாச்சாரம்", nameEn: "Cultural", slug: "cultural", type: "post" },
    { nameTa: "நிகழ்வுகள்", nameEn: "Events", slug: "events", type: "post" },
    { nameTa: "சாதனைகள்", nameEn: "Achievements", slug: "achievements", type: "post" },
    { nameTa: "பள்ளி நிகழ்வு", nameEn: "School Event", slug: "school-event", type: "event" },
    { nameTa: "விளையாட்டு நிகழ்வு", nameEn: "Sports Event", slug: "sports-event", type: "event" },
  ];

  for (const cat of categories) {
    await prisma.category.upsert({
      where: { slug: cat.slug },
      update: {},
      create: cat,
    });
  }
  console.log("✅ Categories seeded");

  // Point rule
  const pointRule = await prisma.pointRule.upsert({
    where: { id: "default-rule" },
    update: {},
    create: {
      id: "default-rule",
      name: "Standard (5-3-1)",
      firstPoints: 5,
      secondPoints: 3,
      thirdPoints: 1,
    },
  });
  console.log("✅ Default point rule created");

  // Sports meet
  const sportsMeet = await prisma.sportsMeet.upsert({
    where: { id: "annual-sports-2026" },
    update: {},
    create: {
      id: "annual-sports-2026",
      title: "Annual Sports Meet 2026",
      year: 2026,
      startDate: new Date("2026-07-15"),
      endDate: new Date("2026-07-17"),
      status: "UPCOMING",
    },
  });
  console.log("✅ Sports meet created");

  // Houses
  const housesData = [
    { name: "Red House", color: "#DC2626", captain: "Arunan Krishnamoorthy", teacherInCharge: "Mr. Suresh" },
    { name: "Blue House", color: "#2563EB", captain: "Priya Selvakumar", teacherInCharge: "Mrs. Kavitha" },
    { name: "Green House", color: "#16A34A", captain: "Raj Murugan", teacherInCharge: "Mr. Vijay" },
    { name: "Yellow House", color: "#CA8A04", captain: "Nila Thevarajah", teacherInCharge: "Mrs. Theva" },
  ];

  for (const house of housesData) {
    await prisma.house.create({
      data: {
        sportsMeetId: sportsMeet.id,
        ...house,
        totalPoints: 0,
      },
    }).catch(() => {}); // skip if exists
  }
  console.log("✅ Houses seeded");

  // Sample sports events
  const sportsEventsData = [
    { name: "100m Sprint", category: "Athletics", ageGroup: "U16", gender: "Boys" },
    { name: "200m Sprint", category: "Athletics", ageGroup: "U18", gender: "Boys" },
    { name: "Long Jump", category: "Field", ageGroup: "U14", gender: "Girls" },
    { name: "High Jump", category: "Field", ageGroup: "U16", gender: "Boys" },
    { name: "Relay 4x100m", category: "Athletics", ageGroup: "Open", gender: "Mixed" },
    { name: "Shot Put", category: "Field", ageGroup: "U18", gender: "Girls" },
    { name: "Triple Jump", category: "Field", ageGroup: "U16", gender: "Boys" },
    { name: "800m Run", category: "Athletics", ageGroup: "U18", gender: "Mixed" },
  ];

  for (const ev of sportsEventsData) {
    await prisma.sportsEvent.create({
      data: {
        sportsMeetId: sportsMeet.id,
        pointRuleId: pointRule.id,
        venue: "School Grounds",
        status: "SCHEDULED",
        ...ev,
      },
    }).catch(() => {});
  }
  console.log("✅ Sports events seeded");

  // Sample notice
  await prisma.notice.create({
    data: {
      titleTa: "2026 ஆண்டு விளையாட்டு மேளா — பதிவு திறப்பு",
      titleEn: "Annual Sports Meet 2026 — Registration Open",
      contentTa: "அனைத்து மாணவர்களும் ஜூன் 25 ஆம் தேதிக்குள் வகுப்பாசிரியரிடம் பதிவு செய்யவும்.",
      contentEn: "All students must register with their class teacher by June 25, 2026.",
      priority: "URGENT",
      isPinned: true,
      status: "PUBLISHED",
      createdById: admin.id,
      approvedById: admin.id,
      publishedAt: new Date(),
      expiresAt: new Date("2026-06-25"),
    },
  }).catch(() => {});

  // Sample gallery album
  await prisma.galleryAlbum.create({
    data: {
      titleTa: "ஆண்டு விருது வழங்கும் விழா 2025",
      titleEn: "Annual Prize-Giving Ceremony 2025",
      slug: "prize-giving-2025",
      description: "Photos from the Annual Prize-Giving Ceremony 2025",
      visibility: "public",
    },
  }).catch(() => {});

  console.log("\n🎉 Seeding complete!");
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
  console.log("📌 Admin Credentials:");
  console.log("   Super Admin: admin@vvc.sch.lk / admin@VVC2026!");
  console.log("   Principal:   principal@vvc.sch.lk / principal@VVC2026!");
  console.log("   Teacher:     teacher@vvc.sch.lk / teacher@VVC2026!");
  console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    process.exit(0);
  });
