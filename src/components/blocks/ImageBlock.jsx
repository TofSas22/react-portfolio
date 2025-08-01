import React from 'react'
import LazyImage from '../LazyImage'
import profilePic from '../../images/profile-pic.jpeg'

const ImageBlock = () => {
  return (
    <div className="col-span-2 row-span-3 w-full h-full">
      <LazyImage
        src={profilePic}
        alt="Tofiek Sasman - Profile Picture"
        className="w-full h-full rounded-lg shadow-md"
      />
    </div>
  )
}

export default ImageBlock
