import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Doto } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Header from "./_components/header";


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
  metadataBase: new URL("www.himanshuvkm.site"),

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
    canonical: "https://himanshuvkm.site",
  },

  openGraph: {
    type: "website",
    url: "https://himanshuvkm.site",
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
            <div className="flex justify-center px-5 relative z-20">
              <div className="flex flex-col my-5 w-full max-w-2xl   ">
                <div className="flex justify-between ">
                  <Header />
                </div>

                {children}
         
              </div>
            </div>
          </ThemeProvider>
        </ClickSpark>
     
      </body>
    </html>
  );
}
