"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function CurvedCard({
  children,
  image,
  imageAlt,
  className = "",
}) {
  return (
    <div className={`relative w-full ${className}`}>
      {/* SVG for curved top */}
      <svg
        className="absolute top-0 left-0 w-full h-auto z-10"
        viewBox="0 0 500 40"
        preserveAspectRatio="none"
        fill="white"
      >
        <path
          d="M0,40 L0,0 C166.67,26.67 333.33,26.67 500,0 L500,40 L0,40 Z"
        />
      </svg>

      {/* Decorative Planes */}
      <div className="absolute inset-0 z-20">
        {/* Left Plane */}
        <motion.div
          className="absolute top-4 left-4 w-6 h-6"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <img
            src="/plane-left.svg" // Replace with your plane SVG path
            alt="Plane Left"
            className="w-full h-full"
          />
        </motion.div>

        {/* Right Plane */}
        <motion.div
          className="absolute top-4 right-4 w-6 h-6"
          animate={{
            rotate: [360, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <img
            src="/plane-right.svg" // Replace with your plane SVG path
            alt="Plane Right"
            className="w-full h-full"
          />
        </motion.div>
      </div>

      {/* Main content container */}
      <motion.div
        className="relative bg-white rounded-b-2xl overflow-hidden shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {image && (
          <div className="relative w-full aspect-[4/3] overflow-hidden">
            <Image
              src={image}
              alt={imageAlt || "Card image"}
              fill
              className="object-cover"
            />
          </div>
        )}

        {/* Arabic Text */}
        <div className="absolute top-4 right-4 bg-[#987547] text-white px-4 py-2 rounded-lg shadow-md z-20">
          لَبَّيْكَ اللَّهُمَّ لَبَّيْك
        </div>

        <div className="p-6">{children}</div>
      </motion.div>
    </div>
  );
}
