import React from 'react';
import {MdKeyboardArrowRight} from 'react-icons/md';
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black to-gray-800 text-white'>
    <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
      <div className='flex flex-col justify-center h-full'>
        <h2 className='text-4xl sm:text-6xl font-bold text-white'>
          I'm a Full Stack Developer
        </h2>
        <p className='text-gray-500 py-4 max-w-md'>
        I’m a full-stack developer enthusiasts keen to build exceptional digital experiences. Currently, I’m focused on building responsive full-stack web applications and projects of my own.
        </p>
        <div>
        <Link
        to='portfolio' smooth duration={500}
className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-600 cursor-pointer'>
        Portfolio
          <span className='group-hover:rotate-90 duration-150'>
        <MdKeyboardArrowRight size={22} className="pl-1"/>
          </span>
        </Link>
        </div>
      </div>
    </div>

    </div>
  )
}

export default Home