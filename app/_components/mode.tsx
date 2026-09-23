"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-5 h-5" />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
      className="p-1 text-foreground/80 hover:text-foreground hover:scale-110 transition-transform duration-200 cursor-pointer bg-transparent border-none outline-none focus:outline-none shadow-none"
    >
      {isDark ? (
        <Sun size={20} className="stroke-[1.75]" />
      ) : (
        <Moon size={20} className="stroke-[1.75]" />
      )}
    </button>
  );
}
