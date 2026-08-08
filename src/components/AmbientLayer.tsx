const DOODLES = [
  { emoji: "💗", left: 6, dur: 20, delay: 0, dx: 34, rot: 14, size: 1.5, peak: 0.5 },
  { emoji: "✨", left: 82, dur: 24, delay: 2, dx: -28, rot: -10, size: 1.1, peak: 0.55 },
  { emoji: "🐶", left: 20, dur: 27, delay: 5, dx: 22, rot: 12, size: 1.5, peak: 0.42 },
  { emoji: "🐧", left: 70, dur: 23, delay: 1, dx: -16, rot: -14, size: 1.4, peak: 0.42 },
  { emoji: "💕", left: 40, dur: 25, delay: 7, dx: 20, rot: 10, size: 1.3, peak: 0.5 },
  { emoji: "✨", left: 55, dur: 21, delay: 3.5, dx: -22, rot: -9, size: 1, peak: 0.55 },
  { emoji: "🐧", left: 12, dur: 26, delay: 9, dx: 26, rot: 16, size: 1.3, peak: 0.4 },
  { emoji: "💗", left: 90, dur: 28, delay: 4, dx: -32, rot: -12, size: 1.3, peak: 0.5 },
  { emoji: "🐶", left: 30, dur: 24, delay: 11, dx: 16, rot: 8, size: 1.4, peak: 0.4 },
  { emoji: "🌸", left: 64, dur: 29, delay: 6, dx: -18, rot: -11, size: 1.2, peak: 0.45 },
  { emoji: "🤍", left: 48, dur: 22, delay: 13, dx: 24, rot: 9, size: 1.1, peak: 0.45 },
  { emoji: "🕊️", left: 76, dur: 30, delay: 15, dx: -24, rot: -8, size: 1.2, peak: 0.35 },
];

const CLOUDS = [
  { top: 8, dur: 90, delay: 0, size: 2.2, opacity: 0.16 },
  { top: 24, dur: 120, delay: -30, size: 1.6, opacity: 0.13 },
  { top: 52, dur: 105, delay: -60, size: 2, opacity: 0.12 },
  { top: 74, dur: 135, delay: -15, size: 1.7, opacity: 0.14 },
];

const ORBS = [
  { top: "8%", left: "-6%", size: 420, color: "oklch(0.7 0.16 12 / 28%)", dur: 26 },
  { top: "38%", left: "72%", size: 380, color: "oklch(0.83 0.12 78 / 22%)", dur: 34 },
  { top: "66%", left: "6%", size: 460, color: "oklch(0.62 0.14 330 / 24%)", dur: 30 },
  { top: "88%", left: "60%", size: 340, color: "oklch(0.78 0.11 30 / 20%)", dur: 38 },
];

export function AmbientLayer() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[3] overflow-hidden">
      {ORBS.map((o, i) => (
        <div
          key={`orb-${i}`}
          className="absolute rounded-full blur-[90px]"
          style={{
            top: o.top,
            left: o.left,
            width: o.size,
            height: o.size,
            background: `radial-gradient(circle, ${o.color}, transparent 70%)`,
            animation: `orbDrift ${o.dur}s ease-in-out infinite`,
            animationDelay: `${i * -6}s`,
          }}
        />
      ))}

      {CLOUDS.map((c, i) => (
        <div
          key={`cloud-${i}`}
          className="absolute"
          style={{
            top: `${c.top}%`,
            fontSize: `${c.size}rem`,
            opacity: c.opacity,
            animation: `driftSide ${c.dur}s linear infinite`,
            animationDelay: `${c.delay}s`,
          }}
        >
          ☁️
        </div>
      ))}

      {DOODLES.map((d, i) => (
        <div
          key={`doodle-${i}`}
          className="absolute top-[110vh] will-change-transform"
          style={
            {
              left: `${d.left}%`,
              fontSize: `${d.size}rem`,
              animation: `floatUp ${d.dur}s linear infinite`,
              animationDelay: `${d.delay}s`,
              "--dx": `${d.dx}px`,
              "--rot": `${d.rot}deg`,
              "--peak": d.peak,
              filter: "drop-shadow(0 3px 6px oklch(0.1 0.05 320 / 45%))",
            } as React.CSSProperties
          }
        >
          {d.emoji}
        </div>
      ))}
    </div>
  );
}
