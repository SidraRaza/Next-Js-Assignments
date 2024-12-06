import Header3 from "@/components/Header3";
import Image from "next/image";
import React from "react";
import { Inter } from "next/font/google";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const page = () => {
  return (
    <>
      <Header3 />
      <div className="w-[1305px] h-[781px] flex justify-center items-center gap-[129px] mt-10 mb-28">
        <div>
          <Image src="/Side-Image.svg" alt="logo" width={805} height={781} />
        </div>
        <div className="w-[371px] h-[530px] flex flex-col justify-center items-start gap-[48px]">
          <h1
            className={`${inter.className} text-[36px] font-medium items-start  leading-[30px]`}
          >
            Create an account
          </h1>
          <h1 className="text-[16px] leading-[24px]">
            Enter your details below
          </h1>

          <div className="flex flex-col gap-[40px] w-[370px] h-[176px] ">
            <Input
              placeholder="Name"
              className="border-b-2 border-black text-black opacity-40 w-[370px] h-[32px]"
            />

            <Input
              placeholder="Email or Phone Number"
              className="border-b-2 border-black text-black opacity-40 w-[370px] h-[32px]"
            />
            <Input
              placeholder="Password"
              className="border-b-2 border-black text-black opacity-40 w-[370px] h-[32px]"
            />
          </div>
          <div className="w-[371px] h-[188px] flex flex-col justify-center items-center gap-[16px]">
          <button className="w-[371px] h-[56px] gap-[10px] rounded-[4px] flex py-[16px] px-[122px] text-[16px]
          font-medium leading-[24px] text-[#FAFAFA] bg-[#DB4444]">
            Create Account
          </button>
          <div className="w-[371px] h-[56px] rounded-[4px] border border-black py-[16px] px-[86px] flex gap-[10px]">
            <Image src="/Icon-Google.svg" alt="logo" width={24} height={24} />
            <h1 className="text-[16px] leading-[24px]">Sign up with Google</h1>
          </div>
          <div className="w-[248px] h-[28px] flex justify-center   gap-[16px] mt-3">
            <h1 className="text-[16px] leading-[24px] text-center">Already have account?</h1>
            <Link href="#" className="text-[16px] leading-[24px] font-medium">Log in</Link>
          </div>
          </div>
        
        </div>
      </div>
    </>
  );
};

export default page;
