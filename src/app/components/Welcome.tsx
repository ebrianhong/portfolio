import React, { FC } from 'react'
import { SlArrowDownCircle } from "react-icons/sl";
import Link from 'next/link'

const calculate = () => {
  const year = new Date().getFullYear()

  return year - 2019
}

const Welcome:FC = () => {
  return (
    <div id='home' className='w-full h-screen bg-[#cfcfcf]'>
      <div className='max-w-[1000px] mx-auto px-5 sm:px-16 flex flex-col justify-center items-center h-full relative'>
        <div className='flex justify-center align-center mb-10 flex-col sm:flex-row'>
          <div className='pr-5 w-100 sm:w-1/2  sm:border-r-2 sm:border-zinc-400 '>
            <h1 className='font-light text-[#000000] text-left sm:text-4xl lg:text-7xl sm:text-right pl-5 sm:pl-0'>
              Brian Hong
            </h1>
          </div>
          <div className='flex flex-col w-100 sm:w-1/2 text-[#000000] text-sm sm:text-base pl-5'>
            <div className='mb-5'>
              <p className='font-bold'>Frontend Engineer</p>
              <p className='italic'>Los Angeles, CA</p>
            </div>
            <div>
              <p className='text-[#000000]'>
                Hello, I am a <span className='italic'>Frontend Engineer</span> from Los Angeles with {calculate()}+ years of professional experience and a strong foundation in frontend technologies.
                I am passionate about writing clean and concise code and delivering fast, reliable, and inclusive web experiences for users.
              </p>
            </div>
          </div>
        </div>
        <Link className='flex flex-col items-center absolute bottom-36 hover:scale-125 hover:text-[#e45656] duration-300' href='#experience'>
          <p>scroll down for more</p>
          <SlArrowDownCircle size={30}/>
        </Link>
      </div>
    </div>
  );
}

export default Welcome