import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import bg1 from "/bgpng1.webp"
import bg2 from "/bgpng2.webp"
import bg3 from "/bgpng3.webp"

const slides = [
  {
    image: bg1,
    text: (
      <>
        We are <span className="text-blue-400">authorized</span> agents offering
        mobile money and banking services
      </>
    ),
    button: (
      <a
        href="https://wa.me/265886595123"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold"
      >
        Chat on WhatsApp
      </a>
    ),
  },
  {
    image: bg2,
    text: <>Check current mobile & banking charges</>,
    button: (
      <Link
        to="/charges"
        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold"
      >
        View Charges
      </Link>
    ),
  },
  {
    image: bg3,
    text: <>Discover all the services we offer</>,
    button: (
      <a
        href="#service"
        className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold"
      >
        Our Services
      </a>
    ),
  },
]

function Hero() {
  const [current, setCurrent] = useState(0)
  const [fade, setFade] = useState(true)

  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 10000)

    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => {
    setFade(false)
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
      setFade(true)
    }, 500)
  }

  const prevSlide = () => {
    setFade(false)
    setTimeout(() => {
      setCurrent((prev) =>
        prev === 0 ? slides.length - 1 : prev - 1
      )
      setFade(true)
    }, 500)
  }

  // Swipe handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      nextSlide()
    }

    if (touchEndX.current - touchStartX.current > 50) {
      prevSlide()
    }
  }

  return (
    <div
      className="relative lg:h-[550px] h-[450px] w-full overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background */}
      <div
        className={`absolute inset-0 bg-cover bg-center transition-all duration-700 ease-in-out
          ${fade ? "opacity-100 scale-100" : "opacity-0 scale-105"}`}
        style={{ backgroundImage: `url(${slides[current].image})` }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center px-[5%] lg:px-40">
        <div
          className={`max-w-3xl transform transition-all duration-700
            ${fade ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
        >
          <h1 className="text-white text-3xl md:text-5xl font-bold mb-6">
            {slides[current].text}
          </h1>
          {slides[current].button}
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        className="absolute hidden lg:block left-4 top-1/2 -translate-y-1/2 text-white bg-black/40 hover:bg-black/70 p-3 rounded-full z-20"
      >
        ❮
      </button>

      <button
        onClick={nextSlide}
        className="absolute hidden lg:block right-4 top-1/2 -translate-y-1/2 text-white bg-black/40 hover:bg-black/70 p-3 rounded-full z-20"
      >
        ❯
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 w-3 rounded-full transition-all ${
              current === index ? "bg-blue-500 scale-125" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default Hero
