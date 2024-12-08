import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ResponsiveNav from '@/components/ResponsiveNav';

const Page = () => {
  return (
    <>
    <div className="hidden lg:block">
      <div className="w-full max-w-[1322px] h-[91px] flex items-center justify-between mx-auto px-4 md:px-0">
        <h1 className="text-[24px] leading-[32px] font-bold text-[#252B42]">Bandage</h1>

        {/* Navigation Links */}
        <div className="hidden md:flex w-[275px] h-[24px] items-center gap-[21px]">
          <Link href="/" className="text-[14px] leading-[24px] font-bold text-[#737373]">
            Home
          </Link>
          <Link href="/" className="text-[14px] leading-[24px] font-bold text-[#737373]">
            Product
          </Link>
          <Link href="/" className="text-[14px] leading-[24px] font-bold text-[#737373]">
            Pricing
          </Link>
          <Link href="/" className="text-[14px] leading-[24px] font-bold text-[#737373]">
            Contact
          </Link>
        </div>

        {/* Login and Button */}
        <div className="w-full md:w-[300px] h-[52px] flex justify-end md:justify-center items-center gap-[20px]">
          <Link href="/" className="text-[14px] leading-[22px] font-bold text-[#23A6F0]">
            Login
          </Link>
          <Image
            src={"/btn.svg"}
            alt="cart"
            width={214}
            height={52}
            className="hidden md:block w-[214px] h-[52px]"
          />
        </div>
      </div>
      </div>
      <div className="md:hidden block">
          <ResponsiveNav />
        </div>

      {/* Hero Section */}
      <div className="w-full max-w-[1322px] h-[280px] flex items-center flex-col justify-center py-[50px] mx-auto">
        <h1 className="text-[16px] leading-[24px] font-bold text-[#737373]">WHAT WE DO</h1>
        <h1 className="lg:text-[58px] text-[24px] leading-[80px] font-bold text-[#252B42]">Innovation tailored for you</h1>
        <div className="w-[122px] h-[44px] gap-[10px] flex justify-center items-center">
          <h1 className="text-[14px] leading-[24px] font-bold text-[#252B42]">Home</h1>
          <Image src="/arrow2.svg" alt="arrow" width={9} height={16} className="w-[9px] h-[16px]" />
          <h1 className="text-[14px] leading-[24px] font-bold text-[#252B42]">Team</h1>
        </div>
      </div>

      {/* Team Section */}
      <div className="w-full max-w-[1322px] h-[530px] flex gap-[24px] mb-[100px] mx-auto">
        <Image
          src="/b2.svg"
          alt="team"
          width={700}
          height={530}
          className="w-[700px] h-[530px] object-cover"
        />
        <div className="w-full md:w-[725px] h-[260px] flex items-center justify-center gap-[24px]">
          <div className="w-full md:w-[695px] h-[260px] flex flex-col gap-[24px]">
            <Image src="/ba4.svg" alt="team" width={361} height={260} className="w-full h-auto" />
            <Image src="/t11.svg" alt="team" width={361} height={260} className="w-full h-auto" />
          </div>
          <div className="w-full md:w-[695px] h-[260px] flex flex-col gap-[24px]">
            <Image src="/t10.svg" alt="team" width={361} height={260} className="w-full h-auto" />
            <Image src="/t12.svg" alt="team" width={361} height={260} className="w-full h-auto" />
          </div>
        </div>
      </div>

      {/* Meet Our Team Section */}
      <div className="w-full max-w-[1322px] h-[1559px] flex gap-[24px] mb-[100px] mx-auto">
        <div className="w-full md:w-[1050px] h-[1759px] flex flex-col gap-[112px] mx-auto">
          <div className="w-full md:w-[607px] h-[50px] text-center mx-auto">
            <h1 className="text-[40px] leading-[50px] font-bold text-[#252B42]">Meet Our Team</h1>
          </div>
          <div className="w-full md:w-[1034px] h-[383px] flex justify-center items-center gap-[30px]">
            <Image src="/t1.svg" alt="team" width={1034} height={383} className="w-full h-auto" />
            <Image src="/t2.svg" alt="team" width={1034} height={383} className="w-full h-auto" />
            <Image src="/t3.svg" alt="team" width={1034} height={383} className="w-full h-auto" />
          </div>
          <div className="w-full md:w-[1034px] h-[383px] flex justify-center items-center gap-[30px]">
            <Image src="/t4.svg" alt="team" width={1034} height={383} className="w-full h-auto" />
            <Image src="/t5.svg" alt="team" width={1034} height={383} className="w-full h-auto" />
            <Image src="/t6.svg" alt="team" width={1034} height={383} className="w-full h-auto" />
          </div>
          <div className="w-full md:w-[1034px] h-[383px] flex justify-center items-center gap-[30px]">
            <Image src="/t7.svg" alt="team" width={1034} height={383} className="w-full h-auto" />
            <Image src="/t8.svg" alt="team" width={1034} height={383} className="w-full h-auto" />
            <Image src="/t9.svg" alt="team" width={1034} height={383} className="w-full h-auto" />
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="w-full max-w-[1322px] h-[442px] flex justify-center flex-col items-center gap-[48px] mb-[100px] mx-auto">
        <h1 className="lg:text-[40px] text-[30px] leading-[50px] font-bold text-[#252B42]">Start your 14 days free trial</h1>
        <h1 className="text-[16px] leading-[24px] text-[#737373] text-center">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent.
        </h1>
        <div className="w-[186px] h-[52px] gap-[10px] flex justify-center items-center py-[15px] px-[40px] bg-[#23A6F0]">
          <button className="text-[14px] leading-[22px] font-bold text-white">Try it free now</button>
        </div>
        <Image src="/sm.svg" alt="team" width={242} height={50} className="w-[242px] h-[50px]" />
      </div>
    </>
  );
};

export default Page;