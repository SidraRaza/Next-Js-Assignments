import React from "react";
import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const Enhance = () => {
  return (
    <div className="w-[1170px] h-[500px] bg-black mx-auto flex justify-center items-center my-[50px]">
      <div className=" flex justify-center items-center">
        <div className="w-[45%] flex flex-col justify-center text-left items-start  gap-[32px]">
          <h1 className="text-[#00FF66] font-semibold text-[16px]">
            Categories
          </h1>
       
          <h1
            className={`${inter.className} text-[#FAFAFA] text-[48px] font-semibold leading-[60px] flex gap-[10px] w-[443px] h-[120px]`}
          >
            Enhance Your Music Experience
          </h1>
       
          <Image src="/Frame-601.svg" alt="logo" width={320} height={62} />
       
        <button className='w-[171px] h-[56px] py-[16px] text-[#FAFAFA]  px-[48px] rounded-[4px]  bg-[#00FF66]'>Buy Now!</button>

            </div> 
            <div className="w-[55%] h-[420px] flex justify-center items-center">
            <Image src="/Frame-694.svg" alt="logo" width={600} height={420} />   
            </div>
      </div>
    </div>
  );
};

export default Enhance;
