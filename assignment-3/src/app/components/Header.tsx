import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div className='bg-purple-400 p-5 '>
     <div className='flex flex-col-1 justify-end lg:gap-4 gap-0  '>
        <div>
        <h1 className='text-white lg:mr-[750px] mr-0 text-2xl ml-3 pl-2'>Porfolio</h1>
        </div>
     <Link href="#" className='text-white ml-3 sm:text-1xl rounded-lg hover:bg-purple-200 hover:text-black border-1 border-white  lg:px-4 px-2 py-2   '>Home</Link>
      <Link href="#" className='text-white sm:text-1xl rounded-lg hover:bg-purple-200 border-1 hover:text-black  border-white  lg:px-4 px-2 py-2   '>About</Link>
      <Link href="#" className='text-white sm:text-1xl rounded-lg hover:bg-purple-200 border-1 hover:text-black  border-white  lg:px-4 px-2 py-2   '>Contact</Link>
      <Link href="#" className='text-white sm:text-1xl rounded-lg hover:bg-purple-200 hover:text-black  border-1 border-white  lg:px-4 px-2 py-2   '>Services</Link>
     </div>
    </div>
  )
}

export default Header
