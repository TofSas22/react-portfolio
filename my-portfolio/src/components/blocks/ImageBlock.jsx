import React from 'react';

const ImageBlock = () => {
  return (
    <div className="col-span-2 row-span-3">
      <img 
        src="src/assets/profile-pic.jpeg" 
        alt="Your Name" 
        className="w-full h-full object-cover rounded-lg shadow-md"
      />
    </div>
  );
};

export default ImageBlock;