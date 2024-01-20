"use client";

import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="fixed -bottom-0.5 z-10 flex w-full flex-row text-white sm:left-0 sm:top-[35%] sm:w-0 sm:flex-col">
      <Link
        className="flex h-[60px] w-[160px] items-center justify-center bg-[#5a5a5a] px-4 duration-300 hover:bg-[#0077b5] sm:ml-[-100px] sm:justify-between lg:hover:ml-[-10px]"
        href="https://www.linkedin.com/in/bghong/"
        target="_blank"
        rel="noreferrer"
      >
        <p className="hidden sm:block">Linkedin</p>
        <FaLinkedin size={30} />
      </Link>
      <Link
        className="flex h-[60px] w-[160px] items-center justify-center bg-[#5a5a5a] px-4 duration-300 hover:bg-[#000000] sm:ml-[-100px] sm:justify-between lg:hover:ml-[-10px]"
        href="https://github.com/ebrianhong"
        target="_blank"
        rel="noreferrer"
      >
        <p className="hidden sm:block">Github</p>
        <FaGithub size={30} />
      </Link>
      <Link
        className="flex h-[60px] w-[160px] items-center justify-center bg-[#5a5a5a] px-4 duration-300 hover:bg-[#e45656] sm:ml-[-100px] sm:justify-between lg:hover:ml-[-10px]"
        href="mailto:ebrianhong@gmail.com"
        target="_blank"
        rel="noreferrer"
      >
        <p className="hidden sm:block">Email</p>
        <HiOutlineMail size={30} />
      </Link>
      <Link
        className="flex h-[60px] w-[160px] items-center justify-center bg-[#5a5a5a] px-4 duration-300 hover:bg-[#2eac65] sm:ml-[-100px] sm:justify-between lg:hover:ml-[-10px]"
        href="/Resume_Hong_Brian.pdf"
        target="_blank"
        rel="noreferrer"
      >
        <p className="hidden sm:block">Resume</p>
        <BsFillPersonLinesFill size={30} />
      </Link>
    </div>
  );
};

export default NavBar;
