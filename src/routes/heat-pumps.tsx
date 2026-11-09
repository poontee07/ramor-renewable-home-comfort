import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Fan, Home, Thermometer, Wind, Wrench, Zap } from "lucide-react";

import heroImg from "@/assets/hero-heat-pump.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/site/CtaBand";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/heat-pumps")({
  head: () => ({
    meta: [
      { title: "Installing a Heat Pump in Ireland: The Complete Guide | Ramor" },
      {
        name: "description",
        content:
          "Exactly what you need to know about installing a heat pump in your home: suitability, Heat Loss Indicator, air-to-water vs exhaust air, installation and running costs.",
      },
      {
        property: "og:title",
        content: "Exactly what you need to know about installing a heat pump in your home",
      },
      {
        property: "og:description",
        content:
          "A plain-English heat pump guide from Cavan's renewable heating specialists — from technical assessment to annual service.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HeatPumpGuide,
});

const toc = [
  { id: "how", label: "How it works" },
  { id: "ready", label: "Is my home ready?" },
  { id: "types", label: "Which type?" },
  { id: "install", label: "The installation" },
  { id: "living", label: "Living with one" },
  { id: "faq", label: "FAQ" },
];

const installSteps = [
  {
    t: "Technical assessment",
    d: "A registered assessor checks your home's heat loss and confirms whether it's heat pump ready — or what needs upgrading first.",
  },
  {
    t: "Design & sizing",
    d: "We size the heat pump to your home's actual heat demand and check radiators, pipework and hot water cylinder.",
  },
  {
    t: "Grant application",
    d: "If you're applying for an SEAI grant, approval must be in place before work begins. We'll explain what's needed.",
  },
  {
    t: "Installation",
    d: "Outdoor unit, cylinder, controls and any emitter upgrades are fitted by our own engineers, with the house left clean.",
  },
  {
    t: "Commissioning & handover",
    d: "We set flow temperatures and schedules for your home and show you exactly how to get the best from the controls.",
  },
  {
    t: "Annual service",
    d: "A yearly health check keeps efficiency high, protects the warranty and catches small issues early.",
  },
];

const faqs = [
  {
    q: "Do heat pumps work in an Irish winter?",
    a: "Yes. Modern air-to-water heat pumps keep extracting heat from the outside air well below freezing. Ireland's mild, damp climate actually suits them well — the key is correct sizing and a well-insulated home.",
  },
  {
    q: "Will I need new radiators?",
    a: "Not always. Heat pumps run at lower water temperatures than boilers, so some rooms may need larger radiators to stay comfortable. We check every room during design and only recommend changes that are needed.",
  },
  {
    q: "Are they noisy?",
    a: "A well-sited modern unit makes a low hum similar to a fridge or a gentle fan. We position the outdoor unit with neighbours, bedrooms and airflow in mind.",
  },
  {
    q: "How long does installation take?",
    a: "It depends on the house and how much of the existing system is changing. We'll give you a clear timeline with your quote so you know exactly what to expect.",
  },
  {
    q: "Can I keep my old boiler as a backup?",
    a: "In most cases a correctly designed heat pump replaces the boiler entirely. If you're considering a hybrid set-up, ask us and we'll explain the pros, cons and grant implications.",
  },
  {
    q: "How much will it cost to run?",
    a: "Running costs depend on your home's heat loss, your electricity tariff and how you use the system. Because a heat pump typically delivers several units of heat for every unit of electricity, a well-designed system in a well-insulated home is very economical — especially with night-rate electricity.",
  },
];

function SectionTitle({ n, kicker, title }: { n: string; kicker: string; title: string }) {
  return (
    <div>
      <p className="eyebrow text-primary">
        {n} · {kicker}
      </p>
      <h2 className="mt-3 text-3xl leading-tight md:text-5xl">{title}</h2>
    </div>
  );
}

function HeatPumpGuide() {
  return (
    <>
      <PageHero
        eyebrow="The heat pump guide"
        title={
          <>
            Exactly what you need to know about{" "}
            <em className="text-gradient-ember font-normal">installing a heat pump.</em>
          </>
        }
        intro="Straight answers from engineers who install and service them every week — so you can decide with confidence."
        image={heroImg}
      >
        <Button asChild variant="ember" size="xl">
          <Link to="/contact">
            Book a home survey <ArrowRight />
          </Link>
        </Button>
      </PageHero>

      <div className="container-site grid gap-16 py-20 lg:grid-cols-[14rem_1fr]">
        <aside className="hidden lg:block">
          <nav className="sticky top-32 space-y-1" aria-label="Guide contents">
            <p className="eyebrow mb-4 text-muted-foreground">In this guide</p>
            {toc.map((t, i) => (
              <a
                key={t.id}
                href={`#${t.id}`}
                className="flex gap-3 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                <span className="text-primary">{String(i + 1).padStart(2, "0")}</span> {t.label}
              </a>
            ))}
          </nav>
        </aside>

        <article className="max-w-3xl space-y-24">
          <section id="how" className="scroll-mt-32">
            <SectionTitle n="01" kicker="The basics" title="How a heat pump works" />
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              A heat pump works like a fridge in reverse. It draws free heat from the outside air,
              concentrates it with a compressor and moves it into your radiators, underfloor
              heating and hot water cylinder. For every unit of electricity it uses, a good system
              typically delivers several units of heat — that's what makes it so efficient.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                { icon: Wind, t: "Captures", d: "Heat from outside air, even on cold days" },
                { icon: Zap, t: "Concentrates", d: "A compressor raises it to a useful temperature" },
                { icon: Thermometer, t: "Delivers", d: "Gentle, steady warmth and hot water" },
              ].map(({ icon: I, t, d }) => (
                <div key={t} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                  <I className="size-6 text-primary" />
                  <p className="mt-4 font-display text-xl">{t}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{d}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="ready" className="scroll-mt-32">
            <SectionTitle n="02" kicker="Suitability" title="Is my home heat pump ready?" />
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Heat pumps work best in homes that hold their heat. In Ireland, readiness is measured
              with a <strong className="text-foreground">Heat Loss Indicator (HLI)</strong> — a
              figure produced during a technical assessment that shows how quickly your home loses
              heat. SEAI sets the HLI threshold for grant eligibility; check their current rules or
              ask us and we'll explain where your home stands.
            </p>
            <div className="mt-8 rounded-3xl bg-pine p-8 text-pine-foreground">
              <p className="eyebrow text-ember-glow">Quick checklist</p>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {[
                  "Attic and walls insulated",
                  "Reasonably draught-free",
                  "Space outside for the unit",
                  "Room for a hot water cylinder",
                  "Radiators sized for lower temps",
                  "Good ventilation in place",
                ].map((c) => (
                  <li key={c} className="flex items-center gap-3 text-sm font-medium">
                    <Home className="size-4 text-ember-glow" /> {c}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section id="types" className="scroll-mt-32">
            <SectionTitle n="03" kicker="Options" title="Air-to-water or exhaust air?" />
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <div className="rounded-3xl border border-border bg-card p-8 shadow-soft">
                <Fan className="size-8 text-primary" />
                <h3 className="mt-5 text-2xl">Air-to-water</h3>
                <p className="mt-3 text-muted-foreground">
                  The most common choice for Irish homes. An outdoor unit feeds radiators or
                  underfloor heating plus your hot water. Ideal for retrofits and family homes.
                </p>
              </div>
              <div className="rounded-3xl border border-border bg-card p-8 shadow-soft">
                <Wind className="size-8 text-primary" />
                <h3 className="mt-5 text-2xl">Exhaust air</h3>
                <p className="mt-3 text-muted-foreground">
                  Recovers warmth from the stale air leaving your home and reuses it for heating
                  and hot water, while ventilating continuously. Great for airtight, newer builds.
                </p>
              </div>
            </div>
          </section>

          <section id="install" className="scroll-mt-32">
            <SectionTitle n="04" kicker="The process" title="What installation involves" />
            <ol className="mt-10 space-y-0">
              {installSteps.map((s, i) => (
                <li key={s.t} className="relative grid grid-cols-[3.5rem_1fr] gap-4 pb-10">
                  {i < installSteps.length - 1 && (
                    <span aria-hidden className="absolute left-7 top-14 h-[calc(100%-3.5rem)] w-px bg-border" />
                  )}
                  <span className="inline-flex size-14 items-center justify-center rounded-full bg-gradient-ember font-display text-xl text-primary-foreground">
                    {i + 1}
                  </span>
                  <div className="pt-2">
                    <h3 className="text-2xl">{s.t}</h3>
                    <p className="mt-2 text-muted-foreground">{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section id="living" className="scroll-mt-32">
            <SectionTitle n="05" kicker="Day to day" title="Getting the best from your heat pump" />
            <div className="mt-8 grid gap-4">
              {[
                ["Low and slow wins", "Heat pumps are most efficient running steadily at lower temperatures, rather than blasting on and off like a boiler."],
                ["Use your tariff", "Time hot water heating to cheaper night-rate electricity where possible."],
                ["Keep it clear", "Leave space around the outdoor unit so air can flow freely — no bins, leaves or covers."],
                ["Service yearly", "An annual check keeps efficiency high and your warranty protected. We look after this for customers across Cavan."],
              ].map(([t, d]) => (
                <div key={t} className="flex gap-5 rounded-2xl bg-muted p-6">
                  <Wrench className="mt-1 size-5 shrink-0 text-primary" />
                  <div>
                    <p className="font-display text-xl">{t}</p>
                    <p className="mt-1 text-muted-foreground">{d}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="faq" className="scroll-mt-32">
            <SectionTitle n="06" kicker="FAQ" title="Questions we hear every week" />
            <Accordion type="single" collapsible className="mt-8">
              {faqs.map((f) => (
                <AccordionItem key={f.q} value={f.q}>
                  <AccordionTrigger className="py-6 text-left font-display text-xl hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-base leading-relaxed text-muted-foreground">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <p className="mt-8 text-sm text-muted-foreground">
              Thinking about grants? See our{" "}
              <Link to="/grants" className="font-semibold text-primary underline-offset-4 hover:underline">
                SEAI grants overview
              </Link>
              .
            </p>
          </section>
        </article>
      </div>

      <CtaBand title="Find out if your home is heat pump ready." />
    </>
  );
}
