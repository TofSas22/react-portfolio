import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaBootstrap, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiZsh } from 'react-icons/si';

const SkillsBlock = () => {
  return (
    <div className="flex flex-col items-center p-4 frosted-glass rounded-lg shadow-md h-full w-full">
      {/* Heading */}
      <h3 className="text-lg font-bold text-gray-50 mb-4">SKILLS</h3>

      {/* Icons */}
      <div className="flex flex-wrap justify-center gap-4">
        <FaHtml5 size={40} className="text-orange-600" />
        <FaCss3Alt size={40} className="text-blue-500" />
        <FaJs size={40} className="text-yellow-500" />
        <FaReact size={40} className="text-blue-400" />
        <SiTailwindcss size={40} className="text-teal-400" />
        <FaBootstrap size={40} className="text-purple-600" />
        <FaPython size={40} className="text-blue-400" />
        <FaGitAlt size={40} className="text-orange-500" />
        <SiZsh size={40} className='text-white' />
      </div>
    </div>
  );
};

export default SkillsBlock;