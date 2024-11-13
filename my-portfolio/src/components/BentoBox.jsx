import React from "react";
import AboutBlock from "./blocks/AboutBlock";
import ImageBlock from "./blocks/ImageBlock";
import LinksBlock from "./blocks/LinksBlock";
import ContactBlock from "./blocks/ContactBlock";
import ProjectBlock from "./blocks/ProjectBlock";
import SkillsBlock from "./blocks/SkillsBlock";
import HobbiesBlock from "./blocks/Hobbies";

const BentoGrid = () => {
  return (
    <div className="grid grid-cols-6 grid-rows-2 gap-4">
      <div className="col-span-2 row-span-2">
        <ImageBlock />
      </div>

      <div className="col-span-2 row-span-1">
        <AboutBlock />
      </div>

      <div className="col-span-1 row-span-1">
        <HobbiesBlock />
      </div>

      <div className="col-span-1 row-span-1">
        <LinksBlock />
      </div>

      <div className="col-span-1 row-span-1">
        <SkillsBlock />
      </div>

      <div className="col-span-2 row-span-1">
        <ProjectBlock />
      </div>

      <div className="col-span-1 row-span-1">
        <ContactBlock />
      </div>
    </div>
  );
};

export default BentoGrid;
