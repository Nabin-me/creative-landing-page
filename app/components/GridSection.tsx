import Link from "next/link";
import Image from "next/image";
import React from "react";
import VideoPlayer from "./VideoPlayer";

const GridSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:py-16">
      <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-2 sm:gap-3 lg:gap-4 aspect-[4/5] sm:aspect-[8/7] lg:aspect-[1170/766]">
        <div className="col-span-2 sm:col-span-3 row-span-2 sm:row-span-4 lg:row-span-6 border-2 border-gray-200 rounded-[10px] sm:rounded-[15px] lg:rounded-[20px] overflow-hidden saturate-0 hover:saturate-100 hover:-translate-y-2 duration-300 ease-custom transition-all ">
          <Image
            className="w-full h-full object-cover"
            src="/images/image10.png"
            alt="Image 1"
            width={500}
            height={500}
          />
        </div>
        <div className="col-span-2 sm:col-span-5 row-span-3 sm:row-span-3 lg:row-span-4 rounded-[10px] sm:rounded-[15px] lg:rounded-[20px] sm:-mt-8 lg:-mt-16 border-2 border-gray-200 overflow-hidden saturate-0 hover:saturate-100 hover:-translate-y-2 duration-300 ease-custom transition-all">
          <VideoPlayer src="/videos/vid1.mp4" autoplay={true} />
        </div>
        <div className="col-span-1 sm:col-span-2 row-span-2 sm:row-span-4 lg:row-span-4 rounded-[10px] sm:rounded-[15px] lg:rounded-[20px] lg:mt-36 border-2 border-gray-200 overflow-hidden saturate-0 hover:saturate-100 hover:-translate-y-2 duration-300 ease-custom transition-all">
          <Image
            className="w-full h-full object-cover"
            src="/images/image9.png"
            alt="Image 3"
            width={500}
            height={500}
          />
        </div>
        <div className="col-span-1 sm:col-span-2 row-span-2 sm:row-span-4 lg:row-span-4 rounded-[10px] sm:rounded-[15px] lg:rounded-[20px] lg:mt-36 border-2 border-gray-200 overflow-hidden saturate-0 hover:saturate-100 hover:-translate-y-2 duration-300 ease-custom transition-all">
          <Image
            className="w-full h-full object-cover"
            src="/images/image4.png"
            alt="Image 4"
            width={500}
            height={500}
          />
        </div>
        <div className="col-span-2 sm:col-span-3 row-span-2 sm:row-span-3 lg:row-span-3 rounded-[10px] sm:rounded-[15px] lg:rounded-[20px] border-2 border-gray-200 overflow-hidden saturate-0 hover:saturate-100 hover:-translate-y-2 duration-300 ease-custom transition-all">
          <Image
            className="w-full h-full object-cover"
            src="/images/image6.jpg"
            alt="Image 5"
            width={500}
            height={500}
          />
        </div>
        <div className="col-span-2 sm:col-span-4 lg:col-span-4 row-span-2 sm:row-span-4 lg:row-span-4 rounded-[10px] sm:rounded-[15px] lg:rounded-[20px] border-2 border-gray-200 overflow-hidden saturate-0 hover:saturate-100 hover:-translate-y-2 duration-300 ease-custom transition-all">
          <Image
            className="w-full h-full object-cover"
            src="/images/image1.png"
            alt="Image 6"
            width={500}
            height={500}
          />
        </div>
        <div className="col-span-2 sm:col-span-2 row-span-2 lg:row-span-3 rounded-[10px] sm:rounded-[15px] lg:rounded-[20px] lg:mb-10 border-2 border-gray-200 overflow-hidden saturate-0 hover:saturate-100 hover:-translate-y-2 duration-300 ease-custom transition-all">
          <Image
            className="w-full h-full object-cover"
            src="/images/image2.png"
            alt="Image 7"
            width={500}
            height={500}
          />
        </div>
        <div className="col-span-2 sm:col-span-3 row-span-1 lg:row-span-2 flex justify-center items-start">
          <Link
            href={""}
            className="bg-white text-[#6c5ce7] hover:scale-105 hover:shadow-xl transition-all sm:text-lg lg:text-2xl text-center font-bold py-2 sm:py-3 px-3 sm:px-6 w-full rounded-full shadow"
          >
            Learn more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GridSection;
