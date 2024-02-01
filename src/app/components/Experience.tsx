import React from "react";
import Job from "./Job";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { JOBS } from "../constants";

const Experience = () => {
  return (
    <div
      id="experience"
      className="flex w-full flex-col items-center bg-[#cfcfcf] text-[#000000]"
    >
      <div className="mb-20 flex flex-col items-center px-5 sm:max-w-[800px] sm:px-16">
        <h2 className="my-20 self-start text-2xl sm:text-3xl lg:text-4xl">
          Professional Experience
        </h2>
        <div>
          {JOBS.map((job) => {
            return <Job key={job.company} {...job}></Job>;
          })}
        </div>
        <a
          href="/Resume_Hong_Brian.pdf"
          className="flex items-center justify-end self-end duration-300 hover:scale-110 hover:text-[#0077b5]"
          target="_blank"
          rel="noreferrer"
        >
          <BsFillPersonLinesFill size={30} className="mr-3" />
          Download my resume
        </a>
      </div>
    </div>
  );
};

export default Experience;
