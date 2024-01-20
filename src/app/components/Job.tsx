"use client";

import React, { useState } from "react";
import { JobProps } from "../interfaces/interfaces";
import { IoIosArrowDown } from "react-icons/io";

const Job = (job: JobProps) => {
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
            <p className="text-lg font-semibold">{job.company}</p>
            <p className="italic">{job.role}</p>
          </div>
          <div>
            <p>
              {job.startDate} - {job.endDate}
            </p>
          </div>
        </div>
      </div>
      <ol
        className={`mb-4 ml-8 overflow-hidden transition-all duration-300 ${open ? "max-h-screen" : "max-h-0"}`}
      >
        {job.description.map((description, i) => {
          return (
            <li key={i} className="ml-5 list-disc">
              {description}
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Job;
