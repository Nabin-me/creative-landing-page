import React from "react";
import {
  Facebook,
  Linkedin,
  Dribbble,
  Twitter,
  User,
  Mail,
  Send,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white pt-16 relative">
      <div className="max-w-6xl mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div>
            <div className="mb-8">
              <h4 className="text-gray-400 text-sm mb-4">FOLLOW US</h4>
              <div className="flex space-x-4">
                <a href="#" className="bg-yellow-100 p-2 rounded-full">
                  <Facebook className="w-5 h-5 text-yellow-500" />
                </a>
                <a href="#" className="bg-gray-100 p-2 rounded-full">
                  <Linkedin className="w-5 h-5 text-gray-500" />
                </a>
                <a href="#" className="bg-gray-100 p-2 rounded-full">
                  <Dribbble className="w-5 h-5 text-gray-500" />
                </a>
                <a href="#" className="bg-gray-100 p-2 rounded-full">
                  <Twitter className="w-5 h-5 text-gray-500" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-gray-400 text-sm mb-4">INFORMATION</h4>
              <div className="grid grid-cols-2 gap-4">
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  About Creative Media
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Onhovered / Active
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Get in Touch
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Things We Like
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Terms of Service
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Career
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Resources
                </a>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div>
            <h4 className="text-gray-400 text-sm mb-4">FOLLOW US</h4>
            <a
              href="mailto:hello@fapsterapp.com"
              className="text-purple-600 text-xl font-semibold hover:underline"
            >
              hello@creativemedia.com
            </a>

            <h4 className="text-gray-400 text-sm mt-8 mb-4">KEEP IN TOUCH</h4>
            <form>
              <div className="flex gap-4 mb-4">
                <div className="flex-1 bg-gray-100 rounded-lg flex items-center px-3 py-2">
                  <User className="w-5 h-5 text-gray-400 mr-2" />
                  <input
                    type="text"
                    placeholder="Your name"
                    className="bg-transparent w-full focus:outline-none"
                  />
                </div>
                <div className="flex-1 bg-gray-100 rounded-lg flex items-center px-3 py-2">
                  <Mail className="w-5 h-5 text-gray-400 mr-2" />
                  <input
                    type="email"
                    placeholder="E-mail"
                    className="bg-transparent w-full focus:outline-none"
                  />
                </div>
              </div>
              <div className="bg-gray-100 rounded-lg flex items-center px-3 py-2 mb-4">
                <input
                  type="text"
                  placeholder="Leave your message"
                  className="bg-transparent w-full focus:outline-none"
                />
                <Send className="w-5 h-5 text-purple-600" />
              </div>
              <button
                type="submit"
                className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
              >
                SEND
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Wave decoration */}
      <div className="absolute -bottom-35 left-0 right-0 overflow-hidden hidden md:block">
        <svg
          className="w-full"
          viewBox="0 0 1440 102"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M-0.333944 543.58L-0.583648 17.1366C-0.583648 17.1366 102.172 49.726 220.913 17.2075C339.654 -15.311 399.901 2.67057 565.331 59.0554C730.762 115.44 808.875 7.45977 1046 50.0384C1283.12 92.6171 1251.81 -46.9066 1439.77 17.611C1439.81 95.8883 1440.01 483.507 1440.04 544.056C1295.17 544.008 -0.333944 543.58 -0.333944 543.58Z"
            fill="#FFEAA7"
          />
        </svg>
      </div>
    </footer>
  );
};

export default Footer;
