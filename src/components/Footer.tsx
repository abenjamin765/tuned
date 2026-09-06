import Link from "next/link";
import { BRAND, NAV } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-paper">
      <div className="shell section-pad !py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <p className="font-sans text-sm font-semibold tracking-brand">
              {BRAND.name}
            </p>
            <p className="mt-3 max-w-xs text-sm text-muted">
              {BRAND.tagline}
              <br />
              Premium 1mg Delta-9 THC microdose mints.
            </p>
          </div>
          <div>
            <p className="eyebrow mb-4">Explore</p>
            <ul className="space-y-2">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-ink/80 hover:text-ink"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow mb-4">Legal</p>
            <ul className="space-y-2 text-sm text-ink/80">
              <li>
                <Link href="/legal/privacy" className="hover:text-ink">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/legal/terms" className="hover:text-ink">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="/legal/age-gate" className="hover:text-ink">
                  Age Gate
                </Link>
              </li>
            </ul>
            <p className="mt-6 text-xs leading-relaxed text-muted">
              For adults 21+. Contains Delta-9 THC. Not intended to diagnose,
              treat, cure, or prevent any disease. Please consume responsibly
              and comply with local laws.
            </p>
          </div>
        </div>
        <div className="rule mt-12" />
        <p className="mt-6 text-xs text-muted">
          © {new Date().getFullYear()} TUNED. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
