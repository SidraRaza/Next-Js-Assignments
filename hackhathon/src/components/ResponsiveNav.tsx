import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet"


const ResponsiveNav = () => {
  return (
    <div className='w-[414px] h-[58px]   md:hidden block'>
        <div className='w-[349px] h-[58px] flex items-center justify-between mx-auto'>
            <h1 className='text-[24px] leading-[32px] font-bold'>Bandage</h1>
          <div className='h-[24px] flex justify-center items-center gap-[32px]'>
          <Image src={'/s4.svg'} alt="close" width={24} height={24} className='w-[24px] h-[24px] text-black'/>
            <Image src={'/basket2.svg'} alt="menu" width={24} height={24} className='w-[24px] h-[24px]'/>
            <Sheet>
  <SheetTrigger><Image src={'/menu.svg'} alt="menu" width={24} height={24} className='w-[24px] h-[24px]'/></SheetTrigger>
  <SheetContent>
    <SheetHeader>
      
      <SheetDescription>
     
          <div className='w-[123px] h-[270px] flex flex-col gap-[24px] justify-center items-center'>
            <Link href='/' className='text-[14px] leading-[24px] font-bold text-[#737373]'>Home</Link>
            <Link href='/ProductList' className='text-[14px] leading-[24px] font-bold text-[#737373]'>Product</Link>
            <Link href='/team' className='text-[14px] leading-[24px] font-bold text-[#737373]'>Pricing</Link>
            <Link href='/contact' className='text-[14px] leading-[24px] font-bold text-[#737373]'>Contact</Link>
   </div>
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>

            
          </div>
          </div>
        
    </div>
  )
}

export default ResponsiveNav