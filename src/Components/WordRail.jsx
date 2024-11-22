import React from "react";

const WordRail = () => {
  const words = ["Music", "Beats", "Rhythm", "Vibes", "Energy", "Party", "Sound", "Bass", "Melody"];

  return (
    <div className="overflow-hidden mt-3 p-3 font-mono border-y-4  border-yellow-400  text-white">
      <div className="relative whitespace-nowrap">
        <div className="flex animate-marquee">
          {words.map((word, index) => (
            <span
              key={index}
              className="mx-4 text-5xl font-bold uppercase tracking-wide"
            >
              {word}
            </span>
          ))}
        </div>
        
        
      </div>
    </div>
  );
};

export default WordRail;
