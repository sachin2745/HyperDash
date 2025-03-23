import React from 'react'

const Section5 = () => {
  return (
    <>
     <section className="font-Poppins hidden sm:block">
      <div
        className="container mx-auto min-h-screen bg-[url('/Features2.1.png')] bg-cover bg-center flex items-center px-5"
      >
        <div
          className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left md:ps-10 lg:ps-36"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-[#191919] mb-4 sm:mb-6">
            Air X
          </h2>
          <p
            className="text-2xl sm:text-3xl lg:text-4xl font-normal text-[#191919] leading-tight mb-4 sm:mb-6"
          >
            Accelerate into a New Era
          </p>
          <p
            className="text-base sm:text-lg text-[#191919] font-medium leading-relaxed max-w-sm mb-4 sm:mb-6"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4 sm:mt-5">
            <button
              className="text-white bg-[#191919] transition-all duration-300 px-8 sm:px-10 py-3 sm:py-4 rounded-none text-base sm:text-lg shadow-lg hover:bg-gray-800"
            >
              Order Now
            </button>
            <button
              className="text-[#191919] bg-white hover:bg-[#191919] hover:text-white transition-all duration-300 px-8 sm:px-10 py-3 sm:py-4 rounded-none text-base sm:text-lg shadow-lg"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>

    <section className="font-Poppins block sm:hidden">
      <div className="container mx-auto min-h-[60vh] px-5 py-10 flex flex-col md:flex-row items-center justify-center">
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left md:ps-10 lg:ps-36">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-[#191919] mb-4 sm:mb-6">
            Air X
          </h2>
          <p className="text-2xl sm:text-3xl lg:text-4xl font-normal text-[#191919] leading-tight mb-4 sm:mb-6">
            Accelerate into a New Era
          </p>
          <p className="text-base sm:text-lg text-[#191919] font-medium leading-relaxed max-w-sm mb-4 sm:mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4 sm:mt-5">
            <button className="text-white bg-[#191919] transition-all duration-300 px-8 sm:px-10 py-3 sm:py-4 rounded-none text-base sm:text-lg shadow-lg hover:bg-gray-800">
              Order Now
            </button>
            <button className="text-[#191919] bg-white hover:bg-[#191919] hover:text-white transition-all duration-300 px-8 sm:px-10 py-3 sm:py-4 rounded-none text-base sm:text-lg shadow-lg">
              Learn More
            </button>
          </div>
        </div>
    
        <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
          <img src="/Features2.1.png" alt="Features2.1" className="w-full max-w-md lg:max-w-lg object-cover object-center" />
        </div>
      </div>
    </section>
    </>
  )
}

export default Section5