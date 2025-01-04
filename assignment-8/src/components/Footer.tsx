import React from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="w-[98%] mx-auto h-auto bg-gray-100 mt-32 flex flex-col justify-center items-center space-y-4 p-4">
        <div className="w-full flex flex-col items-center space-y-4">
          <Label htmlFor="picture" className="text-xl font-bold">
            Subscribe to Newsletter
          </Label>
          <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-[80%] lg:w-[60%]">
            <Input
              placeholder="Enter your email"
              className="bg-white h-12 flex-1"
            />
            <button className="px-4 py-2 w-full sm:w-auto bg-orange-500 shadow-lg hover:bg-white hover:text-orange-500 text-white rounded-full">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="h-auto flex flex-col justify-center items-center p-4 py-10">
        <div className="flex flex-wrap justify-center gap-4 mb-4">
          <FaFacebook
            size={40}
            className="bg-gray-300 p-2 rounded-full hover:bg-gray-400 transition"
          />
          <FaTwitter
            size={40}
            className="bg-gray-300 p-2 rounded-full hover:bg-gray-400 transition"
          />
          <FaInstagram
            size={40}
            className="bg-gray-300 p-2 rounded-full hover:bg-gray-400 transition"
          />
          <FaYoutube
            size={40}
            className="bg-gray-300 p-2 rounded-full hover:bg-gray-400 transition"
          />
        </div>
        <span className="text-gray-400 text-center my-4 ">
  Copyright ©2024 All rights reserved | This template is made with by Colorlib
</span>

        <div className="flex flex-wrap justify-center gap-4 text-gray-400">
          <h1 className="border-b-4 border-transparent hover:border-orange-500 cursor-pointer">
            Terms & Conditions
          </h1>
          <span>/</span>
          <h1 className="border-b-4 border-transparent hover:border-orange-500 cursor-pointer">
            Privacy Policy
          </h1>
        </div>
      </div>
    </>
  );
};

export default Footer;
