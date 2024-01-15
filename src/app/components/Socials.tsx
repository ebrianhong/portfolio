import React, { FC } from 'react'
import {
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Socials:FC = () => {
  return (
    <div className='fixed w-full h-20 flex justify-between items-center px-12 bg-[#000000] text-gray-300'>

    <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
      <ul>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#5a5a5a] px-4'>
          <a className='flex justify-between items-center w-full text-gray-300' href='https://www.linkedin.com/in/bghong/' target='_blank' rel='noreferrer'> 
            Linkedin <FaLinkedin size={30} />
          </a>
        </li>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#5a5a5a] px-4'>
          <a className='flex justify-between items-center w-full text-gray-300' href='https://github.com/ebrianhong' target='_blank' rel='noreferrer'>
            Github <FaGithub size={30} />
          </a>
        </li>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#5a5a5a] px-4'>
          <a className='flex justify-between items-center w-full text-gray-300' href='mailto:ebrianhong@gmail.com' target='_blank' rel='noreferrer'>
            Email <HiOutlineMail size={30} />
          </a>
        </li>
        <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#5a5a5a] px-4'>
          <a className='flex justify-between items-center w-full text-gray-300' href='/Resume_Hong_Brian.pdf' target='_blank' rel='noreferrer'>
            Resume <BsFillPersonLinesFill size={30} />
          </a>
        </li>
      </ul>
    </div>
    </div>
  )
}

export default Socials