import React from 'react';
import ContactItem from './ContactItem';
import { Mail, Linkedin, Phone, Building, Globe, ArrowRight } from 'lucide-react';

const ContactSection = () => (
  <section
    id="contact"
    className="bg-gradient-to-r from-blue-800 to-green-500 text-white p-4 sm:p-8 md:p-16 rounded-3xl my-8 md:my-32 scroll-mt-20 shadow-2xl"
  >
    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 md:mb-10 leading-tight">
      We're just a click or call away!
    </h2>
    <p className="text-lg md:text-xl text-center max-w-3xl mx-auto mb-8 md:mb-16 leading-relaxed">
      Ready to optimize your finances and fuel growth? Let's chat! Book a free
      consultation and take the first step towards transforming your business's
      financial future.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 max-w-4xl mx-auto">
      <ContactItem icon={<Mail size={24} />} label="Email">
        <a
          href="mailto:info@zsmconsultants.com"
          className="hover:underline transition-colors duration-300 break-all"
        >
          info@zsmconsultants.com
        </a>
      </ContactItem>
      <ContactItem icon={<Linkedin size={24} />} label="LinkedIn">
        <a
          href="https://www.linkedin.com/company/zsmconsultants"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline transition-colors duration-300"
        >
          zsmconsultants
        </a>
      </ContactItem>
      <ContactItem icon={<Phone size={24} />} label="Phone (Pakistan)">
        +92 346 2780821
      </ContactItem>
      <ContactItem icon={<Phone size={24} />} label="Phone (UK)">
        +44 7502362347
      </ContactItem>
      <ContactItem icon={<Building size={24} />} label="Headquarters">
        London, UK
      </ContactItem>
      <ContactItem icon={<Globe size={24} />} label="Operations">
        UK & Pakistan
      </ContactItem>
    </div>
    <div className="text-center mt-8 md:mt-16">
      <a
        href="#contact"
        className="inline-flex items-center bg-white text-blue-800 py-2 px-6 md:py-3 md:px-8 rounded-full font-semibold text-base md:text-lg hover:bg-green-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
      >
        Schedule Consultation
        <ArrowRight size={20} className="ml-2" />
      </a>
    </div>
  </section>
);

export default ContactSection;