# 🍔 Kangen Burgers

> A premium, highly-animated, health-conscious burger franchise website.

![Kangen Burgers Hero](public/images/hero-bg.jpg)

**Kangen Burgers** is a modern web application built with a high-end editorial and "dark glassmorphism" design system. It features a custom **Framer Motion canvas scroll sequence**, fully responsive layouts, and a sophisticated aesthetic that combines deep charcoals with vibrant orange and teal accents.

## 🚀 Live Demo
- **Production URL:** [https://burgers2.vercel.app](https://burgers2.vercel.app)
- **Repository:** [https://github.com/chaitanyashete03/burger-website](https://github.com/chaitanyashete03/burger-website)

## 📌 Key Features

- **Interactive Scroll Animation (`BurgerScroll.tsx`):** A 700vh scroll-driven hero section that scrubs through a high-definition image sequence frame-by-frame on an HTML `<canvas>`, synchronized with interactive floating glass cards.
- **Premium Editorial Design System:** Alternating deep cinematic sections (`#0f0a08`) and high-contrast cream layouts.
- **Crystal Glassmorphism:** Custom frosted glass cards (`GlassCard.tsx`) with dynamic hover gradients and subtle lighting effects.
- **100% SEO Optimized & Local SEO Ready:**
  - Automated `sitemap.xml` & `robots.txt`
  - Fully dynamic metadata (`seo.ts`) with Canonical tags and precise OpenGraph images
  - Embedded `JSON-LD` LocalBusiness / Restaurant structured data for Google Knowledge Panels
- **Staggered Animations (`SectionReveal.tsx`):** Every section and card gently fades and translates into view on scroll.
- **Fully Responsive:** Meticulously tailored breakpoints ensuring perfect readability from mobile iOS Safari to 4K Ultrawide displays.

## 🛠️ Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router, Static Export configured)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations / Scroll:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Fonts:** [Google Fonts (Outfit)](https://fonts.google.com/specimen/Outfit)

## 📂 Project Structure

```
├── app/
│   ├── blog/              # Dynamic blog pages and articles
│   ├── contact/           # Map iframe and contact forms
│   ├── franchise/         # Cinematic franchise pitches & application
│   ├── kangen-water/      # The science behind the alkaline water
│   ├── menu/              # Sectioned food interfaces
│   ├── order-online/      # Order integration portal
│   ├── layout.tsx         # Global layout with SEO / schema
│   └── page.tsx           # Complex homepage assembly
├── components/
│   ├── BurgerScroll.tsx   # Complex Canvas scroll animation
│   ├── SectionReveal.tsx  # Framer motion entrance animation wrapper
│   ├── GlassCard.tsx      # Core CSS glassmorphism primitive
│   ├── NavBar.tsx         # Fixed, intelligent translucent navigation
│   └── Footer.tsx         # Universal dark footers
├── lib/
│   ├── constants.ts       # Global text content & configurations
│   └── seo.ts             # Advanced SEO & Meta generation 
└── public/
    └── sequences/         # Output image frames for the canvas animation
```

## 💻 Running Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/chaitanyashete03/burger-website.git
   cd burger-website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **View the application:**
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Building for Production

This project is configured as a Static HTML Export (`output: "export"`).

```bash
npm run build
```

This will generate an `/out` directory containing purely static HTML/CSS/JS, which can be deployed to absolutely any static hosting provider (Vercel, AWS S3, GitHub Pages, Firebase Hosting, Netlify).

## 📄 License & Ownership

Developed for **Kangen Burgers** © 2024–2026. All rights reserved.
