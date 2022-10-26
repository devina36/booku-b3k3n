import React from 'react';

export default function CategoryTag({ text }) {
  return (
    <div
      className=" inline-block px-2 lg:px-4 py-2 mr-1 lg:mr-3 mb-2 md:mb-3 rounded-lg border-gray-400 border-2 
    scale-95 transition-all duration-300 ease-in-out hover:scale-100"
    >
      <p className="text-black font-popp text-sm md:text-base ">#{text}</p>
    </div>
  );
}
