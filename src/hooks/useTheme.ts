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
    if (typeof media.addListener === "function") {
      media.addListener(handleChange);
      return () => media.removeListener(handleChange);
    }
  }, [preference]);

  const setPreference = (next: ThemePreference) => {
    writeThemePreference(next);
    setPreferenceState(next);
  };

  return { preference, setPreference };
}
