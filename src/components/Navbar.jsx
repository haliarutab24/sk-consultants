import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ChevronRight, Zap, Sparkles } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSubDropdown, setOpenSubDropdown] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll handler
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const navbarHeight = document.querySelector('nav').offsetHeight;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navbarHeight,
        behavior: 'smooth',
      });
    }
    setIsOpen(false);
    setOpenDropdown(null);
    setOpenSubDropdown({});
  };

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about-us' },
    {
      name: 'What We Do',
      href: '#what-we-do',
      dropdown: [
        {
          name: 'Outsource Services For Professional Service Firms',
          href: '#outsource-services',
          subDropdown: [
            { name: 'Bookkeeping and Accounting', href: '#bookkeeping-accounting' },
            { name: 'Financial Reports Preparation', href: '#financial-reports-prep' },
            { name: 'Payroll Services & HR', href: '#payroll-hr' },
            { name: 'Taxes (VAT and Sales Tax)', href: '#taxes-vat-sales' },
            { name: 'Agreed-Upon Procedures', href: '#agreed-procedures' },
            { name: 'Other Customized Solutions', href: '#custom-solutions' },
          ],
        },
        {
          name: 'Accounting and Finance Service',
          href: '#accounting-finance',
          subDropdown: [
            { name: 'Bookkeeping and Accounting', href: '#bookkeeping-accounting-2' },
            { name: 'Financial Reports', href: '#financial-reports' },
            { name: 'Accounts Receivable', href: '#accounts-receivable' },
            { name: 'Accounts Payable', href: '#accounts-payable' },
            { name: 'Fractional Controller/CFO', href: '#fractional-cfo' },
            { name: 'Forecasting and Projections', href: '#forecasting-projections' },
            { name: 'Audit Readiness', href: '#audit-readiness' },
            { name: 'Development of Charts of Accounts', href: '#charts-of-accounts' },
            { name: 'Management Reporting', href: '#management-reporting' },
            { name: 'Payroll Services & HR', href: '#payroll-hr-2' },
            { name: 'Technical Accounting Consultants', href: '#technical-accounting' },
            { name: 'Taxes (VAT & Sales Tax)', href: '#taxes-vat-sales-2' },
          ],
        },
        {
          name: 'Virtual Staffing - Core Business Functions',
          href: '#virtual-staffing',
          subDropdown: [
            { name: 'Business Analytics & Reporting', href: '#business-analytics' },
            { name: 'Supply Chain Management', href: '#supply-chain' },
            { name: 'Customer Contract Management', href: '#contract-management' },
            { name: 'Digital Marketing', href: '#digital-marketing' },
            { name: 'Fractional CFO', href: '#fractional-cfo-2' },
            { name: 'Fractional Controller', href: '#fractional-controller' },
          ],
        },
      ],
    },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Insights', href: '#insights' },
    { name: 'Careers', href: '#careers' },
    { name: 'Contact Us', href: '#contact' },
  ];

  const handleDropdownToggle = (index, e) => {
    e?.stopPropagation();
    setOpenDropdown(openDropdown === index ? null : index);
    setOpenSubDropdown({});
  };

  const handleSubDropdownToggle = (parentIndex, subIndex, e) => {
    e?.stopPropagation();
    setOpenSubDropdown((prev) => ({
      ...prev,
      [parentIndex]: prev[parentIndex] === subIndex ? null : subIndex,
    }));
  };

  useEffect(() => {
    const handleClickOutside = () => {
      setOpenDropdown(null);
      setOpenSubDropdown({});
    };

    if (openDropdown !== null) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [openDropdown]);

  const getNavStyles = (isScrolled) => {
    return {
      background: isScrolled
        ? 'bg-black/95 backdrop-blur-md shadow-2xl border-b border-cyan-500/30'
        : 'bg-transparent',
      text: isScrolled ? 'text-cyan-300' : 'text-white',
      hover: isScrolled
        ? 'hover:text-cyan-200 hover:bg-cyan-500/20'
        : 'hover:text-cyan-300 hover:bg-white/10',
      active: isScrolled
        ? 'bg-cyan-500/30 text-cyan-200'
        : 'bg-white/20 text-cyan-300'
    };
  };

  const styles = getNavStyles(isScrolled);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${styles.background}`}>
      {/* Animated Border Glow */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>

      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center space-x-3 group"
            onClick={(e) => handleNavClick(e, '#home')}
          >
            <div className="relative">
              {/* Logo Glow Effect */}
              <div className="absolute inset-0 bg-cyan-500 rounded-full blur-md opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              <img
                src="/zsmlogo.png"
                alt="SK Consultants Logo"
                className="h-10 w-10 sm:h-12 sm:w-12 rounded-full shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-cyan-500/50 border-2 border-cyan-500/50 relative z-10"
              />
            </div>
            <div className="flex flex-col">
              <span className={`font-bold text-xl sm:text-2xl tracking-tight ${styles.text} group-hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.5)] transition-all duration-300`}>
                SK Consultants
              </span>
              <div className="flex items-center space-x-1">
                <Sparkles size={10} className="text-cyan-400 animate-pulse" />
                <span className={`text-xs font-medium tracking-wide ${isScrolled ? 'text-cyan-400/80' : 'text-cyan-300/80'}`}>
                  Global Financial Excellence
                </span>
                <Sparkles size={10} className="text-cyan-400 animate-pulse" />
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-1 items-center">
            {navItems.map((item, index) => (
              <div key={index} className="relative group" onClick={(e) => e.stopPropagation()}>
                {item.dropdown ? (
                  <div>
                    <button
                      onClick={(e) => handleDropdownToggle(index, e)}
                      className={`px-4 py-2 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2 ${styles.text
                        } ${styles.hover} ${openDropdown === index ? styles.active : ''
                        } border border-transparent hover:border-cyan-500/30`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-300 ${openDropdown === index ? 'rotate-180' : ''
                          }`}
                      />
                    </button>
                    {openDropdown === index && (
                      <div className="absolute left-0 mt-1 w-96 bg-black/95 backdrop-blur-md rounded-2xl shadow-2xl border border-cyan-500/30 z-50 overflow-hidden">
                        {/* Dropdown Header */}
                        <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 p-3 border-b border-cyan-500/20">
                          <div className="flex items-center space-x-2">
                            <Zap size={16} className="text-cyan-400 animate-pulse" />
                            <span className="text-cyan-300 font-semibold text-sm">OUR SERVICES</span>
                          </div>
                        </div>

                        <div className="p-2 max-h-96 overflow-y-auto">
                          {item?.dropdown?.map((dropdownItem, subIndex) => (
                            <div key={subIndex} className="mb-1 last:mb-0">
                              {/* Main dropdown button */}
                              <button
                                onClick={(e) => handleSubDropdownToggle(index, subIndex, e)}
                                className="w-full text-left px-4 py-3 rounded-xl text-cyan-200 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-purple-500/20 hover:text-cyan-100 transition-all duration-200 flex items-center justify-between group border border-transparent hover:border-cyan-500/20"
                              >
                                <span className="text-sm font-medium leading-tight flex items-center">
                                  <Sparkles
                                    size={12}
                                    className="mr-2 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                  />
                                  {dropdownItem?.name || "Untitled"}
                                </span>

                                {/* Chevron for nested submenu */}
                                {Array.isArray(dropdownItem?.subDropdown) && dropdownItem.subDropdown.length > 0 && (
                                  <ChevronRight
                                    size={16}
                                    className={`text-cyan-400/60 transition-transform duration-300 ${openSubDropdown?.[index] === subIndex
                                        ? "rotate-90 text-cyan-300"
                                        : "group-hover:text-cyan-300"
                                      }`}
                                  />
                                )}
                              </button>

                              {/* Submenu rendering */}
                              {openSubDropdown?.[index] === subIndex &&
                                Array.isArray(dropdownItem?.subDropdown) &&
                                dropdownItem.subDropdown.length > 0 && (
                                  <div className="ml-3 mt-1 bg-black/80 rounded-xl border border-cyan-500/20 backdrop-blur-sm">
                                    {dropdownItem.subDropdown.map((subItem, subI) => (
                                      <a
                                        key={subI}
                                        href={subItem?.href || "#"}
                                        onClick={(e) => handleNavClick?.(e, subItem?.href)}
                                        className="px-4 py-2 text-sm text-cyan-300 hover:bg-cyan-500/20 hover:text-cyan-100 transition-all duration-200 border-l-2 border-transparent hover:border-cyan-400 inline-flex items-center w-full group"
                                      >
                                        <div className="w-1 h-1 bg-cyan-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        {subItem?.name || "Unnamed"}
                                      </a>
                                    ))}
                                  </div>
                                )}
                            </div>
                          ))}
                        </div>

                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className={`px-4 py-2 rounded-xl font-semibold transition-all duration-300 ${styles.text
                      } ${styles.hover} border border-transparent hover:border-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/20`}
                    onClick={(e) => handleNavClick(e, item.href)}
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-xl transition-all duration-300 ${styles.hover
              } border border-transparent hover:border-cyan-500/30`}
          >
            {isOpen ? (
              <X size={28} className={`${styles.text} transition-transform duration-300 rotate-90`} />
            ) : (
              <Menu size={28} className={styles.text} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-black/95 backdrop-blur-md border-t border-cyan-500/30 shadow-2xl">
          {/* Animated Scan Line */}
          <div className="h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent animate-pulse"></div>

          <div className="container mx-auto px-4 py-4">
            {navItems.map((item, index) => (
              <div key={index} className="border-b border-cyan-500/20 last:border-b-0">
                {item.dropdown ? (
                  <div>
                    <button
                      className="w-full py-4 text-cyan-300 hover:text-cyan-200 transition-all duration-300 flex items-center justify-between text-left font-semibold"
                      onClick={(e) => handleDropdownToggle(index, e)}
                    >
                      <div className="flex items-center">
                        <Zap size={16} className="mr-2 text-cyan-400" />
                        {item.name}
                      </div>
                      <ChevronDown
                        size={20}
                        className={`transition-transform duration-300 ${openDropdown === index ? 'rotate-180 text-cyan-400' : 'text-cyan-400/60'
                          }`}
                      />
                    </button>
                    {openDropdown === index && (
                      <div className="pl-4 bg-black/80 rounded-xl mb-2 border border-cyan-500/20">
                        {item.dropdown.map((dropdownItem, subIndex) => (
                          <div key={subIndex} className="border-b border-cyan-500/10 last:border-b-0">
                            <button
                              className="w-full py-3 text-cyan-300 hover:text-cyan-200 transition-all duration-300 flex items-center justify-between text-left text-sm font-medium"
                              onClick={(e) => handleSubDropdownToggle(index, subIndex, e)}
                            >
                              <div className="flex items-center">
                                <Sparkles size={12} className="mr-2 text-cyan-400" />
                                {dropdownItem.name}
                              </div>
                              {dropdownItem.subDropdown && (
                                <ChevronRight
                                  size={16}
                                  className={`transition-transform duration-300 ${openSubDropdown[index] === subIndex
                                      ? 'rotate-90 text-cyan-400'
                                      : 'text-cyan-400/60'
                                    }`}
                                />
                              )}
                            </button>
                            {openSubDropdown?.[index] === subIndex &&
                              Array.isArray(dropdownItem?.subDropdown) &&
                              dropdownItem.subDropdown.length > 0 && (
                                <div className="pl-4 bg-black/60 rounded-lg mb-2 border-l border-cyan-500/20">
                                  {dropdownItem.subDropdown.map((subItem, subI) => (
                                    <a
                                      key={subI}
                                      href={subItem?.href || "#"}
                                      onClick={(e) => handleNavClick?.(e, subItem?.href)}
                                      className="py-2 px-4 text-cyan-400 hover:text-cyan-200 hover:bg-cyan-500/20 transition-all duration-200 text-sm border-l-2 border-transparent hover:border-cyan-400 inline-flex items-center w-full group"
                                    >
                                      <div className="w-1 h-1 bg-cyan-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                      {subItem?.name || "Unnamed"}
                                    </a>
                                  ))}
                                </div>
                              )}

                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={item?.href || "#"}
                    onClick={(e) => handleNavClick?.(e, item?.href)}
                    className="py-4 text-cyan-300 hover:text-cyan-200 transition-all duration-300 font-semibold inline-flex items-center w-full group"
                  >
                    <Zap size={16} className="mr-2 text-cyan-400" />
                    {item?.name || "Unnamed"}
                  </a>

                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;