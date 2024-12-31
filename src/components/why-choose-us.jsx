"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Hotel, Utensils, Luggage, Headphones } from 'lucide-react'

const benefits = [
  { icon: Hotel, title: '5 Star Hotel', description: 'Luxurious accommodations for a comfortable stay.' },
  { icon: Utensils, title: 'Food Included', description: 'Delicious meals provided throughout your journey.' },
  { icon: Luggage, title: 'Free Luggage', description: 'Complimentary luggage service for your convenience.' },
  { icon: Headphones, title: '24/7 Support', description: 'Round-the-clock assistance for all your needs.' },
]

export function WhyChooseUs() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-xl font-semibold text-[#987547]">
            WE ARE THE BEST PARTNER FOR YOUR HAJJ AND UMRAH JOURNEY
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="bg-[#987547] p-3 rounded-full">
                  <benefit.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative"
          >
            <Image
              src="/masjid-nabawi.jpg"
              alt="Masjid Nabawi"
              width={600}
              height={400}
              className="rounded-lg object-cover"
            />
            <div className="absolute bottom-4 right-4 flex space-x-2">
              {[1, 2, 3].map((_, index) => (
                <div 
                  key={index} 
                  className={`w-3 h-3 rounded-full ${index === 0 ? 'bg-[#987547]' : 'bg-white'}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

