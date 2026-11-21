import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { describe, expect, it } from "vite-plus/test";
import { navigation } from "../../content/navigation";
import { paths } from "../../../../routes";
import { siteHeaderCopy } from "./SiteHeader.content";
import { SiteHeader } from "./SiteHeader";

const renderHeader = (initialPath: string = paths.home) =>
  render(
    <MemoryRouter initialEntries={[initialPath]}>
      <SiteHeader />
    </MemoryRouter>,
  );

describe("SiteHeader", () => {
  it("renders a brand link back to the home route", () => {
    renderHeader();

    const brand = screen.getByRole("link", { name: /Bakery/ });
    expect(brand.getAttribute("href")).toBe(paths.home);
  });

  it("renders the main navigation with every site route", () => {
    renderHeader();

    const nav = screen.getByRole("navigation", {
      name: siteHeaderCopy.mainNavigationLabel,
    });
    const links = Array.from(nav.querySelectorAll("a"));

    expect(links.map((link) => link.textContent)).toEqual(
      navigation.map((item) => item.label),
    );
    expect(links.map((link) => link.getAttribute("href"))).toEqual(
      navigation.map((item) => item.to),
    );
  });

  it("marks the active route with aria-current", () => {
    renderHeader(paths.menu);

    const links = screen
      .getAllByRole("link")
      .filter((link) =>
        navigation.some((item) => item.to === link.getAttribute("href")),
      );

    const current = links.filter(
      (link) => link.getAttribute("aria-current") === "page",
    );
    expect(current).toHaveLength(1);
    expect(current[0].textContent).toBe("Menu");
  });

  it("exposes the navigation toggle with expanded state and controls", () => {
    renderHeader();

    const toggle = screen.getByRole("button", {
      name: siteHeaderCopy.navigationToggle.open,
    });
    expect(toggle.getAttribute("aria-expanded")).toBe("false");
    expect(toggle.getAttribute("aria-controls")).toBe("primary-navigation");

    const nav = document.getElementById("primary-navigation");
    expect(nav).toBeTruthy();
    expect(nav?.getAttribute("data-open")).toBe("false");
  });

  it("toggles the navigation open and closed", () => {
    renderHeader();

    const toggle = screen.getByRole("button", {
      name: siteHeaderCopy.navigationToggle.open,
    });
    const nav = document.getElementById("primary-navigation");

    fireEvent.click(toggle);
    expect(toggle.getAttribute("aria-expanded")).toBe("true");
    expect(toggle.getAttribute("aria-label")).toBe(
      siteHeaderCopy.navigationToggle.close,
    );
    expect(nav?.getAttribute("data-open")).toBe("true");

    fireEvent.click(toggle);
    expect(toggle.getAttribute("aria-expanded")).toBe("false");
    expect(toggle.getAttribute("aria-label")).toBe(
      siteHeaderCopy.navigationToggle.open,
    );
    expect(nav?.getAttribute("data-open")).toBe("false");
  });

  it("closes the navigation after selecting a route", () => {
    renderHeader();

    const toggle = screen.getByRole("button", {
      name: siteHeaderCopy.navigationToggle.open,
    });
    fireEvent.click(toggle);

    fireEvent.click(screen.getByRole("link", { name: "Menu" }));

    expect(toggle.getAttribute("aria-expanded")).toBe("false");
    expect(
      document.getElementById("primary-navigation")?.getAttribute("data-open"),
    ).toBe("false");
  });

  it("renders a theme select that starts on the stored preference", () => {
    renderHeader();

    const select = screen.getByRole("combobox", {
      name: siteHeaderCopy.colorThemeLabel,
    });
    const options = Array.from(select.querySelectorAll("option"));

    expect(options.map((option) => option.value)).toEqual([
      "system",
      "light",
      "dark",
    ]);
    expect(options.map((option) => option.textContent)).toEqual([
      siteHeaderCopy.themeOptions.system,
      siteHeaderCopy.themeOptions.light,
      siteHeaderCopy.themeOptions.dark,
    ]);
    expect((select as HTMLSelectElement).value).toBe("system");
  });

  it("updates the stored theme preference when changed", () => {
    renderHeader();

    const select = screen.getByRole("combobox", {
      name: siteHeaderCopy.colorThemeLabel,
    });
    fireEvent.change(select, { target: { value: "dark" } });

    expect((select as HTMLSelectElement).value).toBe("dark");
    expect(localStorage.getItem("bite-theme-preference")).toBe("dark");
    expect(document.documentElement.dataset.theme).toBe("dark");
  });
});
