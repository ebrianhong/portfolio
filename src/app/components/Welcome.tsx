import React, { FC } from 'react'

const Welcome:FC = () => {
  return (
    <div className='w-full h-screen bg-[#cfcfcf]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-12 flex flex-col justify-center h-full'>
        <div className='flex justify-center align-center'>
          <div className='mr-5 w-3/5'>
            <h1 className='text-4xl sm:text-7xl font-light text-[#000000] text-right'>
              Brian Hong
            </h1>
          </div>
          <div className='flex flex-col w-2/5 text-[#000000]'>
            <p>Frontend Engineer</p>
            <p>Los Angeles, CA</p>
          </div>
        </div>
      </div>
      <div>

      </div>
    </div>
  );
}

export default Welcome