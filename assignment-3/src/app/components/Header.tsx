import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
<<<<<<< HEAD
    <div className='bg-purple-400 p-5 '>
     <div className='flex flex-col-1 justify-end lg:gap-4 gap-0  '>
        <div>
        <h1 className='text-white lg:mr-[750px] mr-0 text-2xl ml-3 pl-2'>Porfolio</h1>
=======
    <div className="bg-purple-500 p-6 shadow-lg">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center justify-between">
     
        <h1 className="text-white text-3xl font-bold lg:text-4xl">Portfolio</h1>
      
        <div className="mt-4 lg:mt-0 flex space-x-4">
          <Link href="/" className="text-white text-lg rounded-lg hover:bg-purple-200 hover:text-black border border-white px-4 py-2 transition duration-300">
            Home
          </Link>
          <Link href="/About" className="text-white text-lg rounded-lg hover:bg-purple-200 hover:text-black border border-white px-4 py-2 transition duration-300">
            About
          </Link>
        
          <Link href="/services" className="text-white text-lg rounded-lg hover:bg-purple-200 hover:text-black border border-white px-4 py-2 transition duration-300">
            Services
          </Link>
>>>>>>> a1f40df (first commit)
        </div>
      </div>
    </div>
  )
}

export default Header
