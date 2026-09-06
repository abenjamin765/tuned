"use client";

import { useRef, useState } from "react";

type Motif = "staccato" | "wave" | "fermata";

interface Props {
  motif: Motif;
  baseFreq: number;
  colorClass?: string;
  label?: string;
}

function playMotif(
  ctx: AudioContext,
  motif: Motif,
  baseFreq: number
): void {
  const now = ctx.currentTime;
  const master = ctx.createGain();
  master.gain.value = 0.12;
  master.connect(ctx.destination);

  if (motif === "staccato") {
    const notes = [0, 2, 4, 7].map((s) => baseFreq * Math.pow(2, s / 12));
    notes.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const g = ctx.createGain();
      osc.type = "sine";
      osc.frequency.value = freq;
      const t = now + i * 0.14;
      g.gain.setValueAtTime(0, t);
      g.gain.linearRampToValueAtTime(0.9, t + 0.02);
      g.gain.exponentialRampToValueAtTime(0.001, t + 0.12);
      osc.connect(g);
      g.connect(master);
      osc.start(t);
      osc.stop(t + 0.14);
    });
  } else if (motif === "wave") {
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    const lfo = ctx.createOscillator();
    const lfoGain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.value = baseFreq;
    lfo.frequency.value = 2.2;
    lfoGain.gain.value = 18;
    lfo.connect(lfoGain);
    lfoGain.connect(osc.frequency);
    g.gain.setValueAtTime(0, now);
    g.gain.linearRampToValueAtTime(0.8, now + 0.3);
    g.gain.linearRampToValueAtTime(0.5, now + 1.0);
    g.gain.exponentialRampToValueAtTime(0.001, now + 1.6);
    osc.connect(g);
    g.connect(master);
    osc.start(now);
    lfo.start(now);
    osc.stop(now + 1.7);
    lfo.stop(now + 1.7);
  } else {
    const osc = ctx.createOscillator();
    const g = ctx.createGain();
    osc.type = "triangle";
    osc.frequency.setValueAtTime(baseFreq * 1.25, now);
    osc.frequency.exponentialRampToValueAtTime(baseFreq * 0.75, now + 1.8);
    g.gain.setValueAtTime(0, now);
    g.gain.linearRampToValueAtTime(0.7, now + 0.2);
    g.gain.setValueAtTime(0.55, now + 1.2);
    g.gain.exponentialRampToValueAtTime(0.001, now + 2.4);
    osc.connect(g);
    g.connect(master);
    osc.start(now);
    osc.stop(now + 2.5);
  }
}

export default function AudioPreview({
  motif,
  baseFreq,
  colorClass = "border-ink/20 text-ink",
  label = "Preview tone",
}: Props) {
  const ctxRef = useRef<AudioContext | null>(null);
  const [playing, setPlaying] = useState(false);

  async function handlePlay() {
    if (typeof window === "undefined") return;
    const AC =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext })
        .webkitAudioContext;
    if (!ctxRef.current) ctxRef.current = new AC();
    const ctx = ctxRef.current;
    if (ctx.state === "suspended") await ctx.resume();
    setPlaying(true);
    playMotif(ctx, motif, baseFreq);
    const ms = motif === "staccato" ? 700 : motif === "wave" ? 1800 : 2600;
    window.setTimeout(() => setPlaying(false), ms);
  }

  return (
    <button
      type="button"
      onClick={handlePlay}
      disabled={playing}
      className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs uppercase tracking-brand transition hover:opacity-80 disabled:opacity-50 ${colorClass}`}
      aria-label={label}
    >
      <span
        className={`inline-block h-1.5 w-1.5 rounded-full ${playing ? "animate-pulse bg-current" : "bg-current/40"}`}
      />
      {playing ? "Playing…" : label}
    </button>
  );
}
