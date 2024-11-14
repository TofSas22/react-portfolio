import React from "react";
import Card from "./Card";

const Projects = () => {
  const projects = [
    {
      image: "link-to-image1.jpg",
      description: "Project 1 description goes here.",
      codeLink: "https://github.com/link-to-code1",
      siteLink: "https://link-to-site1.com"
    },
    {
      image: "link-to-image2.jpg",
      description: "Project 2 description goes here.",
      codeLink: "https://github.com/link-to-code2",
      siteLink: "https://link-to-site2.com"
    },
    {
      image: "link-to-image2.jpg",
      description: "Project 2 description goes here.",
      codeLink: "https://github.com/link-to-code2",
      siteLink: "https://link-to-site2.com"
    },
    {
      image: "link-to-image2.jpg",
      description: "Project 2 description goes here.",
      codeLink: "https://github.com/link-to-code2",
      siteLink: "https://link-to-site2.com"
    },
    {
      image: "link-to-image2.jpg",
      description: "Project 2 description goes here.",
      codeLink: "https://github.com/link-to-code2",
      siteLink: "https://link-to-site2.com"
    },
  ];

  return (
    <div id="projects" className="py-8 mt-12">
      <h2 className="text-3xl font-bold text-white mb-6">Featured Projects</h2>
      <div className="flex overflow-x-scroll space-x-6 p-4">
        {projects.map((project, index) => (
          <Card
            key={index}
            image={project.image}
            description={project.description}
            codeLink={project.codeLink}
            siteLink={project.siteLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
