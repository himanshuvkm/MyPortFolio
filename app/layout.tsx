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
  title: "Himanshu's Portfolio",
  description: "portfolio by Himanshu Vishwakarma",
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
