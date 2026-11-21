import { describe, expect, it, vi } from "vite-plus/test";
import {
  applyTheme,
  getSystemThemeMedia,
  readThemePreference,
  resolveTheme,
  THEME_STORAGE_KEY,
  writeThemePreference,
} from "./theme";

describe("theme preference storage", () => {
  it("defaults to system when nothing is stored", () => {
    localStorage.removeItem(THEME_STORAGE_KEY);
    expect(readThemePreference()).toBe("system");
  });

  it("round-trips a stored preference", () => {
    writeThemePreference("dark");
    expect(localStorage.getItem(THEME_STORAGE_KEY)).toBe("dark");
    expect(readThemePreference()).toBe("dark");
  });

  it("falls back to system for invalid stored values", () => {
    localStorage.setItem(THEME_STORAGE_KEY, "neon");
    expect(readThemePreference()).toBe("system");
  });
});

describe("resolveTheme", () => {
  it("keeps explicit light and dark preferences", () => {
    expect(resolveTheme("light")).toBe("light");
    expect(resolveTheme("dark")).toBe("dark");
  });

  it("follows the system preference for 'system'", () => {
    const media = { matches: true } as MediaQueryList;
    vi.spyOn(window, "matchMedia").mockReturnValue(media);

    expect(resolveTheme("system")).toBe("dark");
    expect(getSystemThemeMedia()).toBe(media);
  });

  it("resolves to light when the system preference is not dark", () => {
    const media = { matches: false } as MediaQueryList;
    vi.spyOn(window, "matchMedia").mockReturnValue(media);

    expect(resolveTheme("system")).toBe("light");
  });

  it("returns null when matchMedia throws", () => {
    vi.spyOn(window, "matchMedia").mockImplementation(() => {
      throw new Error("matchMedia unavailable");
    });

    expect(getSystemThemeMedia()).toBeNull();
    // Falls back to light instead of throwing.
    expect(resolveTheme("system")).toBe("light");
  });
});

describe("applyTheme", () => {
  it("sets the resolved theme on the document root", () => {
    applyTheme("dark");

    expect(document.documentElement.dataset.theme).toBe("dark");
    expect(document.documentElement.style.colorScheme).toBe("dark");
  });

  it("resolves the system preference onto the document root", () => {
    const media = { matches: false } as MediaQueryList;
    vi.spyOn(window, "matchMedia").mockReturnValue(media);

    applyTheme("system");

    expect(document.documentElement.dataset.theme).toBe("light");
    expect(document.documentElement.style.colorScheme).toBe("light");
  });
});
