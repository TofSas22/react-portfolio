import React from "react";
import AboutBlock from "./blocks/AboutBlock";
import ImageBlock from "./blocks/ImageBlock";
import LinksBlock from "./blocks/LinksBlock";
import ContactBlock from "./blocks/ContactBlock";
import ProjectBlock from "./blocks/ProjectBlock";
import SkillsBlock from "./blocks/SkillsBlock";

const BentoGrid = () => {
  return (
    <div className="grid grid-cols-6 grid-rows-3 gap-4 p-6">
      {/* Block 1: Image */}
      <div className="col-span-2 row-span-2 h-full w-full">
        <ImageBlock />
      </div>

      {/* Block 2: About Me */}
      <div className="col-span-2 row-span-1 h-full w-full">
        <AboutBlock />
      </div>

      {/* Block 3: Contact Me */}
      <div className="col-span-1 row-span-1 h-full w-full">
        <ContactBlock />
      </div>

      {/* Block 4: Links */}
      <div className="col-span-1 row-span-1 h-full w-full">
        <LinksBlock />
      </div>

      {/* Block 5: Skills */}
      <div className="col-span-2 row-span-1">
        <SkillsBlock />
      </div>

      {/* Block 6: Projects */}
      <div className="col-span-2 row-span-1">
        <ProjectBlock />
      </div>
    </div>
  );
};

export default BentoGrid;
