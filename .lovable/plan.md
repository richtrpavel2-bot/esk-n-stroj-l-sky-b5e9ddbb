## Plán: Úprava úvodního textu a odstranění zmínek o Lovable

### 1. Upravit hero sekci na úvodní stránce
V souboru `src/pages/Index.tsx` změním text v komponentě `Hero`:
- Stávající `<h1>` „Vracíme vám radost z každého kroku doma, na horách i v práci.“ nahradím za **„Náš tým Vám vrací radost z pohybu bez bolesti.“**
- Stávající podnadpis (odstavec pod `<h1>`) nahradím za **„Dbáme na komplexní přístup v terapiích tak, abyste se cítili co nejlépe jak v běžném denním životě, tak ve volnočasových aktivitách.“**
- CTA tlačítko „Rezervovat termín v Šumperku“ a vizuální styl zůstanou stejné.

### 2. Srovnat meta popisky v `index.html`
Aktuálně `og:description` obsahuje starou větu „Vracíme vám radost z každého kroku.“. Aktualizuji ho na nový krátký popis, aby byl konzistentní s webem. Základní `<meta name="description">` už obsahuje smysluplný popis, ten ponechám, pouze ho případně doladím, pokud bude vhodnější nové znění.

### 3. Odstranit všechny zmínky o Lovable
Projdu projekt a odstraním veškeré viditelné zmínky „Lovable“:
- V textech, komentářích, zdrojovém kódu, metadatech a konfiguračních souborech (`.tsx`, `.ts`, `.html`, `.md`, `.css` atd.).
- V kódu žádné zmínky nejsou, zůstávají pouze v lockfiles (`bun.lock`, `package-lock.json`) jako interní odkazy npm registru – ty se přegenerují automaticky a do běhu webu se nedostanou, ale přesto zkontroluji, zda není nějaká viditelná stopa v `README.md` nebo jinde.
- Pokud najdu nějakou viditelnou zmínku, odstraním ji nebo nahradím obecným textem.

### Co se nemění
- Layout, barvy, fonty, fotky týmů, kurzy, FAQ, kontakt.
- Struktura navigace a CTA tlačítko.