import Image from "next/image";

const Hero = () => {
    return ( 
        
        <div className="flex flex-row h-[360px] w-[1440px] items-center justify-center mb-[100px]">
            <div className="w-[217px] h-[344px] flex flex-col  gap-[16px]">
                <div className="w-[217px] h-[24px] flex flex-row gap-[51px]">
                    <h1 className="w-[142px] h-[24x] text-[16px] ">Woman’s Fashion</h1>
                    <Image
                        src="/images/DropDown.png"
                        width={24}
                        height={24}
                        alt="arrow"
                        className="rotate-90"
                    />
                </div>
                <div className="w-[217px] h-[24px] flex flex-row gap-[51px]">
                    <h1 className="w-[142px] h-[24x] text-[16px] ">Men’s Fashion</h1>
                    <Image
                        src="/images/DropDown.png"
                        width={24}
                        height={24}
                        alt="arrow"
                        className="rotate-90"
                    />
                </div>
                <h1 className="w-[87px] h-[24px] text-[16px] text-center">
                    Electronics
                </h1>
                <h1 className="w-[132px] h-[24px] text-[16px] text-center">
                    Home & Lifestyle
                </h1>
                <h1 className="w-[73px] h-[24px] text-[16px] text-center">Medicine</h1>
                <h1 className="w-[137px] h-[24px] text-[16px] text-center">
                    Sports & Outdoor
                </h1>
                <h1 className="w-[109px] h-[24px] text-[16px] text-center">
                    Baby’s & Toys
                </h1>
                <h1 className="w-[131px] h-[24px] text-[16px] text-center">
                    Groceries & Pets
                </h1>
                <h1 className="w-[128px] h-[24px] text-[16px] text-center">
                    Health & Beauty
                </h1>
            </div>
            <div className="w-[0px] h-[384px] border-[0.5px] border-black opacity-30 mr-[50px] mb-10  "></div>
            <div className=" bg-black w-[892px] h-[344px] items-center justify-center flex flex-row">
                <div className="flex flex-col items-center justify-center">
                    <div className="w-[190px] h-[49px] flex flex-row gap-[24px] justify-center items-center">
                        <Image src="/images/Apple.svg" width={24} height={24} alt="Apple" />
                        <h1 className="w-[126px] h-[20px] text-center  text-white text-[16px]">
                            iPhone 14 Series
                        </h1>
                    </div>
                    <h1 className="w-[294px] h-[120px] text-center text-[48px] text-white leading-[60px]">
                        Up to 10% off Voucher
                    </h1>
                    <div className="w-[113px] h-[28px] flex flex-row gap-[8px]">
                        <button className="w-[81px] h-[28px] border-[#FAFAFA] border-b flex flex-col gap-[4px]">
                            <h1 className="w-[81px] h-[24px] text-center text-white text-[16px] font-medium">
                                Shop Now
                            </h1>
                        </button>
                        <Image src="/images/icon.svg" width={24} height={24} alt="arrow" />
                    </div>
                </div>
                <Image
                    src="/images/hero.png"
                    width={496}
                    height={352}
                    alt="hero"
                    className=""
                />

            </div>
        </div>
    );
};

export default Hero;
