import { afterEach } from "vite-plus/test";
import { cleanup } from "@testing-library/react";

// React Testing Library only auto-cleans when test globals are enabled.
// The project imports Vitest APIs explicitly, so clean up manually.
afterEach(() => {
  cleanup();
  // Theme preference lives in localStorage; keep tests independent.
  localStorage.clear();
  delete document.documentElement.dataset.theme;
});
