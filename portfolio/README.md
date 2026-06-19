# Sakthivel S — Portfolio

A premium, dark-themed full-stack portfolio built with Next.js, Tailwind CSS, and Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build for production

```bash
npm run build
npm run start
```

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. Go to vercel.com → **Add New Project** → import the repo.
3. Vercel auto-detects Next.js — no configuration needed. Click **Deploy**.

Every push to your main branch will auto-redeploy.

## Editing content

Everything text-based (name, bio, skills, projects, experience, achievements, contact info) lives in one file:

```
data/content.js
```

Edit that file and the whole site updates — no need to touch components for routine content changes.

## Editing the photo

Replace `public/images/sakthivel-portrait.jpg` with a new image (same filename), ideally a portrait-oriented (4:5 ratio) photo, then rebuild.

## Notes

- **Resume button**: currently links to your email (`mailto:`). Swap `personal.resumeLink` in `data/content.js` to a hosted PDF URL or your LinkedIn once you have one ready.
- **Contact form**: submitting opens the visitor's email client with a pre-filled message (no backend required). To get true in-page submission with a dashboard of replies, connect a service like Formspree or EmailJS and swap the `handleSubmit` function in `components/Contact.jsx`.
- **Blog section**: currently a "Coming Soon" placeholder. When ready for real posts, this is the natural place to add MDX-based blog routes.
- **Dark/Light toggle**: persists via `localStorage`, defaults to dark on first visit.
