import React from 'react';

const AnimatedBackground = () => {
  const bubbles = [
    { size: 'w-64 h-64', animation: 'animate-float-slow', delay: '0s' },
    { size: 'w-48 h-48', animation: 'animate-float-medium', delay: '2s' },
    { size: 'w-32 h-32', animation: 'animate-float-fast', delay: '1s' },
    { size: 'w-24 h-24', animation: 'animate-float-slow', delay: '3s' },
    { size: 'w-16 h-16', animation: 'animate-float-medium', delay: '0.5s' },
    { size: 'w-12 h-12', animation: 'animate-float-fast', delay: '1.5s' },
    { size: 'w-8 h-8', animation: 'animate-float-slow', delay: '2.5s' },
    { size: 'w-6 h-6', animation: 'animate-float-medium', delay: '3.5s' },
    { size: 'w-4 h-4', animation: 'animate-float-fast', delay: '4s' },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden">
      {bubbles.map((bubble, index) => (
        <div
          key={index}
          className={`absolute rounded-full bg-white opacity-10 ${bubble.size} ${bubble.animation}`}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: bubble.delay,
          }}
        ></div>
      ))}
    </div>
  );
};

export default AnimatedBackground;