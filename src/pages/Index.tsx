import { useState } from "react";
import { Menu, X, Phone, MapPin, Clock, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur border-b">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="#uvod" className="font-serif text-xl font-bold text-foreground" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
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

const TeamProfile = () => (
  <section className="py-20 md:py-28 bg-card">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="flex justify-center">
          <img
            src="/hulkova.png"
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
    <Services />
    <FAQ />
    <Contact />
    <Footer />
  </div>
);

export default Index;
