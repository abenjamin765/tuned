import { allegroImage } from '@/lib/img-allegro';
import { andanteImage } from '@/lib/img-andante';
import { adagioImage } from '@/lib/img-adagio';
import { trioImage } from '@/lib/img-trio';
export type MovementSlug = "allegro" | "andante" | "adagio";

export interface Movement {
  slug: MovementSlug;
  number: string;
  name: string;
  tempo: string;
  intent: string;
  color: string;
  colorToken: "emerald" | "gold" | "navy";
  hex: string;
  motif: string;
  flavor: string;
  terpenes: string[];
  terpeneNote: string;
  description: string;
  longDescription: string;
  image: string;
  audioHint: string;
  frequency: number;
}

export const MOVEMENTS: Movement[] = [
  {
    slug: "allegro",
    number: "No. 01",
    name: "ALLEGRO",
    tempo: "Allegro",
    intent: "Uplift / Focus",
    color: "Emerald",
    colorToken: "emerald",
    hex: "#1F6B4A",
    motif: "Rising staccato",
    flavor: "Lemon-Lime Zest",
    terpenes: ["Limonene", "α-Pinene"],
    terpeneNote: "Bright citrus lift with crisp conifer clarity.",
    description:
      "A rising phrase for clear mornings and intentional starts. Bright, precise, composed.",
    longDescription:
      "ALLEGRO opens the day the way a score opens a movement—brisk, articulate, and deliberate. One milligram of Delta-9 THC in a lemon-lime zest mint, paired with limonene and α-pinene for a clean, ascending profile. Designed for focus without excess; presence without noise.",
    image: allegroImage,
    audioHint: "Short ascending staccato tones",
    frequency: 523.25,
  },
  {
    slug: "andante",
    number: "No. 02",
    name: "ANDANTE",
    tempo: "Andante",
    intent: "Flow / Social",
    color: "Warm Gold",
    colorToken: "gold",
    hex: "#C4A35A",
    motif: "Arched wave",
    flavor: "Sweet Peppermint",
    terpenes: ["β-Caryophyllene", "Limonene"],
    terpeneNote: "Warm spice-sweet balance with soft citrus edge.",
    description:
      "A measured pace for conversation and ease. Warm, social, unhurried.",
    longDescription:
      "ANDANTE keeps the tempo human—neither rush nor stillness. Sweet peppermint carries β-caryophyllene and limonene through a gentle arched wave. Built for rooms where presence matters: dinner, walks, late afternoon light.",
    image: andanteImage,
    audioHint: "Smooth mid-tempo wave tones",
    frequency: 392.0,
  },
  {
    slug: "adagio",
    number: "No. 03",
    name: "ADAGIO",
    tempo: "Adagio",
    intent: "Rest / Grounding",
    color: "Midnight Navy",
    colorToken: "navy",
    hex: "#1B2A4A",
    motif: "Descending fermata",
    flavor: "Lavender Wintergreen",
    terpenes: ["Linalool", "Myrcene"],
    terpeneNote: "Soft floral calm with deep herbal settle.",
    description:
      "A descending close for evenings and recovery. Quiet, grounded, held.",
    longDescription:
      "ADAGIO is the fermata at the end of the bar—held, descending, complete. Lavender wintergreen with linalool and myrcene. One milligram, measured for rest and return. No drama. Just the close of the phrase.",
    image: adagioImage,
    audioHint: "Soft descending fermata tones",
    frequency: 293.66,
  },
];

export const TRIO = {
  name: "The Trio",
  subtitle: "All three movements. One box.",
  totalThc: "60mg",
  mints: 60,
  image: trioImage,
  description:
    "ALLEGRO, ANDANTE, and ADAGIO—the full score in a single collection. Three tempos. Three intents. Sixty precise milligrams across sixty mints.",
};

export function getMovement(slug: string): Movement | undefined {
  return MOVEMENTS.find((m) => m.slug === slug);
}

export const FAQ_ITEMS = [
  {
    q: "What is a TUNED mint?",
    a: "Each TUNED mint contains 1mg of Delta-9 THC in a dissolvable format. Twenty mints per box—20mg total. Designed for intentional, measured use.",
  },
  {
    q: "What does “Microdose in Key” mean?",
    a: "It is our promise of precision. Every mint is composed like a note in a score—consistent dose, intentional tempo, no improvisation with the amount.",
  },
  {
    q: "How are the three movements different?",
    a: "ALLEGRO (emerald) is uplift and focus. ANDANTE (gold) is flow and social ease. ADAGIO (navy) is rest and grounding. Each pairs a flavor, terpene profile, and visual motif with its tempo.",
  },
  {
    q: "Are there medical claims?",
    a: "No. TUNED is a wellness-adjacent consumer product, not medicine. We do not claim to treat, cure, or prevent any condition. Please consume responsibly and in accordance with local law.",
  },
  {
    q: "Who can purchase TUNED?",
    a: "Adults 21 years of age or older, where legally permitted. An age gate is required before browsing the site.",
  },
  {
    q: "What is the packaging?",
    a: "A white rigid slide matchbox with a debossed musical staff and foil accents. Designed as analog audio EDC—pocketable, precise, collectible.",
  },
  {
    q: "What are the NFC audio cues?",
    a: "Each box may include an NFC tag that opens a soft Web Audio tone preview matching the movement’s motif—rising staccato, arched wave, or descending fermata. No copyrighted music. Just a composed cue.",
  },
];
