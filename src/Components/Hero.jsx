// src/components/HeroSection.js

import React from 'react';

const HeroSection = () => {
  return (
    <div className="">
      <div className=" mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        {/* Left Side Text */}
        <div className="text-left ssm:hidden text-white md:w-1/2">
          <h1 className="text-5xl  font-mono font-bold text-yellow-500 mb-5">DJ Offwhite Music Fest</h1>
          <p className="text-lg font-mono mb-6">
          
          </p>
          <button className="px-6 font-mono py-2 border border-yellow-500 text-yellow-500 rounded hover:bg-yellow-500 hover:text-black transition duration-300">
            <a href="https://www.instagram.com/dj.offwhite/"> JOIN US</a>
           
          </button>
        </div>
        
        {/* Right Side Image */}
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <img
            src="./assets/Profile.jpg" // Replace with the image URL
            alt="DJ Offwhite"
            className=" w-full border rounded-lg max-w-xs md:max-w-md object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
