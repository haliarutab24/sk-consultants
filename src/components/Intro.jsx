import React, { useState, useEffect, useRef } from 'react';
import { Target, Users, BarChart3, ArrowRight, Shield, Zap, Globe, Sparkles, Rocket } from 'lucide-react';

// Counting animation component
const AnimatedCounter = ({ end, duration = 2000, suffix = "", glowColor = "cyan" }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
          let start = 0;
          const increment = end / (duration / 16);
          
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.ceil(start));
            }
          }, 16);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [end, duration, hasStarted]);

  const getGlowColor = (color) => {
    const colors = {
      cyan: 'text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]',
      purple: 'text-purple-400 drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]',
      blue: 'text-blue-400 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]',
      pink: 'text-pink-400 drop-shadow-[0_0_10px_rgba(236,72,153,0.5)]',
      green: 'text-green-400 drop-shadow-[0_0_10px_rgba(34,197,94,0.5)]'
    };
    return colors[color] || colors.cyan;
  };

  return (
    <div ref={ref} className={`text-3xl md:text-4xl font-bold mb-2 ${getGlowColor(glowColor)}`}>
      {count}{suffix}
    </div>
  );
};

const Intro = () => {
  const [statsInView, setStatsInView] = useState(false);

  const services = [
    {
      icon: <Target size={32} />,
      title: "Our Commitment",
      description: "Premium quality services backed by our steadfast dedication to excellence and measurable client success.",
      gradient: "from-cyan-500 to-blue-500",
      glow: "cyan",
      buttonText: "Learn more"
    },
    {
      icon: <Shield size={32} />,
      title: "Accounting Solutions",
      description: "Specialized offshore staffing for accounting firms, enabling focus on core competencies with expert support.",
      gradient: "from-purple-500 to-pink-500",
      glow: "purple",
      buttonText: "Discover"
    },
    {
      icon: <Zap size={32} />,
      title: "Business Finance",
      description: "Comprehensive financial solutions that deliver reliable insights and drive informed strategic decision-making.",
      gradient: "from-blue-500 to-cyan-500",
      glow: "blue",
      buttonText: "Explore"
    },
    {
      icon: <Globe size={32} />,
      title: "Global Expertise",
      description: "International business solutions with localized expertise, ensuring seamless global operations and compliance.",
      gradient: "from-green-500 to-cyan-500",
      glow: "green",
      buttonText: "Expand"
    }
  ];

  const staffingFeatures = [
    {
      icon: <BarChart3 size={24} />,
      title: "Business Analytics",
      description: "Data-driven insights",
      glow: "cyan"
    },
    {
      icon: <Users size={24} />,
      title: "Sales & Marketing",
      description: "Revenue growth experts",
      glow: "purple"
    },
    {
      icon: <Globe size={24} />,
      title: "Supply Chain",
      description: "Global operations",
      glow: "blue"
    }
  ];

  return (
    <section id="about-us" className="text-center my-16 sm:my-24 px-4 relative">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-40 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-pulse-medium"></div>
      
      {/* Header Section */}
      <div className="relative z-10">
        <div className="inline-flex items-center gap-2 bg-black border border-cyan-500/50 text-cyan-400 px-6 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/40 transition-all duration-300">
          <Rocket size={16} className="animate-pulse" />
          FUTURE-READY SOLUTIONS
        </div>
        <h2 className="text-4xl sm:text-5xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-6 animate-pulse">
          About Us
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-12 sm:mb-16">
          At <span className="text-cyan-400 font-semibold">SK Consultants</span>, we deliver exceptional financial planning, accounting, 
          and ERP systems tailored for international businesses. Our primary services 
          are enhanced with specialized HR, legal, and IT support, creating integrated 
          solutions for worldwide business excellence.
        </p>
      </div>

      {/* Enhanced Services Grid - Neon Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 relative z-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="group relative"
          >
            {/* Animated Background Glow */}
            <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition-all duration-500`}></div>
            
            {/* Main Card */}
            <div className={`relative bg-black/60 backdrop-blur-sm rounded-2xl p-6 border border-${service.glow}-500/30 shadow-2xl shadow-${service.glow}-500/20 hover:shadow-${service.glow}-400/30 transition-all duration-500 group-hover:-translate-y-2`}>
              {/* Top Accent Bar */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.gradient} rounded-t-2xl`}></div>
              
              {/* Icon Container */}
              <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${service.gradient} text-white mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-${service.glow}-500/50`}>
                {service.icon}
              </div>
              
              {/* Content */}
              <h3 className={`text-xl font-bold text-${service.glow}-300 mb-4 group-hover:drop-shadow-[0_0_10px_rgba(var(--${service.glow}-500),0.5)] transition-all duration-300`}>
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed mb-4 group-hover:text-gray-300 transition-colors duration-300">
                {service.description}
              </p>
              
              {/* CTA */}
              <div className="flex items-center justify-center text-cyan-400 font-semibold group-hover:translate-x-2 transition-transform duration-300 group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]">
                {service.buttonText} <ArrowRight size={18} className="ml-2" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Enhanced Virtual Staffing Section - Neon Theme */}
      <div className="relative bg-gradient-to-r from-cyan-900/30 via-purple-900/30 to-blue-900/30 rounded-3xl shadow-2xl p-8 md:p-12 mb-16 overflow-hidden border border-cyan-500/30 backdrop-blur-sm">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500 rounded-full -translate-y-32 translate-x-32 animate-pulse-slow"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500 rounded-full translate-y-24 -translate-x-24 animate-pulse-medium"></div>
        </div>
        
        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
        
        <div className="relative flex flex-col lg:flex-row items-center gap-8 z-10">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-cyan-500/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4 border border-cyan-500/30">
              <Users className="text-cyan-400" size={20} />
              <span className="text-cyan-400 font-semibold text-sm">NEON STAFFING</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Virtual Staffing Excellence
            </h3>
            <p className="text-cyan-100 text-lg md:text-xl leading-relaxed mb-6">
              Transform your core business functions with our dedicated remote professionals. 
              We provide specialized talent in <span className="text-cyan-300 font-semibold">Business Intelligence</span>, <span className="text-purple-300 font-semibold">Sales & Marketing</span>, 
              <span className="text-blue-300 font-semibold"> Supply Chain Management</span>, and more—scaling your capabilities without boundaries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 text-black px-8 py-3 rounded-xl font-bold hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                ACTIVATE NOW <ArrowRight size={20} />
              </button>
              <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-xl font-bold hover:bg-cyan-400/10 transition-all duration-300 backdrop-blur-sm hover:shadow-cyan-400/25 hover:shadow-2xl">
                VIEW SUCCESS STORIES
              </button>
            </div>
          </div>
          
          {/* Right Features */}
          <div className="flex flex-col gap-4">
            {staffingFeatures.map((feature, index) => (
              <div 
                key={index}
                className={`bg-${feature.glow}-500/10 backdrop-blur-sm rounded-2xl p-6 border border-${feature.glow}-500/30 hover:bg-${feature.glow}-500/15 transition-all duration-300 group hover:-translate-y-1`}
              >
                <div className="flex items-center gap-4">
                  <div className={`bg-${feature.glow}-500/20 w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-${feature.glow}-500/30`}>
                    {React.cloneElement(feature.icon, { className: `text-${feature.glow}-400` })}
                  </div>
                  <div>
                    <h4 className={`text-white font-bold text-lg text-${feature.glow}-300`}>{feature.title}</h4>
                    <p className={`text-${feature.glow}-200 text-sm`}>{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animated Stats Section - Neon Theme */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto relative z-10">
        <div className="text-center transform hover:scale-105 transition-transform duration-300 group">
          <AnimatedCounter 
            end={50} 
            duration={2000} 
            suffix="+" 
            glowColor="cyan"
          />
          <div className="text-cyan-300 font-medium group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.3)] transition-all duration-300">Happy Clients</div>
          <div className="w-12 h-1 bg-cyan-500 rounded-full mx-auto mt-3 group-hover:bg-cyan-400 transition-colors duration-300"></div>
        </div>
        
        <div className="text-center transform hover:scale-105 transition-transform duration-300 group">
          <AnimatedCounter 
            end={100} 
            duration={2200} 
            suffix="+" 
            glowColor="purple"
          />
          <div className="text-purple-300 font-medium group-hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.3)] transition-all duration-300">Projects Completed</div>
          <div className="w-12 h-1 bg-purple-500 rounded-full mx-auto mt-3 group-hover:bg-purple-400 transition-colors duration-300"></div>
        </div>
        
        <div className="text-center transform hover:scale-105 transition-transform duration-300 group">
          <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">24/7</div>
          <div className="text-blue-300 font-medium group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.3)] transition-all duration-300">Support Available</div>
          <div className="w-12 h-1 bg-blue-500 rounded-full mx-auto mt-3 group-hover:bg-blue-400 transition-colors duration-300"></div>
        </div>
        
        <div className="text-center transform hover:scale-105 transition-transform duration-300 group">
          <AnimatedCounter 
            end={98} 
            duration={1800} 
            suffix="%" 
            glowColor="pink"
          />
          <div className="text-pink-300 font-medium group-hover:drop-shadow-[0_0_8px_rgba(236,72,153,0.3)] transition-all duration-300">Client Satisfaction</div>
          <div className="w-12 h-1 bg-pink-500 rounded-full mx-auto mt-3 group-hover:bg-pink-400 transition-colors duration-300"></div>
        </div>
      </div>

      {/* Animated Decorative Elements */}
      <div className="mt-16 flex justify-center space-x-4">
        <div className="w-3 h-3 bg-cyan-400 rounded-full animate-bounce shadow-lg shadow-cyan-500/50"></div>
        <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce shadow-lg shadow-purple-500/50" style={{ animationDelay: '0.1s' }}></div>
        <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce shadow-lg shadow-blue-500/50" style={{ animationDelay: '0.2s' }}></div>
        <div className="w-3 h-3 bg-pink-400 rounded-full animate-bounce shadow-lg shadow-pink-500/50" style={{ animationDelay: '0.3s' }}></div>
      </div>

      {/* Floating Sparkles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <Sparkles
            key={i}
            size={16}
            className={`absolute text-cyan-400 opacity-40 animate-neon-float-slow`}
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

export default Intro;