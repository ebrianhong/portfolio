import React, { FC } from 'react';

import HTML from '../../../public/html.png';
import CSS from '../../../public/css.png';
import JavaScript from '../../../public/javascript.png';
import ReactImg from '../../../public/react.png';
import Tailwind from '../../../public/tailwind.png';
import NextJs from '../../../public/next.svg';
import Image from 'next/image';

const Skills:FC = () => {
  return (
    <div className='w-full bg-[#cfcfcf] text-[#000000]'>
      {/* Container */}
      <div className='max-w-[800px] mx-auto flex flex-col justify-center w-full h-full'>
        
        <h2 className='self-start text-2xl sm:text-4xl mb-8'>Skills</h2>


        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <Image className='w-20 mt-5 mx-auto' src={JavaScript} alt="HTML icon" />
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