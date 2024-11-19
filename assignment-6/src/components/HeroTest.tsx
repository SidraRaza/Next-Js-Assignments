import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className=" w-[428px] h-[900px] pt-16 ">
      <div className="flex flex-col  items-center justify-center w-[428px] h-[390px]">
        <div className=" w-[380px] h-[390px]  justify-center items-center py-16">
          <h1 className="w-[380px] h-[96px] lg:text-[56px] text-[40px] font-bold  leading-[48px] ">
            Learn new skills online with ease
          </h1>
       
          <p className="w-[380px] h-[54px]  my-[10px] text-[18px] leading-[27px]">
            Discover a wide range of courses covering a variety of <br className="hidden lg:block" /> subjects,
            taught by expert instructors.
          </p>
          <div className=" h-[64px] mt-[16px] gap-[16px] flex flex-col-1 space-x-1  ">
            <button className="w-[178px]  gap-[8px] h-[48px] text-[16px] rounded-[5px] border-[1px] py-[12px]
             px-[24px] bg-black text-white leading-[24px] ">Start learning now</button>
             <button className="w-[164px]  gap-[8px] h-[48px] text-[16px] rounded-[5px] border-[1px] py-[12px]
             px-[24px]  text-black leading-[24px] ">Explore Courses</button>
          </div>
        </div>
        <div className="w-[428px] h-[390px]">
          <Image src="/Image.svg" alt="Logo" width={428} height={390} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
