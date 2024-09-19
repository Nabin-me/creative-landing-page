"use client";
import React, { useState } from "react";

const PricingSection = () => {
  const [billingPeriod, setBillingPeriod] = useState("monthly");

  return (
    <section className="max-w-4xl mx-auto my-16 px-4">
      <h2 className="text-4xl font-bold text-center mb-4">
        Affordable pricing
      </h2>

      <div className="flex justify-center items-center mb-8">
        <span className="text-gray-500 mr-2">Bill me</span>
        <button
          className={`px-3 py-1 rounded-full ${
            billingPeriod === "monthly"
              ? "bg-purple-600 text-white"
              : "text-gray-500"
          }`}
          onClick={() => setBillingPeriod("monthly")}
        >
          monthly
        </button>
        <span className="text-gray-500 mx-2">•</span>
        <button
          className={`px-3 py-1 rounded-full ${
            billingPeriod === "yearly"
              ? "bg-purple-600 text-white"
              : "text-gray-500"
          }`}
          onClick={() => setBillingPeriod("yearly")}
        >
          yearly
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Free Plan */}
        <div className="border rounded-lg p-6 relative">
          <span className="text-purple-600 font-semibold">Starter</span>
          <h3 className="text-3xl font-bold mt-2">Free</h3>
          <span className="text-gray-500 text-sm">/ FOREVER</span>
          <ul className="mt-6 space-y-3">
            <li className="flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Components-driven system
            </li>
            <li className="flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Sales-boosting landing pages
            </li>
            <li className="flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Awesome Feather icons pack
            </li>
          </ul>
          <button className="mt-8 w-full py-2 px-4 border border-purple-600 text-purple-600 rounded-full hover:bg-purple-50 transition-colors">
            Try for free
          </button>
        </div>

        {/* Individual Plan */}
        <div className="border rounded-lg p-6 relative bg-white shadow-lg">
          <span className="text-purple-600 font-semibold">Individual</span>
          <div className="absolute top-4 right-4 bg-gray-100 text-xs font-bold px-2 py-1 rounded-full">
            BEST!
          </div>
          <h3 className="text-3xl font-bold mt-2">$24</h3>
          <span className="text-gray-500 text-sm">/ MONTH</span>
          <ul className="mt-6 space-y-3">
            <li className="flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Components-driven system
            </li>
            <li className="flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Sales-boosting landing pages
            </li>
            <li className="flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Awesome Feather icons pack
            </li>
            <li className="flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Themed into 3 different styles
            </li>
            <li className="flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-yellow-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Will help to learn Figma
            </li>
          </ul>
          <button className="mt-8 w-full py-2 px-4 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors">
            Regular license
          </button>
        </div>

        {/* Corporate Plan */}
        <div className="border rounded-lg p-6 relative">
          <span className="text-purple-600 font-semibold">Corporate</span>
          <h3 className="text-3xl font-bold mt-2">$12</h3>
          <span className="text-gray-500 text-sm">/ EDITOR</span>
          <ul className="mt-6 space-y-3">
            <li className="flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-teal-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Components-driven system
            </li>
            <li className="flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-teal-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Sales-boosting landing pages
            </li>
            <li className="flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-teal-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Awesome Feather icons pack
            </li>
            <li className="flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-teal-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              Themed into 3 different styles
            </li>
          </ul>
          <button className="mt-8 w-full py-2 px-4 border border-purple-600 text-purple-600 rounded-full hover:bg-purple-50 transition-colors">
            Extended license
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
