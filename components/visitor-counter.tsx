"use client"

import { useEffect, useState } from "react"
import { Eye } from "lucide-react"

export function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const incrementVisitor = async () => {
      try {
        const response = await fetch("/api/visitors", { method: "GET" })
        if (response.ok) {
          const data = await response.json()
          setCount(data.count)
        }
      } catch (error) {
        console.error("[v0] Error fetching visitor count:", error)
      } finally {
        setLoading(false)
      }
    }

    incrementVisitor()
  }, [])

  return (
    <div
  className="
    inline-flex gap-3
    text-xs font-medium
    text-[var(--graytext)]
  "
>
  {loading ? (
    <span className="animate-pulse opacity-70">…</span>
  ) : (
    <span className="text-[var(--foreground)]">
      {count?.toLocaleString() || 0}
    </span>
  )}
</div>

  )
}
