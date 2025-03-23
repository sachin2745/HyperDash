import React from "react";

const Section8 = () => {
  return (
    <>
      <section className="bg-primary py-10 font-Poppins">
        <div className="container  mx-auto max-w-[77rem] px-5 sm:px-0">
          <div className="flex flex-col md:flex-row items-center justify-center gap-20">
            <div className="w-full md:w-1/3 text-center">
              <img
                src="/img1.png"
                alt="Features 1"
                className="w-full h-[310px] object-cover rounded-none shadow-lg hover:scale-105 transform-gpu transition-all duration-300"
              />
              <p className="mt-4 text-2xl text-white font-normal">
                Impeccable Design
              </p>
            </div>
            <div className="w-full md:w-1/3 text-center">
              <img
                src="/PerformanceImg.png"
                alt="Features 2"
                className="w-full h-full object-cover rounded-none shadow-lg hover:scale-105 transition-all duration-300"
              />
              <p className="mt-4 text-2xl text-white font-normal">
                Elevated Performance
              </p>
            </div>
            <div className="w-full md:w-1/3 text-center">
              <img
                src="/InteriorsImg.png"
                alt="Features 3"
                className="w-full h-full object-cover rounded-none shadow-lg hover:scale-105 transition-all duration-300"
              />
              <p className="mt-4 text-2xl text-white font-normal">
                Great Interiors
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary py-10 font-Poppins">
        <div className="container mx-auto max-w-[77rem] px-5 sm:px-0">
          <div className="flex flex-col md:flex-row items-start justify-center gap-10 sm:gap-40">
            <div className="w-full md:w-[50%] text-center">
              <img
                src="/Story2Img.png"
                alt="Features 1"
                className="w-full aspect-square object-cover rounded-none shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl"
              />
            </div>

            <div className="w-full md:w-[60%] text-start flex flex-col gap-10">
              <img
                src="/AirXimg.png"
                alt="Features 3"
                className="w-full  object-cover rounded-none shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl"
              />
              <h3 className="text-3xl text-white font-normal">
                Drive to a sustainable future
              </h3>
              <p className="max-w-lg text-lg text-white font-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary py-10 font-Poppins">
        <div className="container mx-auto max-w-[77rem] px-4">
          <div className="flex flex-col md:flex-row-reverse items-center md:items-start justify-center gap-10 md:gap-40">
            <div className="w-full md:w-[50%] text-center">
              <img
                src="/imgRightLarge.png"
                alt="Features 1"
                className="w-full h-auto object-cover rounded-none shadow-lg hover:-translate-y-3 transition duration-300 ease-in-out"
              />
            </div>

            <div className="w-full md:w-[60%] text-start flex flex-col gap-10">
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-10">
                <img
                  src="/DesignImg.png"
                  alt="Features 3"
                  className="w-full h-full aspect-square object-cover rounded-none shadow-lg hover:-translate-y-3 transition duration-300 ease-in-out"
                />
                <img
                  src="/img2.png"
                  alt="Features 3"
                  className="w-full h-full aspect-square object-cover rounded-none shadow-lg hover:-translate-y-3 transition duration-300 ease-in-out"
                />
                <img
                  src="/img3.png"
                  alt="Features 3"
                  className="w-full h-full aspect-square object-cover rounded-none shadow-lg hover:-translate-y-3 transition duration-300 ease-in-out"
                />
                <img
                  src="/img4.png"
                  alt="Features 3"
                  className="w-full h-full aspect-square object-cover rounded-none shadow-lg hover:-translate-y-3 transition duration-300 ease-in-out"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Section8;
