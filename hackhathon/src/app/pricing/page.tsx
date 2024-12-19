import Header2 from "@/components/Header2";
import React from "react";
import Image from "next/image";

const page = () => {
  return (
    <>
      <Header2 />
      <div className="w-[870px] h-[280px] flex flex-col justify-center items-center mx-auto gap-[10px]">
        <h1 className="text-[16px] font-bold leading-[24px] text-[#737373]">
          PRICING
        </h1>
        <h1 className="text-[58px] font-bold leading-[80px] text-[#252B42]">
          {" "}
          Simple Pricing
        </h1>
        <div className="w-[122px] h-[44px] gap-[10px] flex justify-center items-center">
          <h1 className="text-[14px] leading-[24px] font-bold text-[#252B42]">
            Home
          </h1>
          <Image
            src="/arrow2.svg"
            alt="arrow"
            width={9}
            height={16}
            className="w-[9px] h-[16px]"
          />
          <h1 className="text-[14px] leading-[24px] font-bold text-[#252B42]">
            Pricing
          </h1>
        </div>
      </div>
      <div className="w-[1440px] h-[1162px] bg-[#FAFAFA]">
        <div className="w-[1050px] h-[1168px] flex flex-col justify-center items-center gap-[48px] mx-auto">
          <div className="w-[600px] h-[100px] flex flex-col justify-center items-center gap-[10px]">
            <h1 className="text-[40px] leading-[50px] font-bold">Pricing</h1>
            <p className="text-[14px] leading-[20px] text-[#737373] w-[469px] text-center">
              Problems trying to resolve the conflict between <br />
              the two major realms of Classical physics: Newtonian mechanics{" "}
            </p>
          </div>
          <div className="w-[311px] h-[44px] flex justify-between items-center gap-[10px] mt-[10px]">
            <h1 className="text-[16px] leading-[24px] font-bold text-[#252B42]">
              Monthly
            </h1>
            <Image src="/button.svg" alt="button" width={45} height={25} />
            <h1 className="text-[16px] leading-[24px] font-bold text-[#252B42]">
              Yearly
            </h1>
            <div className="w-[109px] h-[44px] flex justify-center items-center px-[20px] py-[10px] rounded-full bg-[#B2E3FF]">
              <button className="text-[14px] leading-[24px] font-bold text-[#23A6F0]">
                Save 25%
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1440px] h-[1162px]"></div>
    </>
  );
};

export default page;
