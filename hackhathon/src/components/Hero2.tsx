import React from 'react'
import Image from 'next/image'

const Hero2 = () => {
  return (
    <>
    <div className='w-[1440px] h-[770px] bg-[#FAFAFA] hidden md:block'>
        <div className='w-[1050px] h-[770px] py-[60px] mx-auto'>
            <div className='text-center text-[24px] leading-[32px] font-bold text-[#252B42]'>
           <h1 className='text-[24px] leading-[62px]'> EDITOR’S PICK</h1>
           <h1 className='text-[14px] leading-[20px] text-[#737373]'>Problems trying to resolve the conflict between </h1>
            </div>
            <Image src={'/h2.svg'} alt="img" width={1050} height={500} className='w-[1050px] h-[500px] mt-12'/>
        </div>
    </div>
   
    <div className='w-[414px] h-[1850px] bg-[#FAFAFA] md:hidden block'>
        <div className='w-[333px] h-[1850px] mx-auto'>
<div className='w-[333px] h-[82px] text-center py-[100px]'>
    <h1 className='text-[24px] leading-[54px] font-bold text-[#252B42]'>EDITOR’S PICK</h1>
    <h1 className='text-[14px] leading-[20px] w-[196px] mx-auto text-[#737373]'>Problems trying to resolve 
    the conflict between </h1>
</div>
<div className='w-[325px] h-[500px]'>
            <Image src={'/h5.svg'} alt="img" width={324} height={500} className='w-full h-[500px] mt-6'/>
        </div>
        <div className='w-[325px] h-[500px]'>
            <Image src={'/h6.svg'} alt="img" width={324} height={500} className='w-full h-[500px] mt-6'/>
        </div>
        <div className='w-[325px] h-[500px]'>
            <Image src={'/h9.svg'} alt="img" width={324} height={500} className='w-full h-[500px] mt-6'/>
        </div>
       
        </div>
      
       
    </div>
 
    </>
  )
}

export default Hero2