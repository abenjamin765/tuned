import type { Metadata } from "next";
import Link from "next/link";
import { MOVEMENTS } from "@/lib/products";

export const metadata: Metadata = {
  title: "The Science",
  description:
    "How TUNED composes 1mg Delta-9 THC microdose mints with movement-specific terpene profiles.",
};

export default function SciencePage() {
  return (
    <div className="section-pad">
      <div className="shell max-w-3xl">
        <p className="eyebrow mb-3">Composition</p>
        <h1 className="font-display text-5xl tracking-tightish md:text-6xl">
          The Science
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted">
          TUNED is not medicine. It is a consumer microdose format designed
          around consistency, aromatic character, and intentional ritual. What
          follows describes product design—not clinical outcomes.
        </p>

        <section className="mt-16">
          <h2 className="font-display text-3xl tracking-tightish">
            One milligram, every time
          </h2>
          <p className="mt-4 leading-relaxed text-ink/85">
            Each mint is formulated to deliver 1mg of Delta-9 THC. A box holds
            twenty mints—20mg total. The format is dissolvable: discreet,
            pocketable, and paced by how you choose to use it. Precision is the
            product; volume is not the point.
          </p>
        </section>

        <section className="mt-14">
          <h2 className="font-display text-3xl tracking-tightish">
            Terpene pairing
          </h2>
          <p className="mt-4 leading-relaxed text-ink/85">
            Terpenes contribute aroma and flavor character. TUNED pairs each
            movement with a two-terpene signature that complements its tempo and
            flavor—without promising therapeutic effects.
          </p>
          <div className="mt-8 space-y-6">
            {MOVEMENTS.map((m) => (
              <div
                key={m.slug}
                className="rounded-xl border border-ink/10 p-6"
              >
                <p className="eyebrow" style={{ color: m.hex }}>
                  {m.number} {m.name}
                </p>
                <p className="mt-2 font-medium">
                  {m.terpenes.join(" + ")}
                </p>
                <p className="mt-2 text-sm text-muted">{m.terpeneNote}</p>
                <p className="mt-2 text-sm text-ink/70">
                  Flavor: {m.flavor}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-14">
          <h2 className="font-display text-3xl tracking-tightish">
            What we do not claim
          </h2>
          <p className="mt-4 leading-relaxed text-ink/85">
            TUNED does not diagnose, treat, cure, or prevent any disease or
            condition. Language on this site avoids medical claims, dosing advice
            framed as therapy, and “get high” positioning. Adults 21+ should
            follow local law and personal judgment.
          </p>
        </section>

        <Link href="/movements" className="btn-primary mt-14 inline-flex">
          Explore movements
        </Link>
      </div>
    </div>
  );
}
