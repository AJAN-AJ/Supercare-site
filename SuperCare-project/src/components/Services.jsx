import { useState, useRef } from "react";
import {
  ArrowDownTrayIcon,
  BanknotesIcon,
  CurrencyDollarIcon,
  CreditCardIcon,
  PhoneIcon,
  BuildingLibraryIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";


const servicesData = [
  {
    title: "Depositing Money",
    description: "Deposit cash easily at any of our authorized SCS agents.",
    detailed:
      "Deposit money securely into your account or to others using our network of authorized agents. We support multiple banks including Mpamba, Airtel Money, FDH, Finca, NBS, and National Bank.",
    image: "/ServicesImage/closeup-two-men-sharing-content-with-their-phones(1).webp",
    icon: ArrowDownTrayIcon,
  },
  {
    title: "Withdrawing Money",
    description: "Withdraw money from multiple banks safely.",
    detailed:
      "Quick and reliable cash withdrawals from all major banks including Mpamba, Airtel Money, FDH, Finca, NBS, and National Bank. Our agents are trained to handle transactions securely and fast.",
    image: "/ServicesImage/cheerful-student-using-phone.webp",
    icon: BanknotesIcon,
  },
  {
    title: "Loading Values to Agents",
    description: "Super agent for Finca, Airtel, Mpamba.",
    detailed:
      "We provide value loading services for agents of Finca, Airtel Money, and Mpamba, ensuring seamless operations for agent businesses.",
    image: "/ServicesImage/side-view-man-reading-menu-restaurant.webp",
    icon: CurrencyDollarIcon,
  },
  {
    title: "Paying Loans to Finca",
    description: "Conveniently pay your Finca loans.",
    detailed:
      "Pay your Finca loans directly through our platform, avoiding long queues and delays.",
    image: "/ServicesImage/patient-receiving-medical-document.webp",
    icon: CreditCardIcon,
  },
  {
    title: "Buying Airtime & Bundles",
    description: "Top up airtime or bundles instantly.",
    detailed:
      "Purchase mobile airtime and data bundles for all networks quickly and securely using our platform.",
    image: "/ServicesImage/cheerful-student-using-phone.webp",
    icon: PhoneIcon,
  },
  {
    title: "Bill Payment",
    description: "Pay your water bills easily.",
    detailed:
      "Pay utility bills like water bills directly with SCS. Fast, secure, and verified.",
    image: "/ServicesImage/cheerful-student-using-phone.webp",
    icon: BuildingLibraryIcon,
  },
  {
    title: "Fees Payment",
    description: "Pay school or utility fees.",
    detailed:
      "Pay your school or other fees conveniently through our platform, keeping your records safe.",
    image: "/ServicesImage/cheerful-student-using-phone.webp",
    icon: DocumentTextIcon,
  },
];

function Services() {
  const [selected, setSelected] = useState(null);
  const servicesRef = useRef(null);

  const handleCardClick = (service) => {
    setSelected(service);

    // Scroll to the top of the services section
    servicesRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="mt-20 mb-20 px-6 lg:px-40" ref={servicesRef}>
      <div className="flex flex-col items-center mb-12">
        <h2 id="service" className="text-4xl font-bold text-center">Our Services</h2>
        <div className="h-1 bg-blue-600 w-24 rounded mt-2"></div>
      </div>

      {/* Detailed View */}
      {selected && (
        <div className="flex flex-col lg:flex-row bg-gray-50 rounded-lg shadow-lg mb-12 overflow-hidden animate-fadeUp">
          <img
            src={selected.image}
            alt={selected.title}
            className="w-full lg:w-1/2 object-cover"
          />
          <div className="p-6 lg:p-12 flex flex-col justify-center">
            <h3 className="text-3xl font-bold text-blue-600 mb-4">
              {selected.title}
            </h3>
            <p className="text-gray-700 text-lg">{selected.detailed}</p>
            <button
              onClick={() => setSelected(null)}
              className="mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Service Cards */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
        {servicesData.map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={index}
              onClick={() => handleCardClick(service)}
              className={`p-6 rounded-lg shadow-lg bg-white
                transition-all duration-300 cursor-pointer transform
                hover:shadow-2xl`}
            >
              <Icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2 text-blue-600">
                {service.title}
              </h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Services;
