import React from 'react';

const AnimatedBackground = () => {
  const neonBubbles = [
    { 
      size: 'w-64 h-64', 
      animation: 'animate-neon-float-slow', 
      delay: '0s',
      color: 'from-cyan-500/20 to-blue-500/20',
      glow: 'shadow-cyan-500/30'
    },
    { 
      size: 'w-48 h-48', 
      animation: 'animate-neon-float-medium', 
      delay: '2s',
      color: 'from-purple-500/20 to-pink-500/20',
      glow: 'shadow-purple-500/30'
    },
    { 
      size: 'w-32 h-32', 
      animation: 'animate-neon-float-fast', 
      delay: '1s',
      color: 'from-green-500/20 to-cyan-500/20',
      glow: 'shadow-green-500/30'
    },
    { 
      size: 'w-24 h-24', 
      animation: 'animate-neon-float-slow', 
      delay: '3s',
      color: 'from-blue-500/20 to-purple-500/20',
      glow: 'shadow-blue-500/30'
    },
    { 
      size: 'w-20 h-20', 
      animation: 'animate-neon-pulse-float', 
      delay: '0.5s',
      color: 'from-cyan-500/25 to-transparent',
      glow: 'shadow-cyan-400/40'
    },
    { 
      size: 'w-16 h-16', 
      animation: 'animate-neon-float-medium', 
      delay: '1.5s',
      color: 'from-pink-500/20 to-rose-500/20',
      glow: 'shadow-pink-500/30'
    },
    { 
      size: 'w-12 h-12', 
      animation: 'animate-neon-float-fast', 
      delay: '2.5s',
      color: 'from-cyan-500/15 to-blue-500/15',
      glow: 'shadow-cyan-500/25'
    },
    { 
      size: 'w-10 h-10', 
      animation: 'animate-neon-pulse-float', 
      delay: '3.5s',
      color: 'from-purple-500/25 to-transparent',
      glow: 'shadow-purple-400/40'
    },
    { 
      size: 'w-8 h-8', 
      animation: 'animate-neon-float-slow', 
      delay: '4s',
      color: 'from-green-500/15 to-cyan-500/15',
      glow: 'shadow-green-500/25'
    },
    { 
      size: 'w-6 h-6', 
      animation: 'animate-neon-float-fast', 
      delay: '1.2s',
      color: 'from-blue-500/10 to-cyan-500/10',
      glow: 'shadow-blue-500/20'
    },
    { 
      size: 'w-4 h-4', 
      animation: 'animate-neon-pulse-float', 
      delay: '2.8s',
      color: 'from-pink-500/20 to-transparent',
      glow: 'shadow-pink-400/30'
    },
    { 
      size: 'w-3 h-3', 
      animation: 'animate-neon-float-medium', 
      delay: '3.2s',
      color: 'from-cyan-500/10 to-blue-500/10',
      glow: 'shadow-cyan-500/15'
    }
  ];

  const energyBeams = [
    {
      width: 'w-1',
      height: 'h-32',
      animation: 'animate-energy-beam-1',
      color: 'bg-gradient-to-b from-cyan-500/40 to-transparent',
      position: 'left-1/4'
    },
    {
      width: 'w-1',
      height: 'h-24',
      animation: 'animate-energy-beam-2',
      color: 'bg-gradient-to-b from-purple-500/40 to-transparent',
      position: 'left-3/4'
    },
    {
      width: 'w-1',
      height: 'h-20',
      animation: 'animate-energy-beam-3',
      color: 'bg-gradient-to-b from-blue-500/40 to-transparent',
      position: 'left-1/2'
    }
  ];

  const floatingParticles = Array.from({ length: 25 }, (_, i) => ({
    size: `w-${1 + Math.floor(Math.random() * 2)} h-${1 + Math.floor(Math.random() * 2)}`,
    animation: `animate-neon-particle-${1 + Math.floor(Math.random() * 3)}`,
    delay: `${Math.random() * 5}s`,
    color: Math.random() > 0.6 ? 'bg-cyan-400/60' : 
           Math.random() > 0.3 ? 'bg-purple-400/60' : 'bg-blue-400/60'
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Neon Bubbles */}
      {neonBubbles.map((bubble, index) => (
        <div
          key={`bubble-${index}`}
          className={`absolute rounded-full bg-gradient-to-br ${bubble.color} ${bubble.size} ${bubble.animation} ${bubble.glow} backdrop-blur-sm`}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: bubble.delay,
          }}
        ></div>
      ))}

      {/* Energy Beams */}
      {energyBeams.map((beam, index) => (
        <div
          key={`beam-${index}`}
          className={`absolute ${beam.width} ${beam.height} ${beam.color} ${beam.animation} ${beam.position} backdrop-blur-sm`}
          style={{
            top: `${10 + Math.random() * 80}%`,
          }}
        ></div>
      ))}

      {/* Floating Particles */}
      {floatingParticles.map((particle, index) => (
        <div
          key={`particle-${index}`}
          className={`absolute rounded-full ${particle.color} ${particle.size} ${particle.animation} shadow-lg`}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: particle.delay,
          }}
        ></div>
      ))}

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-transparent to-black opacity-60">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
      </div>

      {/* Animated Glow Spots */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse-medium"></div>
      <div className="absolute top-3/4 left-3/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse-fast"></div>
    </div>
  );
};

export default AnimatedBackground;