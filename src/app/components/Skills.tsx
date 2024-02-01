import React from "react";
import Skill from "./Skill";
import { SKILLS } from "../constants";

const TechnicalSkills = () => {
  return (
    <div className="flex w-full flex-col items-center bg-[#cfcfcf] text-[#000000]">
      <div className="mb-40 flex flex-col items-center px-5 sm:max-w-[800px] sm:px-16">
        <h2 className="mb-8 self-start text-2xl sm:text-3xl lg:text-4xl">
          Technical Skills
        </h2>
        <div>
          <Skill skillName={"Languages"} skillList={SKILLS.LANGUAGES}></Skill>
          <Skill skillName={"Frontend"} skillList={SKILLS.FRONTEND}></Skill>
          <Skill skillName={"Backend"} skillList={SKILLS.BACKEND}></Skill>
          <Skill
            skillName={"Development Tools"}
            skillList={SKILLS.TOOLS}
          ></Skill>
        </div>
      </div>
    </div>
  );
};

export default TechnicalSkills;
