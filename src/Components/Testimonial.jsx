import React from "react";
import logo from "./../assets/Logomark.png";
import logoname from "./../assets/Logotype.png";
import avatar from "./../assets/Avatar.png";

const Testimonial = () => {
  return (
    <>
      <div className="w-[375px] h-[558px] px-0 pt-[64px] pb-[64px] gap-[64px] bg-[#F9FAFB] sm:w-[1440px] sm:h-[552px] sm:pt-[96px] sm:pb-[96px]">
        <div>
          {/* Mobile View */}
          <div
            className="
          block sm:hidden
          w-full max-w-[375px] h-auto px-[16px] gap-[32px]
        "
          >
            Testimonial (Mobile)
          </div>

          {/* Desktop View */}
          <div
            className="
          hidden sm:block
          w-full max-w-[1280px] h-auto px-[32px] gap-[32px]
        "
          >
            <div className="w-[1216px] h-[360px] gap-[32px] ">
              <div className="w-[140.83px] h-40px] flex ml-[564px] mt-0">
                <div className="w-[24.17px] h-40px]">
                  <img src={logo} alt="" />
                </div>
                <div className="w-[105.13px] h-[22.7px] relative top-[10.32px] left-[10.98px]">
                  <img src={logoname} alt="" />
                </div>
              </div>
              <div className="w-[1216px] ml-[100px] h-[120px] font-medium text-[48px] leading-[60px] tracking-tight text-center text-[#101828]">
                We’ve been using Untitled to kick start every new project and
                can’t imagine working without it.
              </div>
              <div className="w-[1216px] h-[136px] gap-[16px]">
                <div className="w-[64px] h-[64px] rounded-full ml-[100px] bg-[#e0e0e0]">
                  <img src={avatar} alt="" />
                </div>
                <div className="w-[1216px] h-[56px] gap-1">
                  <div className="w-[1216px] h-[28px] font-semibold leading-7 text-[18px] text-center text-[#101828]">
                    Candice Wu
                  </div>
                  <div className="w-[1216px] h-[24px] font-normal leading-6 text-[16px] text-ceter text-[#475467]">
                    Product Manager, Sisyphus
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
