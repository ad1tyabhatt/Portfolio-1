import React from 'react';
import realestate from '../assets/portfolio/realestate.png'
const Portfolio = () => {

  let demoUrl = "https://propsale.netlify.app/";
  let githubUrl = "https://github.com/ad1tyabhatt/ecommerce"

  return (
    <div name='portfolio' className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
          <p className='py-6'>Check out some of my work here</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
          <div className='shadow-md shadow-gray-400 rounded-lg hover:scale-110 duration-200'>
            <img src={realestate} alt="img" className='rounded-md duration-200' />
            <div className='flex items-center justify-center'>
              <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-110' onClick={() => window.open(demoUrl, '_blank')}>Demo</button>
              <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-110' onClick={() => window.open(githubUrl, '_blank')}>Code</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio;