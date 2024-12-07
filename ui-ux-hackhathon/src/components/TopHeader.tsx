import Image from "next/image"

const TopHeader = () => {
  return (
    <nav className="w-[1440px] h-[48px] bg-black flex flex-row items-center justify-center ">
      <div className="w-[859px] h-[24px] flex flex-row gap-[231px]">
        <div className="w-[550px] h-[24px] flex flex-row gap-[8px]">
          <h1 className="w-[474px] h-[18px] text-[14px] text-white ">Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</h1>
          <button className="text-[14px] w-[72px] h-[24px] font-semibold text-white text-center underline">Shop Now</button>
        </div>
        <div className="w-[78px] h-[24px] flex flex-row gap-[5px]">
          <h1 className="w-[49px] h-[21px] text-[14px] text-white">English</h1>
          <Image
            src="/images/DropDown.png"
            width={24}
            height={24}
            alt="arrow"
          />
        </div>
      </div>

    </nav>
  )
}

export default TopHeader
