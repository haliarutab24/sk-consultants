import React, { useState, useEffect } from "react";
import {
  ChartLine,
  Users,
  Scale,
  Mail,
  Linkedin,
  Phone,
  Building,
  Globe,
  CheckCircle,
  Menu,
  X,
  Rocket,
  FileSpreadsheet,
  Database,
  Briefcase,
} from "lucide-react";

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
          <a
            href="#home"
            className={`font-bold text-xl ${
              isScrolled ? "text-blue-800" : "text-white"
            }`}
          >
            ZSM Consultants
          </a>
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
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? (
              <X className={isScrolled ? "text-gray-800" : "text-white"} />
            ) : (
              <Menu className={isScrolled ? "text-gray-800" : "text-white"} />
            )}
          </button>
        </div>
      </div>
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

const Header = () => (
  <header
    id="home"
    className="bg-gradient-to-r from-blue-800 to-green-500 text-white py-32 px-4"
  >
    <div className="container mx-auto text-center pt-16">
      <h1 className="text-6xl font-bold mb-4 animate-fade-in">
        ZSM Consultants
      </h1>
      <p className="text-2xl animate-fade-in-delay">
        Innovative Global Business Solutions for Tomorrow's Challenges
      </p>
    </div>
  </header>
);

const Intro = () => (
  <section className="text-center my-20">
    <h2 className="text-4xl font-bold text-blue-800 mb-6">
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
        "Strategic  Tax Planning",
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
    <section id="services" className="my-20 scroll-mt-20">
      <h2 className="text-4xl font-bold text-blue-800 text-center mb-6">
        Our Comprehensive Services
      </h2>
      <p className="text-xl text-center max-w-3xl mx-auto mb-12">
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
    <section id="why-us" className="my-20 scroll-mt-20">
      <h2 className="text-4xl font-bold text-blue-800 text-center mb-12">
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
    className="bg-gradient-to-r from-blue-800 to-green-500 text-white p-12 rounded-lg my-20 scroll-mt-20"
  >
    <h2 className="text-4xl font-bold text-center mb-8">
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
  <footer className="bg-gray-800 text-white py-8">
    <div className="container mx-auto px-4 text-center">
      <p>&copy; 2024 ZSM Consultants. All rights reserved.</p>
      <p className="mt-2">Your Global Partner in Business Excellence</p>
    </div>
  </footer>
);

export default App;
