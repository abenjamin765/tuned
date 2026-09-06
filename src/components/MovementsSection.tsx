import Image from "next/image";
import Link from "next/link";
import { MOVEMENTS } from "@/lib/products";

const colorMap = {
  emerald: "text-emerald border-emerald/30",
  gold: "text-gold border-gold/40",
  navy: "text-navy border-navy/30",
} as const;

export default function MovementsSection() {
  return (
    <section className="section-pad border-t border-ink/10 bg-mist/30">
      <div className="shell">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow mb-3">The score</p>
            <h2 className="font-display text-4xl tracking-tightish md:text-5xl">
              Three movements
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted">
            Each box is a tempo: rising focus, social flow, or evening rest.
            Same dose. Distinct composition.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {MOVEMENTS.map((m) => (
            <Link
              key={m.slug}
              href={`/movements/${m.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-ink/10 bg-paper transition hover:border-ink/25"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-mist">
                <Image unoptimized
                  src={m.image}
                  alt={`${m.number} ${m.name} packaging`}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width:768px) 100vw, 33vw"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className={`eyebrow ${colorMap[m.colorToken].split(" ")[0]}`}>
                  {m.number}
                </p>
                <h3 className="mt-2 font-display text-2xl tracking-tightish">
                  {m.name}
                </h3>
                <p className="mt-1 text-sm text-muted">{m.intent}</p>
                <p className="mt-4 text-sm leading-relaxed text-ink/80">
                  {m.description}
                </p>
                <p className="mt-auto pt-6 text-xs uppercase tracking-brand text-muted">
                  {m.flavor} · {m.motif}
                </p>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/movements" className="btn-ghost">
            View all movements
          </Link>
        </div>
      </div>
    </section>
  );
}
