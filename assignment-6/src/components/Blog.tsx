import Image from "next/image";


const Blog = () => {
  return (
    <div className="w-[428px] h-[2135px]  lg:w-[1280px] lg:h-[1742px] flex flex-col items-center gap-[48px] lg:gap-[60px] justify-center ">
      <div className=" w-[249px] h-[93px] lg:w-[768px] lg:h-[118px] flex flex-col items-center justify-center gap-[16px] ">
        <h1
          className={`w-[119px] h-[42px] lg:w-[768px] lg:h-[67px] text-[32px]    lg:text-[56px] text-black font-bold text-center `}
        >
          Courses
        </h1>
        <p
          className={`lg:w-[768px] lg:h-[27px] w-[249px] h-[27px]  text-[18px] text-black text-center `}
        >
          Your Ultimate Guide to learning
        </p>
      </div>
      <div className="lg:w-[1152px] w-[380px] h-[1898px] lg:h-[1340px] flex flex-col justify-center items-center gap-[64px]">
        <div className="w-[336px] h-[40px] flex lg:gap-[8px]">
          <h1
            className={`w-[87px] h-[40px]   border-[#676767] border-b text-[16px] text-black text-center`}
          >
            Popular
          </h1>
          <h1
            className={`w-[140px] h-[40px]   border-[#676767] border-b text-[16px] text-black text-center`}
          >
            Recommended
          </h1>
          <h1
            className={`w-[109px] h-[40px]  border-[#676767] border-b text-[16px] text-black text-center`}
          >
            Best Price
          </h1>
        </div>
        <div className=" lg:w-[1312px] w-[380px] h-[1690px] flex-col gap-[64px] lg:h-[534px] flex lg:flex-row lg:gap-[32px]">
          <div className="lg:w-[416px] w-[380px] h-[558px] gap-[24px] lg:h-[534px] rounded-[5px] flex flex-col lg:gap-[32px] bg-[#F7F7F7]">
            <Image
              src={"/images/Image1.svg"}
              alt="image"
              width={416}
              height={300}
              className="lg:w-[416px] w-[380px] h-[300px] "
            />
            <div className="lg:w-[416px] w-[380px] h-[234px] lg:h-[210px] flex flex-col gap-[24px] px-[16px] pb-[24px]">
              <div className="lg:w-[382px] w-[348px] h-[146px] lg:h-[122px] flex flex-col gap-[8px]">
                <div className="lg:w-[382px] w-[348px] h-[24px] lg:h-[40px] flex flex-row gap-[8px]">
                  <h1 className="w-[326px] h-[21px] text-[14px] text-black font-semibold ">
                    Design
                  </h1>
                  <div className="w-[48px] h-[24px] flex flex-row items-center justify-center gap-[4px] ">
                    <Image
                      src={"/images/Star.svg"}
                      alt="image"
                      width={24}
                      height={24}
                      className="w-[24px] h-[24px] rounded-[1px]  "
                    />
                    <h1 className="w-[20px] h-[24px] text-[14px] text-black text-center font-semibold ">
                      5.0
                    </h1>
                  </div>
                </div>
                <h1 className="lg:w-[382px] w-[191px] h-[34px] lg:h-[34px] font-bold text-black text-left text-[24px]">
                  UX/UI Design 201
                </h1>
                <p className="lg:w-[382px] w-[326px] h-[72] lg:h-[48px] text-[16px] text-black text-left ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros.
                </p>
                <div className="w-[382px] h-[40px] flex flex-row gap-[16px]">
                  <button className="w-[117px] h-[40px] rounded-[5px] border-[1px] border-black flex  gap-[8px] px-[20px] py-[8px]">
                    <h1 className="w-[77px] h-[24px] text-[15px] text-black">
                      Enroll Now
                    </h1>
                  </button>
                  <div className="w-[77px] h-[40px] rounded-[5px] border-[1px] border-black flex gap-[8px] px-[20px] py-[8px]">
                    <button className="w-[37px] h-[24px] font-medium text-[16px] text-black">
                      $400
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-[416px] w-[380px] h-[534px] gap-[24px] lg:h-[534px] rounded-[5px] flex flex-col lg:gap-[32px] bg-[#F7F7F7]">
            <Image
              src={"/images/Image2.svg"}
              alt="image"
              width={416}
              height={300}
              className="lg:w-[416px] w-[380px] h-[300px] "
            />
            <div className="lg:w-[416px] w-[380px] h-[234px] lg:h-[210px] flex flex-col gap-[24px] px-[16px] pb-[24px]">
              <div className="lg:w-[382px] w-[348px] h-[146px] lg:h-[122px] flex flex-col gap-[8px]">
                <div className="lg:w-[382px] w-[348px] h-[24px] lg:h-[40px] flex flex-row gap-[8px]">
                  <h1 className="w-[326px] h-[21px] text-[14px] text-black font-semibold ">
                    Programmimg
                  </h1>
                  <div className="w-[48px] h-[24px] flex flex-row items-center justify-center gap-[4px] ">
                    <Image
                      src={"/images/Star.svg"}
                      alt="image"
                      width={24}
                      height={24}
                      className="w-[24px] h-[24px] rounded-[1px]  "
                    />
                    <h1 className="w-[20px] h-[24px] text-[14px] text-black text-center font-semibold ">
                      5.0
                    </h1>
                  </div>
                </div>
                <h1 className="w-[382px]  h-[34px] lg:h-[34px] font-bold text-black text-left text-[24px]">
                  Introduction to Python
                </h1>
                <p className="lg:w-[382px] w-[326px] h-[72] lg:h-[48px] text-[16px] text-black text-left ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                </p>
                <div className="w-[382px] h-[40px] flex flex-row gap-[16px]">
                  <button className="w-[117px] h-[40px] rounded-[5px] border-[1px] border-black flex  gap-[8px] px-[20px] py-[8px]">
                    <h1 className="w-[77px] h-[24px] text-[15px] text-black">
                      Enroll Now
                    </h1>
                  </button>
                  <div className="w-[77px] h-[40px] rounded-[5px] border-[1px] border-black flex gap-[8px] px-[20px] py-[8px]">
                    <button className="w-[37px] h-[24px] font-medium text-[16px] text-black">
                      $400
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-[416px] w-[380px] h-[534px] gap-[24px] lg:h-[534px] rounded-[5px] flex flex-col lg:gap-[32px] bg-[#F7F7F7]">
            <Image
              src={"/images/Image3.svg"}
              alt="image"
              width={416}
              height={300}
              className="lg:w-[416px] w-[380px] h-[300px] "
            />
            <div className="lg:w-[416px] w-[380px] h-[234px] lg:h-[210px] flex flex-col gap-[24px] px-[16px] pb-[24px]">
              <div className="lg:w-[382px] w-[348px] h-[146px] lg:h-[122px] flex flex-col gap-[8px]">
                <div className="lg:w-[382px] w-[348px] h-[24px] lg:h-[40px] flex flex-row gap-[8px]">
                  <h1 className="w-[326px] h-[21px] text-[14px] text-black font-semibold ">
                    Business
                  </h1>
                  <div className="w-[48px] h-[24px] flex flex-row items-center justify-center gap-[4px] ">
                    <Image
                      src={"/images/Star.svg"}
                      alt="image"
                      width={24}
                      height={24}
                      className="w-[24px] h-[24px] rounded-[1px]  "
                    />
                    <h1 className="w-[20px] h-[24px] text-[14px] text-black text-center font-semibold ">
                      5.0
                    </h1>
                  </div>
                </div>
                <h1 className="w-[382px] h-[34px] lg:h-[34px] font-bold text-black text-left text-[24px]">
                  Data Analysis for Beginners
                </h1>
                <p className="lg:w-[382px] w-[326px] h-[72] lg:h-[48px] text-[16px] text-black text-left ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
                </p>
                <div className="w-[382px] h-[40px] flex flex-row gap-[16px]">
                  <button className="w-[117px] h-[40px] rounded-[5px] border-[1px] border-black flex  gap-[8px] px-[20px] py-[8px]">
                    <h1 className="w-[77px] h-[24px] text-[15px] text-black">
                      Enroll Now
                    </h1>
                  </button>
                  <div className="w-[77px] h-[40px] rounded-[5px] border-[1px] border-black flex gap-[8px] px-[20px] py-[8px]">
                    <button className="w-[37px] h-[24px] font-medium text-[16px] text-black">
                      $400
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[1312px] h-[534px]  hidden lg:flex flex-row-3 gap-[32px]">
          <div className="w-[416px] h-[534px] rounded-[5px] flex flex-col gap-[32px] bg-[#F7F7F7]">
            <Image
              src={"/images/Image4.svg"}
              alt="image"
              width={416}
              height={300}
            />
            <div className="w-[416px] h-[210px] flex flex-col gap-[24px] px-[16px] pb-[24px]">
              <div className="w-[382px] h-[122px] flex flex-col gap-[8px]">
                <div className="w-[382px] h-[40px] flex flex-row gap-[8px]">
                  <h1 className="w-[326px] h-[21px] text-[14px] text-black font-semibold ">
                    Art
                  </h1>
                  <div className="w-[48px] h-[24px] flex flex-row items-center justify-centern gap-[4px] ">
                    <Image
                      src={"/images/Star.svg"}
                      alt="image"
                      width={24}
                      height={24}
                      className="w-[24px] h-[24px] rounded-[1px]  "
                    />
                    <h1 className="w-[20px] h-[24px] text-[14px] text-black text-center font-semibold ">
                      5.0
                    </h1>
                  </div>
                </div>
                <h1 className="w-[382px] h-[34px] font-bold text-black text-left text-[24px]">
                  Art Specialization
                </h1>
                <p className="w-[382px] h-[48px] text-[16px] text-black text-left ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros.
                </p>
                <div className="w-[382px] h-[40px] flex flex-row gap-[16px]">
                  <button className="w-[117px] h-[40px] rounded-[5px] border-[1px] border-black flex  gap-[8px] px-[20px] py-[8px]">
                    <h1 className="w-[77px] h-[24px] text-[15px] text-black">
                      Enroll Now
                    </h1>
                  </button>
                  <div className="w-[77px] h-[40px] rounded-[5px] border-[1px] border-black flex gap-[8px] px-[20px] py-[8px]">
                    <button className="w-[37px] h-[24px] font-medium text-[16px] text-black">
                      $400
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[416px] h-[534px] rounded-[5px] flex flex-col gap-[32px] bg-[#F7F7F7]">
            <Image
              src={"/images/Image5.svg"}
              alt="image"
              width={416}
              height={300}
            />
            <div className="w-[416px] h-[210px] flex flex-col gap-[24px] px-[16px] pb-[24px]">
              <div className="w-[382px] h-[122px] flex flex-col gap-[8px]">
                <div className="w-[382px] h-[40px] flex flex-row gap-[8px]">
                  <h1 className="w-[326px] h-[21px] text-[14px] text-black font-semibold ">
                    Law
                  </h1>
                  <div className="w-[48px] h-[24px] flex flex-row items-center justify-center gap-[4px] ">
                    <Image
                      src={"/images/Star.svg"}
                      alt="image"
                      width={24}
                      height={24}
                      className="w-[24px] h-[24px] rounded-[1px]  "
                    />
                    <h1 className="w-[20px] h-[24px] text-[14px] text-black text-center font-semibold ">
                      5.0
                    </h1>
                  </div>
                </div>
                <h1 className="w-[382px] h-[34px] font-bold text-black text-left text-[24px]">
                  Rule of Law
                </h1>
                <p className="w-[382px] h-[48px] text-[16px] text-black text-left ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros.
                </p>
                <div className="w-[382px] h-[40px] flex flex-row gap-[16px]">
                  <button className="w-[117px] h-[40px] rounded-[5px] border-[1px] border-black flex  gap-[8px] px-[20px] py-[8px]">
                    <h1 className="w-[77px] h-[24px] text-[15px] text-black">
                      Enroll Now
                    </h1>
                  </button>
                  <div className="w-[77px] h-[40px] rounded-[5px] border-[1px] border-black flex gap-[8px] px-[20px] py-[8px]">
                    <button className="w-[37px] h-[24px] font-medium text-[16px] text-black">
                      $400
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[416px] h-[534px] rounded-[5px] flex flex-col gap-[32px] bg-[#F7F7F7]">
            <Image
              src={"/images/Image6.svg"}
              alt="image"
              width={416}
              height={300}
            />
            <div className="w-[416px] h-[210px] flex flex-col gap-[24px] px-[16px] pb-[24px]">
              <div className="w-[382px] h-[122px] flex flex-col gap-[8px]">
                <div className="w-[382px] h-[40px] flex flex-row gap-[8px]">
                  <h1 className="w-[326px] h-[21px] text-[14px] text-black font-semibold ">
                    Tech
                  </h1>
                  <div className="w-[48px] h-[24px] flex flex-row items-center justify-centern gap-[4px] ">
                    <Image
                      src={"/images/Star.svg"}
                      alt="image"
                      width={24}
                      height={24}
                      className="w-[24px] h-[24px] rounded-[1px]  "
                    />
                    <h1 className="w-[20px] h-[24px] text-[14px] text-black text-center font-semibold ">
                      5.0
                    </h1>
                  </div>
                </div>
                <h1 className="w-[382px] h-[34px] font-bold text-black text-left text-[24px]">
                  Introduction to webflow
                </h1>
                <p className="w-[382px] h-[48px] text-[16px] text-black text-left ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros.
                </p>
                <div className="w-[382px] h-[40px] flex flex-row gap-[16px]">
                  <button className="w-[117px] h-[40px] rounded-[5px] border-[1px] border-black flex  gap-[8px] px-[20px] py-[8px]">
                    <h1 className="w-[77px] h-[24px] text-[15px] text-black">
                      Enroll Now
                    </h1>
                  </button>
                  <div className="w-[77px] h-[40px] rounded-[5px] border-[1px] border-black flex gap-[8px] px-[20px] py-[8px]">
                    <button className="w-[37px] h-[24px] font-medium text-[16px] text-black">
                      $400
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="w-[152px] h-[40px] rounded-[5px] border-[1px] border-black flex gap-[8px] px-[16px] py-[8px]">
          <h1 className="w-[120px] h-[24px] text-[15px] text-black">View All Courses</h1>
        </button>
      </div>
    </div>
  );
};

export default Blog;