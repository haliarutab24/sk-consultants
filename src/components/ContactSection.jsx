import React from 'react';
import ContactItem from './ContactItem';
import { Mail, Linkedin, Phone, Building, Globe, ArrowRight, Zap, Sparkles, MessageCircle } from 'lucide-react';

const ContactSection = () => (
  <section
    id="contact"
    className="relative bg-black p-4 sm:p-8 md:p-16 rounded-3xl my-8 md:my-32 scroll-mt-20 overflow-hidden"
  >
    {/* Background Elements */}
    <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-purple-900/20 to-blue-900/20"></div>
    <div className="absolute top-10 left-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
    <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse-medium"></div>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse-fast"></div>
    
    {/* Grid Overlay */}
    <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

    {/* Border Glow */}
    <div className="absolute inset-0 rounded-3xl border-2 border-cyan-500/30 shadow-2xl shadow-cyan-500/20"></div>

    {/* Main Content */}
    <div className="relative z-10">
      {/* Header */}
      <div className="text-center mb-6 md:mb-10">
        <div className="inline-flex items-center gap-2 bg-cyan-500/20 backdrop-blur-sm border border-cyan-500/30 text-cyan-400 px-6 py-2 rounded-full text-sm font-semibold mb-4 shadow-lg shadow-cyan-500/25">
          <Zap size={16} className="animate-pulse" />
          LET'S POWER UP YOUR BUSINESS
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-4 animate-pulse">
        Contact Us
        </h2>
        <p className="text-lg md:text-xl text-center max-w-3xl mx-auto leading-relaxed text-cyan-100">
          Ready to optimize your finances and fuel growth? Let's chat! Book a free
          consultation and take the first step towards transforming your business's
          financial future.
        </p>
      </div>

      {/* Contact Items Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto mb-8 md:mb-12">
        <ContactItem 
          icon={<Mail size={24} />} 
          label="Email" 
          glowColor="cyan"
        >
          <a
            href="mailto:info@skconsultants.com"
            className="hover:text-cyan-300 transition-all duration-300 break-all hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]"
          >
            info@skconsultants.com
          </a>
        </ContactItem>
        
        <ContactItem 
          icon={<Linkedin size={24} />} 
          label="LinkedIn" 
          glowColor="blue"
        >
          <a
            href="https://www.linkedin.com/company/skconsultants"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-300 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]"
          >
            skconsultants
          </a>
        </ContactItem>
        
        <ContactItem 
          icon={<Phone size={24} />} 
          label="Phone (Pakistan)" 
          glowColor="purple"
        >
          <span className="hover:text-purple-300 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]">
            +92 346 2780821
          </span>
        </ContactItem>
        
        <ContactItem 
          icon={<Phone size={24} />} 
          label="Phone (UK)" 
          glowColor="pink"
        >
          <span className="hover:text-pink-300 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(236,72,153,0.5)]">
            +44 7502362347
          </span>
        </ContactItem>
        
        <ContactItem 
          icon={<Building size={24} />} 
          label="Headquarters" 
          glowColor="green"
        >
          <span className="hover:text-green-300 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.5)]">
            London, UK
          </span>
        </ContactItem>
        
        <ContactItem 
          icon={<Globe size={24} />} 
          label="Global Operations" 
          glowColor="cyan"
        >
          <span className="hover:text-cyan-300 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]">
            UK & Pakistan
          </span>
        </ContactItem>
      </div>

      {/* CTA Button */}
      <div className="text-center relative">
        {/* Floating Elements */}
        <Sparkles 
          size={20} 
          className="absolute -left-4 top-1/2 -translate-y-1/2 text-cyan-400 animate-pulse opacity-60" 
        />
        <Sparkles 
          size={20} 
          className="absolute -right-4 top-1/2 -translate-y-1/2 text-purple-400 animate-pulse opacity-60" 
        />
        
        <a
          href="#contact"
          className="group relative inline-flex items-center bg-gradient-to-r from-cyan-500 to-blue-500 text-black py-3 px-8 md:py-4 md:px-12 rounded-xl font-bold text-lg md:text-xl hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-400/40 transform hover:-translate-y-1 hover:scale-105"
        >
          {/* Button Glow Effect */}
          <div className="absolute inset-0 bg-cyan-400 rounded-xl blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
          
          {/* Button Content */}
          <span className="relative z-10 flex items-center">
            <MessageCircle size={20} className="mr-3 group-hover:scale-110 transition-transform duration-300" />
            INITIATE CONVERSATION
            <ArrowRight size={20} className="ml-3 group-hover:translate-x-1 transition-transform duration-300" />
          </span>
        </a>
        
        {/* Supporting Text */}
        <p className="text-cyan-300 text-sm mt-4 font-medium flex items-center justify-center gap-2">
          <Zap size={14} className="animate-pulse" />
          Response within 24 hours • Free initial consultation
          <Zap size={14} className="animate-pulse" />
        </p>
      </div>
    </div>

    {/* Floating Particles */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-neon-float-slow opacity-40"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
      {[...Array(10)].map((_, i) => (
        <div
          key={i + 15}
          className="absolute w-1 h-1 bg-purple-400 rounded-full animate-neon-float-medium opacity-30"
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

export default ContactSection;