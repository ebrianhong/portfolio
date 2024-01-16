'use client'

import React, { FC } from 'react'
import {
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Link from 'next/link';



const NavBar:FC = () => {
  return (
    <div className='flex -bottom-0.5 w-full sm:w-0 flex-row sm:flex-col sm:top-[35%] sm:left-0 fixed z-10 text-white'>
      <Link className='w-[160px] h-[60px] flex justify-center sm:justify-between items-center sm:ml-[-100px] lg:hover:ml-[-10px] hover:bg-[#0077b5] duration-300 bg-[#5a5a5a] px-4' href='https://www.linkedin.com/in/bghong/' target='_blank' rel='noreferrer'>
        <p className='hidden sm:block'>Linkedin</p> 
        <FaLinkedin size={30} />
      </Link>
      <Link className='w-[160px] h-[60px] flex justify-center sm:justify-between items-center sm:ml-[-100px] lg:hover:ml-[-10px] hover:bg-[#000000] duration-300 bg-[#5a5a5a] px-4' href='https://github.com/ebrianhong' target='_blank' rel='noreferrer'>
        <p className='hidden sm:block'>Github</p> 
        <FaGithub size={30} />
      </Link>
      <Link className='w-[160px] h-[60px] flex justify-center sm:justify-between items-center sm:ml-[-100px] lg:hover:ml-[-10px] hover:bg-[#e45656] duration-300 bg-[#5a5a5a] px-4' href='mailto:ebrianhong@gmail.com' target='_blank' rel='noreferrer'>
        <p className='hidden sm:block'>Email</p> 
        <HiOutlineMail size={30} />
      </Link>
      <Link className='w-[160px] h-[60px] flex justify-center sm:justify-between items-center sm:ml-[-100px] lg:hover:ml-[-10px] hover:bg-[#2eac65] duration-300 bg-[#5a5a5a] px-4' href='/Resume_Hong_Brian.pdf' target='_blank' rel='noreferrer'>
        <p className='hidden sm:block'>Resume</p> 
        <BsFillPersonLinesFill size={30} />
      </Link>
    </div>
  );
}

export default NavBar