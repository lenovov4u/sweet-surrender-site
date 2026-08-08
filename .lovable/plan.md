## Goal

Rebuild your existing static "Sorry, Sanju" page as the live site in this Lovable project, with a much more romantic, cinematic look and feel — same story, same photos/video/stickers, same envelope → letter → forgive flow.

Note: the two Instagram reel links can't be opened from here (Instagram blocks automated fetching). I'll work from the vibe those reels usually carry — soft dusk gradients, glow, slow floating particles, gentle scroll reveals — rather than guessing at specifics. If you can screenshot 2–3 frames from each reel and drop them in, I'll match colors and motion exactly.

## Visual direction

Move away from the flat kraft-paper look toward a "dusk letter" aesthetic:

- Background: deep plum → rose → warm amber gradient that slowly shifts, with soft blurred glow orbs (bokeh) drifting behind content, plus a subtle grain overlay.
- Content sits on frosted glass cards with warm cream text — layered depth instead of flat sections.
- Typography: an elegant display serif for headings (used for "I'm sorry, Sanju"), a handwritten script for the letter itself, clean sans for body.
- Accents: rose-gold gradients, soft glow on the heart frame, film-grain polaroid edges.

## Motion

- Envelope intro: seal cracks, flap swings open in 3D, letter slides up, screen dissolves into the page.
- Scroll: each section fades and rises into view as it enters the viewport; images do a slow parallax drift.
- Ambient layer: floating hearts, sparkles, tiny dogs/penguins and drifting clouds (kept from the current version, but softer and lower-opacity so they read as atmosphere, not clutter).
- Heart frame gently pulses; stickers tilt on hover; polaroid rotates slightly on scroll.
- "Yes" → burst of hearts + petals, screen glow, hug reveal.
- All motion respects `prefers-reduced-motion`.

## Content flow (unchanged, restyled)

1. Envelope intro — "a letter for Sanju"
2. Hero — heart-framed photo, "I'm sorry, Sanju.", intro line, "Vishu ❤ Sanju"
3. The letter — handwritten script on a paper card
4. Sticker strip — 4 stickers with captions
5. Video — "a little proof of us", in a framed player
6. Tattoo — "this is permanent"
7. Mountains polaroid
8. "So… do you forgive me?" — Yes / Not yet, dodging button, Bow Bow plea popup, hug reveal
9. Footer

## Technical notes

- Extract your uploaded zip and register each image + the mp4 as project assets, imported directly in code (no binaries committed into the repo).
- Build it as the site's home route (`/`) so the preview and published URL show it — you can publish straight from Lovable and share that link with her, no Netlify/Vercel step needed.
- Split into small components (Envelope, Hero, Letter, Stickers, VideoSection, Tattoo, Polaroid, ForgiveSection, DoodleLayer) plus a shared ambient background.
- Colors, gradients, glows and fonts defined as design tokens in `src/styles.css`; fonts loaded via `<link>` in the root route.
- Page metadata: title "Sorry, Sanju", matching description and social preview tags.
