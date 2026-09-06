"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "tuned-age-verified";

export default function AgeGate() {
  const [ready, setReady] = useState(false);
  const [verified, setVerified] = useState(true);

  useEffect(() => {
    try {
      const v = localStorage.getItem(STORAGE_KEY);
      setVerified(v === "true");
    } catch {
      setVerified(false);
    }
    setReady(true);
  }, []);

  function confirm() {
    try {
      localStorage.setItem(STORAGE_KEY, "true");
    } catch {
      /* ignore */
    }
    setVerified(true);
  }

  function decline() {
    window.location.href = "https://www.google.com";
  }

  if (!ready || verified) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/80 p-6 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="age-gate-title"
    >
      <div className="w-full max-w-md rounded-2xl bg-paper p-8 shadow-2xl md:p-10">
        <p className="eyebrow mb-4">Age verification</p>
        <h2
          id="age-gate-title"
          className="font-display text-3xl tracking-tightish text-ink"
        >
          Are you 21 or older?
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted">
          TUNED products contain Delta-9 THC and are intended for adults 21+.
          By entering, you confirm you meet the legal age in your jurisdiction
          and will use this site responsibly.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <button type="button" onClick={confirm} className="btn-primary flex-1">
            Yes, enter
          </button>
          <button type="button" onClick={decline} className="btn-ghost flex-1">
            No, exit
          </button>
        </div>
        <p className="mt-6 text-center text-xs text-muted">
          <Link href="/legal/age-gate" className="underline underline-offset-2">
            Age gate policy
          </Link>
        </p>
      </div>
    </div>
  );
}
