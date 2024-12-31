import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { CalendarDays, Plane } from 'lucide-react'

const packages = [
  {
    title: "JANUARY UMRAH",
    nights: 8,
    departFrom: "IAD-MED",
    departDate: "18 JAN",
    returnFrom: "JED-IAD",
    returnDate: "27 JAN",
    hotels: [
      "5 Star Swissotel Makkah",
      "5 Star Anwar Al Medina Movenpick"
    ],
    image: "/january-umrah.jpg"
  },
  {
    title: "FEBRUARY UMRAH",
    nights: 7,
    departFrom: "IAD-MED",
    departDate: "20 FEB",
    returnFrom: "JED-IAD",
    returnDate: "28 FEB",
    hotels: [
      "5 Star Swissotel Makkah",
      "5 Star Anwar Al Medina Movenpick"
    ],
    image: "/february-umrah.jpg"
  },
  {
    title: "RAMADAN UMRAH",
    nights: 8,
    departFrom: "IAD-MED",
    departDate: "07 MAR",
    returnFrom: "JED-IAD",
    returnDate: "16 MAR",
    hotels: [
      "5 Star Dar Iman Intercontinental Medina",
      "5 Star Swissotel Makkah"
    ],
    image: "/ramadan-umrah.jpg"
  }
]

export function UmrahPackages() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">CHOOSE YOUR UMRAH PACKAGES 2024 & 2025</h2>
        <p className="text-center text-gray-600 mb-12">
          We provide Best Umrah Packages 2025 From USA for overseas Pakistanis.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
              <Image 
                src={pkg.image} 
                alt={pkg.title} 
                width={400} 
                height={300} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{pkg.title}</h3>
                <p className="text-gray-600 mb-4">{pkg.nights} Nights</p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2">
                    <Plane className="h-5 w-5 text-[#987547]" />
                    <p className="text-sm">Depart from {pkg.departFrom}: {pkg.departDate}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Plane className="h-5 w-5 text-[#987547]" />
                    <p className="text-sm">Return from {pkg.returnFrom}: {pkg.returnDate}</p>
                  </div>
                  {pkg.hotels.map((hotel, hotelIndex) => (
                    <div key={hotelIndex} className="flex items-center gap-2">
                      <CalendarDays className="h-5 w-5 text-[#987547]" />
                      <p className="text-sm">{hotel}</p>
                    </div>
                  ))}
                </div>
                <p className="text-sm mb-4">Visa Included</p>
                <Button className="w-full bg-[#987547] hover:bg-[#876436]">View details</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

