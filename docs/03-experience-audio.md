# 03 — Experience & Audio (NFC Pairing)

Ritual, NFC destinations, and Web Audio soft-tone system for TUNED.

---

## 1. Experience principles

1. **Analog first** — The matchbox is the hero object; digital is a quiet companion.
2. **Soft, not streaming** — No copyrighted music; no full tracks; no playlist bait.
3. **Motif-true** — Each movement’s cue matches its gesture (staccato / wave / fermata).
4. **Optional** — NFC and on-site preview enhance; they never gate the product.
5. **Compliant** — NFC landing pages obey the same voice + age + claim rules as the site.

---

## 2. Ritual map

| Step | Physical | Digital (optional) |
| --- | --- | --- |
| 1 | Carry matchbox as EDC | — |
| 2 | Slide open; take one mint | — |
| 3 | Tap NFC (if present) | Soft tone preview + movement page |
| 4 | Continue the day at chosen tempo | Bookmark / Trio CTA |

Copy for ritual should stay composed—never instructional dosing schedules.

---

## 3. NFC pairing specification

### Tag behavior

| Item | Spec |
| --- | --- |
| Tag type | NFC Forum NDEF URL record (recommended) |
| Destination | HTTPS movement URL, e.g. `https://{domain}/movements/allegro` |
| Fallback | Printed short URL / QR on inner flap if needed |
| One tag per box | Encoded to that movement only |
| Trio | Prefer three tags (one per inner box) or single tag → `/bundle-trio` |

### Landing requirements

- Age gate still applies on first site visit from NFC.
- Hero content: movement name, motif, dose lockup, soft-tone control.
- No autoplay audio without user gesture (browser policy + courtesy).
- No medical claims; no external copyrighted audio embeds.

### Suggested NDEF URL patterns

```
https://{domain}/movements/allegro?src=nfc
https://{domain}/movements/andante?src=nfc
https://{domain}/movements/adagio?src=nfc
https://{domain}/bundle-trio?src=nfc
```

`src=nfc` is analytics-only; do not change content based on it in ways that bypass age gate.

---

## 4. Web Audio soft-tone system

Implemented in `src/components/AudioPreview.tsx` using the Web Audio API.

### Motifs

| Movement | Motif key | Behavior |
| --- | --- | --- |
| Allegro | `staccato` | Four short ascending sine blips |
| Andante | `wave` | Sustained sine with gentle vibrato LFO |
| Adagio | `fermata` | Triangle tone gliding downward, held decay |

### Design constraints

| Constraint | Value |
| --- | --- |
| Master gain | ~0.12 (soft) |
| Max duration | ~0.7s / 1.7s / 2.5s by motif |
| User gesture | Required to start |
| Assets | None—oscillators only |
| Copyright | Zero third-party music |

### Reference base frequencies (UI)

| Movement | Hz (approx.) |
| --- | --- |
| Allegro | 523.25 |
| Andante | 392.00 |
| Adagio | 293.66 |

Frequencies are experiential anchors, not musical claims of absolute pitch branding.

---

## 5. On-pack / on-site microcopy (audio)

**On-brand examples**
- “Preview tone — rising staccato.”
- “Soft cue. No playlist. Just the motif.”
- “Tap to hear the movement’s gesture.”

**Avoid**
- “Scan for bangers”
- Licensed song titles / artist names
- Volume or intoxication metaphors

---

## 6. Accessibility & etiquette

- Button label must describe action (`Play ALLEGRO tone`).
- Visual playing state (pulse) for users who can’t hear.
- Respect `prefers-reduced-motion` in future iterations for non-essential animation (tone may remain).
- Never surprise-play on page load.

---

## 7. Future experience backlog (out of scope for v1 site)

- Haptic pattern pairing on supported devices  
- Limited stamped score cards in Trio  
- Retail demo pedestal with capacitive “tap”  

---

*Companion: 02 Product System · 04 IA & Copy*
