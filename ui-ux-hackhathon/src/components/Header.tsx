import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <div className='w-full  border-b border-[#C4C4C4] pb-6 h-[50px]   mt-[40px] mb-12 mx-auto'>
    <div className='w-[1170px]  flex justify-center items-center gap-[148px] border-b border-[#C4C4C4] pb-6 h-[50px]   mt-[40px] mb-12 mx-auto'>
        <div className='font-bold text-[24px] leading-[24px]'>Exclusive</div>
        <div className='w-[367px] h-[24px] flex gap-[48px]'>
            <Link href='/' className='text-[16px] leading-[24px]'>Home</Link>
            <Link href='/contact' className='text-[16px] leading-[24px]'>Contact</Link>
            <Link href='/about' className='text-[16px] leading-[24px]'>About</Link>
            <Link href='/signUp' className='text-[16px] leading-[24px]'>Sign Up</Link>
        </div>
        <div className='w-[347px] h-[38px] flex gap-[24px]'>
            <Image src='/Search.svg' alt='logo' width={243} height={38}/>
            <Image src='/Frame2.svg' alt='logo' width={80} height={32}/>

        </div>
    </div>
    </div>
  )
}

export default Header