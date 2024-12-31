"use client"

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const reviews = [
  {
    name: "MAHMOUD RANKOUSSI",
    role: "CEO",
    image: "/mahmoud.jpg",
    content: "AlhamdulilAllah Fantastic experience. GREAT services. Friendly. Easy to work with. Trusted. May Allah give you Baraka in your business."
  },
  {
    name: "AMINA EL MANSOURI",
    role: "CEO",
    image: "/amina.jpg",
    content: "It was a very successful trip and those in charge were very helpful. We cannot thank them enough for their success in all their affairs."
  },
  {
    name: "YASMIN AHMED",
    role: "Pilgrim",
    image: "/yasmin.jpg",
    content: "An unforgettable spiritual journey. The team's attention to detail and support throughout made it truly special. Highly recommended!"
  }
]

export function Reviews() {
  const [currentReview, setCurrentReview] = useState(0)

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length)
  }

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-2">OUR CUSTOMER REVIEWS</h2>
            <div className="flex justify-center mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="h-6 w-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-gray-600">
              We provide High quality travel services, that is why we are loved by our clients. We have 4.9 star rating on Google.
            </p>
          </motion.div>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentReview}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="max-w-2xl mx-auto">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Image
                      src={reviews[currentReview].image}
                      alt={reviews[currentReview].name}
                      width={60}
                      height={60}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <h3 className="font-semibold">{reviews[currentReview].name}</h3>
                      <p className="text-sm text-gray-500">{reviews[currentReview].role}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">&ldquo;{reviews[currentReview].content}&rdquo;</p>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 -translate-y-1/2 -left-4"
            onClick={prevReview}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 -translate-y-1/2 -right-4"
            onClick={nextReview}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex justify-center mt-6">
          {reviews.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full mx-1 ${
                index === currentReview ? 'bg-[#987547]' : 'bg-gray-300'
              }`}
              onClick={() => setCurrentReview(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

