## Plán: Fotky Mgr. Simony Krylové

Přidám 4 nové fotky do profilové karty Krylové ve stejném duchu jako u Pličkové.

### Kroky

1. **Uložit 4 fotky** do `src/assets/krylova/` jako reálné `.jpeg` soubory (ne `.asset.json`, aby fungovaly na Netlify — stejný postup jako u Pličkové):
   - `Se_sedicim_muzem.jpeg` — hlavní banner
   - `S_lezicim_muzem.jpeg` — galerie
   - `S_muzem_pred_zrcadlem.jpeg` — galerie
   - `Se_stojicim_muzem.jpeg` — galerie

2. **Upravit `src/pages/Index.tsx`** — v kartě Krylové:
   - Přidat banner navrchu karty (fotka `Se_sedicim_muzem.jpeg`, alt: „Simona Krylová při terapii ramene")
   - Pod seznam kurzů přidat mini-galerii „Z mé praxe" se 3 zbylými fotkami v gridu `grid-cols-2 md:grid-cols-3`, s klikem na zvětšený náhled (shadcn Dialog) — stejný komponent/vzor jako u Pličkové
   - Alt texty:
     - „Terapie zad rázovou vlnou"
     - „Cvičení stability na gymnastickém míči před zrcadlem"
     - „Nácvik stoje a držení těla s therabandem"

### Co se nemění
Texty, vzdělání, kurzy, layout ostatních karet (Hůlková, Morávková, Pličková), styl, barvy.
