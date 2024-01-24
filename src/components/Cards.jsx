import React from 'react'
import Art from '../images/art-icon.png'
import Science from '../images/science-icon.png'
import English from '../images/english-icon.png'
// import ArtNoBG from '../images/art-icon-removebg-preview.png'
// import ScienceNoBG from '../images/science-icon-removebg-preview.png'
// import EnglishNoBG from '../images/english-icon-removebg-preview.png'

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            <img className='w-40 mx-auto mt-[-3rem] bg-white' src={Art} alt='art icon'/>
            <h2 className='text-2xl font-bold text-center py-8'>Art Learning</h2>
            <p className='text-center text-4xl font-bold'>$129</p>
            <div className='text-center font-medium'>
                <p className='py-2 border-b mx-8 mt-8'>40 Hours</p>
                <p className='py-2 border-b mx-8'>Lifetime Access</p>
                <p className='py-2 border-b mx-8'>Certificate of Completion</p>
            </div>
            <button className='bg-[#a07885] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-white'>Start Trial Now</button>
        </div>
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            <img className='w-40 mx-auto mt-[-3rem] bg-white' src={Science} alt='art icon'/>
            <h2 className='text-2xl font-bold text-center py-8'>Science Learning</h2>
            <p className='text-center text-4xl font-bold'>$149</p>
            <div className='text-center font-medium'>
                <p className='py-2 border-b mx-8 mt-8'>50 Hours</p>
                <p className='py-2 border-b mx-8'>Lifetime Access</p>
                <p className='py-2 border-b mx-8'>Certificate of Completion</p>
            </div>
            <button className='bg-[#a07885] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-white'>Start Trial Now</button>
        </div>
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            <img className='w-40 mx-auto mt-[-3rem] bg-white' src={English} alt='art icon'/>
            <h2 className='text-2xl font-bold text-center py-8'>English Learning</h2>
            <p className='text-center text-4xl font-bold'>$139</p>
            <div className='text-center font-medium'>
                <p className='py-2 border-b mx-8 mt-8'>45 Hours</p>
                <p className='py-2 border-b mx-8'>Lifetime Access</p>
                <p className='py-2 border-b mx-8'>Certificate of Completion</p>
            </div>
            <button className='bg-[#a07885] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-white'>Start Trial Now</button>
        </div>
        </div>
    </div>
  )
}

export default Cards