import Image from 'next/image'
import React from 'react'
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const Featured = () => {
  return (
    <>
    <div className='w-[1170px] h-[768px] mx-auto flex flex-col gap-[60px] my-[100px]'>
        <div className='flex flex-col gap-[20px] w-[216px] h-[108px]'>
        <div className='w-[110px] h-[40px] flex justify-center items-center gap-[16px]'>
        <Image src='/1.svg' alt=' logo' width={20} height={40}/>
        <h1 className='text-[16px] font-semibold text-[#DB4444]'>Featured</h1>
        </div>
        <div className={`${inter.className} text-[36px] font-semibold`}>New Arrival</div>
        </div>
<div className='flex justify-center items-center w-[1170px] h-[600px] gap-[30px]'>
<div className='w-[570px] h-[600px] flex flex-col gap-[16px]'>
<Image src='/Frame-684.svg' alt='logo' width={570} height={600}/>
</div>
<div className='w-[570px] h-[600px] flex flex-col justify-center items-center gap-[32px]'>
<div className='w-[570px] h-[284px] flex  gap-[16px]'>
<Image src='/Frame-685.svg' alt='logo' width={570} height={284}/>
</div>
<div className='flex flex-cols-1 w-[570px] h-[600px] gap-[30px]'>
<Image src='/Frame-686.svg' alt='logo' width={270} height={284}/>
<Image src='/Frame-687.svg' alt='logo' width={270} height={284}/>
</div>
</div>

</div>
    </div>
    
 
  </>
  )
}

export default Featured