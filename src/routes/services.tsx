import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";

import heroImg from "@/assets/engineer-boiler.jpg";
import heatPumpImg from "@/assets/hero-heat-pump.jpg";
import controlsImg from "@/assets/smart-controls.jpg";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/site/CtaBand";
import { PageHero } from "@/components/site/PageHero";
import { services } from "@/lib/services";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Heating & Plumbing Services in Cavan | Ramor" },
      {
        name: "description",
        content:
          "Heat pumps, gas and oil boilers, smart heating controls, ventilation, heat recovery, power flushing and solar thermal in Virginia, Co. Cavan.",
      },
      { property: "og:title", content: "Our services — Ramor Renewable Heating & Plumbing" },
      {
        property: "og:description",
        content:
          "From air-to-water heat pumps to boiler replacements and Honeywell evohome controls — installed and serviced by our own engineers.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

const images: Record<string, string | undefined> = {
  "heat-pumps": heatPumpImg,
  gas: heroImg,
  controls: controlsImg,
};

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={
          <>
            Renewable and traditional heating,{" "}
            <em className="text-gradient-ember font-normal">under one roof.</em>
          </>
        }
        intro="Whether you're going fully renewable or simply need your boiler looked after, the same local team designs, installs and services it."
        image={heroImg}
      />

      <div className="sticky top-20 z-30 border-b border-border bg-background/90 backdrop-blur">
        <nav className="container-site flex gap-2 overflow-x-auto py-3" aria-label="Services">
          {services.map((s) => (
            <a
              key={s.slug}
              href={`#${s.slug}`}
              className="whitespace-nowrap rounded-full border border-border px-4 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
            >
              {s.title}
            </a>
          ))}
        </nav>
      </div>

      <div className="container-site space-y-6 py-20">
        {services.map((s, i) => {
          const Icon = s.icon;
          const img = images[s.slug];
          return (
            <section
              key={s.slug}
              id={s.slug}
              className="scroll-mt-40 grid overflow-hidden rounded-[2rem] border border-border bg-card shadow-soft md:grid-cols-2"
            >
              <div className={`p-8 md:p-12 ${i % 2 === 1 && img ? "md:order-2" : ""}`}>
                <div className="flex items-center gap-4">
                  <span className="inline-flex size-14 items-center justify-center rounded-2xl bg-gradient-ember text-primary-foreground">
                    <Icon className="size-7" />
                  </span>
                  <span className="eyebrow text-primary">
                    {String(i + 1).padStart(2, "0")} · {s.kicker}
                  </span>
                </div>
                <h2 className="mt-8 text-4xl md:text-5xl">{s.title}</h2>
                <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{s.summary}</p>
                <ul className="mt-8 grid gap-3">
                  {s.items.map((it) => (
                    <li key={it} className="flex items-center gap-3 font-medium">
                      <span className="inline-flex size-6 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                        <Check className="size-3.5" />
                      </span>
                      {it}
                    </li>
                  ))}
                </ul>
                {s.slug === "heat-pumps" && (
                  <Button asChild variant="outline-dark" size="xl" className="mt-10">
                    <Link to="/heat-pumps">
                      Read our heat pump guide <ArrowRight />
                    </Link>
                  </Button>
                )}
              </div>
              {img ? (
                <img
                  src={img}
                  alt=""
                  loading="lazy"
                  className="h-72 w-full object-cover md:h-full"
                />
              ) : (
                <div className="grain relative hidden items-center justify-center bg-muted md:flex">
                  <Icon className="size-40 text-primary/25" strokeWidth={1} />
                </div>
              )}
            </section>
          );
        })}
      </div>

      <CtaBand title="Not sure which option fits your home?" />
    </>
  );
}
