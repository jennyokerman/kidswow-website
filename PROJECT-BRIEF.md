# KidsWow Website — Project Brief

Original build spec from the initial project conversation. Use this as the north star for design, structure, and content decisions.

**Site:** [kidswow.com](https://kidswow.com)  
**Founder:** Warren Okerman

---

## Tech stack

- Next.js (App Router)
- Tailwind CSS
- Responsive design

---

## Design direction

- Modern emotionally-driven education nonprofit landing page
- Warm minimal aesthetic
- Large typography
- Storytelling section flow (scroll layout)
- Rounded cards, rounded inputs and buttons
- Large whitespace, calm spacious layout
- Clean whitespace hierarchy
- Soft neutral background
- Modern nonprofit / SaaS hybrid
- Friendly, warm, minimal, curiosity, optimism, intelligence, accessibility — **non-corporate**
- Centered content with max-width containers
- Alternating text/image layouts (picture or video left or right per section)

---

## Color palette

| Token    | Hex       | Use                                              |
|----------|-----------|--------------------------------------------------|
| Navy     | `#243B53` | Headers, navigation, footer, dark text, key elements |
| Sky      | `#5DA9C6` | Links, accents, icons, highlights, illustrations |
| Sage     | `#7A8B5A` | Secondary accents, cards, sections, subtle backgrounds |
| Amber    | `#E9B44C` | Buttons, CTAs, highlights, hover states, emphasis |
| Cream    | `#FAF7F2` | Backgrounds, sections, cards, light surfaces     |
| Charcoal | `#2D2D2D` | Body text, readability                           |

---

## Mission statement

> Inspiring kids to love learning and develop competence in marketable skills.

---

## Site map

| Page                 | URL                          |
|----------------------|------------------------------|
| Home                 | `/`                          |
| KidsWow STEM         | `/programs/stem`             |
| Physics & Creation   | `/programs/physics-creation` |
| Finance Foundations  | `/programs/finance`          |
| KidsWow Method       | `/about/method`              |
| The KidsWow Story    | `/about/story`               |
| KidsWow English      | `/resources/english`         |
| Contact              | `/contact`                   |

---

## Navigation (sticky header)

- **Left:** KidsWow logo/name → links to `/`
- **Right:** Home, Programs ▾, About ▾, Resources ▾, Contact
- **Contact button:** Same baseline as other nav items, but with an **amber pill/oval** background (visually similar to section CTAs, **separate size token** — nav stays compact, page CTAs stay larger)
- **Desktop dropdowns:** Each menu item links to its own page (not home anchors only)
- **Mobile:** Hamburger menu with grouped links

### Dropdown items

**Programs**
- KidsWow STEM
- Physics & Creation
- Finance Foundations

**About**
- KidsWow Method
- The KidsWow Story

**Resources**
- KidsWow English

---

## Home page sections (scroll order)

1. Hero  
2. Programs (STEM, Physics & Creation, Finance Foundations)  
3. KidsWow Method  
4. Benefits  
5. Success Stories  
6. CTA  
7. Who We Are  
8. Footer (site-wide, not a scroll “story” block)

---

## Footer

- KidsWow name + mission statement
- Navigation link groups: Programs, About, Resources
- Contact encouragement (KC schools, homeschool programs, churches)
- Contact link (email not exposed on page — use contact form)

---

## Button / CTA conventions

- Shared style: pill shape (`rounded-full`), amber fill, navy/charcoal text
- **Two size tokens** (not tied in code):
  - `nav` — compact, fits sticky header
  - `lg` / section — larger hero and CTA band buttons

---

## Build approach (agreed)

- Build **page by page** as content is provided
- Placeholder inner pages: page title + “Content coming soon” until real copy arrives
- Home can be filled in section by section

---

## Content workflow

Send per page when ready:

- Headlines and body copy  
- Button labels and destinations  
- Images/videos + alt text  
- Any required lines (mission, founder attribution, KC audience notes)

Rough draft copy is fine; refine later without changing layout.

---

## Notes & decisions made during build

- Page-by-page content delivery is the default workflow
- Contact form: 3-step inquiry form, emails via Resend (server-side only)
- Global readability: `html { font-size: 80%; }` in `globals.css` for comfortable reading at 100% browser zoom
- Navy palette in Tailwind may differ slightly from original spec (`#3D5F7C` vs `#243B53`) — check `tailwind.config.ts` for current tokens

---

*Last updated from original project conversation, June 2026.*
