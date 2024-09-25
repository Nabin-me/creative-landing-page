"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Layout, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [activeLink, setActiveLink] = useState("#how-it-works");
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#how-it-works", text: "How it works" },
    { href: "#who-we-are", text: "Who we are" },
    { href: "#what-we-do", text: "What we do" },
    { href: "#contact-us", text: "Contact us" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-white shadow-md z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Hamburger Menu Button */}
          <div className="flex gap-1">
            <motion.button
              className="md:hidden p-2"
              onClick={toggleMenu}
              animate={isOpen ? "open" : "closed"}
            >
              <motion.div
                variants={{
                  open: { rotate: 45, y: 7 },
                  closed: { rotate: 0, y: 0 },
                }}
                transition={{ duration: 0.2 }}
                className="w-6 h-0.5 bg-gray-800 mb-1.5"
              ></motion.div>
              <motion.div
                variants={{
                  open: { opacity: 0 },
                  closed: { opacity: 1 },
                }}
                transition={{ duration: 0.2 }}
                className="w-6 h-0.5 bg-gray-800 mb-1.5"
              ></motion.div>
              <motion.div
                variants={{
                  open: { rotate: -45, y: -7 },
                  closed: { rotate: 0, y: 0 },
                }}
                transition={{ duration: 0.2 }}
                className="w-6 h-0.5 bg-gray-800"
              ></motion.div>
            </motion.button>

            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Layout className="h-8 w-8 text-purple-600 mr-1" />
              <span className="text-xl font-semibold text-gray-800">Grid</span>
            </Link>
          </div>
          {/* Navigation for larger screens */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <React.Fragment key={link.href}>
                <Link
                  href={link.href}
                  className={`px-3 py-2 rounded-full transition-colors ${
                    activeLink === link.href
                      ? "text-black font-semibold"
                      : "text-gray-400 hover:text-gray-600"
                  }`}
                  onClick={() => setActiveLink(link.href)}
                >
                  {link.text}
                </Link>
                {index < navLinks.length - 1 && (
                  <span className="text-orange-400 text-xs">•</span>
                )}
              </React.Fragment>
            ))}
          </nav>

          {/* Sign In Button */}
          <button className=" bg-gray-800 text-white px-6 py-2 rounded-full hover:bg-gray-700 transition-colors">
            Sign In
          </button>
        </div>
      </div>

      {/* Sidebar Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 md:hidden"
          >
            <div className="p-4">
              <button onClick={toggleMenu} className="mb-4">
                <X className="h-6 w-6 text-gray-800" />
              </button>
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3 py-2 rounded-full transition-colors ${
                      activeLink === link.href
                        ? "text-black font-semibold"
                        : "text-gray-400 hover:text-gray-600"
                    }`}
                    onClick={() => {
                      setActiveLink(link.href);
                      setIsOpen(false);
                    }}
                  >
                    {link.text}
                  </Link>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
