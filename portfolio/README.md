<div align="center">

# Sakthivel S — Portfolio

**Full Stack Engineer** · Java · Spring Boot · Angular · AWS

[![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=flat&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A premium, dark-themed personal portfolio with animated project case studies, a live skills dashboard, and full dark/light mode support.

[**Live Demo**](#) · [Report an Issue](https://github.com/sakthispgs/sakthi_portfolio/issues)

</div>

---

## ✨ Features

- **Animated case studies** — Projects expand inline to reveal a full Problem → Solution → Impact breakdown
- **Auto-scrolling skills marquee** + animated proficiency bars
- **Scroll-triggered reveal animations** throughout, built with Framer Motion
- **Dark / light theme toggle** with persisted preference
- **Zero-backend contact form** — opens a pre-filled email, no server required
- Fully responsive, accessible, semantic HTML

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js](https://nextjs.org/) (App Router) |
| Styling | [Tailwind CSS](https://tailwindcss.com/) |
| Animation | [Framer Motion](https://www.framer.com/motion/) |
| Icons | [Lucide React](https://lucide.dev/) |
| Deployment | [Vercel](https://vercel.com/) |

## 📁 Project Structure

```
portfolio/
├── app/              # Routes, layout, global styles
├── components/       # All UI sections (Hero, Skills, Projects, etc.)
├── data/
│   └── content.js    # All site content — edit this to update text/links
└── public/images/    # Portrait + certification badges
```

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

**Production build:**

```bash
npm run build
npm run start
```

## ☁️ Deploy to Vercel

1. Push this repo to GitHub (done ✅)
2. Go to [vercel.com](https://vercel.com) → **Add New Project** → import this repo
3. Vercel auto-detects Next.js — click **Deploy**

Every push to `main` auto-redeploys.

## ✏️ Editing Content

All text — name, bio, skills, projects, experience, achievements, contact info — lives in a single file:

```
data/content.js
```

Edit it and the whole site updates. No component changes needed for routine content edits.

## 🖼 Updating the Photo

Replace `public/images/sakthivel-portrait.jpg` with a new image of the same filename (ideally a 4:5 portrait crop), then rebuild.

## 📋 Notes

- **Resume button** currently links to email (`mailto:`). Update `personal.resumeLink` in `data/content.js` with a hosted PDF or LinkedIn URL once ready.
- **Contact form** opens the visitor's email client with a pre-filled message — no backend needed. For true in-page submission, connect [Formspree](https://formspree.io/) or [EmailJS](https://www.emailjs.com/) and update `handleSubmit` in `components/Contact.jsx`.
- **Blog section** is a "Coming Soon" placeholder — ready for MDX-based posts later.
- **Theme** persists via `localStorage`, defaults to dark on first visit.

## 📬 Connect

- Email: [sakthispgs@gmail.com](mailto:sakthispgs@gmail.com)
- GitHub: [@sakthispgs](https://github.com/sakthispgs)

---

<div align="center">
Built by Sakthivel S, in Chennai, India.
</div>
