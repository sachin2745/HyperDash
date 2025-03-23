import React from "react";

const Section9 = () => {
  return (
    <>
      <section className="font-Poppins bg-[#191919]">
        <div
          className="container mx-auto min-h-[56vh] sm:min-h-screen bg-center bg-cover  px-6 sm:px-0"
          style={{ backgroundImage: 'url("/AirXAd.png")' }}
        >
          <div className="w-full md:w-1/2 flex flex-col items-start text-center md:text-left px-4 md:ps-36">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-normal text-white mb-4 md:mb-6 pt-16 md:pt-72">
              Air X
            </h2>
            <p className="text-lg sm:text-3xl md:text-4xl font-medium text-white leading-tight mb-4 md:mb-6">
              Accelerate into a New Era
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-4 mt-4 md:mt-5">
              <button className="text-[#191919] bg-white transition-all duration-300 px-6 md:px-10 py-3 md:py-4 text-sm sm:text-base md:text-lg shadow-lg">
                Order Now
              </button>
              <button className="text-white border border-white hover:bg-[#191919] hover:text-white transition-all duration-300 px-6 md:px-10 py-3 md:py-4 text-sm sm:text-base md:text-lg">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section9;
