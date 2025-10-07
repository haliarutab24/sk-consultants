import React from 'react';
import { CheckCircle } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    'Specialized knowledge that drives results',
    'Tailored global business solutions',
    'Commitment to accuracy and compliance',
    'Focus on client success across borders',
    'Streamlined global operations',
    'Cutting-edge technology integration',
    'Proven track record of growth',
    'Continuous innovation in global markets',
  ];

  return (
    <section id="why-us" className="my-20 sm:my-32 scroll-mt-20 px-4">
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-blue-800 text-center mb-12 sm:mb-16 leading-tight">
        Why Choose Us?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="flex items-center bg-white p-4 sm:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <CheckCircle
              size={24}
              className="text-green-500 mr-3 sm:mr-4 flex-shrink-0"
            />
            <span className="text-base sm:text-lg text-gray-800">{reason}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;