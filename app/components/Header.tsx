"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Layout } from "lucide-react";

const Header = () => {
  const [activeLink, setActiveLink] = useState("#how-it-works");

  const navLinks = [
    { href: "#how-it-works", text: "How it works" },
    { href: "#who-we-are", text: "Who we are" },
    { href: "#what-we-do", text: "What we do" },
    { href: "#contact-us", text: "Contact us" },
  ];

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Layout className="h-8 w-8 text-purple-600 mr-2" />
            <span className="text-xl font-semibold text-gray-800">Grid</span>
          </Link>

          {/* Navigation */}
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
          <button className="bg-gray-800 text-white px-6 py-2 rounded-full hover:bg-gray-700 transition-colors">
            Sign In
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
