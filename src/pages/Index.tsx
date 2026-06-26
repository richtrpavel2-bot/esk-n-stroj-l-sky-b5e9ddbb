import { useState } from "react";
import { Menu, X, Phone, MapPin, Clock, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";

import plickova1 from "@/assets/plickova/S_klukem_cvicime_1.jpeg";
import plickova2 from "@/assets/plickova/S_klukem_cvicime_2.jpeg";
import plickova3 from "@/assets/plickova/S_klukem_cvicime_3.jpeg";
import plickova4 from "@/assets/plickova/S_klukem_cvicime_4.jpeg";
import plickova5 from "@/assets/plickova/Se_zenou_na_luzku.jpeg";
import plickovaBanner from "@/assets/plickova/Se_zenou_na_luzku_2.jpeg";
import krylovaBanner from "@/assets/krylova/Se_sedicim_muzem.jpeg";
import krylova1 from "@/assets/krylova/S_lezicim_muzem.jpeg";
import krylova2 from "@/assets/krylova/S_muzem_pred_zrcadlem.jpeg";
import krylova3 from "@/assets/krylova/Se_stojicim_muzem.jpeg";
import moravkovaBanner from "@/assets/moravkova/uvodni_foto.jpeg";
import moravkova1 from "@/assets/moravkova/IMG_5031.jpeg";
import moravkova2 from "@/assets/moravkova/IMG_5039.jpeg";
import moravkova3 from "@/assets/moravkova/IMG_5119.jpeg";

const KRYLOVA_GALLERY = [
  { src: krylova1, alt: "Terapie zad rázovou vlnou" },
  { src: krylova2, alt: "Cvičení stability na gymnastickém míči před zrcadlem" },
  { src: krylova3, alt: "Nácvik stoje a držení těla s therabandem" },
];

const MORAVKOVA_GALLERY = [
  { src: moravkova1, alt: "Nácvik vzporu klečmo a stabilizace trupu" },
  { src: moravkova2, alt: "Korekce protažení v hlubokém výpadu" },
  { src: moravkova3, alt: "Aplikace kineziologického tejpu na lýtko" },
];

const PLICKOVA_GALLERY = [
  { src: plickova1, alt: "Cvičení s dětským pacientem na puzzle podložce" },
  { src: plickova2, alt: "Cvičení s dětským pacientem na proprioceptivních podložkách" },
  { src: plickova3, alt: "Cvičení s dětským pacientem na proprioceptivních podložkách" },
  { src: plickova4, alt: "Nácvik stoje a držení těla u dětského pacienta" },
  { src: plickova5, alt: "Terapie přístrojem na rameno" },
];


const NAV_ITEMS = [
  { label: "Úvod", href: "#uvod" },
  { label: "O nás", href: "#o-nas" },
  { label: "Služby", href: "#sluzby" },
  { label: "Časté dotazy", href: "#faq" },
  { label: "Kontakt", href: "#kontakt" },
];

const METHODS = [
  "Individuální léčebná tělesná výchova",
  "Mobilizace a měkké techniky",
  "Kinesiotaping",
  "Dynamická neuromuskulární stabilizace",
  "Metoda Ludmily Mojžíšové",
  "Senzomotorika",
  "Spirální stabilizace SM systém",
  "Cvičení na míčích",
  "Metoda R. Brunkow",
  "McKenzie – mechanická diagnostika a terapie",
  "Vestibulární rehabilitace – terapie závratí",
  "Dynamika myofasciálních řetězců",
  "Elektroléčba, UZ, magnetoterapie",
  "Vodoléčba – vířivá koupel HK a DK",
];

const COURSES = [
  "Míčková facilitace",
  "Bazální programy ve fyzioterapii",
  "Metodika senzomotorické stimulace",
  "Diagnostika a terapie funkčních poruch (manuální medicína) pro fyzioterapeuty",
  "Terapeutické využití Temtex tapu",
  "Rehabilitační léčba některých druhů funkční ženské sterility metodou L. Mojžíšové",
  "McKenzie metoda – mechanická diagnostika a terapie – části A–E",
  "Základy vestibulární rehabilitace",
];

const PLICKOVA_COURSES = [
  "Měkké a mobilizační techniky",
  "Metodika dle Ludmily Mojžíšové",
  "DNS – dynamická neuromuskulární stabilizace dle Pavla Koláře",
  "McKenzie – části A, B, C, D, E",
  "KT – kraniosakrální terapie 1, 2",
  "Viscerální manipulace",
  "SM systém – cvičení s pružnými lany dle Smíška",
  "Kurz kineziotejpingu",
  "Cvičení na velkých míčích",
  "Rehabilitace v těhotenství",
  "Kurz vestibulární rehabilitace",
  "Certifikovaný lektor jógy",
  "Certifikovaný lektor čchi-kungu",
];

const MORAVKOVA_COURSES = [
  "SM systém – kurz 2A, 2B",
  "Terapeutické využití kineziologických tejpů",
  "Škola pánevního dna – metoda 3×3",
  "Rehabilitační léčba některých druhů ženské sterility metodou L. Mojžíšové",
  "Diagnostika a terapie funkčních poruch (manuální medicína) pro fyzioterapeuty",
  "Manuální lymfodrenáž pro fyzioterapeuty",
  "DNS – Dynamická neuromuskulární stabilizace dle prof. Koláře (A, B, C)",
  "DMR – Dynamika myofasciálních řetězců v diagnostice a terapii",
  "Mobilizace v kontextu svalových řetězců",
  "Komplexní terapie pletence ramenního",
  "Jógové pozice u skolióz a VDT",
  "Využití jógy ve fyzioterapii",
  "Myofasciální trigger pointy",
  "Tradiční čínská medicína a fytoterapie",
  "Baňkování a moxování",
  "Reflexní terapie",
  "Bachovy esence",
];

const KRYLOVA_COURSES = [
  "McKenzie metoda – mechanická diagnostika a terapie, část A–E",
  "Aplikace metody Roswithy Brunkow",
  "Rehabilitační léčba některých druhů funkční ženské sterility metodou L. Mojžíšové",
  "Komplexní terapie pletence ramenního",
  "Stabilita v pohybovém systému a hluboký stabilizační systém",
  "Dornova metoda a Breussova masáž",
  "Kurz cvičení SM systém – úvodní + pro pokročilé",
  "Terapeutické využití kinesiotapu",
  "Komplexní přístup k diagnostice a terapii nosných kloubů",
  "Trénink neuromuskulární propriocepce",
  "Terapie skolióz podle Schrothové",
  "Kurz akvaaerobiku",
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur border-b">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#uvod" className="flex items-center gap-2 font-serif text-xl font-bold text-foreground" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
          <img src="/logo.png" alt="Logo" className="h-10 w-auto" />
          Fyzioterapie Šumperk
        </a>
        <nav className="hidden md:flex gap-6">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {open && (
        <nav className="md:hidden border-t bg-background px-4 pb-4">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm text-muted-foreground hover:text-primary border-b border-border last:border-0"
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

const Hero = () => (
  <section id="uvod" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0">
      <img
        src="/hero.jpg"
        alt="Fyzioterapeutka pracuje s pacientem"
        className="w-full h-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-foreground/50" />
    </div>
    <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
      <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
        Vracíme vám radost z&nbsp;každého kroku doma, na&nbsp;horách i&nbsp;v&nbsp;práci.
      </h1>
      <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed">
        Pocit ztuhlosti nebo nepohodlí je jen signál, že něco nefunguje správně.
        Uvolníme vaše blokády a naučíme vás, jak se o sebe každý den starat.
      </p>
      <Button size="lg" className="text-base px-8 py-6 rounded-full font-semibold shadow-lg" asChild>
        <a href="#kontakt">Rezervovat termín v Šumperku</a>
      </Button>
    </div>
    <a
      href="#o-nas"
      className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 hover:text-white animate-bounce"
      aria-label="Pokračovat dolů"
    >
      <ChevronDown className="w-8 h-8" />
    </a>
  </section>
);

const About = () => (
  <section id="o-nas" className="py-20 md:py-28">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">O nás</h2>
      <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
        Jsme soukromé rehabilitační zařízení zaměřené na komplexní péči o váš pohybový aparát.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img
            src="/recepce.jpg"
            alt="Recepce – objednání pacienta"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img
            src="/cviceni.jpg"
            alt="Cvičení s fyzioterapeutkou na míči"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div>
          <h3 className="text-2xl font-semibold mb-4">Náš tým</h3>
          <p className="text-muted-foreground mb-4 leading-relaxed">
            O vaše zdraví se stará tým čtyř zkušených fyzioterapeutek:
          </p>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
              Mgr. Hana Hůlková
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
              Lenka Pličková
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
              Mgr. Simona Krylová
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
              Mgr. Michaela Morávková
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4">S čím vám pomůžeme</h3>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
              Poúrazové a pooperační stavy – vrátíte se rychleji do formy
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
              Neurologická onemocnění – zlepšíte koordinaci a stabilitu
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
              Ortopedické a vertebrogenní potíže – zbavíte se bolesti zad a kloubů
            </li>
          </ul>
          <p className="text-sm text-muted-foreground mt-6">
            Léčbu provádíme na doporučení praktických, rehabilitačních a odborných lékařů.
          </p>
        </div>
      </div>

      {/* Pojišťovny */}
      <div className="bg-card rounded-2xl p-8 text-center border">
        <h3 className="text-xl font-semibold mb-3">Smluvní pojišťovny</h3>
        <p className="text-muted-foreground mb-4 text-sm">
          Máme smluvní vztah s těmito zdravotními pojišťovnami:
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {["111", "205", "211", "201", "207", "213"].map((code) => (
            <span
              key={code}
              className="bg-primary/10 text-primary font-semibold px-4 py-2 rounded-full text-sm"
            >
              {code}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const ColleagueProfiles = () => (
  <section className="py-20 md:py-28">
    <div className="container mx-auto px-4 max-w-5xl">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Naše spolupracovnice</h2>
      <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
        Tým doplňují další zkušené fyzioterapeutky s vlastní odbornou specializací.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Pličková */}
        <article className="bg-card border rounded-2xl shadow-sm overflow-hidden">
          <img
            src={plickovaBanner}
            alt="Lenka Pličková při terapii pacientky na lůžku"
            loading="lazy"
            className="w-full aspect-[4/3] object-cover"
          />
          <div className="p-8">
            <h3 className="text-2xl font-bold mb-1">Lenka Pličková</h3>
            <p className="text-primary font-medium mb-6">Atestovaná fyzioterapeutka, vedoucí fyzioterapeutka</p>

            <h4 className="text-base font-semibold mb-2">Vzdělání</h4>
            <ul className="space-y-2 text-muted-foreground mb-5 text-sm">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                4letý maturitní obor rehabilitační pracovník
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                Dvouleté atestační studium v oboru fyzioterapie
              </li>
            </ul>

            <h4 className="text-base font-semibold mb-2">Praxe</h4>
            <p className="text-muted-foreground mb-5 text-sm leading-relaxed">
              Lázně Velké Losiny – respirační fyzioterapie dětí; soukromá ambulance fyzioterapie Šumperk.
              Více než 20 let praxe ve vedených lekcích jógy a SM systému.
            </p>

            <h4 className="text-base font-semibold mb-2">Kurzy</h4>
            <ul className="space-y-1.5 text-muted-foreground text-sm mb-6">
              {PLICKOVA_COURSES.map((c) => (
                <li key={c} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  {c}
                </li>
              ))}
            </ul>

            <h4 className="text-base font-semibold mb-3">Z mé praxe</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {PLICKOVA_GALLERY.map((img, i) => (
                <Dialog key={i}>
                  <DialogTrigger asChild>
                    <button
                      type="button"
                      className="block overflow-hidden rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <img
                        src={img.src}
                        alt={img.alt}
                        loading="lazy"
                        className="w-full aspect-square object-cover transition-transform hover:scale-105"
                      />
                    </button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl p-0 bg-transparent border-0 shadow-none">
                    <DialogTitle className="sr-only">{img.alt}</DialogTitle>
                    <img src={img.src} alt={img.alt} className="w-full h-auto rounded-lg" />
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </div>
        </article>


        {/* Morávková */}
        <article className="bg-card border rounded-2xl shadow-sm overflow-hidden">
          <img
            src={moravkovaBanner}
            alt="Michaela Morávková při terapii – vzpor klečmo"
            loading="lazy"
            className="w-full aspect-[4/3] object-cover"
          />
          <div className="p-8">
            <h3 className="text-2xl font-bold mb-1">Mgr. Michaela Morávková</h3>
            <p className="text-primary font-medium mb-6">Fyzioterapeutka</p>

            <h4 className="text-base font-semibold mb-2">Vzdělání</h4>
            <ul className="space-y-2 text-muted-foreground mb-5 text-sm">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                Univerzita Palackého v Olomouci, Fakulta zdravotnických věd – Fyzioterapie (Bc.)
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                Trenčianska univerzita A. Dubčeka, Fakulta zdravotníctva – Fyzioterapie (Mgr.)
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                Tradiční čínská medicína v Brně
              </li>
            </ul>

            <h4 className="text-base font-semibold mb-2">Praxe</h4>
            <p className="text-muted-foreground mb-5 text-sm leading-relaxed">
              Remedic rehabilitace s.r.o., Lázně Velké Losiny s.r.o., Ungerová – rehabilitace s.r.o.,
              Fyzioterapie Šumperk s.r.o.
            </p>

            <h4 className="text-base font-semibold mb-2">Odborné kurzy</h4>
            <ul className="space-y-1.5 text-muted-foreground text-sm mb-6">
              {MORAVKOVA_COURSES.map((c) => (
                <li key={c} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  {c}
                </li>
              ))}
            </ul>

            <h4 className="text-base font-semibold mb-3">Z mé praxe</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {MORAVKOVA_GALLERY.map((img) => (
                <Dialog key={img.src}>
                  <DialogTrigger asChild>
                    <button
                      type="button"
                      className="block overflow-hidden rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <img
                        src={img.src}
                        alt={img.alt}
                        loading="lazy"
                        className="w-full aspect-square object-cover transition-transform hover:scale-105"
                      />
                    </button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl p-0 bg-transparent border-0 shadow-none">
                    <DialogTitle className="sr-only">{img.alt}</DialogTitle>
                    <img src={img.src} alt={img.alt} className="w-full h-auto rounded-lg" />
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </div>
        </article>

        {/* Krylová */}
        <article className="bg-card border rounded-2xl shadow-sm overflow-hidden">
          <img
            src={krylovaBanner}
            alt="Simona Krylová při terapii ramenního kloubu"
            loading="lazy"
            className="w-full aspect-[4/3] object-cover"
          />
          <div className="p-8">
            <h3 className="text-2xl font-bold mb-1">Mgr. Simona Krylová</h3>
            <p className="text-primary font-medium mb-6">Fyzioterapeutka</p>

            <h4 className="text-base font-semibold mb-2">Vzdělání</h4>
            <ul className="space-y-2 text-muted-foreground mb-5 text-sm">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                SZŠ a VZŠ Ostrava – Diplomovaný fyzioterapeut (2020)
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                Ostravská univerzita, Zdravotně sociální fakulta – Léčebná rehabilitace a fyzioterapie (2003)
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                Masarykova univerzita Brno, Lékařská fakulta – Léčebná rehabilitace a fyzioterapie (2005)
              </li>
            </ul>

            <h4 className="text-base font-semibold mb-2">Praxe</h4>
            <p className="text-muted-foreground mb-5 text-sm leading-relaxed">
              Lázně Velké Losiny, Fyzioterapie Šumperk s.r.o.
            </p>

            <h4 className="text-base font-semibold mb-2">Odborné kurzy</h4>
            <ul className="space-y-1.5 text-muted-foreground text-sm mb-6">
              {KRYLOVA_COURSES.map((c) => (
                <li key={c} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  {c}
                </li>
              ))}
            </ul>

            <h4 className="text-base font-semibold mb-3">Z mé praxe</h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {KRYLOVA_GALLERY.map((img, i) => (
                <Dialog key={i}>
                  <DialogTrigger asChild>
                    <button
                      type="button"
                      className="block overflow-hidden rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <img
                        src={img.src}
                        alt={img.alt}
                        loading="lazy"
                        className="w-full aspect-square object-cover transition-transform hover:scale-105"
                      />
                    </button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl p-0 bg-transparent border-0 shadow-none">
                    <DialogTitle className="sr-only">{img.alt}</DialogTitle>
                    <img src={img.src} alt={img.alt} className="w-full h-auto rounded-lg" />
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
);

const TeamProfile = () => (
  <section className="py-20 md:py-28 bg-card">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="flex justify-center">
          <img
            src="/hero.jpg"
            alt="Mgr. Hana Hůlková"
            className="rounded-2xl shadow-lg max-w-sm w-full object-cover"
          />
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Mgr. Hana Hůlková</h2>
          <p className="text-primary font-medium mb-6">Vedoucí fyzioterapeutka</p>

          <h3 className="text-xl font-semibold mb-3">Vzdělání</h3>
          <ul className="space-y-2 text-muted-foreground mb-6">
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
              Ostravská univerzita – Léčebná rehabilitace a fyzioterapie
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
              Univerzita Palackého v Olomouci – Klinická kineziologie a kinezioterapie
            </li>
          </ul>

          <h3 className="text-xl font-semibold mb-3">Praxe</h3>
          <p className="text-muted-foreground mb-6 leading-relaxed">
            Vítkovická nemocnice Ostrava, Ústřední vojenská nemocnice Praha,
            Šumperská nemocnice, Fyzioterapie Šumperk s.r.o. (od 2016 doposud)
          </p>

          <h3 className="text-xl font-semibold mb-3">Odborné kurzy</h3>
          <ul className="space-y-2 text-muted-foreground">
            {COURSES.map((course) => (
              <li key={course} className="flex items-start gap-2">
                <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                {course}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const Services = () => (
  <section id="sluzby" className="py-20 md:py-28">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">Léčebné metody</h2>
      <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
        Používáme moderní i osvědčené postupy, které přizpůsobíme přesně vašim potřebám.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {METHODS.map((method, i) => (
          <div
            key={method}
            className="bg-card border rounded-xl p-5 hover:border-primary/50 hover:shadow-md transition-all"
          >
            <div className="flex items-start gap-3">
              <span className="text-primary font-bold text-lg mt-0.5">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-foreground font-medium text-sm leading-relaxed">
                {method}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FAQ = () => (
  <section id="faq" className="py-20 md:py-28 bg-card">
    <div className="container mx-auto px-4 max-w-3xl">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">Časté dotazy</h2>
      <Accordion type="single" collapsible className="space-y-3">
        <AccordionItem value="objednani" className="bg-background rounded-xl border px-6">
          <AccordionTrigger className="text-left text-base font-medium">
            Jak se mohu objednat na rehabilitaci?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground leading-relaxed">
            <p className="mb-3">
              Nové pacienty objednáváme <strong>pouze osobně na recepci</strong>, a to v&nbsp;následujících hodinách:
            </p>
            <div className="bg-card rounded-lg p-4 inline-block">
              <div className="flex items-center gap-2 text-foreground font-medium">
                <Clock className="w-4 h-4 text-primary" />
                Pondělí – Čtvrtek: 7:00 – 13:00
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="kde" className="bg-background rounded-xl border px-6">
          <AccordionTrigger className="text-left text-base font-medium">
            Kde se pracoviště nachází?
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground leading-relaxed">
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-primary mt-1 shrink-0" />
              <p>
                <strong>M. R. Štefánika 3, Šumperk</strong>
                <br />
                Růžová budova ve dvoře polikliniky
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  </section>
);

const Contact = () => (
  <section id="kontakt" className="py-20 md:py-28">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">Kontakt</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
        <div className="bg-card border rounded-2xl p-8 text-center">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <MapPin className="w-6 h-6 text-primary" />
          </div>
          <h3 className="font-semibold mb-2">Adresa</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            M. R. Štefánika 3<br />
            787 01 Šumperk<br />
            <span className="text-xs">(růžová budova ve dvoře polikliniky)</span>
          </p>
        </div>
        <div className="bg-card border rounded-2xl p-8 text-center">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Clock className="w-6 h-6 text-primary" />
          </div>
          <h3 className="font-semibold mb-2">Objednávky</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Osobně na recepci<br />
            Po – Čt: 7:00 – 13:00
          </p>
        </div>
        <div className="bg-card border rounded-2xl p-8 text-center">
          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Phone className="w-6 h-6 text-primary" />
          </div>
          <h3 className="font-semibold mb-2">Fyzioterapie Šumperk s.r.o.</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Soukromé rehabilitační zařízení<br />
            zaměřené na komplexní péči<br />
            o pohybový aparát
          </p>
        </div>
      </div>
      <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden border shadow-sm">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2567.5!2d16.9697!3d49.9653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47134c1b1b1b1b1b%3A0x0!2sM.+R.+%C5%A0tef%C3%A1nika+3%2C+787+01+%C5%A0umperk!5e0!3m2!1scs!2scz!4v1700000000000"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Mapa – Fyzioterapie Šumperk"
        />
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="border-t py-8">
    <div className="container mx-auto px-4 text-center">
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Fyzioterapie Šumperk s.r.o. Všechna práva vyhrazena.
      </p>
    </div>
  </footer>
);

const Index = () => (
  <div className="scroll-smooth">
    <Header />
    <Hero />
    <About />
    <TeamProfile />
    <ColleagueProfiles />
    <Services />
    <FAQ />
    <Contact />
    <Footer />
  </div>
);

export default Index;
