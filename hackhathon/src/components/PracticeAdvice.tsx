import Image from "next/image";
import React from "react";

const PracticeAdvice = () => {
  return (
    <div className="w-full lg:h-[1044px]  h-[2302px]">
      <div className="w-full max-w-[1050px] h-[1044px] mx-auto my-[80px]">
        <div className="w-full max-w-[692px] h-[134px] text-center flex justify-center items-center flex-col mx-auto my-[100px]">
          <h1 className="text-[14px] leading-[24px] font-bold text-[#23A6F0]">
            Practice Advice
          </h1>
          <p className="text-[40px] leading-[50px] font-bold text-[#252B42]">
          Featured Posts
          </p>
          <p className="w-full max-w-[469px] h-[40px] text-[14px] leading-[20px] text-[#737373]">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
        </div>
        <div className="w-full max-w-[1045px] h-[606px] flex justify-center items-center gap-[30px] flex-wrap sm:flex-col md:flex-row">
          <div className="w-full sm:w-[326px] h-[606px] flex justify-center items-center flex-col lg:border-2 border-gray-300 lg:mb-8 sm:mb-0 md:mb-0">
            <Image
              src="/p1.svg"
              alt="banner"
              width={348}
              height={300}
              className="w-[348px] h-[300px] lg:mb-12 mb-0"
            />
            <Image
              src="/p2.svg"
              alt="banner"
              width={348}
              height={306}
              className="w-[348px] h-[306px]"
            />
          </div>
          <div className="w-full sm:w-[326px] h-[606px] flex justify-center items-center flex-col lg:border-2 border-gray-300 mb-8 sm:mb-4 md:mb-0">
            <Image
              src="/p3.svg"
              alt="banner"
              width={348}
              height={300}
              className="w-[348px] h-[300px] mb-12"
            />
            <Image
              src="/p2.svg"
              alt="banner"
              width={348}
              height={306}
              className="w-[348px] h-[306px]"
            />
          </div>
          <div className="w-full sm:w-[326px] h-[606px] flex justify-center items-center flex-col lg:border-2 border-gray-300 mb-8 sm:mb-4 md:mb-0">
            <Image
              src="/p4.svg"
              alt="banner"
              width={348}
              height={300}
              className="w-[348px] h-[300px] mb-12"
            />
            <Image
              src="/p2.svg"
              alt="banner"
              width={348}
              height={306}
              className="w-[348px] h-[306px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PracticeAdvice;
