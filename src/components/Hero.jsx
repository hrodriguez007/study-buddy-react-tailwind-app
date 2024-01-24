import React from 'react';
import { ReactTyped } from "react-typed";


const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-[#a07885] font-bold p-2'>Grow with Study Buddy</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl md:py-6'>Grow with knowledge.</h1>
            <div className='flex justify-center items-center'>
                <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>On track learning for</p>
                {/* //object as an array */}
                {/* //backspeed is how fast it deletes */}
                <ReactTyped  className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2' strings={['ART', 'SCIENCE', 'ENGLISH']} typeSpeed={120} backSpeed={140} loop/>
            </div>
            <p className='md:text-2xl text-xl font-bold text-[#add9c8]'>Look at the advantages of learning for Art, Science, and English.</p>
            <button className='bg-[#a07885] w-[200px] rounded-md font-medium my-6 mx-auto py-3'>Get Started</button>
        </div>
    </div>
  )
}

export default Hero