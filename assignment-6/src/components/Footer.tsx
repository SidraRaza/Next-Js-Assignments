
import Image from "next/image";
import Link from "next/link";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Footer = () => {
    return (
        <div className="lg:w-[1280px] w-[428px] h-[1411px] px-[24px] py-[48px] gap-[48px] lg:h-[684px] flex flex-col lg:gap-[80px] lg:p-[80px] justify-center items-center">
            <div className="lg:w-[1120px] lg:h-[524px] w-[380px] h-[1315px] gap-[48px]  flex flex-col lg:gap-[80px] items-center justify-center">
                <div className="lg:w-[1120px] lg:h-[82px]w-[380px] h-[261px] items-center justify-center lg:justify-between flex flex-col lg:flex-row gap-[24px] lg:gap-0 ">
                    <div className="lg:w-[500px] lg:h-[51px] w-[287px] h-[91px] flex-col flex">
                        <h1 className="lg:w-[500px] lg:h-[51px] w-[287px] h-[27px] text-[18px] lg:text-left text-center text-black font-semibold ">
                            Subscribe to our newsletter
                        </h1>
                        <p className="lg:w-[500px] lg:h-[51px] w-[287px] h-[48px] text-center lg:text-left text-[16px] text-black">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </div>

                    <div className="lg:w-[400px] lg:h-[82px] w-[380px] h-[146px] flex  gap-[16px] flex-col">
                        <div className="g:w-[400px] lg:h-[82px] w-[380px] h-[112px] flex-col flex lg:flex-row gap-[16px]">
                            <input
                                type="text"
                                placeholder="Enter your email"
                                className="lg:w-[265px] w-[380px] h-[48px] text-[16px] bg-white text-[#505050] border-[1px] border-black rounded-[5px] flex gap-[8px] p-[12px]"
                            />
                            <button className="lg:w-[119px] w-[380px] h-[48px]  border-[1px] border-black rounded-[5px] flex gap-[8px] px-[24px] py-[12px] ">
                                <div className="w-[71px] h-[24px] text-[16px] text-black flex">
                                    Subscribe
                                </div>
                            </button>
                        </div>
                        <p className="lg:w-[400px] w-[380px] h-[18px] text-center lg:text-left text-[12px]">
                            By subscribing you agree to with our
                            <span className="underline text-[12px] text-black ">
                                Privacy Policy
                            </span>
                        </p>
                    </div>
                </div>

                
                <div className="lg:w-[1120px] w-[172px] h-[811px] lg:h-[225px] items-center justify-center lg:items-start lg:justify-start  flex flex-col lg:flex-row gap-[32px] lg:gap-[40px]">
                    <div className="lg:w-[250px] lg:h-[40px] w-[172px] h-[225px] flex  flex-col ">
                        <div className="w-[130.6px] h-[40] py-[29px] flex-col flex lg:flex-row gap-[10.5px]">
                            <div className="w-[130.6px] h-[30.38px] flex flex-row gap-[8.02px]">
                                <div className="w-[32.58px] flex h-[30.38px] ">
                                    <Image
                                        src="/images/Union1.svg"
                                        alt="logo"
                                        width={25.76}
                                        height={26.6}
                                        className="flex"
                                    />
                                    <Image
                                        src="/images/Union2.svg"
                                        alt="logo"
                                        width={25.76}
                                        height={26.6}
                                        className="flex -left-5  relative"
                                    />
                                </div>
                                <h1
                                    className={`w-[90px] h-[30px] text-[25.07px] ${inter.className} text-black font-bold`}
                                >
                                    Ddsgnr
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-[250px] w-[172px] h-[225px] flex flex-col gap-[16px]">
                        <h1 className=" lg:w-[250px] w-[172px] h-[24px] font-semibold text-[16px] text-center lg:text-left text-black">
                            Courses
                        </h1>
                        <div className="lg:w-[250px] w-[172px] h-[185px] ">
                            <Link
                                href="/"
                                className="lg:w-[250px] w-[172px] h-[37px] py-[8px]"
                            >
                                <h1 className="lg:w-[250px] w-[172px] h-[21px] text-[14px] text-center lg:text-left  text-black">
                                    Business
                                </h1>
                            </Link>
                        </div>
                        <div className="lg:w-[250px] w-[172px] h-[185px] ">
                            <Link
                                href="/"
                                className="lg:w-[250px] w-[172px] h-[37px] py-[8px]"
                            >
                                <h1 className="lg:w-[250px] w-[172px] h-[21px] text-[14px] text-center lg:text-left text-black">
                                Development
                                </h1>
                            </Link>
                        </div>
                        <div className="lg:w-[250px] w-[172px] h-[185px] ">
                            <Link
                                href="/"
                                className="lg:w-[250px] w-[172px] h-[37px] py-[8px]"
                            >
                                <h1 className="lg:w-[250px] w-[172px] h-[21px] text-[14px] text-center lg:text-left text-black">
                                Technology
                                </h1>
                            </Link>
                        </div>
                        <div className="lg:w-[250px] w-[172px] h-[185px] ">
                            <Link
                                href="/"
                                className="lg:w-[250px] w-[172px] h-[37px] py-[8px]"
                            >
                                <h1 className="lg:w-[250px] w-[172px] h-[21px] text-[14px] text-center lg:text-left text-black">
                                Design
                                </h1>
                            </Link>
                        </div>
                        <div className="lg:w-[250px] w-[172px] h-[185px]">
                            <Link
                                href="/"
                                className="lg:w-[250px] w-[172px] h-[37px] py-[8px]"
                            >
                                <h1 className="lg:w-[250px] w-[172px] h-[21px] text-[14px] text-center lg:text-left text-black">
                                Programming
                                </h1>
                            </Link>
                        </div>
                    </div>
                    <div className="lg:w-[250px] w-[172px] h-[225px] flex flex-col gap-[16px]">
                        <h1 className=" lg:w-[250px] w-[172px] h-[24px] font-semibold text-[16px] text-center lg:text-left text-black">
                        Resources
                        </h1>
                        <div className="lg:w-[250px] w-[172px] h-[185px] ">
                            <Link
                                href="/"
                                className="lg:w-[250px] w-[172px] h-[37px] py-[8px]"
                            >
                                <h1 className="lg:w-[250px] w-[172px] h-[21px] text-[14px] text-center lg:text-left text-black">
                                Career
                                </h1>
                            </Link>
                        </div>
                        <div className="lg:w-[250px] w-[172px] h-[185px] ">
                            <Link
                                href="/"
                                className="lg:w-[250px] w-[172px] h-[37px] py-[8px]"
                            >
                                <h1 className="lg:w-[250px] w-[172px] h-[21px] text-[14px] text-center lg:text-left text-black">
                                Resume
                                </h1>
                            </Link>
                        </div>
                        <div className="lg:w-[250px] w-[172px] h-[185px]">
                            <Link
                                href="/"
                                className="lg:w-[250px] w-[172px] h-[37px] py-[8px]"
                            >
                                <h1 className="lg:w-[250px] w-[172px] h-[21px] text-[14px] text-center lg:text-left text-black">
                                Learning
                                </h1>
                            </Link>
                        </div>
                        <div className="lg:w-[250px] w-[172px] h-[185px] ">
                            <Link
                                href="/"
                                className="lg:w-[250px] w-[172px] h-[37px] py-[8px]"
                            >
                                <h1 className="lg:w-[250px] w-[172px] h-[21px] text-[14px] text-center lg:text-left text-black">
                                Interview Preparation
                                </h1>
                            </Link>
                        </div>
                        <div className="lg:w-[250px] w-[172px] h-[185px] ">
                            <Link
                                href="/"
                                className="lg:w-[250px] w-[172px] h-[37px] py-[8px]"
                            >
                                <h1 className="lg:w-[250px] w-[172px] h-[21px] text-[14px] text-center lg:text-left text-black">
                                Jobs
                                </h1>
                            </Link>
                        </div>
                    </div>
                    <div className="lg:w-[250px] w-[172px] h-[225px] flex flex-col gap-[16px]">
                        <h1 className=" lg:w-[250px] w-[172px] h-[24px] font-semibold text-[16px] text-center lg:text-left text-black">
                        About Us
                        </h1>
                        <div className="lg:w-[250px] w-[172px] h-[185px] ">
                            <Link
                                href="/"
                                className="lg:w-[250px] w-[172px] h-[37px] py-[8px]"
                            >
                                <h1 className="lg:w-[250px] w-[172px] h-[21px] text-[14px] text-center lg:text-left text-black">
                                Contact
                                </h1>
                            </Link>
                        </div>
                        <div className="lg:w-[250px] w-[172px] h-[185px] ">
                            <Link
                                href="/"
                                className="lg:w-[250px] w-[172px] h-[37px] py-[8px]"
                            >
                                <h1 className="lg:w-[250px] w-[172px] h-[21px] text-[14px] text-center lg:text-left text-black">
                                Help/Support
                                </h1>
                            </Link>
                        </div>
                        <div className="lg:w-[250px] w-[172px] h-[185px] ">
                            <Link
                                href="/"
                                className="lg:w-[250px] w-[172px] h-[37px] py-[8px]"
                            >
                                <h1 className="lg:w-[250px] w-[172px] h-[21px] text-[14px] text-center lg:text-left text-black">
                                FAQ
                                </h1>
                            </Link>
                        </div>
                        <div className="lg:w-[250px] w-[172px] h-[185px]">
                            <Link
                                href="/"
                                className="lg:w-[250px] w-[172px] h-[37px] py-[8px]"
                            >
                                <h1 className="lg:w-[250px] w-[172px] h-[21px] text-[14px] text-center lg:text-left text-black">
                                Terms and Conditions
                                </h1>
                            </Link>
                        </div>
                        <div className="lg:w-[250px] w-[172px] h-[185px] ">
                            <Link
                                href="/"
                                className="lg:w-[250px] w-[172px] h-[37px] py-[8px]"
                            >
                                <h1 className="lg:w-[250px] w-[172px] h-[21px] text-[14px] text-center lg:text-left text-black">
                                Partners
                                </h1>
                            </Link>
                        </div>
                    </div>
                </div>


                
                    <div className="lg:w-[1120px] w-[380px] h-[147px] lg:h-[57px] flex flex-col  gap-[32px]">
                    <div className=" lg:w-[1120px] w-[380px] h-[1px]  bg-black  ">
                    </div>
                        <div className="lg:w-[1120px] w-[380px] h-[114px] lg:h-[24px] flex-col  gap-[24px] flex lg:flex-row items-center justify-center lg:items-end lg:justify-between">
                             
                            <div className="lg:w-[564px] lg:h-[21px] w-[345px] h-[66px] flex flex-col lg:flex-row items-center justify-center gap-[24px] ">
                            <h1 className="w-[195px] h-[21px]  text-[14px] text-center lg:text-left text-black  ">
                                2023 Ddsgnr. All right reserved.
                            </h1>

                            <div className="w-[345px] h-[21px]  flex flex-row gap-[24px]">
                                <h1 className="w-[87px] h-[21px] text-[14px] text-black underline ">
                                    Privacy Policy
                                </h1>
                                <h1 className="w-[105px] h-[21px] text-[14px] text-black underline">
                                    Terms of Service
                                </h1>
                                <h1 className="w-[105px] h-[21px] text-[14px] text-black underline">
                                    Cookies Settings
                                </h1>
                            </div>
                            </div>
                             
                            <div className="w-[132px] h-[24px] items-center justify-center flex flex-row gap-[12px]">
                                <Image
                                    src="/images/facebook.svg"
                                    alt="facebook"
                                    width={10}
                                    height={18}
                                    className="w-[10px] h-[18px] "
                                />
                                <Image
                                    src="/images/instagram.svg"
                                    alt="instagram"
                                    width={18}
                                    height={18}
                                    className="w-[18px] h-[18px] "
                                />
                                <Image
                                    src="/images/Twitter.svg"
                                    alt="twitter"
                                    width={18}
                                    height={15.3}
                                    className="w-[18px] h-[15.3px] "
                                />
                                <Image
                                    src="/images/LinkedIn.svg"
                                    alt="linkedin"
                                    width={18}
                                    height={18}
                                    className="w-[18px] h-[18px] "
                                />
                            </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;