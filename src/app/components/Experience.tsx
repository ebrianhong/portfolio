import React, { FC } from 'react'
import JobPage from './Job'
import { JobProps } from '../interfaces/interfaces'

const jobs: JobProps[] = [
  {
    company: 'LinkedIn',
    startDate: 'sep 2022',
    endDate: 'nov 2023',
    role: 'UI Frontend Engineer',
    description: ''
  },
  {
    company: 'Age of Learning',
    startDate: 'aug 2018',
    endDate: 'aug 2022',
    role: 'Software Engineer II',
    description: ''
  },
  {
    company: 'Radial3D',
    startDate: 'jul 2018',
    endDate: 'aug 2023',
    role: 'Software Engineering Intern',
    description: ''
  },
]

const Experience:FC = () => {
  return (
    <div className='flex justify-center align-middle w-full h-screen bg-[#cfcfcf] text-gray-300'>
      <div className='sm:w-[1000px]'> 
        {jobs.map(job => {
          return <JobPage key={job.company} {...job}></JobPage>
        })}
      </div>
    </div>
  )
}

export default Experience