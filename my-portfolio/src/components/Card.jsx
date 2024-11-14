import React from "react";

const Card = ({ heading, image, description, icon, codeLink, siteLink }) => {
  return (
    <div className="flex-shrink-0 w-80 p-4 bg-transparent backdrop-blur-lg border border-gray-700 rounded-lg shadow-lg flex flex-col justify-between">
      {/* Header (Heading + Image) */}
      <div className="flex flex-col items-center mb-4">
        <h3 className="text-xl font-bold text-white mb-2 text-center">
          {heading}
        </h3>
        <img
          src={image}
          alt="Project"
          className="w-full h-48 object-cover rounded-lg"
        />
      </div>

      {/* Description */}
      <div className="mb-4">
        <p className="text-white">{description}</p>
      </div>

        {/* Links row */}
        <div className="flex justify-between border-t border-gray-500 pt-4">
          <a
            href={codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 transition"
          >
            Code
          </a>
          <a
            href={siteLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 transition"
          >
            Live Site
          </a>
        </div>
      </div>
  );
};

export default Card;
