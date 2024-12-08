import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className="w-full lg:w-[1440px] lg:h-[488px] h-[1342px]">
      {/* Top section with logo and link */}
      <div className="w-full h-[142px] flex justify-center flex-col items-center bg-[#FAFAFA]">
  <div className="w-full max-w-[1049px] h-[58px] flex items-center justify-between gap-4 mx-auto px-4">
    <h1 className="text-[24px] leading-[32px] font-bold text-center sm:text-left">Bandage</h1>
    <Image
      src="/link1.svg"
      alt="link"
      width={112}
      height={24}
      className="w-[112px] h-[24px]"
    />
  </div>
</div>

      {/* Main footer content */}
      <div className="w-full  lg:w-[1050px] h-auto flex flex-wrap lg:flex-nowrap justify-center lg:justify-between mx-auto items-start gap-10 lg:py-[100px]  py-[50px] px-4">
        {/* Company Info Section */}
        <div className="w-full sm:w-[148px] lg:w-[148px] h-[170px] flex flex-col gap-[20px]">
          <h1 className="text-[16px] leading-[24px] text-[#252B42] font-bold">Company Info</h1>
          <h1 className="text-[14px] leading-[24px] text-[#737373]">About Us</h1>
          <h1 className="text-[14px] leading-[24px] text-[#737373]">Carrier</h1>
          <h1 className="text-[14px] leading-[24px] text-[#737373]">We are hiring</h1>
          <h1 className="text-[14px] leading-[24px] text-[#737373]">Blog</h1>
        </div>

        {/* Legal Section */}
        <div className="w-full sm:w-[152px] lg:w-[152px] h-[170px] flex flex-col gap-[20px]">
          <h1 className="text-[16px] leading-[24px] text-[#252B42] font-bold">Legal</h1>
          <h1 className="text-[14px] leading-[24px] text-[#737373]">About Us</h1>
          <h1 className="text-[14px] leading-[24px] text-[#737373]">Carrier</h1>
          <h1 className="text-[14px] leading-[24px] text-[#737373]">We are hiring</h1>
          <h1 className="text-[14px] leading-[24px] text-[#737373]">Blog</h1>
        </div>

        {/* Features Section */}
        <div className="w-full sm:w-[148px] lg:w-[148px] h-[170px] flex flex-col gap-[20px]">
          <h1 className="text-[16px] leading-[24px] text-[#252B42] font-bold">Features</h1>
          <h1 className="text-[14px] leading-[24px] text-[#737373]">Business Marketing</h1>
          <h1 className="text-[14px] leading-[24px] text-[#737373]">User Analytic</h1>
          <h1 className="text-[14px] leading-[24px] text-[#737373]">Live Chat</h1>
          <h1 className="text-[14px] leading-[24px] text-[#737373]">Unlimited Support</h1>
        </div>

        {/* Company Info Section (repeated, you can update the content as needed) */}
        <div className="w-full sm:w-[152px] lg:w-[152px] h-[170px] flex flex-col gap-[20px]">
          <h1 className="text-[16px] leading-[24px] text-[#252B42] font-bold">Company Info</h1>
          <h1 className="text-[14px] leading-[24px] text-[#737373]">About Us</h1>
          <h1 className="text-[14px] leading-[24px] text-[#737373]">Carrier</h1>
          <h1 className="text-[14px] leading-[24px] text-[#737373]">We are hiring</h1>
          <h1 className="text-[14px] leading-[24px] text-[#737373]">Blog</h1>
        </div>

        {/* Get In Touch Section */}
        <div className="w-full sm:w-[321px] lg:w-[321px] h-[131px] flex flex-col gap-[20px]">
          <h1 className="text-[16px] leading-[24px] text-[#252B42] font-bold">Get In Touch</h1>
          <Image
            src="/link2.svg"
            alt="link"
            width={321}
            height={56}
            className="w-[321px] h-[56px]"
          />
          <h1 className="text-[14px] leading-[24px] text-[#737373] mb-14">Lore imp sum dolor Amit</h1>
        </div>
      </div>

      {/* Bottom footer text */}
      <div className="w-full h-[74px] bg-[#FAFAFA] flex items-center justify-center">
        <h1 className="text-[14px] leading-[24px] text-[#737373] text-center">
          Made With Love By Finland All Rights Reserved
        </h1>
      </div>
    </div>
  );
};

export default Footer;
