import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Header3 = () => {
  return (
    <div className='border-b border-[#C4C4C4] pb-6'>
    <div className='w-[1170px] h-[38px]  flex justify-center items-center gap-[210px] mt-[40px]  mx-auto'>
        <div className='font-bold text-[24px] leading-[24px]'>Exclusive</div>
        <div className='w-[367px] h-[24px] flex gap-[48px]'>
            <Link href='#' className='text-[16px] leading-[24px]'>Home</Link>
            <Link href='#' className='text-[16px] leading-[24px]'>Contact</Link>
            <Link href='#' className='text-[16px] leading-[24px]'>About</Link>
            <Link href='#' className='text-[16px] leading-[24px]'>Sign Up</Link>
        </div>
        <div className='w-[243px] h-[38px] flex gap-[10px]'>
            <Image src='/Search.svg' alt='logo' width={243} height={38}/>
           

        </div>
    </div>
    </div>
  )
}

export default Header3