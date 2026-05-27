1. Upravit `index.html`:
   - Změnit `<title>` z "Lovable App" na "Fyzioterapie Šumperk"
   - Odstranit nebo změnit `meta name="author" content="Lovable"`
   - Odstranit nebo změnit `meta name="description" content="Lovable Generated Project"`
   - Aktualizovat `og:title`, `og:description`, `og:image`
   - Odstranit `twitter:site` a `twitter:image`

2. Upravit `vite.config.ts`:
   - Odstranit import a použití pluginu `componentTagger` z `lovable-tagger`

3. Upravit `package.json`:
   - Odstranit závislost `lovable-tagger` z `devDependencies`

4. Upravit `package-lock.json`:
   - Odstranit záznamy související s `lovable-tagger`