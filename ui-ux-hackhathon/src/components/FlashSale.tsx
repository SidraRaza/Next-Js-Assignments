import Image from "next/image";
import React from "react";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const ExploreProducts = () => {
  return (
    <>
    <div className="w-[1170px] h-[350px] mx-auto flex flex-col items-center justify-center gap-[30px] my-36">
      <div className="w-[1170px] h-[108px] flex gap-[672px] justify-between items-end flex-row  ">
        <div className="w-[398px] h-[108px] flex flex-col   gap-[20px]">
          <div className="w-[100px] h-[40px] flex flex-row items-center gap-[16px]">
            <Image src="/1.svg" alt="logo" width={20} height={40} />
            <h1 className="text-[16px] font-semibold text-[#DB4444]">Today’s</h1>
          </div>
          <div className="w-[600px] h-[103px] flex flex-row justify-between items-center gap-[87px]">
          <h1 className={`${inter.className} text-[36px] w-[211px] h-[48px] font-semibold leading-[48px]`}>
          Flash Sales
          </h1>
          <Image src="/d5.svg" alt="logo" width={320} height={50} />
          </div>
        
        </div>
        <div className="w-[100px] h-[46px] flex flex-row gap-[8px]">
          <Image src="/2.svg" alt="logo" width={46} height={46} />
          <Image src="/3.svg" alt="logo" width={46} height={46} />
        </div>
      </div>
      <div className="w-[1170px] h-[732px] mx-auto grid gap-[60px]">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-[30px]">
          <div className="grid w-[270px] h-[322px] gap-[16px]">
            <Image src="/f1.svg" alt="logo" width={270} height={250} />
            <h1 className="text-[16px] font-medium">HAVIT HV-G92 Gamepad</h1>
            <h1 className="text-[16px] font-medium text-[#DB4444]">$120 <del className="text-black opacity-50 ml-3">$160</del></h1>

            <Image src="/f2.svg" alt="logo" width={140} height={20} />
          </div>
          <div className="grid w-[270px] h-[322px] gap-[16px]">
            <Image src="/f3.svg" alt="logo" width={270} height={250} />
            <h1 className="text-[16px] font-medium">AK-900 Wired Keyboard</h1>
            <h1 className="text-[16px] font-medium text-[#DB4444]">$960<del className="text-black opacity-50 ml-3">$1160</del></h1>

<Image src="/f5.svg" alt="logo" width={140} height={20} />
          </div>
          <div className="grid w-[270px] h-[322px] gap-[16px]">
            <Image src="/f6.svg" alt="logo" width={270} height={250} />
            <h1 className="text-[16px] font-medium">IPS LCD Gaming Monitor</h1>
            <h1 className="text-[16px] font-medium text-[#DB4444]">$370<del className="text-black opacity-50 ml-3">$400</del></h1>

<Image src="/f7.svg" alt="logo" width={140} height={20} />
          </div>
          <div className="grid w-[270px] h-[322px] gap-[16px]">
            <Image src="/f8.svg" alt="logo" width={270} height={250} />
            <h1 className="text-[16px] font-medium">S-Series Comfort Chair </h1>
            <h1 className="text-[16px] font-medium text-[#DB4444]">$375<del className="text-black opacity-50 ml-3">$400</del></h1>

<Image src="/f9.svg" alt="logo" width={140} height={20} />
          </div>
          {/* 1 */}
        </div>
      </div>
     
    </div>
     <div className="w-[236px] h-[56px] py-[16px] px-[48px] text-center mt-4 mb-[100px] mx-auto flex bg-[#DB4444] rounded-[4px]">
     <h1 className="text-[16px] font-medium text-[#FAFAFA]">
       View All Products
     </h1>
   </div>
   </>
  );
};

export default ExploreProducts;
