import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Header2 = () => {
  return (
    <div className='w-[1170px] h-[38px] flex justify-center items-center gap-[130px] mt-[40px] my-[30] mx-auto'>
        <div className='font-bold text-[24px] leading-[24px]'>Exclusive</div>
        <div className='w-[367px] h-[24px] flex gap-[48px]'>
            <Link href='#' className='text-[16px] leading-[24px]'>Home</Link>
            <Link href='#' className='text-[16px] leading-[24px]'>Contact</Link>
            <Link href='#' className='text-[16px] leading-[24px]'>About</Link>
            <Link href='#' className='text-[16px] leading-[24px]'>Sign Up</Link>
        </div>
        <div className='w-[347px] h-[38px] flex gap-[24px]'>
            <Image src='/Search.svg' alt='logo' width={243} height={38}/>
           <div className='w-[128px] h-[32px] flex gap-[16px] '>
         <Image src='/Wishlist2.svg' alt='logo' width={32} height={32}/>
         <Image src='/cart6.svg' alt='logo' width={32} height={32}/>
           <Image src='/user.svg' alt='logo' width={32} height={32}/>
           </div>

        </div>
    </div>
  )
}

export default Header2