import { Redis } from "@upstash/redis"
import { NextResponse } from "next/server"

const redis = Redis.fromEnv()

export async function GET() {
  try {
    // Increment the visitor count
    const count = await redis.incr("visitor_count")

    return NextResponse.json({ count })
  } catch (error) {
    console.error("[v0] Error incrementing visitor count:", error)
    return NextResponse.json({ error: "Failed to get visitor count" }, { status: 500 })
  }
}

export async function POST() {
  try {
    // Get current count without incrementing
    const count = (await redis.get<number>("visitor_count")) || 100

    return NextResponse.json({ count })
  } catch (error) {
    console.error("[v0] Error getting visitor count:", error)
    return NextResponse.json({ error: "Failed to get visitor count" }, { status: 500 })
  }
}
