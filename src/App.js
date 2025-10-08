import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Intro from './components/Intro';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';

const App = () => {
  return (
    <div className="font-sans text-gray-100 bg-black relative overflow-hidden">
      {/* Global Animated Background */}
      <AnimatedBackground />
      
      {/* Animated Grid Overlay */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
      </div>

      {/* Animated Glow Orbs */}
      <div className="fixed top-1/4 -left-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="fixed bottom-1/4 -right-32 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse-medium"></div>
      <div className="fixed top-3/4 left-1/2 -translate-x-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse-fast"></div>

      {/* Main Content Container with Neon Border Effect */}
      <div className="relative z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-blue-500/5"></div>
        
        {/* Animated Scan Lines */}
        <div className="fixed inset-0 bg-[linear-gradient(transparent_95%,rgba(0,255,255,0.03)_100%)] bg-[size:100%_4px] pointer-events-none animate-scanlines z-20"></div>

        <Navbar />
        <Header id="home" />
        <main className="container mx-auto px-4 py-8 relative">
          {/* Section Connector Lines */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan-500/30 to-transparent hidden md:block"></div>
          
          <Intro id="about-us" />
          <div className="my-20 relative">
            <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
          </div>
          <Services id="how-it-works" />
          <div className="my-20 relative">
            <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
          </div>
          <WhyChooseUs id="what-we-do" />
          <div className="my-20 relative">
            <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
          </div>
          <ContactSection id="contact" />
        </main>
        <Footer />
      </div>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
        <button className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full shadow-2xl shadow-cyan-500/50 hover:shadow-cyan-400/60 transition-all duration-300 hover:scale-110 flex items-center justify-center text-white">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </button>
        
        <button className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full shadow-2xl shadow-purple-500/50 hover:shadow-purple-400/60 transition-all duration-300 hover:scale-110 flex items-center justify-center text-white">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </button>
        
        <button className="w-12 h-12 bg-gradient-to-br from-green-500 to-cyan-500 rounded-full shadow-2xl shadow-green-500/50 hover:shadow-green-400/60 transition-all duration-300 hover:scale-110 flex items-center justify-center text-white animate-bounce-slow">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </button>
      </div>

      {/* Loading Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-blue-500 transform origin-left scale-x-0 animate-loading-bar z-50"></div>
    </div>
  );
};

export default App;