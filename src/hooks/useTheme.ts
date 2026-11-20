import { useEffect, useState } from "react";

import {
  applyTheme,
  getSystemThemeMedia,
  readThemePreference,
  writeThemePreference,
  type ThemePreference,
} from "../theme";

export function useThemePreference() {
  const [preference, setPreferenceState] = useState<ThemePreference>(() =>
    readThemePreference(),
  );

  useEffect(() => {
    applyTheme(preference);

    if (preference !== "system") return;

    const media = getSystemThemeMedia();
    if (!media) return;

    const handleChange = () => applyTheme("system");
    if (typeof media.addEventListener === "function") {
      media.addEventListener("change", handleChange);
      return () => media.removeEventListener("change", handleChange);
    }

    // Older browsers (for example Safari < 14) only expose the deprecated
    // addListener/removeListener API. Access it through a local type so the
    // deprecated DOM members do not trigger deprecation diagnostics.
    const legacyMedia = media as unknown as {
      addListener?: (listener: (event: MediaQueryListEvent) => void) => void;
      removeListener?: (listener: (event: MediaQueryListEvent) => void) => void;
    };
    if (typeof legacyMedia.addListener === "function") {
      legacyMedia.addListener(handleChange);
      return () => legacyMedia.removeListener?.(handleChange);
    }
  }, [preference]);

  const setPreference = (next: ThemePreference) => {
    writeThemePreference(next);
    setPreferenceState(next);
  };

  return { preference, setPreference };
}
