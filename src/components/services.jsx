import Image from 'next/image'
import { Button } from "@/components/ui/button"

const services = [
  {
    title: "Umrah Packages",
    description: "Discover Umrah services tailored for USA and all over the world. We handle visas, accommodations, and transport, ensuring a hassle-free spiritual journey.",
    image: "/umrah.jpg"
  },
  {
    title: "Hajj Packages",
    description: "Embark on a tailored Hajj journey with Darelmecca Travel where affordability meets top notch service, ensuring comfort and spiritual fulfilment.",
    image: "/hajj.jpg"
  },
  {
    title: "Tour Packages",
    description: "Embark on a Journey of Faith with Darelmecca Travel. Our tours ensure seamless, affordable pilgrimages for a transformative spiritual experience.",
    image: "/tour.jpg"
  }
]

export function Services() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">OUR SERVICES</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          We provide 3 types of tours for our clients. We arrange high quality tours with exceptional support.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image 
                src={service.image} 
                alt={service.title} 
                width={400} 
                height={300} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Button variant="outline" className="w-full">View details</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

