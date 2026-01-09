import { useEffect, useRef, useState } from "react";
import building from "/building.png";

// Hook to detect if element is in viewport
function useInView(ref, threshold = 0.3) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [ref, threshold]);

  return isVisible;
}

function WhenWeStarted() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef);

  const [partnerCount, setPartnerCount] = useState(0);
  const [yearsCount, setYearsCount] = useState(0);

  // Animate numbers when in view
  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const partnerTarget = 7;
    const yearsTarget = 5;
    const duration = 1500; // animation duration in ms

    let startTime = null;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      setPartnerCount(Math.floor(progress * partnerTarget));
      setYearsCount(Math.floor(progress * yearsTarget));

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        // ensure final value
        setPartnerCount(partnerTarget);
        setYearsCount(yearsTarget);
      }
    };

    requestAnimationFrame(step);
  }, [inView]);

  return (
    <div ref={sectionRef} className="whoarewe-section py-10 px-5 bg-gray-100">
      <div className="flex items-center justify-center flex-col mb-20">
        <h2 className="font-bold text-4xl">When we started</h2>
        <div className="h-2 bg-blue-600 w-22 rounded mt-2"></div>
      </div>

      <div className="flex lg:flex-row flex-col justify-center lg:pl-40 lg:pr-40 gap-10 items-center">
        <img src={building} alt="building" className="flex-1 h-100 object-cover" />
        <div className="flex-1">
          <p className="text-xl mb-8">
            <span className="font-bold">Our Journey & Experience</span>
            <br />
            Supercare Solutions was established with a vision to bridge the gap in financial
            services accessibility in Malawi. Since our inception, we have been committed to
            providing reliable and secure mobile money and banking services to our community.
            <br />
            <br />
            Over the years, we have built strong partnerships with major financial institutions
            and mobile money providers, enabling us to offer comprehensive services that meet
            the diverse needs of our customers.
          </p>

          <div className="flex flex-col sm:flex-row gap-10 mt-10">
            <div className="flex flex-col items-center">
              <p className="text-green-400 font-bold text-4xl">{partnerCount}</p>
              <p>Partner Platforms</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="text-red-400 font-bold text-4xl">{yearsCount}+</p>
              <p>Years of Service</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhenWeStarted;
