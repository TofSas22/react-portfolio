import React from 'react';

const ContactBlock = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4 bg-gray-200 rounded-lg shadow-md h-full w-full">
      {/* Heading */}
      <h3 className="text-lg font-bold text-gray-800 mb-2">CONTACT ME</h3>
      
      {/* Contact Button */}
      <a
        href="mailto:tsasman13@gmail.com"
        className="px-4 py-2 mt-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none"
      >
        Send Email
      </a>
    </div>
  );
};

export default ContactBlock;