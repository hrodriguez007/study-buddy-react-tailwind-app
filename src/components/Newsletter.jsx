import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white px-4'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2 my-4'>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Want to learn more about us?</h1>
            <p>Sign up to our newsletter to see what we are all about.</p>
        </div>
            <div className='my-4'>
                <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                    <input className='p-3 flex w-full rounded-md' type='email' placeholder='Enter Email Address'/>
                    <button className='bg-[#a07885] w-[200px] rounded-md font-medium ml-5 my-6 px-6 py-3'>Notify Me</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Newsletter