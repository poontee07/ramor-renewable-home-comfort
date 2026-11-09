import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, ClipboardCheck, Fan, Gauge, Info, Sun } from "lucide-react";

import lakeImg from "@/assets/lough-ramor.jpg";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/site/CtaBand";
import { PageHero } from "@/components/site/PageHero";
import { business } from "@/lib/business";

export const Route = createFileRoute("/grants")({
  head: () => ({
    meta: [
      { title: "SEAI Home Energy Grants for Heating | Ramor, Co. Cavan" },
      {
        name: "description",
        content:
          "How SEAI grants can help with heat pumps, heating controls and solar thermal — and how Ramor helps Cavan homeowners understand the process.",
      },
      { property: "og:title", content: "SEAI grants for heat pumps & heating upgrades" },
      {
        property: "og:description",
        content:
          "An overview of SEAI home energy supports for heat pumps, controls and solar hot water, with the steps to follow before work begins.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GrantsPage,
});

const grants = [
  {
    icon: ClipboardCheck,
    t: "Heat pump technical assessment",
    d: "Support towards the assessment that confirms whether your home is ready for a heat pump.",
  },
  {
    icon: Fan,
    t: "Heat pump systems",
    d: "Support towards installing an air-to-water or exhaust air heat pump in an eligible home.",
  },
  {
    icon: Gauge,
    t: "Heating controls",
    d: "Support towards upgrading to zoned, time and temperature controls on an existing system.",
  },
  {
    icon: Sun,
    t: "Solar thermal",
    d: "Support towards solar panels that heat your hot water using free energy from the sun.",
  },
];

const steps = [
  "Talk to us about your home and the upgrade you're considering.",
  "Check eligibility on the SEAI website — rules depend on the home, its age and the owner.",
  "Apply to SEAI and wait for grant approval before any work starts.",
  "Complete the works with your chosen contractor.",
  "Submit the required paperwork (and a post-works BER where needed) to claim the grant.",
];

function GrantsPage() {
  return (
    <>
      <PageHero
        eyebrow="SEAI grants"
        title={
          <>
            Upgrade your heating —{" "}
            <em className="text-gradient-ember font-normal">with a helping hand.</em>
          </>
        }
        intro="Irish homeowners may be eligible for SEAI supports towards greener, more efficient heating. Here's an overview of what's available and how the process works."
        image={lakeImg}
      >
        <Button asChild variant="outline-light" size="xl">
          <a href={business.seaiUrl} target="_blank" rel="noreferrer">
            Official SEAI grant info <ArrowUpRight />
          </a>
        </Button>
      </PageHero>

      <section className="container-site py-20">
        <p className="eyebrow text-primary">Supports that relate to our work</p>
        <h2 className="mt-4 max-w-2xl text-4xl leading-[1.05] md:text-5xl">
          Where a grant might apply.
        </h2>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {grants.map(({ icon: I, t, d }) => (
            <div key={t} className="flex flex-col rounded-3xl border border-border bg-card p-7 shadow-soft">
              <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-secondary text-secondary-foreground">
                <I className="size-6" />
              </span>
              <h3 className="mt-6 text-xl">{t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-muted/60">
        <div className="container-site grid gap-14 py-20 md:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="eyebrow text-primary">The process</p>
            <h2 className="mt-4 text-4xl leading-[1.05] md:text-5xl">Five steps, in the right order.</h2>
            <p className="mt-6 text-muted-foreground">
              The most common mistake? Starting work before approval. Get the order right and the
              process is straightforward.
            </p>
          </div>
          <ol className="space-y-4">
            {steps.map((s, i) => (
              <li key={s} className="flex gap-5 rounded-2xl bg-card p-6 shadow-soft">
                <span className="font-display text-3xl text-gradient-ember">{i + 1}</span>
                <p className="pt-1.5 font-medium">{s}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="container-site py-16">
        <div className="flex gap-4 rounded-3xl border border-border bg-card p-7">
          <Info className="mt-0.5 size-5 shrink-0 text-primary" />
          <p className="text-sm leading-relaxed text-muted-foreground">
            Grant amounts, eligibility rules and contractor requirements are set by SEAI and change
            from time to time. Always check the current conditions on the{" "}
            <a
              href={business.seaiUrl}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-primary underline-offset-4 hover:underline"
            >
              SEAI website
            </a>{" "}
            before applying, and ask us about your specific project. Read our{" "}
            <Link to="/heat-pumps" className="font-semibold text-primary underline-offset-4 hover:underline">
              heat pump guide
            </Link>{" "}
            for more on readiness.
          </p>
        </div>
      </section>

      <CtaBand title="Want to know what your home could qualify for?" />
    </>
  );
}
