import React from "react";
import icon1 from "./../assets/Icon1.png";
import icon2 from "./../assets/icon2.png";
import icon3 from "./../assets/icon3.png";
import icon4 from "./../assets/icon4.png";
import icon5 from "./../assets/icon5.png";
import icon6 from "./../assets/icon6.png";
const Feature = () => {
  return (
    <>
      <div className="w-[375px] h-[1620px] px-0 pt-[64px] pb-[64px] gap-[48px] bg-white sm:w-[1440px] sm:h-[836px] sm:pt-[96px] sm:pb-[96px] sm:gap-[64px]">
        {/* Mobile View */}
        <div className="block sm:hidden">Mobile content</div>

        {/* Desktop View */}
        <div className="hidden sm:block">
          <div className="w-[1280px] h-[160px] pr-[32px] pl-[32px] gap-[32px] ml-[310px]">
            <div className="w-[1216px] h-[160px] gap-[48px]">
              <div className="w-[768px] h-[160px] gap-[20px]">
                <div className="w-[768px] h-[80px] gap-3">
                  <div
                    className="w-[768px] h-[24px] text-[#e63f3a] font-semibold font-sans
                  text-[16px] leading-6 text-center"
                  >
                    Features
                  </div>
                  <div className="w-[768px] h-[44px] font-semibold text-[36px] leading-[44px] text-center text-[#101828]">
                    Analytics that feels like it’s from the future
                  </div>
                </div>
                <div
                  className="w-[768px] h-[80px] text-xl font-sans font-normal text-[20px]
                 leading-[30px] text-center text-[#475467]"
                >
                  Powerful, self-serve product and growth analytics to help you
                  convert, engage, and retain more users. Trusted by over 4,000
                  startups.
                </div>
              </div>
            </div>
          </div>
          <div className="w-[1280px] h-[420px] pr-[32px] pl-[32px] gap-[64px]">
            <div className="w-[1216px] h-[178px] gap-[32px] flex mt-4 ml-[50px]">
              <div className="w-[384px] h-auto gap-[20px] flex flex-col items-center bg-modern text-primary">
                {/* Featured Icon */}
                <div className="w-[48px] h-[48px] bg-white border border-[#EAECF0] rounded-lg shadow-[0px_1px_2px_rgba(16,24,40,0.05)] flex items-center justify-center">
                  <div className="w-[24px] h-[24px] top-[12px] left-[12px]">
                    <img src={icon1} alt="" />
                  </div>
                </div>

                {/* Supporting Text */}
                <div className="w-full h-auto text-center gap-[8px]">
                  <div
                    className="w-[384px] h-[30px] font-semibold font-sans text-[20px] leading-[30px]
                  text-center text-[#101828]"
                  >
                    Share team inboxes
                  </div>
                  <div
                    className="w-[384px] h-[72px] font-normal font-sans leading-6
                  text-[16px] text-center text-[#475467]"
                  >
                    Whether you have a team of 2 or 200, our shared team inboxes
                    keep everyone on the same page and in the loop.
                  </div>
                </div>

                {/* Button */}
                <button className="w-[116px] h-[24px] gap-2 px-4 py-1 bg-primary text-white rounded-md text-sm font-medium hover:bg-primary-dark">
                  <div className="w-[20px] h-[20px]"></div>
                  <div className="w-[88px] h-[24px] text-[#6941C6] font-semibold leading-[24px] text-[16px]">
                    Learn more
                  </div>
                  <div className="w-[20px] h-[20px]"></div>
                </button>
              </div>
              <div className="w-[384px] h-auto gap-[20px] flex flex-col items-center bg-modern text-primary">
                {/* Featured Icon */}
                <div className="w-[48px] h-[48px] bg-white border border-[#EAECF0] rounded-lg shadow-[0px_1px_2px_rgba(16,24,40,0.05)] flex items-center justify-center">
                  <div className="w-[24px] h-[24px] top-[12px] left-[12px]">
                    <img src={icon2} alt="" />
                  </div>
                </div>

                {/* Supporting Text */}
                <div className="w-full h-auto text-center gap-[8px]">
                  <div
                    className="w-[384px] h-[30px] font-semibold font-sans text-[20px] leading-[30px]
                  text-center text-[#101828]"
                  >
                    Deliver instant answers
                  </div>
                  <div
                    className="w-[384px] h-[72px] font-normal font-sans leading-6
                  text-[16px] text-center text-[#475467]"
                  >
                    An all-in-one customer service platform that helps you
                    balance everything your customers need to be happy.
                  </div>
                </div>

                {/* Button */}
                <button className="w-[116px] h-[24px] gap-2 px-4 py-1 bg-primary text-white rounded-md text-sm font-medium hover:bg-primary-dark">
                  <div className="w-[20px] h-[20px]"></div>
                  <div className="w-[88px] h-[24px] text-[#6941C6] font-semibold leading-[24px] text-[16px]">
                    Learn more
                  </div>
                  <div className="w-[20px] h-[20px]"></div>
                </button>
              </div>
              <div className="w-[384px] h-auto gap-[20px] flex flex-col items-center bg-modern text-primary">
                {/* Featured Icon */}
                <div className="w-[48px] h-[48px] bg-white border border-[#EAECF0] rounded-lg shadow-[0px_1px_2px_rgba(16,24,40,0.05)] flex items-center justify-center">
                  <div className="w-[24px] h-[24px] top-[12px] left-[12px]">
                    <img src={icon3} alt="" />
                  </div>
                </div>

                {/* Supporting Text */}
                <div className="w-full h-auto text-center gap-[8px]">
                  <div
                    className="w-[384px] h-[30px] font-semibold font-sans text-[20px] leading-[30px]
                  text-center text-[#101828]"
                  >
                    Manage your team with reports
                  </div>
                  <div
                    className="w-[384px] h-[72px] font-normal font-sans leading-6
                  text-[16px] text-center text-[#475467]"
                  >
                    Measure what matters with Untitled’s easy-to-use reports.
                    You can filter, export, and drilldown on the data in a
                    couple clicks.
                  </div>
                </div>

                {/* Button */}
                <button className="w-[116px] h-[24px] gap-2 px-4 py-1 bg-primary text-white rounded-md text-sm font-medium hover:bg-primary-dark">
                  <div className="w-[20px] h-[20px]"></div>
                  <div className="w-[88px] h-[24px] text-[#6941C6] font-semibold leading-[24px] text-[16px]">
                    Learn more
                  </div>
                  <div className="w-[20px] h-[20px]"></div>
                </button>
              </div>
            </div>

            <div className="w-[1216px] h-[178px] gap-[32px] flex mt-[55px] ml-[50px]">
              <div className="w-[384px] h-auto gap-[20px] flex flex-col items-center bg-modern text-primary">
                {/* Featured Icon */}
                <div className="w-[48px] h-[48px] bg-white border border-[#EAECF0] rounded-lg shadow-[0px_1px_2px_rgba(16,24,40,0.05)] flex items-center justify-center">
                  <div className="w-[24px] h-[24px] top-[12px] left-[12px]">
                    <img src={icon4} alt="" />
                  </div>
                </div>

                {/* Supporting Text */}
                <div className="w-full h-auto text-center gap-[8px]">
                  <div
                    className="w-[384px] h-[30px] font-semibold font-sans text-[20px] leading-[30px]
                  text-center text-[#101828]"
                  >
                    Connect with customers
                  </div>
                  <div
                    className="w-[384px] h-[72px] font-normal font-sans leading-6
                  text-[16px] text-center text-[#475467]"
                  >
                    Solve a problem or close a sale in real-time with chat. If
                    no one is available, customers are seamlessly routed to
                    email without confusion.
                  </div>
                </div>

                {/* Button */}
                <button className="w-[116px] h-[24px] gap-2 px-4 py-1 bg-primary text-white rounded-md text-sm font-medium hover:bg-primary-dark">
                  <div className="w-[20px] h-[20px]"></div>
                  <div className="w-[88px] h-[24px] text-[#6941C6] font-semibold leading-[24px] text-[16px]">
                    Learn more
                  </div>
                  <div className="w-[20px] h-[20px]"></div>
                </button>
              </div>
              <div className="w-[384px] h-auto gap-[20px] flex flex-col items-center bg-modern text-primary">
                {/* Featured Icon */}
                <div className="w-[48px] h-[48px] bg-white border border-[#EAECF0] rounded-lg shadow-[0px_1px_2px_rgba(16,24,40,0.05)] flex items-center justify-center">
                  <div className="w-[24px] h-[24px] top-[12px] left-[12px]">
                    <img src={icon5} alt="" />
                  </div>
                </div>

                {/* Supporting Text */}
                <div className="w-full h-auto text-center gap-[8px]">
                  <div
                    className="w-[384px] h-[30px] font-semibold font-sans text-[20px] leading-[30px]
                  text-center text-[#101828]"
                  >
                    Connect the tools you already use{" "}
                  </div>
                  <div
                    className="w-[384px] h-[72px] font-normal font-sans leading-6
                  text-[16px] text-center text-[#475467]"
                  >
                    Explore 100+ integrations that make your day-to-day workflow
                    more efficient and familiar. Plus, our extensive developer
                    tools.
                  </div>
                </div>

                {/* Button */}
                <button className="w-[116px] h-[24px] gap-2 px-4 py-1 bg-primary text-white rounded-md text-sm font-medium hover:bg-primary-dark">
                  <div className="w-[20px] h-[20px]"></div>
                  <div className="w-[88px] h-[24px] text-[#6941C6] font-semibold leading-[24px] text-[16px]">
                    Learn more
                  </div>
                  <div className="w-[20px] h-[20px]"></div>
                </button>
              </div>
              <div className="w-[384px] h-auto gap-[20px] flex flex-col items-center bg-modern text-primary">
                {/* Featured Icon */}
                <div className="w-[48px] h-[48px] bg-white border border-[#EAECF0] rounded-lg shadow-[0px_1px_2px_rgba(16,24,40,0.05)] flex items-center justify-center">
                  <div className="w-[24px] h-[24px] top-[12px] left-[12px]">
                    <img src={icon6} alt="" />
                  </div>
                </div>

                {/* Supporting Text */}
                <div className="w-full h-auto text-center gap-[8px]">
                  <div
                    className="w-[384px] h-[30px] font-semibold font-sans text-[20px] leading-[30px]
                  text-center text-[#101828]"
                  >
                    Our people make the difference
                  </div>
                  <div
                    className="w-[384px] h-[72px] font-normal font-sans leading-6
                  text-[16px] text-center text-[#475467]"
                  >
                    We’re an extension of your customer service team, and all of
                    our resources are free. Chat to our friendly team 24/7 when
                    you need help.
                  </div>
                </div>

                {/* Button */}
                <button className="w-[116px] h-[24px] gap-2 px-4 py-1 bg-primary text-white rounded-md text-sm font-medium hover:bg-primary-dark">
                  <div className="w-[20px] h-[20px]"></div>
                  <div className="w-[88px] h-[24px] text-[#6941C6] font-semibold leading-[24px] text-[16px]">
                    Learn more
                  </div>
                  <div className="w-[20px] h-[20px]"></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature;
