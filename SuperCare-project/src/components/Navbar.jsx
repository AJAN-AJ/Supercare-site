import { NavLink } from "react-router-dom";
import logicon from "/Scslogo.webp";
import { useEffect, useState, useRef } from "react";

function Navbar() {
  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Charges", path: "/charges" },
    { name: "Contact Us", path: "/contact" },
  ];

  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isAiOpen, setAiOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const menuRef = useRef(null);
  const aiRef = useRef(null);

  const linkClasses = ({ isActive }) =>
    isActive
      ? "text-blue-600 font-semibold"
      : "text-gray-700 hover:text-blue-600";

  /* Hide navbar on scroll */
  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      setIsVisible(!(current > lastScrollY && current > 80));
      setLastScrollY(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  /* Close when clicking outside */
  useEffect(() => {
    const handleOutside = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        aiRef.current &&
        !aiRef.current.contains(e.target)
      ) {
        setMenuOpen(false);
        setAiOpen(false);
      }
    };

    if (isMenuOpen || isAiOpen) {
      document.addEventListener("mousedown", handleOutside);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => document.removeEventListener("mousedown", handleOutside);
  }, [isMenuOpen, isAiOpen]);

  return (
    <div className="h-20">
      <nav
        className={`fixed top-0 left-0 w-full bg-white shadow-md z-50
        transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">
          <NavLink to="/">
            <img src={logicon} alt="SCS" className="w-28 lg:w-48" />
          </NavLink>

          {/* Desktop links */}
          <ul className="hidden md:flex space-x-8">
            {links.map((l) => (
              <li key={l.path}>
                <NavLink to={l.path} className={linkClasses}>
                  {l.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Desktop AI */}
          <button
            onClick={() => setAiOpen(!isAiOpen)}
            className="hidden md:block bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            ASK AI
          </button>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden text-3xl"
          >
            ☰
          </button>
        </div>
      </nav>

      {/* Overlay */}
      {(isMenuOpen || isAiOpen) && (
        <div className="fixed inset-0 bg-black/40 z-40"></div>
      )}

      {/* Mobile MENU – slides from RIGHT */}
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 h-full w-64 bg-white z-50
        transform transition-transform duration-300
        ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <ul className="mt-20 px-6 space-y-6">
          {links.map((l) => (
            <li key={l.path}>
              <NavLink
                to={l.path}
                className={linkClasses}
                onClick={() => setMenuOpen(false)}
              >
                {l.name}
              </NavLink>
            </li>
          ))}

          <button
            onClick={() => {
              setMenuOpen(false);
              setAiOpen(true);
            }}
            className="w-full bg-blue-600 text-white py-2 rounded-lg"
          >
            Ask AI
          </button>
        </ul>
      </div>

      {/* AI CHAT – slides from LEFT */}
      <div
        ref={aiRef}
        className={`fixed top-0 left-0 h-full w-[340px] bg-white z-50
        transform transition-transform duration-300
        ${isAiOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="p-4 flex justify-between items-center border-b">
          <h3 className="font-semibold">SCS AI Assistant</h3>
          <button onClick={() => setAiOpen(false)}>✕</button>
        </div>

        <iframe
          src="https://www.chatbase.co/chatbot-iframe/VeeFNdSk5zsGTFbuafGQd"
          className="w-full h-[90%] border-none"
        ></iframe>
      </div>
    </div>
  );
}

export default Navbar;
