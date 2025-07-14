"use client";
import React from "react";

const gradients = [
  "from-yellow-400 to-orange-500",
  "from-orange-500 to-pink-600",
  "from-pink-600 to-purple-600",
  "from-purple-600 to-blue-500",
  "from-blue-500 to-cyan-400",
  "from-cyan-400 to-green-400",
];

const SoundVisualizer = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-32 z-15">
      <div className="flex items-end justify-center h-[80%] pb-6 gap-[2px] sm:gap-[3px] max-w-[95%] sm:max-w-[90%] mx-auto">
        {[...Array(60)].map((_, i) => {
          const gradient = gradients[i % gradients.length];
          const delay = `${(i % 10) * 0.5}s`;
          const duration = `${2 + (i % 6) * 0.4}s`;

          return (
            <div
              key={i}
              className={`bg-gradient-to-t ${gradient} w-[2px] sm:w-[3px] h-full origin-bottom animate-visualizer`}
              style={{
                animationDelay: delay,
                animationDuration: duration,
                transform: "scaleY(0.2)",
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SoundVisualizer;
