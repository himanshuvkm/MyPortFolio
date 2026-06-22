"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import logo from "@/public/logome.jpg";
import { SiX } from "react-icons/si";
import { IoLogoGithub } from "react-icons/io5";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";

const BASE_SIZE = 96;
const SCALE = 1.7;

function MailIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 134 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0)">
        <path
          d="M9.09091 100H30.303V48.4848L0 25.7576V90.9091C0 95.9394 4.07576 100 9.09091 100Z"
          fill="#4285F4"
        />
        <path
          d="M103.03 100H124.242C129.273 100 133.333 95.9242 133.333 90.9091V25.7576L103.03 48.4848"
          fill="#34A853"
        />
        <path
          d="M103.03 9.09091V48.4848L133.333 25.7576V13.6364C133.333 2.39394 120.5 -4.01515 111.515 2.72727"
          fill="#FBBC04"
        />
        <path
          d="M30.303 48.4848V9.09091L66.6667 36.3636L103.03 9.09091V48.4848L66.6667 75.7576"
          fill="#EA4335"
        />
        <path
          d="M0 13.6364V25.7576L30.303 48.4848V9.09091L21.8182 2.72727C12.8182 -4.01515 0 2.39394 0 13.6364"
          fill="#C5221F"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="133.333" height="100" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default function Hero() {
  return (
    <div className="flex flex-col gap-8 mt-12">
      {/* Avatar */}
      <motion.div
        initial="rest"
        animate="rest"
        whileHover="hover"
        variants={{
          rest: { height: BASE_SIZE },
          hover: { height: BASE_SIZE * 1.6 },
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25,
          mass: 0.8,
        }}
        style={{ width: BASE_SIZE }}
        className="relative overflow-visible mx-auto sm:mx-0"
      >
        <motion.div
          variants={{
            rest: { scale: 1.2, filter: "grayscale(100%)" },
            hover: { scale: SCALE, filter: "grayscale(0%)" },
          }}
          transition={{ visualDuration: 0.5, bounce: 0 }}
          style={{
            transformOrigin: "top left",
            width: BASE_SIZE,
            height: BASE_SIZE,
          }}
          className="absolute top-0 left-0"
        >
          <Image
            src={logo}
            alt="Avatar"
            className="w-24 h-24 rounded-full object-cover"
          />
        </motion.div>
      </motion.div>

      {/* Text Section */}
      <div className="space-y-2">
        {/* Name + Icons */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <h1 className="text-3xl font-[Instrument_Serif] text-center sm:text-left">
            Himanshu Vishwakarma
          </h1>

          <div className="flex items-center justify-center sm:justify-end gap-4">
            <Link href="https://github.com/himanshuvkm" target="_blank">
              <IoLogoGithub
                size={20}
                className="text-[#333] dark:text-white hover:scale-110 transition"
              />
            </Link>

            <Link href="https://x.com/himanshu_9148" target="_blank">
              <SiX
                size={16}
                className="text-black dark:text-white hover:scale-110 transition"
              />
            </Link>

            <Link
              href="https://www.linkedin.com/in/himanshu-vishwakarma-2275a5354"
              target="_blank"
            >
              <FaLinkedin
                size={20}
                className="text-[#0A66C2] hover:scale-110 transition"
              />
            </Link>

            <Link href="mailto:himanshuvkm252@gmail.com">
              <MailIcon />
            </Link>
          </div>
        </div>

        <p className="text-gray-600 text-center sm:text-left">
          Full Stack Web Developer
        </p>

        <p className="text-md text-[var(--graytext)] leading-relaxed">
          I am a{" "}
          <span className="font-bold tracking-wide">
            Full Stack Web Developer
          </span>{" "}
          passionate about crafting beautiful, high-performance web experiences.
          Specializing in modern frameworks like{" "}
          <span className="font-bold tracking-wide">Next.js, React, and TypeScript</span>,
          I build scalable applications with robust backend systems using{" "}
          <span className="font-bold tracking-wide">MongoDB and PostgreSQL</span>.
          Blending development and design, I create clean interfaces that look{" "}
          <span className="font-medium">clean and feel effortless</span> to use.
          Always learning, building, and optimizing code for speed and search engine visibility. Feel
          free to check out my{" "}
          <Link href="/Projects" className="underline hover:text-foreground font-semibold">
            projects
          </Link>{" "}
          or{" "}
          <Link href="/Contact" className="underline hover:text-foreground font-semibold">
            get in touch
          </Link>.
        </p>
      </div>
    </div>
  );
}
