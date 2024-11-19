import React from "react";
import Image from "next/image";

const Team = () => {
  return (
    <div className="lg:w-[1280px] lg:h-[1049px] w-[428px] h-[862px] lg:py-[112px] py-[48px]">
      <div className="lg:w-[768px] lg:h-[109px] w-[385px] h-[162px] sm:gap-[357px]  lg:mt-[100px] mt-[60px] lg:mb-[80px] mb-[40px] mx-auto">
        <h1 className=" lg:w-[768px] lg:h-[58px] w-[385px] h-[84px] font-bold lg:text-[48px] text-[32px]  lg:leading-[57.6px] leading-[41.6px] text-center  mx-auto">
          Explore Courses By Category
        </h1>
        <p className="lg:w-[768px] lg:h-[28px]  w-[385px] h-[54px]  font-normal text-[18px] leading-[27px]  lg:mt-6 mt-5 mx-auto">
          Discover a wide range of courses covering a variety of subjects,
          taught by expert instructors.
        </p>
      </div>
      <div className="lg:w-[1280px] lg:h-[636px] w-[380px] h-[556px]">
        <div className="lg:w-[1280px] lg:h-[132px]  flex lg:flex-cols-3  flex-col-1 gap-[24px] mx-auto">
          <div className="w-[410.67px] h-[132px]  bg-[#F7F7F7] rounded-[5px]  flex lg:flex-col-1 justify-center items-center">
            <div className="w-[100px] h-[100px] rounded-[5px] p-[34px] gap-[10px] justify-center items-center flex bg-[#FFFFFF]">
              <Image src="/pen-tool-2.svg" alt="Logo" width={32} height={32} />
            </div>
            <div className="flex flex-col ml-[24px]">
              <h1 className="font-semibold text-[20px] leading-[30px] w-[246.67px] h-[30px]">
                Design & Development
              </h1>
              <p className=" w-[246.67px] h-[27px] text-[18px] leading-[27px]">
                50+ Courses Available
              </p>
            </div>
          </div>
          <div className="w-[410.67px] h-[132px] bg-[#F7F7F7] rounded-[5px]  flex justify-center items-center">
            <div className="w-[100px] h-[100px] rounded-[5px] p-[34px] gap-[10px] justify-center items-center flex bg-[#FFFFFF]">
              <Image
                src="/volume-high.svg"
                alt="Logo"
                width={32}
                height={32}
                className="w-[32px] h-[32px]"
              />
            </div>
            <div className="flex flex-col ml-[24px]">
              <h1 className="font-semibold text-[20px] leading-[30px] w-[246.67px] h-[30px]">
                Marketing
              </h1>
              <p className=" w-[246.67px] h-[27px] text-[18px] leading-[27px]">
                50+ Courses Available
              </p>
            </div>
          </div>
          <div className="w-[410.67px] h-[132px] bg-[#F7F7F7] rounded-[5px]  flex  justify-center items-center">
            <div className="w-[100px] h-[100px] rounded-[5px] p-[34px] gap-[10px] justify-center items-center flex bg-[#FFFFFF]">
              <Image
                src="/group.svg"
                alt="Logo"
                width={32}
                height={32}
                className="w-[32px] h-[32px]"
              />
            </div>
            <div className="flex flex-col ml-[24px]">
              <h1 className="font-semibold text-[20px] leading-[30px] w-[246.67px] h-[30px]">
                Development
              </h1>
              <p className=" w-[246.67px] h-[27px] text-[18px] leading-[27px]">
                50+ Courses Available
              </p>
            </div>
          </div>
        </div>
        <div className="w-[1280px] h-[132px] flex lg:flex-cols-3 flex-col-1 gap-[24px] mt-[44px] ">
          <div className="w-[410.67px] h-[132px] bg-[#F7F7F7] rounded-[5px]  flex lg:flex-col-1 justify-center items-center">
            <div className="w-[100px] h-[100px] rounded-[5px] p-[34px] gap-[10px] justify-center items-center flex bg-[#FFFFFF]">
              <Image src="/microphone.svg" alt="Logo" width={32} height={32} />
            </div>
            <div className="flex flex-col ml-[24px]">
              <h1 className="font-semibold text-[20px] leading-[30px] w-[246.67px] h-[30px]">
              Communication
              </h1>
              <p className=" w-[246.67px] h-[27px] text-[18px] leading-[27px]">
                50+ Courses Available
              </p>
            </div>
          </div>
          <div className="w-[410.67px] h-[132px] bg-[#F7F7F7] rounded-[5px]  flex justify-center items-center">
            <div className="w-[100px] h-[100px] rounded-[5px] p-[34px] gap-[10px] justify-center items-center flex bg-[#FFFFFF]">
              <Image
                src="/link.svg"
                alt="Logo"
                width={32}
                height={32}
                className="w-[32px] h-[32px]"
              />
            </div>
            <div className="flex flex-col ml-[24px]">
              <h1 className="font-semibold text-[20px] leading-[30px] w-[246.67px] h-[30px]">
              Digital Marketing
              </h1>
              <p className=" w-[246.67px] h-[27px] text-[18px] leading-[27px]">
                50+ Courses Available
              </p>
            </div>
          </div>
          <div className="w-[410.67px] h-[132px] bg-[#F7F7F7] rounded-[5px]  flex  justify-center items-center">
            <div className="w-[100px] h-[100px] rounded-[5px] p-[34px] gap-[10px] justify-center items-center flex bg-[#FFFFFF]">
              <Image
                src="/arrow-2.svg"
                alt="Logo"
                width={32}
                height={32}
                className="w-[32px] h-[32px]"
              />
            </div>
            <div className="flex flex-col ml-[24px]">
              <h1 className="font-semibold text-[20px] leading-[30px] w-[246.67px] h-[30px]">
              Self Development
              </h1>
              <p className=" w-[246.67px] h-[27px] text-[18px] leading-[27px]">
                50+ Courses Available
              </p>
            </div>
          </div>
        </div>

        <div className="w-[1280px] h-[132px] flex lg:flex-cols-3 flex-col-1 gap-[24px] mt-[44px] ">
          <div className="w-[410.67px] h-[132px] bg-[#F7F7F7] rounded-[5px]  flex lg:grid-col justify-center items-center">
            <div className="w-[100px] h-[100px] rounded-[5px] p-[34px] gap-[10px] justify-center items-center flex bg-[#FFFFFF]">
              <Image src="/briefcase.svg" alt="Logo" width={32} height={32} />
            </div>
            <div className="flex flex-col ml-[24px]">
              <h1 className="font-semibold text-[20px] leading-[30px] w-[246.67px] h-[30px]">
              Business
              </h1>
              <p className=" w-[246.67px] h-[27px] text-[18px] leading-[27px]">
                50+ Courses Available
              </p>
            </div>
          </div>
          <div className="w-[410.67px] h-[132px] bg-[#F7F7F7] rounded-[5px]  flex justify-center items-center">
            <div className="w-[100px] h-[100px] rounded-[5px] p-[34px] gap-[10px] justify-center items-center flex bg-[#FFFFFF]">
              <Image
                src="/book.svg"
                alt="Logo"
                width={32}
                height={32}
                className="w-[32px] h-[32px]"
              />
            </div>
            <div className="flex flex-col ml-[24px]">
              <h1 className="font-semibold text-[20px] leading-[30px] w-[246.67px] h-[30px]">
              Finance
              </h1>
              <p className=" w-[246.67px] h-[27px] text-[18px] leading-[27px]">
                50+ Courses Available
              </p>
            </div>
          </div>
          <div className="w-[410.67px] h-[132px] bg-[#F7F7F7] rounded-[5px]  flex  justify-center items-center">
            <div className="w-[100px] h-[100px] rounded-[5px] p-[34px] gap-[10px] justify-center items-center flex bg-[#FFFFFF]">
              <Image
                src="/book2.svg"
                alt="Logo"
                width={32}
                height={32}
                className="w-[32px] h-[32px]"
              />
            </div>
            <div className="flex flex-col ml-[24px]">
              <h1 className="font-semibold text-[20px] leading-[30px] w-[246.67px] h-[30px]">
              Consulting
              </h1>
              <p className=" w-[246.67px] h-[27px] text-[18px] leading-[27px]">
                50+ Courses Available
              </p>
            </div>
          </div>
        </div>
        <div className=" w-[155px] h-[48px] rounded-[5px] border-[1px] py-[10px] border-[#000000] px-[24px] mx-auto mt-16">
      <button className="text-[16px] w-[120px] h-[24px] ">View All Courses</button>
    </div>
      </div>
     
    </div>
  );
};

export default Team;
