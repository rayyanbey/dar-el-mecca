import Image from "next/image"
const WAme = () => {
  return (
    <div>
      <a
        href="https://wa.me/19843893054"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-[999] transition-transform duration-300"
      >
        <Image
          src="/images/wBig.svg"
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

