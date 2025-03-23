import React from "react";

const ModalAir = () => {
  return (
    <>
      <section className="bg-black pb-10">
        <div className="mx-auto  max-w-screen-xl h-[80%] sm:h-screen px-4 py-8 sm:px-6 lg:px-8 ">
          <div className="flex  flex-col-reverse lg:flex-row lg:gap-16 items-center justify-between">
            <div className="w-full lg:w-1/2">
              <img
                src="/Model-X-Specs-Hero-Desktop-LHD.png"
                className="h-full lg:h-screen w-full object-cover object-center "
                alt=""
              />
            </div>

            <div className="w-full lg:w-1/2 font-Poppins">
              <div className="max-w-screen-md lg:max-w-sm mx-auto">
                <h2 className="text-2xl md:text-3xl font-normal text-white lg:text-2xl mb-10">
                  Model Air X Specifications
                </h2>

                <div className="flex items-center justify-between mb-10">
                  <div className="text-white font-normal">
                    <p className="text-md mb-4">Range (EPA est.)</p>
                    <p className="text-md">Up to 300 miles</p>
                    <br />
                    <br />
                    <p className="text-md mb-4">Peak Power</p>
                    <p className="text-md">400 hp</p>
                    <br />
                    <br />
                    <p className="text-md mb-4">Towing</p>
                    <p className="text-md">2000 pounds</p>
                    <br />
                    <br />
                    <p className="text-md mb-4">Drag Coefficient</p>
                    <p className="text-md">0.28 cd</p>
                  </div>
                  <div className="text-white font-normal">
                    <p className="text-md mb-4">Acceleration</p>
                    <p className="text-md">4.5s 0-60 mph</p>
                    <br />
                    <br />
                    <p className="text-md mb-4">Wheels</p>
                    <p className="text-md">19’’ or 20’’</p>
                    <br />
                    <br />
                    <p className="text-md mb-4">Seating</p>
                    <p className="text-md">Up to 5</p>
                    <br />
                    <br />
                    <p className="text-md mb-4">Top Speed</p>
                    <p className="text-md">130 mph</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ModalAir;
