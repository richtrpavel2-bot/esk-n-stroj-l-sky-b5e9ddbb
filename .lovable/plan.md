## Co udělám

**1. Smazat staré assety** (6 souborů v `src/assets/plickova/`):
- `image5.jpeg`, `IMG_4736`, `IMG_4743`, `IMG_4766`, `IMG_4777`, `IMG_4809` (.asset.json)

**2. Nahrát 5 nových fotek** přes `lovable-assets` CLI s českými názvy:
- `S_klukem_cvicime_1.jpeg` — chlapec stojí na puzzle, fyzio vede koleno (široký, vhodný jako banner)
- `S_klukem_cvicime_2.jpeg` — chlapec v podporu klečmo na puzzle
- `S_klukem_cvicime_3.jpeg` — chlapec stojí na ježkové podložce, fyzio drží chodidlo
- `Se_zenou_na_luzku.jpeg` — terapie pomocí přístroje (laser/ultrazvuk) na rameni
- `Se_zenou_na_luzku_2.jpeg` — kineziotaping ramene u ležící pacientky

**3. Upravit `src/pages/Index.tsx`:**
- Banner: `S_klukem_cvicime_1.jpeg` (široký, dobře vyplní 4:3)
- Galerie „Z mé praxe": zbylé 4 fotky v gridu 2×2 (desktop i mobil). Až přijde 6., přidá se třetí sloupec / třetí řádek.
- `alt` texty přesnější:
  - 3× „Cvičení s dětským pacientem na proprioceptivních podložkách"
  - 1× „Terapie přístrojem na rameno"
  - 1× „Kineziotaping ramene"
- Lightbox (Dialog), `loading="lazy"` zůstávají.

**4. Až později pošleš 6. fotku** — jednoduše doplním do galerie (např. jako portrét nad jméno, pokud to bude portrét, nebo do gridu).

## Technicky
- Žádná změna logiky ani jiných sekcí.
- Mění se: 6 starých `.asset.json` (smazat), 5 nových `.asset.json` (vytvořit), importy a `PLICKOVA_GALLERY` v `src/pages/Index.tsx`, `<img>` banneru.
