import React, { FC } from 'react'
import { JobProps } from '../interfaces/interfaces'


const Job:FC<JobProps> = (job)  => {
  return (
    <div className='flex justify-between text-[#000000] text-sm mx-3 sm:w-1/2'> 
      <div>
        <p className='font-bold'>{job.company}</p>
        <p className='italic'>{job.role}</p>
      </div>
      <div>
        <p>{job.startDate} - {job.endDate}</p>
      </div>
    </div>
  )
}

export default Job