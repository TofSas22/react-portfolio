import React from "react";

const ProjectsBlock = () => {
  return (
    <div className="flex flex-col items-center p-4 frosted-glass rounded-lg shadow-md h-full w-full">
      {/* Heading */}
      <h3 className="text-lg font-bold text-gray-50 mb-3">PROJECTS</h3>

      {/* Project Previews (Add examples or project links) */}
      <div className="flex flex-col space-y-2 w-full">
        <a
          href="https://tofsas22-itvarsity.github.io/Module-6-Assessment-2/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Auto4Sale
        </a>
        <a
          href="https://tofsas22-itvarsity.github.io/Module-11-Assessment-2-/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          FoodieFanatix
        </a>
        <a
          href="https://tofsas22-itvarsity.github.io/Module-12-Assessment-2/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Contact Book App
        </a>
      </div>
    </div>
  );
};

export default ProjectsBlock;
