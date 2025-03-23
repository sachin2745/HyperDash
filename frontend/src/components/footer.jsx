import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="text-white bg-[#191919] font-Poppins">
        <div>
          <div className="container max-w-[77rem] mx-auto py-8 px-4 sm:px-6 lg:px-0">
            <div className="flex flex-wrap justify-center md:justify-start items-center">
              <div className="w-full md:w-auto text-center md:text-left">
                <h3 className="text-3xl sm:text-4xl text-white font-[400]  mb-6">
                  Subscribe to our newsletter
                </h3>
                <div className="flex items-center border-b-2 w-full sm:w-80 border-white transition duration-300 pr-3 gap-2 bg-transparent h-[46px] overflow-hidden">
                  <input
                    type="text"
                    placeholder="Enter your email"
                    className="w-full h-full outline-none bg-transparent border-white placeholder-gray-400 text-sm"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlSpace="preserve"
                    id="right-arrow"
                    width="92"
                    height="92"
                    fill="#fff"
                    className="h-7 w-7"
                    x="0"
                    y="0"
                    version="1.1"
                    viewBox="0 0 92 92"
                  >
                    <path
                      id="XMLID_512_"
                      d="M82.8 48.8l-24.9 25c-.8.8-1.8 1.2-2.8 1.2-1 0-2-.4-2.8-1.2-1.6-1.6-1.6-4.1 0-5.7L70.4 50H12c-2.2 0-4-1.8-4-4s1.8-4 4-4h58.4L52.2 23.8c-1.6-1.6-1.6-4.1 0-5.7 1.6-1.6 4.1-1.6 5.7 0l24.9 25c1.6 1.6 1.6 4.2 0 5.7z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container px-4 sm:px-6 lg:px-0 max-w-[77rem] mx-auto py-12 sm:py-24">
          <div className="flex flex-wrap justify-between md:text-left text-center -mb-10">
            <div className="w-full md:w-auto mb-10 md:mb-0">
              <nav className="list-none">
                <li className="mb-6">
                  <a className="text-white font-normal text-lg sm:text-xl hover:underline underline-offset-4 cursor-pointer">
                    Air X
                  </a>
                </li>
                <li className="mb-6">
                  <a className="text-white font-normal text-lg sm:text-xl hover:underline underline-offset-4 cursor-pointer">
                    Lexo Z
                  </a>
                </li>
                <li className="mb-6">
                  <a className="text-white font-normal text-lg sm:text-xl hover:underline underline-offset-4 cursor-pointer">
                    Gravity 9
                  </a>
                </li>
              </nav>
            </div>

            <div className="w-full md:w-auto mb-10 md:mb-0">
              <nav className="list-none">
                <li className="mb-6">
                  <a className="text-white font-normal text-lg sm:text-xl hover:underline underline-offset-4 cursor-pointer">
                    Fleet
                  </a>
                </li>
                <li className="mb-6">
                  <a className="text-white font-normal text-lg sm:text-xl hover:underline underline-offset-4 cursor-pointer">
                    Company
                  </a>
                </li>
                <li className="mb-6">
                  <a className="text-white font-normal text-lg sm:text-xl hover:underline underline-offset-4 cursor-pointer">
                    Stories
                  </a>
                </li>
              </nav>
            </div>

            <div className="w-full md:w-auto mb-10 md:mb-0">
              <nav className="list-none">
                <li className="mb-6">
                  <a className="text-white text-md sm:text-lg font-normal hover:underline underline-offset-4 cursor-pointer">
                    Purchasing
                  </a>
                </li>
                <li className="mb-6">
                  <a className="text-white text-md sm:text-lg font-normal hover:underline underline-offset-4 cursor-pointer">
                    Charging
                  </a>
                </li>
                <li className="mb-6">
                  <a className="text-white text-md sm:text-lg font-normal hover:underline underline-offset-4 cursor-pointer">
                    Insurance
                  </a>
                </li>
                <li className="mb-6">
                  <a className="text-white text-md sm:text-lg font-normal hover:underline underline-offset-4 cursor-pointer">
                    Service
                  </a>
                </li>
              </nav>
            </div>

            <div className="w-full md:w-auto mb-10 md:mb-0">
              <nav className="list-none">
                <li className="mb-6">
                  <a className="text-white text-md sm:text-lg font-normal hover:underline underline-offset-4 cursor-pointer">
                    Spaces
                  </a>
                </li>
                <li className="mb-6">
                  <a className="text-white text-md sm:text-lg font-normal hover:underline underline-offset-4 cursor-pointer">
                    Investors
                  </a>
                </li>
                <li className="mb-6">
                  <a className="text-white text-md sm:text-lg font-normal hover:underline underline-offset-4 cursor-pointer">
                    Career
                  </a>
                </li>
                <li className="mb-6">
                  <a className="text-white text-md sm:text-lg font-normal hover:underline underline-offset-4 cursor-pointer">
                    Contact Us
                  </a>
                </li>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
