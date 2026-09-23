"use client";

import { useEffect, useState } from "react";

export function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const incrementVisitor = async () => {
      try {
        const response = await fetch("/api/visitors", { method: "GET" });
        if (response.ok) {
          const data = await response.json();
          if (isMounted && typeof data.count === "number") {
            setCount(data.count);
          }
        }
      } catch {
        // Silently handle offline/fetch failure without breaking UI
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    incrementVisitor();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <span className="inline-flex font-medium text-[var(--foreground)]">
      {loading ? (
        <span className="animate-pulse opacity-70">…</span>
      ) : (
        <span>{count !== null ? count.toLocaleString() : "—"}</span>
      )}
    </span>
  );
}
