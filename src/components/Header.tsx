"use client";

import Link from "next/link";
import { useState } from "react";
import { BRAND, NAV } from "@/lib/constants";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/90 backdrop-blur-md">
      <div className="shell flex h-16 items-center justify-between px-6 md:px-10">
        <Link
          href="/"
          className="font-sans text-sm font-semibold tracking-brand text-ink"
        >
          {BRAND.name}
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xs uppercase tracking-brand text-muted transition hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
          <Link href="/bundle-trio" className="btn-primary !px-5 !py-2 text-xs">
            Shop Trio
          </Link>
        </nav>
        <button
          type="button"
          className="md:hidden text-xs uppercase tracking-brand text-ink"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open && (
        <nav
          id="mobile-nav"
          className="border-t border-ink/10 px-6 py-6 md:hidden"
        >
          <ul className="flex flex-col gap-4">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm uppercase tracking-brand text-ink"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
