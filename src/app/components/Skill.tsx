"use client";

import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { SkillProps } from "../interfaces/interfaces";

const Skill = ({ skillName, skillList }: SkillProps) => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div
      className="mb-5 w-full cursor-pointer border-b-2 border-zinc-400 text-sm text-[#000000] last:border-none"
      onClick={() => {
        setOpen(!open);
      }}
    >
      <div className="z-0 mb-3 flex items-center">
        <IoIosArrowDown
          size={30}
          className={`mr-3  ${open ? "rotate-180" : "rotate-0"}`}
        ></IoIosArrowDown>
        <div className="flex w-full justify-between">
          <div className="">
            <p className="text-lg font-semibold">{skillName}</p>
          </div>
        </div>
      </div>
      <div
        className={`mb-4 ml-8 overflow-hidden transition-all duration-300 ${open ? "max-h-screen" : "max-h-0"}`}
      >
        {skillList.map((skill, i) => {
          return <span key={i}>{skill}, </span>;
        })}
      </div>
    </div>
  );
};

export default Skill;
