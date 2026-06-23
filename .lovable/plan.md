## Co udělám

Zakomponuju 6 fotek paní Pličkové do její karty v sekci „Naše spolupracovnice" na hlavní stránce.

### 1. Banner nahoře v kartě
- **image5.jpeg** (kineziotaping na rameni) jako široký banner v horní části karty, aspect 4:3, zaoblené horní rohy.

### 2. Mini-galerie „Z mé praxe" uvnitř karty
- Pod text profilu přidám sekci se zbývajícími 5 fotkami v gridu (3+2 na desktopu, 2 sloupce na mobilu).
- Klik na fotku otevře lightbox (shadcn `Dialog`).
- Lazy loading, popisky `alt`:
  - 4× „Práce s dětským pacientem na proprioceptivních podložkách"
  - 1× „Elektroléčba krční páteře"

### 3. Layout 3 karet zůstává
Karta Pličkové bude vyšší než Morávková a Krylová – grid si s tím poradí, karty se zarovnají nahoře.

### 4. Technické detaily
- Fotky nahraju přes `lovable-assets` CLI na CDN (nezvětší repo), pointery uložím do `src/assets/plickova/`.
- Mění se jen třetí `<article>` v komponentě `ColleagueProfiles` v `src/pages/Index.tsx`.

Pokud později pošleš klasický portrét (hlava + ramena), snadno ho doplním nad jméno.
