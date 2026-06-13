## Changes

**1. Magazine grid — fill row next to Project 1**
In `src/routes/index.tsx` and `src/routes/projects.index.tsx`, the first row currently shows Project 1 (`md` → col-span-3) leaving a 3-col gap (since Project 2 is `wide` → col-span-4, it wraps to row 2). Adjust spans so the first row fills 6 columns:

- Change Project 1 size to span 4 cols and Project 2 to span 2 cols (or 3+3) via the `size` field in `src/data/projects.ts`. Pick `lg` (col-span-4) for Project 1 and `md` (col-span-3) for Project 2 won't fit either — use **Project 1 = `wide` (col-span-4)** + **Project 2 = `sm`/`tall` (col-span-2)** so row 1 = 4+2 = 6.

**2. Equal-height card text boxes**
In `src/components/site/ProjectCard.tsx`, the text block uses `flex flex-col p-4` with variable content (description `line-clamp-2`, tools wrap). Make the text block fill remaining card height and pin the tools row to the bottom:

- Add `flex-1` to the text container.
- Push `.tools` row down with `mt-auto`.
  Combined with the existing `h-full` on the card, Project 2 & 3 text boxes will align.

**3. Remove Philosophy section**
In `src/routes/index.tsx`, delete the entire `<section>` block labelled `{/* DARK ACCENT — Philosophy band */}`.

**4. Header logo to the left edge**
In `src/components/site/Nav.tsx`, the nav is currently centered with horizontal padding. Move the "M" logo flush left:

- Either reduce left padding on the logo container, or restructure so the logo sits at `left-0` / `px-0` while the nav links stay in their current position.

Nothing else (typography, colors, hover styles, hero, other sections, routes) changes.
