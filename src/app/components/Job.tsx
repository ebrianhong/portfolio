'use client'

import React, { FC, useState } from 'react'
import { JobProps } from '../interfaces/interfaces'
import { IoIosArrowDown } from "react-icons/io";


const Job:FC<JobProps> = (job)  => {
  const [open, setOpen] = useState<boolean>(false); 
  return (
    <div className='text-[#000000] text-sm mb-5 w-full border-b-2 border-zinc-400 cursor-pointer' onClick={() => {setOpen(!open)}}>
      <div className='flex items-center mb-3' > 
        <IoIosArrowDown size={30} className={`mr-3  ${open ? 'rotate-180' : 'rotate-0'}`}></IoIosArrowDown>
        <div className='flex justify-between w-full'>
          <div className=''>
            <p className='font-semibold text-lg'>{job.company}</p>
            <p className='italic'>{job.role}</p>
          </div>
          <div>
            <p>{job.startDate} - {job.endDate}</p>
          </div>
        </div>
      </div>
      <ol className={`transition-all overflow-hidden duration-400 mb-4 ml-8 ${open ? 'max-h-screen' : 'max-h-0'}`}>
        {job.description.map((description, i) => {
          return <li key={i} className='list-disc ml-5' >{description}</li>
        })}
      </ol>
    </div>
  )
}

export default Job