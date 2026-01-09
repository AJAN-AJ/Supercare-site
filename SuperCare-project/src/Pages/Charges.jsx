import { useRef, useEffect, useState } from "react";
import nbs from "/chargesChats/NbsCharges.webp";
import nbCharges from "/chargesChats/NBCharges.png";
import tnmCharges from "/chargesChats/TnmCharges.jpeg";
import Footer from "../components/Footer";
import bg1 from "/front-view-happy-couple-sofa-making-plans-redecorate-house.jpg";
import Fdh from "/chargesChats/FDHCharges.jpg";

function Charges() {
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef();

  const bankCharges = [
    { name: "MPamba", image: nbs, color: "bg-blue-500" },
    { name: "Airtel Money", image: nbCharges, color: "bg-green-500" },
    { name: "FDH", image: Fdh, color: "bg-purple-500" },
    { name: "NBS", image: nbs, color: "bg-red-500" },
    { name: "National Bank", image: nbCharges, color: "bg-yellow-500" },
    { name: "Finca", image: nbCharges, color: "bg-purple-300" },
    { name: "StandardBank", image: nbCharges, color: "bg-blue-200" },
    { name: "First Capital", image: nbCharges, color: "bg-yellow-500" },
    { name: "CenteneryBank", image: nbCharges, color: "bg-green-600" },
  ];

  // Auto scroll effect
  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    let scrollAmount = 1; // px per interval
    let interval;

    const startScroll = () => {
      interval = setInterval(() => {
        container.scrollLeft += scrollAmount;
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }, 20);
    };

    if (!isPaused) startScroll();
    return () => clearInterval(interval);
  }, [isPaused]);

  // Scroll to specific bank (stop slider)
  const scrollToBank = (index) => {
    const container = containerRef.current;
    const targetIndex = index + bankCharges.length; // alternate card
    const child = container.children[targetIndex];
    if (child) {
      container.scrollLeft = child.offsetLeft;
      setIsPaused(true); // pause slider
    }
  };

  return (
    <>
      {/* Hero */}
      <div
        className="bg-cover bg-center w-full"
        style={{ backgroundImage: `url(${bg1})` }}
      >
        <div className="bg-gradient-to-l from-black/70 via-black/80 to-black/90 lg:p-30 p-[5%] pt-30 lg:pt-[10%]">
          <p className="text-white text-5xl md:text-6xl lg:w-[60%] lg:mb-0 mb-15 font-bold">
            Check Out Latest <span className="text-blue-400">Mobile Withdraw Charges</span> from all Banks
          </p>
        </div>
      </div>

      <div className="p-8 space-y-6">
        <h2 className="text-3xl font-bold text-center">Bank Charges</h2>

        {/* Bank buttons */}
        <div className="flex gap-2 flex-wrap mx-auto justify-center space-x-4">
          {bankCharges.map((bank, idx) => (
            <button
              key={bank.name}
              onClick={() => scrollToBank(idx)}
              className={`${bank.color} text-white px-4 py-2 rounded-lg`}
            >
              {bank.name}
            </button>
          ))}
        </div>

        {/* Horizontal slider */}
        <div className="relative mt-6">
          {/* User hint */}
          {!isPaused && (
            <div className="absolute top-2 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-1 rounded z-10 text-sm animate-bounce">
              Click slider to pause
            </div>
          )}

          <div
            ref={containerRef}
            className="flex overflow-x-hidden space-x-4 cursor-pointer"
            onClick={() => setIsPaused(!isPaused)}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {[...bankCharges, ...bankCharges].map((bank, idx) => (
              <div
                key={idx}
                className={`flex-none w-[100%] md:w-[30%] ${bank.color} h-[40%] text-white rounded-lg flex flex-col justify-center items-center text-xl font-bold relative`}
              >
                <div className="text-lg mt-2">
                  <img src={bank.image} alt={bank.name} className="max-h-48 object-contain" />
                </div>
                {/* Overlay for non-in-focus cards on mobile */}
                <div className="absolute inset-0 bg-white/50 md:hidden rounded-lg pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Charges;
