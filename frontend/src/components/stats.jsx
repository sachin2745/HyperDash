import React from "react";

const Stats = () => {
  return (
    <section className="text-white bg-[#191919] min-h-screen flex items-center justify-center font-Poppins py-10">
      <div className="container mx-auto px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div className="p-4">
            <small className="text-white font-normal text-sm sm:text-base">
              Max Power
            </small>
            <h2 className="title-font mt-6 sm:mt-10 font-normal text-4xl sm:text-5xl">
              1200+
            </h2>
            <p className="mt-2 text-3xl sm:text-4xl font-extralight text-white">
              hp
            </p>
          </div>
          <div className="p-4">
            <small className="text-white font-normal text-sm sm:text-base">
              EPA estimated range up to
            </small>
            <h2 className="title-font mt-6 sm:mt-10 font-normal text-4xl sm:text-5xl">
              516
            </h2>
            <p className="mt-2 text-3xl sm:text-4xl font-extralight text-white">
              mi
            </p>
          </div>
          <div className="p-4">
            <small className="text-white font-normal text-sm sm:text-base">
              Minutes to charge 200 miles
            </small>
            <h2 className="title-font mt-6 sm:mt-10 font-normal text-4xl sm:text-5xl">
              12
            </h2>
            <p className="mt-2 text-3xl sm:text-4xl font-extralight text-white">
              mins
            </p>
          </div>
          <div className="p-4">
            <small className="text-white font-normal text-sm sm:text-base">
              0-60 mph
            </small>
            <h2 className="title-font mt-6 sm:mt-10 font-normal text-4xl sm:text-5xl">
              &lt;2
            </h2>
            <p className="mt-2 text-3xl sm:text-4xl font-extralight text-white">
              sec
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
