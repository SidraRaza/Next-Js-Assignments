import Image from 'next/image';
import React from 'react';

const MinHeader = () => {
  return (
    <div className='lg:w-[1280px] lg:h-[54px]  bg-[#F7F7F7] pr-[64px] pl-[62px] lg:flex hidden sm:block items-center justify-between mx-auto '>
      {/* Contact Info */}
      <div className='flex items-center gap-4 '>
        <h1 className='lg:w-auto lg:h-auto text-[14px]'>Phone Number: 956 742 455 678</h1>
        <div className='lg:h-[30px] border-l border-[#676767]'></div>
        <h1 className='lg:w-auto lg:h-auto text-[14px]'>Email: info@ddsgnr.com</h1>
      </div>
      
      {/* Social Media Icons */}
      <div className='flex items-center gap-4'>
        <Image src='/Facebook.svg' alt='Facebook' width={24} height={24} />
        <Image src='/Instagram.svg' alt='Instagram' width={24} height={24} />
        <Image src='/Twitter.svg' alt='Twitter' width={24} height={24} />
        <Image src='/LinkedIn.svg' alt='LinkedIn' width={24} height={24} />
      </div>
    </div>
  );
};

export default MinHeader;
