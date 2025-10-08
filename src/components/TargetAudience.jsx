import React from 'react';
import { Sparkles, Zap } from 'lucide-react';

const TargetAudience = ({ icon, title, description, glowColor = 'cyan' }) => {
  const getGlowStyles = (color) => {
    const colors = {
      cyan: {
        border: 'border-cyan-400/30',
        hoverBorder: 'hover:border-cyan-300',
        glow: 'shadow-cyan-500/20',
        hoverGlow: 'hover:shadow-cyan-400/30',
        iconBg: 'bg-cyan-500/20',
        iconHover: 'hover:bg-cyan-400/30',
        iconGlow: 'shadow-cyan-500/25',
        text: 'text-cyan-300',
        title: 'text-cyan-400',
        accent: 'from-cyan-500 to-blue-500',
        particle: 'bg-cyan-400'
      },
      purple: {
        border: 'border-purple-400/30',
        hoverBorder: 'hover:border-purple-300',
        glow: 'shadow-purple-500/20',
        hoverGlow: 'hover:shadow-purple-400/30',
        iconBg: 'bg-purple-500/20',
        iconHover: 'hover:bg-purple-400/30',
        iconGlow: 'shadow-purple-500/25',
        text: 'text-purple-300',
        title: 'text-purple-400',
        accent: 'from-purple-500 to-pink-500',
        particle: 'bg-purple-400'
      },
      blue: {
        border: 'border-blue-400/30',
        hoverBorder: 'hover:border-blue-300',
        glow: 'shadow-blue-500/20',
        hoverGlow: 'hover:shadow-blue-400/30',
        iconBg: 'bg-blue-500/20',
        iconHover: 'hover:bg-blue-400/30',
        iconGlow: 'shadow-blue-500/25',
        text: 'text-blue-300',
        title: 'text-blue-400',
        accent: 'from-blue-500 to-cyan-500',
        particle: 'bg-blue-400'
      },
      pink: {
        border: 'border-pink-400/30',
        hoverBorder: 'hover:border-pink-300',
        glow: 'shadow-pink-500/20',
        hoverGlow: 'hover:shadow-pink-400/30',
        iconBg: 'bg-pink-500/20',
        iconHover: 'hover:bg-pink-400/30',
        iconGlow: 'shadow-pink-500/25',
        text: 'text-pink-300',
        title: 'text-pink-400',
        accent: 'from-pink-500 to-rose-500',
        particle: 'bg-pink-400'
      },
      green: {
        border: 'border-green-400/30',
        hoverBorder: 'hover:border-green-300',
        glow: 'shadow-green-500/20',
        hoverGlow: 'hover:shadow-green-400/30',
        iconBg: 'bg-green-500/20',
        iconHover: 'hover:bg-green-400/30',
        iconGlow: 'shadow-green-500/25',
        text: 'text-green-300',
        title: 'text-green-400',
        accent: 'from-green-500 to-emerald-500',
        particle: 'bg-green-400'
      }
    };
    return colors[color] || colors.cyan;
  };

  const styles = getGlowStyles(glowColor);

  return (
    <div className={`group relative p-6 sm:p-8 rounded-2xl backdrop-blur-sm border ${styles.border} ${styles.hoverBorder} ${styles.glow} ${styles.hoverGlow} transition-all duration-500 hover:-translate-y-2 bg-black/40 max-w-sm`}>
      
      {/* Animated Background Glow */}
      <div className={`absolute inset-0 bg-gradient-to-br ${styles.accent}/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
      
      {/* Top Accent Bar */}
      <div className={`absolute top-0 left-0 w-0 h-1 bg-gradient-to-r ${styles.accent} rounded-t-2xl transition-all duration-500 group-hover:w-full`}></div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Icon Container */}
        <div className="relative mb-4 sm:mb-6">
          <div className={`inline-flex items-center justify-center p-3 rounded-2xl ${styles.iconBg} ${styles.iconHover} ${styles.iconGlow} border ${styles.border} transition-all duration-300 group-hover:scale-110 group-hover:rotate-12`}>
            
            {/* Icon Glow Effect */}
            <div className={`absolute inset-0 ${styles.particle} rounded-2xl blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>
            
            {/* Icon */}
            <div className="relative text-white transform group-hover:scale-110 transition-transform duration-300">
              {React.cloneElement(icon, {
                size: icon.props.size || 40,
                className: `${styles.text} ${icon.props.className || ''}`
              })}
            </div>
          </div>
          
          {/* Floating Sparkle */}
          <Sparkles 
            size={16} 
            className={`absolute -top-2 -right-2 ${styles.text} opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse`} 
          />
        </div>

        {/* Title */}
        <h3 className={`text-xl sm:text-2xl font-bold ${styles.title} mb-3 sm:mb-4 transition-all duration-300 group-hover:tracking-wider group-hover:drop-shadow-[0_0_10px_rgba(var(--${glowColor}-500),0.5)]`}>
          {title}
        </h3>

        {/* Description */}
        <p className={`text-gray-400 text-sm sm:text-base leading-relaxed transition-all duration-300 group-hover:text-gray-300 group-hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.1)]`}>
          {description}
        </p>
      </div>

      {/* Hover Indicator */}
      <div className={`absolute bottom-0 left-1/2 w-0 h-1 ${styles.particle} rounded-full transition-all duration-500 group-hover:w-3/4 group-hover:left-1/8 transform -translate-x-1/2`}></div>

      {/* Floating Particles on Hover */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
        <div className={`absolute -top-2 -left-2 w-3 h-3 ${styles.particle} rounded-full opacity-0 group-hover:opacity-60 group-hover:animate-neon-float-fast transition-opacity duration-500`} 
             style={{ animationDelay: '0.1s' }}></div>
        <div className={`absolute -top-2 -right-2 w-2 h-2 ${styles.particle} rounded-full opacity-0 group-hover:opacity-40 group-hover:animate-neon-float-medium transition-opacity duration-500`} 
             style={{ animationDelay: '0.3s' }}></div>
        <div className={`absolute -bottom-2 -left-2 w-1 h-1 ${styles.particle} rounded-full opacity-0 group-hover:opacity-50 group-hover:animate-neon-float-slow transition-opacity duration-500`} 
             style={{ animationDelay: '0.5s' }}></div>
      </div>

      {/* Corner Accents */}
      <Zap 
        size={12} 
        className={`absolute top-3 left-3 ${styles.text} opacity-0 group-hover:opacity-30 transition-opacity duration-300`} 
      />
      <Zap 
        size={12} 
        className={`absolute bottom-3 right-3 ${styles.text} opacity-0 group-hover:opacity-30 transition-opacity duration-300 rotate-180`} 
      />
    </div>
  );
};

export default TargetAudience;