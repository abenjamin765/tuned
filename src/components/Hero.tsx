import Link from "next/link";
import { BRAND } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="section-pad relative overflow-hidden">
      <div className="shell">
        <p className="eyebrow mb-6">Delta-9 · 1mg · Precise</p>
        <h1 className="max-w-3xl font-display text-5xl leading-[1.05] tracking-tightish text-ink md:text-7xl">
          {BRAND.tagline}
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted md:text-xl">
          Premium music-themed microdose mints. One milligram. Twenty notes per
          box. Composed for intentional days—never excess.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/movements" className="btn-primary">
            Explore movements
          </Link>
          <Link href="/bundle-trio" className="btn-ghost">
            The Trio
          </Link>
        </div>
        <div className="mt-16 grid gap-6 border-t border-ink/10 pt-8 sm:grid-cols-3">
          <div>
            <p className="font-mono text-2xl text-ink">1mg</p>
            <p className="mt-1 text-sm text-muted">THC per mint</p>
          </div>
          <div>
            <p className="font-mono text-2xl text-ink">20</p>
            <p className="mt-1 text-sm text-muted">mints / 20mg per box</p>
          </div>
          <div>
            <p className="font-mono text-2xl text-ink">3</p>
            <p className="mt-1 text-sm text-muted">movements · tempos</p>
          </div>
        </div>
      </div>
    </section>
  );
}
