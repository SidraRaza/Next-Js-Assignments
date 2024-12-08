import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import ResponsiveNav from './ResponsiveNav'

const Header = () => {
  return (
    <>
    <div className='hidden md:block'>
    <div className='w-[1406px] h-[58px] flex items-center justify-between  mt-[20px] mb-[10px] mx-auto'>
        <div className='w-[187px] h-[58px] flex justify-center items-center'>
            <h1 className='text-[24px] leading-[32px] font-bold'>Bandage</h1>
        </div>
        <div className='w-[361px] h-[25px] flex items-center justify-between gap-[30px]'>
            <Link href='/' className='text-[14px] leading-[24px] font-bold text-[#737373]'>Home</Link>
          <div className='w-[63px] h-[25px] flex items-center gap-[10px]'>
          <Link href='/ProductList' className='text-[14px] leading-[24px] font-bold text-[#737373]'>Shop</Link>
          <Image src='/arrow.svg' alt='arrow' width={5.71} height={10} className='w-[5.71px] h-[10px]'/>
          </div>
          <Link href='/about' className='text-[14px] leading-[24px] font-bold text-[#737373]'>About</Link>
          <Link href='#' className='text-[14px] leading-[24px] font-bold text-[#737373]'>Blog</Link>
          <Link href='/contact' className='text-[14px] leading-[24px] font-bold text-[#737373]'>Contact</Link>
          <Link href='#' className='text-[14px] leading-[24px] font-bold text-[#737373]'>Pages</Link>
        </div>
        <div className='w-[324px] h-[54px] flex items-center justify-center gap-[10px]'>
            <Image src={'/login.svg'} alt="cart" width={10} height={10} className='w-[10px] h-[10px]'/>
           <Link href='/' className='text-[14px] leading-[24px] font-bold text-[#23A6F0]'>Login / Register</Link>
           <div className='w-[83px] h-[54px] flex justify-center items-center  text-[#23A6F0] gap-3 ml-[10px]'>
                <Image src={'/s3.svg'} alt="cart" width={24} height={24} className='w-[16px] h-[16px]'/>
                <Image src={'/basket.svg'} alt="cart" width={16} height={16} className='w-[16px] h-[16px]'/>1
                <Image src={'/heart2.svg'} alt="cart" width={16} height={16} className='w-[16px] h-[16px]'/>1
            </div>
            </div>
         
    </div>
    </div>
    <ResponsiveNav/>
    </>
  )
}

export default Header