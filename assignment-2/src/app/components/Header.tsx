import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div className='bg-gray-700 p-6 '>
     <div className='flex flex-col-1 justify-end gap-4  '>
        <div>
        <h1 className='text-white mr-[750px] text-2xl'>Porfolio</h1>
        </div>
     <Link href="/" className='text-black rounded-lg hover:bg-gray-600 border-1 border-white bg-white px-4 py-2 hover:text-white  '>Home</Link>
      <Link href="/About" className='text-black rounded-lg hover:bg-gray-600 border-1 border-white bg-white px-4 py-2 hover:text-white  '>About</Link>
      <Link href="/Contact" className='text-black rounded-lg hover:bg-gray-600 border-1 border-white bg-white px-4 py-2 hover:text-white  '>Contact</Link>
      <Link href="/Contact/Services" className='text-black rounded-lg hover:bg-gray-600 border-1 border-white bg-white px-4 py-2 hover:text-white  '>Services</Link>
     </div>
    </div>
  )
}

export default Header