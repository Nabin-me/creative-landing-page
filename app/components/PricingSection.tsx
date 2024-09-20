"use client";
import React, { useState } from "react";
import { CircleCheck } from "lucide-react";
import { BackgroundSVG } from "./svg/backgrounds/BackgroundSVG";
import { TickIcon } from "./svg/icons/TickIcon";

const PricingSection = () => {
  const [billingPeriod, setBillingPeriod] = useState("monthly");

  const plans = [
    {
      name: "Basic",
      price: billingPeriod === "monthly" ? "FREE" : "FREE",
      priceSubtext: "/ FOREVER",
      features: [
        "Components-driven system",
        "Sales-boosting landing pages",
        "Awesome Feather icons pack",
        "Themed into 3 different styles",
      ],
      buttonText: "Try for free",
      buttonClass: "border border-primary text-primary hover:bg-purple-50 py-3",
    },
    {
      name: "Pro",
      price: billingPeriod === "monthly" ? "$49" : "$490",
      priceSubtext: "/ MONTH",
      features: [
        "Components-driven system",
        "Sales-boosting landing pages",
        "Awesome Feather icons pack",
        "Themed into 3 different styles",
        "Will help to learn Figma",
      ],
      buttonText: "Regular license",
      buttonClass: "bg-primary text-white hover:bg-primary/80 py-3",
      featured: true,
    },
    {
      name: "Enterprise",
      price: billingPeriod === "monthly" ? "$12" : "$120",
      priceSubtext: "/ EDITOR",
      features: [
        "Components-driven system",
        "Sales-boosting landing pages",
        "Awesome Feather icons pack",
        "Themed into 3 different styles",
      ],
      buttonText: "Extended license",
      buttonClass: "border border-primary text-primary hover:bg-purple-50 py-3",
    },
  ];

  return (
    <section className="w-full max-w-7xl mx-auto my-16 px-4 relative">
      <div className="flex justify-center mb-8 items-center">
        <span className="text-gray-400 text-2xl font-semibold">Bill me</span>
        <div className="relative inline-flex items-center">
          <button
            className={`px-2 py-2 text-2xl  ${
              billingPeriod === "monthly"
                ? "text-primary font-bold"
                : "text-gray-400 font-semibold"
            }`}
            onClick={() => setBillingPeriod("monthly")}
          >
            monthly
          </button>
          <span className="text-gray-400 text-xl font-bold">•</span>
          <button
            className={`px-2 py-2 text-2xl  ${
              billingPeriod === "yearly"
                ? "text-primary font-bold"
                : "text-gray-400 font-semibold"
            }`}
            onClick={() => setBillingPeriod("yearly")}
          >
            yearly
          </button>
          <div
            className={`absolute h-[12px] w-[100px] bg-yellow-300 rounded-full transition-all duration-300 ease-in-out bottom-[10px] -z-10 ${
              billingPeriod === "yearly" ? "left-[120px] w-[75px]" : "left-2"
            }`}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
        {plans.map((plan, index) => (
          <div
            key={plan.name}
            className={`relative bg-white rounded-2xl p-8  ${
              plan.featured ? "shadow-lg z" : ""
            }`}
          >
            {plan.featured && (
              <div className="absolute -bottom-5 -left-5 -z-10">
                <BackgroundSVG />
              </div>
            )}

            <span className="text-primary font-semibold">{plan.name}</span>
            <h3 className="text-3xl font-bold mt-2">{plan.price}</h3>
            {plan.priceSubtext && (
              <span className="text-gray-500 text-sm">{plan.priceSubtext}</span>
            )}
            <ul className="mt-6 space-y-3">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center">
                  <TickIcon
                    size={24}
                    className="mr-2"
                    circleColor={
                      index === 0
                        ? "#D3D3D3"
                        : index === 1
                        ? "#FDCB6E"
                        : "#AEF8E3"
                    }
                  />
                  {feature}
                </li>
              ))}
            </ul>
            <button
              className={`mt-8 w-full py-2 px-4 rounded-lg transition-colors ${plan.buttonClass}`}
            >
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
