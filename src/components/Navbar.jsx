import React, {useState} from 'react'
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";


const Navbar = () => {
    const [nav, setNav] = useState(false)

    //run this function eveytime menu is clicked
    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div className=' flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
        <h1 className='w-full text-3xl font-bold text-[#a07885]'>STUDY BUDDY.</h1>
        {/* //be hidden until above medium then flex */}
            <ul className='hidden md:flex'>
                <li className='p-4'>Home</li>
                <li className='p-4'>Company</li>
                <li className='p-4'>Learn</li>
                <li className='p-4'>About</li>
                <li className='p-4'>Contact</li>
            </ul>
            {/* //anything above medium break-point, don't show the mobile menu */}
            <div onClick={handleNav} className='block md:hidden'>
            {/* //if nav is true show AiOutlineClose
            can toggle between lines and x for mobile menu */}
                {nav ? <AiOutlineClose size= {20}/> : <AiOutlineMenu size={20}/>}
                
            </div>
            {/* //if nav is true then hide it */}
            <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-200 bg-[#9cadce] ease-in-out duration-500' : 'fixed left-[-100%]'}>
            <h1 className='w-full text-3xl font-bold text-[#a07885] m-4'>STUDY BUDDY.</h1>
                <ul className='uppercase p-4'>
                    <li className='p-4 border-b border-gray-500'>Home</li>
                    <li className='p-4 border-b border-gray-500'>Company</li>
                    <li className='p-4 border-b border-gray-500'>Learn</li>
                    <li className='p-4 border-b border-gray-500'>About</li>
                    <li className='p-4'>Contact</li>
                </ul>
            </div>
    </div>
  )
}

export default Navbar