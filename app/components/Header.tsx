import React from "react";
import Link from "next/link";
import { Layout } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Layout className="h-8 w-8 text-purple-600 mr-2" />
            <span className="text-xl font-semibold text-gray-800">Grid</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              href="#how-it-works"
              className="text-gray-500 hover:text-gray-700"
            >
              How it works
            </Link>
            <Link
              href="#who-we-are"
              className="text-gray-500 hover:text-gray-700"
            >
              Who we are
            </Link>
            <Link
              href="#what-we-do"
              className="text-gray-500 hover:text-gray-700"
            >
              What we do
            </Link>
            <Link
              href="#contact-us"
              className="text-gray-500 hover:text-gray-700"
            >
              Contact us
            </Link>
          </nav>

          {/* Sign In Button */}
          <button className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-colors">
            Sign In
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
