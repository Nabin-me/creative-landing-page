import GridSection from "./GridSection";

export const HeroSection = () => {
  return (
    <section className="w-full max-w-5xl">
      <h1 className="text-6xl font-extrabold mb-4 text-center relative">
        Combine{" "}
        <span className="text-pink-500 relative before:content-[''] before:w-[105%] before:h-1/2 before:rounded-full before:bg-accent before:absolute before:bottom-0 before:left-0 before:z-[-1] before:translate-x-[-2%]">
          fine
        </span>{" "}
        images
      </h1>
      <p className="text-4xl font-extrabold mb-16 text-center">
        To represent a product
      </p>

      <GridSection />
    </section>
  );
};
