import React from "react";
import { FaExternalLinkAlt, FaLongArrowAltRight } from "react-icons/fa";

const ProjectsBlock = () => {
  return (
    <div className="flex flex-col items-center p-6 frosted-glass rounded-lg shadow-lg h-full w-full transition-transform duration-300 hover:scale-105">
      <h3 className="text-2xl font-bold text-white mb-4 tracking-wide">
        Featured Projects
      </h3>

      <div className="flex flex-col space-y-3 w-full">
        {[
          {
            name: "Auto4Sale",
            url: "https://tofsas22-itvarsity.github.io/Module-6-Assessment-2/",
          },
          {
            name: "FoodieFanatix",
            url: "https://tofsas22-itvarsity.github.io/Module-11-Assessment-2-/",
          },
          {
            name: "Contact Book App",
            url: "https://tofsas22-itvarsity.github.io/Module-12-Assessment-2/",
          },
        ].map((project, index) => (
          <a
            key={index}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white flex items-center justify-between hover:underline hover:text-gray-200 bg-blue-800 bg-opacity-60 px-4 py-2 rounded-md transition-all duration-200"
          >
            <span>{project.name}</span>
            <FaExternalLinkAlt className="ml-2 text-gray-300 transition-transform duration-200 hover:scale-110" />
          </a>
        ))}
      </div>

      <a
        className="flex items-center py-2 text-white font-semibold hover:text-gray-200 transition-colors duration-200"
        href="#projects"
      >
        View More
        <FaLongArrowAltRight className="ml-2 transform transition-transform duration-200 group-hover:translate-x-1" />
      </a>
    </div>
  );
};

export default ProjectsBlock;
