## Problém

Fotky z karty paní Pličkové se nezobrazují na Netlify, protože `.asset.json` ukazují na URL `/__l5e/assets-v1/...`. Tyto URL fungují jen na Lovable hostingu — Netlify tuto cestu neumí obsloužit a vrátí 404.

## Řešení

### 1. Stáhnout fotky z CDN zpět do repozitáře
Šest fotek Pličkové (`S_klukem_cvicime_1–4`, `Se_zenou_na_luzku`, `Se_zenou_na_luzku_2`) stáhnu z Lovable CDN a uložím jako skutečné soubory `.jpeg` do `src/assets/plickova/`. Smažu odpovídající `.asset.json` pointery.

### 2. Přepnout importy v `src/pages/Index.tsx`
Změním importy z `.asset.json` (přes `.url`) na klasické Vite asset importy:
```ts
import sKlukem1 from "@/assets/plickova/S_klukem_cvicime_1.jpeg";
```
Vite je při buildu zahrne s hashovaným názvem do `/assets/` — funguje všude (Netlify, Vercel, Lovable).

### 3. Změnit hlavní banner Pličkové
Banner nad seznamem kurzů přepnu z `S_klukem_cvicime_1.jpeg` na `Se_zenou_na_luzku_2.jpeg`. Uvolněnou fotku `S_klukem_cvicime_1` přesunu do mini-galerie „Z mé praxe" (bude tam 6 fotek místo 5, grid zůstává `grid-cols-2 md:grid-cols-3`).

## Co se nemění
- Žádné jiné sekce webu, žádný styl, žádné texty.
- Ostatní obrázky (hero, logo, recepce, cvičení, Hůlková) — ty už jsou bundlované přes Vite a na Netlify fungují.
