import { useState } from "react";
import AskQuestion from "./AskQuestion";

const faqs = [
  {
    question: "What services does Supercare Solutions offer?",
    answer:
      "We offer Bank withdrawals, deposits, and other mobile money services.",
  },
  {
    question: "Where are you located?",
    answer:
      "Chirimba branch located at chirimba opposite kadathala furniture and Ndirande branch located in Ndirande Market next to filling station. Please visit the Contact page for directions.",
  },
  {
    question: "What are your operating hours?",
    answer:
      "We operate Monday to Saturday, 8:00 AM to 6:00 PM.",
  },
  {
    question: "Can I do money swapping?",
    answer:
      "Yes. Money swapping is available via WhatsApp request.",
  },
];

function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col items-center justify-center lg:flex-row">
        <div  className="md:hidden">
             <AskQuestion/>
        </div>
   
    <section className="max-w-3xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-10">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border rounded-xl bg-white shadow-sm overflow-hidden"
          >
            {/* Question */}
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-5 text-left"
            >
              <span className="font-medium text-lg">
                {faq.question}
              </span>

              <span
                className={`text-2xl font-bold transition-transform duration-300 ${
                  openIndex === index ? "rotate-45 text-blue-600" : "text-gray-600"
                }`}
              >
                +
              </span>
            </button>

            {/* Answer */}
            <div
              className={`transition-all duration-500 ease-in-out ${
                openIndex === index
                  ? "max-h-40 opacity-100"
                  : "max-h-0 opacity-0"
              } overflow-hidden`}
            >
              <p className="px-5 pb-5 text-gray-600">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Ask Question Section */}
      
    </section>
    
    </div>
  );
}

export default FAQs;
