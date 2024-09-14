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
  ArrowRight,
} from "lucide-react";
import { useSpring, animated, config } from "react-spring";

const App = () => {
  return (
    <div className="font-sans text-gray-900 bg-gray-50">
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
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
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
              className="h-12 w-12 mr-2 rounded-full shadow-md"
            />
            <span
              className={`${
                isScrolled ? "text-blue-800" : "text-white"
              } text-2xl`}
            >
              ZSM Consultants
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`${
                  isScrolled ? "text-gray-800" : "text-white"
                } hover:text-green-500 transition-colors duration-300 text-lg font-medium`}
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
    <header className="bg-gradient-to-r from-blue-800 to-green-500 text-white py-32 px-4 relative overflow-hidden">
      <div className="container mx-auto flex flex-col items-center relative z-10">
        <animated.h1
          style={fadeIn}
          className="text-6xl md:text-7xl font-bold mb-6 text-center leading-tight"
        >
          Global Financial Excellence
        </animated.h1>
        <animated.p
          style={fadeIn}
          className="text-xl md:text-2xl mb-10 text-center max-w-2xl leading-relaxed"
        >
          Expert Accounting, ERP, and Business Growth Solutions for the Global
          Market
        </animated.p>
        <animated.a
          href="#contact"
          style={fadeIn}
          className="bg-white text-blue-800 py-3 px-8 rounded-full font-semibold text-lg hover:bg-green-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          Get Started
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
    <h2 className="text-5xl md:text-6xl font-bold text-blue-800 mb-8 leading-tight">
      Tailored Solutions for Every Stage
    </h2>
    <p className="text-xl max-w-3xl mx-auto leading-relaxed mb-12">
      At ZSM Consultants, we specialize in providing comprehensive financial
      planning, accounting, and ERP solutions for businesses worldwide. Our core
      expertise is complemented by a range of HR, legal, and IT services,
      offering a holistic approach to global business management.
    </p>
    <div className="flex flex-wrap justify-center gap-8">
      <TargetAudience
        icon={<Briefcase size={48} />}
        title="For Startups"
        description="Set a strong financial foundation with our tailored accounting and ERP solutions, designed to scale as you grow globally."
      />
      <TargetAudience
        icon={<Building size={48} />}
        title="For Established Businesses"
        description="Optimize your financial operations and expand internationally with our advanced planning and compliance services."
      />
    </div>
  </section>
);
const TargetAudience = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 max-w-sm transform hover:-translate-y-2">
    <div className="text-green-500 mb-6">{icon}</div>
    <h3 className="text-2xl font-semibold text-blue-800 mb-4">{title}</h3>
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
        "AI-Powered Financial Forecasting",
        "Integration of Accounting and Operational Data",
        "Real-time Financial Analytics and Reporting",
      ],
    },
    {
      icon: <FileSpreadsheet size={48} />,
      title: "Additional Business Services",
      items: [
        "Global HR Management & Payroll Solutions",
        "Data & AI Implementation for Business Insights",
        "IT Infrastructure & Cybersecurity",
        "Business Process Optimization",
      ],
    },
  ];

  return (
    <section id="services" className="my-32 scroll-mt-20">
      <h2 className="text-5xl md:text-6xl font-bold text-blue-800 text-center mb-8 leading-tight">
        Streamline, Optimize, and Grow
      </h2>
      <p className="text-xl md:text-2xl text-center max-w-3xl mx-auto mb-16 leading-relaxed">
        Leveraging expertise in finance, technology, and global business
        practices to provide integrated solutions for businesses of all sizes.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
};

const ServiceCard = ({ icon, title, items }) => (
  <div className="bg-white p-8 rounded-2xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 transform">
    <div className="text-green-500 mb-6">{icon}</div>
    <h3 className="text-2xl font-semibold text-blue-800 mb-6">{title}</h3>
    <ul className="space-y-3">
      {items.map((item, index) => (
        <li key={index} className="flex items-center text-gray-700">
          <CheckCircle
            size={20}
            className="text-green-500 mr-3 flex-shrink-0"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "ZSM Consultants transformed our approach to global markets. Their insights were invaluable.",
      author: "Sarah Chen, CEO of TechGrowth Ltd",
      company: "UK-based SaaS Company",
    },
    {
      quote:
        "The expertise ZSM brought to our international expansion was game-changing. Highly recommended!",
      author: "Amir Khan, CFO of TextilePro",
      company: "Pakistani Textile Manufacturer",
    },
    {
      quote:
        "ZSM's holistic approach to our merger ensured a smooth transition and impressive results.",
      author: "James Smith, Managing Director",
      company: "UK-Pakistan Joint Venture",
    },
  ];

  return (
    <section className="my-24">
      <h2 className="text-4xl md:text-5xl font-bold text-blue-800 text-center mb-12 leading-tight">
        What Our Clients Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <blockquote className="text-gray-600 italic mb-4">
              "{testimonial.quote}"
            </blockquote>
            <cite className="block text-right">
              <span className="font-semibold">{testimonial.author}</span>
              <br />
              <span className="text-sm text-gray-500">
                {testimonial.company}
              </span>
            </cite>
          </div>
        ))}
      </div>
    </section>
  );
};

const WhyChooseUs = () => {
  const reasons = [
    "Specialized knowledge that drives results",
    "Tailored global business solutions",
    "Commitment to accuracy and compliance",
    "Focus on client success across borders",
    "Streamlined global operations",
    "Cutting-edge technology integration",
    "Proven track record of growth",
    "Continuous innovation in global markets",
  ];

  return (
    <section id="why-us" className="my-32 scroll-mt-20">
      <h2 className="text-5xl md:text-6xl font-bold text-blue-800 text-center mb-16 leading-tight">
        Why Choose Us?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="flex items-center bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <CheckCircle
              size={28}
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
    className="bg-gradient-to-r from-blue-800 to-green-500 text-white p-16 rounded-3xl my-32 scroll-mt-20 shadow-2xl"
  >
    <h2 className="text-5xl md:text-6xl font-bold text-center mb-10 leading-tight">
      We're just a click or call away!
    </h2>
    <p className="text-xl text-center max-w-3xl mx-auto mb-16 leading-relaxed">
      Ready to optimize your finances and fuel growth? Let's chat! Book a free
      consultation and take the first step towards transforming your business's
      financial future.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
      <ContactItem icon={<Mail size={28} />} label="Email">
        <a
          href="mailto:info@zsmconsultants.com"
          className="hover:underline transition-colors duration-300"
        >
          info@zsmconsultants.com
        </a>
      </ContactItem>
      <ContactItem icon={<Linkedin size={28} />} label="LinkedIn">
        <a
          href="https://www.linkedin.com/company/zsmconsultants"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline transition-colors duration-300"
        >
          zsmconsultants
        </a>
      </ContactItem>
      <ContactItem icon={<Phone size={28} />} label="Phone (Pakistan)">
        +92 346 2780821
      </ContactItem>
      <ContactItem icon={<Phone size={28} />} label="Phone (UK)">
        +44 7502362347
      </ContactItem>
      <ContactItem icon={<Building size={28} />} label="Headquarters">
        London, UK
      </ContactItem>
      <ContactItem icon={<Globe size={28} />} label="Operations">
        UK & Pakistan
      </ContactItem>
    </div>
    <div className="text-center mt-16">
      <a
        href="#contact"
        className="inline-flex items-center bg-white text-blue-800 py-3 px-8 rounded-full font-semibold text-lg hover:bg-green-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
      >
        Schedule Consultation
        <ArrowRight size={20} className="ml-2" />
      </a>
    </div>
  </section>
);

const ContactItem = ({ icon, label, children }) => (
  <div className="flex items-center space-x-4">
    <div className="bg-white bg-opacity-20 p-3 rounded-full">{icon}</div>
    <div>
      <span className="font-semibold text-lg">{label}</span>
      <div className="text-xl">{children}</div>
    </div>
  </div>
);

const Footer = () => (
  <footer className="bg-gray-900 text-white py-16">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="text-2xl font-semibold mb-6">ZSM Consultants</h3>
          <p className="mb-4">Empowering Global Business Growth</p>
          <div className="flex items-center mb-3">
            <MapPin size={20} className="mr-3" />
            <span>London, UK (HQ) | Pakistan (Operations)</span>
          </div>
          <div className="flex items-center mb-3">
            <Phone size={20} className="mr-3" />
            <span>UK: +44 7502362347 | PK: +92 346 2780821</span>
          </div>
          <div className="flex items-center">
            <Mail size={20} className="mr-3" />
            <a
              href="mailto:info@zsmconsultants.com"
              className="hover:underline"
            >
              info@zsmconsultants.com
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-6">Quick Links</h3>
          <ul className="space-y-3">
            <li>
              <a
                href="#home"
                className="hover:text-green-500 transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="hover:text-green-500 transition-colors duration-300"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#why-us"
                className="hover:text-green-500 transition-colors duration-300"
              >
                Why Choose Us
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-green-500 transition-colors duration-300"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-6">Legal</h3>
          <ul className="space-y-3">
            <li>
              <a
                href="/terms"
                className="hover:text-green-500 transition-colors duration-300"
              >
                Terms of Service
              </a>
            </li>
            <li>
              <a
                href="/privacy"
                className="hover:text-green-500 transition-colors duration-300"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/cookies"
                className="hover:text-green-500 transition-colors duration-300"
              >
                Cookie Policy
              </a>
            </li>
            <li>
              <a
                href="/disclaimer"
                className="hover:text-green-500 transition-colors duration-300"
              >
                Disclaimer
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-gray-700 text-center">
        <p>
          &copy; {new Date().getFullYear()} ZSM Consultants. All rights
          reserved.
        </p>
      </div>
    </div>
  </footer>
);
export default App;
