import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <>

<div className='relative lg:w-[1439px] lg:h-[716px]  w-md hidden md:block'>
  <img src='/shop-hero.svg' alt='img' className='absolute inset-0 w-full h-full object-cover' />
  <div className='absolute left-[100px] top-0 w-[50%] h-full flex flex-col justify-center text-white gap-[35px] p-[40px]'>
    <h1 className='text-[16px] leading-[24px] font-bold'>SUMMER 2020</h1>
    <h1 className='text-[58px] leading-[80px] font-bold'>NEW COLLECTION</h1>
    <p className='text-[20px] leading-[30px] w-[376px] h-[60px]'>
      We know how large objects will act, but things on a small scale.
    </p>
    <div className='w-[221px] h-[62px] flex justify-center items-center text-white bg-[#2DC071]'>
      <button className='text-[24px] leading-[32px] font-bold'>Shop Now</button>
    </div>
  </div>
</div>

  
    <div className='w-[414px] h-[753px] md:hidden'>
    <Image
            src={'/h12.svg'}
            alt="img"
            width={414}
            height={753}
            className="w-[414px] h-[753px]"
        />
    </div>
    </>
  )
}

export default Hero