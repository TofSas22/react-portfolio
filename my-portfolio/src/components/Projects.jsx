import React from "react";
import Card from "./Card";

// Importing images at the top
import reactPortfolioImage from '../images/react-portfolio.png';
import foodieFanatixImage from '../images/foodieFantix.png';
import auto4SaleImage from '../images/Auto4Sale.png';
import pokedexImage from '../images/pokedex.png';
import countdownTimerImage from '../images/countdown timer.png';

const Projects = () => {
  const projects = [
    {
      heading: "react-tailwind portfolio",
      image: reactPortfolioImage, // Use imported image
      description:
        "Building this portfolio site has been an exciting journey of combining design and development skills. I wanted a unique, modern aesthetic, so I chose a bento-box layout for the hero section, where each block highlights different aspects like About Me, Projects, Skills, and Contact. This project has been an opportunity to practice responsive design, component-based structure, and interactivity, creating a fun and functional site that truly represents my skills and style as a developer.",
      codeLink: "https://github.com/TofSas22/react-portfolio",
      siteLink: "#",
    },
    {
      heading: "FoodieFanatix",
      image: foodieFanatixImage, // Use imported image
      description:
        "The FoodieFanatix project was a scenario assignment designed to simulate building a website for a fictional food blogger named Claire. Using HTML, CSS, Bootstrap, and JavaScript, I created a responsive, visual layout for her food reviews, optimizing it for both mobile and desktop viewing. This project was a great exercise in combining design and functionality for an engaging user experience.",
      codeLink: "https://github.com/TofSas22-ITvarsity/Module-11-Assessment-2-",
      siteLink: "https://tofsas22-itvarsity.github.io/Module-11-Assessment-2-/",
    },
    {
      heading: "Auto4Sale",
      image: auto4SaleImage, // Use imported image
      description:
        "The Auto4Sale project was a scenario website built using HTML and CSS for a fictional car dealership. It includes a homepage with company information and featured vehicles, a listing page for cars with images and details, and a contact page featuring company contact details and a form. This project was a hands-on exercise in creating a simple, structured layout for a business-oriented website.",
      codeLink: "https://github.com/TofSas22-ITvarsity/Module-6-Assessment-2",
      siteLink: "https://tofsas22-itvarsity.github.io/Module-6-Assessment-2/",
    },
    {
      heading: "Pokedex",
      image: pokedexImage, // Use imported image
      description:
        "The Pokémon Search App is a project built with HTML, CSS, and JavaScript. It allows users to search for Pokémon by name or ID, displaying results that include data and images fetched from freeCodeCamp's PokéAPI Proxy. This project was a fun way to work with APIs and dynamic content, creating an engaging, interactive experience for users.",
      codeLink: "https://github.com/TofSas22/pokedex",
      siteLink: "https://tofsas22.github.io/pokedex/",
    },
    {
      heading: "Countdown Timer",
      image: countdownTimerImage, // Use imported image
      description:
        "The Countdown Timer project is a custom-built app using HTML, CSS, and JavaScript. Designed with a unique UI, this timer offers a fresh look and feel, making the most of creative CSS styling. It’s a fun, interactive tool that showcases CSS skills and adds a personal twist to a classic countdown feature.",
      codeLink: "https://github.com/TofSas22-ITvarsity/Module-9-Assessment-1",
      siteLink: "https://tofsas22-itvarsity.github.io/Module-9-Assessment-1/",
    },
  ];

  return (
    <div id="projects" className="py-8 mt-12">
      <h2 className="text-3xl font-bold text-white mb-6">Featured Projects</h2>
      <div className="flex overflow-x-scroll space-x-6 p-4">
        {projects.map((project, index) => (
          <Card
            key={index}
            heading={project.heading}
            image={project.image} // Pass the imported image to Card
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