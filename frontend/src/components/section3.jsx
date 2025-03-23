import React from "react";

const Section3 = () => {
  return (
    <>
      <section className="bg-[#191919] text-white py-12 md:py-20 font-Poppins">
        <div className="container mx-auto max-w-[87rem] px-5 flex flex-col items-center justify-center">
          <div className="relative w-full max-w-5xl text-center">
            <p className="absolute -top-6 md:-top-8 left-5 text-4xl md:text-7xl font-light">
              Air X
            </p>
            <img
              src="/Features2.png"
              alt="Features 2"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
        <div className="container mx-auto  px-5 relative w-full max-w-5xl text-center">
          <p className="mt-6 text-2xl md:text-4xl font-normal leading-tight text-start md:text-start">
            Accelerate into a New Era
          </p>
        </div>
      </section>
    </>
  );
};

export default Section3;
