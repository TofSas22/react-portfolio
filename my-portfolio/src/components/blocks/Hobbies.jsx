import React from "react";
import { FaFish, FaGamepad, FaFlagCheckered, FaFutbol } from "react-icons/fa";

const HobbiesBlock = () => {
  return (
    <div className="p-6 frosted-glass rounded-lg shadow-lg w-full h-full transition-transform duration-300 hover:scale-105">
      <h3 className="text-2xl font-bold text-white mb-6 tracking-wide">
        Hobbies & Interests
      </h3>
      <ul className="space-y-3 text-gray-50">
        <li className="flex items-center space-x-3 text-lg transition-colors duration-200 hover:text-gray-300">
          <FaFish className="text-blue-400" />
          <span>Fish Keeping</span>
        </li>
        <li className="flex items-center space-x-3 text-lg transition-colors duration-200 hover:text-gray-300">
          <FaGamepad className="text-green-400" />
          <span>Gaming</span>
        </li>
        <li className="flex items-center space-x-3 text-lg transition-colors duration-200 hover:text-gray-300">
          <FaFlagCheckered className="text-red-400" />
          <span>Motorsport</span>
        </li>
        <li className="flex items-center space-x-3 text-lg transition-colors duration-200 hover:text-gray-300">
          <FaFutbol className="text-yellow-400" />
          <span>Football</span>
        </li>
      </ul>
    </div>
  );
};

export default HobbiesBlock;