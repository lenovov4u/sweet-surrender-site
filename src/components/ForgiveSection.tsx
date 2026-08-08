import { useState } from "react";
import bowbowPlea from "@/assets/sticker-bowbow-plea.png.asset.json";
import hug from "@/assets/sticker-hug.jpg.asset.json";

export function ForgiveSection() {
  const [dodges, setDodges] = useState(0);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [plea, setPlea] = useState(false);
  const [forgiven, setForgiven] = useState(false);

  function dodge() {
    if (dodges >= 3 || forgiven) return;
    setOffset({ x: Math.random() * 220 - 110, y: Math.random() * 90 - 45 });
    setDodges((d) => d + 1);
  }

  function celebrate() {
    setPlea(false);
    setForgiven(true);
    spawnPetals();
    setTimeout(() => {
      document.getElementById("reveal")?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 120);
  }

  return (
    <section className="relative px-6 py-24 text-center">
      <h2 className="font-display text-4xl font-light text-cream sm:text-5xl">
        so… <span className="text-rosegold italic">do you forgive me?</span>
      </h2>
      <p className="mx-auto mt-4 max-w-md font-sans text-sm text-cream/55">
        (there is only one honest answer, but I built a button for the other one anyway)
      </p>

      <div className="relative mx-auto mt-10 flex min-h-28 max-w-lg flex-wrap items-center justify-center gap-4">
        <button
          type="button"
          onClick={celebrate}
          className="rounded-full px-9 py-4 font-sans text-sm tracking-wide text-primary-foreground transition-transform duration-300 hover:scale-105"
          style={{ background: "var(--gradient-rosegold)", boxShadow: "var(--shadow-glow)" }}
        >
          Yes, I forgive you 🤍
        </button>

        <button
          type="button"
          onMouseEnter={dodge}
          onFocus={dodge}
          onClick={() => (dodges >= 3 ? setPlea(true) : dodge())}
          className="glass rounded-full px-8 py-4 font-sans text-sm text-cream/75 transition-transform duration-300 ease-out"
          style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }}
        >
          Not yet
        </button>
      </div>

      {plea && (
        <div className="absolute inset-x-0 top-0 z-40 flex items-center justify-center px-6 pt-28">
          <div className="glass animate-scale-in max-w-sm rounded-3xl p-8 text-center">
            <img
              src={bowbowPlea.url}
              alt="Bow bow, pleading"
              className="mx-auto w-44 drop-shadow-[0_10px_24px_oklch(0.1_0.05_320/60%)]"
            />
            <p className="mt-5 font-hand text-3xl text-cream">
              Bow bow… please? I'll be good, I promise.
            </p>
            <button
              type="button"
              onClick={celebrate}
              className="mt-6 rounded-full px-7 py-3 font-sans text-sm text-primary-foreground transition-transform hover:scale-105"
              style={{ background: "var(--gradient-rosegold)" }}
            >
              Okay, fine — yes 🤍
            </button>
          </div>
        </div>
      )}

      <div
        id="reveal"
        className={`mx-auto mt-14 max-w-md transition-all duration-1000 ${
          forgiven ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
        }`}
      >
        <img
          src={hug.url}
          alt="A hug"
          className="mx-auto w-56 rounded-3xl"
          style={{ boxShadow: "var(--shadow-glow)" }}
        />
        <p className="mt-6 font-hand text-3xl text-cream">
          Thank you. Come here — I owe you a real hug, not a cartoon one.
        </p>
      </div>
    </section>
  );
}

function spawnPetals() {
  const chars = ["🌸", "♥", "🤍", "✨", "💗"];
  for (let i = 0; i < 40; i++) {
    setTimeout(() => {
      const el = document.createElement("div");
      el.textContent = chars[Math.floor(Math.random() * chars.length)];
      el.style.cssText = `position:fixed;top:-8vh;z-index:60;pointer-events:none;left:${
        Math.random() * 100
      }vw;font-size:${0.9 + Math.random() * 1.4}rem;--dx:${
        Math.random() * 160 - 80
      }px;animation:petalFall ${4 + Math.random() * 3}s linear forwards;`;
      document.body.appendChild(el);
      setTimeout(() => el.remove(), 8000);
    }, i * 70);
  }
}
