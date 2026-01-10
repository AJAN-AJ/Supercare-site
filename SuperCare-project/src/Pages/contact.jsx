import { useState } from "react";
import bg1 from "/manOncall.jpg";
import emailjs from "@emailjs/browser";
import Footer from "../components/Footer";

import {
  MdEmail,
  MdPhone,
  MdAccessTime,
  MdLocationOn,
} from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { ImSpinner2 } from "react-icons/im";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_klxp9t9",
        "template_2qlw9rq",
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        "z8O1UfgzUzVvTkQeL"
      )
      .then(() => {
        alert("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      })
      .catch(() => {
        alert("Failed to send message. Try again.");
      })
      .finally(() => setLoading(false));
  };

  /* WhatsApp click-to-chat */
  const whatsappMessage = encodeURIComponent(
    "Hello Supercare Solutions, I would like to inquire about your services."
  );

  const whatsappLink = `https://wa.me/265888350010?text=${whatsappMessage}`;

  return (
    <>
      {/* HERO */}
      <div
        className="bg-cover bg-center w-full"
        style={{ backgroundImage: `url(${bg1})` }}
      >
        <div className="bg-gradient-to-l from-black/90 via-black/70 to-black/90 p-[5%] pt-32 lg:pt-[20%]">
          <p className="text-white text-5xl md:text-6xl font-bold">
            Contact Us
          </p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="flex flex-col md:flex-row justify-center gap-10 px-[5%] mt-20 mb-20">
        {/* LEFT INFO */}
        <div className="flex flex-col gap-8 max-w-lg">
          <div>
            <h1 className="text-4xl font-bold mb-3">Let's get in touch</h1>
            <p className="text-xl text-gray-500">
              Need our service or have a question? <br />
              We're here to help.
            </p>
          </div>

          <div className="flex flex-col gap-4 text-lg">
            <div className="flex items-center gap-4">
              <MdEmail className="text-blue-600 text-2xl" />
              <p>sucaso18@gmail.com</p>
            </div>

            <div className="flex items-center gap-4">
              <MdPhone className="text-blue-600 text-2xl" />
              <p>+265 888 350 010</p>
            </div>

            <div className="flex items-center gap-4">
              <MdAccessTime className="text-blue-600 text-2xl" />
              <p>Monday – Saturday: 7:30 AM – 5:00 PM</p>
            </div>
          </div>

          {/* WhatsApp Button */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg w-fit transition"
          >
            <FaWhatsapp className="text-2xl" />
            Chat on WhatsApp
          </a>
        </div>

        {/* FORM */}
        <div className="border border-gray-200 p-6 rounded-2xl w-full max-w-md shadow">
          <h3 className="text-2xl font-bold mb-4">Send us a message</h3>

          <form onSubmit={sendEmail} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded"
            />

            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded"
            />

            <textarea
              name="message"
              placeholder="Your message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              required
              className="w-full p-3 border rounded"
            />

            <button
              type="submit"
              disabled={loading}
              className={`w-full flex items-center justify-center gap-2 py-3 rounded text-white transition
                ${loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"}`}
            >
              {loading ? (
                <>
                  <ImSpinner2 className="animate-spin text-xl" />
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </div>
      </div>

      {/* MAPS */}
      <div className="flex flex-col md:flex-row justify-center gap-8 px-[5%] mb-20">
        {/* Chirimba */}
        <div className="w-full md:w-[45%] h-80 rounded-xl overflow-hidden shadow-lg relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d375.8946712919385!2d35.006666102326484!3d-15.749173346837782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0"
            className="w-full h-full border-0"
            loading="lazy"
            allowFullScreen
          ></iframe>

          <div className="absolute bottom-4 left-4 bg-black/70 text-white px-4 py-2 rounded-lg flex items-center gap-2">
            <MdLocationOn className="text-red-400 text-xl" />
            Supercare Solutions – Chirimba
          </div>
        </div>

        {/* Ndirande */}
        <div className="w-full md:w-[45%] h-80 rounded-xl overflow-hidden shadow-lg relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d375.8946712919385!2d35.006666102326484!3d-15.749173346837782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0"
            className="w-full h-full border-0"
            loading="lazy"
            allowFullScreen
          ></iframe>

          <div className="absolute bottom-4 left-4 bg-black/70 text-white px-4 py-2 rounded-lg flex items-center gap-2">
            <MdLocationOn className="text-red-400 text-xl" />
            Supercare Solutions – Ndirande
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Contact;
