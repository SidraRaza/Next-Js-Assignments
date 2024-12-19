import Header2 from '@/components/Header2'
import TopHeader2 from '@/components/TopHeader2'
import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <>
    <TopHeader2/>
    <Header2/>
    <div className='w-[1440px] h-[92px] bg-[#FAFAFA] '>
           <div className="w-[1033px] h-[44px] gap-[10px] flex justify-center items-center ">
                  <h1 className="text-[14px] leading-[24px] font-bold text-[#252B42]">
                    Home
                  </h1>
                  <Image
                    src="/arrow2.svg"
                    alt="arrow"
                    width={9}
                    height={16}
                    className="w-[9px] h-[16px]"
                  />
                  <h1 className="text-[14px] leading-[24px] font-bold text-[#252B42]">
                    Pricing
                  </h1>
                </div>
    </div>
    </>
  )
}

export default page