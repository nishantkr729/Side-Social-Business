# Omnis Website — Full Codebase Documentation

A dual-audience website for **Omnis**, a consulting organization bridging the social sector and business world. The site splits into two distinct worlds from a single homepage: one for NGOs/nonprofits, one for business owners seeking social impact strategy.

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Tech Stack](#2-tech-stack)
3. [File Structure](#3-file-structure)
4. [Routing](#4-routing)
5. [Entry Point — `main.tsx`](#5-entry-point--maintsx)
6. [Root App — `App.tsx`](#6-root-app--apptsx)
7. [Global Styles — `index.css`](#7-global-styles--indexcss)
8. [Package Configuration — `package.json`](#8-package-configuration--packagejson)
9. [Home Page — `pages/Home.tsx`](#9-home-page--pageshometsx)
10. [Social Sector Layout — `components/layout/SocialLayout.tsx`](#10-social-sector-layout--componentslayoutsociallayouttsx)
11. [Business Layout — `components/layout/BusinessLayout.tsx`](#11-business-layout--componentslayoutbusinesslayouttsx)
12. [Social Sector Pages](#12-social-sector-pages)
    - [SocialLanding.tsx](#sociallanding)
    - [SocialAbout.tsx](#socialabout)
    - [SocialServices.tsx](#socialservices)
    - [SocialDonate.tsx](#socialdonatetsx)
    - [SocialBookCall.tsx](#socialbookcall)
13. [Business Pages](#13-business-pages)
    - [BusinessLanding.tsx](#businesslanding)
    - [BusinessAbout.tsx](#businessabout)
    - [BusinessServices.tsx](#businessservices)
    - [BusinessBookCall.tsx](#businessbookcall)
14. [Mockup Sandbox — AchievementsSection](#14-mockup-sandbox--achievementssection)
15. [Design Decisions](#15-design-decisions)
16. [Color System](#16-color-system)
17. [Page Map](#17-page-map)

---

## 1. Project Overview

Omnis is a split-brand consulting website with two fully independent sub-sites sharing a single codebase:

| Audience | URL prefix | Identity color | Focus |
|---|---|---|---|
| Social sector (NGOs/nonprofits) | `/social` | Green (`#22c55e`) | Capacity building, impact measurement, funding strategy |
| Business owners | `/business` | Teal (`#10b981`) | CSR strategy, ESG advisory, impact partnerships |

The homepage (`/`) shows both sides simultaneously as a split screen. Visitors choose which world to enter. Below the split, the homepage shows impact stats and selected case study work.

---

## 2. Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 (Vite, no Next.js) |
| Routing | `wouter` v3 |
| Styling | Tailwind CSS v4 (utility classes, no custom config file) |
| UI components | shadcn/ui (Radix UI primitives) |
| Icons | `lucide-react` |
| Font | Outfit (Google Fonts — 300, 400, 500, 600, 700) |
| State/data | `@tanstack/react-query` (no backend calls in this project) |
| Build tool | Vite |
| Type checking | TypeScript 5 |
| Package manager | pnpm (workspace monorepo) |

---

## 3. File Structure

```
artifacts/omnis/src/
├── main.tsx                          # React root mount
├── App.tsx                           # Router + providers
├── index.css                         # Global styles, CSS variables, Tailwind
├── lib/
│   └── utils.ts                      # shadcn cn() helper
├── hooks/
│   ├── use-toast.ts
│   └── use-mobile.tsx
├── components/
│   ├── layout/
│   │   ├── SocialLayout.tsx          # Nav + footer wrapper for /social/*
│   │   └── BusinessLayout.tsx        # Nav + footer wrapper for /business/*
│   └── ui/                           # shadcn/ui components (accordion, button, card, etc.)
└── pages/
    ├── Home.tsx                      # Split homepage + stats + work + footer
    ├── not-found.tsx
    ├── social/
    │   ├── SocialLanding.tsx         # /social — hero + highlights
    │   ├── SocialAbout.tsx           # /social/about
    │   ├── SocialServices.tsx        # /social/services
    │   ├── SocialDonate.tsx          # /social/donate
    │   └── SocialBookCall.tsx        # /social/book-call
    └── business/
        ├── BusinessLanding.tsx       # /business — hero + pillars + quote
        ├── BusinessAbout.tsx         # /business/about
        ├── BusinessServices.tsx      # /business/services
        └── BusinessBookCall.tsx      # /business/book-call

artifacts/mockup-sandbox/src/components/mockups/
└── home/
    └── AchievementsSection.tsx       # Canvas design preview component
```

---

## 4. Routing

All routes are handled by `wouter`. The router is mounted with `base={import.meta.env.BASE_URL}` for correct proxy path handling in the Replit environment.

| Path | Component | Layout |
|---|---|---|
| `/` | `Home` | None (self-contained) |
| `/social` | `SocialLanding` | `SocialLayout` |
| `/social/about` | `SocialAbout` | `SocialLayout` |
| `/social/services` | `SocialServices` | `SocialLayout` |
| `/social/donate` | `SocialDonate` | `SocialLayout` |
| `/social/book-call` | `SocialBookCall` | `SocialLayout` |
| `/business` | `BusinessLanding` | `BusinessLayout` |
| `/business/about` | `BusinessAbout` | `BusinessLayout` |
| `/business/services` | `BusinessServices` | `BusinessLayout` |
| `/business/book-call` | `BusinessBookCall` | `BusinessLayout` |

---

## 5. Entry Point — `main.tsx`

```tsx
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);
```

---

## 6. Root App — `App.tsx`

```tsx
import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import Home from "@/pages/Home";
import SocialLayout from "@/components/layout/SocialLayout";
import BusinessLayout from "@/components/layout/BusinessLayout";

import SocialLanding from "@/pages/social/SocialLanding";
import SocialAbout from "@/pages/social/SocialAbout";
import SocialServices from "@/pages/social/SocialServices";
import SocialDonate from "@/pages/social/SocialDonate";
import SocialBookCall from "@/pages/social/SocialBookCall";

import BusinessLanding from "@/pages/business/BusinessLanding";
import BusinessAbout from "@/pages/business/BusinessAbout";
import BusinessServices from "@/pages/business/BusinessServices";
import BusinessBookCall from "@/pages/business/BusinessBookCall";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />

      {/* Social Sector Routes */}
      <Route path="/social" component={() => <SocialLayout><SocialLanding /></SocialLayout>} />
      <Route path="/social/about" component={() => <SocialLayout><SocialAbout /></SocialLayout>} />
      <Route path="/social/services" component={() => <SocialLayout><SocialServices /></SocialLayout>} />
      <Route path="/social/donate" component={() => <SocialLayout><SocialDonate /></SocialLayout>} />
      <Route path="/social/book-call" component={() => <SocialLayout><SocialBookCall /></SocialLayout>} />

      {/* Business Sector Routes */}
      <Route path="/business" component={() => <BusinessLayout><BusinessLanding /></BusinessLayout>} />
      <Route path="/business/about" component={() => <BusinessLayout><BusinessAbout /></BusinessLayout>} />
      <Route path="/business/services" component={() => <BusinessLayout><BusinessServices /></BusinessLayout>} />
      <Route path="/business/book-call" component={() => <BusinessLayout><BusinessBookCall /></BusinessLayout>} />

      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
```

---

## 7. Global Styles — `index.css`

```css
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap');
@import "tailwindcss";
@import "tw-animate-css";
@plugin "@tailwindcss/typography";

@custom-variant dark (&:is(.dark *));

@theme inline {
  --color-background: hsl(var(--background));
  --color-foreground: hsl(var(--foreground));
  --color-border: hsl(var(--border));
  --color-input: hsl(var(--input));
  --color-ring: hsl(var(--ring));
  --color-card: hsl(var(--card));
  --color-card-foreground: hsl(var(--card-foreground));
  --color-card-border: hsl(var(--card-border));
  --color-popover: hsl(var(--popover));
  --color-popover-foreground: hsl(var(--popover-foreground));
  --color-popover-border: hsl(var(--popover-border));
  --color-primary: hsl(var(--primary));
  --color-primary-foreground: hsl(var(--primary-foreground));
  --color-primary-border: var(--primary-border);
  --color-secondary: hsl(var(--secondary));
  --color-secondary-foreground: hsl(var(--secondary-foreground));
  --color-secondary-border: var(--secondary-border);
  --color-muted: hsl(var(--muted));
  --color-muted-foreground: hsl(var(--muted-foreground));
  --color-muted-border: var(--muted-border);
  --color-accent: hsl(var(--accent));
  --color-accent-foreground: hsl(var(--accent-foreground));
  --color-accent-border: var(--accent-border);
  --color-destructive: hsl(var(--destructive));
  --color-destructive-foreground: hsl(var(--destructive-foreground));
  --color-destructive-border: var(--destructive-border);
  --font-sans: var(--app-font-sans);
  --font-serif: var(--app-font-serif);
  --font-mono: var(--app-font-mono);
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
}

:root {
  --background: 0 0% 100%;
  --foreground: 240 10% 3.9%;
  --border: 240 5.9% 90%;
  --card: 0 0% 100%;
  --card-foreground: 240 10% 3.9%;
  --card-border: 240 5.9% 90%;
  --popover: 0 0% 100%;
  --popover-foreground: 240 10% 3.9%;
  --popover-border: 240 5.9% 90%;
  --primary: 240 5.9% 10%;
  --primary-foreground: 0 0% 98%;
  --secondary: 240 4.8% 95.9%;
  --secondary-foreground: 240 5.9% 10%;
  --muted: 240 4.8% 95.9%;
  --muted-foreground: 240 3.8% 46.1%;
  --accent: 240 4.8% 95.9%;
  --accent-foreground: 240 5.9% 10%;
  --destructive: 0 84.2% 60.2%;
  --destructive-foreground: 0 0% 98%;
  --input: 240 5.9% 90%;
  --ring: 240 5.9% 10%;
  --app-font-sans: 'Outfit', sans-serif;
  --app-font-serif: Georgia, serif;
  --app-font-mono: Menlo, monospace;
  --radius: .5rem;
}

.dark {
  --background: 240 10% 3.9%;
  --foreground: 0 0% 98%;
  --border: 240 3.7% 15.9%;
  --card: 240 10% 3.9%;
  --card-foreground: 0 0% 98%;
  --card-border: 240 3.7% 15.9%;
  --popover: 240 10% 3.9%;
  --popover-foreground: 0 0% 98%;
  --popover-border: 240 3.7% 15.9%;
  --primary: 0 0% 98%;
  --primary-foreground: 240 5.9% 10%;
  --secondary: 240 3.7% 15.9%;
  --secondary-foreground: 0 0% 98%;
  --muted: 240 3.7% 15.9%;
  --muted-foreground: 240 5% 64.9%;
  --accent: 240 3.7% 15.9%;
  --accent-foreground: 0 0% 98%;
  --destructive: 0 62.8% 30.6%;
  --destructive-foreground: 0 0% 98%;
  --input: 240 3.7% 15.9%;
  --ring: 240 4.9% 83.9%;
}

@layer base {
  * { @apply border-border; }
  body { @apply font-sans antialiased bg-background text-foreground; }
}
```

---

## 8. Package Configuration — `package.json`

```json
{
  "name": "@workspace/omnis",
  "version": "0.0.0",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "vite --config vite.config.ts --host 0.0.0.0",
    "build": "vite build --config vite.config.ts",
    "serve": "vite preview --config vite.config.ts --host 0.0.0.0",
    "typecheck": "tsc -p tsconfig.json --noEmit"
  },
  "devDependencies": {
    "@hookform/resolvers": "^3.10.0",
    "@radix-ui/react-accordion": "^1.2.4",
    "@radix-ui/react-dialog": "^1.1.7",
    "@radix-ui/react-label": "^2.1.3",
    "@radix-ui/react-select": "^2.1.7",
    "@radix-ui/react-toast": "^1.2.7",
    "@radix-ui/react-tooltip": "^1.2.0",
    "@replit/vite-plugin-cartographer": "catalog:",
    "@tailwindcss/typography": "^0.5.15",
    "@tailwindcss/vite": "catalog:",
    "@tanstack/react-query": "catalog:",
    "@types/react": "catalog:",
    "@types/react-dom": "catalog:",
    "@vitejs/plugin-react": "catalog:",
    "@workspace/api-client-react": "workspace:*",
    "class-variance-authority": "catalog:",
    "clsx": "catalog:",
    "lucide-react": "catalog:",
    "react": "catalog:",
    "react-dom": "catalog:",
    "react-hook-form": "^7.55.0",
    "tailwind-merge": "catalog:",
    "tailwindcss": "catalog:",
    "tw-animate-css": "^1.4.0",
    "vite": "catalog:",
    "wouter": "^3.3.5",
    "zod": "catalog:"
  }
}
```

---

## 9. Home Page — `pages/Home.tsx`

The homepage is self-contained (no layout wrapper). It has four sections stacked vertically:

1. **Header** — sticky, dark, frosted glass; logo + nav links + two CTA buttons
2. **Split Screen** — full-viewport-height, two clickable halves
3. **Impact Numbers** — 4-stat grid
4. **Selected Work** — 4 case study cards (2-column grid)
5. **Footer** — 4-column link grid + bottom bar

```tsx
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

const stats = [
  { number: "100+", label: "Organizations Supported", sub: "NGOs, nonprofits & social enterprises" },
  { number: "18", label: "Countries", sub: "Active programs across 3 continents" },
  { number: "$12M+", label: "Social Investment Mobilized", sub: "Through CSR & impact partnerships" },
  { number: "93%", label: "Client Retention", sub: "Long-term partners, not one-off engagements" },
];

const work = [
  {
    tag: "Social Sector",
    color: "green",
    title: "Strategic Planning for African Climate NGO",
    description: "Facilitated a full organizational re-strategy for a 60-person climate justice NGO — resulting in a 3-year plan, a new governance framework, and a 40% increase in grant success rate.",
    outcome: "40% more grants secured",
  },
  {
    tag: "Business",
    color: "teal",
    title: "ESG Roadmap for a Mid-Size Manufacturer",
    description: "Designed a GRI-aligned ESG disclosure strategy and materiality assessment for a 500-person manufacturing company preparing for institutional investor scrutiny.",
    outcome: "First ESG report published in 6 months",
  },
  {
    tag: "Social Sector",
    color: "green",
    title: "Impact Measurement for Education Network",
    description: "Built a full MEAL framework and data collection system for a network of 14 schools reaching 8,000 students — enabling them to demonstrate outcomes to funders for the first time.",
    outcome: "8,000 students' outcomes tracked",
  },
  {
    tag: "Business",
    color: "teal",
    title: "Community Investment Program Design",
    description: "Co-designed a 3-year community investment strategy for a regional bank, matching them with 6 nonprofit partners and structuring joint governance for all programs.",
    outcome: "$2M invested with clear metrics",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh] w-full bg-[#0a0a0a] text-white">

      {/* ── HEADER ── */}
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0a0a0a]/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-18 flex items-center justify-between py-4">
          <span className="text-xl font-medium tracking-tight">
            Omnis<span className="text-green-500">.</span>
          </span>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#impact" className="text-sm text-gray-400 hover:text-white transition-colors font-medium">Impact</a>
            <a href="#work" className="text-sm text-gray-400 hover:text-white transition-colors font-medium">Work</a>
            <Link href="/social" className="text-sm text-gray-400 hover:text-white transition-colors font-medium">Social Sector</Link>
            <Link href="/business" className="text-sm text-gray-400 hover:text-white transition-colors font-medium">Business</Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link href="/social/book-call" className="text-sm font-medium text-white border border-white/20 hover:border-white/40 px-4 py-2 rounded-md transition-colors hidden md:block">
              Social Sector
            </Link>
            <Link href="/business/book-call" className="text-sm font-medium bg-white text-gray-900 hover:bg-gray-100 px-4 py-2 rounded-md transition-colors">
              Business
            </Link>
          </div>
        </div>
      </header>

      {/* ── SPLIT SCREEN ── */}
      <div className="flex flex-col md:flex-row" style={{ minHeight: "calc(100dvh - 64px)" }}>
        {/* Left — Social Sector */}
        <Link href="/social" className="group flex-1 flex flex-col justify-center items-center text-center p-8 md:p-16 border-b md:border-b-0 md:border-r border-white/10 hover:bg-white/5 transition-colors duration-500 cursor-pointer">
          <div className="max-w-md">
            <div className="w-16 h-1 bg-green-500 mx-auto mb-8 transition-transform duration-300 group-hover:scale-x-150" />
            <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-6">Social Sector</h2>
            <p className="text-lg md:text-xl text-gray-400 font-light mb-12">
              Empowering NGOs and nonprofits to scale their impact through strategic capacity building.
            </p>
            <div className="inline-flex items-center gap-3 text-green-500 font-medium tracking-wide">
              ENTER <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
            </div>
          </div>
        </Link>

        {/* Right — Business Owners */}
        <Link href="/business" className="group flex-1 flex flex-col justify-center items-center text-center p-8 md:p-16 hover:bg-white/5 transition-colors duration-500 cursor-pointer">
          <div className="max-w-md">
            <div className="w-16 h-1 bg-teal-500 mx-auto mb-8 transition-transform duration-300 group-hover:scale-x-150" />
            <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-6">Business Owners</h2>
            <p className="text-lg md:text-xl text-gray-400 font-light mb-12">
              Guiding companies to build meaningful CSR strategies and sustainable ESG partnerships.
            </p>
            <div className="inline-flex items-center gap-3 text-teal-500 font-medium tracking-wide">
              ENTER <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
            </div>
          </div>
        </Link>
      </div>

      {/* ── IMPACT NUMBERS ── */}
      <section id="impact" className="border-t border-white/10 py-20 px-6 md:px-16">
        <p className="text-sm font-semibold tracking-widest text-gray-500 uppercase mb-14 text-center">
          Our Impact in Numbers
        </p>
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
          {stats.map((s) => (
            <div key={s.label} className="px-6 md:px-10 first:pl-0 last:pr-0 text-center md:text-left">
              <div className="text-4xl md:text-5xl font-light text-white mb-2">{s.number}</div>
              <div className="text-sm font-semibold text-gray-300 mb-1">{s.label}</div>
              <div className="text-xs text-gray-500 leading-relaxed">{s.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SELECTED WORK ── */}
      <section id="work" className="border-t border-white/10 py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14">
            <p className="text-sm font-semibold tracking-widest text-gray-500 uppercase mb-3">Selected Work</p>
            <h2 className="text-3xl md:text-4xl font-light text-white">What we've built together.</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {work.map((item) => (
              <div key={item.title} className="border border-white/10 rounded-2xl p-8 hover:border-white/20 hover:bg-white/[0.03] transition-all">
                <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-5 ${
                  item.color === "green" ? "bg-green-500/10 text-green-400" : "bg-teal-500/10 text-teal-400"
                }`}>
                  {item.tag}
                </span>
                <h3 className="text-lg font-medium text-white mb-3 leading-snug">{item.title}</h3>
                <p className="text-sm text-gray-400 font-light leading-relaxed mb-6">{item.description}</p>
                <div className={`text-xs font-semibold tracking-wide ${
                  item.color === "green" ? "text-green-500" : "text-teal-500"
                }`}>
                  {item.outcome}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-white/10 mt-auto">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
            <div className="col-span-2 md:col-span-1">
              <span className="text-xl font-medium tracking-tight block mb-4">
                Omnis<span className="text-green-500">.</span>
              </span>
              <p className="text-sm text-gray-500 font-light leading-relaxed max-w-[200px]">
                Bridging impact and purpose — for the social sector and for business.
              </p>
            </div>
            <div>
              <h4 className="text-xs font-semibold text-gray-500 tracking-widest uppercase mb-5">Social Sector</h4>
              <ul className="space-y-3">
                {[
                  { label: "Overview", href: "/social" },
                  { label: "About", href: "/social/about" },
                  { label: "Services", href: "/social/services" },
                  { label: "Donate", href: "/social/donate" },
                  { label: "Book a Call", href: "/social/book-call" },
                ].map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold text-gray-500 tracking-widest uppercase mb-5">Business</h4>
              <ul className="space-y-3">
                {[
                  { label: "Overview", href: "/business" },
                  { label: "About", href: "/business/about" },
                  { label: "Services", href: "/business/services" },
                  { label: "Book a Call", href: "/business/book-call" },
                ].map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold text-gray-500 tracking-widest uppercase mb-5">Contact</h4>
              <ul className="space-y-3">
                <li><a href="mailto:hello@omnis.org" className="text-sm text-gray-400 hover:text-white transition-colors">hello@omnis.org</a></li>
                <li><a href="mailto:donate@omnis.org" className="text-sm text-gray-400 hover:text-white transition-colors">donate@omnis.org</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-600">&copy; {new Date().getFullYear()} Omnis. All rights reserved.</p>
            <p className="text-xs text-gray-600">Strategy with purpose.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
```

---

## 10. Social Sector Layout — `components/layout/SocialLayout.tsx`

Wraps all `/social/*` pages. White background, green accent. Sticky top nav with active link highlighting, "Back to Split Home" link, and a Book a Call CTA. Dark green footer.

```tsx
import { Link, useLocation } from "wouter";
import { ReactNode } from "react";

export default function SocialLayout({ children }: { children: ReactNode }) {
  const [location] = useLocation();

  const navItems = [
    { label: "Home", href: "/social" },
    { label: "About", href: "/social/about" },
    { label: "Services", href: "/social/services" },
    { label: "Donate", href: "/social/donate" },
  ];

  return (
    <div className="min-h-[100dvh] flex flex-col bg-[#fcfdfc] text-gray-900 font-sans">
      <header className="sticky top-0 z-50 w-full border-b border-green-100 bg-white/80 backdrop-blur-md">
        <div className="container mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/social" className="text-xl font-medium tracking-tight text-green-800">
              Omnis<span className="text-green-500">.</span>Social
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}
                  className={`text-sm font-medium transition-colors ${
                    location === item.href ? "text-green-600" : "text-gray-500 hover:text-green-600"
                  }`}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors hidden md:block">
              Back to Split Home
            </Link>
            <Link href="/social/book-call" className="bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-md text-sm font-medium transition-colors">
              Book a Call
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1 flex flex-col">{children}</main>
      <footer className="bg-green-950 text-green-100 py-12 mt-auto">
        <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xl font-medium tracking-tight">
            Omnis<span className="text-green-400">.</span>Social
          </div>
          <div className="text-sm text-green-300/60">
            &copy; {new Date().getFullYear()} Omnis. Bridging impact and capacity.
          </div>
        </div>
      </footer>
    </div>
  );
}
```

---

## 11. Business Layout — `components/layout/BusinessLayout.tsx`

Same structure as SocialLayout but with teal identity. Wraps all `/business/*` pages.

```tsx
import { Link, useLocation } from "wouter";
import { ReactNode } from "react";

export default function BusinessLayout({ children }: { children: ReactNode }) {
  const [location] = useLocation();

  const navItems = [
    { label: "Home", href: "/business" },
    { label: "About", href: "/business/about" },
    { label: "Services", href: "/business/services" },
  ];

  return (
    <div className="min-h-[100dvh] flex flex-col bg-[#f8fafb] text-gray-900 font-sans">
      <header className="sticky top-0 z-50 w-full border-b border-teal-100 bg-white/80 backdrop-blur-md">
        <div className="container mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/business" className="text-xl font-medium tracking-tight text-teal-900">
              Omnis<span className="text-teal-500">.</span>Business
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}
                  className={`text-sm font-medium transition-colors ${
                    location === item.href ? "text-teal-600" : "text-gray-500 hover:text-teal-600"
                  }`}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors hidden md:block">
              Back to Split Home
            </Link>
            <Link href="/business/book-call" className="bg-teal-600 hover:bg-teal-700 text-white px-5 py-2.5 rounded-md text-sm font-medium transition-colors">
              Book a Call
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1 flex flex-col">{children}</main>
      <footer className="bg-teal-950 text-teal-100 py-12 mt-auto">
        <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xl font-medium tracking-tight">
            Omnis<span className="text-teal-400">.</span>Business
          </div>
          <div className="text-sm text-teal-300/60">
            &copy; {new Date().getFullYear()} Omnis. Strategy with purpose.
          </div>
        </div>
      </footer>
    </div>
  );
}
```

---

## 12. Social Sector Pages

### SocialLanding

**Route:** `/social`

Hero with large headline, two CTAs (Explore Services / Talk to our team). Below that a green-tinted highlights strip with 3 feature cards: Funding Strategy, Impact Measurement, Capacity Building.

```tsx
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export default function SocialLanding() {
  return (
    <div className="w-full">
      <section className="pt-24 pb-32 px-4 md:px-8 max-w-6xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-light tracking-tight text-gray-900 mb-8 max-w-4xl mx-auto leading-tight">
          Building capacity for those who build <span className="text-green-600 font-medium">community</span>.
        </h1>
        <p className="text-xl text-gray-500 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
          We partner with NGOs and nonprofits to strengthen their operations, measure their impact, and ensure sustainable growth.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/social/services" className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-md font-medium transition-colors w-full sm:w-auto">
            Explore Services
          </Link>
          <Link href="/social/book-call" className="px-8 py-4 bg-white border border-gray-200 hover:border-green-300 hover:bg-green-50 text-gray-900 rounded-md font-medium transition-colors w-full sm:w-auto">
            Talk to our team
          </Link>
        </div>
      </section>

      <section className="bg-green-50 py-24">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Card: Funding Strategy */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-green-100/50">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-6 text-green-600">
                {/* Dollar sign SVG icon */}
              </div>
              <h3 className="text-xl font-medium mb-3">Funding Strategy</h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Develop diversified revenue streams and compelling grant proposals that secure long-term sustainability.
              </p>
            </div>
            {/* Card: Impact Measurement */}
            {/* Card: Capacity Building */}
          </div>
        </div>
      </section>
    </div>
  );
}
```

---

### SocialAbout

**Route:** `/social/about`

Three sections:
1. Header block — mission statement headline
2. Green-tinted story section — 2-column (narrative text left, 4-stat grid right): 40+ orgs, 12 countries, 8yrs experience, 93% retention
3. Values section — 3 cards: Equity-centered, Practical over theoretical, Long-term partnerships

---

### SocialServices

**Route:** `/social/services`

8 services across 4 grouped categories, displayed as 2-column card grids per category:

| Category | Services |
|---|---|
| Strategy & Planning | Strategic Planning, Funding Diversification |
| Impact & Measurement | Impact Measurement Framework, Reporting & Communication |
| Organizational Development | Board Governance, Operational Systems |
| Capacity Building | Staff & Leadership Development, Grant Writing Support |

Ends with a green CTA strip: "Book a Free Discovery Call."

```tsx
const services = [
  {
    category: "Strategy & Planning",
    items: [
      { title: "Strategic Planning", description: "Facilitated multi-year planning processes..." },
      { title: "Funding Diversification", description: "Audit your current funding mix..." },
    ],
  },
  {
    category: "Impact & Measurement",
    items: [
      { title: "Impact Measurement Framework", description: "Design a results framework..." },
      { title: "Reporting & Communication", description: "Transform raw program data..." },
    ],
  },
  {
    category: "Organizational Development",
    items: [
      { title: "Board Governance", description: "Strengthen board structure..." },
      { title: "Operational Systems", description: "Build or refine the HR policies..." },
    ],
  },
  {
    category: "Capacity Building",
    items: [
      { title: "Staff & Leadership Development", description: "Custom training programs..." },
      { title: "Grant Writing Support", description: "Expert support crafting proposals..." },
    ],
  },
];
```

---

### SocialDonate.tsx

**Route:** `/social/donate`

Three cause cards with tag, title, description, and per-dollar impact line:

| Cause | Tag | Impact line |
|---|---|---|
| Community Resilience Fund | Capacity Building | Every $500 funds one day of consulting |
| Impact Measurement Initiative | Measurement & Evidence | Every $250 helps one org design a results framework |
| Leadership Pipeline | Leadership Development | Every $100 = one month of mentorship |

Ends with a green CTA box linking to `mailto:donate@omnis.org`.

---

### SocialBookCall

**Route:** `/social/book-call`

Two-column layout:
- **Left:** 3-step process (01 intake form, 02 discovery call, 03 tailored proposal)
- **Right:** Contact form with fields: first name, last name, organization name, work email, biggest challenge (textarea). On submit: alert confirmation.

---

## 13. Business Pages

### BusinessLanding

**Route:** `/business`

Hero with large headline ("Doing business with **purpose** is not a compromise."), two CTAs. Teal-tinted highlights section with 3 pillar cards: CSR Strategy, ESG Advisory, Impact Partnerships. Closing pull-quote section.

---

### BusinessAbout

**Route:** `/business/about`

Three sections:
1. Header block — "We help companies mean what they say about social impact."
2. Teal-tinted perspective section — 2-column (text left, 4-stat grid right): 60+ companies, 18 sectors, $12M+ mobilized, 100% report measurable outcomes
3. Principles section — 3 cards: Substance over optics, Community as co-designer, Integrated not siloed

---

### BusinessServices

**Route:** `/business/services`

8 services across 4 grouped categories:

| Category | Services |
|---|---|
| CSR Strategy | CSR Framework Development, Community Investment Programs |
| ESG & Reporting | ESG Materiality Assessment, Reporting & Disclosure Support |
| Impact Partnerships | Nonprofit Partner Matching, Partnership Design & Management |
| Stakeholder Engagement | Stakeholder Mapping & Dialogue, Social Impact Measurement |

Ends with a teal CTA strip: "Book a Free Discovery Call."

---

### BusinessBookCall

**Route:** `/business/book-call`

Two-column layout:
- **Left:** 3-step process + "Who should request a call?" info box (4 bullet points)
- **Right:** Contact form with fields: first name, last name, company name, work email, CSR/ESG stage (dropdown with 5 options), goals (textarea). On submit: alert confirmation.

```tsx
// Dropdown options for CSR/ESG stage:
// - Just getting started — no formal program yet
// - Early stage — we have some initiatives but no strategy
// - We have a program but it needs restructuring
// - We're focused on ESG reporting and disclosure
// - We're looking for nonprofit partners
```

---

## 14. Mockup Sandbox — AchievementsSection

**File:** `artifacts/mockup-sandbox/src/components/mockups/home/AchievementsSection.tsx`

A standalone canvas preview component (not part of the main app) showing the design of the home page achievement + work sections. Served by the mockup-sandbox vite server at `/__mockup/preview/home/AchievementsSection`.

```tsx
export function AchievementsSection() {
  const stats = [
    { number: "100+", label: "Organizations Supported", sub: "Across NGOs, nonprofits & social enterprises" },
    { number: "18", label: "Countries", sub: "Active programs across Africa, Europe & Asia" },
    { number: "$12M+", label: "Social Investment Mobilized", sub: "Through CSR strategies & impact partnerships" },
    { number: "93%", label: "Client Retention", sub: "Long-term partners, not one-off engagements" },
  ];

  const work = [
    {
      tag: "Social Sector", color: "green",
      title: "Strategic Planning for African Climate NGO",
      description: "...",
      outcome: "40% more grants secured",
    },
    // ... 3 more case studies
  ];

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen font-sans">
      {/* Stats row */}
      {/* Work cards 2-column grid */}
    </div>
  );
}
```

---

## 15. Design Decisions

| Decision | Rationale |
|---|---|
| No animations | Requested by client — clean, fast, trustworthy feel |
| Separate layouts per sector | Each audience gets a fully independent visual identity once they enter their side |
| Dark homepage, light sub-pages | Homepage creates contrast and drama; sub-pages are calmer and easier to read long-form |
| `wouter` instead of React Router | Lightweight, no nested route config needed for this site structure |
| Vite (not Next.js) | Simpler build pipeline; no SSR needed for a static consultancy site |
| CSS custom properties for theming | Enables clean dark/light support and shadcn/ui compatibility |
| Font: Outfit | Feels professional and modern without being corporate or cold |
| Real placeholder content | All text is actual service descriptions, not lorem ipsum — immediately usable |

---

## 16. Color System

### Homepage (dark)
| Role | Value |
|---|---|
| Background | `#0a0a0a` |
| Borders | `white/10` |
| Body text | `white` |
| Muted text | `gray-400`, `gray-500` |
| Social accent | `green-500` (`#22c55e`) |
| Business accent | `teal-500` (`#10b981`) |

### Social Sector (light)
| Role | Value |
|---|---|
| Background | `#fcfdfc` |
| Nav border | `green-100` |
| Active nav | `green-600` |
| CTA button | `green-600` / `green-700` hover |
| Highlight bg | `green-50` |
| Footer bg | `green-950` |

### Business Sector (light)
| Role | Value |
|---|---|
| Background | `#f8fafb` |
| Nav border | `teal-100` |
| Active nav | `teal-600` |
| CTA button | `teal-600` / `teal-700` hover |
| Highlight bg | `teal-50` |
| Footer bg | `teal-950` |

---

## 17. Page Map

```
/                          ← Split homepage (dark, self-contained)
│  Header (sticky, dark)
│  Split Screen (full-viewport)
│    ├── Left half → /social
│    └── Right half → /business
│  Impact Numbers (4 stats)
│  Selected Work (4 case cards)
│  Footer (4-column link grid)
│
├── /social                ← Omnis.Social world (light, green)
│   ├── /social/about
│   ├── /social/services
│   ├── /social/donate
│   └── /social/book-call
│
└── /business              ← Omnis.Business world (light, teal)
    ├── /business/about
    ├── /business/services
    └── /business/book-call
```
