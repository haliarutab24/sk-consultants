import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';

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

  const handleDropdownToggle = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
    setOpenSubDropdown({});
  };

  const handleSubDropdownToggle = (parentIndex, subIndex) => {
    setOpenSubDropdown((prev) => ({
      ...prev,
      [parentIndex]: prev[parentIndex] === subIndex ? null : subIndex,
    }));
  };

  // Close dropdowns when clicking outside
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

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-xl border-b border-gray-200' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-3">
          {/* Enhanced Logo */}
          <a
            href="#home"
            className={`flex items-center space-x-3 group ${
              isScrolled ? 'text-blue-800' : 'text-white'
            }`}
          >
            <div className="relative">
              <img
                src="/zsmlogo.png"
                alt="SK Consultants Logo"
                className="h-10 w-10 sm:h-12 sm:w-12 rounded-full shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl border-2 border-white/20"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-green-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </div>
            <div className="flex flex-col">
              <span className={`font-bold text-xl sm:text-2xl tracking-tight ${isScrolled ? 'text-blue-800' : 'text-white'}`}>
                SK Consultants
              </span>
              <span className={`text-xs ${isScrolled ? 'text-gray-600' : 'text-white/80'} font-medium tracking-wide`}>
                Global Financial Excellence
              </span>
            </div>
          </a>

          {/* Enhanced Desktop Menu */}
          <div className="hidden lg:flex space-x-1 items-center">
            {navItems.map((item, index) => (
              <div key={index} className="relative group" onClick={(e) => e.stopPropagation()}>
                {item.dropdown ? (
                  <div>
                    <button
                      onClick={() => handleDropdownToggle(index)}
                      className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center space-x-1 ${
                        isScrolled 
                          ? 'text-gray-700 hover:text-green-600 hover:bg-green-50' 
                          : 'text-white hover:text-green-300 hover:bg-white/10'
                      } ${openDropdown === index ? (isScrolled ? 'bg-green-50 text-green-600' : 'bg-white/20 text-green-300') : ''}`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-300 ${
                          openDropdown === index ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {/* Enhanced Dropdown Menu */}
                    {openDropdown === index && (
                      <div className="absolute left-0 mt-1 w-80 bg-white/95 backdrop-blur-md rounded-xl shadow-2xl border border-gray-200 z-50 overflow-hidden">
                        <div className="p-2">
                          {item.dropdown.map((dropdownItem, subIndex) => (
                            <div key={subIndex} className="mb-1 last:mb-0">
                              <button
                                onClick={() => handleSubDropdownToggle(index, subIndex)}
                                className="w-full text-left px-4 py-3 rounded-lg text-gray-800 hover:bg-gradient-to-r hover:from-green-50 hover:to-blue-50 hover:text-green-700 transition-all duration-200 flex items-center justify-between group"
                              >
                                <span className="text-sm font-medium leading-tight">
                                  {dropdownItem.name}
                                </span>
                                {dropdownItem.subDropdown && (
                                  <ChevronRight
                                    size={16}
                                    className={`text-gray-400 transition-transform duration-300 ${
                                      openSubDropdown[index] === subIndex 
                                        ? 'rotate-90 text-green-500' 
                                        : 'group-hover:text-green-500'
                                    }`}
                                  />
                                )}
                              </button>

                              {/* Enhanced Sub-Dropdown Menu */}
                              {openSubDropdown[index] === subIndex &&
                                dropdownItem.subDropdown &&
                                dropdownItem.subDropdown.length > 0 && (
                                  <div className="ml-2 mt-1 bg-gray-50/80 rounded-lg border border-gray-200">
                                    {dropdownItem.subDropdown.map((subItem, subI) => (
                                      <a
                                        key={subI}
                                        href={subItem.href}
                                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-100 hover:text-green-700 transition-all duration-200 border-l-2 border-transparent hover:border-green-400"
                                        onClick={() => {
                                          setOpenDropdown(null);
                                          setOpenSubDropdown({});
                                        }}
                                      >
                                        {subItem.name}
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
                    className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                      isScrolled 
                        ? 'text-gray-700 hover:text-green-600 hover:bg-green-50' 
                        : 'text-white hover:text-green-300 hover:bg-white/10'
                    }`}
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Enhanced Mobile Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className={`lg:hidden p-2 rounded-lg transition-all duration-300 ${
              isScrolled 
                ? 'text-gray-700 hover:bg-gray-100' 
                : 'text-white hover:bg-white/20'
            }`}
          >
            {isOpen ? (
              <X size={28} className="transition-transform duration-300 rotate-90" />
            ) : (
              <Menu size={28} className="transition-transform duration-300" />
            )}
          </button>
        </div>
      </div>

      {/* Enhanced Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200/50 shadow-2xl">
          <div className="container mx-auto px-4 py-4">
            {navItems.map((item, index) => (
              <div key={index} className="border-b border-gray-200/50 last:border-b-0">
                {item.dropdown ? (
                  <div>
                    <button
                      className="w-full py-4 text-gray-800 hover:text-green-600 transition-all duration-300 flex items-center justify-between text-left font-semibold"
                      onClick={() => handleDropdownToggle(index)}
                    >
                      {item.name}
                      <ChevronDown
                        size={20}
                        className={`transition-transform duration-300 ${
                          openDropdown === index ? 'rotate-180 text-green-500' : 'text-gray-400'
                        }`}
                      />
                    </button>
                    {openDropdown === index && (
                      <div className="pl-4 bg-gray-50/80 rounded-lg mb-2">
                        {item.dropdown.map((dropdownItem, subIndex) => (
                          <div key={subIndex} className="border-b border-gray-200/30 last:border-b-0">
                            <button
                              className="w-full py-3 text-gray-700 hover:text-green-600 transition-all duration-300 flex items-center justify-between text-left text-sm font-medium"
                              onClick={() => handleSubDropdownToggle(index, subIndex)}
                            >
                              {dropdownItem.name}
                              {dropdownItem.subDropdown && (
                                <ChevronRight
                                  size={16}
                                  className={`transition-transform duration-300 ${
                                    openSubDropdown[index] === subIndex 
                                      ? 'rotate-90 text-green-500' 
                                      : 'text-gray-400'
                                  }`}
                                />
                              )}
                            </button>
                            {openSubDropdown[index] === subIndex &&
                              dropdownItem.subDropdown &&
                              dropdownItem.subDropdown.length > 0 && (
                                <div className="pl-4 bg-white/80 rounded-lg mb-2">
                                  {dropdownItem.subDropdown.map((subItem, subI) => (
                                    <a
                                      key={subI}
                                      href={subItem.href}
                                      className="block py-2 px-4 text-gray-600 hover:text-green-600 hover:bg-green-50 transition-all duration-200 text-sm border-l-2 border-transparent hover:border-green-400"
                                      onClick={() => {
                                        setIsOpen(false);
                                        setOpenDropdown(null);
                                        setOpenSubDropdown({});
                                      }}
                                    >
                                      {subItem.name}
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
                    href={item.href}
                    className="block py-4 text-gray-800 hover:text-green-600 transition-all duration-300 font-semibold"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
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