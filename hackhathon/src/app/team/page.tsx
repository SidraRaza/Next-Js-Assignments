import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const page = () => {
  return (
    <>
  <div className="w-full max-w-[1322px] h-[91px] flex items-center justify-between mx-auto px-4 md:px-0">
  <h1 className="text-[24px] leading-[32px] font-bold text-[#252B42]">
    Bandage
  </h1>

  {/* Navigation Links */}
  <div className="hidden md:flex w-[275px] h-[24px] items-center gap-[21px]">
    <Link
      href="/"
      className="text-[14px] leading-[24px] font-bold text-[#737373]"
    >
      Home
    </Link>
    <Link
      href="/"
      className="text-[14px] leading-[24px] font-bold text-[#737373]"
    >
      Product
    </Link>
    <Link
      href="/"
      className="text-[14px] leading-[24px] font-bold text-[#737373]"
    >
      Pricing
    </Link>
    <Link
      href="/"
      className="text-[14px] leading-[24px] font-bold text-[#737373]"
    >
      Contact
    </Link>
  </div>

  {/* Login and Button */}
  <div className="w-full md:w-[300px] h-[52px] flex justify-end md:justify-center items-center gap-[20px]">
    <Link
      href="/"
      className="text-[14px] leading-[22px] font-bold text-[#23A6F0]"
    >
      Login{" "}
    </Link>
    <Image
      src={"/btn.svg"}
      alt="cart"
      width={214}
      height={52}
      className="hidden md:block w-[214px] h-[52px]"
    />
  </div>
</div>

  <div className='w-[870px] h-[280px] flex items-center flex-col justify-center py-[50px] mx-auto'>
    <h1 className='text-[16px] leading-[24px] font-bold text-[#737373]'>WHAT WE DO</h1>
    <h1 className='text-[58px] leading-[80px] font-bold text-[#252B42]'>Innovation tailored for you</h1>
    <div className='w-[122px] h-[44px] gap-[10px] flex justify-center items-center'>
        <h1 className='text-[14px] leading-[24px] font-bold text-[#252B42]'>Home</h1>
        <Image src={'/arrow2.svg'} alt='arrow' width={9} height={16} className='w-[9px] h-[16px]'/>
        <h1 className='text-[14px] leading-[24px] font-bold text-[#252B42]'>Team</h1>
    </div>
  </div>
  <div className='w-[1440px] h-[530px] flex gap-[24px] mb-[100px]'>
    <Image src={'/b2.svg'} alt='team' width={700} height={530} className='w-[700px] h-[530px]'/>
<div className='w-[725px] h-[260px] flex items-center  justify-center gap-[24px]'>
  <div className='w-[695px] h-[260px] flex flex-col  gap-[24px]'>
    <Image src={'/ba4.svg'} alt='team' width={361} height={260} className='w-[662px] h-[260px]'/>
    <Image src={'/t11.svg'} alt='team' width={361} height={260} className='w-[662px] h-[260px]'/>
  </div>
  <div className='w-[695px] h-[260px] flex  flex-col   gap-[24px]'>
    <Image src={'/t10.svg'} alt='team' width={361} height={260} className='w-[662px] h-[260px]'/>
    <Image src={'/t12.svg'} alt='team' width={361} height={260} className='w-[662px] h-[260px]'/>
  </div>
  </div>
  </div>
  <div className='w-[1440px] h-[1559px] flex gap-[24px] mb-[100px]'>
    <div className='w-[1050px] h-[1759px] flex flex-col gap-[112px] mx-auto'>
        <div className='w-[607px] h-[50px] text-center mx-auto'>
            <h1 className='text-[40px] leading-[50px] font-bold  text-[#252B42]'>Meet Our Team</h1>
        </div>
        <div className='w-[1034px] h-[383px] flex justify-center items-center gap-[30px]'>
            <Image src={'/t1.svg'} alt='team' width={1034} height={383} className='w-[1034px] h-[383px]'/>
            <Image src={'/t2.svg'} alt='team' width={1034} height={383} className='w-[1034px] h-[383px]'/>
            <Image src={'/t3.svg'} alt='team' width={1034} height={383} className='w-[1034px] h-[383px]'/>
        </div>
        <div className='w-[1034px] h-[383px] flex justify-center items-center gap-[30px]'>
            <Image src={'/t4.svg'} alt='team' width={1034} height={383} className='w-[1034px] h-[383px]'/>
            <Image src={'/t5.svg'} alt='team' width={1034} height={383} className='w-[1034px] h-[383px]'/>
            <Image src={'/t6.svg'} alt='team' width={1034} height={383} className='w-[1034px] h-[383px]'/>
        </div>
        <div className='w-[1034px] h-[383px] flex justify-center items-center gap-[30px]'>
            <Image src={'/t7.svg'} alt='team' width={1034} height={383} className='w-[1034px] h-[383px]'/>
            <Image src={'/t8.svg'} alt='team' width={1034} height={383} className='w-[1034px] h-[383px]'/>
            <Image src={'/t9.svg'} alt='team' width={1034} height={383} className='w-[1034px] h-[383px]'/>
        </div>
    </div>
  </div>
  <div className='w-[1440px] h-[442px] flex justify-center flex-col items-center gap-[48px]'>
    <h1 className='text-[40px] leading-[50px] font-bold text-[#252B42]'>Start your 14 days free trial</h1>
    <h1 className='text-[16px] leading-[24px] text-[#737373]'>Met minim Mollie non desert Alamo est sit cliquey dolor 
    do met sent. RELIT official consequent.</h1>
    <div className='w-[186px] h-[52px] gap-[10px] flex justify-center items-center py-[15px] px-[40px] bg-[#23A6F0]'>
        <button className='text-[14px] leading-[22px] font-bold text-white'>Try it free now</button>
    </div>
    <Image src={'/sm.svg'} alt='team' width={242} height={50} className='w-[242px] h-[50px]'/>
  </div>
  </>
  )
}

export default page