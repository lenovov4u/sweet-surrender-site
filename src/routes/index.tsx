import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AmbientLayer } from "@/components/AmbientLayer";
import { Envelope } from "@/components/Envelope";
import { Hero, Letter, Stickers, VideoSection, Tattoo, Mountains } from "@/components/Sections";
import { ForgiveSection } from "@/components/ForgiveSection";

const title = "Sorry, Sanju — a letter from Vishu";
const description =
  "An apology letter for Sanju: our photos, our video, our tattoo, and one question at the end — do you forgive me?";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Divider() {
  return (
    <div
      aria-hidden
      className="mx-auto my-4 h-px w-2/3 max-w-xl"
      style={{
        background:
          "linear-gradient(90deg, transparent, oklch(0.83 0.09 20 / 45%), transparent)",
      }}
    />
  );
}

function Index() {
  const [opened, setOpened] = useState(false);

  return (
    <main className="grain relative min-h-screen overflow-hidden">
      <AmbientLayer />
      <Envelope onOpen={() => setOpened(true)} />

      <div
        className={`relative z-10 transition-all duration-1000 ${
          opened ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <Hero />
        <Divider />
        <Letter />
        <Divider />
        <Stickers />
        <Divider />
        <VideoSection />
        <Divider />
        <Tattoo />
        <Divider />
        <Mountains />
        <Divider />
        <ForgiveSection />
        <footer className="px-6 pb-14 text-center font-hand text-xl text-cream/45">
          made with too many feelings, by Vishu
        </footer>
      </div>
    </main>
  );
}
