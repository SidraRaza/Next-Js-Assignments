import Image from "next/image";
import React from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const Hero = () => {
  return (
    <div className={`${poppins.className} w-[90%] mx-auto pt-16`}>
      {/* Title */}
      <div>
        <h1 className="text-4xl font-bold text-center mb-10">Trending</h1>
      </div>

      {/* Content Container */}
      <div className="flex flex-col lg:flex-row justify-center items-center  gap-10 lg:gap-0">
        {/* Left Side */}
        <div className="flex justify-center items-center w-full lg:w-[40%]">
          <Image
            src={"/hero-1.webp"}
            alt="Trending Image"
            width={600}
            height={700}
            className="rounded-lg w-full max-w-[600px] h-auto"
          />
        </div>

        {/* Right Side */}
        <div className="flex justify-center  items-center w-full lg:w-[50%] lg:ml-10 ml-0">
          <div className="flex flex-col  lg:text-left">
            <h1 className="text-gray-400">
              <b className="text-black">Business, Travel</b> — July 2, 2020
            </h1>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold my-5">
              Your most unhappy customers are your greatest source of learning.
            </h1>
            <h1 className="text-gray-400">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </h1>

            {/* Author Info */}
            <div className="flex items-center justify-center lg:justify-start my-5">
              <Image
                src={"/person_1.jpg.webp"}
                alt="Author"
                width={50}
                height={50}
                className="rounded-full"
              />
              <div className="flex flex-col ml-3">
                <h1 className="text-black font-bold">Sergy Campbell</h1>
                <h1 className="text-gray-400 text-sm">CEO and Founder</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
