import Cards from "/Cards.png";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md";

function Footer() {
  return (
    <footer className="bg-black text-white pt-10 pb-10 px-5">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-10 lg:gap-20">

        {/* About Section */}
        <div className="flex-1">
          <h1 className="font-bold text-4xl mb-4">SUPERCARE SOLUTIONS</h1>
          <p className="text-gray-300">
            SCS is an all-transaction bank services agency whose work is widely recognized in Malawi.
          </p>
        </div>

        {/* Social Media */}
        <div className="flex-1">
          <p className="font-bold mb-3">Our Social Media Platforms</p>
          <div className="flex gap-4 mt-2">
            <a href="#" className="hover:text-blue-500 transition-colors">
              <FaFacebookF size={24} />
            </a>
            <a href="#" className="hover:text-pink-500 transition-colors">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="hover:text-blue-700 transition-colors">
              <FaLinkedinIn size={24} />
            </a>
          </div>
        </div>

        {/* Shop Locations */}
        <div className="flex-1">
          <p className="font-bold mb-3">Our Shops</p>
          <p className="flex items-center gap-2"><MdLocationOn /> <span className="font-bold">Blantyre</span> - Ndirande, Market</p>
          <p className="flex items-center gap-2 mt-1"><MdLocationOn /> <span className="font-bold">Blantyre</span> - Chirimba, Furniture</p>
        </div>

        {/* Contact Info */}
        <div className="flex-1">
          <p className="font-bold mb-3">Contact Us</p>
          <p className="flex items-center gap-2"><MdPhone /> +265 888 350 010</p>
          <p className="flex items-center gap-2 mt-1"><MdEmail /> sucaso18@gmail.com</p>
        </div>

        {/* Cards Image */}
        <div className="hidden lg:block flex-1">
          <img src={Cards} alt="Visa/MasterCard accepted" className="w-full object-contain" />
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-gray-500 text-sm text-center mt-10">
        &copy; {new Date().getFullYear()} Supercare Solutions. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
