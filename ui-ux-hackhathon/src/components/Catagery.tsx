import Image from "next/image";
import React from "react";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const Catagery = () => {
  return (
    <div className="w-[1170px] h-[453px] border-t  border-b border-gray-200 mx-auto flex flex-col  items-center justify-center gap-[60px]">
      <div className="w-[1170px] h-[108px] flex gap-[691px] justify-between items-end flex-row  ">
        <div className="w-[398px] h-[108px] flex flex-col   gap-[20px]">
          <div className="w-[142px] h-[40px] flex flex-row items-center gap-2">
            <Image src="/1.svg" alt="logo" width={20} height={40} />
            <h1 className="text-[16px] font-semibold text-[#DB4444]">Categories</h1>
          </div>
          <h1 className={`${inter.className} text-[36px] font-semibold`}>
          Browse By Category
          </h1>
        </div>
        <div className="w-[100px] h-[46px] flex flex-row gap-[8px]">
          <Image src="/2.svg" alt="logo" width={46} height={46} />
          <Image src="/3.svg" alt="logo" width={46} height={46} />
        </div>
      </div>
      <div className="w-[1170px] h-[145px] flex gap-[30px] justify-between items-center">
        <div className="w-[170px] h-[145px] rounded-[5px] border border-black flex flex-col justify-center items-center">
<Image src='/p-1.svg' alt="phone" width={56} height={56} />
<h1 className="text-[16px] ">Phones</h1>
        </div>
        <div className="w-[170px] h-[145px] rounded-[5px] border border-black flex flex-col justify-center items-center">
<Image src='/p-2.svg' alt="phone" width={56} height={56} />
<h1 className="text-[16px] ">Computers</h1>
        </div>
        <div className="w-[170px] h-[145px] rounded-[5px] border border-black flex flex-col justify-center items-center">
<Image src='/p-3.svg' alt="phone" width={56} height={56} />
<h1 className="text-[16px] ">SmartWatch</h1>
        </div>
        <div className="w-[170px] h-[145px] rounded-[5px] border border-black flex flex-col justify-center items-center">
<Image src='/p-4.svg' alt="phone" width={56} height={56} />
<h1 className="text-[16px] ">Camera</h1>
        </div>
        <div className="w-[170px] h-[145px] rounded-[5px] border border-black flex flex-col justify-center items-center">
<Image src='/p-5.svg' alt="phone" width={56} height={56} />
<h1 className="text-[16px] ">HeadPhones</h1>
        </div>
        <div className="w-[170px] h-[145px] rounded-[5px] border border-black flex flex-col justify-center items-center">
<Image src='/p-6.svg' alt="phone" width={56} height={56} />
<h1 className="text-[16px] ">Gaming</h1>
        </div>
      </div>
      </div>
  )
}
export default Catagery;