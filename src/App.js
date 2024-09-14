import React, { useState, useEffect } from "react";
import {
  ChartLine,
  Mail,
  Linkedin,
  Phone,
  Building,
  Globe,
  CheckCircle,
  Menu,
  X,
  FileSpreadsheet,
  Database,
  Briefcase,
  MapPin,
} from "lucide-react";
import { useSpring, animated, config } from "react-spring";

const App = () => {
  return (
    <div className="font-sans text-gray-900 bg-gray-100">
      <Navbar />
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Intro />
        <Services />
        <WhyChooseUs />

        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

const Logo = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="mr-2"
  >
    <circle cx="20" cy="20" r="20" fill="#0066CC" />
    <path
      d="M10 10H30L10 30H30"
      stroke="#FFFFFF"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="20" cy="20" r="8" stroke="#00CC66" strokeWidth="2" />
  </svg>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Why Us", href: "#why-us" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-10 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo and Brand */}
          <a
            href="#home"
            className={`font-bold text-xl flex items-center ${
              isScrolled ? "text-blue-800" : "text-white"
            }`}
          >
            <img
              src="/zsmlogo.png"
              alt="ZSM Consultants Logo"
              className="h-10 w-10 mr-2 rounded-full"
            />

            <span className={isScrolled ? "text-blue-800" : "text-white"}>
              ZSM Consultants
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`${
                  isScrolled ? "text-gray-800" : "text-white"
                } hover:text-green-500 transition-colors duration-300`}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? (
              <X className={isScrolled ? "text-gray-800" : "text-white"} />
            ) : (
              <Menu className={isScrolled ? "text-gray-800" : "text-white"} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block py-2 px-4 text-gray-800 hover:bg-gray-200"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

const Header = () => {
  const fadeIn = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: config.molasses,
  });

  return (
    <header className="bg-gradient-to-r from-blue-800 to-green-500 text-white py-24 px-4 relative overflow-hidden">
      <div className="container mx-auto flex flex-col items-center relative z-10">
        <animated.h1
          style={fadeIn}
          className="text-5xl md:text-6xl font-bold mb-4 text-center leading-tight"
        >
          ZSM Consultants
        </animated.h1>
        <animated.p
          style={fadeIn}
          className="text-xl md:text-2xl mb-8 text-center max-w-2xl leading-relaxed"
        >
          Innovative Global Business Solutions for Tomorrow's Challenges
        </animated.p>
        <animated.a
          href="#contact"
          style={fadeIn}
          className="bg-white text-blue-800 py-3 px-8 rounded-full font-semibold text-lg hover:bg-green-500 hover:text-white transition-all duration-300"
        >
          Contact Us
        </animated.a>
      </div>
      <AnimatedBackground />
    </header>
  );
};

const AnimatedBackground = () => {
  const bubbles = [
    { size: "w-64 h-64", animation: "animate-float-slow", delay: "0s" },
    { size: "w-48 h-48", animation: "animate-float-medium", delay: "2s" },
    { size: "w-32 h-32", animation: "animate-float-fast", delay: "1s" },
    { size: "w-24 h-24", animation: "animate-float-slow", delay: "3s" },
    { size: "w-16 h-16", animation: "animate-float-medium", delay: "0.5s" },
    { size: "w-12 h-12", animation: "animate-float-fast", delay: "1.5s" },
    { size: "w-8 h-8", animation: "animate-float-slow", delay: "2.5s" },
    { size: "w-6 h-6", animation: "animate-float-medium", delay: "3.5s" },
    { size: "w-4 h-4", animation: "animate-float-fast", delay: "4s" },
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

const Intro = () => (
  <section id="home" className="text-center my-24">
    <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-6 leading-tight">
      Empowering Global Businesses with Financial Expertise
    </h2>
    <p className="text-xl max-w-3xl mx-auto leading-relaxed mb-8">
      At ZSM Consultants, we specialize in providing comprehensive financial
      planning, accounting, and ERP solutions for businesses worldwide. Our core
      expertise is complemented by a range of HR, legal, and IT services,
      offering a holistic approach to global business management.
    </p>
    <div className="flex flex-wrap justify-center gap-4">
      <TargetAudience
        icon={<Briefcase size={40} />}
        title="For Startups"
        description="Set a strong financial foundation with our tailored accounting and ERP solutions, designed to scale as you grow globally."
      />
      <TargetAudience
        icon={<Building size={40} />}
        title="For Established Businesses"
        description="Optimize your financial operations and expand internationally with our advanced planning and compliance services."
      />
    </div>
  </section>
);

const TargetAudience = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 max-w-sm">
    <div className="text-green-500 mb-4">{icon}</div>
    <h3 className="text-2xl font-semibold text-blue-800 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Services = () => {
  const services = [
    {
      icon: <ChartLine size={48} />,
      title: "Financial Planning & Accounting",
      items: [
        "Comprehensive Financial Reporting",
        "Strategic Tax Planning",
        "Accounting & Bookkeeping Services",
        "Risk Management & Financial Compliance",
      ],
    },
    {
      icon: <Database size={48} />,
      title: "ERP Solutions",
      items: [
        "Custom ERP Implementation for Global Operations",
        "Cloud-based Financial Management Systems",
        "Integration of Accounting and Operational Data",
        "Real-time Financial Analytics and Reporting",
      ],
    },
    {
      icon: <FileSpreadsheet size={48} />,
      title: "Additional Business Services",
      items: [
        "Global HR Management & Payroll Solutions",
        "International Legal Advisory",
        "IT Infrastructure & Cybersecurity",
        "Business Process Optimization",
      ],
    },
  ];

  return (
    <section id="services" className="my-24 scroll-mt-20">
      <h2 className="text-4xl md:text-5xl font-bold text-blue-800 text-center mb-6 leading-tight">
        Our Comprehensive Services
      </h2>
      <p className="text-xl md:text-2xl text-center max-w-3xl mx-auto mb-12 leading-relaxed">
        Leveraging expertise in finance, technology, and global business
        practices to provide integrated solutions for businesses of all sizes.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
};

const ServiceCard = ({ icon, title, items }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
    <div className="text-green-500 mb-6">{icon}</div>
    <h3 className="text-2xl font-semibold text-blue-800 mb-6">{title}</h3>
    <ul className="space-y-3">
      {items.map((item, index) => (
        <li key={index} className="flex items-center text-gray-700">
          <CheckCircle
            size={20}
            className="text-green-500 mr-2 flex-shrink-0"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const WhyChooseUs = () => {
  const reasons = [
    "Expert international consultants",
    "Tailored global business solutions",
    "Commitment to accuracy and compliance",
    "Focus on client success across borders",
    "Streamlined global operations",
    "Cutting-edge technology integration",
    "Proven track record of growth",
    "Continuous innovation in global markets",
  ];

  return (
    <section id="why-us" className="my-24 scroll-mt-20">
      <h2 className="text-4xl md:text-5xl font-bold text-blue-800 text-center mb-12 leading-tight">
        Why Choose ZSM Consultants?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="flex items-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          >
            <CheckCircle
              size={24}
              className="text-green-500 mr-4 flex-shrink-0"
            />
            <span className="text-lg text-gray-800">{reason}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

const ContactSection = () => (
  <section
    id="contact"
    className="bg-gradient-to-r from-blue-800 to-green-500 text-white p-12 rounded-lg my-24 scroll-mt-20"
  >
    <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 leading-tight">
      Contact Us Today for a Free Consultation
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      <ContactItem icon={<Mail size={24} />} label="Email">
        <a
          href="mailto:info@zsmconsultants.com"
          className="hover:underline transition-colors duration-300"
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
        Pakistan
      </ContactItem>
    </div>
  </section>
);

const ContactItem = ({ icon, label, children }) => (
  <div className="flex items-center space-x-3">
    {icon}
    <div>
      <span className="font-semibold">{label}:</span> {children}
    </div>
  </div>
);

const Footer = () => (
  <footer className="bg-gray-800 text-white py-12">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">ZSM Consultants</h3>
          <p className="mb-2">Your Global Partner in Business Excellence</p>
          <div className="flex items-center mb-2">
            <MapPin size={16} className="mr-2" />
            <span>London, UK (HQ) | Pakistan (Operations)</span>
          </div>
          <div className="flex items-center mb-2">
            <Phone size={16} className="mr-2" />
            <span>UK: +44 7502362347 | PK: +92 346 2780821</span>
          </div>
          <div className="flex items-center">
            <Mail size={16} className="mr-2" />
            <a
              href="mailto:info@zsmconsultants.com"
              className="hover:underline"
            >
              info@zsmconsultants.com
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#home" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#services" className="hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="#why-us" className="hover:underline">
                Why Choose Us
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Legal</h3>
          <ul className="space-y-2">
            <li>
              <a href="/terms" className="hover:underline">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="/privacy" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/cookies" className="hover:underline">
                Cookie Policy
              </a>
            </li>
            <li>
              <a href="/disclaimer" className="hover:underline">
                Disclaimer
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-gray-700 text-center">
        <p>
          &copy; {new Date().getFullYear()} ZSM Consultants. All rights
          reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default App;
