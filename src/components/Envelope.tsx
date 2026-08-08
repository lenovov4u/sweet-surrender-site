import { useEffect, useState } from "react";

export function Envelope({ onOpen }: { onOpen: () => void }) {
  const [opening, setOpening] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    if (!opening) return;
    const a = setTimeout(onOpen, 900);
    const b = setTimeout(() => setGone(true), 1700);
    return () => {
      clearTimeout(a);
      clearTimeout(b);
    };
  }, [opening, onOpen]);

  if (gone) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center px-6 transition-all duration-800 ${
        opening ? "pointer-events-none scale-[1.15] opacity-0 blur-md" : "opacity-100"
      }`}
      style={{
        background:
          "radial-gradient(ellipse at 50% 40%, oklch(0.32 0.09 20) 0%, oklch(0.17 0.06 320) 70%)",
      }}
    >
      <div className="flex flex-col items-center text-center">
        <p className="font-sans text-[0.7rem] tracking-[0.32em] text-blush/70 uppercase">
          for the girl I love
        </p>

        <button
          type="button"
          onClick={() => setOpening(true)}
          aria-label="Open the letter"
          className="group relative mt-8 h-[190px] w-[290px] cursor-pointer [perspective:1200px]"
        >
          <div
            className="absolute inset-0 rounded-[10px] transition-transform duration-500 group-hover:-translate-y-1"
            style={{
              background: "linear-gradient(160deg, oklch(0.86 0.05 55), oklch(0.76 0.07 40))",
              boxShadow: "var(--shadow-soft), var(--shadow-glow)",
            }}
          />
          <div
            className={`absolute bottom-0 left-1/2 h-[130px] w-[230px] -translate-x-1/2 rounded-t-[6px] bg-cream transition-all duration-700 ${
              opening ? "-translate-y-24 opacity-100" : "translate-y-6 opacity-0"
            }`}
            style={{ boxShadow: "0 -10px 30px -12px oklch(0.1 0.05 320 / 60%)" }}
          >
            <p className="mt-8 px-6 font-hand text-2xl leading-tight text-plum">
              Sanju, I'm so sorry…
            </p>
          </div>
          <div
            className="absolute inset-x-0 top-0 origin-top transition-transform duration-700 ease-in-out"
            style={{
              height: 0,
              borderLeft: "145px solid transparent",
              borderRight: "145px solid transparent",
              borderTop: "108px solid oklch(0.72 0.09 42)",
              borderRadius: "10px 10px 0 0",
              transform: opening ? "rotateX(-172deg)" : "rotateX(0deg)",
              transformStyle: "preserve-3d",
            }}
          />
          <span
            className={`absolute top-[86px] left-1/2 z-10 flex h-11 w-11 -translate-x-1/2 items-center justify-center rounded-full text-lg transition-all duration-500 ${
              opening ? "scale-0 opacity-0" : "scale-100"
            }`}
            style={{
              background: "var(--gradient-rosegold)",
              color: "oklch(0.98 0.01 60)",
              boxShadow: "0 0 24px -4px oklch(0.7 0.16 12 / 80%)",
              animation: "heartPulse 2.6s ease-in-out infinite",
            }}
          >
            ♥
          </span>
        </button>

        <h1 className="mt-10 font-display text-5xl font-light tracking-tight text-cream sm:text-6xl">
          a letter for <span className="text-rosegold italic">Sanju</span>
        </h1>
        <p className="mt-3 font-sans text-sm text-cream/60">tap the envelope to open it</p>

        <button
          type="button"
          onClick={() => setOpening(true)}
          className="mt-7 rounded-full px-8 py-3 font-sans text-sm tracking-wide text-primary-foreground transition-transform duration-300 hover:scale-105"
          style={{ background: "var(--gradient-rosegold)", boxShadow: "var(--shadow-glow)" }}
        >
          Open it
        </button>
      </div>
    </div>
  );
}
