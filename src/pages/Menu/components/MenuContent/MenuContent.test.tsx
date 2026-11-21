import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vite-plus/test";
import { photos } from "../../../../content/photos";
import { menuItems } from "../../data/menu";
import { productCardCopy } from "../ProductCard/ProductCard.content";
import { MenuContent } from "./MenuContent";

const sectionForCategory = (category: string) => {
  const heading = screen.getByRole("heading", { level: 2, name: category });
  const section = heading.closest("section");
  if (!section) {
    throw new Error(`Missing section for ${category}`);
  }
  return section;
};

const cardForProduct = (name: string) => {
  const heading = screen.getByRole("heading", { level: 3, name });
  const card = heading.closest("article");
  if (!card) {
    throw new Error(`Missing card for ${name}`);
  }
  return card;
};

describe("MenuContent", () => {
  it("groups products into one section per category", () => {
    render(<MenuContent />);

    const headings = screen.getAllByRole("heading", { level: 2 });
    expect(headings.map((heading) => heading.textContent)).toEqual([
      "Pastries",
      "Cookies",
      "Drinks",
    ]);

    for (const category of ["Pastries", "Cookies", "Drinks"]) {
      const expectedNames = menuItems
        .filter((item) => item.category === category)
        .map((item) => item.name);
      const section = sectionForCategory(category);
      const productNames = within(section)
        .getAllByRole("heading", { level: 3 })
        .map((heading) => heading.textContent);

      expect(productNames).toEqual(expectedNames);
    }
  });

  it("shows a count for each category", () => {
    render(<MenuContent />);

    expect(
      within(sectionForCategory("Pastries")).getByText("2 items"),
    ).toBeTruthy();
    expect(
      within(sectionForCategory("Cookies")).getByText("1 item"),
    ).toBeTruthy();
    expect(
      within(sectionForCategory("Drinks")).getByText("1 item"),
    ).toBeTruthy();
  });

  it("uses shared heading and flush-card styles", () => {
    render(<MenuContent />);

    const category = screen.getByRole("heading", {
      level: 2,
      name: "Pastries",
    });
    expect(category.classList.contains("subsection-heading")).toBe(true);

    const card = cardForProduct("Butter Croissant");
    expect(card.classList.contains("surface-card--flush")).toBe(true);
    expect(
      within(card)
        .getByRole("heading", { level: 3, name: "Butter Croissant" })
        .classList.contains("card-title"),
    ).toBe(true);
  });

  it.each(menuItems.map((item) => [item.name, item.priceSEK] as const))(
    "renders %s with its price of %s SEK",
    (name, price) => {
      render(<MenuContent />);

      const card = cardForProduct(name);
      expect(
        within(card).getByText(`${price} ${productCardCopy.priceSuffix}`),
      ).toBeTruthy();
    },
  );

  it("uses the item-specific photo for a mapped product", () => {
    render(<MenuContent />);

    const image = within(cardForProduct("Butter Croissant")).getByRole("img");
    expect(image.getAttribute("src")).toBe(photos.croissant.src);
    expect(image.getAttribute("alt")).toBe(photos.croissant.alt);
  });
});
