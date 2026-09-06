# 02 — Product System

Movements, terpenes, packaging, and SKU architecture for TUNED.

---

## 1. Core dose architecture

| Attribute | Spec |
| --- | --- |
| Active | Delta-9 THC |
| Per mint | **1mg** |
| Count per box | **20 mints** |
| Total per box | **20mg** |
| Format | Dissolvable mint |
| Primary pack | White rigid slide matchbox |
| Finish | Debossed musical staff + foil |

Every single-movement SKU shares this architecture. Differentiation is **tempo / color / motif / flavor / terpenes**—not dose.

---

## 2. Movement catalog

### No. 01 — ALLEGRO

| Field | Value |
| --- | --- |
| Intent | Uplift / Focus |
| Color | Emerald |
| Hex | `#1F6B4A` |
| Motif | Rising staccato |
| Flavor | Lemon-Lime Zest |
| Terpenes | Limonene + α-Pinene |
| Terpene note | Bright citrus lift with crisp conifer clarity |
| Audio cue | Short ascending staccato tones |
| Reference freq (UI) | ~523 Hz (C5 region) |
| Image | `/products/allegro.jpg` |

**Positioning line:** A rising phrase for clear mornings and intentional starts.

---

### No. 02 — ANDANTE

| Field | Value |
| --- | --- |
| Intent | Flow / Social |
| Color | Warm Gold |
| Hex | `#C4A35A` |
| Motif | Arched wave |
| Flavor | Sweet Peppermint |
| Terpenes | β-Caryophyllene + Limonene |
| Terpene note | Warm spice-sweet balance with soft citrus edge |
| Audio cue | Smooth mid-tempo wave tones |
| Reference freq (UI) | ~392 Hz (G4 region) |
| Image | `/products/andante.jpg` |

**Positioning line:** A measured pace for conversation and ease.

---

### No. 03 — ADAGIO

| Field | Value |
| --- | --- |
| Intent | Rest / Grounding |
| Color | Midnight Navy |
| Hex | `#1B2A4A` |
| Motif | Descending fermata |
| Flavor | Lavender Wintergreen |
| Terpenes | Linalool + Myrcene |
| Terpene note | Soft floral calm with deep herbal settle |
| Audio cue | Soft descending fermata tones |
| Reference freq (UI) | ~294 Hz (D4 region) |
| Image | `/products/adagio.jpg` |

**Positioning line:** A descending close for evenings and recovery.

---

## 3. Terpene system (non-medical)

Terpenes are framed as **aromatic and flavor character** only.

| Movement | Primary | Secondary | Sensory role |
| --- | --- | --- | --- |
| Allegro | Limonene | α-Pinene | Citrus brightness + crisp edge |
| Andante | β-Caryophyllene | Limonene | Warm depth + lift |
| Adagio | Linalool | Myrcene | Floral soft + herbal depth |

**Compliance note:** Do not attribute disease treatment, sleep cures, anxiety relief, or clinical outcomes to terpenes in consumer copy.

---

## 4. Bundle — The Trio

| Field | Value |
| --- | --- |
| Contents | Allegro + Andante + Adagio (one box each) |
| Mints | 60 |
| Total Δ9 | 60mg |
| Image | `/products/trio.jpg` |
| Story | The full score—three tempos, one collection |

---

## 5. Packaging hierarchy

### Physical

1. **Outer:** White rigid slide matchbox  
2. **Deboss:** Musical staff (blind or subtle tone-on-tone)  
3. **Foil:** Movement accent (emerald / gold / navy foil as applicable)  
4. **Side / end panels:** Brand mark, No. 0X, movement name, dose lockup  
5. **Interior:** Mint tray / blister as manufactured; keep visual calm  

### On-pack information priority

See also `04-site-ia-copy.md` compliance packaging hierarchy. Summary:

1. Brand + movement identity  
2. Dose lockup (1mg · 20ct · 20mg)  
3. Mandatory warnings / age / jurisdiction marks  
4. Ingredients / cannabinoid panel  
5. Batch / lot / contact  

---

## 6. SKU codes (suggested)

| SKU | Code |
| --- | --- |
| Allegro single | `TUN-01-ALG-20` |
| Andante single | `TUN-02-AND-20` |
| Adagio single | `TUN-03-ADA-20` |
| Trio bundle | `TUN-TRIO-60` |

---

## 7. Cross-attribute matrix

| | Allegro | Andante | Adagio |
| --- | --- | --- | --- |
| Tempo feel | Fast / rising | Walking / social | Slow / held |
| Daypart cue* | Morning / start | Midday / evening social | Night / close |
| Color | Emerald | Gold | Navy |
| Motif | Staccato rise | Arched wave | Fermata descend |
| Flavor family | Citrus | Mint-sweet | Floral-mint |

\*Daypart is narrative cue only—not a dosing instruction.

---

## 8. Product photography standards

- Assets live in `public/products/` as `.jpg`
- Prefer natural paper/ink backdrop continuity with site `#FAFAF8`
- Show slide matchbox as EDC object (hand scale optional in future shoots)
- Trio shot: three movements readable; foil/deboss catch light

---

*Companion: 03 Experience & Audio · 05 Visual Identity*
