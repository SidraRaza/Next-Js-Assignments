import Header2 from "@/components/Header2";
import React from "react";
import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const page = () => {
  return (
    <>
      <Header2 />
      <div className="w-[1440px] h-full ">
        <div className="w-[114px] h-[21px] flex  gap-[12px]">
          <div className="flex gap-[12px] ml-[100px] ">
            <h1 className="text-[16px] leading-[24px] opacity-50">Home</h1>/
            <h1 className="text-[16px] leading-[24px]">About</h1>
          </div>
        </div>
        <div className="h-[609px] w-[1440px] flex">
          {/* left side */}
          <div className="w-[50%] flex items-center justify-center flex-col">
            <div className="w-[525] h-[336px] gap-[40px] flex  flex-col text-justify items-left">
              <h1
                className={`${inter.className} text-[54px] font-semibold leading-[64px] `}
              >
                Our Story
              </h1>
              <h1 className="text-[16px] leading-[26px] w-[525px] h-[130px]">
                Launced in 2015, Exclusive is South Asia’s premier online
                shopping makterplace with an active presense in Bangladesh.
                Supported by wide range of tailored marketing, data and service
                solutions, Exclusive has 10,500 sallers and 300 brands and
                serves 3 millioons customers across the region.
              </h1>
              <h1 className="text-[16px] leading-[26px] w-[505px] h-[78px]">
                Exclusive has more than 1 Million products to offer, growing at
                a very fast. Exclusive offers a diverse assotment in categories
                ranging from consumer.
              </h1>
            </div>
          </div>
          <div className="w-[705px] h-[609px] flex justify-center ml-4 items-center">
            <Image src="/about.svg" alt="logo" width={705} height={609} />
          </div>
        </div>
        {/* links */}
        <div className="w-[1170px] h-[230px] flex justify-center items-center my-[120px] gap-[30px] mx-auto">
          <div className="flex flex-col w-[270px] gap-[16px] h-[230px] rounded-[4px] justify-center items-center border-[1px] border-black">
            <Image src="/a3.svg" alt="logo" width={80} height={80} className="w-[80px] h-[80px] " />
            <h1
              className={`${inter.className} font-bold text-[32px] leading-[30px]`}
            >
              10.5k{" "}
            </h1>
            <p className="text-[16px] leading-[24px]">
              Sallers active our site
            </p>
          </div>
          {/* 2nd */}
          <div className="flex flex-col w-[270px] gap-[16px] h-[230px] rounded-[4px] bg-[#DB4444] justify-center items-center border-[1px] border-black">
            <Image src="/a4.svg" alt="logo" width={80} height={80} className="w-[80px] h-[80px] " />
            <h1
              className={`${inter.className} font-bold text-[32px] leading-[30px]`}
            >
              33k{" "}
            </h1>
            <p className="text-[16px] leading-[24px]">
            Mopnthly Produduct Sale
            </p>
          </div>
          {/* 3rd */}
          <div className="flex flex-col w-[270px] gap-[16px] h-[230px] rounded-[4px] justify-center items-center border-[1px] border-black">
            <Image src="/a6.svg" alt="logo" width={80} height={80} className="w-[80px] h-[80px] " />
            <h1
              className={`${inter.className} font-bold text-[32px] leading-[30px]`}
            >
              44.5k{" "}
            </h1>
            <p className="text-[16px] leading-[24px]">
            Customer active in our site
            </p>
          </div>
          {/* 4th */}
          <div className="flex flex-col w-[270px] gap-[16px] h-[230px] rounded-[4px] justify-center items-center border-[1px] border-black">
            <Image src="/a7.svg" alt="logo" width={80} height={80} className="w-[80px] h-[80px] " />
            <h1
              className={`${inter.className} font-bold text-[32px] leading-[30px]`}
            >
              25k{" "}
            </h1>
            <p className="text-[16px] leading-[24px]">
            Anual gross sale in our site
            </p>
          </div>
        </div>
        {/* Links */}
        <div className="w-[1170px] h-[564px] flex justify-center  items-center mx-auto gap-[30px] my-[120px]">'
            <div className="w-[370px] h-[564px] flex flex-col gap-[32px]">
                <Image src="/m1.svg" alt="logo" width={370} height={430} className="w-[370px] h-[430px] " />
                <h1 className={`${inter.className} text-[32px] font-medium leading-[30px]`}>Tom Cruise</h1>
                <h1 className="text-[16px] leading-[24px]">Founder & Chairman</h1>
                <Image src="/m2.svg" alt="logo" width={104} height={24} className="w-[104px] h-[24px] " />
            </div>
            <div className="w-[370px] h-[564px] flex flex-col gap-[32px]">
                <Image src="/m3.svg" alt="logo" width={370} height={430} className="w-[370px] h-[430px] " />
                <h1 className={`${inter.className} text-[32px] font-medium leading-[30px]`}>Emma Watson</h1>
                <h1 className="text-[16px] leading-[24px]">Managing Director</h1>
                <Image src="/m2.svg" alt="logo" width={104} height={24} className="w-[104px] h-[24px] " />
            </div>
            <div className="w-[370px] h-[564px] flex flex-col gap-[32px]">
                <Image src="/m6.svg" alt="logo" width={370} height={430} className="w-[370px] h-[430px] " />
                <h1 className={`${inter.className} text-[32px] font-medium leading-[30px]`}>Will Smith</h1>
                <h1 className="text-[16px] leading-[24px]">Product Designer</h1>
                <Image src="/m2.svg" alt="logo" width={104} height={24} className="w-[104px] h-[24px] " />
            </div>
            
        </div>
        <div className="w-[112px] h-[16px] flex justify-center items-center mx-auto">
            <Image src="/m7.svg" alt="logo" width={112} height={16} className="w-[112px] h-[16px] " />
            </div>
        {/* delivery */}
        <div className="w-[943px] h-[161px] flex justify-center items-center mx-auto gap-[88px] my-[120px]">
            <div className="w-[249px] h-[161px] gap-[24px] flex flex-col justify-center items-center">
                <Image src="/d1.svg" alt="logo" width={80} height={80} className="w-[80px] h-[80px] " />
                <h1 className={`${inter.className} text-[18px] font-semibold leading-[28px]`}>FREE AND FAST DELIVERY</h1>
                <h1 className="text-[14px] leading-[21px]">Free delivery for all orders over $140</h1>
            </div>
            <div className="w-[249px] h-[161px] gap-[24px] flex flex-col justify-center items-center">
                <Image src="/d2.svg" alt="logo" width={80} height={80} className="w-[80px] h-[80px] " />
                <h1 className={`${inter.className} text-[18px] font-semibold leading-[28px]`}>24/7 CUSTOMER SERVICE</h1>
                <h1 className="text-[14px] leading-[21px]">Friendly 24/7 customer support</h1>
            </div>
            <div className="w-[249px] h-[161px] gap-[24px] flex flex-col justify-center items-center">
                <Image src="/d3.svg" alt="logo" width={80} height={80} className="w-[80px] h-[80px] " />
                <h1 className={`${inter.className} text-[18px] font-semibold leading-[28px]`}>MONEY BACK GUARANTEE</h1>
                <h1 className="text-[14px] leading-[21px]">We reurn money within 30 days</h1>
            </div>
        </div>
      </div>
    </>
  );
};

export default page;
