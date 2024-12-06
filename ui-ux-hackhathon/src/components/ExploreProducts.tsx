import Image from "next/image";
import React from "react";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const ExploreProducts = () => {
  return (
    <div className="w-[1170px] h-[1016px] mx-auto flex flex-col items-center justify-center gap-[60px]">
      <div className="w-[1170px] h-[108px] flex gap-[672px] justify-between items-end flex-row  ">
        <div className="w-[398px] h-[108px] flex flex-col   gap-[20px]">
          <div className="w-[142px] h-[40px] flex flex-row items-center gap-2">
            <Image src="/1.svg" alt="logo" width={20} height={40} />
            <h1 className="text-[16px] font-semibold text-[#DB4444]">Our Products</h1>
          </div>
          <h1 className={`${inter.className} text-[36px] font-semibold`}>
            Explore Our Products
          </h1>
        </div>
        <div className="w-[100px] h-[46px] flex flex-row gap-[8px]">
          <Image src="/2.svg" alt="logo" width={46} height={46} />
          <Image src="/3.svg" alt="logo" width={46} height={46} />
        </div>
      </div>
      <div className="w-[1170px] h-[732px] mx-auto grid gap-[60px]">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-[30px]">
          <div className="grid w-[270px] h-[322px] gap-[16px]">
            <Image src="/4.svg" alt="logo" width={270} height={250} />
            <h1 className="text-[16px] font-medium">Breed Dry Dog Food</h1>
            <Image src="/5.svg" alt="logo" width={185} height={24} />
          </div>
          <div className="grid w-[270px] h-[322px] gap-[16px]">
            <Image src="/6.svg" alt="logo" width={270} height={250} />
            <h1 className="text-[16px] font-medium">CANON EOS DSLR Camera</h1>
            <Image src="/9.svg" alt="logo" width={185} height={24} />
          </div>
          <div className="grid w-[270px] h-[322px] gap-[16px]">
            <Image src="/7.svg" alt="logo" width={270} height={250} />
            <h1 className="text-[16px] font-medium">ASUS FHD Gaming Laptop</h1>
            <Image src="/10.svg" alt="logo" width={185} height={24} />
          </div>
          <div className="grid w-[270px] h-[322px] gap-[16px]">
            <Image src="/8.svg" alt="logo" width={270} height={250} />
            <h1 className="text-[16px] font-medium">Curology Product Set </h1>
            <Image src="/11.svg" alt="logo" width={185} height={24} />
          </div>
          {/* 1 */}
        </div>

        <div className="w-[1170px] h-[732px] mx-auto grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-[30px] ">
          <div className="grid w-[270px] h-[322px] gap-[16px]">
            <Image src="/12.svg" alt="logo" width={270} height={250} />
            <h1 className="text-[16px] font-medium">Kids Electric Car</h1>
            <Image src="/13.svg" alt="logo" width={185} height={24} />
            <div className="w-[48px] h-[20px] flex gap-[8px]">
              <Image src="/14.svg" alt="logo" width={20} height={20} />
              <Image src="/15.svg" alt="logo" width={20} height={20} />
            </div>
          </div>
          <div className="grid w-[270px] h-[322px] gap-[16px]">
            <Image src="/17.svg" alt="logo" width={270} height={250} />
            <h1 className="text-[16px] font-medium">Jr. Zoom Soccer Cleats</h1>
            <Image src="/16.svg" alt="logo" width={185} height={24} />
            <div className="w-[48px] h-[20px] flex gap-[8px]">
              <Image src="/18.svg" alt="logo" width={20} height={20} />
              <Image src="/15.svg" alt="logo" width={20} height={20} />
            </div>
          </div>
          <div className="grid w-[270px] h-[322px] gap-[16px]">
            <Image src="/19.svg" alt="logo" width={270} height={250} />
            <h1 className="text-[16px] font-medium">
              GP11 Shooter USB Gamepad
            </h1>
            <Image src="/20.svg" alt="logo" width={185} height={24} />
            <div className="w-[48px] h-[20px] flex gap-[8px]">
              <Image src="/21.svg" alt="logo" width={20} height={20} />
              <Image src="/15.svg" alt="logo" width={20} height={20} />
            </div>
          </div>
          <div className="grid w-[270px] h-[322px] gap-[16px] ">
            <Image src="/22.svg" alt="logo" width={270} height={250} />
            <h1 className="text-[16px] font-medium">Quilted Satin Jacket </h1>
            <Image src="/23.svg" alt="logo" width={185} height={24} />
            <div className="w-[48px] h-[20px] flex gap-[8px]">
              <Image src="/24.svg" alt="logo" width={20} height={20} />
              <Image src="/15.svg" alt="logo" width={20} height={20} />
            </div>
          </div>
        </div>
      </div>

      <div className="w-[236px] h-[56px] py-[16px] px-[48px] text-center flex bg-[#DB4444] rounded-[4px]">
        <h1 className="text-[16px] font-medium text-[#FAFAFA]">
          View All Products
        </h1>
      </div>
    </div>
  );
};

export default ExploreProducts;
