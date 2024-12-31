"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CurvedCard } from "@/components/ui/curved-card";
import { BackgroundPattern } from "./ui/background-pattern";

export function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center bg-[#f5f5f5]">
      {/* SVG Background */}

      <div className="container mx-auto grid md:grid-cols-2 gap-12 py-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h1 className="text-5xl font-bold leading-tight">
            EXPLORE THE <span className="text-[#987547]">UMRAH</span> AND{" "}
            <span className="text-[#987547]">HAJJ</span> PACKAGES FROM USA 2024
          </h1>
          <p className="text-gray-600 text-lg">
            A prominent pioneer in crafting A-grade Umrah Experiences, Nurturing
            Faith, and Guiding Pilgrims in the USA. Since its inception, the
            organization has consistently expanded its reach
          </p>
          <div className="flex items-center gap-4">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-12 h-12 rounded-full border-2 border-white overflow-hidden"
                >
                  <Image
                    src={`/placeholder.svg?text=User${i}`}
                    alt="Pilgrim"
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            <div>
              <p className="font-semibold">More Than</p>
              <p className="text-[#987547]">3425 Pilgrims</p>
            </div>
          </div>
          <Button className="bg-[#987547] hover:bg-[#876436] text-lg px-8">
            All Tour details
          </Button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <CurvedCard
            image="/curved-card.svg"
            imageAlt="Kaaba"
            className="w-1/2"
          >
            <div className="absolute top-4 right-4 bg-[#987547] text-white px-4 py-2 rounded-lg">
              لَبَّيْكَ اللَّهُمَّ لَبَّيْك
            </div>
          </CurvedCard>
        </motion.div>
      </div>
    </section>
  );
}
