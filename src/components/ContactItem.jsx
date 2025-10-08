import React from 'react';

const ContactItem = ({ icon, label, children, glowColor = 'cyan' }) => {
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
        label: 'text-cyan-400',
        gradient: 'from-cyan-500/5 to-cyan-700/5',
        particle1: 'bg-cyan-400',
        particle2: 'bg-cyan-300',
        particle3: 'bg-cyan-500'
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
        label: 'text-purple-400',
        gradient: 'from-purple-500/5 to-purple-700/5',
        particle1: 'bg-purple-400',
        particle2: 'bg-purple-300',
        particle3: 'bg-purple-500'
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
        label: 'text-pink-400',
        gradient: 'from-pink-500/5 to-pink-700/5',
        particle1: 'bg-pink-400',
        particle2: 'bg-pink-300',
        particle3: 'bg-pink-500'
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
        label: 'text-blue-400',
        gradient: 'from-blue-500/5 to-blue-700/5',
        particle1: 'bg-blue-400',
        particle2: 'bg-blue-300',
        particle3: 'bg-blue-500'
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
        label: 'text-green-400',
        gradient: 'from-green-500/5 to-green-700/5',
        particle1: 'bg-green-400',
        particle2: 'bg-green-300',
        particle3: 'bg-green-500'
      }
    };
    return colors[color] || colors.cyan;
  };

  const styles = getGlowStyles(glowColor);

  return (
    <div className={`group relative p-4 md:p-6 rounded-2xl backdrop-blur-sm border ${styles.border} ${styles.hoverBorder} ${styles.glow} ${styles.hoverGlow} transition-all duration-500 hover:-translate-y-1 hover:scale-105 bg-black/30`}>
      
      {/* Animated Background Glow */}
      <div className={`absolute inset-0 bg-gradient-to-br ${styles.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
      
      {/* Main Content */}
      <div className="flex items-start space-x-4 md:space-x-6 relative z-10">
        
        {/* Neon Icon Container */}
        <div className={`relative flex-shrink-0 p-3 md:p-4 rounded-2xl ${styles.iconBg} ${styles.iconHover} ${styles.iconGlow} border ${styles.border} transition-all duration-300 group-hover:scale-110 group-hover:rotate-12`}>
          
          {/* Icon Glow Effect */}
          <div className={`absolute inset-0 ${styles.particle1} rounded-2xl blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>
          
          {/* Icon */}
          <div className="relative text-white transform group-hover:scale-110 transition-transform duration-300">
            {React.cloneElement(icon, {
              size: icon.props.size || 24,
              className: `${styles.text} ${icon.props.className || ''}`
            })}
          </div>
        </div>

        {/* Text Content */}
        <div className="flex-grow min-w-0 space-y-2">
          {/* Label with Neon Glow */}
          <span className={`font-bold text-lg md:text-xl block ${styles.label} transition-all duration-300 group-hover:tracking-wider group-hover:drop-shadow-[0_0_10px_rgba(0,255,255,0.5)]`}>
            {label}
          </span>
          
          {/* Content with Subtle Glow */}
          <div className={`text-base md:text-lg break-words ${styles.text} leading-relaxed transition-all duration-300 group-hover:brightness-110`}>
            {children}
          </div>
        </div>

        {/* Hover Indicator */}
        <div className={`absolute bottom-0 left-1/2 w-0 h-1 ${styles.particle1} rounded-full transition-all duration-500 group-hover:w-3/4 group-hover:left-1/8 transform -translate-x-1/2`}></div>
      </div>

      {/* Floating Particles on Hover */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
        <div className={`absolute -top-2 -left-2 w-4 h-4 ${styles.particle1} rounded-full opacity-0 group-hover:opacity-60 group-hover:animate-neon-float-fast transition-opacity duration-500`} 
             style={{ animationDelay: '0.1s' }}></div>
        <div className={`absolute -top-2 -right-2 w-3 h-3 ${styles.particle2} rounded-full opacity-0 group-hover:opacity-40 group-hover:animate-neon-float-medium transition-opacity duration-500`} 
             style={{ animationDelay: '0.3s' }}></div>
        <div className={`absolute -bottom-2 -left-2 w-2 h-2 ${styles.particle3} rounded-full opacity-0 group-hover:opacity-50 group-hover:animate-neon-float-slow transition-opacity duration-500`} 
             style={{ animationDelay: '0.5s' }}></div>
      </div>
    </div>
  );
};

export default ContactItem;