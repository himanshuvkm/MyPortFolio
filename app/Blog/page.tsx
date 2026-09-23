import type { Metadata } from "next";
import Footer from "../_components/footer";

export const metadata: Metadata = {
  title: "Technical Writing & Developer Blog",
  description: "Read technical articles on React, Next.js, TypeScript, database optimization, and modern web development written by Himanshu Vishwakarma.",
};

const upcomingPosts = [
  {
    title: "A Practical Guide to Technical SEO in Next.js App Router",
    excerpt: "Learn how to structure your Next.js application for maximum discoverability, including dynamic sitemaps, semantic layout, and JSON-LD schema integration.",
    tags: ["Next.js", "SEO", "Web Performance"],
    status: "Drafting"
  },
  {
    title: "Why Postgres + Prisma is the Ultimate Database Stack for Serverless Apps",
    excerpt: "An in-depth look at connection pooling, type safety, and database schema migrations using Prisma ORM with Supabase serverless databases.",
    tags: ["Database", "Prisma", "PostgreSQL"],
    status: "In Progress"
  },
  {
    title: "Mastering Headless UI Animations with Framer Motion",
    excerpt: "How to craft premium micro-interactions and accessible interactive elements without compromising on bundle size and performance.",
    tags: ["Frontend", "Animation", "CSS"],
    status: "Planned"
  }
];

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function BlogPage() {
  return (
    <section className="py-4 sm:py-8 tracking-tight leading-relaxed">
      <div className="mb-6 flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors group"
        >
          <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" />
          <span>Home</span>
        </Link>
      </div>

      {/* Heading */}
      <div className="text-center mb-8 sm:mb-10">
        <h1 className="text-3xl sm:text-4xl font-[Instrument_Serif] tracking-wide text-foreground mb-2 sm:mb-3">
          Developer Blog
        </h1>
        <p className="text-muted-foreground max-w-md mx-auto text-xs sm:text-sm leading-relaxed">
          Thoughtful articles about frontend architecture, database optimization, and full-stack engineering.
        </p>
      </div>

      {/* Upcoming Posts Section */}
      <div className="space-y-4 sm:space-y-6 max-w-xl mx-auto mb-12 sm:mb-16">
        <h2 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-muted-foreground border-b border-border pb-2 mb-4">
          Upcoming Articles
        </h2>
        {upcomingPosts.map((post, idx) => (
          <article 
            key={idx}
            className="p-4 sm:p-5 rounded-xl border border-border bg-[var(--muted)] flex flex-col gap-2 hover:border-foreground/20 transition-all duration-300"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-border text-muted-foreground">
                {post.status}
              </span>
              <div className="flex flex-wrap gap-1.5">
                {post.tags.map(tag => (
                  <span key={tag} className="text-[10px] sm:text-[11px] font-medium text-muted-foreground font-mono">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
            <h3 className="text-sm sm:text-base font-semibold text-foreground tracking-tight mt-1">
              {post.title}
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              {post.excerpt}
            </p>
          </article>
        ))}
      </div>

      <Footer />
    </section>
  );
}
