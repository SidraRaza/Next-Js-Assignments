import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <>
    <div className='lg:w-[1439px] lg:h-[716px]  w-md hidden md:block'>
        <Image
            src={'/h11.svg'}
            alt="img"
            width={1439}
            height={716}
            className="lg:w-[1439px] h-[716px] w-md"
        />
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