import Link from "next/link"
import Image from "next/image"
import Message from "../_icons/Message";
import Phone from "../_icons/Phone";
import Whatsapp from "../_icons/Whatsapp";
import Facebook from "../_icons/Facebook";
import Instagram from "../_icons/Instagram";
import Youtube from "../_icons/Youtube";

export function Footer() {
  return (
    <footer className="bg-[#987547] text-white">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Image 
              src="/logo.svg" 
              alt="Dar El Mecca" 
              width={160} 
              height={80}
              className="object-contain"
            />
            <div className="flex gap-4">
              <Link href="/" className="hover:opacity-80">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="/" className="hover:opacity-80">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="/" className="hover:opacity-80">
                <Youtube className="h-6 w-6" />
              </Link>
            </div>
            <p className="text-sm">Follow Us</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">OUR BEST PACKAGES</h3>
            <ul className="space-y-2">
              <li><Link href="/umrah-packages-2024" className="hover:underline">Umrah Packages 2024</Link></li>
              <li><Link href="/hajj-packages-2024" className="hover:underline">Hajj Packages 2024</Link></li>
              <li><Link href="/tours-packages" className="hover:underline">Tours & Packages</Link></li>
              <li><Link href="/reserve" className="hover:underline">Reserve Your Spot Here</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">INFORMATION</h3>
            <ul className="space-y-2">
              <li><Link href="/faqs" className="hover:underline">FAQS</Link></li>
              <li><Link href="/about-us" className="hover:underline">About Us</Link></li>
              <li><Link href="/forms-resources" className="hover:underline">Forms & Resources</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">BUSINESS HOURS</h3>
            <ul className="space-y-2">
              <li>MONDAY-SATURDAY:</li>
              <li>10:00 AM - 07:00 PM EST</li>
              <li>SUNDAY: CLOSED</li>
            </ul>
            <div className="mt-4">
              <h4 className="font-semibold mb-2">CONTACT US</h4>
              <p className="text-sm">4801 GLENWOOD AVENUE</p>
              <p className="text-sm">SUITE # 200 RALEIGH,</p>
              <p className="text-sm">NORTH CAROLINA, 27612,</p>
              <p className="text-sm">UNITED STATES OF AMERICA</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-sm">
            <a href="mailto:info@darelmecca.com" className="flex items-center gap-2">
              <Message className="h-4 w-4" />
              Email: info@darelmecca.com
            </a>
            <a href="mailto:darelmecca94@gmail.com" className="flex items-center gap-2">
              <Message className="h-4 w-4" />
              Email: darelmecca94@gmail.com
            </a>
            <a href="tel:1-919-426-2061" className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              Call: 1-919-426-2061
            </a>
            <a href="tel:1-919-410-9557" className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              Call: 1-919-410-9557
            </a>
            <a href="https://wa.me/19843893054" className="flex items-center gap-2">
              <Whatsapp className="h-4 w-4" />
              Whatsapp: 1-984-389-3054
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

