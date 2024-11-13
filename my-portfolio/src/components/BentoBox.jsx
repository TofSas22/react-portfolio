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
      {/* Block 1: Image */}
      <div className="col-span-2 row-span-2">
        <ImageBlock />
      </div>

      {/* Block 2: About Me */}
      <div className="col-span-2 row-span-1">
        <AboutBlock />
      </div>

      {/* Block 3: Contact Me */}
      <div className="col-span-1 row-span-1">
        <ContactBlock />
      </div>

      {/* Block 4: Links */}
      <div className="col-span-1 row-span-1">
        <LinksBlock />
      </div>

      {/* Block 5: Skills */}
      <div className="col-span-1 row-span-1">
        <SkillsBlock />
      </div>

      {/* Block 6: Projects */}
      <div className="col-span-2 row-span-1">
        <ProjectBlock />
      </div>

      {/* Block 5: Skills */}
      <div className="col-span-1 row-span-1">
        <HobbiesBlock />
      </div>
    </div>
  );
};

export default BentoGrid;
