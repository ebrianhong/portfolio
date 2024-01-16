import React, { FC } from "react";
import { SlArrowDownCircle } from "react-icons/sl";
import Link from "next/link";

const calculate = () => {
  const year = new Date().getFullYear();

  return year - 2019;
};

const Welcome: FC = () => {
  return (
    <div id="home" className="h-screen w-full bg-[#cfcfcf]">
      <div className="relative mx-auto flex h-full max-w-[1000px] flex-col items-center justify-center px-5 sm:px-16">
        <div className="align-center mb-10 flex flex-col justify-center sm:flex-row">
          <div className="w-100 pr-5 sm:w-1/2  sm:border-r-2 sm:border-zinc-400 ">
            <h1 className="pl-5 text-left font-light text-[#000000] sm:pl-0 sm:text-right sm:text-4xl lg:text-7xl">
              Brian Hong
            </h1>
          </div>
          <div className="w-100 flex flex-col pl-5 text-sm text-[#000000] sm:w-1/2 sm:text-base">
            <div className="mb-5">
              <p className="font-bold">Frontend Engineer</p>
              <p className="italic">Los Angeles, CA</p>
            </div>
            <div>
              <p className="text-[#000000]">
                Hello, I am a <span className="italic">Frontend Engineer</span>{" "}
                from Los Angeles with {calculate()}+ years of professional
                experience and a strong foundation in frontend technologies. I
                am passionate about writing clean and concise code and
                delivering fast, reliable, and inclusive web experiences for
                users.
              </p>
            </div>
          </div>
        </div>
        <Link
          className="absolute bottom-36 flex flex-col items-center duration-300 hover:scale-125 hover:text-[#e45656]"
          href="#experience"
        >
          <p>scroll down for more</p>
          <SlArrowDownCircle size={30} />
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
