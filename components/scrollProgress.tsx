"use client";
import { useEffect, useRef } from "react";
import "./scrollProgress.css";

export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = barRef.current;
    const header = bar?.parentElement;
    if (!bar || !header) return;

    const root = document.documentElement;
    let frame: number | null = null;

    const updateProgress = () => {
      frame = null;
      const maxScroll = root.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0
        ? Math.min(1, Math.max(0, window.scrollY / maxScroll))
        : 0;
      bar.style.transform = `scaleX(${progress})`;
    };

    const scheduleUpdate = () => {
      if (frame === null) frame = window.requestAnimationFrame(updateProgress);
    };

    const updateHeaderHeight = () => {
      root.style.setProperty("--header-height", `${header.offsetHeight}px`);
      scheduleUpdate();
    };
    const headerObserver = new ResizeObserver(updateHeaderHeight);
    updateHeaderHeight();
    headerObserver.observe(header);
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      if (frame !== null) window.cancelAnimationFrame(frame);
      headerObserver.disconnect();
      root.style.removeProperty("--header-height");
    };
  }, []);

  return <div ref={barRef} className="scroll-progress-bar" aria-hidden="true" />;
}
