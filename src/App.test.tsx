import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { describe, expect, it } from "vite-plus/test";
import { App } from "./App";
import { paths } from "./routes";
import { home } from "./pages/Home/Home.content";
import { menuCopy } from "./pages/Menu/Menu.content";
import { aboutCopy } from "./pages/About/About.content";
import { galleryCopy } from "./pages/Gallery/Gallery.content";
import { contactCopy } from "./pages/Contact/Contact.content";
import { notFoundCopy } from "./pages/NotFound/NotFound.content";

const renderAt = (path: string) =>
  render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>,
  );

const routeCases: Array<[string, string]> = [
  [paths.home, home.titleLines.join("")],
  [paths.menu, menuCopy.title],
  [paths.about, aboutCopy.title],
  [paths.gallery, galleryCopy.title],
  [paths.contact, contactCopy.title],
  ["/not-a-route", notFoundCopy.title],
];

describe("App routes", () => {
  it.each(routeCases)(
    "renders %s with the shared site layout",
    (path, title) => {
      renderAt(path);

      const heading = screen.getByRole("heading", { level: 1 });
      expect(heading.textContent).toContain(title);

      // The shared shell must wrap every route.
      expect(screen.getByRole("contentinfo")).toBeTruthy();
      expect(
        screen.getByRole("navigation", { name: "Main navigation" }),
      ).toBeTruthy();
      expect(
        screen.getByRole("link", { name: "Skip to content" }),
      ).toBeTruthy();
      expect(screen.getByRole("main").contains(heading)).toBeTruthy();
    },
  );

  it("renders the home hero calls to action", () => {
    renderAt(paths.home);

    expect(screen.getByRole("link", { name: home.primaryCta })).toBeTruthy();
    expect(screen.getByRole("link", { name: home.secondaryCta })).toBeTruthy();
  });

  it("sends the home primary call to action to the menu", () => {
    renderAt(paths.home);

    const cta = screen.getByRole("link", { name: home.primaryCta });
    expect(cta.getAttribute("href")).toBe(paths.menu);
  });

  it("sends the contact primary call to action to the menu", () => {
    renderAt(paths.contact);

    const primaryAction = contactCopy.actions.find(
      (action) => action.variant === "primary",
    );
    if (!primaryAction) {
      throw new Error("Missing primary contact call to action");
    }

    const cta = screen.getByRole("link", { name: primaryAction.label });
    expect(cta.getAttribute("href")).toBe(paths.menu);
  });

  it("renders the not-found call to action back home", () => {
    renderAt("/missing-page");

    const cta = screen.getByRole("link", { name: notFoundCopy.cta });
    expect(cta.getAttribute("href")).toBe(paths.home);
  });
});
