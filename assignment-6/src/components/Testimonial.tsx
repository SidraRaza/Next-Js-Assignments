import React from 'react'
import Image from 'next/image'

const Testimonial = () => {
    return (
        <div className='lg:w-[1280px] lg:h-[830.89px] w-[428px] h-[681.89px] px-[24px] py-[48px] gap-[48px] flex flex-col lg:gap-[80px] lg:px-[64px] lg:py-[112px] bg:white lg:bg-[#F7F7F7] '>
            <div className='lg:w-[560px] lg:h-[109px] w-[361px] h-[120px] flex flex-col gap-[24px]'>
                <h1 className='w-[560px] h-[58px] font-bold text-[48px] hidden lg:flex  text-black text-left'>Customer testimonials</h1>
                <h1 className='w-[315px] h-[42px] font-bold text-[32px]  lg:hidden  text-black text-center'>What Our Student Say</h1>
                <p className='lg:w-[560px] lg:h-[27px] w-[361px] h-[54px] text-[18px] text-black text-center lg:text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            <div className='lg:w-[1152px] w-[380px] h-[417.89px]  flex flex-col gap-[48px]'>
                <div className='lg:w-[1152px] w-[380px] h-[321.89px] flex flex-row gap-[32px]'>
                    <div className='lg:w-[362.67px] w-[380px] h-[321.89px] flex flex-col border-[1px] border-black gap-[24px] p-[32px]'>
                        <Image
                            src={'/images/Stars.svg'}
                            alt='stars'
                            width={116}
                            height={18.89}
                            className='flex gap-[4px]'
                        />
                        <div className='lg:w-[298.67px] w-[316px] h-[215px] flex flex-col gap-[24px] '>
                            <p className='lg:w-[298.67px] w-[316px] h-[135px] text-[18px] text-black'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.</p>
                            <div className='lg:w-[215px] w-[254px] h-[56px] flex flex-row gap-[20px] '>
                                <Image
                                    src={'/images/team3.svg'}
                                    alt='team'
                                    width={56}
                                    height={56}
                                    className='rounded-full'
                                />
                                <div className='lg:w-[139px] w-[178px] h-[48] '>
                                    <h1 className='lg:w-[99px] w-[96px] h-[24px] text-[16px] font-semibold text-black'>Wade Warren</h1>
                                    <p className='lg:w-[139px] w-[178px] h-[24px] text-[16px] text-black'>Position, Company name</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-[362.67px] h-[321.89px] hidden lg:flex flex-col border-[1px] border-black gap-[24px] p-[32px]'>
                        <Image
                            src={'/images/Stars.svg'}
                            alt='stars'
                            width={116}
                            height={18.89}
                            className='flex gap-[4px]'
                        />
                        <div className='w-[298.67px] h-[215px] flex flex-col gap-[24px] '>
                            <p className='w-[298.67px] h-[135px] text-[18px] text-black'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.</p>
                            <div className='w-[193px] h-[56px] flex flex-row gap-[20px] '>
                                <Image
                                    src={'/images/team1.svg'}
                                    alt='avatar'
                                    width={56}
                                    height={56}
                                    className='rounded-full'
                                />
                                <div className='w-[117px] h-[48] '>
                                    <h1 className='w-[117px] h-[24px] text-[16px] font-semibold text-black'>Erick Kipkemboi</h1>
                                    <p className='w-[101px] h-[24px] text-[16px] text-black'>Scrum Master</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-[362.67px] h-[321.89px] hidden  lg:flex flex-col border-[1px] border-black gap-[24px] p-[32px]'>
                        <Image
                            src={'/images/Stars.svg'}
                            alt='stars'
                            width={116}
                            height={18.89}
                            className='flex gap-[4px]'
                        />
                        <div className='w-[298.67px] h-[215px] flex flex-col gap-[24px] '>
                            <p className='w-[298.67px] h-[115px] text-[18px] text-black'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.</p>
                            <div className='w-[191px] h-[56px] flex flex-row gap-[20px] '>
                                <Image
                                    src={'/images/team6.svg'}
                                    alt='team'
                                    width={56}
                                    height={56}
                                    className='rounded-full'
                                />
                                <div className='w-[115px] h-[48] '>
                                    <h1 className='w-[115px] h-[24px] text-[16px] font-semibold text-black'>Stephen Kerubo</h1>
                                    <p className='w-[109px] h-[24px] text-[16px] text-black'>UI/UX Designer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='lg:w-[1152px] w-[380px] h-[48px] flex flex-row justify-between'>
                    <Image
                        src={'/images/Dots.svg'}
                        alt='dot'
                        width={72}
                        height={8}
                        className='flex gap-[8px]'
                    />
                    <div className='w-[111px] h-[48px]  flex flex-row gap-[15px]'>
                        <div className='w-[48px] h-[48px] rounded-[50px] border-[1px] border-black p-[12px] flex gap-[8px]'>
                            <Image
                                src={'/images/Icon1.svg'}
                                alt='icon'
                                width={24}
                                height={24}
                                className=''
                            />
                        </div>
                        <div className='w-[48px] h-[48px] rounded-[50px] border-[1px] border-black p-[12px] flex gap-[8px]'>
                            <Image
                                src={'/images/Icon2.svg'}
                                alt='icon'
                                width={24}
                                height={24}
                                className=''
                            />
                        </div>


                    </div>

                </div>
            </div>

        </div>
    )
}


export default Testimonial