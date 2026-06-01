## Plán: Přidání profilu Mgr. Simony Krylové

### Cíl
Doplnit třetí spolupracovnici (Mgr. Simona Krylová) do stávající sekce "Naše spolupracovnice" na webu.

### Změny

1. **Nová konstanta s kurzy**
   Vytvořit `KRYLOVA_COURSES` v `src/pages/Index.tsx` s 12 kurzy dle dodaného seznamu.

2. **Upravit layout**
   Změnit grid v `ColleagueProfiles` z `md:grid-cols-2` na `md:grid-cols-3`, aby se tři profily vešly vedle sebe.

3. **Přidat kartu**
   Vložit nový `<article>` pro Simonu Krylovou mezi Morávkovou a Pličkovou (nebo na konec) s následujícím obsahem:
   - Jméno: Mgr. Simona Krylová
   - Povolání: Fyzioterapeutka
   - Vzdělání: 3 položky (SZŠ Ostrava, OU Ostrava, MU Brno)
   - Praxe: Lázně Velké Losiny, Fyzioterapie Šumperk s.r.o.
   - Odborné kurzy: 12 položek ze seznamu

4. **Responsivita**
   Ověřit, že na mobilu se karty zobrazují pod sebou a na tabletu/desktopu vedle sebe.

### Soubory
- `src/pages/Index.tsx` – jediný upravovaný soubor