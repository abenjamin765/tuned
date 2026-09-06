import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MOVEMENTS } from "@/lib/products";

export const metadata: Metadata = {
  title: "Movements",
  description:
    "Explore TUNED movements: Allegro, Andante, and Adagio — three tempos of 1mg Delta-9 microdose mints.",
};

export default function MovementsPage() {
  return (
    <div className="section-pad">
      <div className="shell">
        <p className="eyebrow mb-3">Catalog</p>
        <h1 className="font-display text-5xl tracking-tightish md:text-6xl">
          Movements
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted">
          Three composed profiles. Same 1mg precision. Choose your tempo.
        </p>
        <div className="mt-16 space-y-20">
          {MOVEMENTS.map((m, i) => (
            <article
              key={m.slug}
              className={`grid items-center gap-10 lg:grid-cols-2 ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
            >
              <Link
                href={`/movements/${m.slug}`}
                className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-mist"
              >
                <Image unoptimized
                  src={m.image}
                  alt={`${m.number} ${m.name}`}
                  fill
                  className="object-cover"
                  sizes="(max-width:1024px) 100vw, 50vw"
                />
              </Link>
              <div>
                <p className="eyebrow" style={{ color: m.hex }}>
                  {m.number} · {m.color}
                </p>
                <h2 className="mt-3 font-display text-4xl tracking-tightish">
                  {m.name}
                </h2>
                <p className="mt-2 text-muted">{m.intent}</p>
                <p className="mt-6 leading-relaxed text-ink/85">
                  {m.longDescription}
                </p>
                <dl className="mt-8 grid gap-4 text-sm sm:grid-cols-2">
                  <div>
                    <dt className="eyebrow">Flavor</dt>
                    <dd className="mt-1">{m.flavor}</dd>
                  </div>
                  <div>
                    <dt className="eyebrow">Motif</dt>
                    <dd className="mt-1">{m.motif}</dd>
                  </div>
                  <div>
                    <dt className="eyebrow">Terpenes</dt>
                    <dd className="mt-1">{m.terpenes.join(" · ")}</dd>
                  </div>
                  <div>
                    <dt className="eyebrow">Dose</dt>
                    <dd className="mt-1">1mg Δ9 · 20 mints / box</dd>
                  </div>
                </dl>
                <Link
                  href={`/movements/${m.slug}`}
                  className="btn-primary mt-8 inline-flex"
                >
                  View {m.name}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
