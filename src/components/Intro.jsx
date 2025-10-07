import React from 'react';
import TargetAudience from './TargetAudience';
import { Briefcase, Building } from 'lucide-react';

const Intro = () => (
  <section id="home" className="text-center my-16 sm:my-24 px-4">
    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-blue-800 mb-6 sm:mb-8 leading-tight">
      Tailored Solutions for Every Stage
    </h2>
    <p className="text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed mb-8 sm:mb-12">
      At ZSM Consultants, we specialize in providing comprehensive financial
      planning, accounting, and ERP solutions for businesses worldwide. Our core
      expertise is complemented by a range of HR, legal, and IT services,
      offering a holistic approach to global business management.
    </p>
    <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-8">
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

export default Intro;