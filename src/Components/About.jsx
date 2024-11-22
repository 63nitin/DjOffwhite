// About.js
import React from 'react';

const About = () => {
  return (
    <section className="bg-black text-white py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        {/* Image Section */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0 md:mr-10 transform hover:scale-105 transition duration-300">
          <img
            src="./assets/Event3.JPG" // Replace with actual DJ image URL
            alt="DJ performing"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
        
        {/* Text Section */}
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl font-bold mb-6 text-yellow-500">
            About Us
          </h2>
          <p className="mb-4 text-gray-300">
            We are a team of passionate DJs bringing the best beats to the scene. Our mission is to make every night unforgettable with the best music and an electric atmosphere.
          </p>
          <p className="mb-4 text-gray-400">
            From underground beats to mainstream hits, our DJs have the skills and the vibe to keep you moving all night long. Join us to experience the energy, rhythm, and lights of a truly immersive music journey.
          </p>
          <p className="mb-4 text-gray-400">
            With years of experience, state-of-the-art equipment, and a genuine love for music, we are here to deliver a night you won't forget.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
