import Image from 'next/image'
import React from 'react'

const HomePage = () => {
  return (
    <div className="xl:h-screen  w-full sm:w-[640px] md:w-[768px] xl:w-[1920px] lg:w-[1300px]">
      <div className="flex flex-col lg:flex-row lg:h-[500px] xl:h-screen">
        <div className="w-full xl:w-4/6 flex flex-col justify-center items-start p-4 sm:p-6 md:p-8 xl:m-12 lg:m-0 xl:ml-[176px]  lg:ml-[60px]">
          <h1 className="text-[24px] sm:text-[30px] md:text-[36px] xl:text-[40px] font-bold font-[Libre Bodoni] w-full xl:w-[496px] lg:w-[496px]">
            IMPECCABLE CRAFTSMANSHIP AND FINESSE
          </h1>
          <p className="text-[16px] sm:text-[20px] md:text-[25px] xl:text-[30px] font-medium w-full sm:w-[400px] md:w-[700px] xl:w-[902px] text-[#787054]">
            An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.
          </p>
          <button className="w-full sm:w-[200px] md:w-[250px] xl:w-[288px] font-medium text-[18px] sm:text-[22px] md:text-[26px] xl:text-[30px] text-white bg-[#A29875] h-[48px] sm:h-[52px] md:h-[55px] xl:h-[58px] mt-4 xl:mt-0">
            Explore Now
          </button>
        </div>
        <div className="w-full sm:w-[60%] md:w-[50%] xl:w-1/3 h-auto sm:h-[400px] md:h-[500px] xl:h-[611px] flex justify-center items-center my-8 xl:my-[150px] xl:mr-[150px] lg:mt-[10px] lg:mr-[120px]">
          <Image
            src="/images/2.svg"
            alt="hero image"
            width={442}
            height={611}
            className="w-[80%] sm:w-[75%] md:w-[85%] xl:w-auto"
          />
        </div>
      </div>
    </div>
  )
}

export default HomePage
