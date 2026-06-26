## Plán: Fotky Mgr. Michaely Morávkové

### 1. Konverze HEIC → JPEG
HEIC formát prohlížeče nezobrazí. Všechny 4 fotky převedu pomocí ImageMagick/heif na JPEG a uložím do `src/assets/moravkova/` jako reálné soubory (stejný postup jako u Pličkové a Krylové, aby fungovaly na Netlify):
- `uvodni_foto.jpeg` — hlavní banner
- `IMG_5031.jpeg` — galerie
- `IMG_5039.jpeg` — galerie
- `IMG_5119.jpeg` — galerie

### 2. Úprava karty Morávkové v `src/pages/Index.tsx`
- Banner navrchu karty: `uvodni_foto.jpeg`
- Pod seznam kurzů přidat mini-galerii „Z mé praxe" se 3 zbylými fotkami v gridu `grid-cols-2 md:grid-cols-3` + lightbox (shadcn Dialog) — stejný vzor jako Pličková/Krylová
- Alt texty doplním podle obsahu fotek (po konverzi se na ně podívám)

### 3. Doplnit kurz „Bachovy esence"
Přidám do konstanty `MORAVKOVA_COURSES` v `src/pages/Index.tsx`.

### 4. Odmazat zmínky o Lovable
Projdu celý projekt (`rg -i lovable`) a odstraním všechny zbylé zmínky v textech/komentářích/metadatech. Soubory typu `package.json`, `vite.config.ts`, `index.html`, `README.md` už byly upraveny dříve — překontroluji a doladím, co zbylo.

### Co se nemění
Texty, vzdělání ostatních terapeutek, layout, styl, barvy.