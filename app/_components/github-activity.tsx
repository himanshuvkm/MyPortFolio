"use client";

import { useSyncExternalStore } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "next-themes";

const calendarTheme = {
  light: ["#ebebeb", "#c6c5c5", "#999999", "#555555", "#000000"],
  dark: ["#161b22", "#3a3a3c", "#6e6e73", "#aeaeb2", "#ffffff"],
};

const emptySubscribe = () => () => {};

export default function GitHubActivity() {
  const { resolvedTheme } = useTheme();
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  return (
    <div className="w-full">
      <h2 className="text-2xl font-[Instrument_Serif] tracking-wide mb-4">
        Github Activities
      </h2>
      <div className="w-full overflow-x-auto pb-2 rounded-xl border border-[var(--border)] bg-[var(--muted)] p-3 sm:p-4">
        <div className="min-w-[650px] flex justify-center">
          {mounted ? (
            <GitHubCalendar
              username="himanshuvkm"
              colorScheme={resolvedTheme === "dark" ? "dark" : "light"}
              theme={calendarTheme}
              fontSize={12}
              blockSize={11}
              blockMargin={4}
            />
          ) : (
            <div className="h-[128px] w-full flex items-center justify-center text-xs text-muted-foreground animate-pulse">
              Loading GitHub activity…
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
