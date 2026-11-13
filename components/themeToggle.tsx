"use client";

import { useEffect, useRef } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function ThemeToggle() {
  const switchRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const isDark = document.documentElement.dataset.theme !== "light";
    switchRef.current?.setAttribute("aria-checked", String(isDark));
  }, []);

  function toggleTheme() {
    const root = document.documentElement;
    const next = root.dataset.theme === "light" ? "dark" : "light";
    root.dataset.theme = next;
    switchRef.current?.setAttribute("aria-checked", String(next === "dark"));

    try {
      localStorage.setItem("theme", next);
    } catch {
      // The current page can still switch themes if storage is unavailable.
    }
  }

  return (
    <button
      ref={switchRef}
      type="button"
      role="switch"
      aria-label="Mörkt tema"
      aria-checked={true}
      onClick={toggleTheme}
      className="flex min-h-11 shrink-0 cursor-pointer items-center gap-1.5 rounded-full px-1.5 text-foreground"
    >
      <span aria-hidden="true" className="flex h-5 w-9 items-center rounded-full border border-control bg-action px-0.5 light:bg-surface">
        <span className="size-3.5 translate-x-3.5 rounded-full bg-on-action motion-safe:transition-transform light:translate-x-0 light:bg-muted" />
      </span>
      <FaMoon aria-hidden="true" className="size-3.5 light:hidden" />
      <FaSun aria-hidden="true" className="hidden size-3.5 light:block" />
    </button>
  );
}
