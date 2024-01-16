import React, { FC } from 'react'
import Skill from './Skill'


  const languages =['JavaScript', 'TypeScript', 'HTML', 'CSS']
  const frontend = ['React', 'Redux', 'Next.js', 'Ember', 'Vue', 'Web Components', 'lit-HTML (Polymer)', 'Tailwind CSS']
  const backend = ['Node.js', 'PHP', 'Rest API', 'GraphQL', 'SQL (PostgreSQL, MySQL)', 'NoSQL (MongoDB)', 'Redis']
  const tools = ['Git', 'npm', 'Docker', 'VS Code', 'Test Driven Development (Jest, Mocha, Chai, QUnit)', 'AWS', 'Jenkins', 'Gitlab CI (Continuous Integration)', 'Cloudfront CDN (Continuous Delivery Network)', 'Agile', 'Figma']

const TechnicalSkills:FC = () => {
  return (
    <div className='flex flex-col items-center w-full bg-[#cfcfcf] text-[#000000]'>
      <div className='flex flex-col items-center sm:max-w-[800px] sm:px-16 px-5 mb-40'> 
        <h2 className='self-start text-2xl sm:text-3xl lg:text-4xl mb-8'>Technical Skills</h2>
        <div>
          <Skill skill={'Languages'} skills={languages}></Skill>
          <Skill skill={'Frontend'} skills={frontend}></Skill>
          <Skill skill={'Backend'} skills={backend}></Skill>
          <Skill skill={'Development Tools'} skills={tools}></Skill>
        </div>
      </div>
    </div>
  )
}

export default TechnicalSkills