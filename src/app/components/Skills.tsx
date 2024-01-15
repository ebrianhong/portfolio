import React from 'react';

import HTML from '../../../public/html.png';
import CSS from '../../../public/css.png';
import JavaScript from '../../../public/javascript.png';
import ReactImg from '../../../public/react.png';
import Tailwind from '../../../public/tailwind.png';
import NextJs from '../../../public/next.svg';
import Image from 'next/image';

const Skills = () => {
  return (
    <div className='w-full h-screen bg-[#cfcfcf] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-12 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-teal-600 '>Skills</p>
          <p className='py-4'>These are some of the frontend technologies I have worked with</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <Image className='w-20 mx-auto' src={JavaScript} alt="HTML icon" />
            <p className='my-4'>JAVASCRIPT</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <Image className='w-20 mx-auto' src={HTML} alt="HTML icon" />
            <p className='my-4'>HTML</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <Image className='w-20 mx-auto' src={CSS} alt="HTML icon" />
            <p className='my-4'>CSS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <Image className='w-20 mx-auto' src={ReactImg} alt="HTML icon" />
            <p className='my-4'>REACT</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <Image className='w-20 mx-auto' src={Tailwind} alt="HTML icon" />
            <p className='my-4'>TAILWIND CSS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <Image className='w-20 mx-auto' src={NextJs} alt="HTML icon" />
            <p className='my-4'>NEXT.JS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;