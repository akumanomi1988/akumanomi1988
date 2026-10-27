# SVG profile assets

All files are self-hosted, dependency-free SVG artwork for the [profile README](../README.md).

- `hero.svg`: animated introduction.
- `engineering.svg`: desktop/web/data/automation overview.
- `projects/*.svg`: animated, clickable project cards (wrapped in links in the README).
- `footer.svg`: closing banner.
- Every animated SVG has a matching `-still.svg` for reduced-motion preferences.

These SVGs use declarative SMIL motion, not JavaScript. GitHub does not allow arbitrary scripts or custom interactive web applications inside profile READMEs. The interaction comes from native links, expandable `<details>` panels and section navigation; animation support depends on the rendering client.

Palette: `#080D1B` (midnight), `#5CE1CE` (aqua), `#A78BFA` (violet), `#FFC078` (amber).
