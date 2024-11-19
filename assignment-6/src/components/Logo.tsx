import React from 'react';
import Image from 'next/image';

const Logo = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:w-[1280px] lg:h-[228px] w-[428px] h-[239.34px] justify-center items-center space-y-4 lg:space-y-0 lg:space-x-4 lg:bg-[#F7F7F7] bg-white p-4  ">
      {/* Text Section */}
      <div className="w-[428px] h-[54px] mx-auto lg:w-[350px] lg:mb-14 mb-0 mt-[48px] lg:mt-0 items-center text-left lg:text-left font-bold text-[18px] lg:text-[24px] sm:px-[16px] px-0 sm:py-[48px] py-0">
      <h1> Trusted by the world's best companies</h1>
     <h1 className='lg:hidden block'>[social proof to build credibility]</h1>
      </div>

      {/* Logo Section */}
      <div className=" text-left lg:items-center gap-4 w-[428px] grid lg:grid-cols-6 grid-cols-3 pt-[16px]  lg:w-[880px] mx-auto">
        <Image
          src="/Airbnb Logo.svg"
          alt="Google"
          width={123.8}
          height={38.52}
          className="w-[80px] lg:w-auto h-auto"
        />
        <Image
          src="/Airbnb Logo2.svg"
          alt="Microsoft"
          width={123.8}
          height={38.52}
          className="w-[80px] lg:w-auto h-auto"
        />
        <Image
          src="/Airbnb Logo3.svg"
          alt="Apple"
          width={123.8}
          height={38.52}
          className="w-[80px] lg:w-auto h-auto"
        />
        <Image
          src="/Airbnb Logo4.svg"
          alt="Amazon"
          width={123.8}
          height={38.52}
          className="w-[80px] lg:w-auto h-auto"
        />
        <Image
          src="/Airbnb Logo5.svg"
          alt="Facebook"
          width={123.8}
          height={38.52}
          className="w-[80px] lg:w-auto h-auto"
        />
        <Image
          src="/Airbnb Logo6.svg"
          alt="Facebook"
          width={123.8}
          height={38.52}
          className="w-[80px] lg:w-auto h-auto"
        />
      </div>
    </div>
  );
};

export default Logo;
