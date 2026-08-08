import heartPhoto from "@/assets/heart-photo.jpg.asset.json";
import mountains from "@/assets/mountains.jpg.asset.json";
import tattoo from "@/assets/tattoo.jpg.asset.json";
import usVideo from "@/assets/us.mp4.asset.json";
import stickerPray from "@/assets/sticker-pray.png.asset.json";
import stickerBouquet from "@/assets/sticker-bouquet.jpg.asset.json";
import stickerBowbow from "@/assets/sticker-bowbow.png.asset.json";
import stickerBlush from "@/assets/sticker-blush.png.asset.json";
import { Reveal } from "./Reveal";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-sans text-[0.68rem] tracking-[0.32em] text-blush/70 uppercase">{children}</p>
  );
}

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 py-24 text-center">
      <Reveal>
        <Eyebrow>Vishu, to Sanju</Eyebrow>
      </Reveal>

      <Reveal delay={150}>
        <div
          className="relative mx-auto mt-10 h-64 w-64 overflow-hidden sm:h-80 sm:w-80"
          style={{
            clipPath:
              "path('M160 296 C 40 220, 0 150, 0 100 C 0 40, 50 4, 96 4 C 130 4, 152 24, 160 44 C 168 24, 190 4, 224 4 C 270 4, 320 40, 320 100 C 320 150, 280 220, 160 296 Z')",
            animation: "heartPulse 4s ease-in-out infinite",
          }}
        >
          <img
            src={heartPhoto.url}
            alt="Vishu and Sanju together"
            className="h-full w-full scale-105 object-cover"
          />
        </div>
      </Reveal>

      <Reveal delay={300}>
        <h1 className="mt-10 font-display text-6xl font-light tracking-tight text-cream sm:text-7xl">
          I'm sorry, <span className="text-rosegold italic">Sanju.</span>
        </h1>
      </Reveal>

      <Reveal delay={420}>
        <p className="mx-auto mt-6 max-w-xl font-sans text-[0.95rem] leading-relaxed text-cream/65">
          I've been sitting here thinking about what happened, and all I keep coming back to is how
          much I hate that I hurt you. This page is my way of saying it properly — no rushing, no
          half-apology. Just me, trying to make it right.
        </p>
      </Reveal>

      <Reveal delay={540}>
        <p className="mt-10 font-hand text-3xl text-blush">Vishu &nbsp;❤&nbsp; Sanju</p>
      </Reveal>
    </section>
  );
}

export function Letter() {
  return (
    <section className="px-6 py-20">
      <Reveal>
        <article
          className="mx-auto max-w-2xl rounded-[2rem] px-8 py-12 sm:px-14"
          style={{
            background: "linear-gradient(165deg, oklch(0.96 0.02 70), oklch(0.91 0.03 60))",
            boxShadow: "var(--shadow-soft)",
            transform: "rotate(-0.5deg)",
          }}
        >
          <div className="space-y-5 font-hand text-[1.65rem] leading-snug text-plum">
            <p>Sanju,</p>
            <p>
              I am really sorry bangaram, nenu ninu chaala hurt chesa, naa vala nuvvu padukoledhu ani kooda thelusu naaku,
              naaku chaala baadha vesindhi nenu endhuku better avatle ani neekosam. Chaala baadha petta ninu. Ee oka letter tho 
              avani thudicheyalenu naaku thelusu but I hope koncham it makes things better for us anukuntuna. 
            </p>
            <p>
              You mean more to me than any argument ever could. I don't want distance between us,
              even for a day. I'd rather sit with you and actually listen, anthey kani dhooram vundali ani ledhu
              baadha vasthundhi bey kothaga, anthala addict avthuna. Nee chinna chinna alari istham, nee mudu mudu maatalu ki
              padipoya, nee andhaaniki nee eyes nee lips nee cheeks nee waist 🤭 aha flattt, muahh 😙. 
            </p>
            <p>
              So andhukey ee chinna sorry letter. Idhi choosaka nee kopam pothundhi endhukantey idhi magic letter kabbati 😁😁.
            </p>
            <p className="pt-4 text-right text-[1.9rem]">— Yours, always. Yedhava</p>
          </div>
        </article>
      </Reveal>
    </section>
  );
}

const STICKERS = [
  { src: stickerPray.url, alt: "Pleading", cap: "please forgive me", tilt: -4 },
  {
    src: stickerBouquet.url,
    alt: "Flowers",
    cap: "flowers, if I could hand them to you right now",
    tilt: 3,
  },
  { src: stickerBowbow.url, alt: "Bow bow", cap: "being annoying until you smile", tilt: -2 },
  { src: stickerBlush.url, alt: "Blushing", cap: "this is genuinely how you make me feel", tilt: 4 },
];

export function Stickers() {
  return (
    <section className="px-6 py-20">
      <Reveal className="text-center">
        <h2 className="font-display text-4xl font-light text-cream sm:text-5xl">
          the many faces of <span className="text-rosegold italic">"I'm sorry"</span>
        </h2>
      </Reveal>

      <div className="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-5 lg:grid-cols-4">
        {STICKERS.map((s, i) => (
          <Reveal key={s.cap} delay={i * 110}>
            <figure
              className="glass group h-full rounded-3xl p-4 transition-transform duration-500 hover:-translate-y-2 hover:rotate-0"
              style={{ transform: `rotate(${s.tilt}deg)` }}
            >
              <img
                src={s.src}
                alt={s.alt}
                loading="lazy"
                className="mx-auto h-40 w-full rounded-2xl object-contain transition-transform duration-500 group-hover:scale-105"
              />
              <figcaption className="mt-4 text-center font-hand text-xl text-cream/85">
                {s.cap}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function VideoSection() {
  return (
    <section className="px-6 py-20 text-center">
      <Reveal>
        <Eyebrow>🫶🏻🥹❤️‍🩹 Just watch this to know how much u mean to me 🫶🏻🥹❤️‍🩹</Eyebrow>
      </Reveal>
      <Reveal delay={150}>
        <div
          className="glass mx-auto mt-8 max-w-xl overflow-hidden rounded-[2rem] p-3"
          style={{ boxShadow: "var(--shadow-glow), var(--shadow-soft)" }}
        >
          <video
            src={usVideo.url}
            controls
            playsInline
            preload="metadata"
            className="w-full rounded-3xl"
          />
        </div>
      </Reveal>
      <Reveal delay={280}>
        <p className="mx-auto mt-6 max-w-md font-hand text-2xl text-cream/70">
          press play — I promise I lovee youu more than I sayy 🖤⃝🦋𓍯𓂃𓏧♡🫵🏻🫶🏻
        </p>
      </Reveal>
    </section>
  );
}

export function Tattoo() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto grid max-w-4xl items-center gap-10 md:grid-cols-2">
        <Reveal>
          <img
            src={tattoo.url}
            alt="Our names tattooed"
            loading="lazy"
            className="w-full rounded-[2rem] object-cover"
            style={{ boxShadow: "var(--shadow-soft), var(--shadow-glow)" }}
          />
        </Reveal>
        <Reveal delay={180}>
          <h2 className="font-display text-4xl font-light text-cream sm:text-5xl">
            this is <span className="text-rosegold italic">permanent</span>
          </h2>
          <p className="mt-5 font-sans text-[0.95rem] leading-relaxed text-cream/65">
            Neeku tattos istham kadhaa ani ila okati epinchukuna nee peru naadhi kalipi ofc permanent kaadhu kani cute vundhi
            So future lo neeki kavali antey vepinchukundhu okayy nahh no restrictionsss and I won't go anywhere — I just need you to know I'm sorry, and I'm
            listening.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export function Mountains() {
  return (
    <section className="px-6 py-20 text-center">
      <Reveal>
        <Eyebrow>where we were happiest</Eyebrow>
      </Reveal>
      <Reveal delay={150}>
        <figure
          className="mx-auto mt-10 max-w-md rounded-sm bg-cream p-4 pb-8"
          style={{ boxShadow: "var(--shadow-soft)", transform: "rotate(-2deg)" }}
        >
          <img
            src={mountains.url}
            alt="Vishu and Sanju in the mountains"
            loading="lazy"
            className="w-full object-cover"
          />
          <figcaption className="mt-5 font-hand text-2xl text-plum">
            I want a hundred more of these. Starting with you forgiving me.
          </figcaption>
        </figure>
      </Reveal>
    </section>
  );
}
