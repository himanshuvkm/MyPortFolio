export default function BlogPage() {
  return (
    <section className="py-20 text-center">
      
      {/* Section Heading */}
      <h1 className="text-3xl font-semibold mb-4">
        Blog <span className="text-[var(--graytext)]">— Coming Soon</span>
      </h1>

      {/* Subtitle */}
      <p className="text-[var(--graytext)] max-w-md mx-auto">
        I’m working on writing thoughtful articles about web development,
        design, and everything I’m learning.  
      </p>

      {/* Coming Soon Box */}
      <div
        className="
          mt-10 mx-auto max-w-md 
          p-10 rounded-xl 
          border border-[var(--border)]
          bg-[var(--muted)]
          backdrop-blur-sm 
          shadow-lg 
          flex flex-col items-center gap-3
        "
      >
        <span className="text-sm text-[var(--graytext)]">Until then…</span>

        <h2 className="text-xl font-semibold">
          Blogs are coming soon ✍️
        </h2>

        <p className="text-xs text-[var(--graytext)]">
          Stay tuned — new content dropping shortly.
        </p>

      </div>
    </section>
  );
}
