import React, { useState, useEffect } from 'react';
import { useSpring, animated, config } from 'react-spring';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { ArrowRight, Zap } from 'lucide-react';

const Header = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // Sample images for the slider - replace with your actual images
  const sliderImages = [
    {
      url: "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Strategic Financial Planning",
      subtitle: "Driving Business Growth Through Smart Financial Decisions"
    },
    {
      url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
      title: "Advanced ERP Solutions",
      subtitle: "Streamline Your Operations with Cutting-Edge Technology"
    },
    {
      url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Global Market Expertise",
      subtitle: "Expanding Your Business Across International Borders"
    },
    {
      url: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
      title: "Data-Driven Insights",
      subtitle: "Transform Your Business with Actionable Analytics"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying, sliderImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };



  const fadeIn = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: config.molasses,
  });

  const slideAnimation = useSpring({
    from: { opacity: 0, transform: 'scale(1.1)' },
    to: { opacity: 1, transform: 'scale(1)' },
    config: config.molasses,
  });

  return (
    <header className="relative h-screen overflow-hidden">
      {/* Background Image Slider */}
      <div className="absolute inset-0 z-0">
        {sliderImages.map((image, index) => (
          <animated.div
            key={index}
            style={{
              ...slideAnimation,
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${image.url})`,
              opacity: currentSlide === index ? 1 : 0,
              transform: currentSlide === index ? 'scale(1)' : 'scale(1.1)',
            }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out"
          />
        ))}
        
        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 via-purple-900/50 to-green-800/70 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto flex flex-col items-center justify-center h-full px-4 relative z-10">
        <animated.div
          style={fadeIn}
          className="text-center max-w-4xl"
        >
          <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-5xl font-bold mb-6 text-white leading-tight drop-shadow-2xl">
            Global Financial Excellence
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl mb-10 text-white/90 max-w-3xl leading-relaxed drop-shadow-lg">
            Expert Accounting, ERP, and Business Growth Solutions for the Global Market
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <animated.a
              href="#contact"
              style={fadeIn}
              className="group relative bg-gradient-to-r from-cyan-500 to-blue-500 text-black py-3 px-8 rounded-xl font-bold text-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/50 transform hover:-translate-y-1 hover:scale-105"
            >
              {/* Button Glow Effect */}
              <div className="absolute inset-0 bg-cyan-400 rounded-xl blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              
              {/* Button Content */}
              <span className="relative z-10 flex items-center">
                Get Started
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </animated.a>
            <animated.a
              href="#about-us"
              style={fadeIn}
              className="group relative border-2 border-cyan-400 text-cyan-400 py-3 px-8 rounded-xl font-bold text-lg hover:bg-cyan-400/10 transition-all duration-300 shadow-2xl hover:shadow-cyan-400/25 backdrop-blur-sm transform hover:-translate-y-1"
            >
              <span className="flex items-center">
                <Zap size={20} className="mr-2 group-hover:scale-110 transition-transform duration-300" />
                Our Services
              </span>
            </animated.a>
          </div>
        </animated.div>

        {/* Slider Controls */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="p-2 text-white/80 hover:text-white transition-all duration-200 hover:scale-110"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </button>

          {/* Navigation Dots */}
          <div className="flex space-x-2">
            {sliderImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'bg-white scale-125' 
                    : 'bg-white/50 hover:bg-white/80'
                }`}
              />
            ))}
          </div>

          {/* Play/Pause Button */}
          {/* <button
            onClick={toggleAutoplay}
            className="p-2 text-white/80 hover:text-white transition-colors duration-200"
          >
            {isPlaying ? (
              <PauseIcon className="w-5 h-5" />
            ) : (
              <PlayIcon className="w-5 h-5" />
            )}
          </button> */}

          {/* Navigation Arrows */}
          <button
            onClick={nextSlide}
            className="p-2 text-white/80 hover:text-white transition-all duration-200 hover:scale-110"
          >
            <ChevronRightIcon className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-green-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-40 left-20 w-24 h-24 bg-purple-400/20 rounded-full blur-xl animate-pulse delay-500"></div>
    </header>
  );
};

export default Header;