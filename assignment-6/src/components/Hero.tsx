import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="lg:w-[1280px] lg:h-[800px] w-[428px] h-[900px] pt-5 lg:pt-0">
      <div className="flex flex-col  justify-center sm:flex-row items-center ">
        <div className="flex flex-col justify-center items-center w-[380px] h-[390px] lg:h-[800px]  lg:w-[50%] ">
          <h1 className="lg:w-[500px] lg:h-[134px] w-[380px] h-[96px] lg:text-[56px] text-[40px] font-bold lg:leading-[67.2px] leading-[48px]">
            Learn new skills online with ease
          </h1>
       
          <p className="lg:w-[500px] w-[380px] h-[54px] lg:my-[20px] my-[10px] text-[18px] leading-[27px]">
            Discover a wide range of courses covering a variety of <br className="hidden lg:block" /> subjects,
            taught by expert instructors.
          </p>
          <div className="lg:w-[358px]  h-[64px] mt-[16px] gap-[16px] sm:flex-col-1  flex space-x-1 lg:mr-[150px] mr-6">
            <button className="w-[178px]  gap-[8px] h-[48px] text-[16px] rounded-[5px] border-[1px] py-[12px]
             px-[24px] bg-black text-white leading-[24px] ">Start learning now</button>
             <button className="w-[164px]  gap-[8px] h-[48px] text-[16px] rounded-[5px] border-[1px] py-[12px]
             px-[24px]  text-black leading-[24px] ">Explore Courses</button>
          </div>
        </div>
        <div>
          <Image src="/Image.svg" alt="Logo" width={640} height={900} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
