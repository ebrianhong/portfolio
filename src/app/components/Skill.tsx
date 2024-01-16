'use client'

import React, { FC, useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";

type SkillProps = {
  skill: string,
  skills: Array<string>
}

const Skill:FC<SkillProps> = ({skill, skills}: {skill: string, skills:Array<string>})  => {
  const [open, setOpen] = useState<boolean>(false); 
  return (
    <div className='text-[#000000] text-sm mb-5 w-full border-b-2 border-zinc-400 last:border-none cursor-pointer' onClick={() => {setOpen(!open)}}>
      <div className='flex items-center mb-3 z-0'> 
        <IoIosArrowDown size={30} className={`mr-3  ${open ? 'rotate-180' : 'rotate-0'}`}></IoIosArrowDown>
        <div className='flex justify-between w-full'>
          <div className=''>
            <p className='font-semibold text-lg'>{skill}</p>
          </div>
        </div>
      </div>
      <div className={`transition-all overflow-hidden duration-300 mb-4 ml-8 ${open ? 'max-h-screen' : 'max-h-0'}`}>
        {skills.map((skill, i) => {
          return <span key={i} >{skill}, </span>
        })}
      </div>
    </div>
  )
}

export default Skill