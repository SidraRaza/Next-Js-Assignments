import Link from "next/link";
import React from "react";
import Image from "next/image";
import ResponsiveNav from "@/components/ResponsiveNav";


const Header2 = () => {
  return (
    <>
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
  </>
  )
}

export default Header2