import React from 'react';
import ServiceCard from './ServiceCard';
import { ChartLine, Database, FileSpreadsheet } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <ChartLine size={48} />,
      title: 'Financial Planning & Accounting',
      items: [
        'Comprehensive Financial Reporting',
        'Strategic Tax Planning',
        'Accounting & Bookkeeping Services',
        'Risk Management & Financial Compliance',
      ],
    },
    {
      icon: <Database size={48} />,
      title: 'ERP Solutions',
      items: [
        'Custom ERP Implementation for Global Operations',
        'Cloud-based Financial Management Systems',
        'AI-Powered Financial Forecasting',
        'Integration of Accounting and Operational Data',
        'Real-time Financial Analytics and Reporting',
      ],
    },
    {
      icon: <FileSpreadsheet size={48} />,
      title: 'Additional Business Services',
      items: [
        'Global HR Management & Payroll Solutions',
        'Data & AI Implementation for Business Insights',
        'IT Infrastructure & Cybersecurity',
        'Business Process Optimization',
      ],
    },
  ];

  return (
    <section id="services" className="my-20 sm:my-32 scroll-mt-20 px-4">
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-blue-800 text-center mb-6 sm:mb-8 leading-tight">
        Streamline, Optimize, and Grow
      </h2>
      <p className="text-lg sm:text-xl md:text-2xl text-center max-w-3xl mx-auto mb-12 sm:mb-16 leading-relaxed">
        Leveraging expertise in finance, technology, and global business
        practices to provide integrated solutions for businesses of all sizes.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Services;