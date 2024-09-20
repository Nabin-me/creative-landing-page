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
import { FooterSVG } from "./svg/backgrounds/FooterSVG";

const Footer = () => {
  return (
    <footer className="bg-white  relative">
      <div className="max-w-6xl mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          {/* Left Column */}
          <div>
            <div className="mb-8">
              <h4 className="text-gray-400  text-sm mb-4 font-bold tracking-[2.5px]">
                FOLLOW US
              </h4>
              <div className="flex space-x-4">
                <a href="#" className="bg-yellow-100 p-2 rounded-full">
                  <Facebook className="w-5 h-5 hover:text-yellow-500 text-gray-500" />
                </a>
                <a href="#" className="bg-gray-100 p-2 rounded-full">
                  <Linkedin className="w-5 h-5 hover:text-yellow-500 text-gray-500" />
                </a>
                <a href="#" className="bg-gray-100 p-2 rounded-full">
                  <Dribbble className="w-5 h-5 hover:text-yellow-500 text-gray-500" />
                </a>
                <a href="#" className="bg-gray-100 p-2 rounded-full">
                  <Twitter className="w-5 h-5 hover:text-yellow-500 text-gray-500" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-gray-400 text-sm mb-4 font-bold tracking-[2.5px]">
                INFORMATION
              </h4>
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
            <h4 className="text-gray-400 text-sm mb-4 font-bold tracking-[2.5px]">
              FOLLOW US
            </h4>
            <a
              href="mailto:hello@fapsterapp.com"
              className="text-purple-600 text-xl md:text-3xl font-extrabold hover:underline"
            >
              hello@creativemedia.com
            </a>

            <h4 className="text-gray-400 text-sm mt-8 mb-4 font-bold tracking-[2.5px] hidden md:block">
              KEEP IN TOUCH
            </h4>
            <form className="hidden md:block">
              <div className="flex gap-4 mb-4">
                <div className="flex-1 bg-gray-100 rounded-xl flex items-center p-3">
                  <input
                    type="text"
                    placeholder="Your name"
                    className="bg-transparent w-full focus:outline-none"
                  />
                  <User className="w-5 h-5 text-gray-400" />
                </div>
                <div className="flex-1 bg-gray-100 rounded-xl flex items-center p-3">
                  <input
                    type="email"
                    placeholder="E-mail"
                    className="bg-transparent w-full focus:outline-none"
                  />
                  <Mail className="w-5 h-5 text-gray-400" />
                </div>
              </div>
              <div className="flex gap-4 ">
                <div className="bg-gray-100 rounded-xl flex items-start p-3 mb-4 w-full max-w-[370px]">
                  <textarea
                    rows={1}
                    placeholder="Leave your message"
                    className="bg-transparent w-full focus:outline-none resize-none"
                  />
                  <Send className="w-5 h-5 text-purple-600 hover:bg-slate-50 " />
                </div>
                <button
                  type="submit"
                  className="bg-purple-600 text-white p-3 rounded-xl hover:bg-purple-700 transition-colors w-full max-w-[170px] h-full"
                >
                  SEND
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Wave decoration */}
      <div className="absolute -bottom-35 left-0 right-0 overflow-hidden hidden md:block">
        <FooterSVG />
      </div>
    </footer>
  );
};

export default Footer;
