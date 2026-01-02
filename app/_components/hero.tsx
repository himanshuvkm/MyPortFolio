"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import logo from "@/public/logome.png";
import { SiGmail, SiX } from "react-icons/si";
import { IoLogoGithub } from "react-icons/io5";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";

const BASE_SIZE = 96;
const SCALE = 1.7;
function MailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 134 100" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1:194)">
<path d="M9.09091 100H30.303V48.4848L0 25.7576V90.9091C0 95.9394 4.07576 100 9.09091 100Z" fill="#4285F4"/>
<path d="M103.03 100H124.242C129.273 100 133.333 95.9242 133.333 90.9091V25.7576L103.03 48.4848" fill="#34A853"/>
<path d="M103.03 9.09091V48.4848L133.333 25.7576V13.6364C133.333 2.39394 120.5 -4.01515 111.515 2.72727" fill="#FBBC04"/>
<path d="M30.303 48.4848V9.09091L66.6667 36.3636L103.03 9.09091V48.4848L66.6667 75.7576" fill="#EA4335"/>
<path d="M0 13.6364V25.7576L30.303 48.4848V9.09091L21.8182 2.72727C12.8182 -4.01515 0 2.39394 0 13.6364" fill="#C5221F"/>
</g>
<defs>
<clipPath id="clip0_1:194">
<rect width="133.333" height="100" fill="white"/>
</clipPath>
</defs>
</svg>)}

export default function Hero() {
  return (
    <div className="flex flex-col gap-8 mt-12 ">
      <motion.div
        initial="rest"
        animate="rest"
        whileHover="hover"
        variants={{
          rest: {
            height: BASE_SIZE,
          },
          hover: {
            height: BASE_SIZE * 1.6,
          },
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25,
          mass: 0.8,
        }}
        style={{ width: BASE_SIZE }}
        className="relative overflow-visible"
      >
        <motion.div
          variants={{
            rest: {
              scale: 1.2,
              filter: "grayscale(100%)",
            },
            hover: {
              scale: SCALE,
              filter: "grayscale(0%)",
            },
          }}
          transition={{
            type: "keyframes",

            visualDuration: 0.5,

            bounce: 0,
          }}
          style={{
            transformOrigin: "top left",
            width: BASE_SIZE,
            height: BASE_SIZE,
          }}
          className="will-change-transform absolute top-0 left-0"
        >
          <Image
            src={logo}
            alt="Avatar"
            className="w-24 h-24 rounded-full object-cover"
          />
        </motion.div>
      </motion.div>

      <div className="space-y-2">
        <div className="flex items-center justify-between gap-6">
      {/* Left: Name */}
      <h2 className="text-3xl font-[Instrument_Serif]">
        Himanshu Vishwakarma
      </h2>

      {/* Right: Social Icons */}
      <div className="flex items-center gap-4">
        <Link
          href="https://github.com/himanshuvkm"
          target="_blank"
          aria-label="GitHub"
          className="transition-transform hover:scale-110"
        >
          <IoLogoGithub size={20} className="text-[#333] dark:text-white" />
        </Link>

        <Link
          href="https://x.com/Himanshu_10147"
          target="_blank"
          aria-label="X"
          className="transition-transform hover:scale-110"
        >
          <SiX size={16} className="text-black dark:text-white" />
        </Link>

        <Link
          href="https://www.linkedin.com/in/himanshu-vishwakarma-2275a5354"
          target="_blank"
          aria-label="LinkedIn"
          className="transition-transform hover:scale-110"
        >
          <FaLinkedin size={20} className="text-[#0A66C2]" />
        </Link>

        <Link
          href="mailto:himanshuvkm252@gmail.com"
          aria-label="Email"
          className="transition-transform hover:scale-110"
        >
          <MailIcon/>
        </Link>
      </div>
    </div>
        <p className="text-gray-600">Full Stack Developer</p>
        <p className="text-md text-gray-500 leading-relaxed">
          Passionate about creating{" "}
          <span className="font-medium ">
            beautiful and functional web experiences
          </span>
          . Love working with{" "}
          <span className="font-medium ">modern frameworks</span>{" "}
          and building{" "}
          <span className="font-medium ">
            scalable applications
          </span>
          . I enjoy crafting websites with{" "}
          <span className="font-medium ">
            React, TypeScript, Tailwind
          </span>
          , and backend systems using{" "}
          <span className="font-medium ">
            MongoDB & PostgreSQL
          </span>
          . I love both{" "}
          <span className="font-medium ">
            development & design
          </span>
          . That means I enjoy creating interfaces that look{" "}
          <span className="font-medium ">
            clean and feel effortless
          </span>
          . Always{" "}
          <span className="font-medium ">
            learning, building, and improving
          </span>
          .
        </p>
      </div>
    </div>
  );
}
