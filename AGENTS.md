# AGENTS.md - SwapKam Video Editor Portfolio

Welcome to the **SwapKam** portfolio codebase. This repository contains the personal portfolio website for **Swap Kam** (Swapnil Kamble) — a Creative Short Form Video Editor, Motion Graphic Designer, Content Strategist, and Consultant.

This document serves as the single source of truth and comprehensive operational manual for AI agents and developers working on this project.

---

## 1. Project Overview & Architecture

### Core Purpose
Showcases Swap Kam's video editing portfolio (Shorts/Reels & Long-form YouTube projects), skills, software stack, career experience, freelance service offerings, and direct inquiry channels.

### Tech Stack
- **Framework:** [Next.js 16](https://nextjs.org/) (App Router architecture)
- **UI Library:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) with PostCSS (`@tailwindcss/postcss`)
- **Animations:** [Motion](https://motion.dev/) (`motion/react`)
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/) (`react-icons/fa`)
- **Backend / Email:** [Nodemailer](https://nodemailer.com/) (Gmail SMTP API route)
- **Language:** TypeScript 5 (Strict mode)

---

## 2. Directory Structure

```
portfolio/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.ts         # POST API route handling contact form emails via Nodemailer
│   ├── globals.css              # Global styles, dark theme variables, Tailwind v4 imports
│   ├── layout.tsx               # Root layout: Inter font, SEO/OpenGraph metadata, Header & Footer
│   └── page.tsx                 # Main landing page combining Hero, Portfolio, AboutMe, & Contact
├── components/
│   ├── Header.tsx               # Sticky navbar with logo, Call/WhatsApp CTA, & mobile menu
│   ├── Hero.tsx                 # Hero section: profile photo, animated headlines, quick bio, CTA
│   ├── Portfolio.tsx            # Embedded YouTube video gallery (Shorts 9:16 & Long-form 16:9)
│   ├── AboutMe.tsx              # Skills progress circles, software tools, bio, stats, resume & experience
│   ├── Services.tsx             # Service packages, pricing cards, and custom project CTAs
│   ├── Contact.tsx              # Contact details (Address, Email, Phone), socials & form wrapper
│   ├── ContactForm.tsx          # Client-side contact form with validation and API submission
│   └── Footer.tsx               # Minimal footer with copyright & branding
├── public/                      # Static assets: profile pictures, software icons, gear, Resume.pdf
├── AGENTS.md                    # Agent instructions, architecture, and coding guidelines
├── package.json                 # Dependencies and npm run scripts
├── tsconfig.json                # TypeScript configuration with `@/*` path alias
└── next.config.ts               # Next.js configuration
```

---

## 3. Brand & Design System

- **Color Palette:**
  - **Background:** Deep dark neutral (`#0a0a0a` / `bg-neutral-950` / `bg-black`)
  - **Foreground / Text:** Pure light text (`#ededed` / `text-neutral-100` / `text-gray-300`)
  - **Primary Accent:** Vibrant Yellow (`#facc15` / `text-yellow-500` / `border-yellow-500` / `bg-yellow-500`)
  - **Secondary Accents:** Green for WhatsApp / availability indicators (`text-green-500`, `bg-green-500`)
  - **Muted Elements:** `text-neutral-400`, `text-zinc-500`, `border-white/10`
- **Typography:**
  - Font: `Inter` (Google Fonts, loaded via `next/font/google` with CSS variable `--font-inter-sans`)
  - Headings: Bold/Extra-bold uppercase tracking headers with subtle oversized background watermark text (e.g. `RESUME`, `WORKS`, `CONTACT`)
- **Animation Principles:**
  - Utilize `motion/react` for entry transitions (`initial`, `animate`, `whileInView`, `viewport={{ once: true }}`).
  - Smooth stagger effects on grid items, cards, and skill meters.
  - Interactive hover animations with subtle scale and spring physics.

---

## 4. Key Components & Features

1. **Header (`components/Header.tsx`)**:
   - Sticky top navigation with backdrop blur and responsive mobile drawer toggle.
   - Quick direct action buttons: Phone call (`tel:`) and WhatsApp direct message link.

2. **Hero (`components/Hero.tsx`)**:
   - Animated portrait display with subtle floating effect.
   - Punchy role designations: `VIDEO EDITOR`, `CONTENT STRATEGIST`, `CONSULTANT`.
   - Smooth scroll trigger pointing to the portfolio section.

3. **Portfolio (`components/Portfolio.tsx`)**:
   - Responsive grid for YouTube Shorts (aspect ratio `9/16`).
   - Grid for Long-form YouTube videos (aspect ratio `16/9`).
   - Hover scaling and yellow glow highlight effects.

4. **About Me & Skills (`components/AboutMe.tsx`)**:
   - Animated SVG circular progress rings showing proficiency percentages.
   - Software tool grid displaying Adobe Premiere Pro, After Effects, DaVinci Resolve, Photoshop, Audition.
   - Downloadable CV action linking to `/Resume.pdf`.
   - Experience timeline showing roles at Imborn Digital, YouTube, Freelance, and AZ The Learning App.

5. **Contact & Form (`components/Contact.tsx` & `components/ContactForm.tsx`)**:
   - Direct contact info: Phone, Email (`mail@swapkam.com`), Address.
   - Social links: YouTube (`@swapkam`), LinkedIn, Twitter, Facebook.
   - Asynchronous form submission to `/api/contact` with loading, success, and error feedback states.

---

## 5. Development & Contribution Guidelines

### Commands
- **Development Server:** `npm run dev` (starts server on `http://localhost:3000`)
- **Production Build:** `npm run build`
- **Production Start:** `npm run start`
- **Lint Check:** `npm run lint`

### Environment Variables
Create a `.env.local` file for email dispatch functionality:
```env
GMAIL_USER=your-email@gmail.com
GMAIL_PASS=your-gmail-app-password
CONTACT_EMAIL=mail@swapkam.com # Optional, defaults to GMAIL_USER
```

### Coding Standards for Agents
1. **Imports from Motion**: Always import from `"motion/react"`, NOT `"framer-motion"`.
2. **Client vs Server Components**:
   - Use `"use client";` at the top of components utilizing React hooks (`useState`, `useRef`), event handlers, or Motion components.
   - Keep page metadata in server-side layouts or dedicated metadata exports.
3. **Asset Handling**: Place public images, icons, and PDF resumes inside `/public` and reference them with absolute URLs (e.g., `/profile.png`, `/Resume.pdf`).
4. **Tailwind CSS v4**: Follow Tailwind v4 guidelines; avoid deprecated utility classes.
5. **Type Safety**: Maintain explicit typing for component props, API request bodies, and dataset arrays.
