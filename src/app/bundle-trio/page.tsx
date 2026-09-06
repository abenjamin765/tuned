import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MOVEMENTS, TRIO } from "@/lib/products";

export const metadata: Metadata = {
  title: "The Trio",
  description:
    "TUNED Trio bundle — Allegro, Andante, and Adagio. Sixty 1mg mints across three movements.",
};

export default function BundleTrioPage() {
  return (
    <div className="section-pad">
      <div className="shell">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-square overflow-hidden rounded-2xl bg-mist">
            <Image unoptimized
              src={TRIO.image}
              alt="TUNED Trio bundle"
              fill
              className="object-cover"
              priority
              sizes="(max-width:1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <p className="eyebrow mb-3">Bundle</p>
            <h1 className="font-display text-5xl tracking-tightish md:text-6xl">
              {TRIO.name}
            </h1>
            <p className="mt-4 text-xl text-muted">{TRIO.subtitle}</p>
            <p className="mt-6 leading-relaxed text-ink/85">
              {TRIO.description}
            </p>
            <dl className="mt-10 grid grid-cols-2 gap-6">
              <div>
                <dt className="eyebrow">Mints</dt>
                <dd className="mt-1 font-display text-3xl">{TRIO.mints}</dd>
              </div>
              <div>
                <dt className="eyebrow">Total Δ9</dt>
                <dd className="mt-1 font-display text-3xl">{TRIO.totalThc}</dd>
              </div>
              <div>
                <dt className="eyebrow">Movements</dt>
                <dd className="mt-1 font-display text-3xl">3</dd>
              </div>
              <div>
                <dt className="eyebrow">Per mint</dt>
                <dd className="mt-1 font-display text-3xl">1mg</dd>
              </div>
            </dl>
            <p className="mt-8 text-sm text-muted">
              Adults 21+ where legally permitted. Contains Delta-9 THC. Not
              intended to diagnose, treat, cure, or prevent any disease.
            </p>
          </div>
        </div>

        <div className="mt-24">
          <h2 className="font-display text-3xl tracking-tightish">
            Included movements
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {MOVEMENTS.map((m) => (
              <Link
                key={m.slug}
                href={`/movements/${m.slug}`}
                className="rounded-2xl border border-ink/10 p-6 transition hover:border-ink/30"
              >
                <p className="eyebrow" style={{ color: m.hex }}>
                  {m.number}
                </p>
                <h3 className="mt-2 font-display text-2xl">{m.name}</h3>
                <p className="mt-1 text-sm text-muted">{m.intent}</p>
                <p className="mt-4 text-sm">{m.flavor}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
