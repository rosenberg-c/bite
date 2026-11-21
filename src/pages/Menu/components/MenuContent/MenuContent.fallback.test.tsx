import { render, screen, within } from "@testing-library/react";
import { describe, expect, it, vi } from "vite-plus/test";
import { photos } from "../../../../content/photos";
import { MenuContent } from "./MenuContent";

vi.mock("../../data/menu", () => ({
  menuItems: [
    {
      id: "unmapped-test-item",
      name: "House Pastry",
      description: "Baked fresh today",
      priceSEK: 42,
      category: "Pastries",
    },
  ],
}));

describe("MenuContent photo fallback", () => {
  it("uses the shared pastry photo when an item has no specific photo", () => {
    render(<MenuContent />);

    const card = screen.getByRole("article");
    expect(
      within(card).getByRole("heading", { level: 3, name: "House Pastry" }),
    ).toBeTruthy();

    const image = within(card).getByRole("img");
    expect(image.getAttribute("src")).toBe(photos.pastry.src);
    expect(image.getAttribute("alt")).toBe(photos.pastry.alt);
  });
});
