import Image from "next/image";
import Link from "next/link";
import { TRIO } from "@/lib/products";

export default function TrioSection() {
  return (
    <section className="section-pad border-t border-ink/10 bg-ink text-paper">
      <div className="shell grid items-center gap-12 lg:grid-cols-2">
        <div className="relative aspect-square overflow-hidden rounded-2xl bg-navy/40">
          <Image
            src={TRIO.image}
            alt="TUNED Trio bundle — Allegro, Andante, Adagio"
            fill
            className="object-cover"
            sizes="(max-width:1024px) 100vw, 50vw"
          />
        </div>
        <div>
          <p className="font-mono text-xs uppercase tracking-brand text-gold">
            Bundle
          </p>
          <h2 className="mt-3 font-display text-4xl tracking-tightish md:text-5xl">
            {TRIO.name}
          </h2>
          <p className="mt-2 text-lg text-paper/70">{TRIO.subtitle}</p>
          <p className="mt-6 text-base leading-relaxed text-paper/75">
            {TRIO.description}
          </p>
          <div className="mt-8 flex gap-10">
            <div>
              <p className="font-mono text-2xl text-gold">{TRIO.mints}</p>
              <p className="text-xs uppercase tracking-brand text-paper/50">
                mints
              </p>
            </div>
            <div>
              <p className="font-mono text-2xl text-gold">{TRIO.totalThc}</p>
              <p className="text-xs uppercase tracking-brand text-paper/50">
                total Δ9
              </p>
            </div>
          </div>
          <Link
            href="/bundle-trio"
            className="mt-10 inline-flex rounded-full bg-paper px-7 py-3 text-sm font-medium tracking-wide text-ink transition hover:bg-gold"
          >
            Explore the Trio
          </Link>
        </div>
      </div>
    </section>
  );
}
