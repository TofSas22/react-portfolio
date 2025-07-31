import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="py-12 text-center mx-4 mt-12">
      <h2 className="text-4xl font-extrabold text-white mb-4">Hire Me!</h2>
      <p className="text-lg text-gray-100 mb-6">
        Ready to bring your ideas to life. Let’s make something great together!
      </p>
      <div className="flex justify-center space-x-6 mb-8">
        <a
          href="mailto:tsasman13@gmail.com"
          className="text-white text-2xl hover:text-yellow-300"
        >
          📧
        </a>
        <a
          href="https://www.linkedin.com/in/tofieksas"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-2xl hover:text-yellow-300"
        >
          🔗
        </a>
        <a
          href="https://github.com/TofSas22"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-2xl hover:text-yellow-300"
        >
          💻
        </a>
      </div>
      <a
        href="mailto:tsasman13@gmail.com"
        className="px-6 py-3 mt-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-blue-600 rounded-full shadow-md hover:from-blue-600 hover:to-blue-700 focus:outline-none transition-transform duration-200 hover:scale-110"
      >
        Send Email
      </a>
    </div>
  );
};

export default Contact;
