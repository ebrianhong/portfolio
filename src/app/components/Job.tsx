import React, { FC } from 'react'

interface JobInterface {
  company: string,
  startDate: string,
  endDate: string,
  role: string
}

const Job:FC<JobInterface> = (job)  => {
  console.log(job)
  return (
    <ul className='text-[#000000]'> 
      <li>{job.company}</li>
      <li>{job.startDate}</li>
      <li>{job.endDate}</li>
      <li>{job.role}</li>
    </ul>
  )
}

export default Job