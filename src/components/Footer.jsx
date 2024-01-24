import React from 'react'
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-500'>
        <div>
        <h1 className='w-full text-3xl font-bold text-[#a07885]'>STUDY BUDDY.</h1>
        <p className='py-4'>Lorem vitae tortor condimentum lacinia quis vel eros. Id diam maecenas ultricies mi. At tempor commodo ullamcorper a lacus vestibulum.</p>
            <div className='flex justify-between md:w-[75%] my-6'>
                <FaFacebookSquare size={30} />
                <FaInstagram size={30} />
                <FaTwitterSquare size={30} />
                <FaGithubSquare size={30} />
                <FaDribbbleSquare size={30} />
            </div>
        </div>
        <div className='lg:col-span-2 flex justify-between mt-6'>
            <div>
                <h6 className='font-medium text-gray-200'>Company</h6>
                    <ul>
                        <li className='py-2 text-sm'>About</li>
                        <li className='py-2 text-sm'>Blog</li>
                        <li className='py-2 text-sm'>Jobs</li>
                        <li className='py-2 text-sm'>Press</li>
                        <li className='py-2 text-sm'>Careers</li>
                    </ul>
            </div>
            <div>
                <h6 className='font-medium text-gray-200'>Popular</h6>
                    <ul>
                        <li className='py-2 text-sm'>Art Learning</li>
                        <li className='py-2 text-sm'>Science Learning</li>
                        <li className='py-2 text-sm'>English Learning</li>
                    </ul>
            </div>
            <div>
                <h6 className='font-medium text-gray-200'>Reviews</h6>
                    <ul>
                        <li className='py-2 text-sm'>College School</li>
                        <li className='py-2 text-sm'>College School</li>
                        <li className='py-2 text-sm'>College School</li>
                        <li className='py-2 text-sm'>College School</li>
                    </ul>
            </div>
            <div>
                <h6 className='font-medium text-gray-200'>Support</h6>
                    <ul>
                        <li className='py-2 text-sm'>Pricing</li>
                        <li className='py-2 text-sm'>Trial</li>
                        <li className='py-2 text-sm'>Help Desk</li>
                    </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer