# Vyoma Learning Systems — Website Redesign Complete

## Overview

The Vyoma Learning Systems website has been completely rebuilt with a professional, institutional design system that prioritizes text-first content, academic credibility, and long-term trust over trendy startup aesthetics.

---

## What Changed

### Design Philosophy
- **From**: Bright SaaS marketing site with gradients, glassmorphism, and vibrant colors
- **To**: Professional education platform with muted colors, text-first layout, and institutional tone

### Visual System
**Color Palette (Locked)**
```css
--color-bg-primary: #0F172A     /* Main background */
--color-bg-section: #111827    /* Section background */
--color-bg-surface: #1F2937    /* Cards / panels */
--color-text-primary: #E5E7EB  /* Primary text */
--color-text-secondary: #9CA3AF /* Secondary text */
--color-border-subtle: #2D3748  /* Borders */
--color-accent-muted: #6B7280   /* Accent (minimal use) */
```

**Typography**
- Font: Inter (sans-serif fallbacks)
- H1: 38px / 600 weight
- H2: 30px / 600 weight
- H3: 22px / 500 weight
- Body: 16px / 400 weight

**No gradients, no glows, no bright colors, no decorative images.**

---

## Technical Stack

### Core Technologies
- **React.js** 19.2.3 (functional components)
- **TypeScript** 5.8.2
- **Vite** 6.2.0 (build tool)
- **Tailwind CSS** 4.1.18 (custom theme via CSS variables)
- **React Router DOM** 7.11.0 (HashRouter)
- **GSAP** 3.14.2 (subtle scroll animations only)
- **Framer Motion** 12.23.26 (minimal usage)
- **Lucide React** 0.562.0 (icons)

### Configuration Files
- `tailwind.config.js` — Tailwind v4 configuration
- `postcss.config.js` — PostCSS with @tailwindcss/postcss
- `styles.css` — Custom CSS variables and utilities
- `tsconfig.json` — TypeScript configuration
- `vite.config.ts` — Vite build configuration

---

## File Structure

```
vyoma-learning-systems/
├── public/
│   ├── vyoma-logo.png          # Company logo
│   ├── CURIO TRANSPARENT.png    # Curio product logo
│   ├── founder.png              # Founder photo
│   └── founder.jpg              # (backup)
├── components/
│   ├── Navbar.tsx               # Fixed navigation (dark, text links)
│   ├── Footer.tsx               # Simple footer (contact info, nav links)
│   ├── SectionWrapper.tsx       # Consistent section container
│   └── ScrollReveal.tsx         # GSAP scroll animation wrapper
├── pages/
│   ├── Home.tsx                 # Landing page (text-led hero, ecosystem, Curio, leadership, FAQ)
│   ├── About.tsx                # Company mission, approach, values
│   ├── Ecosystem.tsx            # Nova, Curio, Vibe product details
│   ├── Curio.tsx                # Curio platform deep-dive
│   ├── Careers.tsx              # Job listings (institutional tone)
│   └── Contact.tsx              # Contact information (no form, just details)
├── App.tsx                      # Main app routing
├── index.tsx                    # Entry point
├── styles.css                   # Global styles + CSS variables
├── package.json                 # Dependencies
├── DESIGN_RATIONALE.md          # Full design philosophy doc
└── README_REDESIGN.md           # This file
```

---

## Pages Overview

### Home (`/`)
- Text-only hero section (no image)
- "What We Do" explanation
- Ecosystem structure (Nova, Curio, Vibe)
- Curio spotlight (text-first, two-column)
- Leadership section (founder photo + philosophy)
- "How Vyoma Works" process
- FAQs
- Contact CTA

### About (`/about`)
- Company mission
- What we build
- Approach (visualization-first, structured practice, continuous assessment, industry integration)
- Organizational values
- CTAs to contact and careers

### Ecosystem (`/ecosystem`)
- Nova (Grades 9–10) — Under Development
- Curio (Class 11–12) — LIVE
- Vibe (Skills & Industry) — In Development
- How products integrate
- Institutional access CTA

### Curio (`/curio`)
- Platform overview
- Core features (3D models, AI doubt engine, performance analytics, practice systems)
- Curriculum coverage (Physics, Chemistry, Biology)
- Who should use Curio
- Access links

### Careers (`/careers`)
- Who we hire
- Current openings (Senior SWE, 3D Content Developer, Data Scientist, Frontend Engineer)
- Application process
- CTA for unlisted roles

### Contact (`/contact`)
- Office address
- Phone, email
- Inquiry types (institutional partnerships, student access, careers)
- Business hours

---

## Image Policy (STRICT)

### Allowed Images ONLY
1. `/vyoma-logo.png` — Company logo
2. `/CURIO TRANSPARENT.png` — Curio logo
3. `/founder.png` — Jesa Kodiyater (CEO & Founder)

### Forbidden
- Stock photos
- Abstract visuals
- Decorative hero images
- Product mockups
- Illustration libraries
- AI-generated imagery

**Rationale**: If an image doesn't communicate information, it's removed. This is a text-first design.

---

## Animation Philosophy

### Allowed
- **Fade-in on scroll** (GSAP ScrollTrigger)
- **Small translateY** (2–4px max)
- **Duration**: 0.6–0.8 seconds
- **Easing**: ease-out

### Forbidden
- Scale transforms
- Bounce effects
- Float/hover animations
- Rotate transitions
- Glow or pulse effects
- Parallax scrolling

**Rule**: Animations must be invisible. They enhance readability, not showmanship.

---

## Content Tone

### Do Use
- Direct, factual statements
- Academic terminology
- Process-oriented descriptions
- Institutional framing

### Do Not Use
- Marketing hype ("revolutionize", "disrupt")
- Emotional claims ("students love us")
- Exaggerated benefits
- Vague adjectives ("amazing", "innovative")

---

## Running the Project

### Development
```bash
bun install
bun run dev
```
Server runs at `http://localhost:3000` (or 3001 if 3000 is occupied)

### Production Build
```bash
bun run build
bun run preview
```

### Key Scripts
- `bun run dev` — Start development server
- `bun run build` — Build for production
- `bun run preview` — Preview production build

---

## Accessibility & Responsiveness

### Accessibility
- Semantic HTML throughout
- Focus states on all interactive elements
- Sufficient color contrast (WCAG AA minimum)
- Keyboard navigation support
- Alt text on images

### Responsiveness
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Touch-friendly targets (min 44x44px)
- Readable text at all screen sizes

---

## Design Success Metrics

### Goals
✅ Visitors perceive Vyoma as credible and established  
✅ Content is prioritized over decoration  
✅ Design does not distract from information  
✅ Site feels appropriate for institutional partnerships

### Failure Indicators
❌ Design feels "trendy" or "startup-like"  
❌ Users comment on animations or visual effects  
❌ Imagery overshadows text  
❌ Color scheme is described as "vibrant" or "modern"

---

## Future Maintenance

### What to Keep
- Dark, muted color palette
- Text-first layout
- Minimal imagery (only three images allowed)
- Institutional tone in all copy
- Subtle scroll animations

### What to Avoid
- Bright colors or gradients
- Decorative imagery
- Marketing hype language
- Over-animations
- Startup aesthetics

---

## Deployment Notes

### Environment Variables
None currently required. All configuration is in source files.

### Build Output
Static files in `dist/` directory after `bun run build`.

### Hosting Recommendations
- Vercel
- Netlify
- GitHub Pages
- Any static host

### GitHub Repository
- Already initialized with single commit
- Remote: https://github.com/ArmanAmreliya/Vyoma-Learning-Stystem

---

## Contact & Support

**Vyoma Learning Systems Pvt. Ltd.**  
i-Hub, KCG Campus  
University Area  
Ahmedabad – 380015, India

Phone: +91 8780375687  
Email: contact@vyoma.in

---

## Version History

**v2.0.0** — January 7, 2026  
Complete institutional redesign. Professional, text-first layout with dark, muted colors. No startup aesthetics.

**v1.0.0** — Previous version  
Original bright, SaaS-style design (deprecated).

---

## Final Notes

This redesign is not about being visually striking — it's about being appropriate.

Education is serious, long-term work. The website design reflects that philosophy: understated, informative, trustworthy, and built to last.

**No gradients. No glows. No hype. Just clarity.**

---

**End of Documentation**
