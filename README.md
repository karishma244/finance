# 💰 Wealth AI
### 🤖 AI-Powered Personal Finance Management Platform

A production-grade, full-stack AI finance SaaS platform that helps users manage budgets, track transactions, scan receipts using AI, automate recurring payments, and gain intelligent financial insights — all within a secure and modern dashboard experience.

---

![Next.js](https://img.shields.io/badge/Next.js-15-black)
![React](https://img.shields.io/badge/React-19-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-Enabled-3178C6)
![Supabase](https://img.shields.io/badge/Supabase-PostgreSQL-green)
![Prisma](https://img.shields.io/badge/Prisma-ORM-2D3748)
![Clerk](https://img.shields.io/badge/Auth-Clerk-purple)
![Gemini AI](https://img.shields.io/badge/AI-Gemini%201.5-orange)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-Styled-38BDF8)
![Arcjet](https://img.shields.io/badge/Security-Arcjet-red)
![Vercel](https://img.shields.io/badge/Deploy-Vercel-black)

---

## 🚀 Live Demo

🔗 **Live App:** https://your-vercel-link.vercel.app

---

# 📌 Overview

Wealth AI is a modern AI-driven finance management platform built to simplify personal financial tracking through automation, AI intelligence, and interactive analytics.

The platform enables users to:
- Manage multiple accounts
- Track income & expenses
- Scan receipts using AI
- Automate recurring transactions
- Set monthly budgets
- Receive AI-powered financial insights
- Get automated email alerts when overspending

Unlike traditional finance trackers, Wealth AI leverages **Google Gemini AI**, background automation, and enterprise-grade security to create a smarter and more scalable financial experience.

---

# ✨ Features

## 🤖 AI Receipt Scanner
- Upload receipt images
- Extract:
  - Amount
  - Merchant name
  - Date
  - Category
  - Description
- Auto-populates transaction forms using Gemini AI

---

## 💳 Smart Account Management
- Multiple accounts support
- Savings & current accounts
- Default account selection
- Real-time balance updates

---

## 💸 Transaction Management
- Add/Edit/Delete transactions
- Income & expense tracking
- Bulk deletion support
- Advanced filtering & search
- Recurring transactions automation

---

## 📊 Interactive Analytics Dashboard
- Income vs Expense charts
- Monthly spending overview
- Expense category breakdown
- Financial summaries
- Real-time insights

Powered by **Recharts**.

---

## 📧 AI Budget Alerts & Reports
- Monthly budget setup
- 80% spending threshold alerts
- AI-generated monthly financial reports
- Personalized financial tips via email

---

## ⚡ Background Automation
Powered by **Inngest**:
- Monthly financial report generation
- Daily budget monitoring
- Recurring transaction automation
- Scheduled workflows

---

## 🔐 Enterprise Grade Security
Integrated with **Arcjet**:
- Bot protection
- API rate limiting
- Abuse prevention
- Attack mitigation
- Spam protection

---

## 🎨 Modern Responsive UI
- Built using Tailwind CSS + ShadCN UI
- Mobile responsive design
- Smooth animations
- Drawer & modal interfaces
- Clean SaaS dashboard architecture

---

# 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | Next.js 15, React 19, TypeScript |
| Styling | Tailwind CSS, ShadCN UI |
| Backend | Next.js Server Actions |
| Database | Supabase PostgreSQL |
| ORM | Prisma ORM |
| Authentication | Clerk |
| AI | Google Gemini 1.5 Flash |
| Background Jobs | Inngest |
| Email Service | Resend + React Email |
| Security | Arcjet |
| Charts | Recharts |
| Deployment | Vercel |

---

# 🏗️ Architecture / Workflow

```bash
┌──────────────────────────────────────────────┐
│                CLIENT SIDE                   │
│                                              │
│  User Dashboard (Next.js + React)            │
│        │                                     │
│        ├── Authentication (Clerk)            │
│        ├── Transaction Management            │
│        ├── Budget Tracking                   │
│        ├── Charts & Analytics                │
│        └── AI Receipt Upload                 │
└──────────────────────┬───────────────────────┘
                       │
                       ▼
┌──────────────────────────────────────────────┐
│              NEXT.JS SERVER ACTIONS          │
│                                              │
│  CRUD Operations                             │
│  AI Processing                               │
│  Validation                                  │
│  Background Scheduling                       │
└──────────────────────┬───────────────────────┘
                       │
        ┌──────────────┼───────────────┐
        ▼                              ▼
┌──────────────────┐      ┌────────────────────┐
│   SUPABASE DB    │      │    GEMINI AI       │
│  PostgreSQL      │      │ Receipt Parsing    │
│ Prisma ORM       │      │ AI Insights        │
└──────────────────┘      └────────────────────┘
                       │
                       ▼
┌──────────────────────────────────────────────┐
│             BACKGROUND SERVICES              │
│                                              │
│ Inngest Cron Jobs                            │
│ Budget Alert Emails                          │
│ Monthly Reports                              │
│ Recurring Transactions                       │
└──────────────────────────────────────────────┘
```

---

# 📸 Screenshots

## Dashboard
_Add dashboard screenshot here_

## AI Receipt Scanner
_Add scanner screenshot here_

## Analytics Charts
_Add analytics screenshot here_

## Budget Management
_Add budget screenshot here_

---

# ⚡ Installation

## Prerequisites
- Node.js 18+
- npm / pnpm
- Supabase account
- Clerk account
- Gemini API key

---

## 1. Clone Repository

```bash
git clone https://github.com/karishma244/wealth-ai.git

cd wealth-ai
```

---

## 2. Install Dependencies

```bash
npm install
```

---

## 3. Setup Environment Variables

Create `.env.local`

```env
# Database
DATABASE_URL=

# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

# Gemini AI
GEMINI_API_KEY=

# Supabase
SUPABASE_URL=
SUPABASE_ANON_KEY=

# Arcjet
ARCJET_KEY=

# Resend
RESEND_API_KEY=
```

---

## 4. Run Prisma Migration

```bash
npx prisma migrate dev
```

---

## 5. Start Development Server

```bash
npm run dev
```

---

# 📡 Core Features Workflow

## AI Receipt Scanner Flow

1. User uploads receipt image
2. Gemini AI analyzes image
3. Structured JSON data extracted
4. Transaction form auto-filled
5. User confirms transaction
6. Data stored in Supabase

---

## Budget Alert Flow

1. User sets monthly budget
2. Daily cron job checks expenses
3. Budget usage calculated
4. Alert email sent at 80% threshold
5. AI financial insights generated

---

# 🗄️ Database Schema

## User
- clerkUserId
- email
- imageUrl
- accounts
- transactions
- budget

---

## Account
- name
- type
- balance
- isDefault

---

## Transaction
- income/expense
- category
- amount
- recurring support
- receipt URL
- status

---

## Budget
- monthly budget
- alert tracking

---

# ⚔️ Challenges Faced

## 1. AI Receipt Data Extraction
Challenge:
Extracting accurate financial data from different receipt formats.

Solution:
Integrated Gemini 1.5 Flash with structured JSON prompting to standardize AI output and auto-fill transaction fields reliably.

---

## 2. Recurring Transaction Automation
Challenge:
Ensuring recurring transactions execute without duplication.

Solution:
Implemented scheduled background workflows using Inngest cron jobs with transaction status tracking.

---

## 3. Secure Financial APIs
Challenge:
Preventing spam and malicious API abuse.

Solution:
Integrated Arcjet rate limiting, bot detection, and request throttling.

---

## 4. Real-Time Financial Analytics
Challenge:
Rendering charts dynamically without performance issues.

Solution:
Optimized aggregation queries and responsive Recharts rendering.

---

# ⚡ Optimizations

## Performance
- Server Actions reduce API overhead
- Lazy loaded dashboard sections
- Optimized chart rendering
- Efficient Prisma queries

---

## Security
- Arcjet bot protection
- Clerk middleware auth
- Protected routes
- API throttling

---

## AI Accuracy
- Structured prompting
- Category normalization
- Receipt validation checks

---

# 🔮 Future Improvements

- Multi-currency support
- Bank API integrations
- AI financial chatbot
- Investment tracking
- CSV/PDF export
- Mobile app
- Real-time notifications
- Dark mode analytics

---

# 📚 Learning Outcomes

Building Wealth AI provided hands-on experience with:
- Full-stack SaaS architecture
- AI integration workflows
- Prisma ORM relational modeling
- Secure authentication systems
- Background job processing
- Financial analytics systems
- Production deployment pipelines
- Modern App Router architecture

---

# 🚀 Deployment

## Frontend & Backend → Vercel

```bash
vercel --prod
```

Set all environment variables inside:
- Vercel Dashboard → Settings → Environment Variables

---

# 📁 Folder Structure

```bash
wealth-ai/
│
├── app/
│   ├── dashboard/
│   ├── transactions/
│   ├── accounts/
│   ├── budgets/
│   └── api/
│
├── actions/
├── components/
├── hooks/
├── lib/
├── prisma/
├── public/
├── emails/
├── inngest/
├── schemas/
├── types/
└── utils/
```

---

# 🤝 Contributing

Contributions are welcome.

## Steps
```bash
Fork the repository
Create feature branch
Commit changes
Push branch
Open Pull Request
```

---

# 💡 Suggested GitHub Metadata

## Repository Description
> AI-powered finance management SaaS with receipt scanning, budgeting, recurring transactions, analytics, email alerts, and enterprise-grade security.

---

## Topics / Tags

```txt
nextjs
react
typescript
prisma
supabase
clerk
gemini-ai
tailwindcss
finance-app
saas
ai
fullstack
vercel
arcjet
inngest
recharts
```

---

# 📄 License

MIT License

Copyright (c) 2026 Karishma Jethwani

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction.

---

# 👩‍💻 Author

Karishma Jethwani

GitHub:
https://github.com/karishma244

---

# ⭐ Support

If you liked this project:
- Give it a ⭐
- Fork the repository
- Share feedback

---

Built with ❤️ by Karishma Jethwani
