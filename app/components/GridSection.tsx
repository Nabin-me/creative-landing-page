import Link from "next/link";
import React from "react";

const GridSection = () => {
  return (
    <div className="grid grid-cols-6 gap-4 p-4">
      <div className="col-span-2 row-span-2 bg-yellow-300 rounded-3xl"></div>
      <div className="col-span-3 row-span-3 bg-emerald-400 rounded-3xl"></div>
      <div className="bg-purple-300 rounded-3xl"></div>
      <div className="bg-gray-800 rounded-3xl"></div>
      <div className="col-span-2 bg-pink-500 rounded-3xl"></div>
      <div className="col-span-3 bg-indigo-400 rounded-3xl"></div>
      <div className="bg-red-300 rounded-3xl"></div>
      <div className="col-span-2 row-span-1 flex items-center justify-center">
        <Link
          href="/learnmore"
          className="bg-white text-indigo-600 px-6 py-3 rounded-full hover:bg-indigo-100 transition-colors shadow-md"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default GridSection;
