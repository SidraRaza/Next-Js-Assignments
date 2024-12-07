import Header2 from "@/components/Header2";
import React from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const page = () => {
  return (
    <>
      <Header2 />
      <div className="w-[1170px] h-[984pxpx] flex gap-[80px]"></div>
      <div className="w-[1170px] h-[438px] mx-auto flex flex-col items-center justify-center gap-[60px]">
        <div className="w-[1170px] h-[56px] flex  justify-between items-center flex-row  ">
          <h1 className={`${inter.className} text-[20px] font-semibold`}>
            Wishlist (4)
          </h1>

          <div className="w-[223px] h-[56px] border border-black border-opacity-50  py-[16px] px-[48px] justify-center items-center flex gap-[10px]  rounded-[4px]">
            <button className="text-[14px] font-medium leading-[24px] ">
              Move All To Bag
            </button>
          </div>
        </div>
        <div className="w-[1170px] h-[322px] mx-auto grid gap-[60px]">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-[30px]">
            <div className="grid w-[270px] h-[322px] gap-[16px]">
              <div className="grid w-[270px] h-[250px]">
                <div className="h-[250px] grid w-[270px] bg-[#F5F5F5] ">
                  <div className="flex justify-between items-center">
                  <div className="w-[55px] h-[26px] text-[12px] text-white rounded-[4px] bg-[#DB4444] py-[4px] mt-[10px] ml-[12px] px-[12px] grid gap-[10px]">
                    -35%
                  </div>
                  <Image
                    src="/Frame9.svg"
                    alt="logo"  
                    width={34}
                    height={34}
                    className="mt-[12px] mr-[12px]"
                  />
                  </div>
                 
                  <Image
                    src="/bag.svg"
                    alt="logo"
                    width={178}
                    height={129}
                    className="mx-auto"
                  />
                            <Link
                  href="/cart"
                  className="w-[270px] flex justify-center mt-7 gap-[8px] items-center h-[41px] bg-black text-white "
                >
                  <Image
                    src="/basket.svg"
                    alt="logo"
                    width={24}
                    height={24}
                    className="text-white"
                  />
                  <h1 className="text-[12px]  text-white">
                    Add To Cart
                  </h1>
                </Link>
              </div>
                </div>

      
              <h1 className="text-[16px] font-medium leading-[24px]">Gucci duffle bag</h1>
              <h1 className="text-[16px] font-medium text-[#DB4444]">
              $960 <del className="text-black opacity-50 ml-3">$1160</del>
              </h1>
            </div>
            {/* 2nd */}
            <div className="grid w-[270px] h-[322px] gap-[16px]">
              <div className="grid w-[270px] justify-center items-center h-[250px]">
                <div className="h-[250px] grid w-[270px] bg-[#F5F5F5] ">
                  <div>
                
                  <Image
                    src="/Frame9.svg"
                    alt="logo"  
                    width={34}
                    height={34}
                    className="mt-[12px]  float-right mr-[12px]"
                  />
                  </div>
                 
                  <Image
                    src="/bag2.svg"
                    alt="logo"
                    width={191}
                    height={95}
                    className="mx-auto mt-[43px]"
                  />
                            <Link
                  href="/cart"
                  className="w-[270px]  flex justify-center mt-6 gap-[8px] items-center h-[41px] bg-black text-white "
                >
                  <Image
                    src="/basket.svg"
                    alt="logo"
                    width={24}
                    height={24}
                    className="text-white"
                  />
                  <h1 className="text-[12px]  text-white ">
                    Add To Cart
                  </h1>
                </Link>
              </div>
                </div>

      
              <h1 className="text-[16px] font-medium leading-[24px]">RGB liquid CPU Cooler</h1>
              <h1 className="text-[16px] font-medium text-[#DB4444]">
              $960 
              </h1>
            </div>
            {/* 4th */}
            <div className="grid w-[270px] h-[322px] gap-[16px]">
              <div className="grid w-[270px] h-[250px]">
                <div className="h-[250px] grid w-[270px] bg-[#F5F5F5] ">
                <div>
                
                <Image
                  src="/Frame9.svg"
                  alt="logo"  
                  width={34}
                  height={34}
                  className="mt-[12px]  float-right mr-[12px]"
                />
                </div>
                 
                  <Image
                    src="/bag4.svg"
                    alt="logo"
                    width={178}
                    height={150}
                    className="mx-auto"
                  />
                            <Link
                  href="/cart"
                  className="w-[270px] flex justify-center mt-4 gap-[8px] items-center h-[41px] bg-black text-white "
                >
                  <Image
                    src="/basket.svg"
                    alt="logo"
                    width={24}
                    height={24}
                    className="text-white"
                  />
                  <h1 className="text-[12px]  text-white">
                    Add To Cart
                  </h1>
                </Link>
              </div>
                </div>

      
              <h1 className="text-[16px] font-medium leading-[24px]">GP11 Shooter USB Gamepad</h1>
              <h1 className="text-[16px] font-medium text-[#DB4444]">
              $550 
              </h1>
            </div>
            {/* 5th */}
            <div className="grid w-[270px] h-[322px] gap-[16px]">
              <div className="grid w-[270px] h-[250px]">
                <div className="h-[250px] grid w-[270px] bg-[#F5F5F5] ">
                <div>
                
                <Image
                  src="/Frame9.svg"
                  alt="logo"  
                  width={34}
                  height={34}
                  className="mt-[12px]  float-right mr-[12px]"
                />
                </div>
                 
                  <Image
                    src="/bag5.svg"
                    alt="logo"
                    width={150}
                    height={150}
                    className="mx-auto"
                  />
                            <Link
                  href="/cart"
                  className="w-[270px] flex justify-center mt-5  gap-[8px] items-center h-[41px] bg-black text-white "
                >
                  <Image
                    src="/basket.svg"
                    alt="logo"
                    width={24}
                    height={24}
                    className="text-white"
                  />
                  <h1 className="text-[12px]  text-white">
                    Add To Cart
                  </h1>
                </Link>
              </div>
                </div>

      
              <h1 className="text-[16px] font-medium leading-[24px]">Quilted Satin Jacket</h1>
              <h1 className="text-[16px] font-medium text-[#DB4444]">
              $750
              </h1>
            </div>
            {/* 3rd */}
          </div>
        </div>
      </div>
      {/* part 2 */}
      <div className="w-[1170px] h-[518px] mx-auto flex flex-col items-center justify-center gap-[60px] mt-6 mb-[150px]">
        <div className="w-[1170px] h-[108px] flex  justify-between items-end flex-row  ">
        <div className="w-[1170px] h-[56px] flex  justify-between items-center flex-row  mx-auto ">
      <div className="w-[156px] h-[40px] flex flex-row items-center gap-4">
      <Image src="/1.svg" alt="logo" width={20} height={40} />
              <h1 className="text-[20px] leading-[26px]  ">
              Just For You
              </h1>
      </div>

          <div className="w-[150px] h-[56px] border border-black border-opacity-50  py-[16px] px-[48px] justify-center items-center flex gap-[10px]  rounded-[4px]">
            <button className="text-[14px] font-medium leading-[24px] ">
            See All
            </button>
          </div>
        </div> 
        </div>
        <div className="w-[1170px] h-[350px] mx-auto grid gap-[60px]"> 
           <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-[30px]">
            <div className="grid w-[270px] h-[350px] gap-[16px]">
              <div className="grid w-[270px] h-[250px]">
                <div className="h-[250px] grid w-[270px]  bg-[#F5F5F5] ">
                  <div className="flex justify-between items-center">
                  <div className="w-[55px] h-[26px] text-[12px] text-white rounded-[4px] bg-[#DB4444] py-[4px] mt-[10px] ml-[12px] px-[12px] grid gap-[10px]">
                    -35%
                  </div>
                  <Image
                    src="/eye.svg"
                    alt="logo"  
                    width={34}
                    height={34}
                    className="mt-[12px] mr-[12px]"
                  />
                  </div>
                 
                  <Image
                    src="/bag6.svg"
                    alt="logo"
                    width={158}
                    height={166}
                    className="mx-auto"
                  />
                            <Link
                  href="/cart"
                  className="w-[270px] flex justify-center mt-2  gap-[8px] items-center h-[41px] bg-black text-white "
                >
                  <Image
                    src="/basket.svg"
                    alt="logo"
                    width={24}
                    height={24}
                    className="text-white"
                  />
                  <h1 className="text-[12px]  text-white">
                    Add To Cart
                  </h1>
                </Link>
              </div>
                </div>

      
              <h1 className="text-[16px] font-medium mt-4 leading-[24px]">ASUS FHD Gaming Laptop</h1>
              <h1 className="text-[16px] font-medium text-[#DB4444]">
              $960 <del className="text-black opacity-50 ml-3">$1160</del>
              </h1>
              <Image src={"/123.svg"} alt="logo" width={140} height={20} />
            </div>
            {/* 2nd */}   <div className="grid w-[270px] h-[350px] gap-[16px]">
              <div className="grid w-[270px] h-[250px]">
                <div className="h-[250px] grid w-[270px]  bg-[#F5F5F5] ">
                <div>
                
                <Image
                  src="/eye.svg"
                  alt="logo"  
                  width={34}
                  height={34}
                  className="mt-[12px]  float-right mr-[12px]"
                />
                </div>
                 
                  <Image
                    src="/bag10.svg"
                    alt="logo"
                    width={158}
                    height={166}
                    className="mx-auto mt-[30px]"
                  />
                            <Link
                  href="/cart"
                  className="w-[270px] flex justify-center mt-6  gap-[8px] items-center h-[41px] bg-black text-white "
                >
                  <Image
                    src="/basket.svg"
                    alt="logo"
                    width={24}
                    height={24}
                    className="text-white"
                  />
                  <h1 className="text-[12px]  text-white">
                    Add To Cart
                  </h1>
                </Link>
              </div>
                </div>

      
              <h1 className="text-[16px] font-medium mt-4 leading-[24px]">IPS LCD Gaming Monitor</h1>
              <h1 className="text-[16px] font-medium text-[#DB4444]">
              $1160
              </h1>
              <Image src={"/123.svg"} alt="logo" width={140} height={20} />
            </div>
            {/* 4th */}   <div className="grid w-[270px] h-[350px] gap-[16px]">
              <div className="grid w-[270px] h-[250px]">
                <div className="h-[250px] grid w-[270px]  bg-[#F5F5F5] ">
                  <div className="flex justify-between items-center">
                  <div className="w-[55px] h-[26px] text-[12px] text-white rounded-[4px] bg-[#00FF66] py-[4px] mt-[10px] ml-[12px] px-[12px] grid gap-[10px]">
                    -35%
                  </div>
                  <Image
                    src="/eye.svg"
                    alt="logo"  
                    width={34}
                    height={34}
                    className="mt-[12px] mr-[12px]"
                  />
                  </div>
                 
                  <Image
                    src="/bag11.svg"
                    alt="logo"
                    width={172}
                    height={152}
                    className="mx-auto mt-[10px]"
                  />
                            <Link
                  href="/cart"
                  className="w-[270px] flex justify-center mt-3  gap-[8px] items-center h-[41px] bg-black text-white "
                >
                  <Image
                    src="/basket.svg"
                    alt="logo"
                    width={24}
                    height={24}
                    className="text-white"
                  />
                  <h1 className="text-[12px]  text-white">
                    Add To Cart
                  </h1>
                </Link>
              </div>
                </div>

      
              <h1 className="text-[16px] font-medium mt-4 leading-[24px]">HAVIT HV-G92 Gamepad</h1>
              <h1 className="text-[16px] font-medium text-[#DB4444]">
              $560
              </h1>
              <Image src={"/123.svg"} alt="logo" width={140} height={20} />
            </div>
            {/* 5th */}   <div className="grid w-[270px] h-[350px] gap-[16px]">
              <div className="grid w-[270px] h-[250px]">
                <div className="h-[250px] grid w-[270px]  bg-[#F5F5F5] ">
                <div>
                
                <Image
                  src="/eye.svg"
                  alt="logo"  
                  width={34}
                  height={34}
                  className="mt-[12px]  float-right mr-[12px]"
                />
                </div>
                 
                  <Image
                    src="/bag12.svg"
                    alt="logo"
                    width={191}
                    height={101}
                    className="mx-auto mt-[45px]"
                  />
                            <Link
                  href="/cart"
                  className="w-[270px] flex justify-center mt-7  gap-[8px] items-center h-[41px] bg-black text-white "
                >
                  <Image
                    src="/basket.svg"
                    alt="logo"
                    width={24}
                    height={24}
                    className="text-white"
                  />
                  <h1 className="text-[12px]  text-white">
                    Add To Cart
                  </h1>
                </Link>
              </div>
                </div>

      
              <h1 className="text-[16px] font-medium mt-4 leading-[24px]">AK-900 Wired Keyboard</h1>
              <h1 className="text-[16px] font-medium text-[#DB4444]">
              $200
              </h1>
              <Image src={"/123.svg"} alt="logo" width={140} height={20} />
            </div>
            {/* 3rd */}
          </div>
        </div>
      </div>
     
    </>
  );
};

export default page;
