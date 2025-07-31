import React from 'react';
import profilePic from '../../images/profile-pic.jpeg';

const ImageBlock = () => {
  return (
    <div className="col-span-2 row-span-3 w-full h-full">
      <img
        src={profilePic} // Use the imported image
        alt="Your Name"
        className="w-full h-full object-cover rounded-lg shadow-md"
      />
    </div>
  );
};

export default ImageBlock;