import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Header2 = () => {
  return (
    <div className='border-b border-[#C4C4C4] pb-6 h-[50px]  mx-auto mt-[40px] mb-12'>
    <div className=' w-[1170px] h-[38px] mx-auto '>
    <div className='w-[1170px] h-[38px] flex justify-center items-center gap-[160px]  mx-auto'>
        <div className='font-bold text-[24px] leading-[24px] ml-[-19px]'>Exclusive</div>
        <div className='w-[367px] h-[24px] flex gap-[48px]'>
            <Link href='/' className='text-[16px] leading-[24px]'>Home</Link>
            <Link href='/contact' className='text-[16px] leading-[24px]'>Contact</Link>
            <Link href='/about' className='text-[16px] leading-[24px]'>About</Link>
            <Link href='/signUp' className='text-[16px] leading-[24px]'>Sign Up</Link>
        </div>
      <div className='flex gap-[24px] w-[395] h-[38px]'>
      <div className='w-[347px] h-[38px] flex gap-[10px]'>
            <Image src='/Search.svg' alt='logo' width={243} height={38}/>
           <div className='w-[128px] h-[32px] flex gap-[10px] '>

            <Link href={'/Wishlist'}>
         <Image src='/Wishlist2.svg' alt='logo' width={52} height={52}/>
         </Link>
         <Image src='/cart7.svg' alt='logo' width={32} height={32}/>
           <Image src='/user1.svg' alt='logo' width={32} height={32}/>
           </div>

        </div>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Header2