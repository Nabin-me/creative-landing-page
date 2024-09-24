import Link from "next/link";
import React from "react";

const GridSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-12 gap-4 aspect-[1170/766]">
        <div className="col-span-3 row-span-6 bg-[#fdcb6e] rounded-[20px]"></div>
        <div className="col-span-5 row-span-4 bg-[#00b894] rounded-[20px] -mt-16"></div>
        <div className="col-span-2 row-span-4 bg-[#a29bfe] rounded-[20px] mt-36"></div>
        <div className="col-span-2 row-span-4 bg-[#2d3436] rounded-[20px] mt-36"></div>
        <div className="col-span-3 row-span-3 bg-[#e84393] rounded-[20px]"></div>
        <div className="col-span-4 row-span-4 bg-[#6c5ce7] rounded-[20px]"></div>

        <div className="col-span-2 row-span-3 bg-[#ff7675] rounded-[20px] mb-10"></div>
        <div className="col-span-3 row-span-2 flex justify-center items-start">
          <button className="bg-white text-[#6c5ce7] text-2xl font-bold py-3 px-6 w-full rounded-full shadow">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
};

export default GridSection;
