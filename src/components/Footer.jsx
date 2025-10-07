import React from 'react';
import { MapPin, Phone, Mail, ChevronRight } from 'lucide-react';

const Footer = () => {
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

  const legalLinks = [
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'Disclaimer', href: '/disclaimer' },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <img
                src="/zsmlogo.png"
                alt="SK Consultants Logo"
                className="h-12 w-12 rounded-full shadow-lg border-2 border-white/20"
              />
              <div>
                <h3 className="text-2xl font-bold">SK Consultants</h3>
                <p className="text-green-400 text-sm font-medium">Global Financial Excellence</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Empowering Global Business Growth through expert accounting, ERP solutions, 
              and comprehensive financial services.
            </p>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="text-green-400 mt-1 flex-shrink-0" />
                <span className="text-gray-300">London, UK (HQ) | Pakistan (Operations)</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-green-400 flex-shrink-0" />
                <span className="text-gray-300">UK: +44 7502362347 | PK: +92 346 2780821</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-green-400 flex-shrink-0" />
                <a
                  href="mailto:info@SKconsultants.com"
                  className="text-gray-300 hover:text-green-400 transition-colors duration-300"
                >
                  info@SKconsultants.com
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-semibold mb-6 text-white border-l-4 border-green-500 pl-3">
              Quick Navigation
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {navItems.map((item, index) => (
                <div key={index} className="space-y-2">
                  {item.dropdown ? (
                    <div>
                      <h4 className="font-semibold text-white mb-3 flex items-center">
                        <ChevronRight size={16} className="text-green-400 mr-2" />
                        {item.name}
                      </h4>
                      <div className="space-y-1 ml-6">
                        {item.dropdown.map((dropdownItem, subIndex) => (
                          <div key={subIndex} className="mb-2">
                            <a
                              href={dropdownItem.href}
                              className="text-gray-300 hover:text-green-400 transition-colors duration-300 text-sm font-medium block mb-1"
                            >
                              {dropdownItem.name}
                            </a>
                            {dropdownItem.subDropdown && (
                              <div className="ml-4 space-y-1">
                                {dropdownItem.subDropdown.map((subItem, subI) => (
                                  <a
                                    key={subI}
                                    href={subItem.href}
                                    className="text-gray-400 hover:text-green-300 transition-colors duration-300 text-xs block py-1"
                                  >
                                    • {subItem.name}
                                  </a>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      className="text-gray-300 hover:text-green-400 transition-colors duration-300 font-medium flex items-center"
                    >
                      <ChevronRight size={16} className="text-green-400 mr-2" />
                      {item.name}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Legal & Contact */}
          <div className="space-y-8">
            {/* Legal Links */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-white border-l-4 border-green-500 pl-3">
                Legal
              </h3>
              <ul className="space-y-3">
                {legalLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-green-400 transition-colors duration-300 flex items-center"
                    >
                      <ChevronRight size={16} className="text-green-400 mr-2" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Call to Action */}
            <div className="bg-white/10 rounded-lg p-6 border border-white/20">
              <h4 className="font-semibold text-white mb-3">Ready to Get Started?</h4>
              <p className="text-gray-300 text-sm mb-4">
                Contact us today for a free consultation and discover how we can help your business grow.
              </p>
              <a
                href="#contact"
                className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-full font-semibold transition-all duration-300 inline-block text-center w-full"
              >
                Get Free Consultation
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700/50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} SK Consultants. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <span className="text-gray-400 text-sm">Follow us:</span>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-300">
                  LinkedIn
                </a>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-300">
                  Twitter
                </a>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-300">
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;