# Portfolio Website — Guiding Notes

## Vision
A creative, visually distinctive engineering portfolio that showcases
multi-discipline work (embedded, software, hardware, mechanical) with a
strong personal brand. The site should feel like an engineer's workshop
— detailed, hands-on, and original — not a template.

---

## Tech Stack
| Layer       | Choice               | Rationale                                              |
|-------------|----------------------|--------------------------------------------------------|
| Markup      | HTML + CSS + vanilla JS | No framework overhead; full creative control         |
| Hosting     | Cloudflare Pages     | Free tier, Git-based auto-deploy, custom domain + HTTPS out of the box |
| Repo        | GitHub (public or private) | Cloudflare Pages connects directly for CI/CD    |
| Domain      | TBD                  | Cloudflare can register or proxy an external domain    |

### Why Cloudflare Pages over Workers
- Static HTML is all that's needed for a portfolio with no login/database.
- Pages gives automatic builds on push, preview deploys per branch, and
  global CDN — no serverless plumbing required.
- If dynamic features are added later (contact form, analytics API),
  Cloudflare Pages Functions (built on Workers) can be added alongside
  the static site without migrating.

---

## Site Structure

### 1. Landing / Home
- First impression — bold, creative hero section.
- Brief tagline or one-liner that frames the multi-discipline identity.
- Visual navigation hints to the three main sections below.

### 2. About / Bio
- Background, education, professional summary.
- Skills / competency areas (embedded, software, hardware, etc.)
  presented visually rather than as a plain list.
- Photo or illustrated avatar.

### 3. Projects Gallery
- Filterable or categorised grid of project cards.
- Each card: title, thumbnail/hero image, short description, tags
  (discipline, tools, year).
- Click-through to a dedicated project page with:
  - Problem statement / motivation
  - Approach and technical detail (diagrams, code snippets, photos)
  - Outcome / results
  - Links to repos, demos, or documentation

### 4. Resume / CV
- Clean, readable layout matching the site's visual identity.
- Downloadable PDF version (same design language).
- Sections: experience, education, certifications, publications (if any).

---

## Design Direction

### Creative / Unique — What That Means Here
- **Not** a stock Bootstrap or Tailwind template with swapped colours.
- Custom layout patterns: asymmetric grids, layered sections, scroll-
  driven reveals, or interactive micro-elements.
- A cohesive colour palette and typography that feel intentional and
  personal — not generic "dark mode tech."
- Illustrations, icons, or motifs tied to engineering disciplines
  (circuit traces, cross-sections, waveforms, mechanical linkages).
- Motion used purposefully: page transitions, hover states, scroll
  effects — but not at the expense of performance or accessibility.

### Design Decisions Still to Make
- [ ] Colour palette (dark vs. light default? accent colours?)
- [ ] Typography (serif, sans-serif, monospace mix?)
- [ ] Navigation style (sidebar, top bar, hamburger, something unusual?)
- [ ] Single page (scrolling) vs. multi-page?
- [ ] Project page template layout
- [ ] Any interactive/3D elements? (e.g., Three.js hero, SVG animations)

---

## Content Checklist
- [ ] Write bio / about text
- [ ] Select and document 4–8 portfolio projects
- [ ] Gather project images, diagrams, screenshots
- [ ] Prepare resume content and PDF export
- [ ] Write project descriptions (problem, approach, result)
- [ ] Decide on a domain name

---

## Development Phases

### Phase 1 — Foundation
- Set up project repo with folder structure.
- Build the HTML skeleton and global CSS (reset, variables, typography).
- Implement responsive layout scaffolding.

### Phase 2 — Core Pages
- Landing page with hero.
- About section.
- Projects gallery (hardcoded with placeholder content initially).
- Resume page.

### Phase 3 — Creative Polish
- Custom animations and transitions.
- Interactive elements or illustrations.
- Dark/light mode toggle (if desired).
- Responsive fine-tuning and cross-browser testing.

### Phase 4 — Content & Launch
- Replace placeholders with real project content.
- SEO basics (meta tags, Open Graph, structured data).
- Deploy to Cloudflare Pages.
- Connect custom domain.

---

## Constraints & Principles
- **Performance first**: no heavy frameworks; aim for <1s first paint.
- **Accessible**: semantic HTML, sufficient contrast, keyboard navigable.
- **Progressive**: works without JS (content still readable); JS enhances.
- **Maintainable**: adding a new project should be straightforward
  (consider a simple JSON/data-driven approach for the gallery).
- **Self-contained**: no external CDN dependencies at build time;
  everything vendored or inline for reliability.
