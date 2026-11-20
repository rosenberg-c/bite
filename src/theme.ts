export type ThemePreference = "system" | "light" | "dark";

export const THEME_STORAGE_KEY = "bite-theme-preference";

export function readThemePreference(): ThemePreference {
  try {
    const value = localStorage.getItem(THEME_STORAGE_KEY);
    if (value === "system" || value === "light" || value === "dark") {
      return value;
    }
  } catch {
    // Ignore storage access failures and fall back to system.
  }
  return "system";
}

export function writeThemePreference(value: ThemePreference): void {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, value);
  } catch {
    // Ignore storage access failures.
  }
}

export function getSystemThemeMedia(): MediaQueryList | null {
  try {
    return typeof window !== "undefined" &&
      typeof window.matchMedia === "function"
      ? window.matchMedia("(prefers-color-scheme: dark)")
      : null;
  } catch {
    return null;
  }
}

export function resolveTheme(preference: ThemePreference): "light" | "dark" {
  if (preference === "light") return "light";
  if (preference === "dark") return "dark";
  return getSystemThemeMedia()?.matches ? "dark" : "light";
}

export function applyTheme(preference: ThemePreference): void {
  const resolved = resolveTheme(preference);
  const root = document.documentElement;
  root.dataset.theme = resolved;
  root.style.colorScheme = resolved;

  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) {
    const rootStyle =
      (
        document.defaultView ?? (typeof window !== "undefined" ? window : null)
      )?.getComputedStyle?.(root) ??
      (typeof getComputedStyle === "function" ? getComputedStyle(root) : null);
    const cream = rootStyle?.getPropertyValue("--color-cream")?.trim() ?? "";
    if (cream) {
      meta.setAttribute("content", cream);
    }
  }
}
