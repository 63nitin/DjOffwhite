// FeaturedEvents.js
import React from "react";

const events = [
  {
    title: "Slamp Party",
    date: "19 DEC",
    image: "./assets/Event4.JPG",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, veritatis a nobis qui tempore necessitatibus.",
  },
  {
    title: "Love For My City",
    date: "24 DEC",
    image: "./assets/Event5.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, veritatis a nobis qui tempore necessitatibus.",
  },
  {
    title: "Music Night Fest Party",
    date: "8 JAN",
    image: "./assets/Event6.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, veritatis a nobis qui tempore necessitatibus.",
  },
];

const UpcommingEvents = () => {
  return (
    <section className="bg-black text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Upcomming Events</h2>
        <div className="flex justify-center mb-8">
          <div className="w-24 border-t-2 border-yellow-500"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300"
            >
              <div className="relative">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-0 right-0 bg-yellow-500 text-black px-2 py-1 font-bold">
                  {event.date}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-gray-400 mb-4">{event.description}</p>
                <a href="#" className="text-yellow-500 font-bold">
                  INFO
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcommingEvents;
