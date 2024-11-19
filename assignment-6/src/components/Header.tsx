import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div className="lg:w-[1280px] lg:h-[72px] gap-[32px]  border-b-[1px] border-[#676767] lg:bg-[#F7F7F7] bg-white lg:mt-[14px] mt-0">
      <div className="lg:w-[1152px] w-[380px] h-[48px] lg:pt-[24px] pt-0 lg:h-[44px] flex items-center justify-between mx-auto ">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <Image src="/Frame 1.svg" alt="Logo" width={25.76} height={26.6} className="lg:ml-0 ml-[15px]" />
          <h1 className="font-bold text-[25.07px] text-[#000000]">Ddsgnr</h1>
          <Image src='/Column.svg' alt="Logo" width={48} height={48} className="lg:hidden block ml-[160px]" />
        </div>
  
        {/* Navigation Section */}
       <div className="lg:flex gap-[32px] w-[910px]  mx-auto  h-[44px] bg-white hidden sm:block">
       <ul className="flex gap-[32px] w-[687px]  mx-auto  h-[44px] text-[16px]  bg-white">
          <li className="w-[64px] h-[44px] p-[10px] border-b-[1px]">Home</li>
          <li className="w-[79px] h-[44px] p-[10px]">Courses</li>
          <li className="w-[81px] h-[44px] p-[10px]">Services</li>
          <li className="w-[113px] h-[44px] p-[10px]">Achievements</li>
          <li className="w-[90px] h-[44px] p-[10px]">About Us</li>
          <li className="w-[104px] h-[44px] p-[10px]">Testimonial</li>
        </ul>
       <div className="flex flex-row gap-2 bg-white mr-[54px]">
       <button className="w-[80px] flex h-[44px] border-[1px] py-[8px] rounded-[5px] border-black px-[20px] ">
          Login
        </button>
        <button className="w-[105px] flex h-[44px] border-[1px]  py-[8px] rounded-[5px] bg-black text-white text-[16px] border-black px-[20px] ">
          Sign Up
        </button>
       </div>

       </div>
      </div>
    </div>
  );
};

export default Header;
