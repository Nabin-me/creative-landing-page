import GridSection from "./GridSection";
import BackgroundGrid from "./svg/backgrounds/BackgroundGrid";

export const HeroSection = () => {
  return (
    <>
      <div className="relative w-full -z-100 hidden md:block">
        <div className="absolute -right-20 -z-1 scale-125">
          <BackgroundGrid
            dotSize={10}
            dotColor="bg-secondary"
            className="rotate-45"
          />
        </div>
        <div className="absolute -right-96 -top-24 w-[500px] h-[500px] rotate-45 scale-[200%] bg-secondary/30 -z-2 rounded-3xl"></div>
      </div>
      <section className="w-full max-w-5xl relative mt-8 md:mt-0">
        <h1 className="text-5xl md:text-6xl font-black mb-4 text-center relative">
          Combine{" "}
          <span className="text-pink-500 relative before:bg-accent before:absolute before:bottom-0 before:left-0  before:z-[-1] before:rounded-full before:content-[''] before:w-[100px] before:h-[18px] md:before:w-[105%] md:before:h-1/2  md:before:translate-x-[-2%]">
            fine
          </span>{" "}
          images
        </h1>
        <p className="text-2xl md:text-4xl font-extrabold mb-16 text-center">
          To represent a product
        </p>

        <GridSection />
      </section>
    </>
  );
};
