"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="text-center space-y-4"
      >
        {/* 404 */}
        <motion.h1
          initial={{ letterSpacing: "0.2em" }}
          animate={{ letterSpacing: "0.05em" }}
          transition={{ duration: 0.6 }}
          className="text-6xl font-[Instrument_Serif]"
        >
          404
        </motion.h1>

        {/* Text */}
        <p className="text-sm text-[var(--graytext)]">
          The page you’re looking for doesn’t exist.
        </p>

        {/* Action */}
        <Link
          href="/"
          className="
            inline-block text-sm
            underline underline-offset-4
            text-[var(--graytext)]
            hover:text-[var(--foreground)]
            transition
          "
        >
          Go back home →
        </Link>
      </motion.div>
    </div>
  );
}
