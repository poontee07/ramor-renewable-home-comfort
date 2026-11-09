import { createFileRoute } from "@tanstack/react-router";
import { Building2, CalendarCheck, Clock, Handshake, MapPin, Sparkles, Star } from "lucide-react";

import lakeImg from "@/assets/lough-ramor.jpg";
import engineerImg from "@/assets/engineer-boiler.jpg";
import { CtaBand } from "@/components/site/CtaBand";
import { PageHero } from "@/components/site/PageHero";
import { business, yearsTrading } from "@/lib/business";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Ramor Renewable Heating & Plumbing | Virginia, Cavan" },
      {
        name: "description",
        content:
          "Heating and plumbing specialists based in Virginia, Co. Cavan since 2009. Registered Irish company, CRO 474492, rated 5.0 on Google.",
      },
      { property: "og:title", content: "About Ramor — heating specialists by Lough Ramor" },
      {
        property: "og:description",
        content:
          "A local Cavan heating company that has grown from traditional boilers to renewable heat pumps since 2009.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: Handshake, t: "Straight talking", d: "Clear explanations of what's wrong, what it costs and what your options are." },
  { icon: Clock, t: "On time", d: "We turn up when we say we will and get the job done as agreed." },
  { icon: Sparkles, t: "Tidy work", d: "Dust sheets down, mess cleared up — your home left as we found it." },
  { icon: CalendarCheck, t: "In it for the long run", d: "Annual servicing so your system stays efficient for years." },
];

function AboutPage() {
  const years = yearsTrading();
  return (
    <>
      <PageHero
        eyebrow="About us"
        title={
          <>
            Named after the lake.{" "}
            <em className="text-gradient-ember font-normal">Rooted in Cavan.</em>
          </>
        }
        intro={`For ${years} years we've kept homes around Virginia warm — first with boilers and plumbing, and today with renewable heat pumps, smart controls and whole-house ventilation.`}
        image={lakeImg}
      />

      <section className="container-site grid items-center gap-14 py-24 md:grid-cols-2">
        <div>
          <p className="eyebrow text-primary">Our story</p>
          <h2 className="mt-4 text-4xl leading-[1.05] md:text-5xl">
            Traditional know-how, renewable future.
          </h2>
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              Ramor Renewable Heating &amp; Plumbing was set up in {business.founded} in Virginia,
              Co. Cavan — a few minutes from the shores of Lough Ramor that gives us our name.
            </p>
            <p>
              We've grown alongside the way Irish homes are heated. Alongside gas and oil boiler
              work, we now design, install and service heat pumps, smart heating controls,
              heat recovery ventilation and solar hot water.
            </p>
            <p>
              What hasn't changed is how we work: honest advice, punctual engineers and a tidy job
              — the things our customers mention again and again.
            </p>
          </div>
        </div>
        <img
          src={engineerImg}
          alt="Ramor engineer at work on a heating system"
          width={1280}
          height={1600}
          loading="lazy"
          className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-soft"
        />
      </section>

      <section className="bg-pine text-pine-foreground">
        <div className="container-site py-24">
          <p className="eyebrow text-ember-glow">How we work</p>
          <h2 className="mt-4 max-w-2xl text-4xl leading-[1.05] md:text-5xl">
            The things customers rate us five stars for.
          </h2>
          <div className="mt-12 grid gap-5 md:grid-cols-4">
            {values.map(({ icon: I, t, d }) => (
              <div key={t} className="rounded-3xl border border-pine-foreground/10 bg-pine-foreground/5 p-7">
                <I className="size-6 text-ember-glow" />
                <h3 className="mt-6 text-2xl">{t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-pine-muted">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-site py-24">
        <p className="eyebrow text-primary">Company facts</p>
        <div className="mt-8 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: CalendarCheck, k: "Established", v: `26 August ${business.founded}` },
            { icon: Building2, k: "Registered company", v: `Irish Ltd · CRO ${business.croNumber}` },
            { icon: MapPin, k: "Based in", v: "Virginia Shopping Centre, Co. Cavan" },
            { icon: Star, k: "Google rating", v: `${business.rating.score} from ${business.rating.count} reviews` },
          ].map(({ icon: I, k, v }) => (
            <div key={k} className="bg-card p-7">
              <I className="size-5 text-primary" />
              <p className="mt-5 text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">{k}</p>
              <p className="mt-2 font-display text-xl">{v}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
