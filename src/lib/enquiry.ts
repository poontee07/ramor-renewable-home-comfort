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
  const lines: string[] = [`Name: ${e.name.trim()}`, `Phone: ${e.phone.trim()}`];
  if (e.email.trim()) lines.push(`Email: ${e.email.trim()}`);
  if (e.eircode.trim()) lines.push(`Eircode: ${e.eircode.trim()}`);
  lines.push(`Enquiry about: ${e.topic}`, "", e.message.trim());
  const body = lines.join("\n");
  return `mailto:${business.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
