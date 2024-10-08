"use client";
import PricingSection from "./components/PricingSection";
import FeatureSection from "./components/FeatureSection";
import { HeroSection } from "./components/HeroSection";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between md:p-24">
      {/* Hero Section */}

      <HeroSection />

      {/* Pricing Section */}

      <PricingSection />

      {/* Feature Section */}

      <FeatureSection />
    </div>
  );
}
