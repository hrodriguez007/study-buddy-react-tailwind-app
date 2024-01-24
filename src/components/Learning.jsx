import React from 'react'
import Collegestudents from '../images/collegestudent-study.jpg'

const Learning = () => {
  return (
    <div className=' w-full bg-white py-16 px-4'>
    <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
    <img className='w-[500px] mx-auto my-4' src={Collegestudents} alt='college students studying together'/>
    <div className='flex flex-col justify-center'>
        <p className='text-[#a07885] font-bolc'>LEARNING DASHBOARD</p>
        <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Study Buddy to the Rescue</h1>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel facilisis volutpat est velit egestas dui id. Vel pharetra vel turpis nunc eget. 
        </p>
        <button className='bg-[#a07885] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-white'>Get Started</button>
    </div>

    </div>

    </div>
  )
}

export default Learning