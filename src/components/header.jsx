"use client"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function Header() {
  //const [isOpen, setIsOpen] = useState(false)

  return (
    
      <div className="container mx-auto flex items-center justify-between bg-[#FFFFFF]">
        <Link href="/">
          <Image 
            src="/logo.svg"
            alt="Dar El Mecca" 
            width={120} 
            height={60}
            className="object-contain"
          />
        </Link>

        <nav className="hidden md:flex gap-8">
          <Link href="/" className="hover:text-[#876436]">Home</Link>
          <Link href="/umrah-packages" className="hover:text-[#876436] hover:underline">Umrah Packages</Link>
          <Link href="/hajj-packages" className="hover:text-[#876436] hover:underline">Hajj Packages (Coming Soon)</Link>
          <Link href="/tours" className="hover:text-[#876436] hover:underline">Tours & Packages</Link>
          <Link href="/resources" className="hover:text-[#876436] hover:underline">Resources</Link>
        </nav>

        <Button className="bg-[#987547] hover:bg-[#876436]">Contact Us</Button>
      </div>
  )
}

