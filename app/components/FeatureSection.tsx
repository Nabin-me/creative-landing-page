"use client";

import React, { useState } from "react";
import { PhoneCall, ChartPie, Zap, ThumbsUp } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

interface FeatureCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  color: string;
  isHovered: boolean;
  onHover: () => void;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
  color,
  isHovered,
  onHover,
}) => (
  <motion.div
    className="flex flex-col items-start justify-between p-6 rounded-xl relative overflow-hidden"
    onHoverStart={onHover}
    onHoverEnd={() => onHover()}
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.2 }}
  >
    <div
      className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${color}`}
    >
      <Icon className="w-8 h-8 text-white" />
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <button className="text-purple-600 font-semibold hover:bg-primary/90 hover:text-white border border-gray-400 py-2 px-5 rounded-xl transition-colors duration-200">
      Learn more
    </button>
    <motion.div
      className="absolute inset-0 bg-purple-100 -z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: isHovered ? 1 : 0 }}
      transition={{ duration: 0.2 }}
    />
  </motion.div>
);

const FeatureSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const features = [
    {
      icon: { component: PhoneCall, color: "bg-pink-500" },
      title: "Support",
      description:
        "Delivering faster and more personalized support with shared screens and cool design systems for Figma",
    },
    {
      icon: { component: ChartPie, color: "bg-blue-500" },
      title: "Sales growth",
      description:
        "Identify qualified customers with easy-to-use live chat messaging and AI-based Sales Bot",
    },
    {
      icon: { component: Zap, color: "bg-purple-500" },
      title: "Components-driven",
      description:
        "Delivering faster and more personalized support with shared screens and cool design systems for Figma",
    },
    {
      icon: { component: ThumbsUp, color: "bg-green-500" },
      title: "Swap the icon",
      description:
        "You can toggle to any icon within Instances and customize outlined stroke to more bolder or lighter",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto my-5 px-6">
      <h2 className="text-3xl font-bold mb-10">
        Delivering good designs since 1954 🚚💨
      </h2>
      <p className="text-gray-600 text-xl mb-12">
        We&apos;re the first multi-purpose design kit solutions for businesses.
        We help you bridge gaps between your layouts, templates and developers
        to empower all involved.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 mt-10 lg:grid-cols-4 gap-8 relative">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon.component}
            title={feature.title}
            description={feature.description}
            color={feature.icon.color}
            isHovered={hoveredIndex === index}
            onHover={() => setHoveredIndex(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
