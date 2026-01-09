import { ShieldCheckIcon, BoltIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import UseInView from "./UseInView";

function WhyChooseUs() {
  const navigate = useNavigate();
  const [ref, visible] = UseInView({ threshold: 0.3 });

  const cards = [
    {
      title: "Fast and Reliable",
      description:
        "We are authorized agents offering mobile money including Mpamba, Airtel Money, FDH, NBS, National Bank, Finca, and others.",
      icon: (props) => <BoltIcon {...props} />,
    },
    {
      title: "Convenient Location",
      description:
        "Multiple branches and mobile money points for easier access.",
      icon: (props) => <MapPinIcon {...props} />,
    },
    {
      title: "Trusted & Secure",
      description:
        "Reliable service with safe transactions and transparent charges.",
      icon: (props) => <ShieldCheckIcon {...props} />,
    },
  ];

  return (
    <section
      ref={ref}
      className={`mt-20 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Section Header */}
      <div className="flex items-center justify-center flex-col mb-20">
        <h2 className="font-bold text-4xl">Why choose us</h2>
        <div className="h-1 bg-blue-600 w-24 rounded mt-2"></div>
      </div>

      {/* Cards */}
      <div className="px-[5%] lg:px-40 flex lg:flex-row flex-col justify-between gap-8">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center gap-4 w-full lg:w-80
                       rounded-xl bg-white p-8 pt-10
                       shadow-[0_4px_15px_rgba(0,0,0,0.12)]
                       transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
          >
            {/* Icon */}
            {card.icon({
              className: "w-12 h-12 text-blue-600 mb-2",
            })}

            {/* Title */}
            <h3 className="text-xl font-bold text-center">
              {card.title}
            </h3>

            {/* Description */}
            <p className="text-center text-gray-700">
              {card.description}
            </p>

            {/* Button */}
            <button
              onClick={() => navigate("/about")}
              className="mt-auto bg-green-500 hover:bg-green-600
                         font-bold px-5 py-2 text-white rounded-lg
                         transition"
            >
              Learn more
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChooseUs;
