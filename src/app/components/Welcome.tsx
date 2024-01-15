import React, { FC } from 'react'

const calculate = () => {
  const year = new Date().getFullYear()

  return year - 2019
}

const Welcome:FC = () => {
  return (
    <div className='w-full h-screen bg-[#cfcfcf]'>
      <div className='max-w-[1000px] mx-auto px-12 flex flex-col justify-center h-full'>
        <div className='flex justify-center align-center mb-10 flex-col sm:flex-row'>
          <div className='mr-10 w-100 sm:w-1/2'>
            <h1 className='text-4xl sm:text-7xl font-light text-[#000000] text-left sm:text-right'>
              Brian Hong
            </h1>
          </div>
          <div className='flex flex-col w-100 sm:w-1/2 pt-4 text-[#000000] text-sm sm:text-base'>
            <div className='mb-5'>
              <p>Frontend Engineer</p>
              <p>Los Angeles, CA</p>
            </div>
            <div>
              <p className='text-[#000000]'>
                Hello, I am a <span className='text-[#fb5656]'>Frontend Engineer</span> from Los Angeles with {calculate()}+ years of professional experience and a strong foundation in frontend technologies.
                I am passionate about writing clean and concise code and delivering fast, reliable, and inclusive web experiences for users.
              </p>
              
            </div>
          </div>
        </div>
      </div>
      <div>

      </div>
    </div>
  );
}

export default Welcome