import { Link } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

import { business } from "@/lib/business";
import { Logo } from "./Logo";

export function SiteFooter() {
  return (
    <footer className="bg-pine text-pine-foreground">
      <div className="container-site grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-4">
          <Logo light />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-pine-muted">
            Renewable heating, boilers and plumbing for homes in Cavan and surrounding areas.
            Based by the shores of Lough Ramor since {business.founded}.
          </p>
        </div>

        <div className="md:col-span-2">
          <h3 className="eyebrow text-ember-glow">Explore</h3>
          <ul className="mt-5 space-y-3 text-sm">
            <li><Link to="/services" className="hover:text-ember-glow">Services</Link></li>
            <li><Link to="/heat-pumps" className="hover:text-ember-glow">Heat pump guide</Link></li>
            <li><Link to="/grants" className="hover:text-ember-glow">SEAI grants</Link></li>
            <li><Link to="/about" className="hover:text-ember-glow">About us</Link></li>
            <li><Link to="/contact" className="hover:text-ember-glow">Contact</Link></li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <h3 className="eyebrow text-ember-glow">Visit</h3>
          <a
            href={business.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-5 flex gap-3 text-sm leading-relaxed hover:text-ember-glow"
          >
            <MapPin className="mt-0.5 size-4 shrink-0" />
            <span>
              {business.address.line1}
              <br />
              {business.address.town}
              <br />
              {business.address.eircode}, {business.address.country}
            </span>
          </a>
          <p className="mt-4 flex gap-3 text-sm">
            <Clock className="mt-0.5 size-4 shrink-0" />
            <span>
              {business.hours.map((h) => (
                <span key={h.days} className="block">
                  {h.days}: {h.time}
                </span>
              ))}
            </span>
          </p>
        </div>

        <div className="md:col-span-3">
          <h3 className="eyebrow text-ember-glow">Talk to us</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {business.phones.map((p) => (
              <li key={p.href}>
                <a href={p.href} className="flex items-center gap-3 hover:text-ember-glow">
                  <Phone className="size-4" /> {p.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={`mailto:${business.email}`}
                className="flex items-center gap-3 hover:text-ember-glow"
              >
                <Mail className="size-4" /> {business.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-pine-foreground/10">
        <div className="container-site flex flex-col gap-2 py-6 text-xs text-pine-muted md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {business.legalName}. Registered in Ireland, CRO No.{" "}
            {business.croNumber}.
          </p>
          <p>Virginia · Co. Cavan · Ireland</p>
        </div>
      </div>
    </footer>
  );
}
