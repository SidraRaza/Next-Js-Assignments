import Link from "next/link";
import React from "react";
import Image from "next/image";
import ResponsiveNav from "@/components/ResponsiveNav";

const page = () => {
  return (
    <>
      <div className="w-full h-auto">
        <div className="hidden lg:block">
          <div className="max-w-screen-xl h-[91px] flex items-center justify-between mx-auto px-4">
            <h1 className="text-2xl font-bold text-[#252B42]">Bandage</h1>
            <div className="flex items-center gap-6">
              <Link href="/" className="text-sm font-bold text-[#737373]">Home</Link>
              <Link href="/ProductList" className="text-sm font-bold text-[#737373]">Product</Link>
              <Link href="#" className="text-sm font-bold text-[#737373]">Pricing</Link>
              <Link href="/contact" className="text-sm font-bold text-[#737373]">Contact</Link>
            </div>
            <div className="flex items-center gap-10">
              <Link href="#" className="text-sm font-bold text-[#23A6F0]">Login</Link>
              <Image src="/btn.svg" alt="cart" width={214} height={52} />
            </div>
          </div>
        </div>
        
        <div className="md:hidden block">
          <ResponsiveNav />
        </div>
        
        <div className="w-full flex items-center justify-center px-4 mt-[50px] lg:mt-0">
          <div className="max-w-4xl flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Text Section */}
            <div className="flex flex-col items-start gap-5 lg:w-2/3">
              <h1 className="text-base font-bold text-[#252B42]">ABOUT COMPANY</h1>
              <h1 className="text-3xl lg:text-5xl font-bold">ABOUT US</h1>
              <h2 className="text-lg lg:text-xl text-[#737373] max-w-[376px]">
                We know how large objects will act, but things on a small scale
              </h2>
              <div className="py-3 px-8 bg-[#23A6F0] rounded-md">
                <button className="text-sm font-bold text-white">Get Quote Now</button>
              </div>
            </div>
            {/* Image Section */}
            <div className="w-full max-w-[451px]">
              <Image src="/about.svg" alt="about" width={451} height={545} className="w-full h-auto" />
            </div>
          </div>
        </div>

      </div>

      <div className="w-full bg-[#f4f4f4] py-12">
        <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 px-4">
          <div className="flex flex-col items-start gap-6 w-full lg:w-1/3">
            <h1 className="text-lg font-bold text-[#E74040]">Problems trying</h1>
            <p className="text-2xl font-bold text-[#252B42]">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent.
            </p>
          </div>
          <div className="w-full lg:w-2/3 flex justify-center items-center text-center lg:text-left">
            <p className="text-sm text-[#737373]">
              Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
            </p>
          </div>
        </div>
      </div>

      <div className="w-full py-16">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-[#252B42]">15K</h1>
            <p className="text-sm font-bold text-[#737373]">Happy Customers</p>
          </div>
          <div className="text-center">
            <h1 className="text-5xl font-bold text-[#252B42]">150K</h1>
            <p className="text-sm font-bold text-[#737373]">Monthly Visitors</p>
          </div>
          <div className="text-center">
            <h1 className="text-5xl font-bold text-[#252B42]">15</h1>
            <p className="text-sm font-bold text-[#737373]">Countries Worldwide</p>
          </div>
          <div className="text-center">
            <h1 className="text-5xl font-bold text-[#252B42]">100+</h1>
            <p className="text-sm font-bold text-[#737373]">Top Partners</p>
          </div>
        </div>
      </div>

      <div className="w-full py-16 flex justify-center items-center bg-[#E5E5E5]">
        <Image src="/video.svg" alt="about" width={989} height={540} className="w-full max-w-screen-xl" />
      </div>

      <div className="w-full bg-[#F4F4F4] py-20">
        <div className="max-w-screen-xl mx-auto flex flex-col items-center gap-12 px-4">
          <h1 className="text-4xl font-bold text-[#252B42]">Meet Our Team</h1>
          <p className="text-base text-center text-[#737373] max-w-[460px]">
            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
  <div className="w-full sm:w-auto sm:max-w-[316px]">
    <Image src="/team1.svg" alt="team" width={316} height={383} />
  </div>
  <div className="w-full sm:w-auto sm:max-w-[316px]">
    <Image src="/team2.svg" alt="team" width={316} height={383} />
  </div>
  <div className="w-full sm:w-auto sm:max-w-[316px]">
    <Image src="/team3.svg" alt="team" width={316} height={383} />
  </div>
</div>

        </div>
      </div>

      <div className="w-full bg-[#2A7CC7] py-20">
        <div className="max-w-screen-xl mx-auto flex items-center gap-12 px-4">
          <div className="w-full lg:w-1/2 flex flex-col justify-center items-center text-center lg:text-left">
            <h1 className="text-lg font-bold text-white">WORK WITH US</h1>
            <h2 className="text-4xl font-bold text-white max-w-[440px]">
              Now Let’s grow Yours
            </h2>
            <p className="text-sm text-white max-w-[440px]">
              The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th
            </p>
            <button className="py-3 px-8 mt-6 bg-white text-[#2A7CC7] rounded-md font-bold">
              Button
            </button>
          </div>
          <div className="w-full lg:w-1/2 hidden lg:block">
            <Image src="/banner9.svg" alt="banner" width={590} height={640} />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
