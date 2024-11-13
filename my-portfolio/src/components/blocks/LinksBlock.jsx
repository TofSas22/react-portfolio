import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const LinksBlock = () => {
  return (
    <div className="flex flex-col items-center justify-center p-6 frosted-glass rounded-lg shadow-lg w-full h-full transition-transform duration-300 hover:scale-105">
      <h3 className="text-3xl font-bold text-white mb-4 tracking-wide">Links</h3>

      <div className="flex space-x-6">
        <a
          href="https://github.com/TofSas22"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-50 transition-transform duration-200 hover:text-gray-400 hover:scale-110"
        >
          <FaGithub size={70} />
        </a>

        <a
          href="https://linkedin.com/in/tofieksas"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-50 transition-transform duration-200 hover:text-blue-500 hover:scale-110"
        >
          <FaLinkedin size={70} />
        </a>
      </div>
    </div>
  );
};

export default LinksBlock;