import { Fan, Flame, Droplets, Gauge, Wind, type LucideIcon } from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  kicker: string;
  summary: string;
  items: string[];
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    slug: "heat-pumps",
    title: "Heat pumps",
    kicker: "Renewable",
    summary:
      "Air-to-water and exhaust air heat pumps designed around your home, then looked after every year so they keep running at peak efficiency.",
    items: [
      "Air-to-water heat pump installation",
      "Exhaust air systems",
      "Annual servicing & health checks",
      "Diagnostics & repair of existing systems",
    ],
    icon: Fan,
  },
  {
    slug: "gas",
    title: "Gas heating",
    kicker: "Boilers",
    summary:
      "New gas boilers, like-for-like replacements of tired old units and the efficiency upgrades that make a real dent in your bills.",
    items: [
      "Gas boiler installation",
      "Old boiler replacement",
      "Servicing & maintenance",
      "Energy-efficiency upgrades",
    ],
    icon: Flame,
  },
  {
    slug: "oil",
    title: "Oil heating",
    kicker: "Boilers",
    summary:
      "Keep your oil-fired system safe, reliable and economical — or swap it out for something newer when the time is right.",
    items: [
      "Oil boiler servicing",
      "Equipment replacement",
      "Commissioning & safety checks",
    ],
    icon: Droplets,
  },
  {
    slug: "controls",
    title: "Smart heating controls",
    kicker: "Comfort",
    summary:
      "Heat only the rooms you use, when you use them. Zoning, room-by-room thermostats and app control with systems like Honeywell evohome.",
    items: [
      "Heating zoning",
      "Individual room thermostats",
      "Heating & hot water controls",
      "Honeywell evohome",
    ],
    icon: Gauge,
  },
  {
    slug: "mechanical",
    title: "Ventilation & mechanical",
    kicker: "Whole-house",
    summary:
      "Fresh air without the heat loss, cleaner heating circuits and hot water from the sun — the work that makes a modern home perform.",
    items: [
      "Mechanical ventilation",
      "Heat recovery ventilation",
      "Central heating replacement",
      "Power flushing",
      "Solar thermal hot water",
    ],
    icon: Wind,
  },
];
