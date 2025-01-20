import React from "react";
import zysklogo from "./../assets/zysklogo.png";
import profile from "./../assets/profile.png";
import badge from "./../assets/badge.png";
import actions from "./../assets/Actions.png";
import image from "./../assets/heroimg.png";

const Header = () => {
  return (
    <>
      <div className="w-[375px] h-[860px] gap-0 bg-white sm:w-[1440px] sm:h-[1100px]">
        {/* Dropdown Navbar option */}
        <div className="w-[375px] h-[72px] gap-0 border-0 border-b-[1px] border-solid border-[#F2F4F7] sm:w-[1440px] sm:h-[80px]">
          <div className="w-[375px] h-[72px] gap-0 sm:w-[1440px] sm:h-[80px]">
            <div className="w-[375px] h-[40px] px-[16px] py-0 gap-0 justify-between sm:w-[1280px] sm:px-[32px] sm:justify-between">
              {/* Mobile view div */}
              <div className="sm:hidden flex w-full h-full items-center justify-between">
                <span>Mobile View Content</span>
              </div>

              {/* Desktop view div */}
              <div className="hidden sm:flex w-full h-full items-center justify-between">
                {/* logo and content */}
                <div className="w-[528.61px] h-[32px] gap[40px] flex p-3 justify-between">
                  <div className="w-[84.61px] h-[32px]">
                    <img src={zysklogo} alt="" />
                  </div>

                  <div className="w-[404px] h-[32px] gap-[32px] flex justify-between">
                    <div className="w-auto h-auto  items-center gap-[8px] flex text-lg text-gray-500">
                      Home
                    </div>
                    <div className="w-auto h-auto py-[4px] px-0 gap-0 items-center text-lg text-gray-500">
                      Products
                    </div>
                    <div className="w-auto h-auto py-[4px] items-center text-lg text-gray-500">
                      Resources
                    </div>
                    <div className="w-auto h-auto py-[4px] items-center text-lg text-gray-500 gap-[8px]">
                      Pricing
                    </div>
                  </div>
                </div>
                {/* Navigation actions */}

                <div className="w-[40px] h-[40px] gap-[0px] p-3">
                  <div className="w-auto h-auto">
                    <div class="w-[40px] h-[40px] gap-0 border border-white">
                      <img
                        src={profile}
                        alt=""
                        className="w-auto h-auto rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* section */}
        <div className="w-full h-auto gap-[64px] sm:w-[1440px] sm:h-[1020px] sm:pt-[96px] pt-[64px] pb-[64px] ">
          {/* Desktop View */}
          <div className="hidden sm:block w-[1440px] h-[1020px]">
            <div className="w-[1280px] h-[300px] gap-[32px] pt-0 pr-[32px] pb-0 pl-[32px]">
              <div className="w-[1216px] h-[300px] gap-[48px]">
                <div className="w-[1024px] h-[204px] gap-[24px] flex-col justify-center items-center">
                  <div className="w-[1024px] h-auto gap-[16px] ">
                    <div
                      class="w-auto h-auto px-[10px] py-[4px] gap-[12px] 
            rounded-tl-[16px] rounded-tr-none rounded-br-none rounded-bl-none 
            border-t border-transparent ml-[435px] mb-3"
                    >
                      <img src={badge} alt="" />
                    </div>

                    <div
                      className="w-[1024px] h-[72px] font-sans font-semibold text-[50px]
                     leading-[72px] text-center text-[#101828] ml-[100px]"
                    >
                      Beautiful analytics to grow smarter
                    </div>
                  </div>
                  <div
                    className="w-[768px] h-[60px] text-[#475467] text-[21.5px] font-sans font-normal
                   leading-[30px] text-center ml-[230px] mt-6 mb-4"
                  >
                    Powerful, self-serve product and growth analytics to help
                    you convert, engage, and retain more users. Trusted by over
                    4,000 startups.
                  </div>
                </div>
                <div className="w-[225px] h-[48px] gap-[12px] ml-[520px] mt-[44px]">
                  <img src={actions} alt="" />
                </div>
              </div>
            </div>

            <div className="w-[1280px] h-[560px] pt-0 pr-[32px] pb-0 pl-[32px] gap-[32px]">
              <div className="w-[1216px] h-[560px]">
                <div
                  class="w-[1216px] h-[810px] gap-0 mt-8 ml-[50px] 
            rounded-tl-[12px] rounded-tr-none rounded-br-none rounded-bl-none 
            border-t-[8px] border-r-0 border-b-0 border-l-0 border-[#101828] tracking-tight"
                >
                  <div className="w-[1216px] h-[688px] rounded-xl">
                    <img src={image} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile View */}
          <div className="block sm:hidden w-full h-auto">Mobile Content</div>
        </div>
      </div>
    </>
  );
};

export default Header;
