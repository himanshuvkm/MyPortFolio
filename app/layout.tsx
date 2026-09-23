import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import SmoothScroll from "./_components/SmoothScroll";
import ClickSpark from "@/components/ClickSpark";

import { Instrument_Serif } from "next/font/google";
import { Newsreader } from "next/font/google";

export const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});
export const newsreader = Newsreader({
  subsets: ["latin"],
  weight: "400", // Regular
  style: "normal",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.himanshuvkm.in"),

  title: {
    default: "Himanshu Vishwakarma – Full Stack Web Developer (Next.js, React)",
    template: "%s | Himanshu Vishwakarma",
  },

  description:
    "Himanshu Vishwakarma is a Full Stack Web Developer specializing in Next.js, React, TypeScript, Tailwind CSS, and modern web architectures. View projects, case studies, and technical writing.",

  keywords: [
    "Himanshu Vishwakarma",
    "Himanshu portfolio",
    "Himanshu web developer",
    "Himanshuvkm",
    "himanshuvkm",

    "full stack web developer",
    "frontend developer",
    "react developer",
    "next.js developer",
    "typescript developer",

    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Prisma",
    "PostgreSQL",
    "NextAuth",
    "Clerk",

    "developer portfolio",
    "web developer portfolio",
    "next.js portfolio",
    "react portfolio",

    "web developer india",
    "full stack developer india",
  ],

  authors: [{ name: "Himanshu Vishwakarma" }],
  creator: "Himanshu Vishwakarma",
  publisher: "Himanshu Vishwakarma",

  alternates: {
    canonical: "https://www.himanshuvkm.in",
  },

  openGraph: {
    type: "website",
    url: "https://www.himanshuvkm.in",
    title: "Himanshu Vishwakarma – Full Stack Web Developer",
    description:
      "Portfolio and projects of Himanshu Vishwakarma, a Full Stack Web Developer building scalable web apps using Next.js and React.",
    siteName: "Himanshu Vishwakarma Portfolio",
  },

  twitter: {
    card: "summary_large_image",
    title: "Himanshu Vishwakarma – Full Stack Web Developer",
    description:
      "Projects, case studies, and writing on Next.js, React, and modern web development by Himanshu Vishwakarma.",
    images: ["/og-image.png"],
    creator: "@himanshu_9148",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  category: "technology",
};


export default function RootLayout({
  children,
}: React.ComponentProps<typeof ThemeProvider>) {
  return (
    <html lang="en">
      <body className={`${newsreader.className}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Himanshu Vishwakarma",
              "url": "https://www.himanshuvkm.in",
              "sameAs": [
                "https://github.com/himanshuvkm",
                "https://x.com/himanshu_9148",
                "https://www.linkedin.com/in/himanshu-vishwakarma-2275a5354"
              ],
              "jobTitle": "Full Stack Web Developer",
              "description": "Himanshu Vishwakarma is a Full Stack Web Developer specializing in Next.js, React, TypeScript, and modern web architectures."
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Himanshu Vishwakarma Portfolio",
              "url": "https://www.himanshuvkm.in"
            })
          }}
        />
        <SmoothScroll />
        <ClickSpark
          sparkColor="#808080"
          sparkSize={10}
          sparkRadius={15}
          sparkCount={8}
          duration={400}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="flex justify-center px-4 sm:px-6 relative z-20 min-h-screen overflow-x-hidden">
              <div className="flex flex-col my-4 sm:my-8 w-full max-w-3xl min-w-0">
                {children}
              </div>
            </div>
          </ThemeProvider>
        </ClickSpark>

      </body>
    </html>
  );
}
