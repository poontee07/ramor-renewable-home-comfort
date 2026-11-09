import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Clock4,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";

import heroImg from "@/assets/hero-heat-pump.jpg";
import engineerImg from "@/assets/engineer-boiler.jpg";
import controlsImg from "@/assets/smart-controls.jpg";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/site/CtaBand";
import { business, yearsTrading } from "@/lib/business";
import { services } from "@/lib/services";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ramor Renewable Heating & Plumbing | Heat Pumps in Cavan" },
      {
        name: "description",
        content:
          "Heat pump installation, boiler replacement, smart heating controls and plumbing in Virginia, Co. Cavan. 5.0★ rated, trading since 2009.",
      },
      { property: "og:title", content: "Ramor Renewable Heating & Plumbing — Virginia, Co. Cavan" },
      {
        property: "og:description",
        content:
          "Renewable heating specialists: heat pumps, boilers, smart controls and ventilation. Honest advice and tidy work since 2009.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const praise = [
  "Professional technicians",
  "Great communication",
  "On time, every time",
  "Leaves the house spotless",
  "Explains repairs clearly",
  "Brilliant heat pump servicing",
  "Helpful with grant info",
];

const steps = [
  {
    n: "01",
    title: "Chat & survey",
    text: "We visit, look at your house, your current system and how you actually live in it.",
  },
  {
    n: "02",
    title: "Honest design",
    text: "A clear recommendation and quote — including which SEAI grants could apply.",
  },
  {
    n: "03",
    title: "Tidy install",
    text: "Our own engineers fit and commission everything, then clean up after themselves.",
  },
  {
    n: "04",
    title: "Looked after",
    text: "Annual servicing and a local team a phone call away when you need us.",
  },
];

function Index() {
  const years = yearsTrading();

  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-pine text-pine-foreground">
        <img
          src={heroImg}
          alt="Modern heat pump installed beside a stone farmhouse overlooking a Cavan lake at sunset"
          width={1920}
          height={1152}
          className="absolute inset-0 -z-10 size-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-hero" />
        <div className="container-site flex min-h-[86vh] flex-col justify-center py-24">
          <div className="animate-rise inline-flex w-fit items-center gap-2 rounded-full border border-pine-foreground/20 bg-pine/40 px-4 py-2 text-xs font-semibold backdrop-blur">
            <span className="flex text-star">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-3.5 fill-current" />
              ))}
            </span>
            {business.rating.score} on Google · {business.rating.count} reviews
          </div>
          <h1 className="animate-rise mt-7 max-w-4xl text-5xl leading-[0.98] sm:text-6xl md:text-8xl [animation-delay:80ms]">
            Warm homes,
            <br />
            <em className="text-gradient-ember font-normal">powered by nature.</em>
          </h1>
          <p className="animate-rise mt-7 max-w-xl text-lg leading-relaxed text-pine-foreground/85 [animation-delay:160ms]">
            Heat pumps, boilers and smart heating controls — designed, installed and serviced by
            Cavan's renewable heating specialists for over {years} years.
          </p>
          <div className="animate-rise mt-10 flex flex-wrap gap-3 [animation-delay:240ms]">
            <Button asChild variant="ember" size="xl">
              <Link to="/contact">
                Get a free quote <ArrowRight />
              </Link>
            </Button>
            <Button asChild variant="outline-light" size="xl">
              <Link to="/heat-pumps">Is a heat pump right for me?</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-b border-border bg-card">
        <div className="container-site grid grid-cols-2 divide-border md:grid-cols-4 md:divide-x">
          {[
            { k: `${business.founded}`, v: "Trading since" },
            { k: `${business.rating.score}★`, v: "Google rating" },
            { k: "5", v: "Heating specialisms" },
            { k: "CRO", v: `Registered Ltd · ${business.croNumber}` },
          ].map((s) => (
            <div key={s.v} className="px-2 py-8 text-center md:px-6">
              <p className="font-display text-4xl text-foreground md:text-5xl">{s.k}</p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                {s.v}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Services bento */}
      <section className="grain">
        <div className="container-site py-24">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow text-primary">What we do</p>
              <h2 className="mt-4 max-w-2xl text-4xl leading-[1.05] md:text-6xl">
                Every way to heat a home — done properly.
              </h2>
            </div>
            <Button asChild variant="outline-dark" size="xl">
              <Link to="/services">
                All services <ArrowUpRight />
              </Link>
            </Button>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-6">
            {services.map((s, i) => {
              const Icon = s.icon;
              const featured = i === 0;
              return (
                <Link
                  key={s.slug}
                  to="/services"
                  hash={s.slug}
                  className={
                    featured
                      ? "group relative overflow-hidden rounded-3xl bg-pine p-8 text-pine-foreground md:col-span-4 md:row-span-2 md:p-10"
                      : "group relative rounded-3xl border border-border bg-card p-8 shadow-soft transition-all hover:-translate-y-1 md:col-span-2"
                  }
                >
                  {featured && (
                    <div
                      aria-hidden
                      className="animate-glow absolute -bottom-32 -right-20 size-96 rounded-full bg-gradient-ember opacity-50 blur-3xl"
                    />
                  )}
                  <div className="relative flex h-full flex-col">
                    <div className="flex items-center justify-between">
                      <span
                        className={
                          featured
                            ? "inline-flex size-14 items-center justify-center rounded-2xl bg-gradient-ember text-primary-foreground"
                            : "inline-flex size-12 items-center justify-center rounded-2xl bg-secondary text-secondary-foreground"
                        }
                      >
                        <Icon className={featured ? "size-7" : "size-6"} />
                      </span>
                      <ArrowUpRight className="size-5 opacity-50 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:opacity-100" />
                    </div>
                    <p
                      className={`eyebrow mt-8 ${featured ? "text-ember-glow" : "text-primary"}`}
                    >
                      {s.kicker}
                    </p>
                    <h3 className={`mt-2 ${featured ? "text-4xl md:text-5xl" : "text-2xl"}`}>
                      {s.title}
                    </h3>
                    <p
                      className={`mt-4 leading-relaxed ${featured ? "max-w-md text-pine-muted" : "text-sm text-muted-foreground"}`}
                    >
                      {s.summary}
                    </p>
                    {featured && (
                      <ul className="mt-auto grid gap-2 pt-10 sm:grid-cols-2">
                        {s.items.map((it) => (
                          <li key={it} className="flex items-center gap-2 text-sm">
                            <BadgeCheck className="size-4 text-ember-glow" /> {it}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Heat pump guide feature */}
      <section className="bg-muted/60">
        <div className="container-site grid items-center gap-14 py-24 md:grid-cols-2">
          <div className="relative">
            <img
              src={engineerImg}
              alt="Heating engineer servicing a boiler and copper pipework"
              width={1280}
              height={1600}
              loading="lazy"
              className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-soft"
            />
            <div className="absolute -bottom-6 -right-4 max-w-[15rem] rounded-2xl border border-border bg-card p-5 shadow-soft md:-right-8">
              <p className="flex items-center gap-2 text-sm font-bold">
                <ShieldCheck className="size-5 text-primary" /> Grant-ready advice
              </p>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                We'll explain which SEAI supports may apply to your home before any work starts.
              </p>
            </div>
          </div>
          <div>
            <p className="eyebrow text-primary">The heat pump guide</p>
            <h2 className="mt-4 text-4xl leading-[1.05] md:text-5xl">
              Exactly what you need to know about installing a heat pump in your home.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              How they work, whether your house is ready, what the install involves and how to keep
              running costs low — explained in plain English, without the sales pitch.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Is my home suitable — and what is a Heat Loss Indicator?",
                "Air-to-water vs exhaust air: which one fits?",
                "What happens on installation day",
                "Do I need new radiators?",
              ].map((q) => (
                <li key={q} className="flex gap-3 border-b border-border pb-4">
                  <Sparkles className="mt-0.5 size-5 shrink-0 text-primary" />
                  <span className="font-medium">{q}</span>
                </li>
              ))}
            </ul>
            <Button asChild variant="ember" size="xl" className="mt-10">
              <Link to="/heat-pumps">
                Read the guide <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="container-site py-24">
        <p className="eyebrow text-primary">How it works</p>
        <h2 className="mt-4 max-w-2xl text-4xl leading-[1.05] md:text-5xl">
          From first call to cosy, in four steps.
        </h2>
        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-4">
          {steps.map((s) => (
            <div key={s.n} className="bg-card p-8">
              <p className="font-display text-5xl text-gradient-ember">{s.n}</p>
              <h3 className="mt-6 text-2xl">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Smart controls */}
      <section className="bg-pine text-pine-foreground">
        <div className="container-site grid items-center gap-14 py-24 md:grid-cols-[1fr_1.1fr]">
          <div>
            <p className="eyebrow text-ember-glow">Smart heating controls</p>
            <h2 className="mt-4 text-4xl leading-[1.05] md:text-5xl">
              Heat the rooms you live in. Not the ones you don't.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-pine-muted">
              Zoning and room-by-room thermostats — with systems like Honeywell evohome — put you in
              control from the hallway or your phone. More comfort, less waste.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-4">
              {[
                { icon: Clock4, t: "Room-by-room schedules" },
                { icon: Phone, t: "App control anywhere" },
                { icon: Sparkles, t: "Separate hot water timing" },
                { icon: ShieldCheck, t: "Works with your system" },
              ].map(({ icon: I, t }) => (
                <div
                  key={t}
                  className="rounded-2xl border border-pine-foreground/10 bg-pine-foreground/5 p-5"
                >
                  <I className="size-5 text-ember-glow" />
                  <p className="mt-3 text-sm font-semibold">{t}</p>
                </div>
              ))}
            </div>
          </div>
          <img
            src={controlsImg}
            alt="Smart thermostat set to 21 degrees in a cosy living room"
            width={1280}
            height={1280}
            loading="lazy"
            className="aspect-square w-full rounded-[2rem] object-cover"
          />
        </div>
      </section>

      {/* Reputation */}
      <section className="overflow-hidden py-24">
        <div className="container-site grid gap-10 md:grid-cols-[auto_1fr] md:items-center">
          <div className="rounded-3xl border border-border bg-card p-8 shadow-soft">
            <p className="font-display text-7xl leading-none">{business.rating.score}</p>
            <div className="mt-3 flex text-star">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-5 fill-current" />
              ))}
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              From {business.rating.count} Google reviews
            </p>
          </div>
          <div>
            <p className="eyebrow text-primary">What customers mention most</p>
            <h2 className="mt-4 text-4xl leading-[1.05] md:text-5xl">
              Boiler swaps, full heating upgrades and yearly heat pump services — all rated five
              stars.
            </h2>
          </div>
        </div>
        <div className="relative mt-14 flex overflow-hidden" aria-label="Customer highlights">
          <div className="animate-marquee flex shrink-0 gap-4 pr-4">
            {[...praise, ...praise].map((p, i) => (
              <span
                key={i}
                aria-hidden={i >= praise.length}
                className="flex items-center gap-3 whitespace-nowrap rounded-full border border-border bg-card px-6 py-4 font-display text-xl"
              >
                <MessageCircle className="size-5 text-primary" /> {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
