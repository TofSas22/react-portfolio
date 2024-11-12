import React from "react";

const ProjectsBlock = () => {
  return (
    <div className="flex flex-col items-center p-4 bg-gray-200 rounded-lg shadow-md h-full w-full">
      {/* Heading */}
      <h3 className="text-lg font-bold text-gray-800 mb-3">PROJECTS</h3>

      {/* Project Previews (Add examples or project links) */}
      <div className="flex flex-col space-y-2 w-full">
        <a
          href="https://example.com/project1"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Project 1
        </a>
        <a
          href="https://example.com/project2"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Project 2
        </a>
        <a
          href="https://example.com/project3"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Project 3
        </a>
      </div>
    </div>
  );
};

export default ProjectsBlock;
