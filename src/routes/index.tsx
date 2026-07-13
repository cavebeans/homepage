import { createFileRoute } from "@tanstack/react-router";
import { SITE, waLink } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "cavebeans — Bark to Bar, Bean to Brews" },
      {
        name: "description",
        content:
          "cavebeans — specialty coffee and fine chocolate. Consulting, roasting and craft. Browse the catalogue and order on chat.",
      },
      { property: "og:title", content: "cavebeans — Bark to Bar, Bean to Brews" },
      {
        property: "og:description",
        content:
          "Specialty coffee and fine chocolate. Consulting, roasting and craft. Order on chat.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const catalogueMsg =
  "Hi cavebeans! I'd like to see the product catalogue — please share what's currently available.";
const queryMsg = "Hi cavebeans! I have a question —";

const consultingServices = [
  {
    title: "Coffee Consulting",
    desc: "Sourcing, roast profiling, menu design, barista training and café setup — from green bean to a running bar.",
    tag: "Bean to Brews",
    cta: "Talk about coffee consulting",
    message:
      "Hi cavebeans! I'd like to discuss coffee consulting — sourcing / roasting / café setup.",
  },
  {
    title: "Chocolate Consulting",
    desc: "Bean-to-bar production, recipe development, sensory panels and small-batch craft chocolate systems.",
    tag: "Bark to Bar",
    cta: "Talk about chocolate consulting",
    message:
      "Hi cavebeans! I'd like to discuss chocolate consulting — bean-to-bar / recipes / production.",
  },
  {
    title: "Workshops & Training",
    desc: "Hands-on tastings, cuppings and craft workshops for teams, cafés and enthusiasts.",
    tag: "Craft",
    cta: "Enquire about workshops",
    message: "Hi cavebeans! I'd like to enquire about your workshops & training.",
  },
  {
    title: "Brand & Product",
    desc: "Product development, packaging direction and brand craft for coffee and chocolate makers.",
    tag: "Studio",
    cta: "Talk about brand & product",
    message:
      "Hi cavebeans! I'd like to discuss brand & product development for a coffee/chocolate project.",
  },
];

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Marquee />
      <Catalogue />
      <Consulting />
      <About />
      <Contact />
      <Footer />
      <ChatFab />
    </div>
  );
}

/* ---------- sections ---------- */

function Logo({ className = "h-9 w-auto" }: { className?: string }) {
  return <img src="/brew-chat-catalogue/images/cavebeans-logo.svg" alt="cavebeans" className={className} width={200} height={200} />;
}

function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-10">
        <a href="#top" className="flex items-center gap-2">
          <Logo className="h-9 w-9 object-contain" />
          <span className="text-lg font-bold tracking-tight">
            cavebeans<sup className="ml-0.5 text-[0.55em] font-normal">™</sup>
          </span>
        </a>
        <nav className="hidden gap-8 text-sm md:flex">
          <a href="#catalogue" className="hover:text-accent">Catalogue</a>
          <a href="#consulting" className="hover:text-accent">Consulting</a>
          <a href="#story" className="hover:text-accent">Our Story</a>
          <a href="#contact" className="hover:text-accent">Contact</a>
        </nav>
        <a
          href={waLink(queryMsg + " ")}
          target="_blank"
          rel="noopener"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
        >
          <ChatIcon className="h-3.5 w-3.5" />
          Chat
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-5 pt-14 pb-16 md:grid-cols-12 md:gap-6 md:px-10 md:pt-20 md:pb-28">
        <div className="md:col-span-7">
          <p className="label-mono">Coffee & Chocolate · Consulting · Roasting · Craft</p>
          <h1 className="mt-4 text-5xl leading-[0.95] tracking-tight md:text-8xl">
            Bark to Bar,
            <br />
            Bean to <em className="not-italic text-accent">Brews.</em>
          </h1>
          <p className="mt-6 max-w-lg text-base text-muted-foreground md:text-lg">
            cavebeans is a coffee &amp; chocolate studio — we consult, roast and craft the good
            stuff, and share it with the curious.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={waLink(catalogueMsg)}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              <ChatIcon className="h-4 w-4" />
              View catalogue
            </a>
            <a
              href={waLink(queryMsg + " ")}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium hover:border-foreground"
            >
              Send a query
            </a>
          </div>
          <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-border pt-6">
            <Stat k="12+" v="Origins" />
            <Stat k="B2B" v="Consulting" />
            <Stat k="Craft" v="Roasted weekly" />
          </dl>
        </div>
        <div className="relative md:col-span-5">
          <div className="absolute -inset-6 -z-10 rounded-3xl bg-secondary/70" aria-hidden />
          <img
            src="/brew-chat-catalogue/images/cavebeans-hero.svg"
            alt="Hand-drawn coffee and chocolate illustration"
            width={1200}
            height={1200}
            className="mx-auto w-full max-w-md object-contain md:max-w-none"
          />
        </div>
      </div>
    </section>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <dt className="text-2xl font-bold">{k}</dt>
      <dd className="label-mono mt-1">{v}</dd>
    </div>
  );
}

function Marquee() {
  const words = ["Curious.", "Confident.", "Playful.", "Thoughtful.", "Unapologetic."];
  return (
    <div className="border-y border-border bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-8 gap-y-2 px-5 py-4 text-sm md:px-10">
        {words.map((w, i) => (
          <span key={w} className="flex items-center gap-8">
            <span className="font-display font-medium italic">{w}</span>
            {i < words.length - 1 && <span className="text-primary-foreground/40">•</span>}
          </span>
        ))}
      </div>
    </div>
  );
}

function Catalogue() {
  return (
    <section id="catalogue" className="border-t border-border">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-16 md:grid-cols-12 md:px-10 md:py-24">
        <div className="md:col-span-5">
          <p className="label-mono">02 · Catalogue</p>
          <h2 className="mt-3 text-4xl md:text-6xl">The good stuff, on chat.</h2>
        </div>
        <div className="md:col-span-7">
          <p className="text-base text-muted-foreground md:text-lg">
            Our catalogue is curated and rotates often — single-origin coffees, bean-to-bar
            chocolates and limited seasonal drops. Tap below and we&apos;ll send you the current
            list, take your order and ship it out.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={waLink(catalogueMsg)}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-accent-foreground transition-transform hover:-translate-y-0.5"
            >
              <ChatIcon className="h-4 w-4" />
              Open catalogue
            </a>
            <a
              href={waLink("Hi cavebeans! I'd like the coffee catalogue please.")}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-medium hover:border-foreground"
            >
              Coffee list
            </a>
            <a
              href={waLink("Hi cavebeans! I'd like the chocolate catalogue please.")}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-medium hover:border-foreground"
            >
              Chocolate list
            </a>
          </div>
          <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-3 md:grid-cols-4">
            {["Single-origin coffee", "Bean-to-bar chocolate", "Seasonal drops", "Gift boxes"].map(
              (s) => (
                <li key={s} className="border-t border-border pt-3">
                  <span className="label-mono">In store</span>
                  <p className="mt-1 font-medium">{s}</p>
                </li>
              ),
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Consulting() {
  return (
    <section id="consulting" className="border-t border-border bg-secondary">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="label-mono">03 · Consulting</p>
            <h2 className="mt-3 text-4xl md:text-6xl">
              We build coffee &amp; chocolate,{" "}
              <span className="text-accent">from the ground up.</span>
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            End-to-end consulting for cafés, roasters, chocolate makers and brands — sourcing,
            production, training and product craft.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {consultingServices.map((s) => (
            <article
              key={s.title}
              className="flex flex-col rounded-2xl border border-border bg-card p-6"
            >
              <span className="label-mono">{s.tag}</span>
              <h3 className="mt-3 text-xl">{s.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{s.desc}</p>
              <a
                href={waLink(s.message)}
                target="_blank"
                rel="noopener"
                className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-medium text-accent hover:underline"
              >
                <ChatIcon className="h-4 w-4" />
                {s.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="story" className="border-t border-border">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-16 md:grid-cols-12 md:px-10 md:py-24">
        <div className="md:col-span-5">
          <p className="label-mono">04 · About</p>
          <h2 className="mt-3 text-4xl md:text-5xl">
            Good coffee.
            <br />
            Great chocolate.
            <br />
            <span className="text-accent">Real connections.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:col-span-7 md:grid-cols-2">
          <p className="text-base text-muted-foreground">
            cavebeans is a coffee and chocolate studio built on curiosity and craft. We consult,
            roast and create products that celebrate origin, process and people.
          </p>
          <p className="text-base text-muted-foreground">
            From bark to bar and bean to brews, we believe in doing the good stuff the right way —
            with growers, makers and the people who drink and eat what we make.
          </p>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-16 md:grid-cols-12 md:px-10 md:py-24">
        <div className="md:col-span-6">
          <p className="label-mono text-primary-foreground/70">05 · Order & Contact</p>
          <h2 className="mt-3 text-4xl md:text-6xl">Everything runs on chat.</h2>
          <p className="mt-4 max-w-lg text-primary-foreground/80">
            Whether it&apos;s a bar of chocolate, a bag of beans or a consulting brief — send us a
            message and we&apos;ll pick it up from there.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={waLink(catalogueMsg)}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-accent-foreground"
            >
              <ChatIcon className="h-4 w-4" />
              Open catalogue
            </a>
            <a
              href={waLink(queryMsg + " ")}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-6 py-3.5 text-sm font-medium hover:border-primary-foreground"
            >
              Send a query
            </a>
          </div>
        </div>
        <dl className="grid grid-cols-1 gap-4 md:col-span-6 md:grid-cols-2">
          <ContactCell
            label="Chat"
            value="+91 84381 31917"
            href={waLink(queryMsg + " ")}
          />
          <ContactCell label="Email" value={SITE.email} href={`mailto:${SITE.email}`} />
          <ContactCell label="Instagram" value="@cave_beans_" href={SITE.instagram} />
          <ContactCell label="Hours" value="Mon–Sat · 10–7 IST" />
        </dl>
      </div>
    </section>
  );
}

function ContactCell({ label, value, href }: { label: string; value: string; href?: string }) {
  const inner = (
    <>
      <span className="label-mono text-primary-foreground/60">{label}</span>
      <p className="mt-2 text-lg font-medium">{value}</p>
    </>
  );
  return (
    <div className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-5">
      {href ? (
        <a href={href} target="_blank" rel="noopener" className="block hover:text-accent">
          {inner}
        </a>
      ) : (
        inner
      )}
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-10 md:flex-row md:items-center md:justify-between md:px-10">
        <div className="flex items-center gap-3">
          <Logo className="h-10 w-10 object-contain" />
          <div>
            <p className="text-lg font-bold">
              cavebeans<sup className="ml-0.5 text-xs font-normal">™</sup>
            </p>
            <p className="text-xs text-muted-foreground">{SITE.tagline}</p>
          </div>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} cavebeans. {SITE.descriptor}
        </p>
      </div>
    </footer>
  );
}

function ChatFab() {
  return (
    <a
      href={waLink(queryMsg + " ")}
      target="_blank"
      rel="noopener"
      aria-label="Chat"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg shadow-black/20 transition-transform hover:-translate-y-0.5"
    >
      <ChatIcon className="h-6 w-6" />
    </a>
  );
}

function ChatIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 14H5.17L4 17.17V4h16z" />
      <circle cx="9" cy="10" r="1" />
      <circle cx="12" cy="10" r="1" />
      <circle cx="15" cy="10" r="1" />
    </svg>
  );
}
