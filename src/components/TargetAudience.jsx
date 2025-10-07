import React from 'react';

const TargetAudience = ({ icon, title, description }) => (
  <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 max-w-sm transform hover:-translate-y-2">
    <div className="text-green-500 mb-4 sm:mb-6">{icon}</div>
    <h3 className="text-xl sm:text-2xl font-semibold text-blue-800 mb-3 sm:mb-4">
      {title}
    </h3>
    <p className="text-gray-600 text-sm sm:text-base">{description}</p>
  </div>
);

export default TargetAudience;