import React from "react";
import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const Footer = () => {
  return (
    <div className="w-[1440px] h-[440px] flex justify-center items-center bg-[#000000]">
      <div className="w-[1170px] h-[236px] flex justify-between items-center gap-[87px]">
        <div className="w-[217px] h-[188px] flex flex-col  gap-[16px]">
          <h1
            className={`${inter.className} text-[24px] font-bold leading-[24px] text-[#FAFAFA] `}
          >
            Exclusive
          </h1>
          <h1 className="text-[20px] leading-[28px] text-[#FAFAFA] font-medium">
            Subscribe
          </h1>
          <h1 className="text-[14px] leading-[24px] text-[#FAFAFA] ">
            Get 10% off your first order
          </h1>
          <Image
            src="/Mail.svg"
            alt="Rectangle"
            width={217}
            height={38}
            className="w-[217px] h-[48px]"
          />
        </div>
        {/* 2nd */}
        <div className="w-[175px] h-[180px] flex flex-col  gap-[24px]">
          <h1
            className={`${inter.className} text-[20px] font-medium leading-[28px] text-[#FAFAFA] `}
          >
            Support
          </h1>
          <h1 className="text-[16px] leading-[24px] text-[#FAFAFA] ">
            111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
          </h1>
          <h1 className="text-[16px] leading-[24px] text-[#FAFAFA] ">
            exclusive@gmail.com
          </h1>
          <h1 className="text-[16px] leading-[24px] text-[#FAFAFA] ">
            +88015-88888-9999
          </h1>
        </div>
        {/* 3rd */}
        <div className="w-[123px] h-[236px] flex flex-col  gap-[24px]">
          <h1
            className={`${inter.className} text-[20px] font-medium leading-[28px] text-[#FAFAFA] `}
          >
            Account
          </h1>
          <h1 className="text-[16px] leading-[24px] text-[#FAFAFA] ">
            My Account
          </h1>
          <h1 className="text-[16px] leading-[24px] text-[#FAFAFA] ">
            Login / Register
          </h1>
          <h1 className="text-[16px] leading-[24px] text-[#FAFAFA] ">Cart</h1>
          <h1 className="text-[16px] leading-[24px] text-[#FAFAFA] ">
            Wishlist
          </h1>
          <h1 className="text-[16px] leading-[24px] text-[#FAFAFA] ">Shop</h1>
        </div>
        {/* 4th */}
        <div className="w-[109px] h-[196px] flex flex-col  gap-[24px]">
          <h1
            className={`${inter.className} text-[20px] font-medium leading-[28px] text-[#FAFAFA] `}
          >
            Quick Link
          </h1>
          <h1 className="text-[16px] leading-[24px] text-[#FAFAFA] ">
            Privacy Policy
          </h1>
          <h1 className="text-[16px] leading-[24px] text-[#FAFAFA] ">
            Terms Of Use
          </h1>
          <h1 className="text-[16px] leading-[24px] text-[#FAFAFA] ">FAQ</h1>
          <h1 className="text-[16px] leading-[24px] text-[#FAFAFA] ">
            Contact
          </h1>
        </div>
        {/* 5th */}
        <div className="w-[198px] h-[210px] flex flex-col  gap-[24px]">
          <h1
            className={`${inter.className} text-[20px] font-medium leading-[28px] text-[#FAFAFA] `}
          >
            Download App
          </h1>
          <h1 className="text-[12px] leading-[18px] font-medium opacity-70 text-[#FAFAFA] ">
          Save $3 with App New User Only
          </h1>
        <Image src='/Frame7.svg' alt='logo' width={198} height={84}/>
        <Image src='/Frame8.svg' alt='logo' width={168} height={24}/>
        </div>
      </div>
    </div>
  );
};

export default Footer;
