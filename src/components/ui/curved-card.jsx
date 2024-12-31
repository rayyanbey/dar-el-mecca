"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function CurvedCard({ 
  children,
  image,
  imageAlt,
  className = ""
}) {
  return (
    <div className={`relative w-full ${className}`}>
      {/* SVG for curved top */}
      <svg
        className="absolute top-0 left-0 w-full h-auto"
        viewBox="0 0 500 40"
        preserveAspectRatio="none"
        fill="white"
      >
        <path
          d="M0,40 L0,0 C166.67,26.67 333.33,26.67 500,0 L500,40 L0,40 Z"
        />
      </svg>

      {/* Main content container */}
      <motion.div 
        className="relative bg-white rounded-b-2xl overflow-hidden"
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
        <div className="p-6">
          {children}
        </div>
      </motion.div>
    </div>
  )
}

