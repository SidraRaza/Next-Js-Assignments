import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const page = () => {
  return (
    <>
    <div className="w-[1440px] h-[882px] ">
    <div className="w-[1322px] h-[91px] flex items-center justify-between mx-auto">
      <h1 className="text-[24px] leading-[32px] font-bold text-[#252B42]">
        Bandage
      </h1>
      <div className="w-[275px] h-[24px] flex items-center  gap-[21px] justify-between">
        <Link
          href="/"
          className="text-[14px] leading-[24px] font-bold text-[#737373]"
        >
          Home
        </Link>
        <Link
          href="/"
          className="text-[14px] leading-[24px] font-bold text-[#737373]"
        >
          Product
        </Link>
        <Link
          href="/"
          className="text-[14px] leading-[24px] font-bold text-[#737373]"
        >
          Pricing
        </Link>
        <Link
          href="/"
          className="text-[14px] leading-[24px] font-bold text-[#737373]"
        >
          Contact
        </Link>
      </div>
      <div className="w-[300px] h-[52px] flex justify-center items-center gap-[45px]">
        <Link
          href="/"
          className="text-[14px] leading-[22px] font-bold text-[#23A6F0]"
        >
          Login{" "}
        </Link>
        <Image
          src={"/btn.svg"}
          alt="cart"
          width={214}
          height={52}
          className="w-[214px] h-[52px]"
        />
      </div>
    </div>
    <div className="w-[1050px] h-[742px] flex items-center justify-between mx-auto">
      <div className="w-[599px] h-[231px] flex flex-col justify-center items-left gap-[35px]">
        <h1 className="text-[16px] leading-[24px] font-bold text-[#252B42]">
        CONTACT US
        </h1>
        <h1 className="text-[58px] leading-[80px] font-bold w-[542px]">
        Get in touch 
        today!
        </h1>
        <h1 className="text-[20px] leading-[20px] w-[376px] text-[#737373]">
        We know how large objects will act, 
        but things on a small scale
        </h1>
      <h1 className="text-[24px] leading-[32px]  text-black">Phone ; +451 215 215 </h1>
      <h1 className='text-[24px] leading-[32px] font-bold text-black'>Fax : +451 215 215</h1>
      <div className='w-[242px] h-[50px] '>
        <Image
          src="/link9.svg"
          alt="link"
          width={242}
          height={50}
          className="w-[242px] h-[50px]"
        />  
      </div>
      </div>
      <div className="w-[651px] h-[842px]">
        <Image
          src={"/contact9.svg"}
          alt="about"
          width={651}
          height={842}
          className="w-[651px] h-[842px]"
        />
      </div>
    </div>
  </div>
  <div className='w-[1440px] h-[814px] '>
    <div className='w-[1050px] h-[841px] py-[112px] flex justify-center flex-col items-center mx-auto gap-[80px] my-[112px]'>
        <div className='w-[663px] h-[134px] flex flex-col justify-center items-center'>
            <h1 className='text-[14px] leading-[24px] font-bold text-[#252B42]'>VISIT OUR OFFICE</h1>
            <p className='w-[545px] h-[100px] text-[40px] font-bold leading-[50px] text-[#252B42] text-center'>We help small businesses 
            with big ideas</p>
        </div>
        <div className='w-[985px] h-[403px] flex Justify-center flex-row gap-[30px]'>
            <div className='w-[327px] h-[343px] flex justify-center flex-col items-center gap-[10px]'>
                <Image
                  src={"/phone8.svg"}
                  alt="about"
                  width={72}
                  height={72}
                  className="w-[72px] h-[72px]"
                />
                <h1 className='text-[14px] leading-[24px] font-bold text-[#252B42]'>georgia.young@example.com</h1>
                <h1 className='text-[14px] leading-[24px] font-bold text-[#252B42]'>georgia.young@ple.com</h1>
                <p className='text-[16px] leading-[24px] font-bold text-[#252B42]'>Get Support</p>
                <div className='w-[189px] h-[54px] flex justify-center items-center gap-[10px] py-[15px] px-[36px] border-[1px] border-[#23A6F0] rounded-full'>
                    <button className='text-[12px] w-[117px] leading-[24px] font-bold text-[#23A6F0]'>Submit Request</button>
                </div>
               
            </div>
            <div className='w-[329px] h-[403px] flex justify-center items-center'>
                    <Image
                      src={"/link14.svg"}
                      alt="about"
                      width={329}
                      height={403}
                      className="w-[329px] h-[403px]"   
                    />
                </div>
                <div className='w-[327px] h-[343px] flex justify-center flex-col items-center gap-[10px]'>
                <Image
                  src={"/mail.svg"}
                  alt="about"
                  width={72}
                  height={72}
                  className="w-[72px] h-[72px]"
                />
                <h1 className='text-[14px] leading-[24px] font-bold text-[#252B42]'>georgia.young@example.com</h1>
                <h1 className='text-[14px] leading-[24px] font-bold text-[#252B42]'>georgia.young@ple.com</h1>
                <p className='text-[16px] leading-[24px] font-bold text-[#252B42]'>Get Support</p>
                <div className='w-[189px] h-[54px] flex justify-center items-center gap-[10px] py-[15px] px-[36px] border-[1px] border-[#23A6F0] rounded-full'>
                    <button className='text-[12px] w-[117px] leading-[24px] font-bold text-[#23A6F0]'>Submit Request</button>
                </div>
               
            </div>
        </div>
    </div>
  
  
  </div>
  <div className='w-[1050px] h-[348px] mx-auto'>
        <Image
          src={"/talk.svg"}
          alt="about"
          width={1050}
          height={348}
          className="w-[1050px] h-[348px]"
        />
    </div>
  </>
  )
}

export default page