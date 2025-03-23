import React from "react";

const Section4 = () => {
  return (
    <>
      <section className="bg-[#191919] font-Poppins py-12 md:py-0">
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-10 px-5">
          <div className="lg:flex-grow md:w-1/2 flex flex-col md:items-start items-center text-center md:text-left md:ps-10 lg:ps-36">
            <h1 className="text-4xl sm:text-5xl extrafont-light text-white leading-tight mb-6">
              Lexo Z
            </h1>
            <p className="text-white text-2xl sm:text-3xl font-normal mb-6 sm:mb-10 leading-relaxed max-w-md">
              Accelerate into a New Era
            </p>
            <p className="text-white text-sm font-light mb-4 sm:mb-6 leading-relaxed max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </p>
            <p className="text-white text-sm font-light mb-4 sm:mb-6 leading-relaxed max-w-md">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip
            </p>
            <p className="text-white text-sm font-light mb-4 sm:mb-6 leading-relaxed max-w-md">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat
            </p>
            <div className="flex flex-wrap justify-center mt-8 sm:mt-10 md:justify-start gap-4 poppins font-[400px]">
              <button className="text-black bg-white transition-all duration-300 px-8 sm:px-12 py-3 sm:py-5 rounded-none text-lg sm:text-xl shadow-lg">
                Order Now
              </button>
              <button className="text-gray-200 bg-[#191919]  hover:bg-white hover:text-[#191919] transition-all duration-300 px-8 sm:px-12 py-3 sm:py-5 rounded-none text-lg sm:text-xl shadow-lg">
                Learn More
              </button>
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <img
              className="w-full h-auto"
              alt="EVSection2.2"
              src="/Features2.2Image.png"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Section4;
