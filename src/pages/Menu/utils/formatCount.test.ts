import { describe, expect, it } from "vite-plus/test";
import { formatCount } from "./formatCount";

const itemForms = { one: "item", other: "items" } as const;

describe("formatCount", () => {
  it("uses the singular form for exactly one", () => {
    expect(formatCount(1, itemForms)).toBe("1 item");
  });

  it.each([0, 2, 12, 1_000_000])("uses the plural form for %s", (count) => {
    expect(formatCount(count, itemForms)).toBe(`${count} items`);
  });

  it("follows English plural rules for negative one", () => {
    expect(formatCount(-1, itemForms)).toBe("-1 item");
  });

  it.each([
    1.5,
    Number.NaN,
    Number.POSITIVE_INFINITY,
    Number.NEGATIVE_INFINITY,
  ])("uses the plural form for %s", (count) => {
    expect(formatCount(count, itemForms)).toBe(`${count} items`);
  });

  it("uses the provided labels for both forms", () => {
    const forms = { one: "cup", other: "cups" } as const;

    expect(formatCount(1, forms)).toBe("1 cup");
    expect(formatCount(4, forms)).toBe("4 cups");
  });
});
