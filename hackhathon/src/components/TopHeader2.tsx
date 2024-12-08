import React from 'react'
import Image from 'next/image'

const TopHeader2 = () => {
  return (
    <div className='hidden md:block'>
    <div className='w-[1439px] h-[58px] bg-[#23856D] flex items-center justify-between px-[60px]'>
        <div className='w-[415px] h-[46px] flex justify-center items-center gap-[10px]'>
<Image src={'/phone2.svg'} alt="img" width={145} height={54} />
<Image src={'/phone3.svg'} alt="img" width={260} height={44}/>
        </div>
        <div className='w-[332px] h-[24px] flex justify-center items-center  gap-[10px]'>
       <h1 className='text-[14px] leading-[24px] font-bold text-white'> Follow Us  and get a chance to win 80% off</h1></div>
       <div className='w-[233px] h-[46px]'>
        <Image src={'/link5.svg'} alt="img" width={233} height={46}/>
       </div>
    </div>
    </div>
  )
}

export default TopHeader2