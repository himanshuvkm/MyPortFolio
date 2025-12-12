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
        inline-flex items-center gap-2
        px-3 py-1.5 rounded-lg 
        
        text-green-500 
        text-xs font-semibold
        border border-green-700/20
      "
    >
      <Eye size={14} className="opacity-80" />

      {loading ? (
        <span className="animate-pulse">...</span>
      ) : (
        <span>{count?.toLocaleString() || 0}</span>
      )}
    </div>
  )
}
