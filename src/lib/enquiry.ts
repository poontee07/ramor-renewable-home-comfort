import { business } from "./business";

export type Enquiry = {
  name: string;
  phone: string;
  email: string;
  eircode: string;
  topic: string;
  message: string;
};

export function buildEnquiryMailto(e: Enquiry) {
  const subject = `Website enquiry: ${e.topic} — ${e.name.trim()}`;
  const body = [
    `Name: ${e.name.trim()}`,
    `Phone: ${e.phone.trim()}`,
    e.email.trim() && `Email: ${e.email.trim()}`,
    e.eircode.trim() && `Eircode: ${e.eircode.trim()}`,
    `Enquiry about: ${e.topic}`,
    "",
    e.message.trim(),
  ]
    .filter((l) => l !== "" || l === "")
    .filter((l) => l !== false && l !== undefined)
    .join("\n");
  return `mailto:${business.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
