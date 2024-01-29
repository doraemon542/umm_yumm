import React from 'react'
import { FaDribbbleSquare, FaFacebookSquare, FaGithubSquare, FaInstagram, FaTwitterSquare,  } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='max-w-[1900px] m-auto px-4 py-2 bg-[#24262b]'>
        <div className='py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
            <div>
                <h1 className='w-full text-3xl font-bold text-orange-500'>Umm Yumm</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <div className='flex justify-between md:w-[75%] my-6'>
                    <FaFacebookSquare size={30}/>
                    <FaInstagram size={30}/>
                    <FaTwitterSquare size={30}/>
                    <FaGithubSquare size={30}/>
                    <FaDribbbleSquare size={30}/>
                </div>
            </div>
            <div className='lg:col-span-2 flex justify-between mt-6 lg:ml-10'>
                <div>
                    <h6 className='font-medium text-[#9b9b9b]'>Location</h6>
                    <ul>
                        <li className='py-2 text-sm'>Japan</li>
                        <li className='py-2 text-sm'>Korea</li>
                        <li className='py-2 text-sm'>USA</li>
                        <li className='py-2 text-sm'>Canada</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-[#9b9b9b]'>Location</h6>
                    <ul>
                        <li className='py-2 text-sm'>Japan</li>
                        <li className='py-2 text-sm'>Korea</li>
                        <li className='py-2 text-sm'>USA</li>
                        <li className='py-2 text-sm'>Canada</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-[#9b9b9b]'>Location</h6>
                    <ul>
                        <li className='py-2 text-sm'>Japan</li>
                        <li className='py-2 text-sm'>Korea</li>
                        <li className='py-2 text-sm'>USA</li>
                        <li className='py-2 text-sm'>Canada</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-[#9b9b9b]'>Location</h6>
                    <ul>
                        <li className='py-2 text-sm'>Japan</li>
                        <li className='py-2 text-sm'>Korea</li>
                        <li className='py-2 text-sm'>USA</li>
                        <li className='py-2 text-sm'>Canada</li>
                    </ul>
                </div>
            </div>
        </div>      
    </div>
  )
}

export default Footer
