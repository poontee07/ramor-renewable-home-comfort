import { Link } from "@tanstack/react-router";
import { ArrowRight, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { business } from "@/lib/business";

export function CtaBand({
  title = "Ready for a warmer, cheaper-to-run home?",
  text = "Tell us about your house and we'll talk you through the options — heat pump, boiler upgrade or smarter controls — with honest advice and a clear quote.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="container-site py-20">
      <div className="relative overflow-hidden rounded-[2rem] bg-pine px-8 py-14 text-pine-foreground md:px-16 md:py-20">
        <div
          aria-hidden
          className="animate-glow absolute -right-24 -top-24 size-96 rounded-full bg-gradient-ember opacity-60 blur-3xl"
        />
        <div className="relative grid items-end gap-10 md:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="eyebrow text-ember-glow">Free, no-obligation chat</p>
            <h2 className="mt-4 text-4xl leading-[1.05] md:text-5xl">{title}</h2>
            <p className="mt-5 max-w-xl text-pine-muted">{text}</p>
          </div>
          <div className="flex flex-col gap-3 md:items-end">
            <Button asChild variant="ember" size="xl">
              <Link to="/contact">
                Request a quote <ArrowRight />
              </Link>
            </Button>
            <Button asChild variant="outline-light" size="xl">
              <a href={business.phones[0].href}>
                <Phone /> {business.phones[0].label}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
