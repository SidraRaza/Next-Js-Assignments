import React from 'react';
import Image from 'next/image';

const Banner2 = () => {
  return (
    <div className="w-full lg:w-[1440px] h-auto lg:h-[682px]">
      <div className="flex justify-center items-center mx-auto flex-col lg:flex-row">

        {/* Image Section (Stays on the Left on Large Screens, Below Text on Small Screens) */}
        <div className="w-full lg:w-[707px] h-auto lg:h-[682px] order-1 lg:order-1">
          <Image
            src="/b4.svg"
            alt="banner"
            width={707}
            height={682}
            className="hidden lg:block"
          />
            <Image
            src="/b3.svg"
            alt="banner"
            width={414}
            height={407}
            className="md:hidden block"
          />
        </div>

        {/* Text Section (Appears Below the Image on Small Screens, Next to the Image on Large Screens) */}
        <div className="w-full lg:w-[573px] h-auto lg:h-[326px] flex flex-col lg:gap-[30px] gap-2 p-4 lg:p-0 order-2 lg:order-2">
          <h1 className="text-[16px] lg:text-[16px] leading-[24px] font-bold text-[#BDBDBD]">
            SUMMER 2020
          </h1>
          <h1 className="text-[32px] lg:text-[40px] w-[375px] h-[100px] leading-[40px] lg:leading-[50px] font-bold text-[#252B42]">
            Part of the Neural Universe
          </h1>
          <h3 className="text-[16px] lg:text-[20px] w-[375px] h-[100px] leading-[24px] lg:leading-[30px] text-[#737373]">
            We know how large objects will act, but things on a small scale.
          </h3>

          <div className="w-full lg:w-[339px] h-[52px] flex lg:justify-between justify-center items-center lg:gap-[10px] gap-[10px] mt-4 ">
            <div className="lg:w-[158px] w-[140px] flex justify-center bg-[#2DC071] text-white text-[14px] leading-[22px] font-bold lg:px-[40px] lg:py-[10px] px-6 py-3 rounded-md">
              <button className="sm:w-[100px] w-[152px] h-[42px]">BUY NOW</button>
            </div>
            <div className="lg:w-[173px] w-[150px] flex justify-center border border-[#2DC071] bg-white text-[#2DC071] text-[14px] leading-[22px] font-bold lg:px-[40px] lg:py-[10px] px-3 py-2 rounded-md">
              <button className="sm:w-[130px] w-[173px] h-[42px]">READ MORE</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Banner2;
