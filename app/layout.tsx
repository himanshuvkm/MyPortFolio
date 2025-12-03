import type { Metadata } from "next";
import {Geist } from 'next/font/google'
import "./globals.css";
import {  ThemeProvider } from "next-themes"
import Header from "./_components/header";
import Footer from "./_components/footer";
import  ModeToggle  from "./_components/mode";

const roboto = Geist({subsets:['latin']})

export const metadata: Metadata = {
  title: "Himanshu's Portfolio",
  description: "portfolio by Himanshu Vishwakarma",
};

export default function RootLayout({
  children,
}: React.ComponentProps<typeof ThemeProvider>) {
  return (
    <html lang="en">
      <body
        className={roboto.className}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        <div className="flex justify-center px-5">
        <div className="flex flex-col my-10 w-full max-w-2xl ">
        <div className="flex justify-between"><Header/> <ModeToggle/></div>
        
        {children}
        <Footer/>
        </div>
        </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
