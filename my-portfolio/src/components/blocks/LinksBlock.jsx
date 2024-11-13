import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const LinksBlock = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4 frosted-glass rounded-lg shadow-md w-full h-full">
      {/* Heading */}
      <h3 className="text-6xl font-bold text-gray-50 mb-2">LINKS</h3>

      {/* Icon Links */}
      <div className="flex space-x-4">
        {/* GitHub Link */}
        <a
          href="https://github.com/TofSas22"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-50 hover:text-blue-500"
        >
          <FaGithub size={80} />
        </a>

        {/* LinkedIn Link */}
        <a
          href="https://linkedin.com/in/tofieksas"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-50 hover:text-blue-500"
        >
          <FaLinkedin size={80} />
        </a>
      </div>
    </div>
  );
};

export default LinksBlock;
