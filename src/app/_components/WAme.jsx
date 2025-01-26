"use client"

import React, { useEffect, useRef } from "react"
import Image from "next/image"
import { gsap } from "gsap"

const WAme = () => {
  const buttonRef = useRef(null)

  useEffect(() => {
    if (buttonRef.current) {
      // Create a timeline for smoother animation
      const tl = gsap.timeline({ repeat: -1, yoyo: true })

      // Add animations to the timeline
      tl.to(buttonRef.current, {
        y: -15,
        duration: 0.5,
        ease: "power1.inOut",
      })
        .to(
          buttonRef.current,
          {
            scale: 1.1,
            duration: 0.3,
            ease: "power1.inOut",
          },
          "-=0.3",
        ) // Start slightly before the previous animation ends
        .to(
          buttonRef.current,
          {
            rotation: 5,
            duration: 0.2,
            ease: "power1.inOut",
          },
          "-=0.2",
        )
        .to(buttonRef.current, {
          rotation: -5,
          duration: 0.4,
          ease: "power1.inOut",
        })
        .to(buttonRef.current, {
          rotation: 0,
          duration: 0.2,
          ease: "power1.inOut",
        })
    }
  }, [])

  return (
    <div>
      <a
        ref={buttonRef}
        href="https://wa.me/19843893054"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[999] transition-transform duration-300"
      >
        <Image
          src="/images/wBig.svg" // Ensure this file exists in public folder
          alt="Chat on WhatsApp"
          width={60}
          height={60}
          className="w-14 h-14 drop-shadow-lg hover:drop-shadow-xl"
        />
      </a>
    </div>
  )
}

export default WAme

