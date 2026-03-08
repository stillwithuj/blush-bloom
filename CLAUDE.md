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
  index.css                — Tailwind import only (@import "tailwindcss")
  components/
    Navbar.jsx             — DONE: floating glass/water effect, rounded, scroll-aware
    HeroSection.jsx        — DONE: 9-image slideshow, elegant heading, palette text
    Features.jsx           — STUB (id="services")
    AboutUs.jsx            — STUB (id="about")
    Testimonials.jsx       — STUB (id="testimonials")
    Pricing.jsx            — STUB (id="pricing")
  imgs/
    her01.jpg, hero02–05.jpg, hero6.jpg, hero7.jpg, hero08–09.jpg
```

---

## Component Notes

### App.jsx
- Background: `bg-[#ffc8dd]`
- Tracks `scrolled` state (true when `window.scrollY > 50`), passes to `<Navbar>`

### Navbar.jsx
- Floating pill shape: `rounded-2xl`, `fixed top-4`, centered with `max-w-5xl`
- Glass effect: `backdrop-blur-2xl`, `bg-white/20`, `border border-white/30`
- Water blobs: 5 pulsing rounded divs using `#cdb4db`, `#bde0fe`, `#a2d2ff`
- On scroll: `bg-white/15 backdrop-blur-3xl opacity-90`
- Links: Home, Services, About, Gallery, Pricing, Contact
- CTA button: "Book Now" → `#contact`
- Mobile hamburger menu included

### HeroSection.jsx
- `id="home"` — linked from Navbar "Home"
- 9 images auto-crossfade every 5s (600ms fade transition)
- Left overlay: `from-white/85 via-white/50 to-transparent`
- Heading: Cormorant Garamond, `text-[#6b4c7a]`
- Paragraph: Lato light, `text-[#7a5c8a]/85`
- Dot indicators at bottom to manually switch slides
- Image filenames: `her01.jpg` (note: missing 'o'), `hero6.jpg` / `hero7.jpg` (note: no leading zero)

---

## Git History
| Hash | Branch | Message |
|------|--------|---------|
| `04be947` | main / herossection | feat: set up project foundation and build Navbar + HeroSection |
| `67d4392` | main | Remove: initial boilerplate code from App component |
| `82bd056` | main | Initial commit: Blush Bloom project setup |

## Branches
| Branch | Status | Purpose |
|--------|--------|---------|
| `main` | active | stable base |
| `herossection` | pushed | Navbar + HeroSection work |

---

## Sections Still To Build
- [ ] Features / Services (`id="services"`)
- [ ] About Us (`id="about"`)
- [ ] Gallery (`id="gallery"`) — no component yet
- [ ] Testimonials (`id="testimonials"`)
- [ ] Pricing (`id="pricing"`)
- [ ] Contact (`id="contact"`) — no component yet

---

## Last Updated
- **Date:** 2026-03-08
- **Commit:** `04be947`
- **Message:** feat: set up project foundation and build Navbar + HeroSection
