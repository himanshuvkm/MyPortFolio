import type { Metadata } from "next";
import {Geist } from 'next/font/google'
import "./globals.css";
import Header from "./_components/header";
import Footer from "./_components/footer";

const roboto = Geist({subsets:['latin']})

export const metadata: Metadata = {
  title: "Himanshu's Portfolio",
  description: "portfolio by Me",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={roboto.className}
      >
        <div className="flex justify-center px-5">
        <div className="flex flex-col my-10 w-full max-w-2xl ">
        <Header/>
        {children}
        <Footer/>
        </div>
        </div>
      </body>
    </html>
  );
}
