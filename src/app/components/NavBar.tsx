"use client";

import React from "react";
import Link from "next/link";
import { NAVBAR_BUTTONS } from "../constants";

const NavBar = () => {
  return (
    <div className="fixed -bottom-0.5 z-10 flex w-full flex-row text-white sm:left-0 sm:top-[35%] sm:w-0 sm:flex-col">
      {NAVBAR_BUTTONS.map((button) => {
        const Icon = button.ICON; // TP: dynamic classes

        return (
          <Link
            key={button.NAME}
            className={`flex h-[60px] w-[160px] items-center justify-center bg-[#5a5a5a] px-4 duration-300 hover:bg-[${button.COLOR}] sm:ml-[-100px] sm:justify-between lg:hover:ml-[-10px]`}
            href={button.HREF}
            target="_blank"
            rel="noreferrer"
          >
            <p className="hidden sm:block">{button.NAME}</p>
            <Icon size={30} />
          </Link>
        );
      })}
    </div>
  );
};

export default NavBar;
