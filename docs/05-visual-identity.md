# 05 — Visual Identity

Tokens, typography, motion, and UI rules for TUNED.

---

## 1. Aesthetic direction

**Warm editorial minimalism** with **surgical precision** and **analog audio EDC** cues.

- Paper-forward fields; ink typography  
- Generous whitespace; long horizontal rules  
- Product photography as object still-life  
- Foil/deboss referenced via color accents—not skeuomorphic chrome  
- No leaf iconography in primary lockups  

---

## 2. Color tokens

| Token | Hex | Role |
| --- | --- | --- |
| **paper** | `#FAFAF8` | Page background, cards |
| **ink** | `#1A1A1A` | Primary text, primary buttons |
| **emerald** | `#1F6B4A` | Allegro accent |
| **gold** | `#C4A35A` | Andante accent / Trio highlight |
| **navy** | `#1B2A4A` | Adagio accent / dark band depth |
| **mist** | `#E8E6E1` | Subtle section wash, image fallback |
| **muted** | `#6B6B66` | Secondary text, eyebrows |

### Usage rules

- Default surface = paper; default type = ink.  
- Movement accent color appears in eyebrow, swatch, and selective borders—not full-bleed backgrounds on marketing pages (except intentional dark Trio band using ink/navy).  
- Maintain WCAG AA for text: ink on paper; paper on ink; verify gold text carefully (prefer gold on ink, or gold as accent only).  

### CSS variables (`globals.css`)

```css
--paper: #fafaf8;
--ink: #1a1a1a;
--emerald: #1f6b4a;
--gold: #c4a35a;
--navy: #1b2a4a;
--mist: #e8e6e1;
--muted: #6b6b66;
```

### Tailwind map

`paper` · `ink` · `emerald` · `gold` · `navy` · `mist` · `muted`

---

## 3. Typography

| Role | Family | Notes |
| --- | --- | --- |
| Display | Cormorant Garamond | H1–H3; tracking slightly tight |
| Sans | DM Sans | Body, UI, nav |
| Mono | JetBrains Mono | Eyebrows, stats, dose figures |

### Type scale (guidance)

| Style | Size (approx.) | Weight |
| --- | --- | --- |
| Hero display | 48–72px | 400–500 |
| Section H2 | 36–48px | 400–500 |
| Body | 16–18px | 400 |
| Eyebrow | 12px mono, uppercase, `letter-spacing: 0.18em` | 400–500 |
| Button | 14px sans medium | 500 |

---

## 4. Layout tokens

| Token | Value |
| --- | --- |
| Shell max width | 72rem |
| Prose max | 42rem |
| Section padding | `py-20 md:py-28` · `px-6 md:px-10` |
| Card radius | `1rem` (rounded-2xl) |
| Button radius | full pill |
| Hairline | `1px` ink at 10% |

---

## 5. Motion

- Image hover: slow scale `1.03` (~700ms)  
- Age gate: backdrop blur; no bounce  
- Audio playing: small pulse dot  
- Prefer opacity/transform; avoid playful springs  
- No parallax mandatory for v1  

---

## 6. Imagery

| Asset | Path |
| --- | --- |
| Allegro | `/products/allegro.jpg` |
| Andante | `/products/andante.jpg` |
| Adagio | `/products/adagio.jpg` |
| Trio | `/products/trio.jpg` |

Crop: favor packaging readability; aspect ~4:5 for singles, 1:1 acceptable for trio hero.

---

## 7. Iconography & motifs (graphic)

When drawing motifs (pack or UI):

| Movement | Motif | Draw |
| --- | --- | --- |
| Allegro | Rising staccato | Ascending short marks / dots |
| Andante | Arched wave | Single smooth arch |
| Adagio | Descending fermata | Downward curve + hold mark |

Stroke: thin, ink or movement color; never comic bold.

---

## 8. UI components (implemented)

- `btn-primary` — ink fill, paper type  
- `btn-ghost` — hairline border  
- `eyebrow` — mono caps tracking  
- `AgeGate` — modal, localStorage  
- `AudioPreview` — soft Web Audio  

---

## 9. Do / Don’t

| Do | Don’t |
| --- | --- |
| Use paper/ink neutrality | Flood page with emerald/gold/navy |
| Let photography breathe | Over-badge cannabis leaf stickers |
| Keep dose lockup crisp | Hide 1mg in fine print on heroes |
| Pair foil mentally with gold/emerald/navy | Fake chrome gradients |
| Stay editorial | Use neon rave cannabis tropes |

---

## 10. Token checklist for new pages

- [ ] Background paper or intentional ink band  
- [ ] Display + sans + mono roles respected  
- [ ] Movement accent only as accent  
- [ ] Dose / 21+ near product claims  
- [ ] No medical claim language  
- [ ] Images from `/products/*.jpg`  

---

*End of visual identity · See Tailwind `tailwind.config.ts` for source of truth in code*
