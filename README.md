# VVC - Vavuniya Vipulanantha College
## வவுனியா விபுலாநந்தா கல்லூரி

**Official School Digital Platform** — Production-ready, professional school website.

---

## Quick Start

```bash
npm install
cp .env.example .env      # Edit with your DB credentials
npx prisma generate
npm run db:migrate         # Requires PostgreSQL
npm run seed
npm run dev
```

**Local URLs:**
- Main Website: http://localhost:3000
- Admin Dashboard: http://localhost:3000/admin
- Sports: http://localhost:3000/sports
- Live Scoreboard: http://localhost:3000/sports/live

---

## Admin Credentials (after seeding)

| Role | Email | Password |
|------|-------|----------|
| Super Admin | admin@vvc.sch.lk | admin@VVC2026! |
| Principal | principal@vvc.sch.lk | principal@VVC2026! |
| Teacher Admin | teacher@vvc.sch.lk | teacher@VVC2026! |

**Change all passwords before going live!**

---

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind CSS 4
- PostgreSQL + Prisma ORM 7
- NextAuth.js v5 (authentication)
- AI: OpenAI / Anthropic / Gemini / Mock (configurable)
- Deployment: Vercel + Supabase + Cloudflare

---

## Key Features

- Bilingual Tamil + English content
- Public website: Home, About, News, Notices, Events, Gallery, Downloads, Achievements, Sports, Contact
- Admin CMS with role-based access (7 roles)
- Content workflow: Draft → Review → Approved → Published
- Sports system: Houses, Events, Live Scoreboard, Projector Mode, Point Tracking
- AI Tools: Post Writer, Notice Writer, Translation, Sports Summary
- Mobile-first responsive design
- Maroon + Gold brand colors

---

## School

Vavuniya Vipulanantha College | School No. 1302006 | Vavuniya South Education Zone  
Principal: Mrs. Gnanamathi | Phone: +94 242 221 988 | Email: vipulananthacollege@yahoo.com  
Motto: "கேடில் செல்வம் கல்வி"
