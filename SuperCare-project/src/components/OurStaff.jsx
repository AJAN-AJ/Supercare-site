import { useState, useRef, useEffect } from "react";
import StaffCard from "./StaffCard.jsx";
import vick from "/staff/IMG_20251204_163247_077.jpg";
import ceo from "/staff/IMG-20240722-WA0000.jpg";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const staffList = [
  { image: ceo, name: "S.A Nkhoma", position: "Chief Executive Officer" },
  { image: ceo, name: "M Nkhoma", position: "Chirimba Branch Manager" },
  { image: vick, name: "Victoria Nkhoma", position: "Ndirande Branch Manager" },
  { image: ceo, name: "Miss Grolia Muhara", position: "Staff Member" },
  { image: ceo, name: "Mrs Nyawete Ngomano", position: "Staff Member" },
  { image: ceo, name: "Miss Becalo", position: "Staff Member" },
];

function OurStaff() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef();

  // Scroll to active card
  const scrollToIndex = (index) => {
    const container = containerRef.current;
    const card = container.children[index];
    container.scrollTo({
      left: card.offsetLeft - container.offsetLeft,
      behavior: "smooth",
    });
  };

  const handlePrev = () => {
    const newIndex = activeIndex > 0 ? activeIndex - 1 : 0;
    setActiveIndex(newIndex);
    scrollToIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex = activeIndex < staffList.length - 1 ? activeIndex + 1 : staffList.length - 1;
    setActiveIndex(newIndex);
    scrollToIndex(newIndex);
  };

  // Update active card on scroll
  useEffect(() => {
    const container = containerRef.current;
    const handleScroll = () => {
      const children = Array.from(container.children);
      const containerCenter = container.offsetWidth / 2 + container.scrollLeft;
      let closestIndex = 0;
      let closestDistance = Infinity;
      children.forEach((child, idx) => {
        const childCenter = child.offsetLeft + child.offsetWidth / 2;
        const distance = Math.abs(containerCenter - childCenter);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = idx;
        }
      });
      setActiveIndex(closestIndex);
    };
    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="flex items-center justify-center flex-col mb-20 mt-20">
        <h2 className="font-bold text-4xl">Our Staff members</h2>
        <div className="h-2 bg-blue-600 w-22 rounded"></div>
      </div>

      <div className="relative">
        {/* Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-white/80 rounded-full hover:bg-white/100 shadow-lg"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-white/80 rounded-full hover:bg-white/100 shadow-lg"
        >
          <FaChevronRight />
        </button>

        <div
          ref={containerRef}
          className="flex overflow-x-auto scroll-snap-x snap-mandatory gap-5 px-5 py-10 scroll-smooth"
        >
          {staffList.map((staff, idx) => (
            <StaffCard
              key={idx}
              {...staff}
              active={idx === activeIndex}
            />
          ))}
        </div>
      </div>

      {/* Pagination dots */}
      <div className="flex justify-center gap-2 mt-5">
        {staffList.map((_, idx) => (
          <div
            key={idx}
            className={`w-3 h-3 rounded-full transition ${
              idx === activeIndex ? "bg-blue-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </>
  );
}

export default OurStaff;
