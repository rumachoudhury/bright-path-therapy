"use client";

import { useMemo } from "react";

/**
 * Signature waveform motif used as a section divider and inside the hero.
 * Bar heights are deterministic (seeded from index) so server and client
 * render the same markup, then get an animated "beat" via CSS.
 */
export default function Waveform({ count = 60, height = 30, className = "" }) {
  const bars = useMemo(() => {
    return Array.from({ length: count }, (_, i) => {
      const base = 4 + Math.abs(Math.sin(i * 0.5)) * height * 0.8;
      const jitter = ((i * 37) % 11) / 11;
      return base + jitter * height * 0.15;
    });
  }, [count, height]);

  return (
    <div
      className={`flex items-center justify-center gap-1 w-full ${className}`}
      style={{ height }}
      aria-hidden="true"
    >
      {bars.map((h, i) => (
        <span
          key={i}
          className="waveform-bar inline-block w-1.5 rounded-full origin-center animate-waveBeat"
          style={{
            height: `${h}px`,
            backgroundColor: i % 3 === 0 ? "#E86F4B" : "#B9CDB8",
            animationDelay: `${(i % 7) * 0.08}s`,
            animationDuration: `${1.4 + (i % 5) * 0.15}s`,
          }}
        />
      ))}
    </div>
  );
}
