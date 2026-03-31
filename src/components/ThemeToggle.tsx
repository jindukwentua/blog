"use client";

import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/Button";

type Theme = "light" | "dark";

function getSystemTheme(): Theme {
  if (typeof window === "undefined") return "light";
  return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  const nextTheme = useMemo<Theme>(() => (theme === "dark" ? "light" : "dark"), [theme]);

  useEffect(() => {
    const saved = window.localStorage.getItem("theme") as Theme | null;
    const initial = saved === "light" || saved === "dark" ? saved : getSystemTheme();
    setTheme(initial);
    applyTheme(initial);
  }, []);

  return (
    <Button
      type="button"
      variant="ghost"
      onClick={() => {
        const newTheme = nextTheme;
        setTheme(newTheme);
        window.localStorage.setItem("theme", newTheme);
        applyTheme(newTheme);
      }}
      className="px-3 py-1.5 border hover:opacity-95"
      style={{
        borderColor: "var(--header-border)",
        color: "var(--header-fg)",
        background: "rgba(255,255,255,0.08)",
      }}
      ariaLabel={`Switch to ${nextTheme} mode`}
      title={`Switch to ${nextTheme} mode`}
    >
      <span aria-hidden className="text-base leading-none">
        {theme === "dark" ? "☾" : "☀"}
      </span>
      <span className="hidden sm:inline">{theme === "dark" ? "Dark mode" : "Light mode"}</span>
    </Button>
  );
}

