export const business = {
  name: "Ramor Renewable Heating & Plumbing",
  legalName: "Ramor Renewable Heating and Plumbing Limited",
  shortName: "Ramor",
  croNumber: "474492",
  founded: 2009,
  phones: [
    { label: "+353 87 626 3329", href: "tel:+353876263329" },
  ],
  email: "info@rrhp.ie",
  website: "www.rrhp.ie",
  address: {
    line1: "Unit 1A, Block A, Virginia Shopping Centre",
    town: "Virginia, Co. Cavan",
    eircode: "A82 X9W4",
    country: "Ireland",
  },
  hours: [{ days: "Monday – Friday", time: "08:30 – 17:00" }],
  rating: { score: "5.0", count: 9 },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Ramor+Renewable+Heating+%26+Plumbing+Virginia+Cavan",
  seaiUrl: "https://www.seai.ie/grants/home-energy-grants",
} as const;

export const yearsTrading = (now = new Date()) => now.getFullYear() - business.founded;
