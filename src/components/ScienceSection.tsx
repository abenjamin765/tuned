import Link from "next/link";

export default function ScienceSection() {
  return (
    <section className="section-pad">
      <div className="shell grid items-center gap-14 lg:grid-cols-2">
        <div>
          <p className="eyebrow mb-3">1mg science</p>
          <h2 className="font-display text-4xl tracking-tightish md:text-5xl">
            Precision over volume
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted">
            TUNED is built around a single idea: a consistent one-milligram
            Delta-9 THC microdose, delivered as a mint. No guesswork. No
            improvisation with the amount. Terpene pairings shape the aromatic
            and experiential character of each movement—without medical claims.
          </p>
          <ul className="mt-8 space-y-4 text-sm text-ink/90">
            <li className="flex gap-3">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald" />
              Measured 1mg Delta-9 THC per mint
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
              Movement-specific terpene profiles
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-navy" />
              Dissolvable format—pocketable, discreet, intentional
            </li>
          </ul>
          <Link href="/the-science" className="btn-primary mt-10 inline-flex">
            Read the science
          </Link>
        </div>
        <div className="rounded-2xl border border-ink/10 bg-mist/40 p-8 md:p-12">
          <dl className="space-y-8">
            <div>
              <dt className="eyebrow">Per mint</dt>
              <dd className="mt-2 font-display text-4xl">1mg Δ9-THC</dd>
            </div>
            <div className="rule" />
            <div>
              <dt className="eyebrow">Per box</dt>
              <dd className="mt-2 font-display text-4xl">20 × 1mg</dd>
              <dd className="mt-1 text-sm text-muted">20mg total</dd>
            </div>
            <div className="rule" />
            <div>
              <dt className="eyebrow">Format</dt>
              <dd className="mt-2 text-lg">Dissolvable mint · white rigid slide matchbox</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
