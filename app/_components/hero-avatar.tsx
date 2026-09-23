"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import logo from "@/public/logome.jpg";

const BASE_SIZE = 96;
const SCALE = 1.7;

export default function HeroAvatar() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial="rest"
      animate={isHovered ? "hover" : "rest"}
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
      className="relative overflow-visible"
      onPointerEnter={() => setIsHovered(true)}
      onPointerLeave={() => setIsHovered(false)}
    >
      <motion.div
        variants={{
          // EXACTLY like the first code
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
          visualDuration: 0.5,
          bounce: 0,
        }}
        style={{
          transformOrigin: "top left",
          width: BASE_SIZE,
          height: BASE_SIZE,
        }}
        className="absolute top-0 left-0 pointer-events-none"
      >
        <Image
          src={logo}
          alt="Avatar"
          className="w-24 h-24 rounded-full object-cover"
        />
      </motion.div>
    </motion.div>
  );
}