import Header2 from '@/components/Header2'
import React from 'react'
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const page = () => {
  return (
    <>
<Header2/>

<div className="w-[114px] h-[21px] flex  gap-[12px]">
          <div className="flex gap-[12px] ml-[135px] ">
            <h1 className="text-[16px] leading-[24px] opacity-50">Home</h1>/
            <h1 className="text-[16px] leading-[24px]">404 Error</h1>
          </div>
        </div>
        <div className='w-full h-screen flex flex-col justify-center items-center'> 
        <div className='w-[829px]  h-[179px] gap-[40px] flex flex-col justify-center items-center mx-auto'>
            <h1 className={`${inter.className} text-[110px] font-medium leading-[115px]`}>
            404 Not Found
            </h1>
            <h1 className='text-[16px] leading-[24px] '>Your visited page not found. You may go home page.</h1>
            
            </div> 
            <div className='w-[254px] h-[56px] flex mt-[62px] justify-center items-center gap-[10px] py-[16px] px-[48px] rounded-[4px] bg-[#DB4444]'>
<button className='text-[16px] leading-[24px] font-medium  text-white'>Back to home page</button>
            </div>
</div>
    </>
  )
}

export default page