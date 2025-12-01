"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      backgroundColor: "transparent", 
      border: "2px solid #ffffff",
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "#ffffff",
      mixBlendMode: "difference" as const,
    },
  };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  return (
    <div className="relative h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden cursor-none">
      
      {/* ---- BACKGROUND NOISE TEXTURE (Optional for grit) ---- */}
      <div className="absolute inset-0 opacity-20 pointer-events-none z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] filter contrast-125 brightness-100"></div>

      {/* ---- THE CURSOR / FLASHLIGHT ---- */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-50 hidden md:block"
        variants={variants}
        animate={cursorVariant}
        transition={{
            type: "spring",
            stiffness: 500,
            damping: 28
        }}
      />

      {/* ---- CONTENT CONTAINER ---- */}
      <div 
        className="relative z-10 flex flex-col items-center justify-center text-center px-4"
        onMouseEnter={textEnter}
        onMouseLeave={textLeave}
      >
        {/* HUGE 404 TEXT */}
        <h1 className="font-bold text-[10rem] md:text-[18rem] leading-none text-white tracking-tighter select-none mix-blend-difference">
          404
        </h1>

        <div className="space-y-6 max-w-lg mx-auto mix-blend-difference text-white">
          <h2 className="text-2xl md:text-4xl font-light tracking-wide font-serif">
            Lost in the void?
          </h2>
          
          <p className="text-lg opacity-80 leading-relaxed">
            The page you are looking for has drifted away into the digital ether.
            Move your light to find your way back.
          </p>

          <div className="pt-8">
            <Link 
                href="/"
                className="group relative inline-flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-medium transition-transform hover:scale-105 active:scale-95"
            >
              <span>Return Home</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={1.5} 
                stroke="currentColor" 
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* ---- DECORATIVE ELEMENTS (Only visible when hovered by blend mode) ---- */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-600 rounded-full blur-[80px] opacity-50 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-blue-600 rounded-full blur-[100px] opacity-50 animate-pulse delay-700"></div>
      
    </div>
  );
}