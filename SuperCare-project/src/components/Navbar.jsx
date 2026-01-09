import { NavLink } from "react-router-dom"
import logicon from "/Scslogo.png"
import { useEffect, useState } from "react"

function Navbar() {
  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Charges", path: "/charges" },
    { name: "Contact Us", path: "/contact" },
  ]

  const [isOpen, setIsOpen] = useState(false)
  const [isClicked, setClicked] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  const linkClasses = ({ isActive }) =>
    isActive
      ? "text-blue-600 font-semibold"
      : "text-gray-700 hover:text-blue-600"

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        // scrolling down
        setIsVisible(false)
      } else {
        // scrolling up
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <div className="h-20">
      <nav
        className={`fixed top-0 left-0 w-full bg-white shadow-md z-50
        transition-transform duration-300 ease-in-out
        ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">
          <NavLink to="/" className="flex items-center">
            <img src={logicon} alt="SCS" className="w-28 lg:w-48" />
          </NavLink>

          <ul className="hidden md:flex space-x-8">
            {links.map((link) => (
              <li key={link.path}>
                <NavLink to={link.path} className={linkClasses}>
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setClicked(!isClicked)}
              className="hidden md:block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              ASK AI
            </button>

            {isClicked && (
              <iframe
                src="https://www.chatbase.co/chatbot-iframe/VeeFNdSk5zsGTFbuafGQd"
                className="absolute right-4 top-20 h-[500px] w-[320px] rounded-lg shadow-lg"
              ></iframe>
            )}

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-3xl"
              aria-label="Toggle Menu"
            >
              {isOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          <ul className="bg-white px-4 py-4 space-y-4 shadow-md">
            {links.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={linkClasses}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}

            <li>
              <button
                onClick={() => setClicked(!isClicked)}
                className="w-full bg-blue-600 text-white py-2 rounded-lg"
              >
                Ask AI
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
