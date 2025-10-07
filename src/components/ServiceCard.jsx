import React from 'react';
import { CheckCircle } from 'lucide-react';

const ServiceCard = ({ icon, title, items }) => (
  <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 transform">
    <div className="text-green-500 mb-4 sm:mb-6">{icon}</div>
    <h3 className="text-xl sm:text-2xl font-semibold text-blue-800 mb-4 sm:mb-6">
      {title}
    </h3>
    <ul className="space-y-2 sm:space-y-3">
      {items.map((item, index) => (
        <li
          key={index}
          className="flex items-center text-gray-700 text-sm sm:text-base"
        >
          <CheckCircle
            size={16}
            className="text-green-500 mr-2 sm:mr-3 flex-shrink-0"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default ServiceCard;