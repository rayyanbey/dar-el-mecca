import { Phone, Mail, MessageCircle } from 'lucide-react'

export function TopBar() {
  return (
    <div className="bg-[#987547] text-white py-2 px-4">
      <div className="container mx-auto flex flex-wrap justify-between text-sm">
        <div className="flex gap-6">
          <a href="tel:1-919-426-2061" className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            Call: 1-919-426-2061
          </a>
          <a href="tel:1-919-410-9557" className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            Call: 1-919-410-9557
          </a>
        </div>
        <div className="flex gap-6">
          <a href="https://wa.me/19843893054" className="flex items-center gap-2">
            <MessageCircle className="h-4 w-4" />
            Whatsapp: 1-984-389-3054
          </a>
          <a href="mailto:info@darelmecca.com" className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            Email: info@darelmecca.com
          </a>
        </div>
      </div>
    </div>
  )
}

