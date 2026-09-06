import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import AudioPreview from "@/components/AudioPreview";
import { getMovement, MOVEMENTS } from "@/lib/products";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return MOVEMENTS.map((m) => ({ slug: m.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const m = getMovement(params.slug);
  if (!m) return { title: "Movement" };
  return {
    title: `${m.number} ${m.name}`,
    description: m.description,
  };
}

const motifMap = {
  allegro: "staccato" as const,
  andante: "wave" as const,
  adagio: "fermata" as const,
};

export default function MovementDetailPage({ params }: Props) {
  const m = getMovement(params.slug);
  if (!m) notFound();

  return (
    <div className="section-pad">
      <div className="shell">
        <Link
          href="/movements"
          className="text-xs uppercase tracking-brand text-muted hover:text-ink"
        >
          ← All movements
        </Link>
        <div className="mt-10 grid items-start gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-mist">
            <Image unoptimized
              src={m.image}
              alt={`${m.number} ${m.name} packaging`}
              fill
              className="object-cover"
              priority
              sizes="(max-width:1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <p className="eyebrow" style={{ color: m.hex }}>
              {m.number}
            </p>
            <h1 className="mt-3 font-display text-5xl tracking-tightish md:text-6xl">
              {m.name}
            </h1>
            <p className="mt-3 text-lg text-muted">{m.intent}</p>
            <p className="mt-8 leading-relaxed text-ink/85">
              {m.longDescription}
            </p>
            <div className="mt-10 grid gap-6 border-y border-ink/10 py-8 sm:grid-cols-2">
              <div>
                <p className="eyebrow">Color</p>
                <p className="mt-1 flex items-center gap-2">
                  <span
                    className="inline-block h-3 w-3 rounded-full"
                    style={{ backgroundColor: m.hex }}
                  />
                  {m.color}
                </p>
              </div>
              <div>
                <p className="eyebrow">Motif</p>
                <p className="mt-1">{m.motif}</p>
              </div>
              <div>
                <p className="eyebrow">Flavor</p>
                <p className="mt-1">{m.flavor}</p>
              </div>
              <div>
                <p className="eyebrow">Terpenes</p>
                <p className="mt-1">{m.terpenes.join(" + ")}</p>
                <p className="mt-1 text-sm text-muted">{m.terpeneNote}</p>
              </div>
            </div>
            <div className="mt-8">
              <p className="eyebrow mb-3">Audio cue</p>
              <p className="mb-4 text-sm text-muted">
                Soft Web Audio preview — {m.audioHint.toLowerCase()}. No
                copyrighted music.
              </p>
              <AudioPreview
                motif={motifMap[m.slug]}
                baseFreq={m.frequency}
                label={`Play ${m.name} tone`}
                colorClass="border-ink/25 text-ink"
              />
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/bundle-trio" className="btn-primary">
                Get The Trio
              </Link>
              <Link href="/the-science" className="btn-ghost">
                The Science
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
