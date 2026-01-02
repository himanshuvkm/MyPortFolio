export default function BlogPage() {
  return (
    <section className="py-20 text-center">
      {/* Heading */}
      <h1 className="text-3xl font-semibold mb-3 text-foreground">
        Blog{" "}
        <span className="text-muted-foreground font-normal">
          — coming soon
        </span>
      </h1>

      {/* Subtitle */}
      <p className="text-muted-foreground max-w-md mx-auto text-sm leading-relaxed">
        I’m working on writing thoughtful articles about web development,
        design, and everything I’m learning.
      </p>

      {/* Coming Soon Card */}
      <div
        className="
          mt-10 mx-auto max-w-md
          p-8 rounded-xl
          border border-border
          bg-muted
          flex flex-col items-center gap-3
        "
      >
        <span className="text-xs uppercase tracking-wide text-muted-foreground">
          until then
        </span>

        <h2 className="text-lg font-medium text-foreground">
          Blogs are on the way ✍️
        </h2>

        <p className="text-xs text-muted-foreground">
          Writing. Refining. Publishing soon.
        </p>
      </div>
    </section>
  );
}
