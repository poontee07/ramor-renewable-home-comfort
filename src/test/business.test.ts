import { describe, expect, it } from "vitest";

import { business } from "@/lib/business";

describe("Business contact", () => {
  it("uses the corrected phone number for display and calls", () => {
    expect(business.phones).toEqual([
      { label: "+353 87 626 3329", href: "tel:+353876263329" },
    ]);
  });
});