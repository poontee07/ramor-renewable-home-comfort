import { Link } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { business } from "@/lib/business";
import { Logo } from "./Logo";

const nav = [
  { to: "/services", label: "Services" },
  { to: "/heat-pumps", label: "Heat pump guide" },
  { to: "/grants", label: "SEAI grants" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="hidden bg-pine text-pine-foreground md:block">
        <div className="container-site flex h-9 items-center justify-between text-xs">
          <span className="text-pine-muted">
            Heat pumps · Boilers · Smart controls — serving Virginia, Co. Cavan &amp; surrounding
            areas since {business.founded}
          </span>
          <a href={`mailto:${business.email}`} className="font-semibold hover:text-ember-glow">
            {business.email}
          </a>
        </div>
      </div>

      <div className="container-site flex h-20 items-center justify-between gap-6">
        <Link to="/" aria-label="Ramor home" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-full px-4 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground bg-muted" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild variant="ember" size="lg" className="hidden sm:inline-flex">
            <a href={business.phones[0].href}>
              <Phone /> {business.phones[0].label}
            </a>
          </Button>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full border border-border lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-background lg:hidden" aria-label="Mobile">
          <div className="container-site flex flex-col py-4">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-4 font-display text-2xl"
              >
                {item.label}
              </Link>
            ))}
            <Button asChild variant="ember" size="xl" className="mt-6">
              <a href={business.phones[0].href}>
                <Phone /> Call {business.phones[0].label}
              </a>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
