import GridSection from "./GridSection";

export const HeroSection = () => {
  return (
    <section className="w-full max-w-5xl">
      <h1 className="text-6xl font-extrabold mb-4 text-center">
        Combine <span className="text-pink-500">fine</span> images
      </h1>
      <p className="text-4xl font-bold mb-8 text-center">
        To represent a product
      </p>

      <GridSection />
    </section>
  );
};
