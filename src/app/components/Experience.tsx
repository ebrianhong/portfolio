import React, { FC } from 'react'
import Job from './Job'

interface JobInterface {
  company: string,
  startDate: string,
  endDate: string,
  role: string
}

const jobs: JobInterface[] = [
  {
    company: 'LinkedIn',
    startDate: 'sep 2022',
    endDate: 'nov 2023',
    role: 'UI Frontend Engineer'
  },
  {
    company: 'Age of Learning',
    startDate: 'aug 2018',
    endDate: 'aug 2022',
    role: 'Software Engineer II'
  },
  {
    company: 'Radial3D',
    startDate: 'jul 2018',
    endDate: 'aug 2023',
    role: 'Software Engineering Intern'
  },
]

const Experience:FC = () => {
  return (
    <div className='w-full h-screen bg-[#cfcfcf] text-gray-300'>
      {jobs.map(job => {
        return <Job key={job.company} {...job}></Job>
      })}
    </div>
  )
}

export default Experience