"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const stored = localStorage.getItem("theme") as "light" | "dark" | null;

    if (stored) {
      setTheme(stored);
      document.documentElement.classList.toggle("dark", stored === "dark");
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const initial = prefersDark ? "dark" : "light";
      setTheme(initial);
      document.documentElement.classList.toggle("dark", initial === "dark");
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    localStorage.setItem("theme", next);
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Växla tema"
      className="
        relative w-14 h-8 
        flex items-center 
        rounded-full 
        bg-slate-300 dark:bg-slate-700 
        transition-colors
      "
    >
      {/* Måne-ikon (vänster) */}
      <span className="absolute left-2 text-slate-700 dark:text-slate-300 pointer-events-none">
        🌙
      </span>

      {/* Sol-ikon (höger) */}
      <span className="absolute right-2 text-slate-700 dark:text-yellow-300 pointer-events-none">
        ☀️
      </span>

      {/* Den runda glidande togglen */}
      <span
        className={`
          absolute top-1 
          w-6 h-6 
          rounded-full 
          bg-white dark:bg-slate-900 
          shadow 
          transform transition-transform
          ${theme === "light" ? "translate-x-6" : "translate-x-0"}
        `}
      ></span>
    </button>
  );
}
