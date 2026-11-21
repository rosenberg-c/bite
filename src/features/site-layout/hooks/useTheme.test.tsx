import { act, renderHook } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vite-plus/test";
import { THEME_STORAGE_KEY } from "../theme";
import { useThemePreference } from "./useTheme";

type ChangeListener = () => void;

const createSystemMedia = (matches: boolean) => {
  const listeners = new Set<ChangeListener>();
  const addEventListener = vi.fn((_type: string, listener: ChangeListener) => {
    listeners.add(listener);
  });
  const removeEventListener = vi.fn(
    (_type: string, listener: ChangeListener) => {
      listeners.delete(listener);
    },
  );
  const media = {
    matches,
    addEventListener,
    removeEventListener,
  } as unknown as MediaQueryList;

  return {
    media,
    addEventListener,
    removeEventListener,
    changeTo(next: boolean) {
      (media as { matches: boolean }).matches = next;
      act(() => {
        listeners.forEach((listener) => listener());
      });
    },
  };
};

afterEach(() => {
  vi.restoreAllMocks();
  document.documentElement.style.colorScheme = "";
});

describe("useThemePreference", () => {
  it("restores a stored preference on mount", () => {
    localStorage.setItem(THEME_STORAGE_KEY, "dark");

    const { result } = renderHook(() => useThemePreference());

    expect(result.current.preference).toBe("dark");
    expect(document.documentElement.dataset.theme).toBe("dark");
    expect(document.documentElement.style.colorScheme).toBe("dark");
  });

  it("follows an OS theme change while system is selected", () => {
    const system = createSystemMedia(false);
    vi.spyOn(window, "matchMedia").mockReturnValue(system.media);

    const { result } = renderHook(() => useThemePreference());

    expect(result.current.preference).toBe("system");
    expect(document.documentElement.dataset.theme).toBe("light");
    expect(system.addEventListener).toHaveBeenCalledWith(
      "change",
      expect.any(Function),
    );

    system.changeTo(true);

    expect(document.documentElement.dataset.theme).toBe("dark");
    expect(document.documentElement.style.colorScheme).toBe("dark");
  });

  it("removes the system listener when switching away from system", () => {
    const system = createSystemMedia(false);
    vi.spyOn(window, "matchMedia").mockReturnValue(system.media);

    const { result } = renderHook(() => useThemePreference());
    const listener = system.addEventListener.mock.calls[0]?.[1];
    expect(listener).toBeTypeOf("function");

    act(() => result.current.setPreference("light"));

    expect(result.current.preference).toBe("light");
    expect(localStorage.getItem(THEME_STORAGE_KEY)).toBe("light");
    expect(document.documentElement.dataset.theme).toBe("light");
    expect(system.removeEventListener).toHaveBeenCalledTimes(1);
    expect(system.removeEventListener).toHaveBeenCalledWith("change", listener);
  });

  it("uses the legacy media listener API when addEventListener is absent", () => {
    const listeners = new Set<ChangeListener>();
    const addListener = vi.fn((listener: ChangeListener) => {
      listeners.add(listener);
    });
    const removeListener = vi.fn((listener: ChangeListener) => {
      listeners.delete(listener);
    });
    const media = {
      matches: false,
      addListener,
      removeListener,
    } as unknown as MediaQueryList;
    vi.spyOn(window, "matchMedia").mockReturnValue(media);

    const { result } = renderHook(() => useThemePreference());
    const listener = addListener.mock.calls[0]?.[0];
    expect(listener).toBeTypeOf("function");

    (media as { matches: boolean }).matches = true;
    act(() => {
      listeners.forEach((changeListener) => changeListener());
    });
    expect(document.documentElement.dataset.theme).toBe("dark");

    act(() => result.current.setPreference("light"));

    expect(removeListener).toHaveBeenCalledTimes(1);
    expect(removeListener).toHaveBeenCalledWith(listener);
    expect(document.documentElement.dataset.theme).toBe("light");
  });

  it("falls back to light when system media is unavailable", () => {
    vi.spyOn(window, "matchMedia").mockImplementation(() => {
      throw new Error("matchMedia unavailable");
    });

    const { result } = renderHook(() => useThemePreference());

    expect(result.current.preference).toBe("system");
    expect(document.documentElement.dataset.theme).toBe("light");
    expect(document.documentElement.style.colorScheme).toBe("light");
  });
});
