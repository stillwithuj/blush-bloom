# Blush & Bloom — Project Reference

## Project Overview
A nail service website built with React + Vite + Tailwind CSS v4.
**GitHub:** https://github.com/stillwithuj/blush-bloom

---

## Tech Stack
- React 19 + Vite 7
- Tailwind CSS v4 (`@tailwindcss/vite` plugin — configured in `vite.config.js`)
- `lucide-react` available for icons
- Fonts: **Cormorant Garamond** (headings) + **Lato** (body) via Google Fonts in `index.html`

---

## Color Palette
| Name | Hex |
|------|-----|
| Soft Pink (page bg) | `#ffc8dd` |
| Light Pink | `#ffafcc` |
| Lavender | `#cdb4db` |
| Light Blue | `#bde0fe` |
| Sky Blue | `#a2d2ff` |
| Heading text | `#6b4c7a` |
| Paragraph text | `#7a5c8a` |
| Nav link text | `#4a3560` |

---

## Design Rules
- No emojis anywhere in the UI
- Use Tailwind classes only — no inline `style={{}}` except for `fontFamily`
- Use arbitrary value syntax for custom colors: `bg-[#ffc8dd]`, `text-[#6b4c7a]`, etc.
- Tailwind v4 uses `bg-linear-to-r` (NOT `bg-gradient-to-r`)

---

## File Structure
```
src/
  App.jsx                  — Root layout, scroll state, renders all sections
  index.css                — Tailwind import + fadeInUp keyframe + marquee keyframe
  components/
    Navbar.jsx             — DONE: floating glass/water effect, rounded, scroll-aware
    HeroSection.jsx        — DONE: 9-image slideshow, elegant heading, palette text
    Services.jsx           — DONE: 4 service cards, water-drop shapes, hover slideshows
    AboutUs.jsx            — DONE: salon images, scrolling marquee, mission + values
    Gallery.jsx            — DONE: 10-image card-stack carousel, prev/next navigation
    Contact.jsx            — DONE: booking form, business info panel, footer
    FadeInUp.jsx           — DONE: reusable IntersectionObserver scroll animation wrapper
  imgs/
    her01.jpg, hero02–05.jpg, hero6.jpg, hero7.jpg, hero08–09.jpg
    nail1–10.jpg
    salon1.jpg, salon2.jpg, salon3.jpg
    normal1–4.jpg, gel1–4.jpg, kit1–3.jpg, spa1–3.jpg
```

---

## Component Notes

### App.jsx
- Background: `bg-[#ffc8dd]`
- Tracks `scrolled` state (true when `window.scrollY > 50`), passes to `<Navbar>`
- Renders: Navbar, HeroSection, Services, AboutUs, Gallery, Contact
- Removed: Testimonials, Pricing

### Navbar.jsx
- Floating pill shape: `rounded-2xl`, `fixed top-4`, centered with `max-w-7xl`
- Glass effect: `backdrop-blur-2xl`, `bg-white/20`, `border border-white/30`
- Water blobs: 5 pulsing rounded divs using `#cdb4db`, `#bde0fe`, `#a2d2ff`
- On scroll: `bg-white/15 backdrop-blur-3xl opacity-90`
- Links: Home, Services, About, Gallery only — no Pricing or Contact links
- CTA button: "Book Now" → `#contact`
- Mobile hamburger menu included

### HeroSection.jsx
- `id="home"` — linked from Navbar "Home"
- 9 images auto-crossfade every 2s (600ms fade transition)
- Left overlay: `from-white/85 via-white/50 to-transparent`
- Heading: Cormorant Garamond, `text-[#6b4c7a]`
- Paragraph: Lato light, `text-[#7a5c8a]/85`
- Dot indicators at bottom to manually switch slides
- FadeInUp on heading and paragraph text
- Image filenames: `her01.jpg` (note: missing 'o'), `hero6.jpg` / `hero7.jpg` (note: no leading zero)

### Services.jsx
- `id="services"` — 4 service cards in alternating left/right layout
- Services: Classic Manicure (normal1–4), Gel Nails (gel1–4), Order Your Kit (kit1–3), Hand & Foot Spa (spa1–3)
- Each card image uses organic water-drop border-radius via inline style
- Hover triggers slideshow at 3s interval using setInterval + useRef
- FadeInUp on all text elements
- Renamed from Features.jsx

### AboutUs.jsx
- `id="about"` — 3 SalonDrop components showing salon1/2/3 images in water-drop shape
- Scrolling marquee (18s linear infinite) with brand keywords on `bg-[#ffafcc]/25` background
- Mission statement paragraph
- 3 value items (no background, no border — plain text only) with FadeInUp
- Water-drop shape via multi-value CSS border-radius inline style

### Gallery.jsx
- `id="gallery"` — card-stack carousel with 10 nail images
- CONFIG object maps offset (−2 to +2) to `{ x, scale, rotate, z, opacity }`
- Wrapped offset logic: `offset = ((i - active + length) % length)`, negative wrap for ±2 range
- Prev/next arrow buttons + dot indicators
- Active card has label "Nail Art 01" etc. and stronger shadow
- Glass water overlay blobs on each card

### Contact.jsx
- `id="contact"` — booking form + business info panel
- Form fields: Full Name, Email, Phone, Date, Message (optional)
- On submit: shows success state with "Appointment Requested!" + "Book Another" reset button
- Business info: Visit Us, Call Us, Email Us, Opening Hours
- Glass card styling on form: `backdrop-blur-xl bg-white/20 border border-white/40`
- Footer: `© 2026 Blush & Bloom. All rights reserved.` — `mt-6 pt-3 pb-4`
- Section padding: `pt-28 pb-0`

### FadeInUp.jsx
- Reusable wrapper component using IntersectionObserver
- Triggers `fade-in-up` animation once when element scrolls into view
- Supports `delay` prop (1–4) mapped to CSS delay utility classes
- Disconnects observer after first trigger (runs animation once only)

### index.css
- `@import "tailwindcss"`
- `@keyframes fadeInUp` — translates from `(0, 24px)` to `(0, 0)` with opacity 0→1
- `.fade-in-up-1` through `.fade-in-up-4` — delay utilities (0.1s, 0.2s, 0.3s, 0.4s)
- `@keyframes marquee` — scrolls `translateX(0)` to `translateX(-50%)`

---

## Git History
| Hash | Message |
|------|---------|
| `603f47f` | style: reduce footer height to fit content with no extra spacing |
| `e996769` | chore: remove Pricing component and clean up App imports |
| `851bfec` | feat: build AboutUs, Gallery, and Contact sections |
| `f929036` | feat: build Services section and add fade-in-up scroll animations |
| `90387fc` | style: increase navbar width and padding to align with hero section content |
| `13f24c3` | docs: add CLAUDE.md with project reference and change log |
| `04be947` | feat: set up project foundation and build Navbar + HeroSection |
| `67d4392` | Remove: initial boilerplate code from App component |
| `82bd056` | Initial commit: Blush Bloom project setup |

## Branches
| Branch | Status | Purpose |
|--------|--------|---------|
| `main` | active | stable base |
| `herossection` | active | all current work |

---

## Sections Complete
- [x] Navbar (`fixed`, glass/water effect, scroll-aware)
- [x] Hero Section (`id="home"`, 9-image crossfade)
- [x] Services (`id="services"`, 4 cards, water-drop images)
- [x] About Us (`id="about"`, salon images, marquee, values)
- [x] Gallery (`id="gallery"`, card-stack carousel)
- [x] Contact (`id="contact"`, booking form + footer)

---

## Last Updated
- **Date:** 2026-03-09
- **Commit:** `603f47f`
- **Message:** style: reduce footer height to fit content with no extra spacing
