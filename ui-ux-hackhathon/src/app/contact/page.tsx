import Header2 from '@/components/Header2'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <>
<Header2/>
<div className="w-[114px] h-[21px] flex  gap-[12px]">
          <div className="flex gap-[12px] ml-[135px] ">
            <h1 className="text-[16px] leading-[24px] opacity-50">Home</h1>/
            <h1 className="text-[16px] leading-[24px]">Contact</h1>
          </div>
        </div>
        <div className='w-[1440px] h-[609px] flex justify-center items-center gap-[32px] mx-auto'>
{/* left side */}
<div className='w-[340px] h-[457px] rounded-[4px] border-[1px] shadow-md border-opacity-70 p-12 flex flex-col justify-center items-center  '>
    <div className='w-[270px] h-[366px] gap-[25px] flex flex-col justify-center items-start'>
<Image src='/c1.svg' alt='logo' width={135} height={40} className='w-[135px] h-[40px] '/>
<h1 className='text-[14px]  leading-[21px]'>We are available 24/7, 7 days a week.</h1>
<h1>Phone: +8801611112222</h1>
<h1 className='w-[270px] border border-black h-[1px] border-opacity-50'></h1>
<Image src='/c1.svg' alt='logo' width={135} height={40}/>
<h1 className='text-[14px] w-[240px] h-[42px]  leading-[21px]'>Fill out our form and we will contact you within 24 hours.</h1>
<h1 className='w-[232px] h-[21px] text-[14px] leading-[21px]'>Emails: customer@exclusive.com</h1>
<h1 className='w-[232px] h-[21px] text-[14px] leading-[21px]'>Emails: support@exclusive.com</h1>
</div>
</div>
<div className="w-[800px] h-[457px] border-[1px] shadow-md border-opacity-70 ">
    <div className="w-[737px] h-[377px] p-[31px] flex flex-col gap-[32px]">
        <div className="w-[737px] h-[50px] flex gap-[16px]">
            <div className="w-[335px] h-[50px] flex justify-center bg-[#F5F5F5] items-center">
                <input placeholder="Your Name *" className="text-[16px] h-[50px] w-full pl-4 bg-[#F5F5F5] leading-[24px]"/>
            </div>
            <div className="w-[335px] h-[50px] flex justify-center bg-[#F5F5F5] items-center">
                <input placeholder="Your Email *" className="text-[16px] bg-[#F5F5F5] h-[50px] w-full pl-4 leading-[24px]"/>
            </div>
            <div className="w-[335px] h-[50px] flex justify-center bg-[#F5F5F5] items-center">
                <input placeholder="Your Phone *" className="text-[16px] bg-[#F5F5F5] h-[50px] w-full pl-4 leading-[24px]"/>
            </div>
        </div>
        <div className="w-[737px] h-[207px] flex">
            <textarea 
                name="Your Message" 
                id="Your Message" 
                cols={30} 
                rows={10} 
                placeholder="Your Message *" 
                className="bg-[#F5F5F5] w-[737px] h-[207px] p-3"
            ></textarea>
        </div>
        <div className="flex justify-end ml-[60px]  w-full">
            <button className="w-[215px] h-[56px] rounded-[4px] bg-[#DB4444] text-[16px] leading-[24px] font-medium text-white">
                Send Message
            </button>
        </div>
    </div>
</div>


        </div>
    </>
  )
}

export default page