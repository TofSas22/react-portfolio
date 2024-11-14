import React from "react";

const Card = ({ image, description, codeLink, siteLink }) => {
  return (
    <div className="flex-shrink-0 w-80 p-4 frosted-glass">
      <img
        src={image}
        alt="Project"
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <p className="text-white mb-4">{description}</p>
      <div className="flex justify-between">
        <a
          href={codeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Code
        </a>
        <a
          href={siteLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Live Site
        </a>
      </div>
    </div>
  );
};

export default Card;
