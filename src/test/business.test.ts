import { describe, expect, it } from "vitest";

import { business } from "@/lib/business";

describe("Business contact", () => {
  it("uses the corrected phone number for display and calls", () => {
    expect(business.phones).toEqual([
      { label: "+353 49 854 3066", href: "tel:+353498543066" },
    ]);
  });
});