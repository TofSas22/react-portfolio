import React from 'react';

const ContactBlock = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6 frosted-glass rounded-lg shadow-lg h-full w-full transition-transform duration-300 hover:scale-105">
      <h3 className="text-2xl font-bold text-white mb-4 tracking-wide">Contact Me</h3>
      
      <a
        href="mailto:tsasman13@gmail.com"
        className="px-6 py-3 mt-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-blue-600 rounded-full shadow-md hover:from-blue-600 hover:to-blue-700 focus:outline-none transition-transform duration-200 hover:scale-110"
      >
        Send Email
      </a>
    </div>
  );
};

export default ContactBlock;