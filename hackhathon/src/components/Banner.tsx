import Image from 'next/image';
import React from 'react';

const Banner = () => {
  return (
    <div className="lg:w-[1440px] lg:h-[709px] w-full h-auto flex lg:flex-row flex-col  text-left items-center bg-[#23856D] px-4">
      {/* Text Section */}
      <div className="lg:w-[1036px] lg:h-[711px] w-full h-auto flex lg:flex-row flex-col justify-center text-white items-center lg:gap-[80px] gap-6 pt-[80px] lg:pt-0 lg:my-0 mx-auto">
        <div className="lg:w-[509px] lg:h-[432px] w-full h-auto flex flex-col items-start gap-4">
          <h1 className="text-[16px] lg:text-[20px] leading-[24px] lg:leading-[30px]">SUMMER 2020</h1>
          <h1 className="text-[40px] lg:text-[58px] leading-[50px] lg:leading-[80px] font-bold">
            Vita Classic Product
          </h1>
          <p className="text-[14px] lg:text-[16px] leading-[20px] lg:leading-[24px]">
            We know how large objects will act, We know how are objects will act, We know
          </p>
          <div className="w-full sm:w-auto flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <h3 className="text-[20px] lg:text-[24px] leading-[28px] lg:leading-[32px] font-bold">$16.48</h3>
            <button className="w-[184px] sm:w-auto bg-[#2DC071] text-white text-[14px] leading-[22px] font-bold lg:px-6 lg:py-3 px-1 py-4 rounded-md">
              ADD TO CART
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="lg:w-[510px] lg:h-[685px] w-full h-auto flex justify-center items-center mt-8 lg:mt-6">
          <Image
            src={'/men1.svg'}
            alt="Product image"
            width={510}
            height={685}
            className="w-full h-auto lg:w-[510px] lg:h-[685px] "
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
