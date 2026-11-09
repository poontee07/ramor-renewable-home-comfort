import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState, type FormEvent } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { business } from "@/lib/business";
import { buildEnquiryMailto } from "@/lib/enquiry";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Ramor | Heating & Plumbing, Virginia, Co. Cavan" },
      {
        name: "description",
        content:
          "Call +353 49 854 3066 or email info@rrhp.ie. Visit us at Unit 1A, Virginia Shopping Centre, Virginia, Co. Cavan A82 X9W4.",
      },
      { property: "og:title", content: "Contact Ramor Renewable Heating & Plumbing" },
      {
        property: "og:description",
        content: "Request a quote for a heat pump, boiler, heating controls or plumbing work in Co. Cavan.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const topics = ["Heat pump", "Boiler (gas/oil)", "Heating controls", "Service / repair", "Other"];

function ContactPage() {
  const [topic, setTopic] = useState(topics[0]);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    window.location.href = buildEnquiryMailto({
      name: String(data.get("name") ?? ""),
      phone: String(data.get("phone") ?? ""),
      email: String(data.get("email") ?? ""),
      eircode: String(data.get("eircode") ?? ""),
      topic,
      message: String(data.get("message") ?? ""),
    });
  }

  return (
    <>
      <section className="bg-pine text-pine-foreground">
        <div className="container-site py-20 md:py-24">
          <p className="eyebrow text-ember-glow">Contact</p>
          <h1 className="mt-5 max-w-3xl text-5xl leading-[1.02] md:text-7xl">
            Let's get your home <em className="text-gradient-ember font-normal">warm.</em>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-pine-muted">
            Call, email or send us a few details below and we'll come back to you with honest
            advice.
          </p>
        </div>
      </section>

      <section className="container-site grid gap-10 py-20 lg:grid-cols-[1fr_1.3fr]">
        <div className="space-y-4">
          {business.phones.map((p, i) => (
            <a
              key={p.href}
              href={p.href}
              className="group flex items-center gap-5 rounded-3xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-0.5"
            >
              <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-gradient-ember text-primary-foreground">
                <Phone className="size-5" />
              </span>
              <span>
                <span className="block text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
                  {i === 0 ? "Call us" : "Or"}
                </span>
                <span className="font-display text-2xl">{p.label}</span>
              </span>
            </a>
          ))}
          <a
            href={`mailto:${business.email}`}
            className="flex items-center gap-5 rounded-3xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-0.5"
          >
            <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-secondary text-secondary-foreground">
              <Mail className="size-5" />
            </span>
            <span>
              <span className="block text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
                Email
              </span>
              <span className="font-display text-2xl">{business.email}</span>
            </span>
          </a>
          <div className="rounded-3xl bg-muted p-6">
            <p className="flex gap-3">
              <MapPin className="mt-1 size-5 shrink-0 text-primary" />
              <span>
                <span className="font-semibold">{business.address.line1}</span>
                <br />
                {business.address.town}, {business.address.eircode}
              </span>
            </p>
            <p className="mt-4 flex gap-3">
              <Clock className="mt-1 size-5 shrink-0 text-primary" />
              <span>
                {business.hours.map((h) => (
                  <span key={h.days} className="block">
                    <span className="font-semibold">{h.days}</span> · {h.time}
                  </span>
                ))}
                <span className="mt-1 block text-sm text-muted-foreground">
                  Please call ahead before visiting.
                </span>
              </span>
            </p>
          </div>
          <iframe
            title="Map of Ramor Renewable Heating & Plumbing in Virginia, Co. Cavan"
            src="https://www.google.com/maps?q=Virginia+Shopping+Centre,+Virginia,+Co.+Cavan+A82+X9W4&output=embed"
            loading="lazy"
            className="h-72 w-full rounded-3xl border border-border"
          />
        </div>

        <form
          onSubmit={onSubmit}
          className="rounded-[2rem] border border-border bg-card p-8 shadow-soft md:p-10"
        >
          <h2 className="text-3xl md:text-4xl">Request a quote</h2>
          <p className="mt-2 text-muted-foreground">
            This opens your email app with your details filled in, ready to send.
          </p>

          <fieldset className="mt-8">
            <legend className="text-sm font-semibold">What can we help with?</legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {topics.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTopic(t)}
                  aria-pressed={topic === t}
                  className={
                    topic === t
                      ? "rounded-full bg-pine px-4 py-2 text-sm font-semibold text-pine-foreground"
                      : "rounded-full border border-border px-4 py-2 text-sm font-semibold text-muted-foreground hover:text-foreground"
                  }
                >
                  {t}
                </button>
              ))}
            </div>
          </fieldset>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" required maxLength={100} className="h-12" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" name="phone" type="tel" required maxLength={30} className="h-12" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" maxLength={255} className="h-12" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="eircode">Eircode</Label>
              <Input id="eircode" name="eircode" maxLength={10} className="h-12" />
            </div>
          </div>
          <div className="mt-5 space-y-2">
            <Label htmlFor="message">Tell us about your home & what you need</Label>
            <Textarea id="message" name="message" required maxLength={2000} rows={6} />
          </div>
          <Button type="submit" variant="ember" size="xl" className="mt-8 w-full sm:w-auto">
            Send enquiry <Send />
          </Button>
        </form>
      </section>
    </>
  );
}
