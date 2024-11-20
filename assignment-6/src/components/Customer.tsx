import Image from "next/image";
import React from "react";

const Customer = () => {
    return (
        <div className="lg:w-[1280px] w-[428px] h-[1075px] lg:h-[895px] flex flex-col items-center justify-center gap-[48px] px-[24px] py-[48px] lg:gap-[80px] lg:px-[64px] lg:py[112px] bg-[#F7F7F7]">
            <div className="lg:w-[768px] w-[363px] h-[120px] lg:h-[109px] flex flex-col gap-[16px]">
                <div className="lg:w-[768px] w-[363px] h-[120px] lg:h-[109px] flex flex-col gap-[24px]">
                    <h1 className="lg:w-[768px] w-[363px] h-[42px] lg:h-[58px] text-[32px] lg:text-[48px] text-center text-black font-bold">
                        Our team
                    </h1>
                    <p className="lg:w-[768px] w-[363px] h-[54px]  lg:h-[27px] text-[18px] text-center text-black">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                    </p>
                </div>
            </div>
            <div className="lg:w-[1280px] lg:h-[610px] w-[380px] h-[723px] gap-[96] flex flex-col lg:flex-row lg:gap-[64px]">
                <div className="lg:w-[1280px] lg:h-[273px]  w-[380px] h-[723px] flex flex-col item-center justify-center gap-[64px] lg:gap-[48px]">
                    <div className="w-[394.67px] lg:h-[273px] h-[209px] flex flex-col items-center justify-center gap-[24px]">
                        <Image
                            src={"/images/team1.svg"}
                            alt="team"
                            width={80}
                            height={80}
                        />
                        <div className="w-[394.67px] h-[121px] flex flex-col gap-[16px]">
                            <div className="w-[394.67px] h-[57] flex flex-col gap-[16px]">
                                <h1 className="w-394.67px] h-[30px] font-semibold text-[20px] text-center text-black">
                                    James Nduku
                                </h1>
                                <p className="w-394.67px] h-[27px] text-[18px] text-center text-black">
                                    Marketing Coordinator
                                </p>
                            </div>
                        </div>
                        <div className="w-[100px] h-[24px] flex flex-row items-center justify-center gap-[14px]">
                            <Image
                                src={"/images/LinkedIn.svg"}
                                alt="team"
                                width={24}
                                height={24}
                            />
                            <Image
                                src={"/images/Twitter.svg"}
                                alt="team"
                                width={24}
                                height={24}
                            />
                            <Image
                                src={"/images/Dribble.svg"}
                                alt="team"
                                width={24}
                                height={24}
                            />
                        </div>
                    </div>
                </div>
                <div className="lg:w-[1280px] lg:h-[273px]  w-[380px] h-[723px] flex flex-col item-center justify-center gap-[64px] lg:gap-[48px]">
                    <div className="w-[394.67px] lg:h-[273px] h-[209px] flex flex-col items-center justify-center gap-[24px]">
                        <Image
                            src={"/images/team2.svg"}
                            alt="team"
                            width={80}
                            height={80}
                        />
                        <div className="w-[394.67px] h-[121px] flex flex-col gap-[16px]">
                            <div className="w-[394.67px] h-[57] flex flex-col gap-[16px]">
                                <h1 className="w-394.67px] h-[30px] font-semibold text-[20px] text-center text-black">
                                    Joseph Munyambu
                                </h1>
                                <p className="w-394.67px] h-[27px] text-[18px] text-center text-black">
                                    Nursing Assistant
                                </p>
                            </div>
                        </div>
                        <div className="w-[100px] h-[24px] flex flex-row items-center justify-center gap-[14px]">
                            <Image
                                src={"/images/LinkedIn.svg"}
                                alt="team"
                                width={24}
                                height={24}
                            />
                            <Image
                                src={"/images/Twitter.svg"}
                                alt="team"
                                width={24}
                                height={24}
                            />
                            <Image
                                src={"/images/Dribble.svg"}
                                alt="team"
                                width={24}
                                height={24}
                            />
                        </div>
                    </div>
                </div>
                <div className="lg:w-[1280px] lg:h-[273px]  w-[380px] h-[723px] flex flex-col item-center justify-center gap-[64px] lg:gap-[48px]">
                    <div className="w-[394.67px] lg:h-[273px] h-[209px] flex flex-col items-center justify-center gap-[24px]">
                        <Image
                            src={"/images/team3.svg"}
                            alt="team"
                            width={80}
                            height={80}
                        />
                        <div className="w-[394.67px] h-[121px] flex flex-col gap-[16px]">
                            <div className="w-[394.67px] h-[57] flex flex-col gap-[16px]">
                                <h1 className="w-394.67px] h-[30px] font-semibold text-[20px] text-center text-black">
                                    Joseph Ngumbau
                                </h1>
                                <p className="w-394.67px] h-[27px] text-[18px] text-center text-black">
                                    Medical Assistant
                                </p>
                            </div>
                        </div>
                        <div className="w-[100px] h-[24px] flex flex-row items-center justify-center gap-[14px]">
                            <Image
                                src={"/images/LinkedIn.svg"}
                                alt="team"
                                width={24}
                                height={24}
                            />
                            <Image
                                src={"/images/Twitter.svg"}
                                alt="team"
                                width={24}
                                height={24}
                            />
                            <Image
                                src={"/images/Dribble.svg"}
                                alt="team"
                                width={24}
                                height={24}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[1280px] h-[610px] hidden  lg:flex flex-row gap-[64px]">
                <div className="w-[1280px] h-[273px] flex flex-col item-center justify-center gap-[48px]">
                    <div className="w-[394.67px] h-[273px] flex flex-col items-center justify-center gap-[24px]">
                        <Image
                            src={"/images/team4.svg"}
                            alt="team"
                            width={80}
                            height={80}
                        />
                        <div className="w-[394.67px] h-[121px] flex flex-col gap-[16px]">
                            <div className="w-[394.67px] h-[57] flex flex-col gap-[16px]">
                                <h1 className="w-394.67px] h-[30px] font-semibold text-[20px] text-center text-black">
                                    Erick Kipkemboi
                                </h1>
                                <p className="w-394.67px] h-[27px] text-[18px] text-center text-black">
                                    Web Designer
                                </p>
                            </div>
                        </div>
                        <div className="w-[100px] h-[24px] flex flex-row items-center justify-center gap-[14px]">
                            <Image
                                src={"/images/LinkedIn.svg"}
                                alt="team"
                                width={24}
                                height={24}
                            />
                            <Image
                                src={"/images/Twitter.svg"}
                                alt="team"
                                width={24}
                                height={24}
                            />
                            <Image
                                src={"/images/Dribble.svg"}
                                alt="team"
                                width={24}
                                height={24}
                            />
                        </div>
                    </div>
                </div>
                <div className="w-[1280px] h-[273px] flex flex-col  item-center justify-center gap-[48px]">
                    <div className="w-[394.67px] h-[273px] flex flex-col items-center justify-center gap-[24px]">
                        <Image
                            src={"/images/team5.svg"}
                            alt="team"
                            width={80}
                            height={80}
                        />
                        <div className="w-[394.67px] h-[121px] flex flex-col gap-[16px]">
                            <div className="w-[394.67px] h-[57] flex flex-col gap-[16px]">
                                <h1 className="w-394.67px] h-[30px] font-semibold text-[20px] text-center text-black">
                                    Stephen Kerubo
                                </h1>
                                <p className="w-394.67px] h-[27px] text-[18px] text-center text-black">
                                    President of Sales
                                </p>
                            </div>
                        </div>
                        <div className="w-[100px] h-[24px] flex flex-row items-center justify-center gap-[14px]">
                            <Image
                                src={"/images/LinkedIn.svg"}
                                alt="team"
                                width={24}
                                height={24}
                            />
                            <Image
                                src={"/images/Twitter.svg"}
                                alt="team"
                                width={24}
                                height={24}
                            />
                            <Image
                                src={"/images/Dribble.svg"}
                                alt="team"
                                width={24}
                                height={24}
                            />
                        </div>
                    </div>
                </div>
                <div className="w-[1280px] h-[273px] flex flex-col  item-center justify-center gap-[48px]">
                    <div className="w-[394.67px] h-[273px] flex flex-col items-center justify-center gap-[24px]">
                        <Image
                            src={"/images/team6.svg"}
                            alt="team"
                            width={80}
                            height={80}
                        />
                        <div className="w-[394.67px] h-[121px] flex flex-col gap-[16px]">
                            <div className="w-[394.67px] h-[57] flex flex-col gap-[16px]">
                                <h1 className="w-394.67px] h-[30px] font-semibold text-[20px] text-center text-black">
                                    John Leboo
                                </h1>
                                <p className="w-394.67px] h-[27px] text-[18px] text-center text-black">
                                    Dog Trainer
                                </p>
                            </div>
                        </div>
                        <div className="w-[100px] h-[24px] flex flex-row items-center justify-center gap-[14px]">
                            <Image
                                src={"/images/LinkedIn.svg"}
                                alt="team"
                                width={24}
                                height={24}
                            />
                            <Image
                                src={"/images/Twitter.svg"}
                                alt="team"
                                width={24}
                                height={24}
                            />
                            <Image
                                src={"/images/Dribble.svg"}
                                alt="team"
                                width={24}
                                height={24}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Customer;