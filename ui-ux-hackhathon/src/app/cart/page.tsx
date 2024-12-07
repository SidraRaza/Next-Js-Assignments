import Header2 from "@/components/Header2";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
      <Header2 />
      <div className="w-[114px] h-[21px] flex  gap-[12px]">
        <div className="flex gap-[12px] ml-[135px] ">
          <h1 className="text-[16px] leading-[24px] opacity-50">Home</h1>/
          <h1 className="text-[16px] leading-[24px]">Cart</h1>
        </div>
      </div>
      <div className="w-[1170px] h-[840px] flex justify-center flex-col items-center gap-[30px] mx-auto mt-[50px] mb-[100px]">
        <div className="w-[1170px] h-[72px]  flex  justify-center items-center py-[16px] border-[3px] border-black border-opacity-[5%]">
          <div className="w-[1091px] h-[24px] flex  justify-between items-center  ">
            <h1 className="text-[16px] leading-[24px] w-[100px]">Product</h1>
            <h1 className="text-[16px] leading-[24px] ml-20">Price</h1>
            <h1 className="text-[16px] leading-[24px] ml-2">Quantity</h1>
            <h1 className="text-[16px] leading-[24px] mr-[0px] ml-2">Subtotal</h1>
          </div>
        </div>
        {/* 2nd */}
        <div className="w-[1170px] h-[102px] flex justify-between items-center border-[3px]  border-black border-opacity-[5%]">
          <div className="w-[1091px] h-[24px]  flex justify-between items-center py-[46px] mx-auto">
            <div className="flex flex-cols-1 justify-center items-center  gap-[12px]">
                <Image src="/led.svg" alt="logo" width={54} height={54} />
                <h1 className="text-[16px] leading-[24px] w-[96px] h-[24px]">LCD Monitor</h1>
                
            </div>
            <h1 className="text-[16px] leading-[24px]">$650</h1>
            <div className="w-[72px] h-[44] border-[1.5px] p-3 border-black border-opacity-[5%] rounded-[4px] flex flex-cols-1 justify-center items-center  gap-[12px]">
              <h1 className="text-[16px] leading-[24px]">01</h1>
              <Image src="/c3.svg" alt="cart" width={12} height={32} />
            </div>
            <h1 className="text-[16px] leading-[24px]">$650</h1>
           
          </div>
        </div>
        {/* 3rd */}
        <div className="w-[1170px] h-[102px] flex justify-between items-center border-[3px] border-black border-opacity-[5%]">
          <div className="w-[1091px] h-[24px]  flex justify-between items-center py-[46px] mx-auto">
            <div className="flex flex-cols-1 justify-center items-center  gap-[12px]">
                <Image src="/c4.svg" alt="logo" width={54} height={54} />
                <h1 className="text-[16px] leading-[24px] w-[96px] h-[24px]">LCD Monitor</h1>
                
            </div>
            <h1 className="text-[16px] leading-[24px]">$550</h1>
            <div className="w-[72px] h-[44] border-[1.5px] p-3 border-black border-opacity-[5%] rounded-[4px] flex flex-cols-1 justify-center items-center  gap-[12px]">
              <h1 className="text-[16px] leading-[24px]">02</h1>
              <Image src="/c3.svg" alt="cart" width={12} height={32} />
            </div>
            <h1 className="text-[16px] leading-[24px]">$1100</h1>
           
          </div>
        </div>
        {/* 4th */}
        <div className="w-[1170px] h-[56px] flex justify-between items-center">
          <div className="w-[218px] h-[56px] flex justify-between items-center border-[1px] border-black border-opacity-[50%]  gap-[10px] py-[16px] px-[48px]">
            <button className="text-[14px] leading-[24px] font-medium">Return To Shop</button>
          </div>
          <div className="w-[195px] h-[56px] flex justify-between items-center border-[1px] border-black border-opacity-[50%]  gap-[10px] py-[16px] px-[48px]">
            <button className="text-[14px] leading-[24px] font-medium">Update Cart</button>
          </div>
        </div>
        {/* 5th */}
        <div className="w-[1170px] h-[324pxpx] flex gap-[173px] border-[1px] mt-10 border-black border-opacity-[5%]">
        <div className="w-[60%] h-[56px] flex  gap-[16px] ">
          <div className="w-[300px] h-[56px] flex  border-[1px] border-black border-opacity-[50%]   py-[16px] px-[48px]">
            <button className="text-[14px] leading-[24px] text-black text-opacity-[50%]">Coupon Code</button>
          </div>
          <div className="w-[211px] h-[56px] flex justify-between items-center bg-[#DB4444] gap-[10px] py-[16px] px-[48px]">
            <button className="text-[14px] leading-[24px] font-medium text-[#FAFAFA]">Update Cart</button>
          </div>
        </div>
        <div className="w-[470px] h-[324px] border-[1.5px] border-black flex flex-col  gap-[10px]">
          <h1 className="text-[20px] leading-[28px] flex font-medium mt-[32px] ml-[24px]">Cart Total</h1>
          <div className="w-[422] h-[24px] flex justify-between items-center px-[24px]   gap-[307px] mx-auto">
            <h1 className="text-[16px] leading-[24px]">Subtotal:</h1>
            <h1 className="text-[16px] leading-[24px] ">$1750</h1>
          </div>
          <div className="w-[422px] mx-auto border-[2px] border-black border-opacity-[30%]"></div>
          <div className="w-[422] h-[24px] flex justify-between items-center px-[24px]   gap-[307px] mx-auto">
            <h1 className="text-[16px] leading-[24px]">Shipping:</h1>
            <h1 className="text-[16px] leading-[24px] ">Free</h1>
          </div>
          <div className="w-[422px] mx-auto border-[2px] border-black border-opacity-[30%]"></div>
          <div className="w-[422] h-[24px] flex justify-between items-center px-[24px]   gap-[307px] ">
            <h1 className="text-[16px] leading-[24px]">Total:</h1>
            <h1 className="text-[16px] leading-[24px] ">$1750</h1>
          </div>
          <div className="w-[422px] mx-auto border-[2px] border-black border-opacity-[30%]"></div>
          <div className="w-[260px] h-[56px] flex justify-center mx-auto items-center mt-[25px] bg-[#DB4444] gap-[10px] py-[16px] px-[48px]">
            <button className="text-[14px] leading-[24px] font-medium text-[#FAFAFA]">Procees to checkout</button>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default page;
