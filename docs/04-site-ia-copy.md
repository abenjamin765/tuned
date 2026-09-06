# 04 — Site IA, Wireframes & Copy Deck

Information architecture, compliance packaging hierarchy, wireframes, and full homepage copy.

---

## 1. Site map

```
/                       Homepage
/movements              Movement index
/movements/[slug]       allegro | andante | adagio
/the-science            1mg + terpene framing
/bundle-trio            Trio bundle
/faq                    Full FAQ
/legal/age-gate         Age gate policy
/legal/privacy          Privacy
/legal/terms            Terms
```

Global chrome: Header (nav + Shop Trio) · Footer (explore + legal + responsibility) · AgeGate overlay (21+, localStorage).

---

## 2. Navigation

| Label | Href |
| --- | --- |
| Movements | `/movements` |
| The Science | `/the-science` |
| The Trio | `/bundle-trio` |
| FAQ | `/faq` |
| Shop Trio (CTA) | `/bundle-trio` |

---

## 3. Compliance packaging hierarchy

Apply this order on **physical pack**, **PDP**, and **ads**.

### Tier A — Always visible near identity

1. Brand mark: **TUNED**  
2. Movement lockup: **No. 0X · NAME**  
3. Dose lockup: **1mg Delta-9 THC per mint · 20 mints · 20mg total**  
4. Age: **21+**

### Tier B — Mandatory / regulatory (jurisdiction-specific)

5. Government warning statements as required  
6. Cannabinoid panel / net content  
7. “Not intended to diagnose, treat, cure, or prevent any disease” (or local equivalent)  
8. Intoxicating product / keep away from children statements as required  
9. Manufacturer / distributor / contact  
10. Batch / lot / manufacture or expiry as required  

### Tier C — Supporting

11. Flavor name  
12. Terpene names (aromatic framing only)  
13. Motif / color name  
14. NFC / URL cue  
15. QR to science or legal  

### Hierarchy rules

- Tier A must not be out-shouted by lifestyle graphics.  
- Tier B type size/contrast must meet local rules; never hide in foil glare.  
- Marketing claims never outrank dose + warning.  
- No medical claims in any tier.

---

## 4. Wireframes (low-fidelity)

### Homepage

```
[ AgeGate modal if unverified ]
[ Header ]
[ Hero: eyebrow · H1 tagline · sub · CTAs · 1mg/20/3 stats ]
[ Movements: 3 cards (image · No · name · intent · blurb) ]
[ Science: copy + dose fact panel ]
[ Trio: dark band · image · bundle facts · CTA ]
[ FAQ: 4 accordion items · link to full FAQ ]
[ Footer ]
```

### Movement PDP

```
[ Back link ]
[ Image | No · Name · Intent · long copy ]
[ Meta grid: color · motif · flavor · terpenes ]
[ Audio preview button ]
[ CTAs: Trio · Science ]
```

### Age gate

```
[ Dimmed backdrop ]
[ Card: title 21+? · disclosure · Yes / No · policy link ]
```

---

## 5. Full homepage copy deck

### Hero

| Element | Copy |
| --- | --- |
| Eyebrow | Delta-9 · 1mg · Precise |
| H1 | Microdose in Key. |
| Sub | Premium music-themed microdose mints. One milligram. Twenty notes per box. Composed for intentional days—never excess. |
| CTA primary | Explore movements |
| CTA secondary | The Trio |
| Stat 1 | 1mg — THC per mint |
| Stat 2 | 20 — mints / 20mg per box |
| Stat 3 | 3 — movements · tempos |

### Movements section

| Element | Copy |
| --- | --- |
| Eyebrow | The score |
| H2 | Three movements |
| Intro | Each box is a tempo: rising focus, social flow, or evening rest. Same dose. Distinct composition. |
| Allegro card | A rising phrase for clear mornings and intentional starts. Bright, precise, composed. |
| Andante card | A measured pace for conversation and ease. Warm, social, unhurried. |
| Adagio card | A descending close for evenings and recovery. Quiet, grounded, held. |
| Footer CTA | View all movements |

### 1mg Science section

| Element | Copy |
| --- | --- |
| Eyebrow | 1mg science |
| H2 | Precision over volume |
| Body | TUNED is built around a single idea: a consistent one-milligram Delta-9 THC microdose, delivered as a mint. No guesswork. No improvisation with the amount. Terpene pairings shape the aromatic and experiential character of each movement—without medical claims. |
| Bullets | Measured 1mg Delta-9 THC per mint · Movement-specific terpene profiles · Dissolvable format—pocketable, discreet, intentional |
| CTA | Read the science |
| Panel | Per mint 1mg Δ9-THC · Per box 20 × 1mg (20mg total) · Format Dissolvable mint · white rigid slide matchbox |

### Trio Bundle section

| Element | Copy |
| --- | --- |
| Eyebrow | Bundle |
| H2 | The Trio |
| Sub | All three movements. One box. |
| Body | ALLEGRO, ANDANTE, and ADAGIO—the full score in a single collection. Three tempos. Three intents. Sixty precise milligrams across sixty mints. |
| CTA | Explore the Trio |

### FAQ (homepage subset)

Use first four items from site FAQ; full list on `/faq`.

1. What is a TUNED mint?  
2. What does “Microdose in Key” mean?  
3. How are the three movements different?  
4. Are there medical claims?  

*(Answers live in `src/lib/products.ts` and `/faq`.)*

### Global responsibility line (footer)

> For adults 21+. Contains Delta-9 THC. Not intended to diagnose, treat, cure, or prevent any disease. Please consume responsibly and comply with local laws.

---

## 6. Page-level SEO titles (implemented)

| Route | Title |
| --- | --- |
| `/` | TUNED — Microdose in Key. |
| `/movements` | Movements · TUNED |
| `/movements/allegro` | No. 01 ALLEGRO · TUNED |
| `/the-science` | The Science · TUNED |
| `/bundle-trio` | The Trio · TUNED |
| `/faq` | FAQ · TUNED |

---

## 7. Age gate copy

| Element | Copy |
| --- | --- |
| Eyebrow | Age verification |
| Title | Are you 21 or older? |
| Body | TUNED products contain Delta-9 THC and are intended for adults 21+. By entering, you confirm you meet the legal age in your jurisdiction and will use this site responsibly. |
| Confirm | Yes, enter |
| Decline | No, exit |
| Storage | `localStorage['tuned-age-verified'] = 'true'` |

---

*Companion: 01 Brand Foundations · 05 Visual Identity*
