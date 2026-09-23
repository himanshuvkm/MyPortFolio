import { Redis } from "@upstash/redis";
import { NextResponse } from "next/server";

function getRedis() {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) {
    return null;
  }
  try {
    return new Redis({ url, token });
  } catch {
    return null;
  }
}

export async function GET() {
  try {
    const redis = getRedis();
    if (!redis) {
      return NextResponse.json({ count: null }, { status: 200 });
    }

    const count = await redis.incr("visitor_count");
    return NextResponse.json({ count }, { status: 200 });
  } catch (error) {
    console.error("Visitor count tracking error:", error);
    return NextResponse.json({ count: null }, { status: 200 });
  }
}

export async function POST() {
  try {
    const redis = getRedis();
    if (!redis) {
      return NextResponse.json({ count: null }, { status: 200 });
    }

    const count = (await redis.get<number>("visitor_count")) || 100;
    return NextResponse.json({ count }, { status: 200 });
  } catch (error) {
    console.error("Visitor count fetch error:", error);
    return NextResponse.json({ count: null }, { status: 200 });
  }
}
