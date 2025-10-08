import React from 'react';
import { CheckCircle, Zap, Sparkles, Target, Shield, Rocket, Globe, Users, Award, TrendingUp } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      text: 'Specialized knowledge that drives results',
      icon: <Target size={20} />,
      glow: 'cyan'
    },
    {
      text: 'Tailored global business solutions',
      icon: <Globe size={20} />,
      glow: 'purple'
    },
    {
      text: 'Commitment to accuracy and compliance',
      icon: <Shield size={20} />,
      glow: 'blue'
    },
    {
      text: 'Focus on client success across borders',
      icon: <Users size={20} />,
      glow: 'pink'
    },
    {
      text: 'Streamlined global operations',
      icon: <TrendingUp size={20} />,
      glow: 'green'
    },
    {
      text: 'Cutting-edge technology integration',
      icon: <Zap size={20} />,
      glow: 'cyan'
    },
    {
      text: 'Proven track record of growth',
      icon: <Award size={20} />,
      glow: 'purple'
    },
    {
      text: 'Continuous innovation in global markets',
      icon: <Rocket size={20} />,
      glow: 'blue'
    },
  ];

  const getGlowColor = (color) => {
    const colors = {
      cyan: {
        border: 'border-cyan-500/30',
        hoverBorder: 'hover:border-cyan-400',
        glow: 'shadow-cyan-500/20',
        hoverGlow: 'hover:shadow-cyan-400/30',
        iconBg: 'bg-cyan-500/20',
        iconHover: 'hover:bg-cyan-400/30',
        text: 'text-cyan-300',
        accent: 'from-cyan-500 to-blue-500'
      },
      purple: {
        border: 'border-purple-500/30',
        hoverBorder: 'hover:border-purple-400',
        glow: 'shadow-purple-500/20',
        hoverGlow: 'hover:shadow-purple-400/30',
        iconBg: 'bg-purple-500/20',
        iconHover: 'hover:bg-purple-400/30',
        text: 'text-purple-300',
        accent: 'from-purple-500 to-pink-500'
      },
      blue: {
        border: 'border-blue-500/30',
        hoverBorder: 'hover:border-blue-400',
        glow: 'shadow-blue-500/20',
        hoverGlow: 'hover:shadow-blue-400/30',
        iconBg: 'bg-blue-500/20',
        iconHover: 'hover:bg-blue-400/30',
        text: 'text-blue-300',
        accent: 'from-blue-500 to-cyan-500'
      },
      pink: {
        border: 'border-pink-500/30',
        hoverBorder: 'hover:border-pink-400',
        glow: 'shadow-pink-500/20',
        hoverGlow: 'hover:shadow-pink-400/30',
        iconBg: 'bg-pink-500/20',
        iconHover: 'hover:bg-pink-400/30',
        text: 'text-pink-300',
        accent: 'from-pink-500 to-rose-500'
      },
      green: {
        border: 'border-green-500/30',
        hoverBorder: 'hover:border-green-400',
        glow: 'shadow-green-500/20',
        hoverGlow: 'hover:shadow-green-400/30',
        iconBg: 'bg-green-500/20',
        iconHover: 'hover:bg-green-400/30',
        text: 'text-green-300',
        accent: 'from-green-500 to-emerald-500'
      }
    };
    return colors[color] || colors.cyan;
  };

  return (
    <section id="why-us" className="my-20 sm:my-32 scroll-mt-20 px-4 relative">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse-medium"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse-fast"></div>
      
      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

      {/* Header */}
      <div className="text-center mb-12 sm:mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 bg-black border border-cyan-500/50 text-cyan-400 px-6 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/40 transition-all duration-300">
          <Zap size={16} className="animate-pulse" />
          OUR ADVANTAGE
        </div>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-4 animate-pulse">
          Why Choose Us?
        </h2>
        <p className="text-xl text-cyan-200 max-w-2xl mx-auto">
          Experience the future of business consulting with our cutting-edge approach
        </p>
      </div>

      {/* Reasons Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 relative z-10">
        {reasons.map((reason, index) => {
          const styles = getGlowColor(reason.glow);
          
          return (
            <div
              key={index}
              className={`group relative p-4 sm:p-6 rounded-2xl backdrop-blur-sm border ${styles.border} ${styles.hoverBorder} ${styles.glow} ${styles.hoverGlow} transition-all duration-500 hover:-translate-y-2 bg-black/40`}
            >
              {/* Animated Background Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${styles.accent}/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Top Accent Bar */}
              <div className={`absolute top-0 left-0 w-0 h-1 bg-gradient-to-r ${styles.accent} rounded-t-2xl transition-all duration-500 group-hover:w-full`}></div>

              {/* Content */}
              <div className="flex items-center relative z-10">
                {/* Icon Container */}
                <div className={`relative mr-3 sm:mr-4 flex-shrink-0 p-2 rounded-xl ${styles.iconBg} ${styles.iconHover} border ${styles.border} transition-all duration-300 group-hover:scale-110 group-hover:rotate-12`}>
                  
                  {/* Icon Glow */}
                  <div className={`absolute inset-0 bg-${reason.glow}-400 rounded-xl blur-sm opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>
                  
                  {/* Icon */}
                  <div className="relative text-white transform group-hover:scale-110 transition-transform duration-300">
                    {React.cloneElement(reason.icon, {
                      className: `${styles.text}`
                    })}
                  </div>
                </div>

                {/* Text */}
                <span className={`text-base sm:text-lg font-medium ${styles.text} transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(var(--${reason.glow}-500),0.3)]`}>
                  {reason.text}
                </span>
              </div>

              {/* Hover Indicator */}
              <div className={`absolute bottom-0 left-1/2 w-0 h-1 bg-${reason.glow}-400 rounded-full transition-all duration-500 group-hover:w-3/4 group-hover:left-1/8 transform -translate-x-1/2`}></div>

              {/* Floating Sparkle */}
              <Sparkles 
                size={14} 
                className={`absolute top-2 right-2 ${styles.text} opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse`} 
              />
            </div>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-12 sm:mt-16 relative z-10">
        <div className="inline-flex items-center gap-4 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-500/30 rounded-2xl p-6 max-w-md mx-auto">
          <Zap size={24} className="text-cyan-400 animate-pulse" />
          <div className="text-left">
            <p className="text-cyan-300 font-semibold text-lg">Ready to experience the difference?</p>
            <p className="text-cyan-200 text-sm">Let's power up your business today</p>
          </div>
          <Sparkles size={24} className="text-purple-400 animate-pulse" />
        </div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-neon-float-slow opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;