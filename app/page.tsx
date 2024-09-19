import Image from "next/image";
import Link from "next/link";

// Import components (to be created separately)
import PricingSection from "./components/PricingSection";
import FeatureSection from "./components/FeatureSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* Hero Section */}
      <section className="w-full max-w-5xl">
        <h1 className="text-6xl font-bold mb-4">
          Combine <span className="text-pink-500">fine</span> images
        </h1>
        <p className="text-2xl mb-8">To represent a product</p>

        <div className="w-full max-w-4xl mx-auto my-8">
          <div className="relative aspect-[16/9] w-full">
            <div className="absolute inset-0 grid grid-cols-8 grid-rows-6 gap-2">
              {/* Yellow rectangle */}
              <div className="bg-yellow-300 rounded-lg col-span-2 row-span-4"></div>

              {/* Green rectangle */}
              <div className="bg-emerald-400 rounded-lg col-span-4 row-span-3 col-start-3"></div>

              {/* Light purple rectangle */}
              <div className="bg-purple-300 rounded-lg col-span-1 row-span-2 col-start-7"></div>

              {/* Dark gray rectangle */}
              <div className="bg-gray-700 rounded-lg col-span-1 row-span-1 col-start-8 row-start-1"></div>

              {/* Pink rectangle */}
              <div className="bg-pink-500 rounded-lg col-span-2 row-span-2 col-start-3 row-start-4"></div>

              {/* Purple rectangle */}
              <div className="bg-purple-500 rounded-lg col-span-3 row-span-3 col-start-5 row-start-4"></div>

              {/* Coral rectangle */}
              <div className="bg-red-400 rounded-lg col-span-1 row-span-1 col-start-8 row-start-6"></div>
            </div>

            {/* Learn more button */}
            <button className="absolute bottom-4 left-4 px-6 py-2 bg-white text-purple-600 rounded-full shadow-lg font-semibold text-sm">
              Learn more
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <PricingSection />

      {/* Feature Section */}
      <FeatureSection />
    </main>
  );
}
