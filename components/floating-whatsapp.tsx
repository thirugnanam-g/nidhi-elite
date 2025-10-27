"use client"

import Image from "next/image"

export function FloatingWhatsApp() {
  const phoneNumber = "919360299919"

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hi! I'm interested in Nidhi Elite plots and customized villas. Please provide more information.",
    )
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`
    window.open(whatsappUrl, "_blank")
  }

  const handleDownloadBrochure = () => {
    window.open("https://drive.google.com/file/d/1HtJrEzHmOXjn6weiQV-NJXvicFkUOzqs/view?usp=sharing", "_blank")
  }

  return (
    <>
      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full w-20 h-20 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 flex items-center justify-center"
        title="Chat on WhatsApp"
        aria-label="Chat on WhatsApp"
      >
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-3OUWoO4i1wmHotYaNaDDCnkbaxVtbh.png"
          alt="WhatsApp"
          width={56}
          height={56}
          className="w-14 h-14"
        />
      </button>

      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40">
        <button
          onClick={handleDownloadBrochure}
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-6 px-3 rounded-l-lg shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 flex flex-col items-center justify-center gap-1 writing-mode-vertical"
          title="Download Brochure"
          aria-label="Download Brochure"
        >
          <span
            className="text-xs font-bold tracking-wider"
            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
          >
            Brochure
          </span>
        </button>
      </div>
    </>
  )
}
