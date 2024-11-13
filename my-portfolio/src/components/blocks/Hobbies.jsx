import React from 'react';

const HobbiesBlock = () => {
  return (
    <div className="p-4 frosted-glass rounded-lg shadow-md w-full h-full">
      <h3 className="text-lg font-bold text-gray-50 mb-4">Hobbies & Interests</h3>
      <ul className="list-disc pl-5 text-gray-50">
        <li>Programming</li>
        <li>Gaming</li>
        <li>Reading</li>
        <li>Photography</li>
        <li>Traveling</li>
      </ul>
    </div>
  );
};

export default HobbiesBlock;