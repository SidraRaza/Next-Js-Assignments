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
        <div className="w-[371px] h-[326px] flex flex-col justify-center items-start gap-[40px]">
          <h1
            className={`${inter.className} text-[36px] font-medium items-start  leading-[30px]`}
          >
            Log in to Exclusive
          </h1>
          <h1 className="text-[16px] leading-[24px]">
            Enter your details below
          </h1>

          <div className="flex flex-col gap-[40px] w-[370px] h-[104px] ">
            <Input
              placeholder="Email or Phone Number"
              className="border-b-2 border-black text-black opacity-40 w-[370px] h-[32px]"
            />
            <Input
              placeholder="Password"
              className="border-b-2 border-black text-black opacity-40 w-[370px] h-[32px]"
            />
          </div>
          <div className="flex   w-[371px] h-[56px] justify-center items-center  gap-[87px]">
            <Link
              href="/dropAccount"
              className="w-[143px] h-[56px] flex felx-cols-1 justify-center items-center gap-[16px] py-[16px] px-[48px] bg-[#DB4444] rounded-[4px]  
            font-medium text-[16px] text-[#FAFAFA] "
            >
              Log In
            </Link>
            <h1 className="text-[16px] leading-[24px] text-[#DB4444] ">Forgot Password?</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
