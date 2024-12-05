import Image from 'next/image'
import React from 'react'

const Customer = () => {
  return (
    <div className='w-[943px] h-[161px] flex justify-between items-center gap-[88px] mx-auto my-[80px]'>
        <div className='w-[249px] h-[161px] flex flex-col justify-center items-center gap-[16px]'>
            <Image src='/Services.svg' alt='logo' width={80} height={80}/>
            <h1 className='text-[20px] font-semibold leading-[28px]'>FREE AND FAST DELIVERY</h1>
            <h1 className='text-[14px] leading-[21px]'>Free delivery for all orders over $140</h1>
        </div>
        <div className='w-[249px] h-[161px] flex flex-col justify-center items-center gap-[16px]'>
            <Image src='/Services2.svg' alt='logo' width={80} height={80}/>
            <h1 className='text-[20px] font-semibold leading-[28px]'>24/7 CUSTOMER SERVICE</h1>
            <h1 className='text-[14px] leading-[21px]'>Friendly 24/7 customer support</h1>
        </div>
        <div className='w-[249px] h-[161px] flex flex-col justify-center items-center gap-[16px]'>
            <Image src='/Services3.svg' alt='logo' width={80} height={80}/>
            <h1 className='text-[19px] font-semibold leading-[28px]'>MONEY BACK GUARANTEE</h1>
            <h1 className='text-[14px] leading-[21px]'>We reurn money within 30 days</h1>
        </div>
        
    </div>
  )
}

export default Customer