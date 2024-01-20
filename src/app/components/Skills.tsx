import React from "react";
import Skill from "./Skill";

const languages = ["JavaScript", "TypeScript", "HTML", "CSS"];
const frontend = [
  "React",
  "Redux",
  "Next.js",
  "Ember",
  "Vue",
  "Web Components",
  "lit-HTML (Polymer)",
  "Tailwind CSS",
];
const backend = [
  "Node.js",
  "PHP",
  "Rest API",
  "GraphQL",
  "SQL (PostgreSQL, MySQL)",
  "NoSQL (MongoDB)",
  "Redis",
];
const tools = [
  "Git",
  "npm",
  "Docker",
  "VS Code",
  "Test Driven Development (Jest, Mocha, Chai, QUnit)",
  "AWS",
  "Jenkins",
  "Gitlab CI (Continuous Integration)",
  "Cloudfront CDN (Continuous Delivery Network)",
  "Agile",
  "Figma",
];

const TechnicalSkills = () => {
  return (
    <div className="flex w-full flex-col items-center bg-[#cfcfcf] text-[#000000]">
      <div className="mb-40 flex flex-col items-center px-5 sm:max-w-[800px] sm:px-16">
        <h2 className="mb-8 self-start text-2xl sm:text-3xl lg:text-4xl">
          Technical Skills
        </h2>
        <div>
          <Skill skill={"Languages"} skills={languages}></Skill>
          <Skill skill={"Frontend"} skills={frontend}></Skill>
          <Skill skill={"Backend"} skills={backend}></Skill>
          <Skill skill={"Development Tools"} skills={tools}></Skill>
        </div>
      </div>
    </div>
  );
};

export default TechnicalSkills;
