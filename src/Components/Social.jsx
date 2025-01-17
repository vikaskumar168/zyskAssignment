import React from "react";
import logo1 from "./../assets/logo1.png";
import logo2 from "./../assets/logo2.png";
import logo3 from "./../assets/logo3.png";
import logo4 from "./../assets/logo4.png";
import logo5 from "./../assets/logo5.png";
import logo6 from "./../assets/logo6.png";

const Social = () => {
  return (
    <>
      <div className="w-[375px] h-[260px] px-0 pt-0 pb-[64px] gap-0 bg-white sm:w-[1440px] sm:h-[296px] sm:pt-[96px] sm:pb-[96px] sm:px-0">
        <div className="w-full h-[196px] px-[16px] gap-[32px] sm:w-[1280px] sm:h-[104px] sm:px-[32px] sm:gap-[32px]">
          {/* Text */}
          <div
            className="text-[#475467] pl-[240px] sm:w-[1216px] sm:h-[24px] sm:text-center sm:text-[16px] sm:font-medium sm:leading-[24px] sm:text-underline-position-[from-font] sm:text-decoration-skip-ink-none w-[343px] h-[24px]
           text-center text-[16px] font-medium leading-[24px] text-underline-position-[from-font] text-decoration-skip-ink-none"
          >
            Join 4,000+ companies already growing
          </div>

          {/* Logo */}
          <div className="w-[1216px] h-[48px] justify-between gap-0 sm:w-[343px] sm:h-[140px] ">
            <div className="w-[1216px] h-[48px] justify-between sm:w-[343px] sm:h-[140px] ">
              {/* Desktop view (1 row, 6 images) */}
              <div className="hidden sm:flex justify-between pl-[162px] mt-7">
                <img
                  src={logo1}
                  alt="Image 1"
                  className="w-[170px] h-[48px] gap-[22px] mr-4"
                />
                <img
                  src={logo2}
                  alt="Image 2"
                  className="w-[167px] h-[48px] gap-[22px] mr-4"
                />
                <img
                  src={logo3}
                  alt="Image 3"
                  className="w-[198px] h-[48px] gap-[22px] mr-4"
                />
                <img
                  src={logo4}
                  alt="Image 4"
                  className="w-[166px] h-[48px] gap-[22px] mr-4"
                />
                <img
                  src={logo5}
                  alt="Image 5"
                  className="w-[197px] h-[48px] gap-[22px] mr-4"
                />
                <img
                  src={logo6}
                  alt="Image 6"
                  className="w-[182px] h-[48px] gap-[22px] mr-4"
                />
              </div>

              {/* Mobile view (3 rows, each containing 2 images) */}
              <div className="sm:hidden space-y-4">
                <div className="flex justify-between">
                  <img src={logo1} alt="Image 1" className="w-1/2" />
                  <img src={logo2} alt="Image 2" className="w-1/2" />
                </div>
                <div className="flex justify-between">
                  <img src={logo3} alt="Image 3" className="w-1/2" />
                  <img src={logo4} alt="Image 4" className="w-1/2" />
                </div>
                <div className="flex justify-between">
                  <img src={logo5} alt="Image 5" className="w-1/2" />
                  <img src={logo6} alt="Image 6" className="w-1/2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Social;
