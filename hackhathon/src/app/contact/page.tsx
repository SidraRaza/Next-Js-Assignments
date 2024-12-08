import React from 'react'

import Link from 'next/link'

import Image from 'next/image'

import ResponsiveNav from '@/components/ResponsiveNav'



const page = () => {

  return (

    <>
 <div className="md:hidden block">
          <ResponsiveNav />
        </div>
      {/* Desktop Layout */}

      <div className="w-full h-auto hidden md:block">

        <div className="w-full max-w-[1322px] h-[91px] flex items-center justify-between mx-auto px-4">

          <h1 className="text-[24px] leading-[32px] font-bold text-[#252B42]">

            Bandage

          </h1>

          <div className="w-[275px] h-[24px] flex items-center gap-[21px] justify-between">

            <Link

              href="/"

              className="text-[14px] leading-[24px] font-bold text-[#737373]"

            >

              Home

            </Link>

            <Link

              href="/ProductList"

              className="text-[14px] leading-[24px] font-bold text-[#737373]"

            >

              Product

            </Link>

            <Link

              href="#"

              className="text-[14px] leading-[24px] font-bold text-[#737373]"

            >

              Pricing

            </Link>

            <Link

              href="/contact"

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

              Login

            </Link>

            <Image

              src="/btn.svg"

              alt="cart"

              width={214}

              height={52}

              className="w-[214px] h-[52px]"

            />

          </div>

        </div>



       



        {/* Contact Section */}

        <div className="w-full max-w-[1050px] h-auto flex items-center justify-between mx-auto px-4 py-12">

          <div className="w-full md:w-[599px] h-auto flex flex-col justify-center items-start gap-[35px]">

            <h1 className="text-[16px] leading-[24px] font-bold text-[#252B42]">

              CONTACT US

            </h1>

            <h1 className="text-[58px] leading-[80px] font-bold">

              Get in touch today!

            </h1>

            <h1 className="text-[20px] leading-[20px] text-[#737373]">

              We know how large objects will act, but things on a small scale

            </h1>

            <h1 className="text-[24px] leading-[32px] text-black">Phone: +451 215 215</h1>

            <h1 className="text-[24px] leading-[32px] font-bold text-black">

              Fax: +451 215 215

            </h1>

            <div className="w-[242px] h-[50px]">

              <Image

                src="/link9.svg"

                alt="link"

                width={242}

                height={50}

                className="w-full h-auto"

              />

            </div>

          </div>

          <div className="w-full md:w-[651px] h-auto">

            <Image

              src="/contact9.svg"

              alt="contact"

              width={651}

              height={842}

              className="w-full h-auto"

            />

          </div>

        </div>

      </div>



      {/* Second Section */}

      <div className="w-full h-auto py-12">

        <div className="w-full max-w-[1050px] h-auto flex justify-center flex-col items-center mx-auto gap-20">

          <div className="w-full max-w-[663px] text-center">

            <h1 className="text-[14px] leading-[24px] font-bold text-[#252B42]">

              VISIT OUR OFFICE

            </h1>

            <p className="text-[40px] font-bold leading-[50px] text-[#252B42]">

              We help small businesses with big ideas

            </p>

          </div>

          <div className="w-full max-w-[1085px] flex flex-wrap justify-center gap-8 items-center">

            {/* Left Box */}

            <div className="w-full sm:w-[327px] h-auto flex justify-center flex-col items-center gap-4">

              <Image

                src="/phone8.svg"

                alt="phone"

                width={72}

                height={72}

                className="w-[72px] h-[72px]"

              />

              <h1 className="text-[14px] font-bold text-[#252B42]">

                Georgia.young@example.com

              </h1>

              <h1 className="text-[14px] font-bold text-[#252B42]">

                Georgia.young@ple.com

              </h1>

              <p className="text-[16px] font-bold text-[#252B42]">Get Support</p>

              <div className="w-[189px] h-[54px] flex justify-center items-center gap-[10px] py-[15px] px-[36px] border-[1px] border-[#23A6F0] rounded-full">

                <button className="text-[12px] w-[117px] leading-[24px] font-bold text-[#23A6F0]">

                  Submit Request

                </button>

              </div>

            </div>



            {/* Middle Box */}

            <div className="w-full sm:w-[329px] flex justify-center items-center">

              <Image

                src="/link14.svg"

                alt="link"

                width={329}

                height={403}

                className="w-full h-auto"

              />

            </div>



            {/* Right Box */}

            <div className="w-full sm:w-[327px] h-auto flex justify-center flex-col items-center gap-4">

              <Image

                src="/mail.svg"

                alt="mail"

                width={72}

                height={72}

                className="w-[72px] h-[72px]"

              />

              <h1 className="text-[14px] font-bold text-[#252B42]">

                Georgia.young@example.com

              </h1>

              <h1 className="text-[14px] font-bold text-[#252B42]">

                Georgia.young@ple.com

              </h1>

              <p className="text-[16px] font-bold text-[#252B42]">Get Support</p>

              <div className="w-[189px] h-[54px] flex justify-center items-center gap-[10px] py-[15px] px-[36px] border-[1px] border-[#23A6F0] rounded-full">

                <button className="text-[12px] w-[117px] leading-[24px] font-bold text-[#23A6F0]">

                  Submit Request

                </button>

              </div>

            </div>

          </div>

        </div>

      </div>



      {/* Footer Image */}

      <div className="w-full h-auto">

        <Image

          src="/talk.svg"

          alt="footer"

          width={1050}

          height={348}

          className="w-full h-auto"

        />

      </div>

    </>

  );

};



export default page;