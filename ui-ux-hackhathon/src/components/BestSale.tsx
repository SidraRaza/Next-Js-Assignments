import Image from "next/image";
import React from "react";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const BestSale = () => {
  return (
    <div className="w-[1170px] h-[518px] mx-auto flex flex-col items-center justify-center gap-[60px] my-[100px]">
      <div className="w-[1170px] h-[108px] flex  justify-between items-end flex-row  ">
        <div className="w-[398px] h-[108px] flex flex-col   gap-[20px]">
          <div className="w-[142px] h-[40px] flex flex-row items-center gap-2">
            <Image src="/1.svg" alt="logo" width={20} height={40} />
            <h1 className="text-[16px] font-semibold text-[#DB4444]">This Month</h1>
          </div>
          <h1 className={`${inter.className} text-[36px] font-semibold`}>
          Best Selling Products
          </h1>
        </div>
        <div className="w-[159px] h-[56px]  py-[16px] px-[48px] text-center flex bg-[#DB4444] rounded-[4px]">
        
        <button className="text-[16px] w-[63px] h-[24px] font-medium text-[#FAFAFA]">
          View All 
        </button>
    
        </div>
      </div>
      <div className="w-[1170px] h-[350px] mx-auto grid gap-[60px]">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-[30px]">
          <div className="grid w-[270px] h-[322px] gap-[16px]">
            <Image src="/Cart.svg" alt="logo" width={270} height={250} />
            <h1 className="text-[16px] font-medium">The north coat</h1>
            <h1 className="text-[16px] font-medium text-[#DB4444]">$260  <del className="text-black opacity-50 ml-3">$360</del></h1>
            <Image src="/Frame-566.svg" alt="logo" width={140} height={20} />
          </div>
          <div className="grid w-[270px] h-[322px] gap-[16px]">
            <Image src="/cart2.svg" alt="logo" width={270} height={250} />
            <h1 className="text-[16px] font-medium">CANON EOS DSLR Camera</h1>
            <h1 className="text-[16px] font-medium text-[#DB4444]">$960  <del className="text-black opacity-50 ml-3">$1160</del></h1>
            <Image src="/Frame-56.svg" alt="logo" width={140} height={20} />
          </div>
          <div className="grid w-[270px] h-[322px] gap-[16px]">
            <Image src="/Cart3.svg" alt="logo" width={270} height={250} />
            <h1 className="text-[16px] font-medium">ASUS FHD Gaming Laptop</h1>
            <h1 className="text-[16px] font-medium text-[#DB4444]">$160  <del className="text-black opacity-50 ml-3">$170</del></h1>
            <Image src="/Frame-55.svg" alt="logo" width={140} height={20} />
          </div>
          <div className="grid w-[270px] h-[322px] gap-[16px]">
            <Image src="/Cart4.svg" alt="logo" width={270} height={250} />
            <h1 className="text-[16px] font-medium">Curology Product Set </h1>
            <h1 className="text-[16px] font-medium text-[#DB4444]">$360  </h1>
            <Image src="/Frame-566.svg" alt="logo" width={140} height={20} />
          </div>
          {/* 1 */}
        </div>
</div>
    </div>
  );
};

export default BestSale;
