"use client";

import { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import ThemeToggle from "./themeToggle";

const links = [
  { href: "#hero", label: "Start" },
  { href: "#about", label: "Om mig" },
  { href: "#projects", label: "Projekt" },
  { href: "#contact", label: "Kontakt" },
];

export default function PortfolioNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  return (
    <nav
      aria-label="Huvudnavigation"
      className="mx-auto flex max-w-5xl items-center gap-2 px-4 py-2 md:grid md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] md:gap-4"
      onBlur={(event) => {
        if (isOpen && !event.currentTarget.contains(event.relatedTarget)) {
          setIsOpen(false);
        }
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape" && isOpen && menuButton.current?.offsetWidth) {
          setIsOpen(false);
          menuButton.current.focus();
        }
      }}
    >
      <span className="mr-auto font-semibold tracking-tight sm:text-lg">
        Linnea Isebrink
      </span>
      <button
        ref={menuButton}
        type="button"
        aria-controls="portfolio-navigation-links"
        aria-expanded={isOpen}
        aria-label={isOpen ? "Stäng meny" : "Öppna meny"}
        onClick={() => setIsOpen(!isOpen)}
        className="grid size-11 shrink-0 cursor-pointer place-items-center rounded-full border border-control hover:text-link-hover md:hidden"
      >
        {isOpen ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
      </button>
      <ul
        id="portfolio-navigation-links"
        className={`${isOpen ? "flex" : "hidden"} absolute inset-x-0 top-[calc(100%+5px)] max-h-[calc(100dvh-var(--header-height)-5px)] flex-col overflow-auto border-b border-line bg-background px-4 py-2 text-sm md:static md:flex md:max-h-none md:flex-row md:gap-2 md:overflow-visible md:border-0 md:bg-transparent md:p-0`}
      >
        {links.map(({ href, label }) => (
          <li key={href}>
            <a
              href={href}
              onClick={() => setIsOpen(false)}
              className="flex min-h-11 items-center rounded-md px-3 hover:text-link-hover"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
      <div className="shrink-0 md:justify-self-end">
        <ThemeToggle />
      </div>
    </nav>
  );
}
