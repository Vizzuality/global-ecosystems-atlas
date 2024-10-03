import { describe, it, expect } from "vitest";

import { cn, formatPercentage, formatHA } from "./utils";

describe("utils functions", () => {
  describe("cn function", () => {
    it("merges class names correctly", () => {
      expect(cn("class1", "class2")).toBe("class1 class2");
      expect(cn("class1", false && "class2")).toBe("class1");
      expect(cn("class1", undefined, "class2")).toBe("class1 class2");
      expect(
        cn({
          class1: true,
          class2: true,
        }),
      ).toBe("class1 class2");
    });
  });

  describe("formatPercentage function", () => {
    it("formats numbers as percentages correctly", () => {
      expect(formatPercentage(0.1234)).toBe("12.34%");
      expect(formatPercentage(0.1234, { maximumFractionDigits: 1 })).toBe("12.3%");
      expect(formatPercentage(0.1234, { maximumFractionDigits: 3 })).toBe("12.34%");
    });
  });

  describe("formatHA function", () => {
    it("formats numbers as hectares correctly", () => {
      expect(formatHA(1234)).toBe("1.23 K ha");
      expect(formatHA(1234, { maximumFractionDigits: 1 })).toBe("1.2 K ha");
      expect(formatHA(1234, { maximumFractionDigits: 3 })).toBe("1.234 K ha");
    });
  });
});
