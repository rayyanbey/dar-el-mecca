"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.header 
      className="bg-white py-4"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/">
          <Image 
            src="/logo.png" 
            alt="Dar El Mecca" 
            width={120} 
            height={60}
            className="object-contain"
          />
        </Link>

        <nav className="hidden md:flex gap-8">
          <Link href="/" className="text-primary font-medium">Home</Link>
          <Link href="/umrah-packages" className="hover:text-primary">Umrah Packages</Link>
          <Link href="/hajj-packages" className="hover:text-primary">Hajj Packages (Coming Soon)</Link>
          <Link href="/tours" className="hover:text-primary">Tours & Packages</Link>
          <Link href="/resources" className="hover:text-primary">Resources</Link>
        </nav>

        <Button className="bg-[#987547] hover:bg-[#876436]">Contact Us</Button>
      </div>
    </motion.header>
  )
}

