import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router";
import { describe, expect, it } from "vite-plus/test";
import { SiteLayout } from "./SiteLayout";
import { siteLayoutCopy } from "./SiteLayout.content";

const renderLayout = (initialPath = "/") =>
  render(
    <MemoryRouter initialEntries={[initialPath]}>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="*" element={<p>Route outlet content</p>} />
        </Route>
      </Routes>
    </MemoryRouter>,
  );

describe("SiteLayout", () => {
  it("renders a skip link targeting the main landmark", () => {
    renderLayout();

    const skipLink = screen.getByRole("link", {
      name: siteLayoutCopy.skipLink,
    });
    expect(skipLink.getAttribute("href")).toBe("#main-content");

    const main = screen.getByRole("main");
    expect(main.getAttribute("id")).toBe("main-content");
    expect(main.getAttribute("tabindex")).toBe("-1");
  });

  it("renders the shared banner, main, and contentinfo landmarks", () => {
    renderLayout();

    expect(screen.getByRole("banner")).toBeTruthy();
    expect(screen.getByRole("main")).toBeTruthy();
    expect(screen.getByRole("contentinfo")).toBeTruthy();
  });

  it("orders skip link, banner, main, and contentinfo in the document", () => {
    renderLayout();

    const skipLink = screen.getByRole("link", {
      name: siteLayoutCopy.skipLink,
    });
    const banner = screen.getByRole("banner");
    const main = screen.getByRole("main");
    const contentinfo = screen.getByRole("contentinfo");

    // Non-zero FOLLOWING means the second node appears after the first.
    expect(
      skipLink.compareDocumentPosition(banner) &
        Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();
    expect(
      banner.compareDocumentPosition(main) & Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();
    expect(
      main.compareDocumentPosition(contentinfo) &
        Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy();
  });

  it("renders the matched route inside the main landmark", () => {
    renderLayout();

    const main = screen.getByRole("main");
    expect(main.textContent).toContain("Route outlet content");
  });

  it("keeps the shared layout when the route changes", () => {
    renderLayout("/menu");

    expect(screen.getByRole("banner")).toBeTruthy();
    expect(screen.getByRole("contentinfo")).toBeTruthy();
    expect(screen.getByRole("main").textContent).toContain(
      "Route outlet content",
    );
  });
});
