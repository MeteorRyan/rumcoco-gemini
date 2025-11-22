# GEMINI.MD — RumCoCo Project Constitution

> **SYSTEM INSTRUCTION:** This file is the SOURCE OF TRUTH for the RumCoCo project. Every Agent must read this file before generating code, planning tasks, or modifying architecture.

## 1. Project Vision
**RumCoCo** is a full-scale Business Operating System (BOS) for ultra-small businesses in Florida and the Caribbean (starting in Pinellas County).
* **Vibe:** "Tropical Sophistication." Miami-Vice meets serious finance. Pineapples, neon pinks, charcoal, palm trees. Professional, not cartoonish.
* **Mission:** Wraps serious infrastructure (compliance, finance, M&A) in a calm, high-end tropical aesthetic.

## 2. Tech Stack (Optimized for Antigravity)
* **Framework:** Next.js 15+ (App Router)
* **Language:** TypeScript (Strict Mode)
* **Styling:** Tailwind CSS v4 (Theme: Tropical Professional) + `clsx` + `tailwind-merge`
* **Components:** shadcn/ui (modified for tropical theme), Lucide React icons.
* **Database:** PostgreSQL (with PostGIS extension for maps).
* **ORM:** Prisma (Single source of truth for data models).
* **Backend Logic:** Next.js Server Actions (No separate Express server).
* **Auth:** NextAuth / Auth.js (Role-based: Owner, Accountant, Staff, Admin).
* **Maps:** React-Map-GL / Leaflet (PostGIS integration).

## 3. Design System
* **Colors:**
    * `--color-charcoal`: `#212121` (Primary Background/Headers)
    * `--color-neon-pink`: `#FF6EC7` (Primary Actions/Buttons)
    * `--color-palm-green`: `#4C9A2A` (Success/Growth)
    * `--color-pineapple-yellow`: `#F7B538` (Warnings/Highlights)
* **Typography:** `Roboto` (Google Fonts).
* **UX Principles:** "Boutique Tropical Business Lounge." Fast, minimal friction, flat design, subtle retro neon glows.

## 4. Core Architecture Rules
1.  **Monolith First:** All backend logic resides in `app/actions` (Server Actions) or `app/api` (Route Handlers). Do not create a separate backend repository.
2.  **Type Safety:** Every database model must have a corresponding TypeScript interface. No `any`.
3.  **Modular Features:** Organize code by feature in `components/modules/{featureName}` (e.g., `components/modules/compliance`, `components/modules/vault`).
4.  **Layout:**
    * **Public:** Landing pages (Hero, Marketing).
    * **Dashboard:** Authenticated shell with **Fixed Top Navbar** and **Persistent Left Sidebar**.

## 5. Roadmap & Modules (The 12 Pillars)
*Current Focus: Phase 1 (Foundation)*

### Phase 1: The "Get Legit" Core
1.  **Deadline & Compliance Engine:** Florida-specific filing rules, recurring dates, "heat map" view.
2.  **Credential Vault:** Secure storage for EIN, Tax IDs, Banking info.
3.  **Business Formation Suite:** Checklists for "Getting Legit" (Entity, EIN, Sales Tax).
4.  **Notifications:** Email/SMS reminders for critical dates.

### Phase 2: Operations & Community
5.  **RumCoCo Academy:** Micro-courses, quizzes, certificates.
6.  **Pinellas Business Hub:** Local events map (PostGIS), workshops.
7.  **HR & Payroll Lite:** Employee DB, time clock, PTO tracking.

### Phase 3: Financial & Advisory (Advanced)
8.  **Accounting Hub:** Xero integration, financial snapshots, cashflow.
9.  **Document Room:** Secure tagging, sharing with accountants.
10. **Workflow Engine:** Internal firm task management.
11. **M&A Dealflow:** Data rooms, valuation calculators, buyer tracking.
12. **Banking Layer:** (Long-term) Embedded lending/checking.

## 6. Database Schema (Prisma Requirements)
The schema must support the following core models:
* `User` (Roles: Owner, Staff, Accountant, Admin)
* `Business` (Profile, Entity Type, Formation Date)
* `Deadline` (DueDate, Type, Priority, Status)
* `Credential` (Encrypted storage fields)
* `Notification` (Type, ReadStatus, Channel)
* `AuditLog` (UserAction, Timestamp, IP)
* *Future models:* `Course`, `Event`, `Employee`, `Deal`, `Valuation`.

## 7. Antigravity Workflow
* **When starting a task:** Always read the `GEMINI.md` file first.
* **When creating files:** Use the defined color variables (`text-neon-pink`, `bg-charcoal`) instead of raw hex codes.
* **On completion:** verify "Tropical Vibe" check (Is it professional? Is it tropical?).