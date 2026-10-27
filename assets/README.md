# Profile artwork

These self-contained SVGs are used by the [profile README](../README.md).

- `hero.svg`: animated technical identity / editor panel.
- `engineering.svg`: animated four-stage engineering workflow.
- `footer.svg`: animated closing banner.
- `*-still.svg`: static counterparts for visitors requesting reduced motion.

All assets are authored in SVG with **declarative SMIL animations** (no JavaScript, external fonts, APIs or dynamic data). The README uses `<picture>` to provide reduced-motion variants. The non-animated artwork remains legible if the browser blocks SMIL. Any updates should keep matching animated/static pairs and accessible alt text.

Theme colors: midnight `#080D1B`, cyan `#5CE1CE`, violet `#A78BFA`, amber `#FFC078`.
