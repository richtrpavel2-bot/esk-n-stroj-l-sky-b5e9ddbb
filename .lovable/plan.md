## Co udělám

### 1. README.md – pryč s Lovable
Přepíšu na:
```
# Fyzioterapie Šumperk s.r.o. – web

Jednostránková prezentace soukromého rehabilitačního zařízení v Šumperku.
Postaveno na Vite + React + Tailwind.
```

### 2. Fotky Pličkové do karty „Naše spolupracovnice"
**Fotky zatím v chatu nejsou** – v příloze vidím jen starší soubory (Cvičení.jpg, Recepce.jpg, hulkovi_3.png, logo.png, Řeči_Pličkové.docx), žádný nový portrét. Bez originálů nemůžu nic vložit.

Jakmile fotky pošleš (stačí přetáhnout do chatu), provedu toto:

- **1 fotka (portrét)** – nahoru do karty Pličkové, kruhový ořez ~160 px, nad jméno. Stejný styl pak doplním i k Morávkové a Krylové, aby karty zůstaly vizuálně konzistentní (u nich použiji iniciály nebo necháš dodat).
- **2–3 fotky** – portrét nahoru + zbytek pod profil jako malou galerii (grid 2 sloupce, zaoblené rohy, lazy loading).
- **Více fotek** – portrét + carousel/lightbox pod profilem.

Fotky nahraju přes `lovable-assets` CLI (CDN), abych nezvětšoval repo, a v `src/pages/Index.tsx` upravím třetí `<article>` v `ColleagueProfiles`.

### 3. Co potřebuji od tebe
- **Přilož fotky do dalšího chatu.** Napiš krátce, která je portrét a co je na ostatních (cvičení, ordinace, …), ať volím správné popisky `alt=""`.

---

### Technické detaily
- Soubor: `src/pages/Index.tsx`, sekce `ColleagueProfiles` (~ř. 380–500).
- README: `README.md`.
- Layout karet zůstává `md:grid-cols-2 lg:grid-cols-3`.