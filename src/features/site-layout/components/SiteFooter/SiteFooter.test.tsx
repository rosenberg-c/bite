import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { describe, expect, it } from "vite-plus/test";
import { navigation } from "../../content/navigation";
import { brand } from "../../content/site";
import { footerCopy } from "./SiteFooter.content";
import { SiteFooter } from "./SiteFooter";

describe("SiteFooter", () => {
  it("renders the brand intro", () => {
    render(
      <MemoryRouter>
        <SiteFooter />
      </MemoryRouter>,
    );

    expect(screen.getByText(brand.wordmark)).toBeTruthy();
    expect(screen.getByText(brand.tagline)).toBeTruthy();
  });

  it("renders a labelled footer navigation with every site route", () => {
    render(
      <MemoryRouter>
        <SiteFooter />
      </MemoryRouter>,
    );

    const nav = screen.getByRole("navigation", {
      name: footerCopy.navigationLabel,
    });
    const links = Array.from(nav.querySelectorAll("a"));

    expect(links.map((link) => link.textContent)).toEqual(
      navigation.map((item) => item.label),
    );
    expect(links.map((link) => link.getAttribute("href"))).toEqual(
      navigation.map((item) => item.to),
    );
  });

  it("renders the footer notice and site name", () => {
    render(
      <MemoryRouter>
        <SiteFooter />
      </MemoryRouter>,
    );

    expect(screen.getByText(footerCopy.notice)).toBeTruthy();
    expect(screen.getByText(brand.name)).toBeTruthy();
  });
});
