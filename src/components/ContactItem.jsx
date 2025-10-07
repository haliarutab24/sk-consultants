import React from 'react';

const ContactItem = ({ icon, label, children }) => (
  <div className="flex items-start space-x-4">
    <div className="bg-white bg-opacity-20 p-2 md:p-3 rounded-full flex-shrink-0">
      {icon}
    </div>
    <div className="flex-grow min-w-0">
      <span className="font-semibold text-base md:text-lg block">{label}</span>
      <div className="text-sm md:text-base break-words">{children}</div>
    </div>
  </div>
);

export default ContactItem;
